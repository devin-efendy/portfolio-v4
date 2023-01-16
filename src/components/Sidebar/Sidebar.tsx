import { Box, Flex, Icon, Image, Link, theme } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IconType } from 'react-icons'

const StyledLink = styled(Link)`
  :hover {
    text-decoration: none;
    color: ${theme.colors.gray[100]};
  }
`

const iconSize = 4

function SidebarLink({
  href,
  active,
  children,
  onClick,
}: {
  href: string
  active: boolean
  children: string
  onClick: () => void
}) {
  return (
    <StyledLink
      id={`${href}-sidebar-link`}
      color={active ? 'gray.100' : 'gray.400'}
      fontSize='lg'
      fontWeight={300}
      mb={4}
      onClick={onClick}
    >
      {children}
    </StyledLink>
  )
}

function SocialLink({
  icon,
  text,
  href,
}: {
  icon: IconType
  text: string
  href: string
}) {
  return (
    <StyledLink href={href} target='_blank' color='gray.400'>
      <Flex alignItems='center' fontSize={14}>
        <Icon as={icon} w={iconSize} h={iconSize} mr={2} />
        {text}
      </Flex>
    </StyledLink>
  )
}

function Sidebar({ sections }: { sections: string[] }) {
  const [activeLink, setActiveLink] = useState<string>('about')

  useEffect(() => {
    sections.forEach((section) => {
      const htmlElement = document.getElementById(section)

      if (!htmlElement) {
        return
      }

      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7,
      }

      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setActiveLink(entries[0].target.id)
        }
      }, options)

      observer.observe(htmlElement)
    })
  }, [sections])

  return (
    <Box
      id='sidebar'
      position='fixed'
      w='300px'
      h='100vh'
      py={2}
      px={12}
      bg='sidebar.bg'
    >
      <Box width='100%' my={12} mb={14}>
        <Image
          margin='auto'
          alt='Devin Efendy profile image'
          boxSize='70px'
          src='/favicon.png'
        />
      </Box>
      <Flex id='section-links-group' flexDir='column' mb={14}>
        {sections.map((section) => {
          return (
            <SidebarLink
              key={section}
              href={section}
              active={section === activeLink}
              onClick={() => {
                const targetSection = document.querySelector(`#${section}`)
                targetSection?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
                setActiveLink(section)
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </SidebarLink>
          )
        })}
      </Flex>
      <Flex id='social-links-group' flexDir='column' gap='4'>
        <SocialLink
          href='https://github.com/devin-efendy'
          icon={FaGithub}
          text='@devin-efendy'
        />
        <SocialLink
          href='https://www.linkedin.com/in/devinefendy/'
          icon={FaLinkedinIn}
          text='/in/devinefendy'
        />
        <SocialLink
          href='mailto:devinefendy.dev@gmail.com'
          icon={MdEmail}
          text='devinefendy.dev@gmail.com'
        />
      </Flex>
    </Box>
  )
}

export default Sidebar

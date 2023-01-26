import { Box, Flex, Icon, Image, Link, theme } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IconType } from 'react-icons'
import { motion } from 'framer-motion'
import styled from 'styled-components'

// @reference: https://codepen.io/fromwireframes/pen/arMrYp
const MenuIcon = styled.div`
  position: fixed;
  top: 40px;
  left: 40px;

  width: 50px;
  height: 50px;

  cursor: pointer;

  z-index: 9;

  .menu-icon--checkbox {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
    z-index: 4;
    -webkit-touch-callout: none;
    position: absolute;
    opacity: 0;
  }

  div {
    margin: auto;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 40px;
    height: 20px;
  }

  span {
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    background-color: white;
    border-radius: 1px;
    transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);

    &:first-of-type {
      top: 0;
    }
    &:last-of-type {
      width: 26px;
      bottom: 0;
    }
  }

  &.active,
  .menu-icon--checkbox:checked + div {
    span {
      &:first-of-type {
        transform: rotate(45deg);
        top: 9px;
      }
      &:last-of-type {
        transform: rotate(-45deg);
        width: 100%;
        bottom: 9px;
      }
    }
  }

  @media (min-width: 1200px) {
    display: none;
  }
`

const rootVariants = {
  onRender: {
    transition: { staggerChildren: 0.15, delayChildren: 1.1 },
  },
}

const childVariants = {
  onRender: {
    opacity: 1,
  },
}

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
    <Link
      id={`${href}-sidebar-link`}
      color={active ? 'gray.100' : 'gray.400'}
      fontSize='lg'
      fontWeight={300}
      mb={4}
      onClick={onClick}
      _hover={{
        textDecor: 'none',
        color: 'white',
      }}
    >
      <motion.div initial={{ opacity: 0 }} variants={childVariants}>
        {children}
      </motion.div>
    </Link>
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
    <Link
      href={href}
      target='_blank'
      color='gray.400'
      _hover={{
        textDecor: 'none',
        color: 'white',
      }}
    >
      <motion.div initial={{ opacity: 0 }} variants={childVariants}>
        <Flex alignItems='center' fontSize={14}>
          <Icon as={icon} w={iconSize} h={iconSize} mr={2} />
          {text}
        </Flex>
      </motion.div>
    </Link>
  )
}

function Sidebar({ sections }: { sections: string[] }) {
  const [activeLink, setActiveLink] = useState<string>('about')
  const [isOpen, setIsOpen] = useState<boolean>(false)

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
    <>
      <MenuIcon
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <input className='menu-icon--checkbox' type='checkbox' />
        <div>
          <span />
          <span />
        </div>
      </MenuIcon>

      <Box
        borderRight={{ sm: `1px solid ${theme.colors.gray[700]}`, xl: 'none' }}
        visibility={{ sm: isOpen ? 'visible' : 'hidden', xl: 'visible' }}
        opacity={{ sm: isOpen ? 1 : 0, xl: 1 }}
        id='sidebar'
        position='fixed'
        transition='opacity 400ms, visibility 400ms'
        w='300px'
        h='100vh'
        py={16}
        px={12}
        bg='section.bg'
        zIndex={3}
      >
        <motion.div variants={rootVariants} animate='onRender'>
          <motion.div initial={{ opacity: 0 }} variants={childVariants}>
            <Box width='100%' mb={14}>
              <Image
                margin='auto'
                alt='Devin Efendy profile image'
                boxSize='70px'
                src='/favicon.png'
              />
            </Box>
          </motion.div>
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
        </motion.div>
      </Box>
    </>
  )
}

export default Sidebar

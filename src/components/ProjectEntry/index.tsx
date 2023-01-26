import { Box, Flex, Heading, Icon, Link, Text, theme } from '@chakra-ui/react'
import styled from 'styled-components'
import { IProject } from '../../types'
import { FaGithubAlt } from 'react-icons/fa'
import { VscLinkExternal } from 'react-icons/vsc'
import techIcons from '../TechIcons'
import IconSet from '../IconSet'

const ProjectContainer = styled.div`
  width: 300px;
  height: 330px;

  border-radius: 12px;
  position: relative;

  cursor: default;

  &:before {
    border-radius: inherit;

    background: linear-gradient(
      135deg,
      #dc00ff,
      #f6ad55 33%,
      ${theme.colors.gray[500]} 66%
    );

    transition: background-position 400ms ease, transform 400ms ease;

    background-position: 100%;
    background-size: 500%;
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
  }

  &:hover {
    :before {
      background-position: 0%;
    }
  }

  z-index: 1;
`

const ProjectContent = styled(Box)`
  border-radius: inherit;
  background: #191919;
  display: block;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  position: absolute;
  margin: 1px;
  z-index: 2;

  .link-icons-group > a {
    opacity: 0;
    transform: translateY(30px);

    &:hover {
      transform: translateY(-4px) !important;
    }
  }

  &:hover {
    .link-icons-group > a {
      opacity: 1;
      transform: translateY(0);
    }

    h2 {
      color: ${theme.colors.gray[100]};
    }

    p {
      color: ${theme.colors.gray[100]};
    }

    .tech-icons svg {
      color: ${theme.colors.gray[100]};
    }
  }
`

const cardContentColor = 'gray.400'

const ProjectEntry = ({ entry }: { entry: IProject }) => {
  const { projectName, description, demoUrl, githubUrl, technologies } = entry
  const icons = technologies.map((tech) => techIcons[tech])

  return (
    <ProjectContainer>
      <ProjectContent>
        <Flex flexDir='column' h='100%' p={8}>
          <Heading
            fontSize={24}
            color={cardContentColor}
            transition='color 200ms'
          >
            {projectName}
          </Heading>

          <Box className='tech-icons' my={6}>
            <IconSet
              icons={icons}
              fontSize={24}
              gap={3}
              color={cardContentColor}
            />
          </Box>

          <Text
            as='p'
            color={cardContentColor}
            noOfLines={5}
            transition='color 200ms'
          >
            {description}
          </Text>

          <Flex marginTop='auto' alignItems='center' justifyContent='flex-end'>
            <Flex
              className='link-icons-group'
              color='gray.500'
              alignItems='center'
              gap={4}
            >
              {githubUrl && (
                <Link href={githubUrl} target='_blank'>
                  <Icon
                    color={`${theme.colors.pink[500]}`}
                    boxSize={8}
                    as={FaGithubAlt}
                    aria-label='Go to GitHub repository'
                  />
                </Link>
              )}
              {demoUrl && (
                <Link href={demoUrl} target='_blank'>
                  <Icon
                    color='#f6ad55'
                    boxSize={7}
                    as={VscLinkExternal}
                    aria-label='Go to Demo page'
                  />
                </Link>
              )}
            </Flex>
          </Flex>
        </Flex>
      </ProjectContent>
    </ProjectContainer>
  )
}

export default ProjectEntry

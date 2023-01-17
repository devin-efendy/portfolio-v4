import {
  Box,
  Flex,
  Heading,
  IconButton,
  Link,
  Text,
  theme,
} from '@chakra-ui/react'
import styled from 'styled-components'
import { IProject } from '../../types'
import { FaGithubAlt } from 'react-icons/fa'
import { VscLinkExternal } from 'react-icons/vsc'

const ProjectContainer = styled.div`
  --default-bg: ${theme.colors.gray[600]};

  width: 300px;
  height: 300px;

  border-radius: 12px;
  background: ${theme.colors.gray[600]};
  position: relative;

  cursor: default;

  &:before {
    border-radius: inherit;

    background: linear-gradient(
      135deg,
      #dc00ff,
      #f6ad55 33%,
      ${theme.colors.gray[600]} 66%
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

    h2 {
      color: ${theme.colors.gray[200]};
    }

    p {
      color: ${theme.colors.gray[300]};
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
  }

  &:hover {
    .link-icons-group > a {
      opacity: 1;
      transform: translateY(0);
    }

    h2 {
      color: ${theme.colors.gray[200]};
    }

    p {
      color: ${theme.colors.gray[300]};
    }
  }

  .link-icons-group > a {
    &:hover {
      transform: translateY(-4px) !important;
    }
  }
`

const ProjectEntry = ({ entry }: { entry: IProject }) => {
  const { projectName, description, demoUrl, githubUrl } = entry
  const cardContentColor = 'gray.500'

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
          <Text
            as='p'
            color={cardContentColor}
            mt={5}
            noOfLines={5}
            transition='color 200ms'
          >
            {description}
          </Text>

          <Flex
            className='link-icons-group'
            gap={4}
            alignSelf='flex-end'
            marginTop='auto'
            color='gray.500'
            alignItems='center'
          >
            {githubUrl && (
              <Link href={githubUrl} target='_blank'>
                <IconButton
                  _hover={{
                    color: theme.colors.pink[500],
                  }}
                  boxSize={8}
                  variant='none'
                  as={FaGithubAlt}
                  aria-label='Go to GitHub repository'
                />
              </Link>
            )}
            {demoUrl && (
              <Link href={demoUrl} target='_blank'>
                <IconButton
                  _hover={{
                    color: '#f6ad55',
                  }}
                  boxSize={7}
                  variant='none'
                  as={VscLinkExternal}
                  aria-label='Go to Demo page'
                />
              </Link>
            )}
          </Flex>
        </Flex>
      </ProjectContent>
    </ProjectContainer>
  )
}

export default ProjectEntry

import { Box, Container, Heading, SimpleGrid, Text, Image, Link, Stack, Tag, useColorModeValue } from '@chakra-ui/react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    title: 'Cloud-Native Task Manager',
    description: 'A full-stack task management application built with React, Node.js, and deployed on AWS using containerization and microservices architecture.',
    image: '/images/task-manager.png',
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'MongoDB'],
    githubUrl: 'https://github.com/chaitanya1731/task-manager',
    liveUrl: 'https://task-manager.example.com'
  },
  {
    title: 'Real-time Chat Application',
    description: 'A real-time chat application using WebSocket technology, featuring user authentication, private messaging, and group chat capabilities.',
    image: '/images/chat-app.png',
    technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
    githubUrl: 'https://github.com/chaitanya1731/chat-app'
  },
  {
    title: 'DevOps Automation Tools',
    description: 'A collection of automation scripts and tools for streamlining CI/CD pipelines, infrastructure provisioning, and monitoring.',
    image: '/images/devops-tools.png',
    technologies: ['Python', 'Terraform', 'Jenkins', 'Kubernetes'],
    githubUrl: 'https://github.com/chaitanya1731/devops-tools'
  }
]

export default function Projects() {
  return (
    <Box 
      minH="calc(100vh - 124px)"
      pt={16} 
      pb={16} 
      bg={useColorModeValue('gray.50', 'gray.900')}
      display="flex"
      alignItems="center"
    >
      <Container maxW="container.xl">
        <Heading
          as="h1"
          size="2xl"
          textAlign="center"
          mb={4}
          bgGradient="linear(to-r, blue.400, purple.500)"
          bgClip="text"
        >
          Featured Projects
        </Heading>
        <Text
          fontSize="xl"
          textAlign="center"
          mb={12}
          color={useColorModeValue('gray.600', 'gray.300')}
        >
          A selection of my recent work and personal projects
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {projects.map((project) => (
            <Box
              key={project.title}
              bg={useColorModeValue('white', 'gray.800')}
              borderRadius="lg"
              overflow="hidden"
              boxShadow="xl"
              transition="all 0.3s ease"
              _hover={{ transform: 'translateY(-5px)' }}
            >
              <Image
                src={project.image}
                alt={project.title}
                height="200px"
                width="100%"
                objectFit="cover"
              />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>
                  {project.title}
                </Heading>
                <Text
                  color={useColorModeValue('gray.600', 'gray.300')}
                  mb={4}
                  fontSize="sm"
                >
                  {project.description}
                </Text>
                <Stack direction="row" spacing={2} mb={4} flexWrap="wrap">
                  {project.technologies.map((tech) => (
                    <Tag
                      key={tech}
                      size="sm"
                      colorScheme="blue"
                      borderRadius="full"
                    >
                      {tech}
                    </Tag>
                  ))}
                </Stack>
                <Stack direction="row" spacing={4}>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    display="inline-flex"
                    alignItems="center"
                    color="blue.400"
                    _hover={{ color: 'blue.500' }}
                  >
                    <Box as={FaGithub} mr={1} />
                    GitHub
                  </Link>
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      display="inline-flex"
                      alignItems="center"
                      color="blue.400"
                      _hover={{ color: 'blue.500' }}
                    >
                      <Box as={FaExternalLinkAlt} mr={1} />
                      Live Demo
                    </Link>
                  )}
                </Stack>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
} 
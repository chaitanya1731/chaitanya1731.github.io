import { Box, Container, Heading, SimpleGrid, Text, Image, Stack, Badge, Link, useColorModeValue } from '@chakra-ui/react'
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
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with React and Chakra UI showcasing my projects and skills.',
    image: '/project1.jpg',
    technologies: ['React', 'TypeScript', 'Chakra UI'],
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://your-portfolio.com'
  },
  {
    title: 'Cloud Project',
    description: 'A cloud-based application demonstrating scalability and modern architecture.',
    image: '/project2.jpg',
    technologies: ['AWS', 'Node.js', 'Docker'],
    githubUrl: 'https://github.com/yourusername/cloud-project'
  },
  // Add more projects as needed
]

export default function Projects() {
  return (
    <Box
      id="projects"
      py={20}
      bg={useColorModeValue('white', 'gray.800')}
    >
      <Container maxW="container.xl">
        <Heading
          mb={10}
          textAlign="center"
          bgGradient="linear(to-r, blue.400, purple.500)"
          bgClip="text"
          data-aos="fade-up"
        >
          Featured Projects
        </Heading>

        <Text
          fontSize="xl"
          textAlign="center"
          mb={10}
          color={useColorModeValue('gray.600', 'gray.300')}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Here are some of my recent projects
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={10}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {projects.map((project) => (
            <Box
              key={project.title}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              bg={useColorModeValue('white', 'gray.700')}
              shadow="md"
              _hover={{
                transform: 'translateY(-5px)',
                transition: 'all 0.3s ease',
                shadow: 'lg'
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                height="200px"
                width="100%"
                objectFit="cover"
              />

              <Box p={6}>
                <Stack spacing={3}>
                  <Heading size="md">{project.title}</Heading>
                  <Text color={useColorModeValue('gray.600', 'gray.300')}>
                    {project.description}
                  </Text>

                  <Stack direction="row" spacing={2}>
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        colorScheme="blue"
                        variant="subtle"
                        px={2}
                        py={1}
                        borderRadius="full"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </Stack>

                  <Stack direction="row" spacing={4} pt={2}>
                    <Link
                      href={project.githubUrl}
                      isExternal
                      color={useColorModeValue('blue.500', 'blue.300')}
                      display="flex"
                      alignItems="center"
                    >
                      <Box as={FaGithub} mr={2} />
                      GitHub
                    </Link>
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        isExternal
                        color={useColorModeValue('blue.500', 'blue.300')}
                        display="flex"
                        alignItems="center"
                      >
                        <Box as={FaExternalLinkAlt} mr={2} />
                        Live Demo
                      </Link>
                    )}
                  </Stack>
                </Stack>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
} 
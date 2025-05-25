import { Box, Container, Heading, SimpleGrid, Text, Progress, Stack, useColorModeValue } from '@chakra-ui/react'

interface Skill {
  name: string
  level: number
  color: string
}

const skills: Skill[] = [
  { name: 'React.js', level: 90, color: 'blue.400' },
  { name: 'Node.js', level: 85, color: 'green.400' },
  { name: 'Python', level: 88, color: 'yellow.400' },
  { name: 'TypeScript', level: 85, color: 'blue.500' },
  { name: 'AWS', level: 80, color: 'orange.400' },
  { name: 'Docker', level: 82, color: 'blue.300' },
  { name: 'MongoDB', level: 85, color: 'green.500' },
  { name: 'GraphQL', level: 78, color: 'pink.400' },
]

export default function Skills() {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')

  return (
    <Box id="skills" py={20} bg={bgColor}>
      <Container maxW="container.xl">
        <Heading
          mb={10}
          textAlign="center"
          bgGradient="linear(to-r, blue.400, purple.500)"
          bgClip="text"
          data-aos="fade-up"
        >
          Technical Skills
        </Heading>

        <Text
          fontSize="xl"
          textAlign="center"
          mb={10}
          color={useColorModeValue('gray.600', 'gray.300')}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Here are some of the technologies I work with
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={10}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {skills.map((skill, index) => (
            <Box
              key={skill.name}
              p={5}
              shadow="md"
              borderWidth="1px"
              borderRadius="lg"
              bg={cardBg}
              _hover={{
                transform: 'translateY(-5px)',
                transition: 'all 0.3s ease',
              }}
            >
              <Stack spacing={4}>
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                  color={useColorModeValue('gray.700', 'white')}
                >
                  {skill.name}
                </Text>
                <Progress
                  value={skill.level}
                  colorScheme={skill.color.split('.')[0]}
                  borderRadius="full"
                  size="sm"
                  hasStripe
                  isAnimated
                />
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
} 
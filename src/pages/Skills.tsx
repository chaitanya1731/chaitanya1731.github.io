import { Box, Container, Heading, VStack, Text, useColorModeValue, SimpleGrid, Icon, Wrap, WrapItem, Tag, Flex } from '@chakra-ui/react'
import { FaCode, FaCloud, FaRobot, FaTools, FaDatabase } from 'react-icons/fa'

interface SkillDomainProps {
  title: string
  skills: string[]
  icon: any
}

function SkillDomain({ title, skills, icon }: SkillDomainProps) {
  const tagBg = useColorModeValue('rgba(49, 130, 206, 0.1)', 'rgba(99, 179, 237, 0.1)')
  const tagColor = useColorModeValue('blue.600', 'blue.200')
  const hoverBg = useColorModeValue('rgba(49, 130, 206, 0.2)', 'rgba(99, 179, 237, 0.2)')

  return (
    <Box
      p={8}
      bg={useColorModeValue('white', 'gray.800')}
      borderRadius="xl"
      boxShadow="lg"
      transition="all 0.3s ease"
      _hover={{ 
        transform: 'translateY(-5px)',
        boxShadow: '2xl',
        borderColor: 'blue.200',
      }}
      position="relative"
      overflow="hidden"
      border="1px solid"
      borderColor={useColorModeValue('gray.100', 'gray.700')}
    >
      <Box
        position="absolute"
        top={0}
        right={0}
        width="150px"
        height="150px"
        opacity={0.03}
        transform="translate(30%, -30%)"
      >
        <Icon as={icon} w="100%" h="100%" />
      </Box>
      
      <Flex align="center" mb={6}>
        <Box
          p={2}
          bg={useColorModeValue('blue.50', 'blue.900')}
          borderRadius="lg"
          mr={4}
        >
          <Icon as={icon} w={6} h={6} color={useColorModeValue('blue.500', 'blue.200')} />
        </Box>
        <Heading 
          size="lg"
          bgGradient="linear(to-r, blue.400, purple.500)"
          bgClip="text"
          letterSpacing="tight"
          fontWeight="bold"
        >
          {title}
        </Heading>
      </Flex>

      <Wrap spacing={3}>
        {skills.map((skill) => (
          <WrapItem key={skill}>
            <Tag
              size="md"
              bg={tagBg}
              color={tagColor}
              borderRadius="full"
              px={4}
              py={1.5}
              fontWeight="medium"
              fontSize="sm"
              _hover={{
                bg: hoverBg,
                transform: 'translateY(-2px)',
                boxShadow: 'sm'
              }}
              transition="all 0.2s"
              cursor="default"
              border="1px solid"
              borderColor={useColorModeValue('blue.100', 'blue.700')}
            >
              {skill}
            </Tag>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  )
}

export function Skills() {
  const domains = [
    {
      title: "Cloud Native / DevOps",
      icon: FaCloud,
      skills: [
        "SaaS",
        "IaaS",
        "PaaS",
        "Kubernetes",
        "Infrastructure Provisioning",
        "k8s Operators",
        "Docker",
        "Podman",
        "CI/CD",
        "Networking",
        "Terraform",
        "Ansible",
        "Jenkins",
        "Microservices",
        "Cloud Security",
        "AWS",
        "Azure",
        "GCP",
        "RedHat OpenShift",
        "Distributed Storage"
      ]
    },
    {
      title: "AI and Machine Learning",
      icon: FaRobot,
      skills: [
        "AI/ML on k8s",
        "GenAI",
        "RAG",
        "vLLM",
        "OpenShift AI",
        "LLMs training and inference",
        "Hugging Face",
      ]
    },
    {
      title: "Programming Languages",
      icon: FaCode,
      skills: ["C", "C++", "Go", "Python", "JavaScript", "C#", "SQL", "MongoDB", "Java"]
    },
    {
      title: "Web Development",
      icon: FaCode,
      skills: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "JavaScript",
        "ReactJs",
        "KnockoutJs",
        "MustacheJs",
        "Kendo UI",
        "Ionic",
        "NodeJs",
        "ASP.NET",
        "Spring Boot",
        "Spring MVC",
        "Hibernate",
        "Servlet"
      ]
    },
    {
      title: "Database",
      icon: FaDatabase,
      skills: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Oracle 11g",
        "OLAP",
        "Vector Databases"
      ]
    },
    {
      title: "Other Technologies",
      icon: FaTools,
      skills: [
        "Linux",
        "Shell",
        "Git",
        "REST Api",
        "YAML",
        "Agile/Scrum",
        "PyTorch",
        "Jupyter",
        "Fullstack",
        "Distributed-CI",
        "GitHub Actions",
      ]
    }
  ]

  return (
    <Box 
      minH="calc(100vh - 124px)"
      pt={16} 
      pb={16} 
      bg={useColorModeValue('gray.50', 'gray.900')}
    >
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <Box textAlign="center">
            <Heading
              as="h1"
              size="2xl"
              mb={4}
              bgGradient="linear(to-r, blue.400, purple.500)"
              bgClip="text"
              letterSpacing="tight"
            >
              Technical Skills
            </Heading>
            <Text
              fontSize="xl"
              color={useColorModeValue('gray.600', 'gray.300')}
            >
              Here are some of the technologies I work with
            </Text>
          </Box>

          <SimpleGrid 
            columns={{ base: 1, md: 2 }} 
            spacing={8}
            w="full"
          >
            {domains.map((domain) => (
              <SkillDomain 
                key={domain.title} 
                title={domain.title} 
                skills={domain.skills}
                icon={domain.icon}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

export default Skills; 
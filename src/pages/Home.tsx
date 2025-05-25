import { Box, Container, Heading, Text, VStack, HStack, Icon, Link, Image, useColorModeValue, Flex } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionFlex = motion(Flex)

export function Home() {
  return (
    <>
      <SEO />
      <Box
        minH="calc(100vh - 124px)"
        display="flex"
        alignItems="center"
        bg={useColorModeValue('gray.50', 'gray.900')}
        overflow="hidden"
      >
        <Container maxW="container.xl" py={8}>
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            gap={{ base: 8, lg: 12 }}
            alignItems="center"
            justifyContent="space-between"
          >
            {/* Left Side - Image */}
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              flex={{ base: '1', lg: '0.8' }}
            >
              <Box
                borderRadius="xl"
                overflow="hidden"
                boxShadow="2xl"
                maxW={{ base: "320px", lg: "400px" }}
                mx="auto"
              >
                <Image
                  src="/images/ck.jpg"
                  alt="Chaitanya Kulkarni"
                  width="100%"
                  height="auto"
                  objectFit="cover"
                  transition="transform 0.3s ease"
                  _hover={{ transform: "scale(1.02)" }}
                />
              </Box>
            </MotionBox>

            {/* Right Side - Content */}
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              flex="1"
            >
              <VStack align="start" spacing={6}>
                <Box>
                  <MotionHeading
                    as="h1"
                    size="2xl"
                    bgGradient="linear(to-r, blue.400, purple.500)"
                    bgClip="text"
                    letterSpacing="tight"
                    mb={4}
                    lineHeight={1}
                    py={2}
                  >
                    Hi, I'm Chaitanya Kulkarni
                  </MotionHeading>
                  <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <HStack
                      spacing={3}
                      divider={
                        <Box
                          as="span"
                          height={5}
                          borderLeft="2px"
                          borderColor={useColorModeValue('blue.400', 'blue.300')}
                          opacity={0.5}
                        />
                      }
                      flexWrap="wrap"
                      gap={2}
                    >
                      <Text
                        fontSize="xl"
                        bgGradient="linear(to-r, cyan.400, blue.400)"
                        bgClip="text"
                        fontWeight="bold"
                      >
                        Sr. Software Engineer
                      </Text>
                      <Text
                        fontSize="xl"
                        bgGradient="linear(to-r, blue.400, purple.400)"
                        bgClip="text"
                        fontWeight="bold"
                      >
                        Open-Source Contributor
                      </Text>
                      <Text
                        fontSize="xl"
                        bgGradient="linear(to-r, purple.400, pink.400)"
                        bgClip="text"
                        fontWeight="bold"
                      >
                        DevOps
                      </Text>
                      <Text
                        fontSize="xl"
                        bgGradient="linear(to-r, blue.400, teal.400)"
                        bgClip="text"
                        fontWeight="bold"
                      >
                        Kubernetes
                      </Text>
                      <Text
                        fontSize="xl"
                        bgGradient="linear(to-r, purple.400, red.400)"
                        bgClip="text"
                        fontWeight="bold"
                      >
                        AIOps
                      </Text>
                      <Text
                        fontSize="xl"
                        bgGradient="linear(to-r, teal.400, blue.400)"
                        bgClip="text"
                        fontWeight="bold"
                      >
                        MLOps
                      </Text>
                      <Text
                        fontSize="xl"
                        bgGradient="linear(to-r, pink.400, purple.400)"
                        bgClip="text"
                        fontWeight="bold"
                      >
                        Automation
                      </Text>
                    </HStack>
                  </MotionBox>
                </Box>

                <VStack align="start" spacing={4} w="full">
                  <Text
                    fontSize="lg"
                    color={useColorModeValue('gray.700', 'gray.200')}
                  >
                    🚀 Engineering AI at Scale
                    <Text fontSize="lg" mt={2}>
                      Enabling modern AI workloads to run seamlessly across distributed, cloud-native systems.
                    </Text>
                  </Text>

                  <Box>
                    <Text
                      fontSize="lg"
                      color={useColorModeValue('gray.700', 'gray.200')}
                      mb={2}
                    >
                      🔧 With 6+ years of Cloud and AI experience, I specialize in:
                    </Text>
                    <VStack align="start" pl={4} spacing={1}>
                      <Text fontSize="lg">🌐 Distributed Systems</Text>
                      <Text fontSize="lg">☁️ Cloud-Native Platforms</Text>
                      <Text fontSize="lg">📦 Containerization & k8s Orchestration</Text>
                      <Text fontSize="lg">🧠 Enterprise AI Enablement</Text>
                      <Text fontSize="lg">🔁 CI/CD & Automation</Text>
                    </VStack>
                  </Box>

                  <Text
                    fontSize="lg"
                    color={useColorModeValue('gray.700', 'gray.200')}
                    borderLeft="4px"
                    borderLeftColor="blue.400"
                    pl={4}
                    py={2}
                  >
                    💡 Passionate about solving complex problems and delivering intuitive, high-impact software experiences.
                  </Text>

                  {/* Social Links */}
                  <Box pt={4} w="full">
                    <Heading
                      size="lg"
                      mb={4}
                      display="flex"
                      alignItems="center"
                      gap={2}
                    >
                      <Text
                        bgGradient="linear(to-r, blue.400, purple.500)"
                        bgClip="text"
                      >
                        Let's Connect
                      </Text>
                      <Text>🤝</Text>
                    </Heading>
                    <HStack spacing={6}>
                      <Link href="https://github.com/chaitanya1731" target="_blank" rel="noopener noreferrer">
                        <Icon
                          as={FaGithub}
                          w={8}
                          h={8}
                          color={useColorModeValue('gray.700', 'gray.300')}
                          _hover={{ color: 'blue.400', transform: 'scale(1.1)' }}
                          transition="all 0.3s ease"
                        />
                      </Link>
                      <Link href="https://www.linkedin.com/in/iamchaitanyakulkarni/" target="_blank" rel="noopener noreferrer">
                        <Icon
                          as={FaLinkedin}
                          w={8}
                          h={8}
                          color={useColorModeValue('gray.700', 'gray.300')}
                          _hover={{ color: 'blue.400', transform: 'scale(1.1)' }}
                          transition="all 0.3s ease"
                        />
                      </Link>
                      <Link href="https://x.com/_twck" target="_blank" rel="noopener noreferrer">
                        <Icon
                          as={FaTwitter}
                          w={8}
                          h={8}
                          color={useColorModeValue('gray.700', 'gray.300')}
                          _hover={{ color: 'blue.400', transform: 'scale(1.1)' }}
                          transition="all 0.3s ease"
                        />
                      </Link>
                      <Link href="https://instagram.com/iamchaitanyakulkarni" target="_blank" rel="noopener noreferrer">
                        <Icon
                          as={FaInstagram}
                          w={8}
                          h={8}
                          color={useColorModeValue('gray.700', 'gray.300')}
                          _hover={{ color: 'blue.400', transform: 'scale(1.1)' }}
                          transition="all 0.3s ease"
                        />
                      </Link>
                      <Link href="https://facebook.com/iamchaitanyakulkarni" target="_blank" rel="noopener noreferrer">
                        <Icon
                          as={FaFacebook}
                          w={8}
                          h={8}
                          color={useColorModeValue('gray.700', 'gray.300')}
                          _hover={{ color: 'blue.400', transform: 'scale(1.1)' }}
                          transition="all 0.3s ease"
                        />
                      </Link>
                      <Link href="mailto:iamchaitanyakulkarni@gmail.com">
                        <Icon
                          as={FaEnvelope}
                          w={8}
                          h={8}
                          color={useColorModeValue('gray.700', 'gray.300')}
                          _hover={{ color: 'blue.400', transform: 'scale(1.1)' }}
                          transition="all 0.3s ease"
                        />
                      </Link>
                    </HStack>
                  </Box>
                </VStack>
              </VStack>
            </MotionBox>
          </Flex>
        </Container>
      </Box>
    </>
  )
}

export default Home; 
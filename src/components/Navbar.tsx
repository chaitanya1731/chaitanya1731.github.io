import { Box, Flex, Button, Stack, useColorMode, Container, IconButton, Text } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom'

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={999}
      bg="gray.800"
      borderBottom="1px"
      borderColor="whiteAlpha.200"
    >
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Box 
            fontSize="2xl" 
            fontWeight="bold"
            cursor="pointer"
            color="white"
            display="flex"
            alignItems="center"
          >
            <RouterLink to="/">
              <Text 
                bgGradient="linear(to-r, blue.400, purple.500)"
                bgClip="text"
                fontSize="3xl"
                fontWeight="bold"
                lineHeight="1"
                display="flex"
                alignItems="center"
              >
                ☁️
              </Text>
            </RouterLink>
          </Box>

          <Flex alignItems="center" gap={4}>
            <Stack direction="row" spacing={8}>
              <RouterLink to="/">
                <Button variant="ghost" color="white" _hover={{ bg: 'whiteAlpha.200' }}>
                  Home
                </Button>
              </RouterLink>
              <RouterLink to="/skills">
                <Button variant="ghost" color="white" _hover={{ bg: 'whiteAlpha.200' }}>
                  Skills
                </Button>
              </RouterLink>
            </Stack>

            <Button 
              onClick={toggleColorMode}
              variant="ghost"
              color="white"
              _hover={{ bg: 'whiteAlpha.200' }}
            >
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
} 
import { Box, Container, Text } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box 
      py={4} 
      bg="gray.800"
      color="white"
      borderTop="1px"
      borderColor="whiteAlpha.200"
      height="60px"
      display="flex"
      alignItems="center"
    >
      <Container maxW="container.xl" textAlign="center">
        <Text>© {new Date().getFullYear()} Chaitanya Kulkarni. All rights reserved</Text>
      </Container>
    </Box>
  )
} 
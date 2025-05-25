import { motion } from 'framer-motion'
import { Box } from '@chakra-ui/react'

interface PageTransitionProps {
  children: React.ReactNode
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.61, 1, 0.88, 1],
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1],
    }
  }
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <Box
      as={motion.div}
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      style={{ width: '100%' }}
    >
      {children}
    </Box>
  )
} 
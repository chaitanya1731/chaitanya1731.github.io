import { Box } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Skills } from './pages/Skills'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'

function ScrollContainer({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const navigate = useNavigate()
  const scrollRef = useRef<HTMLDivElement>(null)
  const lastScrollTop = useRef(0)
  const routes = ['/', '/skills']
  const isNavigating = useRef(false)

  useEffect(() => {
    const handleScroll = async (e: WheelEvent) => {
      if (!scrollRef.current || isNavigating.current) return

      const { scrollTop, clientHeight, scrollHeight } = scrollRef.current
      const currentIndex = routes.indexOf(location.pathname)
      
      const isScrollingDown = e.deltaY > 0
      const isScrollingUp = e.deltaY < 0

      // Only trigger page navigation if:
      // 1. We're at the extremes (top/bottom)
      // 2. The scroll momentum is significant (prevent accidental triggers)
      // 3. There's a valid page to navigate to
      const SCROLL_THRESHOLD = 50 // Minimum scroll momentum needed
      const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight
      const isAtTop = scrollTop === 0
      const hasSignificantMomentum = Math.abs(e.deltaY) > SCROLL_THRESHOLD

      // Allow normal scrolling if we're not at the edges
      if (!isAtBottom && !isAtTop) {
        return
      }

      if (isScrollingDown && isAtBottom && currentIndex < routes.length - 1 && hasSignificantMomentum) {
        e.preventDefault()
        isNavigating.current = true
        navigate(routes[currentIndex + 1])
        // Reset navigation lock after animation completes
        setTimeout(() => {
          isNavigating.current = false
        }, 1000)
      } else if (isScrollingUp && isAtTop && currentIndex > 0 && hasSignificantMomentum) {
        e.preventDefault()
        isNavigating.current = true
        navigate(routes[currentIndex - 1])
        setTimeout(() => {
          isNavigating.current = false
        }, 1000)
      }

      lastScrollTop.current = scrollTop
    }

    const currentRef = scrollRef.current
    if (currentRef) {
      currentRef.addEventListener('wheel', handleScroll, { passive: false })
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('wheel', handleScroll)
      }
    }
  }, [location, navigate])

  return (
    <Box
      ref={scrollRef}
      as="main"
      flex="1"
      mt="64px"
      mb="60px"
      overflowY="auto"
      position="relative"
      maxH="calc(100vh - 124px)"
      h="auto"
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
          background: 'rgba(0, 0, 0, 0.1)',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '24px',
        },
        scrollBehavior: 'smooth',
        overscrollBehavior: 'contain',
      }}
    >
      <AnimatePresence mode="wait">
        {children}
      </AnimatePresence>
    </Box>
  )
}

function AppContent() {
  const location = useLocation()
  
  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
      bg="gray.900"
      position="relative"
      overflow="hidden"
    >
      <Navbar />
      <ScrollContainer>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <PageTransition>
              <Home />
            </PageTransition>
          } />
          <Route path="/skills" element={
            <PageTransition>
              <Skills />
            </PageTransition>
          } />
        </Routes>
      </ScrollContainer>
      <Box
        position="fixed"
        bottom={0}
        left={0}
        right={0}
        zIndex={999}
      >
        <Footer />
      </Box>
    </Box>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  )
}

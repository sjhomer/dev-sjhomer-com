import * as React from "react"
import {useLayoutEffect} from "react"
import Box from '@mui/material/Box'
import BottomNavigation from "./BottomNavigation"
import FooterSeparator from "./FooterSepartor"
import Container from "@mui/material/Container"
import {useTheme} from "@mui/material/styles"

interface FooterProps {
  copyright?: string,
}

export default function Footer({copyright}: FooterProps) {
  const [display, setDisplay] = React.useState(false)
  const theme = useTheme()

  useLayoutEffect(() => {
    setTimeout(() => {
      setDisplay(true)
    }, 10)
  }, [])

  return (
    <Box sx={{
      position: 'fixed',
      bottom: 0,
      zIndex: 2,
      width: '100vw',
      transform: display ? 'translateY(0)' : 'translateY(400px)',
      transition: 'all 1s ease-out',
    }}>
      <FooterSeparator/>
      <Box sx={{
        zIndex: 2,
      }}>
        <BottomNavigation/>
        <Container maxWidth={'xl'}>
          <Box
            sx={{
              position: 'absolute',
              right: '20%',
              bottom: '10px',
              color: "#000",
              fontSize: 14,
            }}
          >
            SJ Homer © {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
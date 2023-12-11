import * as React from 'react'
import {Container} from '@mui/material'
import Footer from './Footer/Footer'
import {useTheme} from '@mui/material/styles'
import Box from '@mui/material/Box'

// import {colors} from "@src/theme"

interface LayoutProps {
  children: JSX.Element,
}

export default function Layout(props: LayoutProps) {
  const theme = useTheme()

  // @ts-ignore
  const {children} = props

  const rootPath = `/`
  let isRootPath = false
  try {
    isRootPath = window.location.pathname === rootPath
  } catch (e) {
    // ignore non-browser environments
  }

  return (
    <Box
      className="layout" data-is-root-path={isRootPath} sx={{
      mb: {
        xs: theme.spacing(15),
        sm: theme.spacing(20),
        md: theme.spacing(25),
      },
      pt: theme.spacing(5),
      mx: 'auto',
      maxWidth: {
        xs: '90vw',
        md: '100%',
      },
    }}
    >
      <main>
        <Container maxWidth="lg">
          {children}
        </Container>
      </main>
      <Footer />
    </Box>
  )
}

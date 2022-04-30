import * as React from 'react'
import Head, {HeadProps} from './Head'
import {Container} from '@mui/material'
import Footer from './Footer/Footer'
import {useTheme} from '@mui/material/styles'
import Box from '@mui/material/Box'

// import {colors} from "@src/theme"

interface LayoutProps extends HeadProps {
  children: JSX.Element,
}

export default function Layout(props: LayoutProps) {
  const theme = useTheme()

  // @ts-ignore
  const {children, ...headProps} = props

  const rootPath = `/`
  let isRootPath = false
  try {
    isRootPath = window.location.pathname === rootPath
  } catch (e) {
    // ignore non-browser environments
  }

  return (
    <Box className="layout" data-is-root-path={isRootPath} sx={{
      mb: {
        xs: theme.spacing(15),
        sm: theme.spacing(20),
        md: theme.spacing(25)
      },
      pt: theme.spacing(5),
    }}>
      <Head {...headProps}/>
      {/*<Header/>*/}
      <main>
        <Container maxWidth="lg">
          {children}
        </Container>
      </main>
      <Footer/>
    </Box>
  )
}
import * as React from "react"
import Head, {HeadProps} from "./Head"
import Header from "./Header"
import Footer from "./Footer"
import {Container} from "@mui/material"

// import {colors} from "@src/theme"

interface LayoutProps extends HeadProps {
  children: JSX.Element,
}

export default function Layout(props: LayoutProps) {
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
    <div className="layout" data-is-root-path={isRootPath} style={{
      // backgroundColor: colors.backgroundBlue
    }}>
      <Head {...headProps}/>
      <Header/>
      <main>
        <Container maxWidth="lg">
          {children}
        </Container>
      </main>
      <Footer/>
    </div>
  )
}
import * as React from "react"
import Head, {HeadProps} from "./Head"
import Header from "./Header"
import Footer from "./Footer"

// import {colors} from "@src/theme"

interface LayoutProps extends HeadProps {
  children: JSX.Element,
}

export default function Layout(props: LayoutProps) {
  // @ts-ignore
  const {children, ...headProps} = props

  const rootPath = `/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="layout" data-is-root-path={isRootPath} style={{
      // backgroundColor: colors.backgroundBlue
    }}>
      <Head {...headProps}/>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}
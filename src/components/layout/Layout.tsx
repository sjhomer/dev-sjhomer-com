import * as React from "react"
import Head, {HeadProps} from "./Head"
import Header from "./Header"
import Footer from "./Footer"

interface LayoutProps extends HeadProps {
  children: JSX.Element,
}

export default function Layout({children, ...headProps}: LayoutProps) {
  // @ts-ignore
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="layout" data-is-root-path={isRootPath}>
      <Head {...headProps} />
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}
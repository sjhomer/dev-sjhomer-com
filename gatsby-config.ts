import type {GatsbyConfig} from "gatsby"
import {plugins, siteMetadata} from "./gatsby/config"

const config: GatsbyConfig = {
  siteMetadata,
  plugins
}

export default config

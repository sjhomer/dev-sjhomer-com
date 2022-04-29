import type {GatsbyConfig} from "gatsby"
import {plugins} from "./gatsby/config"
import siteConfig from './src/config'

// Load the .env files
require('dotenv').config()

const config: GatsbyConfig = {
  siteMetadata: siteConfig.siteMetadata,
  plugins
}

export default config

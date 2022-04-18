import type {GatsbyConfig} from "gatsby"
import {plugins, siteMetadata} from "./gatsby/config"

// Load the .env files
require('dotenv').config()

const config: GatsbyConfig = {
  siteMetadata,
  plugins
}

export default config

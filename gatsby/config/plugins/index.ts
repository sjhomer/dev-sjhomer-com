import gatsbyPluginManifest from "./gatsby-plugin-manifest"
import gatsbyThemeMaterialUi from "./gatsby-theme-material-ui"
import gatsbyPluginGoogleAnalytics from "./gatsby-plugin-google-analytics"
import gatsbySourceFilesystem from "./gatsby-source-filesystem"
import gatsbyTransformerRemark from "./gatsby-transformer-remark"
import gatsbyPluginFeed from "./gatsby-plugin-feed"
import gatsbyPluginScrollReveal from './gatsby-plugin-scroll-reveal'

const plugins = [
  gatsbyPluginManifest,
  gatsbyThemeMaterialUi,
  gatsbyPluginGoogleAnalytics,
  "gatsby-plugin-image",
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-sitemap",
  "gatsby-plugin-mdx",
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp",
  ...gatsbySourceFilesystem,
  gatsbyTransformerRemark,
  gatsbyPluginFeed,
  "gatsby-plugin-mdx",
  gatsbyPluginScrollReveal,
]

export default plugins
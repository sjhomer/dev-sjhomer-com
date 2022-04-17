// @ts-nocheck
import {articles} from "./gatsby/node"

exports.createPages = async (props) => {
  await articles.createPages(props)
}

exports.onCreateNode = (props) => {
  articles.createNode(props)
}

exports.createSchemaCustomization = (props) => {
  articles.createSchemaCustomization(props)
}

import * as React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby-theme-material-ui";
import { Layout } from "@web/components/layout";
// markup
export default function IndexPage({ data, location }) {
    // @ts-ignore
    const posts = data?.allMarkdownRemark?.nodes || [];
    console.log('posts', posts);
    return (React.createElement(Layout, { title: "Home" },
        React.createElement(React.Fragment, null,
            React.createElement("h1", null,
                "Congratulations",
                React.createElement("br", null),
                React.createElement("span", null, "\u2014 you just made a Gatsby site! "),
                "\uD83C\uDF89\uD83C\uDF89\uD83C\uDF89"),
            React.createElement("p", null,
                "Edit ",
                React.createElement("code", null, "src/pages/index.tsx"),
                " to see this page update in real-time. \uD83D\uDE0E"),
            React.createElement("ol", { style: { listStyle: `none` } }, // @ts-ignore
            posts.map(post => {
                const title = post.frontmatter.title || post.fields.slug;
                return (React.createElement("li", { key: post.fields.slug },
                    React.createElement("article", { className: "post-list-item", itemScope: true, itemType: "http://schema.org/Article" },
                        React.createElement("header", null,
                            React.createElement("h2", null,
                                React.createElement(Link, { to: post.fields.slug, itemProp: "url" },
                                    React.createElement("span", { itemProp: "headline" }, title))),
                            React.createElement("small", null, post.frontmatter.date)),
                        React.createElement("section", null,
                            React.createElement("p", { dangerouslySetInnerHTML: {
                                    __html: post.frontmatter.description || post.excerpt,
                                }, itemProp: "description" })))));
            })))));
}
export const pageQuery = graphql `
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;

/*  https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
  const pages = await graphql(`
    query {
      allFile(filter: { extension: { eq: "mdx" } }) {
        nodes {
          sourceInstanceName
          childMdx {
            frontmatter {
              title
              slug
              tags
            }
          }
        }
      }
    }
  `)
  if (pages.errors) {
    reporter.panic("Failed to create posts:", pages.errors)
  }

  const filterByCategory = (category, nodes) =>
    nodes.reduce((acc, curr) => {
      if (curr.sourceInstanceName === category) acc.push(curr.childMdx)
      return acc
    }, [])

  const posts = filterByCategory("posts", pages.data.allFile.nodes)

  posts.forEach(post => {
    actions.createPage({
      path: `posts/${post.frontmatter.slug}`,
      component: require.resolve("./src/components/postTemplate.js"),
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })

  // create tags
  const tagsObj = {}
  posts.forEach(post =>
    post.frontmatter.tags.forEach(tag =>
      tagsObj[tag] ? null : (tagsObj[tag] = true)
    )
  )
  const tagsArray = Object.keys(tagsObj)
  tagsArray.forEach(tag => {
    actions.createPage({
      path: `posts/tags/${tag}`,
      component: require.resolve("./src/components/tagsTemplate.js"),
      context: {
        tag,
      },
    })
  })

  const portfolio = filterByCategory("portfolio", pages.data.allFile.nodes)

  portfolio.forEach(node => {
    actions.createPage({
      path: `portfolio/${node.frontmatter.slug}`,
      component: require.resolve("./src/components/portfolioTemplate.js"),
      context: {
        slug: node.frontmatter.slug,
        sliderGlob: `**/*${node.frontmatter.slug}/slider`,
      },
    })
  })
}

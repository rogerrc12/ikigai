const path = require("path")

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const serviceTemplate = path.join(__dirname, "src", "templates", "service.js")
  const postTemplate = path.join(__dirname, "src", "templates", "post.js")

  const {
    data: {
      wordpress: {
        category: {
          children: { edges: services },
        },
      },
    },
  } = await graphql(`
    {
      wordpress {
        category(id: "Y2F0ZWdvcnk6Mw==") {
          children {
            edges {
              node {
                slug
              }
            }
          }
        }
      }
    }
  `)

  const {
    data: {
      wordpress: {
        posts: { nodes: posts },
      },
    },
  } = await graphql(`
    {
      wordpress {
        posts {
          nodes {
            slug
          }
        }
      }
    }
  `)

  services.map(service =>
    createPage({
      component: serviceTemplate,
      path: `/services/${service.node.slug}`,
      context: { slug: service.node.slug },
    })
  )

  posts.map(post =>
    createPage({
      component: postTemplate,
      path: `/blog/post/${post.slug}`,
      context: { slug: post.slug },
    })
  )
}

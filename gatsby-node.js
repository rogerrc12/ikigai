const path = require("path");
const createPaginatedPages = require('gatsby-paginate');

async function paginate ({ graphql, actions }) {
  const { createPage } = actions;
  const blogTemplate = path.join(__dirname, 'src', 'templates', 'blog.js');

  const { data } = await graphql(`
    {
      wordpress {
        posts {
          nodes {
            content
            date
            featuredImage { altText sourceUrl(size: LARGE) }
            title(format: RENDERED)
            author { name avatar { url width } }
            slug
            excerpt
          }
        }
      }
    }
  `);

  const { nodes: posts } = data.wordpress.posts;

  createPaginatedPages({
    edges: posts,
    createPage,
    pageTemplate: blogTemplate,
    pageLength: 5,
    pathPrefix: 'blog'
  });
}

async function createServicePages ({ graphql, actions }) {
  const { createPage } = actions;
  const serviceTemplate = path.join(__dirname, "src", "templates", "service.js");

  // QUERYING SERVICES CATEGORIES 
  const { data: { wordpress: { category: { children: { edges: services }, }, }, }, } = await graphql(`
    {
      wordpress {
        category(id: "Y2F0ZWdvcnk6Mw==") {
          children { edges { node { slug } } }
        }
      }
    }
  `)

  // CREATING SERVICES PAGES 
  services.map(service =>
    createPage({
      component: serviceTemplate,
      path: `/services/${service.node.slug}`,
      context: { slug: service.node.slug },
    })
  )
}

async function createPostPages ({ graphql, actions }) {
  const { createPage } = actions;
  const postTemplate = path.join(__dirname, "src", "templates", "post.js");

  // QUERYING POSTS
  const { data: { wordpress: { posts: { nodes: posts }, }, }, } = await graphql(`
    {
      wordpress { posts { nodes { slug } } }
    }
  `);

  // CREATING POSTS PAGES
  posts.map(post =>
    createPage({
      component: postTemplate,
      path: `/blog/post/${post.slug}`,
      context: { slug: post.slug },
    })
  )
}

exports.createPages = async ({ graphql, actions }) => {
  await Promise.all([
    paginate({ graphql, actions }),
    createPostPages({ graphql, actions }),
    createServicePages({ graphql, actions })
  ]);
}

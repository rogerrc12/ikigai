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
  const { data: { wordpress: { servicios: { nodes:  services }, }, }, } = await graphql(`
    {
      wordpress { servicios { nodes { slug } } }
    }
  `)

  // CREATING SERVICES PAGES 
  services.map(service =>
    createPage({
      component: serviceTemplate,
      path: `/servicios/${service.slug}`,
      context: { slug: service.slug },
    })
  )
}

async function createSocialMediaPages ({ graphql, actions }) {
  const { createPage } = actions;
  const singleTemplate = path.join(__dirname, "src", "templates", "serviceSingle.js");
  
  const { data: { wordpress: { social_medias: { nodes: socialMediaSlugs } } } } = await graphql(`
    {
      wordpress {
        social_medias { nodes { slug }  }
      }
    }
  `);
  
  socialMediaSlugs.map(media => {
    createPage({
      component: singleTemplate,
      path: `/servicios/social-media/${media.slug}`,
      context: { slug: media.slug }
    })
  })
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
    createServicePages({ graphql, actions }),
    createSocialMediaPages({ graphql, actions })
  ]);
}

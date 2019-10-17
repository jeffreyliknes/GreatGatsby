const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  createRedirect({
    fromPath: "/",
    toPath: "/home/",
    redirectInBrowser: true,
    isPermanent: true
  });
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local WordPress graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.

    // ==== PAGES (WORDPRESS NATIVE) ====
    graphql(
      `
        {
          allWordpressPage {
            edges {
              node {
                id
                slug
                status
                template
                title
                content
                template
                featured_media {
                  source_url
                }
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create Page pages.
        const contactTemplate = path.resolve("./src/templates/contact.js");
        const pageTemplate = path.resolve("./src/templates/page.js");
        const portfolioUnderContentTemplate = path.resolve(
          "./src/templates/portfolioUnderContent.js"
        );
        // We want to create a detailed page for each
        // page node. We'll just use the WordPress Slug for the slug.
        // The Page ID is prefixed with 'PAGE_'
        _.each(result.data.allWordpressPage.edges, edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          if (edge.node.template === "portfolio_under_content.php") {
            createPage({
              // Each page is required to have a `path` as well
              // as a template component. The `context` is
              // optional but is often necessary so the template
              // can query data specific to each page.
              path: `/${edge.node.slug}/`,
              component: slash(portfolioUnderContentTemplate),
              context: edge.node
            });
          } else if (edge.node.template === "contact.php") {
            createPage({
              // Each page is required to have a `path` as well
              // as a template component. The `context` is
              // optional but is often necessary so the template
              // can query data specific to each page.
              path: `/${edge.node.slug}/`,
              component: slash(contactTemplate),
              context: edge.node
            });
          } else if (edge.node.template === "") {
            createPage({
              // Each page is required to have a `path` as well
              // as a template component. The `context` is
              // optional but is often necessary so the template
              // can query data specific to each page.
              path: `/${edge.node.slug}/`,
              component: slash(pageTemplate),
              context: edge.node
            });
          }
        });

   
      })
      // ==== END PAGES ====

      // ==== PORTFOLIO ====
      //  acf {
        // portfolio_url
      // }
      // for when you want to add acf fields to your project
      .then(() => {
        graphql(
          `
            {
              allWordpressWpPortfolio {
                edges {
                  node {
                    id
                    title
                    slug
                    excerpt
                    content
                    featured_media {
                      source_url
                    }
                   
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }
          const portfolioTemplate = path.resolve(
            "./src/templates/portfolio.js"
          );
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.allWordpressWpPortfolio.edges, edge => {
            createPage({
              path: `/portfolio/${edge.node.slug}/`,
              component: slash(portfolioTemplate),
              context: edge.node
            });
          });
        });
      })
      // ==== END PORTFOLIO ====

      // ==== BLOG POSTS ====
      .then(() => {
        graphql(`
          {
            allWordpressPost {
              edges {
                node {
                  excerpt
                  wordpress_id
                  date(formatString: "Do MMM YYYY HH:mm")
                  title
                  content
                  slug
                }
              }
            }
          }
        `).then(result => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }

          const posts = result.data.allWordpressPost.edges;
          const postsPerPage = 2;
          const numberOfPages = Math.ceil(posts.length / postsPerPage);
          const blogPostListTemplate = path.resolve(
            "./src/templates/blogPostList.js"
          );

          Array.from({ length: numberOfPages }).forEach((page, index) => {
            createPage({
              component: slash(blogPostListTemplate),
              path: index === 0 ? "/blog" : `/blog/${index + 1}`,
              context: {
                posts: posts.slice(
                  index * postsPerPage,
                  index * postsPerPage + postsPerPage
                ),
                numberOfPages,
                currentPage: index + 1
              }
            });
          });

          const pageTemplate = path.resolve("./src/templates/page.js");
          _.each(posts, post => {
            createPage({
              path: `/post/${post.node.slug}`,
              component: slash(pageTemplate),
              context: post.node
            });
          });

          resolve();
        });
      });
  });
};

// const path = require(`path`);
// const slash = require(`slash`);

// // Implement the Gatsby API “createPages”. This is
// // called after the Gatsby bootstrap is finished so you have
// // access to any information necessary to programmatically
// // create pages.
// // Will create pages for WordPress pages (route : /{slug})
// // Will create pages for WordPress posts (route : /post/{slug})
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage, createRedirect } = actions;
//   createRedirect({ fromPath: '/', toPath: '/home', redirectInBrowser: true, isPermanent: true })

//   // The “graphql” function allows us to run arbitrary
//   // queries against the local Gatsby GraphQL schema. Think of
//   // it like the site has a built-in database constructed
//   // from the fetched data that you can run queries against.
//   const result = await graphql(`
//     {
//       wordpressPage(title: { eq: "Home" }) {
//         id
//         link
//         status
//         template
//         slug
//         title
//         content
//         featured_media {
//           id
//         }
//       }
//       allWordpressPage(filter: { title: { ne: "Home" } }) {
//         edges {
//           node {
//             id
//             title
//             content
//             slug
//             status
//             template
//             featured_media {
//               id
//             }
//           }
//         }
//       }
//       allWordpressPost {
//         edges {
//           node {
//             id
//             title
//             content
//             slug
//             status
//             template
//             format
//           }
//         }
//       }
//     }
//   `);

//   // Check for any errors
//   if (result.errors) {
//     throw new Error(result.errors);
//   }

//   // Access query results via object destructuring
//   const { wordpressPage, allWordpressPage, allWordpressPost } = result.data;

//   // Create Page pages.
//   const pageTemplate = path.resolve(`./src/templates/page.js`);
//   // We want to create a detailed page for each page node.
//   // The path field contains the relative original WordPress link
//   // and we use it for the slug to preserve url structure.
//   // The Page ID is prefixed with 'PAGE_'
//   createPage({
//     path: `/`,
//     component: slash(pageTemplate),
//     context: wordpressPage
//   });
//   allWordpressPage.edges.forEach(edge => {
//     // Gatsby uses Redux to manage its internal state.
//     // Plugins and sites can use functions like "createPage"
//     // to interact with Gatsby.
//     createPage({
//       // Each page is required to have a `path` as well
//       // as a template component. The `context` is
//       // optional but is often necessary so the template
//       // can query data specific to each page.
//       path: `/${edge.node.slug}/`,
//       component: slash(pageTemplate),
//       context: edge.node
//     });
//   });

//   const postTemplate = path.resolve(`./src/templates/blogPostList.js`);
//   // We want to create a detailed page for each post node.
//   // The path field stems from the original WordPress link
//   // and we use it for the slug to preserve url structure.
//   // The Post ID is prefixed with 'POST_'
//   allWordpressPost.edges.forEach(edge => {
//     createPage({
//       path: `/${edge.node.slug}/`,
//       component: slash(postTemplate),
//       context: edge.node
//     });
//   });
// };

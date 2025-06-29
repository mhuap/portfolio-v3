import path from "path";
import { GatsbyNode } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

// template below must stay js (not typescript). see reason below:
// https://www.gatsbyjs.com/docs/how-to/routing/mdx/#make-a-layout-template-for-your-posts
const projectTemplate = path.resolve(`./src/templates/ProjectTemplate.jsx`);

// type SoftwareProjectNodeType = {
//   id: string,
//   frontmatter: {
//     title: string,
//     slug: string,
//     featured: string,
//     type: string,
//     description: string,
//     image: {
//       childImageSharp: {
//         gatsbyImageData: IGatsbyImageData
//       }
//     },
//     date: string,
//     role: string,
//     context: string,
//     skills: string[],
//     teammates?: string[],
//     award?: string
//   },
//   internal: {
//     contentFilePath: string
//   }
// };
type SoftwareProjectNodeType = {
  id: string,
  frontmatter: {
    slug: string,
  },
  internal: {
    contentFilePath: string
  }
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {

  const { createPage } = actions;
  const result = await graphql<{
    allMdx: {
      nodes: Array<{
        id: string;
        frontmatter: {
          slug: string;
        };
        internal: {
          contentFilePath: string;
        };
      }>;
    };
  }>(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  // Create blog post pages.
  const projects = result.data?.allMdx.nodes!;


  // you'll call `createPage` for each result
  projects.forEach((node: SoftwareProjectNodeType) => {
    createPage({
      // As mentioned above you could also query something else like frontmatter.title above and use a helper function
      // like slugify to create a slug
      path: `/projects/${node.frontmatter.slug}`,
      // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
      // component: node.internal.contentFilePath,
      component: `${projectTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      // You can use the values in this context in
      // our page layout component
      context: {
        id: node.id
      },
    })
  })
}
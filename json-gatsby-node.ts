import path from "path";
import { GatsbyNode } from "gatsby";

// this file and the ones below must stay js (not typescript). see reason below:
// https://www.gatsbyjs.com/docs/how-to/routing/mdx/#make-a-layout-template-for-your-posts
import { slugify } from "./src/util/slugify.ts";
// import { ImageDataLike } from "gatsby-plugin-image";
const projectTemplate = path.resolve(`./src/templates/ProjectTemplate.jsx`);

type SoftwareProjectType = {
  id: string,
  title: string,
  // type: string,
  description: string,
  // image: ImageDataLike,
  // award?: string
  mdx: {
    absolutePath: string
  }
};

// THOUGHT:
// take project info from mdx frontmatter???
// dont use a json file, just take info from mdx files directly?


// export async function createPages({
//   graphql, actions, reporter
// } : {
//   graphql: (q: string) => any,
//   actions: Actions,
//   reporter: GatsbyReporter
// }
export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {

  const { createPage } = actions;
  const result = await graphql<{
      allSoftwareProjectJson: {
        nodes: Array<SoftwareProjectType>;
      };
    }>(`
    query {
      allSoftwareProjectJson {
        nodes {
          id
          description
          title
          mdx {
            absolutePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  // Create blog post pages.
  const projects = result.data?.allSoftwareProjectJson.nodes!;


  // you'll call `createPage` for each result
  projects.forEach((node: SoftwareProjectType) => {
    const slug = slugify(node.title);
    console.log(slug);
    createPage({
      // As mentioned above you could also query something else like frontmatter.title above and use a helper function
      // like slugify to create a slug
      path: `/projects/${slug}`,
      // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
      // component: node.internal.contentFilePath,
      component: `${projectTemplate}?__contentFilePath=${node.mdx.absolutePath}`,
      // You can use the values in this context in
      // our page layout component
      context: {
        id: node.id,
        title: node.title
      },
    })
  })
}
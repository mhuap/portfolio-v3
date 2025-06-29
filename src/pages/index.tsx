import * as React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import "../styles/index.scss";
import Layout from "../components/Layout.tsx";
import Hero from "../components/home/Hero.tsx";
import SectionLabel from "../components/home/SectionLabel.tsx";
import Software from "../components/home/Software.tsx";
import { ImageDataLike } from "gatsby-plugin-image";
import Sparkle from "../components/Sparkle.tsx";
import Design from "../components/home/Design.tsx";
import Footer from "../components/home/Footer.tsx";

export interface ProjectType {
  title: string,
  slug: string,
  featured?: boolean,
  type?: string,
  description: string,
  image: ImageDataLike,
  date: string,
  role: string,
  context: string,
  skills: string[],
  award?: string,
  teammates?: string,
};

type DataType = {
  allMdx: {
    nodes: {
      frontmatter: ProjectType,
      parent: {
        relativeDirectory: "design" | "software"
      }
    }[]
  }
}

function IndexPage ({
  data: { allMdx }
} : 
  PageProps<DataType>
){
  const projects = allMdx.nodes.reduce(
    (result: {software: ProjectType[], design: ProjectType[]}, projectNode) => {
      if (projectNode.parent.relativeDirectory === "software"){
        return {
          ...result,
          software: result.software.concat(projectNode.frontmatter)
        };
      } else if (projectNode.parent.relativeDirectory === "design"){
        return {
          ...result,
          design: result.design.concat(projectNode.frontmatter)
        };
      }
      return result;
    },
    {software: [], design: []}
  );

  return (
    <Layout>
      <Hero />
      <SectionLabel>
        Software projects <div className="section-label-award">(<Sparkle/> = award/recognition)</div>
      </SectionLabel>
      <Software projects={projects.software}/>
      <SectionLabel>
        Graphic & motion design
      </SectionLabel>
      <Design projects={projects.design}/>
      <Footer />
    </Layout>
  )
};

export const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          title
          slug
          type
          description
          award
          featured
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        parent {
          ... on File {
            relativeDirectory
          }
        }
      }
    }
  }
`;


export default IndexPage

export const Head: HeadFC = () => <title>Matias Huapaya - Portfolio</title>;

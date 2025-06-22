import * as React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import "../styles/index.scss";
import Layout from "../components/Layout.tsx";
import BracketButton from "../components/BracketButton.tsx";
import Hero from "../components/home/Hero.tsx";
import SectionLabel from "../components/home/SectionLabel.tsx";
import Software from "../components/home/Software.tsx";
import { ImageDataLike } from "gatsby-plugin-image";
import Sparkle from "../components/Sparkle.tsx";
import Design from "../components/home/Design.tsx";
import Footer from "../components/home/Footer.tsx";
// import { SoftwareProject as SoftwareProjectType } from "../../gatsby-node.ts";

export interface SoftwareProjectType {
  title: string,
  type: string,
  description: string,
  image: ImageDataLike,
  award?: string
};

export interface DesignProjectType {
  title: string,
  image: ImageDataLike
}

type DataType = {
  allSoftwareProjectJson: {
    nodes: SoftwareProjectType[]
  },
  allDesignProjectJson: {
    nodes: DesignProjectType[]
  }
}

function IndexPage ({data: { allSoftwareProjectJson, allDesignProjectJson }}: PageProps<DataType>) {
  return (
    <Layout>
      <Hero />
      <SectionLabel>
        Software projects <div className="section-label-award">(<Sparkle/> = award/recognition)</div>
      </SectionLabel>
      <Software projects={allSoftwareProjectJson.nodes}/>
      <SectionLabel>
        Graphic & motion design
      </SectionLabel>
      <Design projects={allDesignProjectJson.nodes}/>
      <Footer />
    </Layout>
  )
};

export const query = graphql`
  {
    allSoftwareProjectJson {
      nodes {
        title
        type
        description
        award
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
    allDesignProjectJson {
      nodes {
        title
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`;


export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>;

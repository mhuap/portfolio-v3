import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/index.scss";
import Layout from "../components/Layout.tsx";
import BracketButton from "../components/BracketButton.tsx";
import Hero from "../components/home/Hero.tsx";
import SectionLabel from "../components/home/SectionLabel.tsx";
import Software from "../components/home/Software.tsx";

function IndexPage ({}: PageProps) {
  return (
    <Layout>
      <Hero />
      <SectionLabel title="software projects"/>
      <Software />
      <section>
        idk something goes here
        <h2 className="font-handwriting">test</h2>
        <BracketButton text="testing button"/>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>;

import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/index.scss";
import Layout from "../components/Layout.tsx";
import BracketButton from "../components/BracketButton.tsx";

// @refresh reset
function IndexPage ({}: PageProps) {
  return (
    <Layout>
      <main>
        idk something goes here
        <h1 className="font-handwriting">test</h1>
        <BracketButton text="testing button"/>
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>;

import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/index.scss";

const IndexPage = ({}: PageProps) => {
  return (
    <main>
      idk something goes here
      <h1 className="handwriting">test</h1>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

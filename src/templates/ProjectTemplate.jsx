import React from 'react'
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/Layout.tsx"
import InfoRow from "../components/project/InfoRow.tsx"
import "../styles/project.scss"

const shortcodes = { Link }

export default function ProjectTemplate({ data, children }) {
  const { title, description, image, date, role, context, skills, award, teammates } = data.mdx.frontmatter;

  const featuredImage = getImage(image.childImageSharp.gatsbyImageData);
  return (
    <Layout>
      <div className="top-info">
        <div className="top-info--title">
          <h1>{title}</h1>
          <div className="top-info--links">
          </div>
        </div>
        <div className="top-info--main">
          <div className="top-info--content">
            <div className="top-info--description">
              {description}
            </div>
            <div className="top-info--details">
              <div className="top-info--details-col-1">
                <div className="top-info--date">{date}</div>
                {award && <div>{award}</div>}
              </div>
              <div className="top-info--details-col-2">
                <InfoRow title="My role">
                  <ul className="top-info--list">
                    {role.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                </InfoRow>
                <InfoRow title="Context">{context}</InfoRow>
                <InfoRow title="Tools & Skills">
                  <ul className="top-info--list">
                    {skills.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </InfoRow>
                {
                  teammates &&
                  <InfoRow title="Teammates">
                    <ul className="top-info--list">
                      {teammates.map((t, i) => <li key={i}>{t}</li>)}
                    </ul>
                  </InfoRow>
                }
              </div>
            </div>
          </div>
          <GatsbyImage className="top-info--image" image={featuredImage} alt={"Featured image for " + title} />
        </div>
      </div>
      <MDXProvider components={shortcodes}>
        {children}
      </MDXProvider>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
        image {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
        date
        role
        context
        skills
        teammates
        award
      }
    }
  }
`
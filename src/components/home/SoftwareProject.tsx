import React from 'react';
// import { useStaticQuery, graphql } from "gatsby";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";

import UnderlinedTitle from '../UnderlinedTitle.tsx';
import { Project } from './Software.tsx';

export default function SoftwareProject({
  project
} : {
  project: Project,
}) {
  const { title, description, image } = project;

  return (
    <div className='software-project'>
      <UnderlinedTitle title={title}/>
      <p className="project-description">
       {description}
      </p>
      {/* <GatsbyImage image={image} /> */}
    </div>
  )
}

// graphql`
//     query ($title: String, $relDir: String) {
//       allFile(filter: {relativeDirectory: {eq: $relDir}, name: {eq: $title}}) {
//         edges {
//           node {
//             name
//             childImageSharp {
//               gatsbyImageData
//             }
//           }
//         }
//       }
//     }
//   `

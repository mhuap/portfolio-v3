import React from 'react';
// import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import FolderTitle from '../FolderTitle.tsx';
import { SoftwareProjectType } from '../../pages/index.tsx';

export default function SoftwareProject({
  project
} : {
  project: SoftwareProjectType,
}) {
  const { title, description, image, award } = project;

  const imageData = getImage(image)!;
  console.log("award:", award);

  return (
    <div className='software-project'>
      <FolderTitle title={title} extra={award}/>
      <p className="project-description">
       {description}
      </p>
      <GatsbyImage image={imageData} alt={title + " mockup"} />
    </div>
  )
}

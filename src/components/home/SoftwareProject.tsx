import React from 'react';
// import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import FolderTitle from '../FolderTitle.tsx';
import { ProjectType } from '../../pages/index.tsx';
import { Link } from 'gatsby';

export default function SoftwareProject({
  project
} : {
  project: ProjectType,
}) {
  const { title, slug, description, image, award } = project;

  const imageData = getImage(image)!;
  const totalSlug = "/projects/" + slug;

  return (
    <Link to={totalSlug} className='software-project'>
      <FolderTitle title={title} extra={award}/>
      <p className="project-description">
       {description}
      </p>
      <GatsbyImage image={imageData} alt={title + " mockup"} />
    </Link>
  )
}

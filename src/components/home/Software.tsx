import React from 'react';
import SoftwareProject from './SoftwareProject.tsx';

export interface Project {
  title: string,
  description: string,
  image: string
};

const projects: Project[] = [
  {
    title: "bsky-img",
    description: "Progressive web app to convert tweets into images with customizable backgrounds",
    image: "tweet-img"
  },
  {
    title: "Discograph",
    description: "A tool to quickly create a playlist of an artist's entire discography",
    image: "tweet-img"
  },
  {
    title: "Mood tracker",
    description: "Mobile CRUD app to track emotions based on the Roberts emotion wheel",
    image: "tweet-img"
  },
  {
    title: "ezPath (UX research)",
    description: "Mobile app to help people choose post-secondary education",
    image: "tweet-img"
  }
];

export default function Software() {
  return (
    <div className="software-section">
      {projects.map((p) => (
        <SoftwareProject project={p}/>
      ))}
    </div>
  )
}

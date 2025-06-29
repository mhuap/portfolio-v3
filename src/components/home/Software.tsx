import React from 'react';
import SoftwareProject from './SoftwareProject.tsx';
import { ProjectType } from '../../pages/index.tsx';
import BracketButton from '../BracketButton.tsx';
import FolderTitle from '../FolderTitle.tsx';
import Sparkle from '../Sparkle.tsx';
import { Link } from 'gatsby';

export default function Software({ projects } : {projects: ProjectType[]}) {
  
  const main = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured);
  
  return (
    <section className="software-section">
      {main.map((p) => (
        <SoftwareProject project={p} key={p.title}/>
      ))}
      <div className="more-project-list">
        <FolderTitle title='More' underlined={false}/>
        {rest.map((p) => (
          <Link to={"/projects/" + p.slug} className="more-project-link" key={p.title}>
            <BracketButton text={p.title + " = " + p.type}/>
            {p.award && <Sparkle />}
          </Link>
        ))}
      </div>
      <div className="freq-tools">
        <div>
          <FolderTitle title='Frequently used tools' underlined={false}/>
          <ul>
            <li>Typescript</li>
            <li>Tailwind</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Figma</li>
          </ul>
        </div>
        <div>
          <BracketButton text="Other tools I've worked with"/>
        </div>
      </div>
      <div className="bonus-hardware">
        <FolderTitle title='Bonus hardware project' underlined={false}/>
        <BracketButton text="pseudo-theremin"/>
      </div>
    </section>
  )
}

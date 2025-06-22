import React from 'react';
import SoftwareProject from './SoftwareProject.tsx';
import { SoftwareProjectType } from '../../pages/index.tsx';
import BracketButton from '../BracketButton.tsx';
import FolderTitle from '../FolderTitle.tsx';
import Sparkle from '../Sparkle.tsx';

export default function Software({ projects } : {projects: SoftwareProjectType[]}) {
  
  const main = projects.slice(0,4);
  const rest = projects.slice(4);
  
  return (
    <section className="software-section">
      {main.map((p) => (
        <SoftwareProject project={p}/>
      ))}
      <div className="more-project-list">
        <FolderTitle title='More' underlined={false}/>
        {rest.map((p) => (
          <div className="more-project-link">
            <BracketButton text={p.title + " = " + p.type}/>
            {p.award && <Sparkle />}
          </div>
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

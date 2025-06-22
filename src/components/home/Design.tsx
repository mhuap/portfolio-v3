import React from 'react'
import { DesignProjectType } from '../../pages/index.tsx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import FolderTitle from '../FolderTitle.tsx';

export default function Design({ projects } : { projects: DesignProjectType[] }) {
  return (
    <div className="design-section">
      <div className="design-gallery">
        <div className="design-gallery-images">
          {projects.map(p => {
            const imageData = getImage(p.image)!;
            return <GatsbyImage className="g-image" image={imageData} alt={p.title}/>
          })}
        </div>
        <div className="design-video">
          <iframe src="https://player.vimeo.com/video/424451654?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="Demo Reel">
          </iframe>
        </div>
      </div>
      <div className="design-list">
        <FolderTitle title='Things I design' underlined={false}/>
        <ul>
          <li>Logos</li>
          <li>Posters</li>
          <li>Social media posts & banners</li>
        </ul>
      </div>
    </div>
  )
}

{/* <div style="padding:56.25% 0 0 0;position:relative;">\
  <iframe src="" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Demo Reel"></iframe>
</div> */}
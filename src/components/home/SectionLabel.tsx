import React from 'react';
import "../../styles/section.scss";

export default function SectionLabel({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="section-label">
      <div className="square"></div>
      <div>
        {children}
      </div>
    </div>
  )
}

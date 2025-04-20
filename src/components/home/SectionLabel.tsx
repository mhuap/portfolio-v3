import React from 'react';
import "../../styles/section.scss";

export default function SectionLabel({ title }: { title: string }) {
  return (
    <div className="section-label">
      <div className="square"></div>
      {title}
    </div>
  )
}

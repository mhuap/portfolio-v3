import React from 'react'

export default function InfoRow(
  { title, children } : React.PropsWithChildren<{ title: string }>
) {
  return (
    <div className="info-row">
      <div className="info-row--label">{title}</div>
      <div className="info-row--content">
        {children}
      </div>
    </div>
  )
}

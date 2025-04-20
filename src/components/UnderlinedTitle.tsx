import React from 'react';

export default function UnderlinedTitle({ title } : { title: string }) {
  return (
    <div className='underlined-title'>
      {title}
    </div>
  )
}

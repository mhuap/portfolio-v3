import React from 'react';
import '../../styles/hero.scss';

export default function Hero() {
  return (
    <main className='hero'>
      <div className='hero-top-info'>
        <span>Matias Huapaya</span>
        <div>
          <span className='old-city'>Toronto, Canada</span>
          <span> Lima, Peru</span>
        </div>
      </div>
      <h1 className='site-title'>Creative developer</h1>
      <h1 className='site-title handwriting'>& designer</h1>
    </main>
  )
}

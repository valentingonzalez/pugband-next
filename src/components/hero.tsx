'use client';

import { useEffect, useRef, useState } from "react";
import Rellax from 'rellax';
import styles from '../assets/scss/hero.module.scss';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const [showTitle, setShowTitle] = useState(true);
  let titleRellax = useRef<any>(null);

  const handleScroll = () => {
    setShowTitle(window.scrollY < (window.innerHeight / 2 + 400));
    
    const blur = Math.min(10, window.scrollY / 100);
    if(titleRef.current)
      titleRef.current.style.filter = `blur(${blur}px)`;
  };

  useEffect(() => {
    if(titleRef.current) {
      titleRellax.current = new Rellax(titleRef.current, { speed: -6 });
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if(titleRellax.current) {
        titleRellax.current.destroy();
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.hero} section d-flex align-items-center justify-content-center`}>
      <h1 ref={titleRef} className={ `${styles['hero-title']} mb-0 ${!showTitle ? 'd-none' : ''}` }>PugBand</h1>
    </div>
  );
}

export default Hero;
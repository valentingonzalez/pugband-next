'use client';

import React, { useEffect, useRef, useState } from 'react';
import Rellax from 'rellax';
import styled from 'styled-components';

const Pug = styled.path`
  stroke-dasharray: 40;
`;

const AnimatedLogo: React.FC = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const [strokeDashoffset, setStrokeDashoffset] = useState(0);
  const [scale, setScale] = useState(1);

  const handleScroll = () => {
    if(logoRef.current) {
      const center = window.innerHeight / 2 - logoRef.current.offsetHeight / 2;
      const logoPosition = logoRef.current.getBoundingClientRect().top - center;
      const dashOffset = Math.abs((logoPosition / center) * 40);
      if(logoPosition > 0) {
        setScale(Math.abs(-dashOffset / 20) + 1);
      }
      if(dashOffset <= 40) {
        setStrokeDashoffset(dashOffset);
      }
    }
  };

  useEffect(() => {
    let logoRellax: any = null;

    if(logoRef.current) {
      logoRellax = new Rellax(logoRef.current, { speed: 2.5 });
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      logoRellax?.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div ref={logoRef} className="text-white">
        <svg
          style={{ transform: `scale(${scale})` }}
          width="133"
          height="93"
          viewBox="0 0 133 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Pug
            style={{ strokeDashoffset: strokeDashoffset }}
            d="M19.5 11L1.5 23L5 39M19.5 11L27 2.5L41.5 8.5M19.5 11L29 21M41.5 8.5L54 2.5M41.5 8.5L29 21M41.5 8.5L44.5 18M54 2.5L44.5 18M54 2.5L59.75 3.25M5 39L8 55L15 56.5V46.5M5 39L13.5 34M15 46.5H17M15 46.5L13.5 34M17 46.5C19.25 51.5 23 60 27 68.125M17 46.5L25.5 36.6909M38.5 87.5L56.5 91.5M38.5 87.5C36.4581 85.301 34.0214 80.4243 31.5 75.8311M38.5 87.5L51 75.5M56.5 91.5L51 75.5M56.5 91.5H77.5M112.5 10L131.5 24L128 40M112.5 10L105 1.5L90.5 7.5M112.5 10L103.75 20.375M90.5 7.5L78 1.5M90.5 7.5L88 16.5M90.5 7.5L103.75 20.375M78 1.5L88 16.5M78 1.5L71.75 2.75M128 40L126 56L119 57.5V47.5M128 40L119 35.25M119 47.5H117M119 47.5V35.25M117 47.5C114.769 52.4585 111.308 60.3538 107.593 68.125M117 47.5L107.593 36.6909M96.5 88.5L77.5 91.5M96.5 88.5L84 75.5M96.5 88.5C98.466 86.3828 100.706 81.7103 103 77.3404M77.5 91.5L84 75.5M13.5 34L29 21M44.5 18L62 18.5M44.5 18L28 33.0636M44.5 18L57 36.25M62 18.5L59.75 3.25M62 18.5L61 30.5M59.75 3.25L65.5 4L71.75 2.75M27 68.125L25.5 45M27 68.125C28.4869 71.1452 30.0083 73.1135 31.5 75.8311M25.5 45V36.6909M25.5 45H31.5M25.5 36.6909L28 33.0636M31.5 45L33 36.6909H43M31.5 45L40.5 48.5L46 45M43 36.6909L46 45M43 36.6909V28.5M46 45L54 40M28 33.0636L43 28.5M43 28.5L54 40M54 40L41.5 55L31.5 75.8311M54 40L57 36.25M54 40L57.875 47.5M31.5 75.8311L41.5 63.5L59.75 51M31.5 75.8311L51 75.5M59.75 51L57.875 47.5M59.75 51L67 56M51 75.5L56.5 65H67M84 75.5L77.5 65H67M84 75.5L103 77.3404M61 30.5L57 36.25M61 30.5H72M72 30.5L69.5 18M72 30.5L75.9118 35.25M69.5 18L88 16.5M69.5 18L71.75 2.75M88 16.5L107.593 36.6909M88 16.5L75.9118 35.25M103 77.3404L93 56L79.8235 40M103 77.3404L93 63.5L74 51M103 77.3404C104.529 74.4265 106.082 71.286 107.593 68.125M74 51L75.9118 47.5M74 51L67 56M79.8235 40L75.9118 47.5M79.8235 40L75.9118 35.25M79.8235 40L89.5 28.5M79.8235 40L86.4118 44.25M57.875 47.5L67 46L75.9118 47.5M67 56V65M107.593 68.125V46M107.593 36.6909L89.5 28.5M107.593 36.6909V46M89.5 28.5V35.25M101.5 46L93 48.5L86.4118 44.25M101.5 46H107.593M101.5 46L99.5 36.6909L89.5 35.25M89.5 35.25L86.4118 44.25M119 35.25L103.75 20.375"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
};

export default AnimatedLogo;

'use client';

import { useEffect, useRef, useState } from 'react';
import Rellax from 'rellax';
import styles from '../assets/scss/video.module.scss';

const VideoComponent = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const videoPlayerRef = useRef<HTMLVideoElement>(null);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const videoRellax = useRef<any>(null);

  const handleScroll = () => {
    if(videoRef.current) {
      const blur = videoRef.current.getBoundingClientRect().top / 150;
      const positionHack = Math.abs((videoRef.current.getBoundingClientRect().top * 100) / window.innerHeight - 100) + 50;
      const size = 70 + 0.2 * positionHack;
      videoRef.current.style.filter = `blur(${blur}px)`;
      if(size <= 100) {
        videoRef.current.style.width = `${size}%`;
        videoRef.current.style.height = `${size}%`;
      }
    }
  };

  const toggleVideoSound = () => {
    setIsVideoMuted(!isVideoMuted);
  };

  useEffect(() => {
    if(videoPlayerRef.current) {
      videoPlayerRef.current.muted = isVideoMuted;
    }
  }, [isVideoMuted]);

  useEffect(() => {
    if(videoRef.current) {
      videoRellax.current = new Rellax(videoRef.current, { speed: 6 });
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      if(videoRellax.current) {
        videoRellax.current.destroy();
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="d-flex align-items-center justify-content-center container-xl section">
      <div className={styles.video} ref={videoRef}>
        <button onClick={toggleVideoSound} className={styles['mute-btn']}>
          {isVideoMuted ? (
            <svg aria-label="Audio is muted" fill="currentColor" height="12" role="img" viewBox="0 0 48 48" width="12">
              <title>Audio is muted</title>
              <path clipRule="evenodd" d="M1.5 13.3c-.8 0-1.5.7-1.5 1.5v18.4c0 .8.7 1.5 1.5 1.5h8.7l12.9 12.9c.9.9 2.5.3 2.5-1v-9.8c0-.4-.2-.8-.4-1.1l-22-22c-.3-.3-.7-.4-1.1-.4h-.6zm46.8 31.4-5.5-5.5C44.9 36.6 48 31.4 48 24c0-11.4-7.2-17.4-7.2-17.4-.6-.6-1.6-.6-2.2 0L37.2 8c-.6.6-.6 1.6 0 2.2 0 0 5.7 5 5.7 13.8 0 5.4-2.1 9.3-3.8 11.6L35.5 32c1.1-1.7 2.3-4.4 2.3-8 0-6.8-4.1-10.3-4.1-10.3-.6-.6-1.6-.6-2.2 0l-1.4 1.4c-.6.6-.6 1.6 0 2.2 0 0 2.6 2 2.6 6.7 0 1.8-.4 3.2-.9 4.3L25.5 22V1.4c0-1.3-1.6-1.9-2.5-1L13.5 10 3.3-.3c-.6-.6-1.5-.6-2.1 0L-.2 1.1c-.6.6-.6 1.5 0 2.1L4 7.6l26.8 26.8 13.9 13.9c.6.6 1.5.6 2.1 0l1.4-1.4c.7-.6.7-1.6.1-2.2z" fillRule="evenodd"></path>
            </svg>
          ) : (
            <svg aria-label="Audio is playing" fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12">
              <title>Audio is playing</title>
              <path d="M16.636 7.028a1.5 1.5 0 1 0-2.395 1.807 5.365 5.365 0 0 1 1.103 3.17 5.378 5.378 0 0 1-1.105 3.176 1.5 1.5 0 1 0 2.395 1.806 8.396 8.396 0 0 0 1.71-4.981 8.39 8.39 0 0 0-1.708-4.978Zm3.73-2.332A1.5 1.5 0 1 0 18.04 6.59 8.823 8.823 0 0 1 20 12.007a8.798 8.798 0 0 1-1.96 5.415 1.5 1.5 0 0 0 2.326 1.894 11.672 11.672 0 0 0 2.635-7.31 11.682 11.682 0 0 0-2.635-7.31Zm-8.963-3.613a1.001 1.001 0 0 0-1.082.187L5.265 6H2a1 1 0 0 0-1 1v10.003a1 1 0 0 0 1 1h3.265l5.01 4.682.02.021a1 1 0 0 0 1.704-.814L12.005 2a1 1 0 0 0-.602-.917Z"></path>
            </svg>
          )}
        </button>
        <video ref={videoPlayerRef} width="100%" muted autoPlay>
          <source src="/assets/video/ordenar-low.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoComponent;

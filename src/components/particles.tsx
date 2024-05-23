'use client'

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
  position: fixed;
  top: -50px;
  left: -50px;
  width: calc(100% + 100px);
  height: calc(100% + 100px);
  z-index: -1;
`;

const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const particlesRef = useRef<any[]>([]);
  const numParticles = 500;
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const setupCanvas = () => {
      if(canvasRef.current) {
        canvasRef.current.width = window.innerWidth + 100;
        canvasRef.current.height = window.innerHeight + 100;
        ctxRef.current = canvasRef.current.getContext('2d');
      }
    };

    const generateParticles = () => {
      if(canvasRef.current) {
        for (let i = 0; i < numParticles; i++) {
          const size = Math.random() * 3 + 1; // Random size between 1 and 3
          const x = Math.random() * canvasRef.current.width;
          const y = Math.random() * canvasRef.current.height;
          const depth = Math.random() * 2 + 0.1; // Random depth between 0.1 and 0.6
          particlesRef.current.push({ x, y, size, depth, initX: x, initY: y });
        }
      }
    };

    const drawParticles = () => {
      if(ctxRef.current && canvasRef.current) {
        ctxRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        particlesRef.current.forEach((particle) => {
          if(ctxRef.current && canvasRef.current) {
            ctxRef.current.beginPath();
            ctxRef.current.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctxRef.current.fillStyle = 'rgba(255, 255, 255, 0.5)';
            ctxRef.current.fill();
            ctxRef.current.closePath();
            const speed = particle.depth * 0.001; // parallax fx
            particle.y -= window.scrollY * speed;
            if(particle.y < -particle.size) {
              particle.y = canvasRef.current.height + particle.size;
            }
          }
        });
      }
    };

    const drawMouseParticles = () => {
      if(ctxRef.current && canvasRef.current) {
        ctxRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        particlesRef.current.forEach((particle) => {
          if(ctxRef.current && canvasRef.current) {
            ctxRef.current.beginPath();
            ctxRef.current.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctxRef.current.fillStyle = 'rgba(255, 255, 255, 0.5)';
            ctxRef.current.fill();
            ctxRef.current.closePath();
            // update particle position based on mouse position
            particle.x = particle.initX - mouseRef.current.x * 0.01;
            particle.y = particle.y - mouseRef.current.y * 0.001;
            if(particle.x < 0 || particle.x > canvasRef.current.width) {
              particle.x = particle.initX;
            }
          }
        });
      }
    };

    const handleScroll = () => {
      drawParticles();
    };

    const handleMouseMove = (evt: MouseEvent) => {
      mouseRef.current = { x: evt.clientX - window.innerWidth / 2, y: evt.clientY - window.innerHeight / 2 };
      drawMouseParticles();
    };

    setupCanvas();
    generateParticles();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <Canvas ref={canvasRef} />;
};

export default ParticleCanvas;

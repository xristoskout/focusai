"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const InteractiveHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      if (containerRef.current) {
        canvas.width = containerRef.current.clientWidth;
        canvas.height = containerRef.current.clientHeight;
      }
    };

    window.addEventListener('resize', resize);
    resize();

    const drawLightning = (x1: number, y1: number, x2: number, y2: number, opacity: number) => {
      if (!ctx) return;
      
      const dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      if (dist < 10) return;

      ctx.beginPath();
      ctx.moveTo(x1, y1);

      const segments = 10;
      let currX = x1;
      let currY = y1;

      for (let i = 0; i < segments; i++) {
        const targetX = x1 + (x2 - x1) * (i / segments);
        const targetY = y1 + (y2 - y1) * (i / segments);
        
        // Add jaggedness
        currX = targetX + (Math.random() - 0.5) * 30;
        currY = targetY + (Math.random() - 0.5) * 30;
        
        ctx.lineTo(currX, currY);
      }

      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `rgba(0, 220, 255, ${opacity})`;
      ctx.lineWidth = 2;
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#00d0ff';
      ctx.stroke();

      // Core white bolt
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      currX = x1;
      currY = y1;
      for (let i = 0; i < segments; i++) {
         currX = x1 + (x2 - x1) * (i / segments) + (Math.random() - 0.5) * 10;
         currY = y1 + (y2 - y1) * (i / segments) + (Math.random() - 0.5) * 10;
         ctx.lineTo(currX, currY);
      }
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.8})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (mouseRef.current.active) {
        // Source is approximately the center of the brain in the image
        const startX = canvas.width * 0.7; // Adjusted to where the brain logo is in the image
        const startY = canvas.height * 0.35;
        
        // Draw 2-3 bolts for intensity
        for(let i=0; i<2; i++) {
          drawLightning(startX, startY, mouseRef.current.x, mouseRef.current.y, Math.random() * 0.5 + 0.5);
        }

        // Draw some minor sparks around the mouse
        for (let i = 0; i < 3; i++) {
          const sx = mouseRef.current.x + (Math.random() - 0.5) * 20;
          const sy = mouseRef.current.y + (Math.random() - 0.5) * 20;
          ctx.fillStyle = '#00d0ff';
          ctx.beginPath();
          ctx.arc(sx, sy, Math.random() * 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      };
    }
  };

  const handleMouseLeave = () => {
    mouseRef.current.active = false;
  };

  return (
    <div 
      ref={containerRef}
      className="interactive-hero-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        width: '100%',
        height: '600px',
        borderRadius: '24px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.1)',
        background: '#000',
        cursor: 'crosshair',
        boxShadow: '0 0 40px rgba(0, 220, 255, 0.1)'
      }}
    >
      <Image 
        src="/images/focus-ai-brain.jpg" 
        alt="Focus AI Mascot" 
        fill
        sizes="(max-width: 768px) 100vw, 800px"
        style={{ objectFit: 'cover', opacity: 0.8 }}
        priority
      />
      
      <canvas 
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 2
        }}
      />

      {/* Subtle overlay to enhance the digital feel */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
    </div>
  );
};

export default InteractiveHero;

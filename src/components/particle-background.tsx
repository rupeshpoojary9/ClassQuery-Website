'use client';
import { useMemo } from 'react';

const ParticleBackground = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => {
      const size = Math.random() * 3 + 1;
      const style = {
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}%`,
        top: `calc(${Math.random() * 100}% + 100vh)`,
        animationDuration: `${Math.random() * 30 + 20}s`,
        animationDelay: `-${Math.random() * 20}s`,
      };
      return (
        <div
          key={i}
          className="absolute rounded-full bg-foreground/10 animate-particle"
          style={style}
        />
      );
    });
  }, []);

  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
      {particles}
    </div>
  );
};

export default ParticleBackground;

'use client';
import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

type AnimationType = 'fadeInUp' | 'scaleIn' | 'stagger';

interface Props {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number; // in ms
  className?: string;
}

const animations: Record<AnimationType, string> = {
  fadeInUp: 'animate-fadeInUp',
  scaleIn: 'animate-scaleIn',
  stagger: '',
};

export default function AnimateOnScroll({ children, animation = 'fadeInUp', delay = 0, className = '' }: Props) {
  const { ref, isVisible } = useScrollAnimation(0.05);

  const animClass = animation === 'stagger' ? 'stagger-children' : animations[animation];

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animClass : 'opacity-0'}`}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards',
      }}
    >
      {children}
    </div>
  );
}

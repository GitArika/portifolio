import React, { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';
import { cn } from '../utils/cn';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

export const AnimatedSection = ({
  children,
  className,
  direction = 'up',
  delay = 0,
}: AnimatedSectionProps) => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  const directionClasses = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-1000 ease-out opacity-0',
        directionClasses[direction],
        isInView && 'opacity-100 translate-x-0 translate-y-0',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
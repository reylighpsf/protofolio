/**
 * AnimatedSection Component - Wrapper for sections with scroll animations
 */
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Section wrapper with built-in scroll animations
 */
export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0 
}: AnimatedSectionProps) {
  return (
    <section 
      className={`opacity-0 translate-y-8 transition-all duration-700 ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        animationDelay: `${delay}ms`
      }}
    >
      {children}
    </section>
  );
}

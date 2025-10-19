/**
 * Custom hook untuk melacak section yang aktif saat scroll
 */
import { useState, useEffect } from 'react';

/**
 * Hook untuk mendapatkan section yang sedang aktif di viewport
 * @returns ID section yang sedang aktif
 */
export function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    /**
     * Observer callback untuk melacak section yang terlihat
     */
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.6, // 60% section harus terlihat
      rootMargin: '-20% 0px -20% 0px' // Memperkecil area deteksi
    });

    // Observe semua section
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return activeSection;
}

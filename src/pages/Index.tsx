// src/pages/Index.tsx
import React, { useEffect, useRef } from 'react';
import Navigation from '@/components/layout/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import ProductsSection from '@/components/sections/ProductsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactSection from '@/components/sections/ContactSection';
import { useTranslation } from 'react-i18next';

// Small Parallax / 3D scene for the index hero. Lightweight, prefers-reduced-motion aware.
const ParallaxScene: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const layerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const rafRef = useRef<number | null>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const scrollY = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return; // skip animations for accessibility

    const depths = [0.03, 0.06, 0.12, 0.22];

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      pointer.current.x = (cx / rect.width - 0.5) * 2; // -1..1
      pointer.current.y = (cy / rect.height - 0.5) * 2;
    };

    const onScroll = () => {
      scrollY.current = window.scrollY || window.pageYOffset;
    };

    const animate = () => {
      const px = pointer.current.x;
      const py = pointer.current.y;
      const s = Math.min(1, scrollY.current / 800);

      layerRefs.current.forEach((el, i) => {
        if (!el) return;
        const depth = depths[i] || 0.05;
        const tx = px * depth * 40; // translate range
        const ty = py * depth * 30 + s * depth * 80; // parallax on scroll
        const rz = px * depth * 6; // subtle rotation
        // Use transform with translate3d for GPU acceleration
        el.style.transform = `translate3d(${tx}px, ${ty}px, ${-depth * 200}px) rotateY(${rz}deg)`;
        el.style.willChange = 'transform';
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('scroll', onScroll, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Render layered SVG/gradients behind children
  return (
    <div ref={containerRef} className="relative isolate" aria-hidden>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div ref={(el) => (layerRefs.current[0] = el)} className="absolute inset-[-10%] opacity-60">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="gA" x1="0" x2="1">
                <stop offset="0" stopColor="#07102a" />
                <stop offset="1" stopColor="#07203a" />
              </linearGradient>
            </defs>
            <rect width="1200" height="800" fill="url(#gA)" />
            <g opacity="0.12">
              <circle cx="900" cy="120" r="240" fill="#3b82f6" />
            </g>
          </svg>
        </div>

        <div ref={(el) => (layerRefs.current[1] = el)} className="absolute inset-0 opacity-40">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <g fill="#60a5fa" opacity="0.08">
              <rect x="40" y="200" width="600" height="360" rx="40" />
              <rect x="720" y="300" width="420" height="240" rx="32" />
            </g>
          </svg>
        </div>

        <div ref={(el) => (layerRefs.current[2] = el)} className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <g fill="#0ea5a3" opacity="0.06">
              <circle cx="220" cy="520" r="160" />
              <circle cx="480" cy="300" r="120" />
            </g>
          </svg>
        </div>

        <div ref={(el) => (layerRefs.current[3] = el)} className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <g fill="#93c5fd" opacity="0.06">
              <rect x="200" y="40" width="760" height="140" rx="70" />
            </g>
          </svg>
        </div>
      </div>

      <div className="relative">{children}</div>
    </div>
  );
};

const Index = () => {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  return (
    <div className="min-h-screen bg-black text-white" dir={isRtl ? 'rtl' : 'ltr'}>
      <Navigation /> {/* Make sure Navigation uses `useTranslation` for its links/text */}
      <main role="main">
        <ParallaxScene>
          <HeroSection /> {/* Hero is now layered above the 3D scene */}
        </ParallaxScene>

        <ProductsSection /> {/* You will need to update this similarly */}
        <ServicesSection /> {/* You will need to update this similarly */}
        <ContactSection /> {/* You will need to update this similarly */}
      </main>
    </div>
  );
};

export default Index;
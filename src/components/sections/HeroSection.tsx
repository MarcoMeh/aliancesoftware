// src/components/sections/HeroSection.tsx
import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket, Code, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = () => setPrefersReducedMotion(mq.matches);
    handler();
    mq.addEventListener ? mq.addEventListener('change', handler) : mq.addListener(handler);
    return () => {
      mq.removeEventListener ? mq.removeEventListener('change', handler) : mq.removeListener(handler);
    };
  }, []);

  useEffect(() => {
    const el = document.getElementById('hero-3d') as any | null;
    if (!el) return;
    if (prefersReducedMotion) {
      el.removeAttribute('auto-rotate');
    } else {
      el.setAttribute('auto-rotate', '');
    }
  }, [prefersReducedMotion]);

  // Lazy-load the model when hero is visible (improves initial page performance)
  useEffect(() => {
    const el = document.getElementById('hero-3d') as any | null;
    if (!el) return;

    // If src already present, nothing to do
    if (el.getAttribute('src')) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const modelSrc = el.getAttribute('data-src');
          if (modelSrc) el.setAttribute('src', modelSrc);
          observer.disconnect();
        }
      });
    }, { root: null, threshold: 0.2 });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center py-20 px-4 md:px-8 overflow-hidden text-white"
      role="banner"
      aria-labelledby="hero-title"
    >
      {/* Decorative background images: use <picture> with WebP + JPG fallback for broader support */}
      {/* Background: use CSS-defined blobs for visual depth (lighter DOM) */}
      <div className="absolute inset-0 z-10 pointer-events-none" aria-hidden="true">
        <div className="hero-background-blobs">
          <div className="blob" />
          <div className="blob" />
          <div className="blob" />
          <div className="blob" />
        </div>
      </div>

      {/* Content Wrapper */}
      <div
        className={`relative z-20 w-full max-w-6xl mx-auto
                    flex flex-col items-center justify-center text-center
                    ${isRtl ? 'rtl' : 'ltr'}`}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
          <div className="max-w-4xl mx-auto animate-fade-in"> {/* Using your defined animate-fade-in */}
          {/* Badge - Enhanced styling */}
          <div
            className={`inline-flex items-center gap-2 bg-gradient-to-r from-[#1e3a8a]/20 to-[#3b82f6]/20 border border-[#1e3a8a]/40 text-[#60a5fa] rounded-full px-6 py-2 mb-8 text-base font-semibold backdrop-blur-sm shadow-lg
                        ${isRtl ? 'flex-row-reverse' : ''}`}
            role="status" // Semantically indicates status information
          >
            <Rocket className="w-5 h-5 text-[#93c5fd]" /> {/* Icon color adjusted */}
            {t('hero.tagline', 'Building Tomorrow\'s Software Today')}
          </div>

          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd]">
              {t('hero.mainHeading', 'Innovative Software')}
            </span>
            <span className="block mt-1 text-white/95 text-3xl md:text-4xl">{t('hero.mainHeadingSpan', 'Solutions & Services')}</span>
          </h1>

          {/* Subheading - concise for faster scanning */}
          <p id="hero-desc" className="text-base md:text-lg text-blue-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('hero.subheadingShort', 'We build modern web and mobile products that grow your business.')}
          </p>

          {/* CTA Buttons - More prominent and interactive */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/products" aria-label={t('hero.exploreProducts', 'Explore Products')} className={`w-full sm:w-auto ${isRtl ? 'flex-row-reverse' : ''}`}>
              <Button
                variant="default"
                size="lg"
                className={`group px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300
                            bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] text-white hover:from-[#60a5fa] hover:to-[#3b82f6]
                            ${isRtl ? 'flex-row-reverse' : ''}`}
              >
                <Code className={`w-5 h-5 group-hover:scale-110 transition-transform ${isRtl ? 'ml-3' : 'mr-3'}`} />
                {t('hero.exploreProducts', 'Explore Products')}
                <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRtl ? 'mr-3 rotate-180' : 'ml-3'}`} />
              </Button>
            </Link>

            <Link to="/services" aria-label={t('hero.requestService', 'Request Service')} className={`w-full sm:w-auto ${isRtl ? 'flex-row-reverse' : ''}`}>
              <Button
                variant="outline"
                size="lg"
                className={`group px-8 py-3 text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300
                            border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white
                            ${isRtl ? 'flex-row-reverse' : ''}`}
              >
                <Laptop className={`w-5 h-5 group-hover:-translate-y-1 transition-transform ${isRtl ? 'ml-3' : 'mr-3'}`} />
                {t('hero.requestService', 'Request Service')}
                <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRtl ? 'mr-3 rotate-180' : 'ml-3'}`} />
              </Button>
            </Link>
          </div>

          {/* 3D model viewer (large screens only) */}
          <div className="hidden lg:block absolute right-8 top-12 z-10 pointer-events-none" aria-hidden={prefersReducedMotion ? 'true' : 'false'}>
            {/* Prefer reduced motion check to avoid auto-rotate when user prefers reduced motion */}
            {/* model-viewer will be lazy-initialized when the hero is visible */}
            {/* @ts-ignore - custom element */}
            <model-viewer
              id="hero-3d"
              data-src="https://modelviewer.dev/shared-assets/models/DamagedHelmet.glb"
              /* poster removed to avoid duplicating the hero background image */
              alt={t('hero.modelAlt', '3D product preview')}
              ar
              camera-controls
              exposure="1"
              style={{ width: '420px', height: '320px', borderRadius: '12px', background: 'transparent' }}
            />
          </div>

          {/* Optional: Add Stats below CTA for more immediate impact */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-blue-100 font-medium max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd]">15+</span>
              <span className="text-sm md:text-base text-blue-300 mt-1">{t('hero.stats.productsLaunched', 'On Going Products')}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd]">94%</span>
              <span className="text-sm md:text-base text-blue-300 mt-1">{t('hero.stats.happyClients', 'Happy Clients')}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd]">7+</span>
              <span className="text-sm md:text-base text-blue-300 mt-1">{t('hero.stats.yearsExperience', 'Years Experience')}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd]">98%</span>
              <span className="text-sm md:text-base text-blue-300 mt-1">{t('hero.stats.successRate', 'Success Rate')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
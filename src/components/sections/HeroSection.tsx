// src/components/sections/HeroSection.tsx
import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket, Code, Laptop } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  return (
    <section
      className="relative min-h-screen flex items-center justify-center py-20 px-4 md:px-8 overflow-hidden text-white"
      style={{
        backgroundImage: `url('/images/hero-background4.jpg')`, // <--- Add your image path here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Abstract Background Elements: Inspired by code, circuits, and digital marketing */}
      <div className="absolute inset-0 z-0 opacity-10">
        {/* Large Blobs - Using animate-blob-animate and Tailwind's delay utilities */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#1e3a8a] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob-animate" />
        <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-[#3b82f6] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob-animate delay-2000" /> {/* Using Tailwind's delay-2000 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#0a0a0a] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob-animate delay-4000" /> {/* Using Tailwind's delay-4000 */}
        
        {/* Subtle grid and lines - Using animate-glow and randomized duration from style */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-500 rounded-full"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `glow ${Math.random() * 10 + 5}s infinite alternate`, // Keeps randomized duration
              }}
            />
          ))}
          <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
      </div>

      {/* Content Wrapper */}
      <div
        className={`relative z-10 w-full max-w-6xl mx-auto
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

           <h1 className="text-5xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd] drop-shadow-lg">
              {t('hero.mainHeading', 'Innovative Software')}
            </span>
            <br /> {/* This ensures a line break */}
            <span className="text-white/95">{t('hero.mainHeadingSpan', 'Solutions & Services')}</span>
          </h1>

          {/* Subheading - Improved contrast and readability */}
          <p className="text-lg md:text-xl text-blue-200 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            {t('hero.subheading', 'Transform your ideas into powerful software products. We develop cutting-edge applications, create stunning websites, and provide comprehensive digital solutions that drive success.')}
          </p>

          {/* CTA Buttons - More prominent and interactive */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              variant="default"
              size="lg"
              className={`group px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300
                          bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] text-white hover:from-[#60a5fa] hover:to-[#3b82f6]
                          ${isRtl ? 'flex-row-reverse' : ''}`}
              onClick={() => (window.location.href = '/products')}
              aria-label={t('hero.exploreProducts', 'Explore Products')}
            >
              <Code className={`w-5 h-5 group-hover:scale-110 transition-transform ${isRtl ? 'ml-3' : 'mr-3'}`} />
              {t('hero.exploreProducts', 'Explore Products')}
              <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRtl ? 'mr-3 rotate-180' : 'ml-3'}`} />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className={`group px-8 py-3 text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300
                          border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white
                          ${isRtl ? 'flex-row-reverse' : ''}`}
              onClick={() => (window.location.href = '/services')}
              aria-label={t('hero.requestService', 'Request Service')}
            >
              <Laptop className={`w-5 h-5 group-hover:-translate-y-1 transition-transform ${isRtl ? 'ml-3' : 'mr-3'}`} />
              {t('hero.requestService', 'Request Service')}
              <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRtl ? 'mr-3 rotate-180' : 'ml-3'}`} />
            </Button>
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
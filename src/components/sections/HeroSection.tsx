// src/components/sections/HeroSection.tsx
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Rocket, Code } from 'lucide-react';
import { useTranslation } from 'react-i18next';
// No local CSS import is needed because you're using Tailwind CSS and global index.css for blobs.

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  return (
    // APPLY bg-gradient-background from tailwind.config.js
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-24
                 bg-gradient-background" // This Tailwind utility pulls from your tailwind.config.js
    >

      {/* Dynamic Animated Background Blobs */}
      {/* These will use the CSS defined in index.css and animation from tailwind.config.js */}
      <div className="hero-background-blobs">
        <div className="blob" />
        <div className="blob" />
        <div className="blob" />
        <div className="blob" />
      </div>

      {/* Content Wrapper */}
      <div
        // Removed `text-black` to rely on `text-card-foreground`
        className={`relative z-10 w-full max-w-5xl mx-auto p-8 md:p-12
                    bg-card rounded-2xl shadow-card
                    flex flex-col items-center justify-center text-center
                    ${isRtl ? 'rtl' : 'ltr'}`}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {/* text-card-foreground ensures text color comes from your theme */}
        <div className="max-w-4xl mx-auto animate-fade-in text-card-foreground">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 text-sm text-primary backdrop-blur-sm
                        ${isRtl ? 'flex-row-reverse' : ''}`}
          >
            <Rocket className="w-4 h-4" />
            {t('hero.tagline', 'Building Tomorrow\'s Software Today')}
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">{t('hero.mainHeading', 'Innovative Software')}</span>
            <br />
            <span className="text-foreground">{t('hero.mainHeadingSpan', 'Solutions & Services')}</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-black mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subheading', 'Transform your ideas into powerful software products. We develop cutting-edge applications, create stunning websites, and provide comprehensive digital solutions that drive success.')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              variant="default"
              size="lg"
              className="group"
              onClick={() => (window.location.href = '/products')}
            >
              <Code className={`w-5 h-5 ${isRtl ? 'ml-2' : 'mr-2'}`} />
              {t('hero.exploreProducts', 'Explore Products')}
              <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRtl ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="group"
              onClick={() => (window.location.href = '/services')}
            >
              <Play className={`w-5 h-5 ${isRtl ? 'ml-2' : 'mr-2'}`} />
              {t('hero.requestService', 'Request Service')}
              <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRtl ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
// src/components/sections/HeroSection.tsx
import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket, Code, Laptop } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Ensure this is imported

const HeroSection = () => { // The functional component declaration was missing
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  return (
    <section
      className="relative min-h-screen flex items-center justify-center py-20 px-4 md:px-8 overflow-hidden
                 text-card-foreground"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-background4.jpg" // Path to your background image. Make sure to place an image here!
          alt="Modern software development background"
          className="w-full h-full object-cover"
        />
        {/* Optional: Overlay for better text readability and style blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/60 to-transparent"></div>
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Dark overlay for contrast */}
      </div>

      {/* Dynamic Animated Background Blobs - Keep them if desired, but they might be less visible with a strong background image */}
      {/* If you want to keep them, ensure their z-index is higher than the image but lower than content */}
      {/* <div className="hero-background-blobs relative z-0">
        <div className="blob" />
        <div className="blob" />
        <div className="blob" />
        <div className="blob" />
      </div> */}

      {/* Content Wrapper */}
      <div
        className={`relative z-10 w-full max-w-6x mx-auto
                    flex flex-col items-center justify-center text-center
                    ${isRtl ? 'rtl' : 'ltr'}`}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge - Enhanced styling */}
          <div
            className={`inline-flex items-center gap-2 bg-gradient-to-r from-primary/120 to-accent/15 border border-primary/25 text-primary rounded-full px-5 py-5 mb-8 text-base font-semibold backdrop-blur-md shadow-md
                        ${isRtl ? 'flex-row-reverse' : ''}`}
            role="status"
          >
            <Rocket className="w-5 h-5 text-primary-foreground/80" />
            {t('hero.tagline', 'Building Tomorrow\'s Software Today')}
          </div>

          {/* Main Heading - Larger and more striking */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-5 leading-tight text-white">
            <span className="gradient-text">{t('hero.mainHeading', 'Innovative Software ')}</span>
            <br className="block sm:show" />
            <span className="text-white">{t('hero.mainHeadingSpan', 'Solutions & Services')}</span>
          </h1>

          {/* Subheading - Improved contrast and readability */}
          <p className="text-lg md:text-xl text-white mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subheading', 'Transform your ideas into powerful software products. We develop cutting-edge applications, create stunning websites, and provide comprehensive digital solutions that drive success.')}
          </p>

          {/* CTA Buttons - More prominent and interactive */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              variant="default"
              size="lg"
              className={`group px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300
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
              className={`group px-8 py-3 text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 border-white text-white hover:bg-white hover:text-primary`}
              onClick={() => (window.location.href = '/services')}
              aria-label={t('hero.requestService', 'Request Service')}
            >
              <Laptop className={`w-5 h-5 group-hover:-translate-y-1 transition-transform ${isRtl ? 'ml-3' : 'mr-3'}`} />
              {t('hero.requestService', 'Request Service')}
              <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRtl ? 'mr-3 rotate-180' : 'ml-3'}`} />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
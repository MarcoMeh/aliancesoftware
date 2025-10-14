// src/components/sections/HeroSection.tsx
import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket, Code, Laptop } from 'lucide-react'; // Added Laptop icon, removed Play as it felt less direct for "Request Service"
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  return (
    <section
      className="relative min-h-screen flex items-center justify-center py-20 px-4 md:px-8 overflow-hidden
                 bg-gradient-background text-card-foreground" // Ensure text color is inherited
    >
      {/* Dynamic Animated Background Blobs */}
      <div className="hero-background-blobs">
        <div className="blob" />
        <div className="blob" />
        <div className="blob" />
        <div className="blob" />
      </div>

      {/* Content Wrapper */}
      <div
        className={`relative z-10 w-full max-w-6xl mx-auto
                    flex flex-col items-center justify-center text-center
                    ${isRtl ? 'rtl' : 'ltr'}`}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge - Enhanced styling */}
          <div
            className={`inline-flex items-center gap-2 bg-gradient-to-r from-primary/15 to-accent/15 border border-primary/25 text-primary rounded-full px-5 py-2 mb-8 text-base font-semibold backdrop-blur-sm shadow-md
                        ${isRtl ? 'flex-row-reverse' : ''}`}
            role="status" // Semantically indicates status information
          >
            <Rocket className="w-5 h-5 text-primary-foreground/80" /> {/* Slightly darker icon */}
            {t('hero.tagline', 'Building Tomorrow\'s Software Today')}
          </div>

          {/* Main Heading - Larger and more striking */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tighter">
            <span className="gradient-text">{t('hero.mainHeading', 'Innovative Software')}</span>
            <br className="block sm:hidden" /> {/* Line break on smaller screens */}
            <span className="text-foreground/90">{t('hero.mainHeadingSpan', 'Solutions & Services')}</span>
          </h1>

          {/* Subheading - Improved contrast and readability */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
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
              className={`group px-8 py-3 text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300
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
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-foreground/90 font-medium max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold gradient-text">100+</span>
              <span className="text-sm md:text-base text-muted-foreground mt-1">{t('hero.stats.productsLaunched', 'Products Launched')}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold gradient-text">500+</span>
              <span className="text-sm md:text-base text-muted-foreground mt-1">{t('hero.stats.happyClients', 'Happy Clients')}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold gradient-text">5+</span>
              <span className="text-sm md:text-base text-muted-foreground mt-1">{t('hero.stats.yearsExperience', 'Years Experience')}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold gradient-text">98%</span>
              <span className="text-sm md:text-base text-muted-foreground mt-1">{t('hero.stats.successRate', 'Success Rate')}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
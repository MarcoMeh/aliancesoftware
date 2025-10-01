// src/components/sections/HeroSection.tsx
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Rocket, Code } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import { useTranslation } from 'react-i18next'; // <--- Import useTranslation hook

const HeroSection = () => {
  const { t } = useTranslation(); // <--- Initialize useTranslation hook

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-black">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 text-sm text-primary backdrop-blur-sm">
            <Rocket className="w-4 h-4" />
            {t('hero.tagline')} {/* <--- Translated content */}
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">{t('hero.mainHeading')}</span> {/* <--- Translated content */}
            <br />
            <span className="text-foreground">{t('hero.mainHeadingSpan')}</span> {/* <--- Separated for better translation */}
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subheading')} {/* <--- Translated content */}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button variant="hero" size="hero" className="group" onClick={() => window.location.href = '/products'}>
              <Code className="w-5 h-5" />
              {t('hero.exploreProducts')} {/* <--- Translated content */}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button variant="outline" size="hero" className="group" onClick={() => window.location.href = '/services'}>
              <Play className="w-5 h-5" />
              {t('hero.requestService')} {/* <--- Translated content */}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {[
              { label: t('hero.stats.productsLaunched'), value: '50+' },
              { label: t('hero.stats.happyClients'), value: '200+' },
              { label: t('hero.stats.yearsExperience'), value: '8+' },
              { label: t('hero.stats.successRate'), value: '99%' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-glow rounded-full opacity-10 animate-glow" />
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-primary/30 rounded-lg rotate-45 animate-bounce" />
    </section>
  );
};

export default HeroSection;
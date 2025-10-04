import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Code, 
  Globe, 
  Palette, 
  Video, 
  Megaphone, 
  ArrowRight,
  Sparkles,
  Target,
  Zap,
  Shield
} from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const ServicesSection = () => {
  const { t } = useTranslation(); // Initialize the translation hook

  // Define services using translation keys
  const services = [
    {
      icon: Code,
      titleKey: 'servicesSection.serviceItems.softwareDev.title',
      descriptionKey: 'servicesSection.serviceItems.softwareDev.description',
      featuresKeys: [
        'servicesSection.serviceItems.softwareDev.features.webApps',
        'servicesSection.serviceItems.softwareDev.features.mobileApps',
        'servicesSection.serviceItems.softwareDev.features.apiDev',
        'servicesSection.serviceItems.softwareDev.features.cloudSolutions'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      titleKey: 'servicesSection.serviceItems.websiteCreation.title',
      descriptionKey: 'servicesSection.serviceItems.websiteCreation.description',
      featuresKeys: [
        'servicesSection.serviceItems.websiteCreation.features.responsiveDesign',
        'servicesSection.serviceItems.websiteCreation.features.eCommerce',
        'servicesSection.serviceItems.websiteCreation.features.cmsIntegration',
        'servicesSection.serviceItems.websiteCreation.features.seoOptimization'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Palette,
      titleKey: 'servicesSection.serviceItems.brandingPackages.title',
      descriptionKey: 'servicesSection.serviceItems.brandingPackages.description',
      featuresKeys: [
        'servicesSection.serviceItems.brandingPackages.features.logoDesign',
        'servicesSection.serviceItems.brandingPackages.features.brandGuidelines',
        'servicesSection.serviceItems.brandingPackages.features.socialMediaPosts',
        'servicesSection.serviceItems.brandingPackages.features.marketingMaterials'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Video,
      titleKey: 'servicesSection.serviceItems.videoProduction.title',
      descriptionKey: 'servicesSection.serviceItems.videoProduction.description',
      featuresKeys: [
        'servicesSection.serviceItems.videoProduction.features.videoEditing',
        'servicesSection.serviceItems.videoProduction.features.aiVideoGeneration',
        'servicesSection.serviceItems.videoProduction.features.motionGraphics',
        'servicesSection.serviceItems.videoProduction.features.postProduction'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Megaphone,
      titleKey: 'servicesSection.serviceItems.digitalMarketing.title',
      descriptionKey: 'servicesSection.serviceItems.digitalMarketing.description',
      featuresKeys: [
        'servicesSection.serviceItems.digitalMarketing.features.socialMediaAds',
        'servicesSection.serviceItems.digitalMarketing.features.contentCreation',
        'servicesSection.serviceItems.digitalMarketing.features.influencerCampaigns',
        'servicesSection.serviceItems.digitalMarketing.features.analyticsReporting'
      ],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className="py-24 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 text-sm text-primary">
            <Sparkles className="w-4 h-4" />
            {t('servicesSection.ourServices')} {/* Translated */}
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">{t('servicesSection.headingPart1')}</span> {/* Translated */}
            <br />
            <span className="gradient-text">{t('servicesSection.headingPart2')}</span> {/* Translated */}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('servicesSection.subheading')} {/* Translated */}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 card-hover relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
              
              <CardHeader className="relative">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} p-3 mb-4 shadow-lg`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {t(service.titleKey)} {/* Translated */}
                </CardTitle>
                
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {t(service.descriptionKey)} {/* Translated */}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative space-y-4">
                {/* Features List */}
                <div className="space-y-2">
                  {service.featuresKeys.map((featureKey, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{t(featureKey)}</span> {/* Translated */}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button variant="outline" className="w-full group mt-6" onClick={() => window.location.href = '/services'}>
                  {t('servicesSection.learnMore')} {/* Translated */}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 via-primary-light/10 to-primary/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Target className="w-6 h-6 text-primary" />
              <span className="text-primary font-medium">{t('servicesSection.bottomCta.tagline')}</span> {/* Translated */}
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {t('servicesSection.bottomCta.headingPart1')}{" "} {/* Translated */}
              <span className="gradient-text">{t('servicesSection.bottomCta.headingPart2')}</span> {/* Translated */}
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8">
              {t('servicesSection.bottomCta.description')} {/* Translated */}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group" onClick={() => window.location.href = '/contact'}>
                <Zap className="w-5 h-5" />
                {t('servicesSection.bottomCta.requestQuote')} {/* Translated */}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="group" onClick={() => window.location.href = '/products'}>
                <Shield className="w-5 h-5" />
                {t('servicesSection.bottomCta.viewPortfolio')} {/* Translated */}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
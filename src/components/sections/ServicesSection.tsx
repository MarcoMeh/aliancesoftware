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
      color: 'from-[#3b82f6] to-[#60a5fa]' // Blue-Cyan gradient
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
      color: 'from-[#22c55e] to-[#4ade80]' // Green-Emerald gradient
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
      color: 'from-[#a855f7] to-[#e879f9]' // Purple-Pink gradient
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
      color: 'from-[#f97316] to-[#f43f5e]' // Orange-Red gradient
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
      color: 'from-[#6366f1] to-[#a855f7]' // Indigo-Purple gradient
    }
  ];

  return (
    <section className="py-24 relative bg-[#0A1128] text-white"> {/* Added text-white here */}
      {/* Abstract Background Elements: Inspired by code, circuits, and digital marketing */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#1e3a8a] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-[#3b82f6] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#0a0a0a] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
        
        {/* Subtle grid and lines */}
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
                animation: `glow ${Math.random() * 10 + 5}s infinite alternate`,
              }}
            />
          ))}
          <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-[#1e3a8a]/20 border border-[#3b82f6]/40 rounded-full px-5 py-2 mb-6 text-sm text-[#93c5fd] font-medium shadow-lg">
            <Sparkles className="w-4 h-4 text-[#fcd34d]" />
            {t('servicesSection.ourServices')} {/* Translated */}
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-7 leading-tight">
            <span className="text-white">{t('servicesSection.headingPart1')}</span> {/* Changed to text-white */}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd] drop-shadow-lg">{t('servicesSection.headingPart2')}</span> {/* Translated */}
          </h2>
          
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            {t('servicesSection.subheading')} {/* Translated */}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group bg-[#0C1530]/70 backdrop-blur-md border border-[#1e3a8a]/50 hover:border-[#3b82f6]/50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-2 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-15 transition-opacity duration-300`} />
              
              <CardHeader className="relative p-6">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-4 shadow-xl flex items-center justify-center`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Ensure title text is white */}
                <CardTitle className="text-2xl font-bold text-white group-hover:text-[#60a5fa] transition-colors duration-300 leading-snug">
                  {t(service.titleKey)} {/* Translated */}
                </CardTitle>
                
                {/* Ensure description text is blue-200 (light blue) */}
                <CardDescription className="text-blue-200 leading-relaxed mt-2">
                  {t(service.descriptionKey)} {/* Translated */}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative p-6 pt-0 space-y-4">
                {/* Features List - ensure text is blue-300 */}
                <div className="space-y-2">
                  {service.featuresKeys.map((featureKey, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-blue-300">
                      <div className="w-1.5 h-1.5 bg-[#60a5fa] rounded-full flex-shrink-0" />
                      <span className="leading-relaxed">{t(featureKey)}</span> {/* Translated */}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  variant="outline" 
                  className="w-full group mt-6 px-6 py-3 text-lg border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white transition-all duration-300" 
                  onClick={() => window.location.href = '/services'}
                >
                  {t('servicesSection.learnMore')} {/* Translated */}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-[#1e3a8a]/20 via-[#3b82f6]/20 to-[#1e3a8a]/20 rounded-2xl p-8 md:p-12 text-center border border-[#3b82f6]/40 backdrop-blur-sm shadow-xl">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Target className="w-6 h-6 text-[#60a5fa]" />
              <span className="text-[#93c5fd] font-medium text-lg">{t('servicesSection.bottomCta.tagline')}</span> {/* Translated */}
            </div>
            
            <h3 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              <span className="text-white">{t('servicesSection.bottomCta.headingPart1')}{" "}</span> {/* Changed to text-white */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd] drop-shadow-lg">{t('servicesSection.bottomCta.headingPart2')}</span> {/* Translated */}
            </h3>
            
            <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
              {t('servicesSection.bottomCta.description')} {/* Translated */}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                size="lg" 
                className="group px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300
                            bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] text-white hover:from-[#60a5fa] hover:to-[#3b82f6]" 
                onClick={() => window.location.href = '/contact'}
              >
                <Zap className="w-5 h-5 mr-2" />
                {t('servicesSection.bottomCta.requestQuote')} {/* Translated */}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group px-8 py-4 text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300
                            border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white" 
                onClick={() => window.location.href = '/products'}
              >
                <Shield className="w-5 h-5 mr-2" />
                {t('servicesSection.bottomCta.viewPortfolio')} {/* Translated */}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
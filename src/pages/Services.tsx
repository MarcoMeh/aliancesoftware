import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code, Palette, Video, TrendingUp, Globe, Megaphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

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
      price: 'Starting at $5,000'
    },
    {
      icon: Globe,
      titleKey: 'servicesSection.serviceItems.websiteCreation.title',
      descriptionKey: 'servicesSection.serviceItems.websiteCreation.description',
      featuresKeys: [
        'servicesSection.serviceItems.websiteCreation.features.responsiveDesign',
        'servicesSection.serviceItems.websiteCreation.features.eCommerce', // Corrected key to match JSON: eCommerce
        'servicesSection.serviceItems.websiteCreation.features.cmsIntegration',
        'servicesSection.serviceItems.websiteCreation.features.seoOptimization'
      ],
      price: 'Starting at $1,500'
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
      price: 'Starting at $2,000'
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
      price: 'Starting at $800'
    },
    {
      icon: TrendingUp,
      titleKey: 'servicesSection.serviceItems.digitalMarketing.title',
      descriptionKey: 'servicesSection.serviceItems.digitalMarketing.description',
      featuresKeys: [
        'servicesSection.serviceItems.digitalMarketing.features.socialMediaAds', // Corrected key to match JSON: socialMediaAds
        'servicesSection.serviceItems.digitalMarketing.features.contentCreation',
        'servicesSection.serviceItems.digitalMarketing.features.influencerCampaigns',
        'servicesSection.serviceItems.digitalMarketing.features.analyticsReporting'
      ],
      price: 'Starting at $1,200'
    },
    // The previous 'Sponsoring & Influencer Campaigns' service item
    // was not present in your provided ar.json under 'serviceItems'.
    // I've commented it out to prevent translation key errors.
    // If you need this service, you must add its translation keys
    // to your ar.json under servicesSection.serviceItems with a new key.
    // For example:
    // {
    //   icon: Megaphone,
    //   titleKey: 'servicesSection.serviceItems.sponsoringCampaigns.title',
    //   descriptionKey: 'servicesSection.serviceItems.sponsoringCampaigns.description',
    //   featuresKeys: [
    //     'servicesSection.serviceItems.sponsoringCampaigns.features.campaignStrategy',
    //     'servicesSection.serviceItems.sponsoringCampaigns.features.influencerOutreach',
    //     'servicesSection.serviceItems.sponsoringCampaigns.features.partnershipManagement',
    //     'servicesSection.serviceItems.sponsoringCampaigns.features.performanceTracking'
    //   ],
    //   price: 'Custom Pricing'
    // }
  ];

  return (
    <div
      className="min-h-screen relative
                 bg-gradient-to-br from-[#0A1128] via-[#0C1530] to-[#121A3D] text-white"
    >
      {/* Abstract Background Elements - Lighter opacity */}
      <div className="absolute inset-0 z-0 opacity-8">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#1e3a8a] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-[#3b82f6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#0a0a0a] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

        {/* Subtle grid and lines */}
        <div className="absolute inset-0 opacity-3 pointer-events-none">
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

      <Navigation />

      <main className="relative z-10 pt-24">
        {/* Header */}
        <section
          className={`py-16 text-center
                      ${isRtl ? 'rtl' : 'ltr'}`}
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          <div className="container mx-auto px-6">
            <div className="mb-12 animate-fade-in">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tighter">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd] drop-shadow-lg">
                  {t('servicesSection.headingPart1')}
                </span>
                <br className="block sm:hidden" />
                <span className="text-white/95">{t('servicesSection.headingPart2')}</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-200 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
                {t('servicesSection.subheading')}
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card
                    key={service.titleKey} // Use titleKey for consistent keying
                    className="group bg-white/5 backdrop-blur-sm border-blue-400/20 hover:border-blue-400/50 card-hover h-full
                               transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div
                        className={`w-12 h-12 bg-gradient-to-r from-[#3b82f6]/50 to-[#60a5fa]/50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg
                                    ${isRtl ? 'ml-auto' : 'mr-auto'}`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl font-semibold group-hover:text-[#60a5fa] transition-colors">
                        {t(service.titleKey)}
                      </CardTitle>
                      <CardDescription className="text-blue-200">
                        {t(service.descriptionKey)}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Features */}
                      <ul className="space-y-2">
                        {service.featuresKeys.map((featureKey, i) => (
                          <li key={i} className="text-sm text-blue-300 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                            {t(featureKey)}
                          </li>
                        ))}
                      </ul>

                      {/* Price */}
                      <div className="pt-4 border-t border-blue-400/20">
                        <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd] mb-4">
                          {service.price}
                        </p>
                        <Button
                          variant="outline"
                          className={`w-full group px-4 py-2 text-base font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300
                                      border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white
                                      ${isRtl ? 'flex-row-reverse' : ''}`}
                        >
                          {t('servicesSection.learnMore')} {/* Using the learnMore key from your JSON */}
                          <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRtl ? 'mr-2 rotate-180' : 'ml-2'}`} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* CTA Section - Adjusted to match servicesSection.bottomCta from your ar.json */}
            <div className="text-center animate-fade-in-up">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd]">
                {t('servicesSection.bottomCta.headingPart1')}
                <br className="block" /> {/* Added line break for two-part heading */}
                {t('servicesSection.bottomCta.headingPart2')}
              </h3>
              <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                {t('servicesSection.bottomCta.description')}
              </p>
              <Button
                variant="default"
                size="lg"
                className={`group px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300
                            bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] text-white hover:from-[#60a5fa] hover:to-[#3b82f6]
                            ${isRtl ? 'flex-row-reverse' : ''}`}
              >
                {t('servicesSection.bottomCta.requestQuote')}
                <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRtl ? 'mr-3 rotate-180' : 'ml-3'}`} />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;
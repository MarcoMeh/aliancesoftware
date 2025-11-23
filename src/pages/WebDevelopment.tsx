import Navigation from '@/components/layout/Navigation';
import { useTranslation } from 'react-i18next';
import { Sparkles, Code, Globe, ArrowRight, ArrowLeft } from 'lucide-react'; // Added ArrowLeft
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation as SwiperNavigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Import your new website data
// IMPORTANT: Ensure your websiteData has an 'images' array for each project
// Example:
// const websiteData = [
//   {
//     id: '1',
//     name: 'Website A',
//     description: 'Description for Website A.',
//     imageUrl: '/path/to/image1_main.jpg', // Main image for the card
//     images: [ // Array of images for the inner slider
//       '/path/to/image1_slide1.jpg',
//       '/path/to/image1_slide2.jpg',
//       '/path/to/image1_slide3.jpg',
//     ]
//   },
//   // ... more projects
// ];
import websiteData from '@/data/WebData'; // Adjust path as necessary

const WebDevelopment = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const serviceFilter = params.get('service');

  // Filter projects by category when a service query param is present
  const projectsToShow = serviceFilter ? websiteData.filter((p) => p.category === serviceFilter) : websiteData;

  return (
    <div
      className="min-h-screen relative overflow-hidden
      bg-gradient-to-br from-[#0A1128] via-[#0C1530] to-[#121A3D] text-white"
    >
      {/* Abstract Background Elements (same as Services page) */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-40 h-40 sm:w-64 sm:h-64 bg-[#1e3a8a] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-1/3 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-[#3b82f6] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 sm:w-80 h-56 sm:h-80 bg-[#0a0a0a] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
        <div className="absolute inset-0 opacity-5 pointer-events-none hidden sm:block">
          {Array.from({ length: 30 }).map((_, i) => (
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
        <section
          className={`py-16 text-center ${isRtl ? 'rtl' : 'ltr'}`}
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          <div className="container mx-auto px-6">
            <div className="mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-[#1e3a8a]/20 border border-[#3b82f6]/40 rounded-full px-5 py-2 mb-6 text-sm text-[#93c5fd] font-medium shadow-lg">
                <Code className="w-4 h-4 text-[#fcd34d]" />
                {t('webDevelopmentPage.tagline')}
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tighter">
                <span className="text-white">
                  {t('webDevelopmentPage.headingPart1')}
                </span>
                <br className="block sm:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd] drop-shadow-lg">
                  {t('webDevelopmentPage.headingPart2')}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-blue-200 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
                {t('webDevelopmentPage.subheading')}
              </p>
            </div>
          </div>
        </section>

        {/* Section for displaying all websites vertically, each with a horizontal slider */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-extrabold text-center mb-12">
              <span className="text-white">{t('webDevelopmentPage.projectsSection.titlePart1')} </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd]">
                {t('webDevelopmentPage.projectsSection.titlePart2')}
              </span>
            </h2>

            {/* Show selected service badge when filtered */}
            {serviceFilter && (
              <div className="flex items-center justify-center mb-8">
                <div className="inline-flex items-center gap-3 bg-[#07102a]/60 border border-[#3b82f6]/40 rounded-full px-4 py-2 text-sm text-blue-100">
                  <span className="text-xs uppercase tracking-wider text-[#93c5fd] font-semibold">{t(`servicesSection.serviceItems.${serviceFilter}.title`) || serviceFilter}</span>
                  <span className="text-xs text-blue-200">•</span>
                  <span className="text-xs text-blue-200">{projectsToShow.length} {projectsToShow.length === 1 ? t('webDevelopmentPage.project') : t('webDevelopmentPage.projects')}</span>
                  <Link to="/web-development" className="ml-3 text-sm text-[#60a5fa] hover:underline">{t('webDevelopmentPage.showAll') || 'Show all'}</Link>
                </div>
              </div>
            )}

            {/* Map over websiteData to create a vertical list of projects */}
            <div className="space-y-24"> {/* Increased space between projects */}
              {projectsToShow.length > 0 ? (
                projectsToShow.map((project, index) => (
                  <div
                    key={project.id}
                    className="bg-[#0C1530]/70 backdrop-blur-md border border-[#1e3a8a]/50 rounded-xl p-6 md:p-12 relative overflow-hidden group"
                  >
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 group-hover:text-[#60a5fa] transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="text-base md:text-lg text-blue-200 mb-6 max-w-3xl mx-auto leading-relaxed">
                      {project.description}
                    </p>

                    {/* Horizontal Swiper for each project's images */}
                    <div className="relative w-full h-[220px] sm:h-[320px] md:h-[420px] mb-6 md:mb-8 rounded-xl overflow-hidden shadow-lg">
                      <Swiper
                        pagination={{ clickable: true, dynamicBullets: true }}
                        navigation={{
                          nextEl: `.swiper-button-next-${project.id}`,
                          prevEl: `.swiper-button-prev-${project.id}`,
                        }}
                        modules={[Pagination, SwiperNavigation, Autoplay]}
                        className="myHorizontalSwiper h-full w-full"
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        speed={600}
                        loop={true}
                      >
                        {project.images && project.images.map((image, imgIndex) => (
                          <SwiperSlide key={imgIndex}>
                            <img
                              src={image}
                              alt={`${project.name} - Screenshot ${imgIndex + 1}`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              decoding="async"
                            />
                          </SwiperSlide>
                        ))}
                        {/* If no images array, fall back to main imageUrl */}
                        {!project.images && project.imageUrl && (
                          <SwiperSlide>
                            <img src={project.imageUrl} alt={project.name} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                          </SwiperSlide>
                        )}
                      </Swiper>

                      {/* Navigation Arrows */}
                      <div className={`swiper-button-prev-${project.id} absolute top-1/2 -translate-y-1/2 left-3 z-10 cursor-pointer p-2 rounded-full bg-[#0a2546]/60 hover:bg-[#0a2546]/80 transition-colors`}> 
                        <ArrowLeft className="w-5 h-5 text-white" />
                      </div>
                      <div className={`swiper-button-next-${project.id} absolute top-1/2 -translate-y-1/2 right-3 z-10 cursor-pointer p-2 rounded-full bg-[#0a2546]/60 hover:bg-[#0a2546]/80 transition-colors`}>
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <Link to={`/website/${project.id}`}>
                        <Button
                          variant="default"
                          size="lg"
                          className="px-6 py-3 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] text-white"
                          aria-label={`View details for ${project.name}`}
                        >
                          {t('webDevelopmentPage.viewProject')}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>

                      <div className="text-sm text-blue-200 opacity-90">{project.shortNote || ''}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-12 text-center text-blue-200">{t('webDevelopmentPage.noProjects') || 'No projects found for this service.'}</div>
              )}
            </div>
          </div>
        </section>

        {/* Call to action for new projects (kept at the bottom) */}
        <section className="py-16 w-full flex justify-center">
            <div className="container mx-auto px-6">
                <div className="bg-gradient-to-r from-[#1e3a8a]/20 via-[#3b82f6]/20 to-[#1e3a8a]/20 rounded-2xl p-8 md:p-12 text-center border border-[#3b82f6]/40 backdrop-blur-sm shadow-xl animate-fade-in-up">
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-center justify-center gap-3 mb-6">
                    <Globe className="w-6 h-6 text-[#60a5fa]" />
                    <span className="text-[#93c5fd] font-medium text-lg">{t('webDevelopmentPage.cta.tagline')}</span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                    <span className="text-white">{t('webDevelopmentPage.cta.headingPart1')}{" "}</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd] drop-shadow-lg">
                        {t('webDevelopmentPage.cta.headingPart2')}
                    </span>
                    </h3>
                    <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                    {t('webDevelopmentPage.cta.description')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        variant="default"
                        size="lg"
                        className={`group px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300
                                    bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] text-white hover:from-[#60a5fa] hover:to-[#3b82f6]`}
                        onClick={() => window.location.href = '/contact'}
                    >
                        <Sparkles className="w-5 h-5 mr-2" />
                        {t('webDevelopmentPage.cta.startProject')}
                        <ArrowRight className={`w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform`} />
                    </Button>
                    </div>
                </div>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
};

export default WebDevelopment;
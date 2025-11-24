// src/pages/WebDetails.tsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// Corrected import path for websiteData
import websiteData from '@/data/WebData'; // Adjust this path if your websiteData.js is elsewhere
import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle2, DollarSign } from 'lucide-react';
import { Sparkles, ArrowRight } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';

const WebDetails = () => { // Make sure this component name matches your file name and App.tsx import
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  // Find the website details based on the ID from the URL
  const website = websiteData.find((site) => site.id === id);

  if (!website) {
    // Handle case where website is not found (e.g., invalid ID in URL)
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0A1128] to-[#121A3D] text-white flex items-center justify-center">
        <p className="text-2xl">{t('websiteDetail.notFound')}</p> {/* Use translation for this */}
      </div>
    );
  }

  // hold current main image for the gallery
  const [mainImg, setMainImg] = useState(website.imageUrl);

  // Function to handle "Buy Now" click
  const handleBuyNow = () => {
    // Navigate to a dedicated checkout/contact form page, passing the website ID
    navigate(`/checkout/${website.id}`);
  };

  return (
    <div
      className="min-h-screen relative
      bg-gradient-to-br from-[#0A1128] via-[#0C1530] to-[#121A3D] text-white"
    >
      {/* Abstract Background Elements */}
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

      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <Button
            variant="ghost"
            className="mb-8 text-blue-300 hover:text-white hover:bg-[#1e3a8a]/40"
            onClick={() => navigate('/web-development')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('websiteDetail.backToProjects')}
          </Button>

          <div className="bg-[#0C1530]/70 backdrop-blur-md border border-[#1e3a8a]/50 rounded-2xl p-8 md:p-12 shadow-xl animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
              <div className="md:sticky md:top-28">
                <div className="rounded-lg overflow-hidden bg-[#07102a]">
                  <OptimizedImage
                    src={mainImg}
                    alt={website.name}
                    className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl shadow-lg mb-4 transform hover:scale-[1.01] transition-transform duration-300"
                  />
                </div>

                {/* Thumbnail gallery (mobile scrollable, desktop full rail) */}
                {website.images && website.images.length > 0 && (
                  <div className="mt-3 flex gap-3 overflow-x-auto">
                        {website.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setMainImg(img)}
                        className="flex-shrink-0 w-20 h-14 sm:w-24 sm:h-16 rounded-md overflow-hidden bg-[#061027] border border-transparent hover:border-[#3b82f6]/60"
                        aria-label={`Show screenshot ${idx + 1}`}
                      >
                        <OptimizedImage src={img} alt={`${website.name} screenshot ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
                <div className="flex items-center justify-between bg-[#1e3a8a]/30 rounded-full px-6 py-3 mt-6 text-xl font-bold text-blue-200 border border-[#3b82f6]/40">
                  <span className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-[#fcd34d]" />
                    {t('websiteDetail.price')}
                  </span>
                  <span className="text-white text-3xl">
                    ${website.price}
                  </span>
                </div>
                <Button
                  className={`w-full group mt-6 px-8 py-4 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300
                              bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] text-white hover:from-[#60a5fa] hover:to-[#3b82f6]`}
                  onClick={handleBuyNow}
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  {t('websiteDetail.buyNow')}
                  <ArrowRight className={`w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform`} />
                </Button>
              </div>

              <div>
                <h1 className="text-5xl font-extrabold mb-4 leading-tight text-white drop-shadow-md">
                  {website.name}
                </h1>
                <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                  {website.longDescription}
                </p>

                <h3 className="text-3xl font-bold text-white mb-6">
                  {t('websiteDetail.featuresTitle')}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {website.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-lg text-blue-100">
                      <CheckCircle2 className="w-5 h-5 text-[#22c55e]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <h3 className="text-3xl font-bold text-white mb-6">
                  {t('websiteDetail.technologiesTitle')}
                </h3>
                <div className="flex flex-wrap gap-3 mb-8">
                  {website.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center rounded-full bg-[#1e3a8a]/40 px-4 py-2 text-sm font-medium text-[#93c5fd] border border-[#3b82f6]/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* You can add a demo link here if available */}
                {/* {website.demoLink && (
                  <Link to={website.demoLink} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="group mt-4 px-8 py-3 text-lg border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white transition-all duration-300"
                    >
                      {t('websiteDetail.viewDemo')}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WebDetails; // Ensure this matches the component name
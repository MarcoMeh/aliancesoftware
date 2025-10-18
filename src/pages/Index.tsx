// src/pages/Index.tsx
import Navigation from '@/components/layout/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import ProductsSection from '@/components/sections/ProductsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactSection from '@/components/sections/ContactSection';
// import { useTranslation } from 'react-i18next'; // Only needed if Index.tsx itself has direct text content to translate

const Index = () => {
  // const { t } = useTranslation(); // Only needed if Index.tsx itself has direct text content to translate

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation /> {/* Make sure Navigation uses `useTranslation` for its links/text */}
      <main>
        <HeroSection /> {/* Already updated with translations */}
        <ProductsSection /> {/* You will need to update this similarly */}
        <ServicesSection /> {/* You will need to update this similarly */}
        <ContactSection /> {/* You will need to update this similarly */}
      </main>
    </div>
  );
};

export default Index;
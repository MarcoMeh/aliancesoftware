import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Palette, CheckCircle2, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const BrandingPackages = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-[#08111f] via-[#0b1630] to-[#091827] text-white">
      <Navigation />

      <main className="relative z-10 pt-24 pb-20">
        <div className="container mx-auto px-6">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#2b0b34]/20 rounded-full px-4 py-2 mb-4 text-sm text-[#f3d9ff]">
                <Palette className="w-4 h-4 text-[#f97316]" />
                {t('services.branding.tagline', 'Full Branding Packages')}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">{t('services.branding.title', 'Full Branding Packages')}</h1>
              <p className="text-lg text-blue-200 max-w-2xl mb-6">{t('services.branding.description', 'Complete brand identity systems including logo, guidelines and marketing assets.')}</p>

              <div className="flex gap-4">
                <Link to="/contact"><Button className="bg-gradient-to-r from-[#a855f7] to-[#f472b6]">{t('contact.getQuote', 'Request a Quote')}</Button></Link>
                <Link to="/services"><Button variant="outline">{t('services.branding.explore', 'Explore services')}</Button></Link>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-tr from-[#12021a] to-[#24102f] p-6">
              <div className="aspect-[16/10] rounded-md flex items-center justify-center">
                <img src="/images/services/branding-hero.svg" alt="Branding illustration" className="w-full h-auto max-h-72 object-contain" loading="lazy" />
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {['Logo Design','Brand Guidelines','Stationery & Assets','Social Templates'].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-[#071025]/60 border border-[#3b0b4f]/40">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#2b0b34] rounded-lg"><CheckCircle2 className="w-6 h-6 text-[#f472b6]" /></div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">{t(`services.branding.items.${i}`, item)}</h4>
                    <p className="text-blue-200 text-sm mt-2">{t(`services.branding.itemsDesc.${i}`, 'Professional, on-brand design delivered quickly.')}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
};

export default BrandingPackages;

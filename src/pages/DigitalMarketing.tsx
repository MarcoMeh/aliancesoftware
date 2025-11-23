import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Megaphone, CheckCircle2, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const DigitalMarketing = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-[#041226] via-[#08263a] to-[#061a2d] text-white">
      <Navigation />

      <main className="relative z-10 pt-24 pb-20">
        <div className="container mx-auto px-6">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#12304a]/20 rounded-full px-4 py-2 mb-4 text-sm text-[#cfe8ff]">
                <Megaphone className="w-4 h-4 text-[#60a5fa]" />
                {t('services.marketing.tagline', 'Digital Marketing & Growth')}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">{t('services.marketing.title', 'Digital Marketing')}</h1>
              <p className="text-lg text-blue-200 max-w-2xl mb-6">{t('services.marketing.description', 'Performance marketing, content strategy, and campaign execution to grow your business.')}</p>

              <div className="flex gap-4">
                <Link to="/contact"><Button className="bg-gradient-to-r from-[#6366f1] to-[#a855f7]">{t('contact.getQuote', 'Request a Quote')}</Button></Link>
                <Link to="/services"><Button variant="outline">{t('services.marketing.learnMore', 'Learn more')}</Button></Link>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-tr from-[#061f34] to-[#07243a] p-6">
              <div className="aspect-[16/10] rounded-md flex items-center justify-center">
                <img src="/images/services/marketing-hero.svg" alt="Marketing illustration" className="w-full h-auto max-h-72 object-contain" loading="lazy" />
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {['Paid Ads','Content & SEO','Social Media','Analytics & Reporting'].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-[#071025]/60 border border-[#12344b]/40">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#12304a] rounded-lg"><CheckCircle2 className="w-6 h-6 text-[#93c5fd]" /></div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">{t(`services.marketing.items.${i}`, item)}</h4>
                    <p className="text-blue-200 text-sm mt-2">{t(`services.marketing.itemsDesc.${i}`, 'Proven tactics with transparent reporting.')}</p>
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

export default DigitalMarketing;

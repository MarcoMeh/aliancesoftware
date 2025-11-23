import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Video, CheckCircle2, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const VideoProduction = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-[#071218] via-[#0b1a2b] to-[#07122a] text-white">
      <Navigation />

      <main className="relative z-10 pt-24 pb-20">
        <div className="container mx-auto px-6">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#2b1408]/20 rounded-full px-4 py-2 mb-4 text-sm text-[#ffd7b3]">
                <Video className="w-4 h-4 text-[#f97316]" />
                {t('services.video.tagline', 'Video Production & Motion')}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">{t('services.video.title', 'Video Production')}</h1>
              <p className="text-lg text-blue-200 max-w-2xl mb-6">{t('services.video.description', 'Full-service video production, editing and motion graphics to elevate your brand.')}</p>

              <div className="flex gap-4">
                <Link to="/contact"><Button className="bg-gradient-to-r from-[#f97316] to-[#f43f5e]">{t('contact.getQuote', 'Request a Quote')}</Button></Link>
                <Link to="/services"><Button variant="outline">{t('services.video.showReels', 'View Reels')}</Button></Link>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-tr from-[#16090b] to-[#2a0f12] p-6">
              <div className="aspect-[16/10] rounded-md flex items-center justify-center">
                <img src="/images/services/video-hero.svg" alt="Video production illustration" className="w-full h-auto max-h-72 object-contain" loading="lazy" />
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {['Pre-production','Shooting & Editing','Motion Graphics','Delivery & Formats'].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-[#071025]/60 border border-[#3b1a0f]/40">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#2b1408] rounded-lg"><CheckCircle2 className="w-6 h-6 text-[#f97316]" /></div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">{t(`services.video.items.${i}`, item)}</h4>
                    <p className="text-blue-200 text-sm mt-2">{t(`services.video.itemsDesc.${i}`, 'Professional production and fast delivery.')}</p>
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

export default VideoProduction;

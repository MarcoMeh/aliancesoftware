import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Code, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const SoftwareDevelopment = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-[#07102a] via-[#0b1530] to-[#061234] text-white">
      <Navigation />

      <main className="relative z-10 pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#0b2a55]/20 rounded-full px-4 py-2 mb-4 text-sm text-[#93c5fd]">
                <Code className="w-4 h-4 text-[#fcd34d]" />
                {t('services.software.tagline', 'Custom Software Solutions')}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">{t('services.software.title', 'Software Development')}</h1>
              <p className="text-lg text-blue-200 max-w-2xl mb-6">{t('services.software.description', 'We design and build scalable web and mobile applications tailored to your business needs.')}</p>

              <div className="flex gap-4 flex-wrap">
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] text-white px-6 py-3">{t('contact.getQuote', 'Request a Quote')}</Button>
                </Link>
                <Link to="/web-development">
                  <Button variant="outline" className="px-6 py-3">{t('services.software.viewProjects', 'View our projects')}</Button>
                </Link>
              </div>
            </div>

            <div className="order-first lg:order-last">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#07102a] to-[#0b1830] p-6">
                <div className="aspect-[16/10] w-full rounded-md flex items-center justify-center">
                  <img src="/images/services/software-hero.svg" alt="Software development illustration" className="w-full h-auto max-h-72 object-contain" loading="lazy" />
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              t('services.software.features.webApps', 'Web Applications'),
              t('services.software.features.mobileApps', 'Mobile Apps'),
              t('services.software.features.apiDev', 'APIs & Integrations'),
              t('services.software.features.cloudSolutions', 'Cloud-native Systems'),
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-[#071025]/60 border border-[#1e3a8a]/40">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#07203a] rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-[#60a5fa]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">{item}</h4>
                    <p className="text-blue-200 text-sm mt-2">{t(`services.software.featuresDesc.${i}`, 'We deliver robust solutions with best practices and strong testing.')}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Case studies / CTA */}
          <section className="bg-gradient-to-r from-[#0b2546]/5 to-[#0a2a55]/5 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">{t('services.software.caseStudies', 'Selected Case Studies')}</h3>
            <p className="text-blue-200">{t('services.software.caseIntro', 'Examples of complex systems we delivered for clients across industries.')}</p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default SoftwareDevelopment;

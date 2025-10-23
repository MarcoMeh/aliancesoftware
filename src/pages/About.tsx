import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Target, Users, Award, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const milestones = [
    { year: '2024', titleKey: 'aboutPage.milestones.2024.title', descriptionKey: 'aboutPage.milestones.2024.description' },
    { year: '2025', titleKey: 'aboutPage.milestones.2025_product.title', descriptionKey: 'aboutPage.milestones.2025_product.description' },
    { year: '2025', titleKey: 'aboutPage.milestones.2025_team.title', descriptionKey: 'aboutPage.milestones.2025_team.description' },
  ];

  const team = [
    { nameKey: 'aboutPage.teamMembers.ali_ceo.name', roleKey: 'aboutPage.teamMembers.ali_ceo.role', expertiseKey: 'aboutPage.teamMembers.ali_ceo.expertise', image: 'https://via.placeholder.com/150/60a5fa/ffffff?text=Ali' },
    { nameKey: 'aboutPage.teamMembers.fatima_cto.name', roleKey: 'aboutPage.teamMembers.fatima_cto.role', expertiseKey: 'aboutPage.teamMembers.fatima_cto.expertise', image: 'https://via.placeholder.com/150/93c5fd/ffffff?text=Fatima' },
    { nameKey: 'aboutPage.teamMembers.fatima_design.name', roleKey: 'aboutPage.teamMembers.fatima_design.role', expertiseKey: 'aboutPage.teamMembers.fatima_design.expertise', image: 'https://via.placeholder.com/150/3b82f6/ffffff?text=Fatima' },
    { nameKey: 'aboutPage.teamMembers.ali_developer.name', roleKey: 'aboutPage.teamMembers.ali_developer.role', expertiseKey: 'aboutPage.teamMembers.ali_developer.expertise', image: 'https://via.placeholder.com/150/1e3a8a/ffffff?text=Ali' }
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
                  {t('aboutPage.header.titlePart1', 'About')}
                </span>
                <br className="block sm:hidden" />
                <span className="text-white/95">{t('aboutPage.header.titlePart2', 'Us')}</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-200 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
                {t('aboutPage.header.description', 'Learn about our mission, vision, and the passionate team driving innovation.')}
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <Card
                className="group bg-white/5 backdrop-blur-sm border-blue-400/20 hover:border-blue-400/50 card-hover h-full
                           transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 bg-gradient-to-r from-[#3b82f6]/50 to-[#60a5fa]/50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md
                                ${isRtl ? 'ml-auto' : 'mr-auto'}`}
                  >
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-[#60a5fa] transition-colors">
                    {t('aboutPage.mission.title', 'Our Mission')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200">
                    {t('aboutPage.mission.description', 'To empower businesses with innovative and scalable software solutions that drive growth and efficiency.')}
                  </p>
                </CardContent>
              </Card>

              <Card
                className="group bg-white/5 backdrop-blur-sm border-blue-400/20 hover:border-blue-400/50 card-hover h-full
                           transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 bg-gradient-to-r from-[#3b82f6]/50 to-[#60a5fa]/50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md
                                ${isRtl ? 'ml-auto' : 'mr-auto'}`}
                  >
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-[#60a5fa] transition-colors">
                    {t('aboutPage.vision.title', 'Our Vision')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200">
                    {t('aboutPage.vision.description', 'To be a global leader in technology, recognized for our commitment to excellence, innovation, and client success.')}
                  </p>
                </CardContent>
              </Card>

              <Card
                className="group bg-white/5 backdrop-blur-sm border-blue-400/20 hover:border-blue-400/50 card-hover h-full
                           transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 bg-gradient-to-r from-[#3b82f6]/50 to-[#60a5fa]/50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md
                                ${isRtl ? 'ml-auto' : 'mr-auto'}`}
                  >
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-[#60a5fa] transition-colors">
                    {t('aboutPage.values.title', 'Our Values')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200">
                    {t('aboutPage.values.description', 'Integrity, Innovation, Collaboration, Customer Focus, and Continuous Improvement are at the core of everything we do.')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd]">
                {t('aboutPage.journey.title', 'Our Journey & Milestones')}
              </h2>
              <p className="text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed">
                {t('aboutPage.journey.description', 'A look back at our key achievements and significant moments that shaped who we are today.')}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={`${milestone.year}-${index}`} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#3b82f6]/50 to-[#60a5fa]/50 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                      <Calendar className="w-5 h-5" />
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-px h-16 bg-blue-400/30 mt-4" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className={`flex items-center gap-4 mb-2 ${isRtl ? 'flex-row-reverse justify-end' : ''}`}>
                      <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd]">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-semibold text-white">{t(milestone.titleKey)}</h3>
                    </div>
                    <p className="text-blue-200">{t(milestone.descriptionKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd]">
                {t('aboutPage.team.title', 'Meet Our Talented Team')}
              </h2>
              <p className="text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed">
                {t('aboutPage.team.description', 'Our diverse team of experts is dedicated to bringing your vision to life.')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {team.map((member, index) => (
                <Card
                  key={`${t(member.nameKey)}-${index}`}
                  className="bg-white/5 backdrop-blur-sm border-blue-400/20 hover:border-blue-400/50 text-center card-hover h-full
                             transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-to-r from-[#3b82f6]/50 to-[#60a5fa]/50 rounded-full mx-auto mb-4 overflow-hidden shadow-lg">
                      {member.image ? (
                        <img src={member.image} alt={t(member.nameKey)} className="w-full h-full object-cover" />
                      ) : (
                        <Users className="w-10 h-10 text-white mx-auto my-5" />
                      )}
                    </div>
                    <CardTitle className="text-lg text-white">{t(member.nameKey)}</CardTitle>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd] font-medium">
                      {t(member.roleKey)}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-blue-200">{t(member.expertiseKey)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center animate-fade-in-up">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd]">
                {t('aboutPage.cta.title', 'Join Our Vision')}
              </h3>
              <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                {t('aboutPage.cta.description', 'Interested in partnering with us or joining our team? We\'d love to hear from you.')}
              </p>
              <Button
                variant="outline"
                size="lg"
                className={`group px-8 py-3 text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300
                            border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white
                            ${isRtl ? 'flex-row-reverse' : ''}`}
              >
                {t('aboutPage.cta.button', 'Explore Opportunities')}
                <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRtl ? 'mr-3 rotate-180' : 'ml-3'}`} />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
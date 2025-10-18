import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Target, Users, Award, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Assuming you're using react-i18next

const About = () => {
  // Load from the default 'translation' namespace.
  // This assumes your i18n configuration treats your single large JSON file (e.g., en/translation.json)
  // as the default namespace. If you've split into multiple files (e.g., common.json, aboutPage.json),
  // then the original `useTranslation(['common', 'aboutPage'])` might be correct,
  // but based on your `en translation.json` content, this simplified version is more probable.
  const { t } = useTranslation(); 

  // Milestones and Team data will now reference translation keys
  const milestones = [
    { year: '2024', titleKey: 'aboutPage.milestones.2024.title', descriptionKey: 'aboutPage.milestones.2024.description' },
    { year: '2025', titleKey: 'aboutPage.milestones.2025_product.title', descriptionKey: 'aboutPage.milestones.2025_product.description' },
    { year: '2025', titleKey: 'aboutPage.milestones.2025_team.title', descriptionKey: 'aboutPage.milestones.2025_team.description' },
  ];

  const team = [
    { nameKey: 'aboutPage.teamMembers.ali_ceo.name', roleKey: 'aboutPage.teamMembers.ali_ceo.role', expertiseKey: 'aboutPage.teamMembers.ali_ceo.expertise' },
    { nameKey: 'aboutPage.teamMembers.fatima_cto.name', roleKey: 'aboutPage.teamMembers.fatima_cto.role', expertiseKey: 'aboutPage.teamMembers.fatima_cto.expertise' },
    { nameKey: 'aboutPage.teamMembers.fatima_design.name', roleKey: 'aboutPage.teamMembers.fatima_design.role', expertiseKey: 'aboutPage.teamMembers.fatima_design.expertise' },
    { nameKey: 'aboutPage.teamMembers.ali_developer.name', roleKey: 'aboutPage.teamMembers.ali_developer.role', expertiseKey: 'aboutPage.teamMembers.ali_developer.expertise' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Assuming Navigation component also uses translations from 'common' or is configured globally */}
      <Navigation /> 
      
      <main className="pt-24">
        {/* Header */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">{t('aboutPage.header.title')}</span>
              </h1>
              <p className="text-xl text-black max-w-3xl mx-auto">
                {t('aboutPage.header.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle>{t('aboutPage.mission.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black">
                    {t('aboutPage.mission.description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle>{t('aboutPage.vision.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black">
                    {t('aboutPage.vision.description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle>{t('aboutPage.values.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black">
                    {t('aboutPage.values.description')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t('aboutPage.journey.title')}</h2>
              <p className="text-black">{t('aboutPage.journey.description')}</p>
            </div>

            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={`${milestone.year}-${index}`} className="flex gap-6 mb-8 last:mb-0"> {/* Added index to key for uniqueness */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      <Calendar className="w-5 h-5" />
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-px h-16 bg-border mt-4" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                      <h3 className="text-xl font-semibold">{t(milestone.titleKey)}</h3>
                    </div>
                    <p className="text-black">{t(milestone.descriptionKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t('aboutPage.team.title')}</h2>
              <p className="text-black">{t('aboutPage.team.description')}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {team.map((member, index) => (
                <Card 
                  key={`${t(member.nameKey)}-${index}`} // Added index to key for uniqueness
                  className="bg-card/50 backdrop-blur-sm border-border/50 text-center card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    {/* Placeholder for team member image/avatar */}
                    <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4" />
                    <CardTitle className="text-lg">{t(member.nameKey)}</CardTitle>
                    <p className="text-primary font-medium">{t(member.roleKey)}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-black">{t(member.expertiseKey)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">{t('aboutPage.cta.title')}</h3>
              <p className="text-black mb-8 max-w-2xl mx-auto">
                {t('aboutPage.cta.description')}
              </p>
              <Button variant="outline" size="lg" className="group">
                {t('aboutPage.cta.button')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
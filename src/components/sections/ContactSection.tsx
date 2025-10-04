import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle,
  Globe,
  Twitter,
  Linkedin,
  Github
} from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const ContactSection = () => {
  const { t } = useTranslation(); // Initialize the translation hook

  // Define contactInfo using translation keys
  const contactInfo = [
    {
      icon: Mail,
      titleKey: 'contactSection.contactInfo.emailUs.title',
      detail: 'hello@aliance-software.com', // This typically remains untranslated
      descriptionKey: 'contactSection.contactInfo.emailUs.description'
    },
    {
      icon: Phone,
      titleKey: 'contactSection.contactInfo.callUs.title',
      detail: '+1 (555) 123-4567', // This typically remains untranslated
      descriptionKey: 'contactSection.contactInfo.callUs.description'
    },
    {
      icon: MapPin,
      titleKey: 'contactSection.contactInfo.visitUs.title',
      detail: 'San Francisco, CA', // This typically remains untranslated
      descriptionKey: 'contactSection.contactInfo.visitUs.description'
    }
  ];

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Globe, label: 'Website', href: '#' }
  ];

  const projectTypeOptions = [
    t('contactSection.sendMessage.projectTypeOptions.softwareDevelopment'),
    t('contactSection.sendMessage.projectTypeOptions.websiteCreation'),
    t('contactSection.sendMessage.projectTypeOptions.brandingPackage'),
    t('contactSection.sendMessage.projectTypeOptions.videoProduction'),
    t('contactSection.sendMessage.projectTypeOptions.digitalMarketing'),
    t('contactSection.sendMessage.projectTypeOptions.other'),
  ];

  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/10" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 text-sm text-primary">
            <MessageCircle className="w-4 h-4" />
            {t('contactSection.getInTouch')} {/* Translated */}
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">{t('contactSection.headingPart1')}</span> {/* Translated */}
            <br />
            <span className="gradient-text">{t('contactSection.headingPart2')}</span> {/* Translated */}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('contactSection.subheading')} {/* Translated */}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">{t('contactSection.sendMessage.title')}</CardTitle> {/* Translated */}
              <CardDescription>
                {t('contactSection.sendMessage.description')} {/* Translated */}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">{t('contactSection.sendMessage.firstName')}</label> {/* Translated */}
                  <Input placeholder={t('contactSection.sendMessage.placeholders.firstName')} className="bg-background/50" /> {/* Translated placeholder */}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">{t('contactSection.sendMessage.lastName')}</label> {/* Translated */}
                  <Input placeholder={t('contactSection.sendMessage.placeholders.lastName')} className="bg-background/50" /> {/* Translated placeholder */}
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">{t('contactSection.sendMessage.email')}</label> {/* Translated */}
                <Input placeholder={t('contactSection.sendMessage.placeholders.email')} type="email" className="bg-background/50" /> {/* Translated placeholder */}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">{t('contactSection.sendMessage.companyOptional')}</label> {/* Translated */}
                <Input placeholder={t('contactSection.sendMessage.placeholders.company')} className="bg-background/50" /> {/* Translated placeholder */}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">{t('contactSection.sendMessage.projectType')}</label> {/* Translated */}
                <select className="w-full px-3 py-2 bg-background/50 border border-input rounded-lg text-foreground">
                  {projectTypeOptions.map((option, index) => (
                    <option key={index}>{option}</option>
                  ))}
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">{t('contactSection.sendMessage.message')}</label> {/* Translated */}
                <Textarea 
                  placeholder={t('contactSection.sendMessage.placeholders.message')}
                  className="bg-background/50 min-h-[120px]"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full group">
                <Send className="w-5 h-5" />
                {t('contactSection.sendMessage.sendButton')} {/* Translated */}
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="bg-card/30 backdrop-blur-sm border-border/50 card-hover">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{t(item.titleKey)}</h3> {/* Translated */}
                      <p className="text-primary font-medium">{item.detail}</p>
                      <p className="text-sm text-muted-foreground">{t(item.descriptionKey)}</p> {/* Translated */}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <Card className="bg-card/30 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{t('contactSection.followUs.title')}</CardTitle> {/* Translated */}
                <CardDescription>
                  {t('contactSection.followUs.description')} {/* Translated */}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center hover:shadow-glow transition-all hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-primary-foreground" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="bg-gradient-to-br from-primary/10 to-primary-light/10 border-primary/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{t('contactSection.newsletter.title')}</CardTitle> {/* Translated */}
                <CardDescription>
                  {t('contactSection.newsletter.description')} {/* Translated */}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input 
                    placeholder={t('contactSection.newsletter.placeholder')}
                    className="bg-background/50"
                  />
                  <Button variant="default">
                    {t('contactSection.newsletter.subscribeButton')} {/* Translated */}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  {t('contactSection.newsletter.privacyPolicy')} {/* Translated */}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
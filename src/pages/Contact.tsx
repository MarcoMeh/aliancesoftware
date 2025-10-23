import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

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
                  {t('contactSection.headingPart1', 'Contact')}
                </span>
                <br className="block sm:hidden" />
                <span className="text-white/95">{t('contactSection.headingPart2', 'Us')}</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-200 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
                {t('contactSection.subheading', 'Ready to start your next project? Get in touch with our team and let\'s bring your ideas to life.')}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-white/5 backdrop-blur-sm border-blue-400/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd]">
                    {t('contactSection.form.title', 'Send us a Message')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-blue-300">{t('contactSection.form.firstName', 'First Name')}</Label>
                      <Input
                        id="firstName"
                        placeholder={t('contactSection.form.firstNamePlaceholder', 'John')}
                        className="bg-white/10 border-blue-400/30 text-white placeholder-blue-300 hover:border-blue-400 focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-blue-300">{t('contactSection.form.lastName', 'Last Name')}</Label>
                      <Input
                        id="lastName"
                        placeholder={t('contactSection.form.lastNamePlaceholder', 'Doe')}
                        className="bg-white/10 border-blue-400/30 text-white placeholder-blue-300 hover:border-blue-400 focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-blue-300">{t('contactSection.form.email', 'Email')}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t('contactSection.form.emailPlaceholder', 'john@example.com')}
                      className="bg-white/10 border-blue-400/30 text-white placeholder-blue-300 hover:border-blue-400 focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-blue-300">{t('contactSection.form.company', 'Company (Optional)')}</Label>
                    <Input
                      id="company"
                      placeholder={t('contactSection.form.companyPlaceholder', 'Your Company')}
                      className="bg-white/10 border-blue-400/30 text-white placeholder-blue-300 hover:border-blue-400 focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-blue-300">{t('contactSection.form.subject', 'Subject')}</Label>
                    <Input
                      id="subject"
                      placeholder={t('contactSection.form.subjectPlaceholder', 'How can we help you?')}
                      className="bg-white/10 border-blue-400/30 text-white placeholder-blue-300 hover:border-blue-400 focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-blue-300">{t('contactSection.form.message', 'Message')}</Label>
                    <Textarea
                      id="message"
                      placeholder={t('contactSection.form.messagePlaceholder', 'Tell us about your project...')}
                      className="min-h-32 bg-white/10 border-blue-400/30 text-white placeholder-blue-300 hover:border-blue-400 focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <Button
                    variant="default"
                    size="lg"
                    className={`w-full group px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300
                                bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] text-white hover:from-[#60a5fa] hover:to-[#3b82f6]
                                ${isRtl ? 'flex-row-reverse' : ''}`}
                  >
                    <Send className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRtl ? 'ml-3' : 'mr-3'}`} />
                    {t('contactSection.form.sendMessage', 'Send Message')}
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="bg-white/5 backdrop-blur-sm border-blue-400/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd]">
                      {t('contactSection.info.title', 'Get in Touch')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#3b82f6]/50 to-[#60a5fa]/50 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-white">{t('contactSection.info.addressHeading', 'Office Address')}</h4>
                        <p className="text-blue-200">
                          {t('contactSection.info.address', 'Batna - Algeria')}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#3b82f6]/50 to-[#60a5fa]/50 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-white">{t('contactSection.info.phoneHeading', 'Phone')}</h4>
                        <p className="text-blue-200">{t('contactSection.info.phone', '07 91 00 41 44')}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#3b82f6]/50 to-[#60a5fa]/50 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-white">{t('contactSection.info.emailHeading', 'Email')}</h4>
                        <p className="text-blue-200">{t('contactSection.info.email', 'aliancetech05@gmail.com')}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#3b82f6]/50 to-[#60a5fa]/50 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-white">{t('contactSection.info.hoursHeading', 'Business Hours')}</h4>
                        <p className="text-blue-200">
                          {t('contactSection.info.hours', 'Online')}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card className="bg-white/5 backdrop-blur-sm border-blue-400/20">
                  <CardHeader>
                    <CardTitle className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd]">
                      {t('contactSection.newsletter.title', 'Stay Updated')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-blue-200">
                      {t('contactSection.newsletter.description', 'Subscribe to our newsletter for the latest updates on our products and services.')}
                    </p>
                    <div className="flex gap-2">
                      <Input
                        placeholder={t('contactSection.newsletter.emailPlaceholder', 'Your email address')}
                        className="flex-1 bg-white/10 border-blue-400/30 text-white placeholder-blue-300 hover:border-blue-400 focus:border-blue-500 transition-colors"
                      />
                      <Button
                        variant="outline"
                        className={`group border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white
                                    ${isRtl ? 'flex-row-reverse' : ''}`}
                      >
                        {t('contactSection.newsletter.subscribeButton', 'Subscribe')}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
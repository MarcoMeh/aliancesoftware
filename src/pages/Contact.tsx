import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { toast } from 'sonner'; // Assuming you have a toast notification system

// Define your form schema using Zod
const formSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required.' }),
  lastName: z.string().min(1, { message: 'Last name is required.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.string().optional(),
  subject: z.string().min(1, { message: 'Subject is required.' }),
  message: z.string().min(1, { message: 'Message is required.' }),
  website: z.string().optional(), // honeypot field (bots may fill this)
});

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      subject: '',
      message: '',
      website: '',
    },
  });

  const onContactFormSubmit = async (values: z.infer<typeof formSchema>) => {
    // Simple honeypot check: if 'website' has a value, treat as spam and silently ignore
    if (values.website && values.website.trim() !== '') {
      setIsSubmitting(false);
      return;
    }
    setIsSubmitting(true);
    try {
      const FORMSPREE_CONTACT_ENDPOINT = "https://formspree.io/f/xkgqbzgy"; // Replace with your Formspree endpoint

      const response = await fetch(FORMSPREE_CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (response.ok) {
        toast.success(t('contactSection.form.successMessage', 'Your message has been sent successfully!'));
        form.reset(); // Reset form fields on success
      } else {
        const errorData = await response.json();
        toast.error(t('contactSection.form.errorMessage', 'Failed to send message. Please try again later.'));
        console.error('Formspree error:', errorData);
      }
    } catch (error) {
      toast.error(t('contactSection.form.errorMessage', 'An unexpected error occurred. Please try again.'));
      console.error('Network or unexpected error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen relative
                 bg-gradient-to-br from-[#0A1128] via-[#0C1530] to-[#121A3D] text-white"
    >
      {/* Abstract Background Elements - decorative CSS blobs (reduced DOM) */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -left-24 top-1/4 w-40 h-40 sm:w-72 sm:h-72 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -right-24 bottom-1/3 w-40 h-40 sm:w-72 sm:h-72 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] rounded-full mix-blend-multiply filter blur-3xl opacity-18 animate-blob animation-delay-2000" />
        <div className="absolute left-1/2 top-1/2 w-56 sm:w-80 h-56 sm:h-80 -translate-x-1/2 -translate-y-1/2 bg-[#0a0a0a] rounded-full mix-blend-multiply filter blur-3xl opacity-12 animate-blob animation-delay-4000" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
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
                  <form onSubmit={form.handleSubmit(onContactFormSubmit)} className="space-y-6" noValidate>
                    {/* Honeypot field for bots (screen-reader hidden) */}
                    <input
                      type="text"
                      aria-hidden="true"
                      tabIndex={-1}
                      autoComplete="off"
                      className="sr-only"
                      {...form.register('website')}
                    />
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-blue-300">{t('contactSection.form.firstName', 'First Name')}</Label>
                        <Input
                          id="firstName"
                          placeholder={t('contactSection.form.firstNamePlaceholder', 'John')}
                          className="bg-white/10 border-blue-400/30 text-white placeholder-blue-300 hover:border-blue-400 focus:border-blue-500 transition-colors"
                          aria-invalid={!!form.formState.errors.firstName}
                          aria-describedby={form.formState.errors.firstName ? 'firstName-error' : undefined}
                          {...form.register('firstName')}
                        />
                        {form.formState.errors.firstName && (
                          <p id="firstName-error" className="text-red-400 text-sm">{form.formState.errors.firstName.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-blue-300">{t('contactSection.form.lastName', 'Last Name')}</Label>
                        <Input
                          id="lastName"
                          placeholder={t('contactSection.form.lastNamePlaceholder', 'Doe')}
                          className="bg-white/10 border-blue-400/30 text-white placeholder-blue-300 hover:border-blue-400 focus:border-blue-500 transition-colors"
                          aria-invalid={!!form.formState.errors.lastName}
                          aria-describedby={form.formState.errors.lastName ? 'lastName-error' : undefined}
                          {...form.register('lastName')}
                        />
                        {form.formState.errors.lastName && (
                          <p id="lastName-error" className="text-red-400 text-sm">{form.formState.errors.lastName.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-blue-300">{t('contactSection.form.email', 'Email')}</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t('contactSection.form.emailPlaceholder', 'john@example.com')}
                        className="bg-white/10 border-blue-400/30 text-white placeholder-blue-300 hover:border-blue-400 focus:border-blue-500 transition-colors"
                        aria-invalid={!!form.formState.errors.email}
                        aria-describedby={form.formState.errors.email ? 'email-error' : undefined}
                        {...form.register('email')}
                      />
                      {form.formState.errors.email && (
                        <p id="email-error" className="text-red-400 text-sm">{form.formState.errors.email.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-blue-300">{t('contactSection.form.company', 'Company (Optional)')}</Label>
                      <Input
                        id="company"
                        placeholder={t('contactSection.form.companyPlaceholder', 'Your Company')}
                        className="bg-white/10 border-blue-400/30 text-white placeholder-blue-300 hover:border-blue-400 focus:border-blue-500 transition-colors"
                        aria-invalid={!!form.formState.errors.company}
                        aria-describedby={form.formState.errors.company ? 'company-error' : undefined}
                        {...form.register('company')}
                      />
                      {form.formState.errors.company && (
                        <p id="company-error" className="text-red-400 text-sm">{form.formState.errors.company.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-blue-300">{t('contactSection.form.subject', 'Subject')}</Label>
                      <Input
                        id="subject"
                        placeholder={t('contactSection.form.subjectPlaceholder', 'How can we help you?')}
                        className="bg-white/10 border-blue-400/30 text-white placeholder-blue-300 hover:border-blue-400 focus:border-blue-500 transition-colors"
                        aria-invalid={!!form.formState.errors.subject}
                        aria-describedby={form.formState.errors.subject ? 'subject-error' : undefined}
                        {...form.register('subject')}
                      />
                      {form.formState.errors.subject && (
                        <p id="subject-error" className="text-red-400 text-sm">{form.formState.errors.subject.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-blue-300">{t('contactSection.form.message', 'Message')}</Label>
                      <Textarea
                        id="message"
                        placeholder={t('contactSection.form.messagePlaceholder', 'Tell us about your project...')}
                        className="min-h-32 bg-white/10 border-blue-400/30 text-white placeholder-blue-300 hover:border-blue-400 focus:border-blue-500 transition-colors"
                        aria-invalid={!!form.formState.errors.message}
                        aria-describedby={form.formState.errors.message ? 'message-error' : undefined}
                        {...form.register('message')}
                      />
                      {form.formState.errors.message && (
                        <p id="message-error" className="text-red-400 text-sm">{form.formState.errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      variant="default"
                      size="lg"
                      className={`w-full group px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300
                                bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] text-white hover:from-[#60a5fa] hover:to-[#3b82f6]
                                ${isRtl ? 'flex-row-reverse' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : (
                        <Send className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRtl ? 'ml-3' : 'mr-3'}`} />
                      )}
                      {isSubmitting ? t('contactSection.form.sending', 'Sending...') : t('contactSection.form.sendMessage', 'Send Message')}
                    </Button>
                  </form>
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
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
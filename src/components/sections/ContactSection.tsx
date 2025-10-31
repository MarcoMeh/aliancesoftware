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
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast'; // Assuming you have shadcn/ui toast
import { z } from "zod"; // Assuming you use zod for form validation
import { useForm } from "react-hook-form"; // Assuming react-hook-form
import { zodResolver } from "@hookform/resolvers/zod"; // Assuming zod resolver for react-hook-form

// Define your form schema (adjust as needed for your specific fields)
const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  company: z.string().optional(),
  projectType: z.string().min(1, { message: "Please select a project type." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const ContactSection = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      projectType: t('contactSection.sendMessage.projectTypeOptions.softwareDevelopment'), // Default value
      message: "",
    },
  });

  const onContactFormSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      // Replace with your actual Formspree endpoint for contact form
      const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkgqbzgy"; // Make sure this is a *different* endpoint for contact form

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error(t('contactSection.sendMessage.submitError', { statusText: response.statusText }));
      }

      toast({
        title: t('contactSection.sendMessage.successTitle'),
        description: t('contactSection.sendMessage.successDescription'),
      });

      form.reset(); // Reset the form fields on success
    } catch (error) {
      console.error("Contact form submission error:", error);
      toast({
        title: t('common.error'),
        description: t('common.errorMessage') + (error as Error).message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      titleKey: 'contactSection.contactInfo.emailUs.title',
      detail: 'aliancetech05@gmail.com',
      descriptionKey: 'contactSection.contactInfo.emailUs.description'
    },
    {
      icon: Phone,
      titleKey: 'contactSection.contactInfo.callUs.title',
      detail: '07 91 00 41 44',
      descriptionKey: 'contactSection.contactInfo.callUs.description'
    },
    {
      icon: MapPin,
      titleKey: 'contactSection.contactInfo.visitUs.title',
      detail: 'Batna- Algeria',
      descriptionKey: 'contactSection.contactInfo.visitUs.description'
    }
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61579161136036' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/aliance_software/' },
    { icon: Youtube, label: 'Youtube', href: 'https://www.youtube.com/@AlianceSoftware' },
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
    <section className="py-24 relative bg-[#0A1128] text-white">
      {/* Abstract Background Elements: Inspired by code, circuits, and digital marketing */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#1e3a8a] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-[#3b82f6] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#0a0a0a] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
        
        {/* Subtle grid and lines */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
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
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-[#1e3a8a]/20 border border-[#3b82f6]/40 rounded-full px-5 py-2 mb-6 text-sm text-[#93c5fd] font-medium shadow-lg">
            <MessageCircle className="w-4 h-4 text-[#fcd34d]" />
            {t('contactSection.getInTouch')} {/* Translated */}
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-7 leading-tight">
            <span className="text-white/95">{t('contactSection.headingPart1')}</span> {/* Translated */}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd] drop-shadow-lg">{t('contactSection.headingPart2')}</span> {/* Translated */}
          </h2>
          
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            {t('contactSection.subheading')} {/* Translated */}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-[#0C1530]/70 backdrop-blur-md border border-[#1e3a8a]/50 rounded-xl shadow-lg">
            <CardHeader className="p-6">
              <CardTitle className="text-2xl font-bold text-white/95">{t('contactSection.sendMessage.title')}</CardTitle> {/* Translated */}
              <CardDescription className="text-blue-200 mt-2">
                {t('contactSection.sendMessage.description')} {/* Translated */}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-6">
              <form onSubmit={form.handleSubmit(onContactFormSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-100">{t('contactSection.sendMessage.firstName')}</label>
                    <Input 
                      {...form.register("firstName")}
                      placeholder={t('contactSection.sendMessage.placeholders.firstName')} 
                      className="bg-[#121A3D] border-[#1e3a8a] text-white placeholder:text-blue-400" 
                    />
                    {form.formState.errors.firstName && <p className="text-red-400 text-sm mt-1">{form.formState.errors.firstName.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-100">{t('contactSection.sendMessage.lastName')}</label>
                    <Input 
                      {...form.register("lastName")}
                      placeholder={t('contactSection.sendMessage.placeholders.lastName')} 
                      className="bg-[#121A3D] border-[#1e3a8a] text-white placeholder:text-blue-400" 
                    />
                    {form.formState.errors.lastName && <p className="text-red-400 text-sm mt-1">{form.formState.errors.lastName.message}</p>}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-100">{t('contactSection.sendMessage.email')}</label>
                  <Input 
                    {...form.register("email")}
                    placeholder={t('contactSection.sendMessage.placeholders.email')} 
                    type="email" 
                    className="bg-[#121A3D] border-[#1e3a8a] text-white placeholder:text-blue-400" 
                  />
                  {form.formState.errors.email && <p className="text-red-400 text-sm mt-1">{form.formState.errors.email.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-100">{t('contactSection.sendMessage.companyOptional')}</label>
                  <Input 
                    {...form.register("company")}
                    placeholder={t('contactSection.sendMessage.placeholders.company')} 
                    className="bg-[#121A3D] border-[#1e3a8a] text-white placeholder:text-blue-400" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-100">{t('contactSection.sendMessage.projectType')}</label>
                  <select 
                    {...form.register("projectType")}
                    className="w-full px-3 py-2 bg-[#121A3D] border border-[#1e3a8a] rounded-lg text-white"
                  >
                    {projectTypeOptions.map((option, index) => (
                      <option key={index} value={option} className="bg-[#121A3D] text-white">{option}</option>
                    ))}
                  </select>
                  {form.formState.errors.projectType && <p className="text-red-400 text-sm mt-1">{form.formState.errors.projectType.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-100">{t('contactSection.sendMessage.message')}</label>
                  <Textarea 
                    {...form.register("message")}
                    placeholder={t('contactSection.sendMessage.placeholders.message')}
                    className="bg-[#121A3D] border-[#1e3a8a] text-white placeholder:text-blue-400 min-h-[120px]"
                  />
                  {form.formState.errors.message && <p className="text-red-400 text-sm mt-1">{form.formState.errors.message.message}</p>}
                </div>
                
                <Button 
                  type="submit"
                  variant="default" 
                  size="lg" 
                  className="w-full group px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300
                              bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] text-white hover:from-[#60a5fa] hover:to-[#3b82f6]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('contactSection.sendMessage.sending')}
                    </span>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      {t('contactSection.sendMessage.sendButton')}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="bg-[#0C1530]/70 backdrop-blur-md border border-[#1e3a8a]/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#3b82f6] to-[#60a5fa] rounded-full flex items-center justify-center shadow-lg">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white/95 text-lg">{t(item.titleKey)}</h3>
                      <p className="text-[#93c5fd] font-medium text-base">{item.detail}</p>
                      <p className="text-sm text-blue-300">{t(item.descriptionKey)}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <Card className="bg-[#0C1530]/70 backdrop-blur-md border border-[#1e3a8a]/50 rounded-xl shadow-lg">
              <CardHeader className="p-6 pb-0">
                <CardTitle className="text-xl font-bold text-white/95">{t('contactSection.followUs.title')}</CardTitle>
                <CardDescription className="text-blue-200 mt-2">
                  {t('contactSection.followUs.description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-br from-[#3b82f6] to-[#60a5fa] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6 text-white" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

    
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
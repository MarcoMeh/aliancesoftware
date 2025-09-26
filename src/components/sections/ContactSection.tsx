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

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'hello@aliance-software.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      detail: 'San Francisco, CA',
      description: 'Come visit our office'
    }
  ];

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Globe, label: 'Website', href: '#' }
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
            Get In Touch
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Ready to Start</span>
            <br />
            <span className="gradient-text">Your Project?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We'd love to hear about your project and discuss how we can help bring your vision to life. 
            Reach out to us using any of the methods below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <Input placeholder="John" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <Input placeholder="Doe" className="bg-background/50" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input placeholder="john@example.com" type="email" className="bg-background/50" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Company (Optional)</label>
                <Input placeholder="Your Company" className="bg-background/50" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Project Type</label>
                <select className="w-full px-3 py-2 bg-background/50 border border-input rounded-lg text-foreground">
                  <option>Software Development</option>
                  <option>Website Creation</option>
                  <option>Branding Package</option>
                  <option>Video Production</option>
                  <option>Digital Marketing</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea 
                  placeholder="Tell us about your project requirements..."
                  className="bg-background/50 min-h-[120px]"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full group">
                <Send className="w-5 h-5" />
                Send Message
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
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-primary font-medium">{item.detail}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <Card className="bg-card/30 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Follow Us</CardTitle>
                <CardDescription>
                  Stay updated with our latest projects and insights
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
                <CardTitle className="text-lg font-semibold">Newsletter</CardTitle>
                <CardDescription>
                  Subscribe to get updates on new products and services
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input 
                    placeholder="Enter your email"
                    className="bg-background/50"
                  />
                  <Button variant="default">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  We respect your privacy. Unsubscribe at any time.
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
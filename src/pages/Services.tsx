import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code, Palette, Video, TrendingUp, Globe, Megaphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions built with cutting-edge technologies',
      features: ['Web Applications', 'Mobile Apps', 'Desktop Software', 'API Development'],
      price: 'Starting at $5,000'
    },
    {
      icon: Globe,
      title: 'Website Creation',
      description: 'Professional websites that drive results and engage users',
      features: ['Responsive Design', 'E-commerce', 'CMS Integration', 'SEO Optimization'],
      price: 'Starting at $1,500'
    },
    {
      icon: Palette,
      title: 'Full Branding Packages',
      description: 'Complete brand identity including logo design and social media assets',
      features: ['Logo Design', 'Brand Guidelines', 'Social Media Posts', 'Marketing Materials'],
      price: 'Starting at $2,000'
    },
    {
      icon: Video,
      title: 'Video Editing & AI Production',
      description: 'Professional video content creation with AI-powered enhancements',
      features: ['Video Editing', 'AI Video Generation', 'Motion Graphics', 'Post-Production'],
      price: 'Starting at $800'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies that deliver results',
      features: ['Social Media Marketing', 'Paid Advertising', 'Influencer Campaigns', 'Content Strategy'],
      price: 'Starting at $1,200'
    },
    {
      icon: Megaphone,
      title: 'Sponsoring & Influencer Campaigns',
      description: 'Strategic partnerships and influencer collaborations',
      features: ['Campaign Strategy', 'Influencer Outreach', 'Partnership Management', 'Performance Tracking'],
      price: 'Custom Pricing'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Header */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Our Services</span>
              </h1>
              <p className="text-xl text-black max-w-3xl mx-auto">
                Comprehensive digital solutions to transform your business. From software development to digital marketing, we've got you covered.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card 
                    key={service.title} 
                    className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 card-hover"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-black">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      {/* Features */}
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="text-sm text-black flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Price */}
                      <div className="pt-4 border-t border-border/50">
                        <p className="text-lg font-semibold text-primary mb-4">{service.price}</p>
                        <Button variant="outline" className="w-full group">
                          Request Quote
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-black mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your project requirements and get a custom quote tailored to your needs.
              </p>
              <Button variant="hero" size="lg" className="group">
                Contact Us Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;
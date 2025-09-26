import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Code, 
  Globe, 
  Palette, 
  Video, 
  Megaphone, 
  ArrowRight,
  Sparkles,
  Target,
  Zap,
  Shield
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom applications, web platforms, and mobile solutions built with cutting-edge technologies.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'Cloud Solutions'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Website Creation',
      description: 'Professional websites that drive engagement and deliver exceptional user experiences.',
      features: ['Responsive Design', 'E-commerce', 'CMS Integration', 'SEO Optimization'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Palette,
      title: 'Full Branding Packages',
      description: 'Complete brand identity solutions including logo design and social media assets.',
      features: ['Logo Design', 'Brand Guidelines', 'Social Media Posts', 'Marketing Materials'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Video,
      title: 'Video Production',
      description: 'Professional video editing and AI-powered video creation for all your content needs.',
      features: ['Video Editing', 'AI Video Generation', 'Motion Graphics', 'Post-Production'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your online presence and reach.',
      features: ['Social Media Ads', 'Content Creation', 'Influencer Campaigns', 'Analytics & Reporting'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className="py-24 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 text-sm text-primary">
            <Sparkles className="w-4 h-4" />
            Our Services
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Complete Digital</span>
            <br />
            <span className="gradient-text">Solutions Suite</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide end-to-end digital services that transform 
            your business ideas into successful digital products and marketing campaigns.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 card-hover relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
              
              <CardHeader className="relative">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} p-3 mb-4 shadow-lg`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative space-y-4">
                {/* Features List */}
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button variant="outline" className="w-full group mt-6">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 via-primary-light/10 to-primary/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Target className="w-6 h-6 text-primary" />
              <span className="text-primary font-medium">Ready to Start Your Project?</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Build Something <span className="gradient-text">Amazing Together</span>
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8">
              Get in touch with our expert team to discuss your project requirements 
              and receive a customized solution proposal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                <Zap className="w-5 h-5" />
                Request Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="group">
                <Shield className="w-5 h-5" />
                View Portfolio
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
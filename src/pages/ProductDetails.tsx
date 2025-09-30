import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Play, Star, Users, CheckCircle, Download, ExternalLink } from 'lucide-react';
import productsShowcase from '@/assets/products-showcase.jpg';

const formSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  company: z.string().trim().max(100, { message: "Company name must be less than 100 characters" }).optional(),
  phone: z.string().trim().max(20, { message: "Phone number must be less than 20 characters" }).optional(),
  message: z.string().trim().max(1000, { message: "Message must be less than 1000 characters" }).optional()
});

const ProductDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: ""
    }
  });

  // Sample product data - in real app this would come from API
  const products = {
    '1': {
      name: 'TaskFlow Pro',
      description: 'Advanced project management platform with AI-powered insights that revolutionizes how teams collaborate and manage projects.',
      fullDescription: 'TaskFlow Pro is a comprehensive project management solution that combines traditional project tracking with cutting-edge AI analytics. Our platform helps teams of all sizes streamline their workflows, improve collaboration, and make data-driven decisions.',
      category: 'Productivity',
      rating: 4.9,
      users: '10K+',
      features: [
        'AI-Powered Analytics & Insights',
        'Real-time Team Collaboration',
        'Advanced Time Tracking',
        'Custom Workflows & Templates',
        'Integration with 100+ Tools',
        'Mobile Apps for iOS & Android'
      ],
      benefits: [
        'Increase team productivity by up to 40%',
        'Reduce project delays by 60%',
        'Improve resource allocation efficiency',
        'Enhanced transparency across all projects'
      ],
      status: 'Popular',
      videoId: 'dQw4w9WgXcQ', // Sample YouTube video ID
      pricing: '$29/month per user'
    },
    '2': {
      name: 'DataViz Studio',
      description: 'Professional data visualization and reporting suite that transforms raw data into actionable insights.',
      fullDescription: 'DataViz Studio empowers businesses to create stunning visualizations and comprehensive reports from their data. With powerful analytics tools and intuitive design features, turn complex datasets into clear, compelling stories.',
      category: 'Analytics',
      rating: 4.8,
      users: '5K+',
      features: [
        'Real-time Interactive Charts',
        'Custom Report Builder',
        'API Integration Hub',
        'Advanced Data Processing',
        'Collaborative Dashboards',
        'Export to Multiple Formats'
      ],
      benefits: [
        'Make faster data-driven decisions',
        'Improve report creation efficiency by 75%',
        'Enable self-service analytics',
        'Reduce manual reporting tasks'
      ],
      status: 'New',
      videoId: 'jNQXAC9IVRw', // Sample YouTube video ID
      pricing: '$49/month per user'
    },
    '3': {
      name: 'SecureVault',
      description: 'Enterprise-grade password and secrets management with military-level encryption.',
      fullDescription: 'SecureVault provides uncompromising security for your most sensitive information. Built for enterprises that demand the highest levels of protection, our platform ensures your passwords, API keys, and secrets remain secure.',
      category: 'Security',
      rating: 4.9,
      users: '15K+',
      features: [
        'Military-Grade End-to-End Encryption',
        'Secure Team Password Sharing',
        'Comprehensive Audit Logs',
        'Two-Factor Authentication',
        'Role-Based Access Control',
        'Dark Web Monitoring'
      ],
      benefits: [
        'Eliminate password-related security breaches',
        'Ensure compliance with security standards',
        'Simplify password management across teams',
        'Reduce IT security overhead by 50%'
      ],
      status: 'Featured',
      videoId: 'ScMzIvxBSi4', // Sample YouTube video ID
      pricing: '$12/month per user'
    }
  };

  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24 container mx-auto px-6">
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Link to="/products">
              <Button variant="outline">Back to Products</Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Popular': return 'bg-primary';
      case 'New': return 'bg-green-500';
      case 'Featured': return 'bg-gradient-primary';
      case 'Updated': return 'bg-orange-500';
      default: return 'bg-muted';
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Request Submitted Successfully!",
        description: "We'll contact you within 24 hours with more information about " + product.name,
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Back Button */}
        <div className="container mx-auto px-6 py-6">
          <Link to="/products">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Button>
          </Link>
        </div>

        {/* Product Header */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Product Info */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`${getStatusColor(product.status)} text-white text-sm px-3 py-1 rounded-full font-medium`}>
                    {product.status}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{product.rating}</span>
                    <span>•</span>
                    <Users className="w-4 h-4" />
                    <span>{product.users} users</span>
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text">{product.name}</span>
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {product.fullDescription}
                </p>

                <div className="flex gap-4">
                  <Button size="lg" className="gap-2">
                    <Download className="w-5 h-5" />
                    Start Free Trial
                  </Button>
                  <Button variant="outline" size="lg" className="gap-2">
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </Button>
                </div>
              </div>

              {/* Product Image */}
              <div className="relative">
                <div 
                  className="w-full h-80 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-xl bg-cover bg-center"
                  style={{ backgroundImage: `url(${productsShowcase})` }}
                />
                <div className="absolute inset-0 bg-black/20 rounded-xl flex items-center justify-center">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="gap-2 bg-white/90 hover:bg-white"
                    onClick={() => window.open(`https://www.youtube.com/watch?v=${product.videoId}`, '_blank')}
                  >
                    <Play className="w-5 h-5" />
                    Watch Demo Video
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Features */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Key Features</CardTitle>
                  <CardDescription>
                    Everything you need to succeed with {product.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Key Benefits</CardTitle>
                  <CardDescription>
                    How {product.name} transforms your business
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Lead Capture Form */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl gradient-text">Get Started Today</CardTitle>
                  <CardDescription className="text-lg">
                    Ready to transform your workflow with {product.name}? Fill out the form below and our team will contact you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input placeholder="john@company.com" type="email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your Company" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="+1 (555) 123-4567" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your specific needs or questions..."
                                className="resize-none"
                                rows={4}
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="text-center pt-4">
                        <Button 
                          type="submit" 
                          size="lg" 
                          className="min-w-[200px]"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting..." : "Request Information"}
                        </Button>
                        <p className="text-sm text-muted-foreground mt-4">
                          Starting at {product.pricing} • Free 14-day trial • No credit card required
                        </p>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* YouTube Video Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">See {product.name} in Action</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Watch our detailed walkthrough to see how {product.name} can transform your workflow
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-0">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${product.videoId}`}
                      title={`${product.name} Demo Video`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetails;
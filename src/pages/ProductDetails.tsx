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
import { allProducts } from '@/data/productsData';

const formSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(100).optional(),
  phone: z.string().trim().max(20).optional(),
  message: z.string().trim().max(1000).optional()
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

  // Get product by ID
  const product = allProducts.find(p => p.id === Number(id));

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
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast({
        title: "Request Submitted Successfully!",
        description: `We'll contact you within 24 hours about ${product.name}`,
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
                    <span>{product.users}</span>
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
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                {product.videoId && (
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
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
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
                      {/* form fields */}
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* YouTube Video Section */}
        {product.videoId && (
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
        )}
      </main>
    </div>
  );
};

export default ProductDetails;

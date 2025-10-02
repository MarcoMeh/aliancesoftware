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

// Import Dialog components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const formSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  company: z.string().trim().max(100).optional(),
  phone: z.string().trim().max(20).optional(),
  message: z.string().trim().max(1000).optional()
});

const ProductDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false); // State for modal visibility

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

  // Define a separate onSubmit function for the download form
  // This helps distinguish actions and potentially different backend processing
  const onDownloadFormSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkgqbzgy"; // Your actual Formspree ID

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(values) // Send your form data as JSON
      });

      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.statusText}`);
      }

      toast({
        title: "Request Submitted!",
        description: "Your download will begin shortly.",
      });

      // Trigger the download
      const link = document.createElement('a');
      link.href = '/downloads/Aliance School Manager.rar'; // Corrected installer path
      link.download = 'Aliance School Manager.rar'; // Suggested filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      form.reset(); // Reset the form after successful submission
      setIsDownloadModalOpen(false); // Close the modal
    } catch (error) {
      console.error("Download form submission error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again. " + (error as Error).message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Define a separate onSubmit function for the main contact form
  const onContactFormSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const FORMSPREE_CONTACT_ENDPOINT = "https://formspree.io/f/xkgqbzgy"; // You might want a *different* Formspree ID for general contact if you want to separate submissions

      const response = await fetch(FORMSPREE_CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error(`Contact form submission failed: ${response.statusText}`);
      }

      toast({
        title: "Contact Request Sent!",
        description: `We'll contact you within 24 hours about ${product.name}.`,
      });
      form.reset(); // Reset the form
    } catch (error) {
      console.error("Contact form submission error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again. " + (error as Error).message,
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
                  {/* "Start Free Trial" button now opens a dialog */}
                  <Dialog open={isDownloadModalOpen} onOpenChange={setIsDownloadModalOpen}>
                    <DialogTrigger asChild>
                      <Button size="lg" className="gap-2">
                        <Download className="w-5 h-5" />
                        Start Free Trial
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Get Your Free Trial of {product.name}</DialogTitle>
                        <DialogDescription>
                          Please provide your contact information to start your free trial download.
                        </DialogDescription>
                      </DialogHeader>
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onDownloadFormSubmit)} className="space-y-6"> {/* Use onDownloadFormSubmit */}
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Your Name</FormLabel>
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
                                <FormLabel>Your Email</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="john.doe@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Company (Optional)</FormLabel>
                                <FormControl>
                                  <Input placeholder="Acme Corp" {...field} />
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
                                <FormLabel>Phone Number (Optional)</FormLabel>
                                <FormControl>
                                  <Input type="tel" placeholder="(123) 456-7890" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Download Free Trial"}
                          </Button>
                        </form>
                      </Form>
                    </DialogContent>
                  </Dialog>
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

        {/* Features & Benefits (Remains unchanged) */}
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

        {/* Original Lead Capture Form - NOW USING onContactFormSubmit */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl gradient-text">Contact Our Sales Team</CardTitle>
                  <CardDescription className="text-lg">
                    Have more questions or need a personalized demo? Fill out the form below.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onContactFormSubmit)} className="space-y-6"> {/* Use onContactFormSubmit */}
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Name</FormLabel>
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
                            <FormLabel>Your Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john.doe@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Acme Corp" {...field} />
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
                            <FormLabel>Phone Number (Optional)</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="(123) 456-7890" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message (Optional)</FormLabel>
                            <FormControl>
                              <Textarea placeholder="How can we help you?" className="min-h-[100px]" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit Request"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* YouTube Video Section (Remains unchanged) */}
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
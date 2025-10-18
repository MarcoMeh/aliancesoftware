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
import { ArrowLeft, Play, Star, Users, CheckCircle, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { allProducts } from '@/data/productsData';
import { useTranslation } from 'react-i18next'; // Import useTranslation

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
  phone: z.string().trim().min(10, "Phone number is required").max(20, "Phone number is too long"),
  links: z.string().trim().max(100).optional(),
  message: z.string().trim().max(1000).optional()
});

const ProductDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);
  const { t } = useTranslation(); // Initialize useTranslation

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      links: "",
      message: ""
    }
  });

  const product = allProducts.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24 container mx-auto px-6">
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold mb-4">{t('productDetails.notFound.title')}</h1>
            <Link to="/products">
              <Button variant="outline">{t('productDetails.notFound.backButton')}</Button>
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

  const onDownloadFormSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkgqbzgy";

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error(t('productDetails.downloadForm.submitError', { statusText: response.statusText }));
      }

      toast({
        title: t('productDetails.downloadForm.successTitle'),
        description: t('productDetails.downloadForm.successDescription'),
      });

      const link = document.createElement('a');
      link.href = product.downloadPath; // Use the product's download path
      link.download = product.downloadPath.split('/').pop() || 'download.file'; // Extract filename for download attribute
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      form.reset();
      setIsDownloadModalOpen(false);
    } catch (error) {
      console.error("Download form submission error:", error);
      toast({
        title: t('common.error'), // Assuming a common error key
        description: t('common.errorMessage') + (error as Error).message, // Assuming a common error message key
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const onContactFormSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const FORMSPREE_CONTACT_ENDPOINT = "https://formspree.io/f/xkgqbzgy";

      const response = await fetch(FORMSPREE_CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error(t('productDetails.contactForm.submitError', { statusText: response.statusText }));
      }

      toast({
        title: t('productDetails.contactForm.successTitle'),
        description: t('productDetails.contactForm.successDescription', { productName: product.name }),
      });
      form.reset();
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

  const goToPreviousScreenshot = () => {
    setCurrentScreenshotIndex((prevIndex) =>
      prevIndex === 0 ? (product.screenshots?.length || 1) - 1 : prevIndex - 1
    );
  };

  const goToNextScreenshot = () => {
    setCurrentScreenshotIndex((prevIndex) =>
      prevIndex === (product.screenshots?.length || 1) - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24">
        <div className="container mx-auto px-6 py-6">
          <Link to="/products">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              {t('productDetails.backToProducts')}
            </Button>
          </Link>
        </div>

        <section className="py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`${getStatusColor(product.status)} text-white text-sm px-3 py-1 rounded-full font-medium`}>
                    {t(`productsSection.status.${product.status.toLowerCase()}`)}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{product.rating}</span>
                    <span>•</span>
                    <Users className="w-4 h-4" />
                    <span>{product.users} {t('productsSection.users')}</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text">{product.name}</span>
                </h1>

                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {product.fullDescription}
                </p>

                <div className="flex gap-4">
                  <Dialog open={isDownloadModalOpen} onOpenChange={setIsDownloadModalOpen}>
                    <DialogTrigger asChild>
                      <Button size="lg" className="gap-2">
                        <Download className="w-5 h-5" />
                        {t('productDetails.startFreeTrialButton')}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>{t('productDetails.downloadForm.title', { productName: product.name })}</DialogTitle>
                        <DialogDescription>
                          {t('productDetails.downloadForm.description')}
                        </DialogDescription>
                      </DialogHeader>
                      <p className="text-red-500 text-sm font-medium mt-2">
                        {t('productDetails.downloadForm.note')}
                      </p>
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onDownloadFormSubmit)} className="space-y-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{t('productDetails.formLabels.yourName')}</FormLabel>
                                <FormControl>
                                  <Input placeholder={t('productDetails.formPlaceholders.fullName')} {...field} />
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
                                <FormLabel>{t('productDetails.formLabels.yourEmail')}</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder={t('productDetails.formPlaceholders.yourEmail')} {...field} />
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
                                <FormLabel>{t('productDetails.formLabels.phoneNumber')}</FormLabel>
                                <FormControl>
                                  <Input type="tel" placeholder={t('productDetails.formPlaceholders.phoneNumber')} {...field} />
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
                                <FormLabel>{t('productDetails.formLabels.companyOptional')}</FormLabel>
                                <FormControl>
                                  <Input placeholder={t('productDetails.formPlaceholders.company')} {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="links"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{t('productDetails.formLabels.socialMediaLinkOptional')}</FormLabel>
                                <FormControl>
                                  <Input placeholder={t('productDetails.formPlaceholders.socialMediaLink')} {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? t('common.submitting') : t('productDetails.downloadForm.submitButton')}
                          </Button>
                        </form>
                      </Form>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              <div className="relative">
              {product.screenshots && product.screenshots.length > 0 ? (
                <>
                  <div
                    className="w-full h-80 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-xl bg-cover bg-center transition-all duration-300 ease-in-out"
                    style={{ backgroundImage: `url(${product.screenshots[currentScreenshotIndex]})` }}
                  />
                  {product.screenshots.length > 1 && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white z-10"
                        onClick={goToPreviousScreenshot}
                        aria-label={t('productDetails.carousel.previousScreenshot')}
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white z-10"
                        onClick={goToNextScreenshot}
                        aria-label={t('productDetails.carousel.nextScreenshot')}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </Button>
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                        {product.screenshots.map((_, index) => (
                          <button
                            key={index}
                            className={`w-2 h-2 rounded-full ${
                              index === currentScreenshotIndex ? 'bg-primary' : 'bg-gray-300'
                            }`}
                            onClick={() => setCurrentScreenshotIndex(index)}
                            aria-label={t('productDetails.carousel.viewScreenshot', { index: index + 1 })}
                          />
                        ))}
                      </div>
                    </>
                  )}
                  {product.videoId && (
                    <div className="absolute inset-0 bg-black/20 rounded-xl flex items-center justify-center">
                      <Button
                        variant="secondary"
                        size="lg"
                        className="gap-2 bg-white/90 hover:bg-white"
                        onClick={() => window.open(`https://www.youtube.com/watch?v=${product.videoId}`, '_blank')}
                      >
                        <Play className="w-5 h-5" />
                        {t('productDetails.watchDemoVideo')}
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                <div
                  className="w-full h-80 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-xl bg-cover bg-center"
                  style={{ backgroundImage: `url(${product.image})` }}
                >
                  {product.videoId && (
                    <div className="absolute inset-0 bg-black/20 rounded-xl flex items-center justify-center">
                      <Button
                        variant="secondary"
                        size="lg"
                        className="gap-2 bg-white/90 hover:bg-white"
                        onClick={() => window.open(`https://www.youtube.com/watch?v=${product.videoId}`, '_blank')}
                      >
                        <Play className="w-5 h-5" />
                        {t('productDetails.watchDemoVideo')}
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl">{t('productDetails.features.title')}</CardTitle>
                  <CardDescription>
                    {t('productDetails.features.description', { productName: product.name })}
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
                  <CardTitle className="text-2xl">{t('productDetails.benefits.title')}</CardTitle>
                  <CardDescription>
                    {t('productDetails.benefits.description', { productName: product.name })}
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

        {product.videoId && (
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                                      {t('productDetails.videoSection.title', { productName: product.name })}</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                      {t('productDetails.videoSection.description', { productName: product.name })}</p>
              </div>

              <div className="max-w-4xl mx-auto">
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-0">
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${product.videoId}`}
                        title={t('productDetails.videoSection.iframeTitle', { productName: product.name })}
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
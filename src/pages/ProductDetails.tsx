import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form'; // Correct
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Play, Star, Users, CheckCircle, Download, ChevronLeft, ChevronRight, FileText } from 'lucide-react'; // Added FileText icon
import { allProducts } from '@/data/productsData';
import { useTranslation } from 'react-i18next';

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
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

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
      <div
        className="min-h-screen relative
                   bg-gradient-to-br from-[#0A1128] via-[#0C1530] to-[#121A3D] text-white"
      >
        <Navigation />
        <main className="relative z-10 pt-24 container mx-auto px-6">
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold mb-4 text-white">{t('productDetails.notFound.title')}</h1>
            <Link to="/products">
              <Button
                variant="outline"
                className="border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white"
              >
                {t('productDetails.notFound.backButton')}
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Popular': return 'bg-[#3b82f6]'; // A shade of blue
      case 'New': return 'bg-green-500';
      case 'Featured': return 'bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]'; // Primary gradient
      case 'Updated': return 'bg-orange-500';
      default: return 'bg-blue-400/30'; // Muted blue for other statuses
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

      // Only attempt to download if product.downloadPath exists
      if (product.downloadPath) {
        const link = document.createElement('a');
        link.href = product.downloadPath;
        link.download = product.downloadPath.split('/').pop() || 'download.file';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        console.warn("No downloadPath specified for this product.");
        toast({
          title: t('common.warning'),
          description: t('productDetails.downloadForm.noDownloadAvailable'),
          variant: "default", // or "warning" if you have one
        });
      }


      form.reset();
      setIsDownloadModalOpen(false);
    } catch (error) {
      console.error("Download form submission error:", error);
      toast({
        title: t('common.error'),
        description: t('common.errorMessage') + (error instanceof Error ? error.message : String(error)),
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
        description: t('common.errorMessage') + (error instanceof Error ? error.message : String(error)),
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
    <div
      className="min-h-screen relative
                 bg-gradient-to-br from-[#0A1128] via-[#0C1530] to-[#121A3D] text-white"
      dir={isRtl ? 'rtl' : 'ltr'}
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
        <div className="container mx-auto px-6 py-6">
          <Link to="/products">
            <Button
              variant="ghost"
              className={`gap-2 text-blue-300 hover:text-blue-500 ${isRtl ? 'flex-row-reverse' : ''}`}
            >
              <ArrowLeft className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              {t('productDetails.backToProducts')}
            </Button>
          </Link>
        </div>

        {/* Main content grid for details and sidebar */}
        <div className="container mx-auto px-6 grid lg:grid-cols-4 gap-12 pb-16">
          {/* Main Product Details (3/4 width on large screens) */}
          <div className="lg:col-span-3 space-y-12">
            <section>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className={`flex items-center gap-4 mb-6 ${isRtl ? 'justify-end' : ''}`}>
                    <div className={`${getStatusColor(product.status)} text-white text-sm px-3 py-1 rounded-full font-medium shadow-md`}>
                      {t(`productsSection.status.${product.status.toLowerCase()}`)}
                    </div>
                    <div className="flex items-center gap-2 text-blue-300">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{product.rating}</span>
                      <span>•</span>
                      <Users className="w-4 h-4 text-blue-300" />
                      <span>{product.users} {t('productsSection.users')}</span>
                    </div>
                  </div>

                  <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tighter">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd] drop-shadow-lg">
                      {product.name}
                    </span>
                  </h1>

                  <p className="text-lg md:text-xl text-blue-200 mb-8 leading-relaxed drop-shadow-sm">
                    {product.fullDescription}
                  </p>

                  <div className={`flex gap-4 ${isRtl ? 'justify-end' : ''}`}>
                    <Dialog open={isDownloadModalOpen} onOpenChange={setIsDownloadModalOpen}>
                      <DialogTrigger asChild>
                        <Button
                          size="lg"
                          className={`group px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300
                                      bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] text-white hover:from-[#60a5fa] hover:to-[#3b82f6]
                                      ${isRtl ? 'flex-row-reverse' : ''}`}
                          disabled={!product.downloadPath} // Disable if no download path
                        >
                          <Download className={`w-5 h-5 group-hover:translate-y-0.5 transition-transform ${isRtl ? 'ml-3' : 'mr-3'}`} />
                          {t('productDetails.startFreeTrialButton')}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px] bg-[#0A1128] text-white border-blue-400/30">
                        <DialogHeader>
                          <DialogTitle className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd]">
                            {t('productDetails.downloadForm.title', { productName: product.name })}
                          </DialogTitle>
                          <DialogDescription className="text-blue-200">
                            {t('productDetails.downloadForm.description')}
                          </DialogDescription>
                        </DialogHeader>
                        <p className="text-orange-400 text-sm font-medium mt-2">
                          {t('productDetails.downloadForm.note')}
                        </p>
                        <Form {...form}>
                          <form onSubmit={form.handleSubmit(onDownloadFormSubmit)} className="space-y-6">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-blue-300">{t('productDetails.formLabels.yourName')}</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder={t('productDetails.formPlaceholders.fullName')}
                                      {...field}
                                      className="bg-white/10 border-blue-400/30 text-white placeholder-blue-300 hover:border-blue-400 focus:border-blue-500 transition-colors"
                                    />
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
                                  <FormLabel className="text-blue-300">{t('productDetails.formLabels.yourEmail')}</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="email"
                                      placeholder={t('productDetails.formPlaceholders.yourEmail')}
                                      {...field}
                                      className="bg-white/10 border-blue-400/30 text-white placeholder-blue-300 hover:border-blue-400 focus:border-blue-500 transition-colors"
                                    />
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
                                  <FormLabel className="text-blue-300">{t('productDetails.formLabels.phoneNumber')}</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="tel"
                                      placeholder={t('productDetails.formPlaceholders.phoneNumber')}
                                      {...field}
                                      className="bg-white/10 border-blue-400/30 text-white placeholder-blue-300 hover:border-blue-400 focus:border-blue-500 transition-colors"
                                    />
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
                                  <FormLabel className="text-blue-300">{t('productDetails.formLabels.companyOptional')}</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder={t('productDetails.formPlaceholders.company')}
                                      {...field}
                                      className="bg-white/10 border-blue-400/30 text-white placeholder-blue-300 hover:border-blue-400 focus:border-blue-500 transition-colors"
                                    />
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
                                  <FormLabel className="text-blue-300">{t('productDetails.formLabels.socialMediaLinkOptional')}</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder={t('productDetails.formPlaceholders.socialMediaLink')}
                                      {...field}
                                      className="bg-white/10 border-blue-400/30 text-white placeholder-blue-300 hover:border-blue-400 focus:border-blue-500 transition-colors"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                            )}
                          />
                          <Button
                            type="submit"
                            className={`w-full group px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300
                                        bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] text-white hover:from-[#60a5fa] hover:to-[#3b82f6]
                                        ${isRtl ? 'flex-row-reverse' : ''}`}
                            disabled={isSubmitting}
                          >
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
                      className="w-full h-80 bg-white/5 backdrop-blur-sm border-blue-400/20 rounded-xl bg-cover bg-center transition-all duration-300 ease-in-out shadow-lg"
                      style={{ backgroundImage: `url(${product.screenshots[currentScreenshotIndex]})` }}
                    />
                    {product.screenshots.length > 1 && (
                      <>
                        <Button
                          variant="ghost"
                          size="icon"
                          className={`absolute ${isRtl ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white z-10 shadow-md`}
                          onClick={goToPreviousScreenshot}
                          aria-label={t('productDetails.carousel.previousScreenshot')}
                        >
                          <ChevronLeft className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className={`absolute ${isRtl ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white z-10 shadow-md`}
                          onClick={goToNextScreenshot}
                          aria-label={t('productDetails.carousel.nextScreenshot')}
                        >
                          <ChevronRight className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
                        </Button>
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                          {product.screenshots.map((_, index) => (
                            <button
                              key={index}
                              className={`w-2 h-2 rounded-full ${
                                index === currentScreenshotIndex ? 'bg-blue-400' : 'bg-gray-500'
                              } transition-colors duration-200`}
                              onClick={() => setCurrentScreenshotIndex(index)}
                              aria-label={t('productDetails.carousel.viewScreenshot', { index: index + 1 })}
                            />
                          ))}
                        </div>
                      </>
                    )}
                    {product.videoId && (
                      <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center">
                        <Button
                          variant="default"
                          size="lg"
                          className={`group gap-2 bg-white/10 hover:bg-white/20 text-white border border-blue-400/30 backdrop-blur-sm shadow-lg
                                      ${isRtl ? 'flex-row-reverse' : ''}`}
                          onClick={() => window.open(`https://www.youtube.com/watch?v=${product.videoId}`, '_blank')}
                        >
                          <Play className={`w-5 h-5 group-hover:scale-110 transition-transform ${isRtl ? 'ml-2' : 'mr-2'}`} />
                          {t('productDetails.watchDemoVideo')}
                        </Button>
                      </div>
                    )}
                  </>
                ) : (
                  <div
                    className="w-full h-80 bg-white/5 backdrop-blur-sm border-blue-400/20 rounded-xl bg-cover bg-center shadow-lg"
                    style={{ backgroundImage: `url(${product.image})` }}
                  >
                    {product.videoId && (
                      <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center">
                        <Button
                          variant="default"
                          size="lg"
                          className={`group gap-2 bg-white/10 hover:bg-white/20 text-white border border-blue-400/30 backdrop-blur-sm shadow-lg
                                      ${isRtl ? 'flex-row-reverse' : ''}`}
                          onClick={() => window.open(`https://www.youtube.com/watch?v=${product.videoId}`, '_blank')}
                        >
                          <Play className={`w-5 h-5 group-hover:scale-110 transition-transform ${isRtl ? 'ml-2' : 'mr-2'}`} />
                          {t('productDetails.watchDemoVideo')}
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>

            <section>
              <div className="grid lg:grid-cols-2 gap-12">
                <Card className="bg-white/5 backdrop-blur-sm border-blue-400/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd]">
                      {t('productDetails.features.title')}
                    </CardTitle>
                    <CardDescription className="text-blue-200">
                      {t('productDetails.features.description', { productName: product.name })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-blue-200">
                          <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-sm border-blue-400/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd]">
                      {t('productDetails.benefits.title')}
                    </CardTitle>
                    <CardDescription className="text-blue-200">
                      {t('productDetails.benefits.description', { productName: product.name })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3 text-blue-200">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {product.videoId && (
              <section>
                <div className="text-center mb-12 animate-fade-in-up">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd]">
                    {t('productDetails.videoSection.title', { productName: product.name })}
                  </h2>
                  <p className="text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed">
                    {t('productDetails.videoSection.description', { productName: product.name })}
                  </p>
                </div>

                <div className="max-w-4xl mx-auto">
                  <Card className="bg-white/5 backdrop-blur-sm border-blue-400/20 shadow-xl">
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
              </section>
            )}
          </div>

          {/* Sidebar (1/4 width on large screens) */}
          <aside className="lg:col-span-1 space-y-8 pt-8 lg:pt-0">
            {product.pdfDownloads && product.pdfDownloads.length > 0 && (
              <Card className="bg-white/5 backdrop-blur-sm border-blue-400/20 p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd] flex items-center gap-2">
                    <FileText className="w-6 h-6 text-blue-400" />
                    {t('productDetails.sidebar.downloadsTitle')}
                  </CardTitle>
                  <CardDescription className="text-blue-200">
                    {t('productDetails.sidebar.downloadsDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-3">
                    {product.pdfDownloads.map((pdf, index) => (
                      <li key={index}>
                        <a
                          href={pdf.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-300 hover:text-blue-100 transition-colors duration-200 group"
                        >
                          <Download className={`w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform ${isRtl ? 'rotate-180' : ''}`} />
                          <span>{pdf.title}</span>
                          <span className="text-xs text-blue-400 opacity-70 ml-auto">PDF</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* You can add more sidebar cards here if needed, e.g., related products, contact info */}
            {/* Example of another card if you want to reuse the contact form or show other links */}
            {/*
            <Card className="bg-white/5 backdrop-blur-sm border-blue-400/20 p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd] flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-blue-400" />
                  {t('productDetails.sidebar.contactUsTitle')}
                </CardTitle>
                <CardDescription className="text-blue-200">
                  {t('productDetails.sidebar.contactUsDescription')}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  {t('productDetails.sidebar.contactUsButton')}
                </Button>
              </CardContent>
            </Card>
            */}
          </aside>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;
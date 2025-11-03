// src/pages/CheckoutPage.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import websiteData from '@/data/WebData';
import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
// Add ArrowRight to the import list from lucide-react
import { CheckCheck, ArrowLeft, Send, ArrowRight } from 'lucide-react'; // FIXED: Added ArrowRight
import { useToast } from '@/components/ui/use-toast';

const CheckoutPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { toast } = useToast();

  const website = websiteData.find((site) => site.id === id);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Client Order Submitted:', {
        website: website.name,
        ...formData,
      });

      setSubmissionSuccess(true);
      toast({
        title: t("checkoutPage.toast.successTitle"), // Using i18n for toast titles
        description: t("checkoutPage.toast.successDescription", { fullName: formData.fullName, websiteName: website.name }),
        duration: 5000,
        // FIXED: Removed 'icon' property and used 'variant' for styling.
        // If you need custom icons, you'd typically integrate them into your toast's title/description or use a custom component.
        // Assuming your 'success' variant for toast shows a green background or a checkmark already.
        variant: "success", // Use the 'success' variant if defined in your toast component
      });
      // Optionally navigate to a thank you page
      // navigate('/thank-you');

    } catch (error) {
      console.error('Error submitting order:', error);
      toast({
        title: t("checkoutPage.toast.failureTitle"),
        description: t("checkoutPage.toast.failureDescription"),
        duration: 5000,
        // FIXED: Used 'variant' for error styling.
        variant: "destructive", // Use the 'destructive' variant for errors
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!website) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0A1128] to-[#121A3D] text-white flex items-center justify-center">
        <p className="text-2xl">{t('checkoutPage.invalidWebsite')}</p> {/* Use translation here */}
      </div>
    );
  }

  return (
    <div
      className="min-h-screen relative
      bg-gradient-to-br from-[#0A1128] via-[#0C1530] to-[#121A3D] text-white"
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#1e3a8a] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-[#3b82f6] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#0a0a0a] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
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

      <Navigation />

      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <Button
            variant="ghost"
            className="mb-8 text-blue-300 hover:text-white hover:bg-[#1e3a8a]/40"
            onClick={() => navigate(`/website/${website.id}`)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('checkoutPage.backToDetail')}
          </Button>

          <div className="bg-[#0C1530]/70 backdrop-blur-md border border-[#1e3a8a]/50 rounded-2xl p-8 md:p-12 shadow-xl animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 leading-tight text-white drop-shadow-md">
              {t('checkoutPage.heading')}
            </h1>
            <p className="text-xl text-blue-200 text-center mb-10 max-w-2xl mx-auto">
              {t('checkoutPage.subheading', { websiteName: website.name })}
            </p>

            <div className="bg-[#1e3a8a]/30 rounded-xl p-6 mb-8 border border-[#3b82f6]/40 text-blue-100">
              <h3 className="text-2xl font-bold mb-3 text-white">
                {t('checkoutPage.orderSummary')}
              </h3>
              <div className="flex justify-between items-center text-lg mb-2">
                <span>{website.name}</span>
                <span className="font-semibold">${website.price}</span>
              </div>
              <div className="flex justify-between items-center text-xl font-bold border-t border-blue-400 pt-3 mt-3">
                <span>{t('checkoutPage.total')}</span>
                <span className="text-white">${website.price}</span>
              </div>
            </div>

            {submissionSuccess ? (
              <div className="text-center p-8 bg-green-700/30 border border-green-500 rounded-xl">
                <CheckCheck className="w-16 h-16 mx-auto mb-4 text-green-400" />
                <h3 className="text-3xl font-bold text-green-300 mb-3">{t('checkoutPage.successTitle')}</h3>
                <p className="text-lg text-green-200">
                  {t('checkoutPage.successMessage', { websiteName: website.name, fullName: formData.fullName })}
                </p>
                <Button
                  className="mt-6 group px-6 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300
                             bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] text-white hover:from-[#60a5fa] hover:to-[#3b82f6]"
                  onClick={() => navigate('/')}
                >
                  {t('checkoutPage.goToHome')}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="fullName" className="text-lg text-blue-100 mb-2 block">
                    {t('checkoutPage.form.fullName')}
                  </Label>
                  <Input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1e3a8a]/40 border border-[#3b82f6]/40 text-white placeholder-blue-300 focus:ring-2 focus:ring-[#60a5fa] focus:border-transparent"
                    placeholder={t('checkoutPage.form.fullNamePlaceholder')}
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-lg text-blue-100 mb-2 block">
                    {t('checkoutPage.form.email')}
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1e3a8a]/40 border border-[#3b82f6]/40 text-white placeholder-blue-300 focus:ring-2 focus:ring-[#60a5fa] focus:border-transparent"
                    placeholder={t('checkoutPage.form.emailPlaceholder')}
                  />
                </div>
                <div>
                  <Label htmlFor="phoneNumber" className="text-lg text-blue-100 mb-2 block">
                    {t('checkoutPage.form.phoneNumber')}
                  </Label>
                  <Input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1e3a8a]/40 border border-[#3b82f6]/40 text-white placeholder-blue-300 focus:ring-2 focus:ring-[#60a5fa] focus:border-transparent"
                    placeholder={t('checkoutPage.form.phoneNumberPlaceholder')}
                  />
                </div>
                <div>
                  <Label htmlFor="notes" className="text-lg text-blue-100 mb-2 block">
                    {t('checkoutPage.form.notes')}
                  </Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-[#1e3a8a]/40 border border-[#3b82f6]/40 text-white placeholder-blue-300 focus:ring-2 focus:ring-[#60a5fa] focus:border-transparent"
                    placeholder={t('checkoutPage.form.notesPlaceholder')}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full group mt-8 px-8 py-4 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300
                              ${isSubmitting ? 'bg-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] hover:from-[#60a5fa] hover:to-[#3b82f6]'} text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('checkoutPage.form.submitting')}
                    </>
                  ) : (
                    <>
                      {t('checkoutPage.form.submitOrder')}
                      <Send className={`w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform`} />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
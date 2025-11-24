// src/App.tsx
import React, { useEffect, Suspense, lazy } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom"; // IMPORT BrowserRouter
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';

// Lazy load page components to reduce initial bundle size
const Index = lazy(() => import('./pages/Index'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const WebDevelopment = lazy(() => import('./pages/WebDevelopment'));
const SoftwareDevelopment = lazy(() => import('./pages/SoftwareDevelopment'));
const BrandingPackages = lazy(() => import('./pages/BrandingPackages'));
const VideoProduction = lazy(() => import('./pages/VideoProduction'));
const DigitalMarketing = lazy(() => import('./pages/DigitalMarketing'));
const WebsiteDetails = lazy(() => import('./pages/WebDetails'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

const queryClient = new QueryClient();

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.setAttribute('dir', i18n.dir());
    document.documentElement.classList.toggle('rtl', i18n.dir() === 'rtl');
  }, [i18n, i18n.language]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/*
          IMPORTANT: Your LanguageSwitcher is commented out in App.tsx.
          If it's intended to be part of your main layout (e.g., in Navigation.tsx),
          then this commented block is fine.
          If it's meant to be a fixed element directly in App.tsx, uncomment and adjust styling.
        */}
        {/* LanguageSwitcher (currently commented out) */}

        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/software-development" element={<SoftwareDevelopment/>} />
            <Route path="/services/branding-packages" element={<BrandingPackages/>} />
            <Route path="/services/video-production" element={<VideoProduction/>} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/website/:id" element={<WebsiteDetails />} />
            <Route path="/checkout/:id" element={<CheckoutPage />} />
          </Routes>
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
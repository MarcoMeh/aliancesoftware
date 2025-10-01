// src/App.tsx
import React, { useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // IMPORT BrowserRouter
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';

// Page Components
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

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
        {/*
        <div className="fixed top-4 right-4 z-50">
          <LanguageSwitcher />
        </div>
        */}

        {/* BrowserRouter is ESSENTIAL for react-router-dom to work */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

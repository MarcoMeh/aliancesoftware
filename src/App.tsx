// src/App.tsx
import React, { useEffect } from 'react'; // Ensure React and useEffect are imported
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom"; // REMOVED BrowserRouter from here
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import LanguageSwitcher from './components/LanguageSwitcher'; // Import LanguageSwitcher

// No ModeToggle import needed here

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
  const { i18n } = useTranslation(); // Initialize useTranslation hook

  // Effect to set HTML direction (dir) and add/remove 'rtl' class based on current language
  useEffect(() => {
    document.documentElement.setAttribute('dir', i18n.dir());
    document.documentElement.classList.toggle('rtl', i18n.dir() === 'rtl');
  }, [i18n, i18n.language]); // Re-run effect if i18n instance or language changes

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* REVERTING AND REPOSITIONING THE LANGUAGE SWITCHER */}
        {/* Placing it as a fixed element in the top right, but with a better top/right offset */}
        {/* Adjust 'right-20' or 'right-4' as needed to clear your 'Contact Us Now' button */}
        {/* The 'top-4' ensures it's slightly below the very top edge */}
        {/*<div className="fixed top-4 right-4 z-50">*/}
          {/*<LanguageSwitcher />*/}
        {/*</div>*/}
        {/* END REPOSITIONED DIV */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* END REMOVAL */}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
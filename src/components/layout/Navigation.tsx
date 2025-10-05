// src/components/layout/Navigation.tsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from "@/assets/logo.png";
import LanguageSwitcher from '../LanguageSwitcher';

// Import useTranslation hook
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation(); // Initialize the translation hook and get i18n instance

  const navItems = [
    { name: t('navigation.home'), href: '/' },
    { name: t('navigation.products'), href: '/products' },
    { name: t('navigation.services'), href: '/services' },
    { name: t('navigation.about'), href: '/about' },
    { name: t('navigation.contact'), href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  // Determine text direction for dynamic styling
  const isRTL = i18n.language === 'ar';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          {/* Logo */}
          <img
            src={logo}
            alt="Aliance Software Logo"
            className="w-10 h-10 object-contain rounded-lg shadow-glow"
          />

          {/* Text */}
          <div>
            <h1 className="text-xl font-bold gradient-text">Aliance Software</h1>
            <p className="text-xs text-muted-foreground">{t('navigation.innovationExcellence')}</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center" style={{ gap: isRTL ? '1.5rem' : '2rem' }}> {/* Increased gap for RTL if needed, or consistent large gap */}
          {navItems.map((item) => (
            <Link
              key={item.href} // Use href for key as it's stable and unique
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary whitespace-nowrap px-2 py-1 rounded-md ${ // Added padding and rounded for better click area
                isActive(item.href) ? 'text-primary font-semibold bg-primary/10' : 'text-foreground/80' // Added subtle background for active link
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button AND Language Switcher */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/contact">
            <Button variant="hero" size="default" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              {t('navigation.contactUsNow')}
            </Button>
          </Link>
          {/* LANGUAGE SWITCHER FOR DESKTOP */}
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button (and Language Switcher for mobile) */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 pb-6 border-t border-border pt-6 animate-fade-in">
          <div className="flex flex-col space-y-4 px-6">
            {navItems.map((item) => (
              <Link
                key={item.href} // Use href for key
                to={item.href}
                className={`text-base font-medium transition-colors hover:text-primary block py-2 ${ // Ensured block and added padding
                  isActive(item.href) ? 'text-primary font-semibold' : 'text-foreground/80'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button variant="hero" size="default" className="mt-4 w-full flex justify-center gap-2">
                <Zap className="w-4 h-4" />
                {t('navigation.contactUsNow')}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
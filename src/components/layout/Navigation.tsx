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
  const { t, i18n } = useTranslation();

  const navItems = [
    { name: t('navigation.home'), href: '/' },
    { name: t('navigation.products'), href: '/products' },
    { name: t('navigation.services'), href: '/services' },
    { name: t('navigation.about'), href: '/about' },
    { name: t('navigation.contact'), href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  // Determine text direction for dynamic styling - mostly handled by CSS if 'dir' attribute is set on html/body
  // const isRTL = i18n.language === 'ar'; // Not explicitly needed for general flex layouts

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/70 shadow-lg md:shadow-xl transition-all duration-300"> {/* Stronger blur and shadow */}
      <div className="container mx-auto px-6 py-4 md:py-2 flex items-center justify-between"> {/* Increased padding */}
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse hover:opacity-90 transition-opacity"> {/* Added rtl:space-x-reverse */}
          <img
            src={logo}
            alt="Aliance Software Logo"
            className="w-10 h-10 object-contain rounded-lg shadow-md transition-transform duration-200 hover:scale-105" // Added shadow-md and hover scale
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold gradient-text leading-tight">Aliance Software</h1> {/* Larger, tighter leading */}
            <p className="text-xs text-muted-foreground/80 hidden sm:block">{t('navigation.innovationExcellence')}</p> {/* Hidden on smallest screens */}
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-x-8"> {/* Consistent larger gap */}
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`relative text-sm font-medium transition-all duration-300 ease-in-out py-2 px-3 rounded-lg
                ${isActive(item.href) ? 'text-primary bg-primary/15 font-semibold' : 'text-foreground/70 hover:text-primary hover:bg-muted/30'}
              `}
            >
              {item.name}
              {/* Active link underline effect */}
              {isActive(item.href) && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-primary rounded-full animate-fade-in" />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button AND Language Switcher */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/contact">
            <Button
              variant="hero" // Assuming 'hero' variant provides a strong visual
              size="lg" // Slightly larger button
              className="flex items-center gap-2 px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <Zap className="w-4 h-4" />
              {t('navigation.contactUsNow')}
            </Button>
          </Link>
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button (and Language Switcher for mobile) */}
        <div className="md:hidden flex items-center gap-3"> {/* Increased gap for mobile */}
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground/80 hover:bg-muted/30"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 pb-6 border-t border-border/70 bg-background animate-fade-down-in"> {/* Added animate-fade-down-in (you might need to define this in your CSS) */}
          <div className="flex flex-col space-y-2 px-6 pt-4"> {/* Adjusted spacing and padding */}
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-lg font-medium transition-colors hover:text-primary block py-3 px-4 rounded-lg
                  ${isActive(item.href) ? 'text-primary bg-primary/10 font-semibold' : 'text-foreground/80 hover:bg-muted/20'}
                `}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" className="mt-6 block"> {/* Added block and margin-top */}
              <Button variant="hero" size="lg" className="w-full flex justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300">
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
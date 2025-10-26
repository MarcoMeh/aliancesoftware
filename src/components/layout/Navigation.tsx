// src/components/layout/Navigation.tsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher';

// Import useTranslation hook
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar'; // Check for RTL language

  const navItems = [
    { name: t('navigation.home'), href: '/' },
    { name: t('navigation.products'), href: '/products' },
    { name: t('navigation.services'), href: '/services' },
    { name: t('navigation.about'), href: '/about' },
    { name: t('navigation.contact'), href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1128]/90 backdrop-blur-xl border-b border-[#1e3a8a]/50 shadow-lg md:shadow-xl transition-all duration-300"> {/* Stronger blur and shadow, dark background */}
      <div className="container mx-auto px-6 py-2 md:py-2 flex items-center justify-between"> {/* Increased padding */}
        {/* Logo */}
        <Link to="/" className={`flex items-center space-x-3 rtl:space-x-reverse hover:opacity-90 transition-opacity ${isRtl ? 'flex-row-reverse space-x-reverse' : ''}`}> {/* Added rtl:space-x-reverse */}
          {/* Logo as a stylistic element inspired by the provided logo */}
          {/* Logo */}
          <img
            src="/images/logo_aliance.png" // <--- IMPORTANT: Replace with the actual path to your logo
            alt="Aliance Software Logo"
            className="w-10 h-10 object-contain transition-transform duration-200 hover:scale-105" // Adjust size as needed
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd] leading-tight drop-shadow-sm">Aliance Software</h1> {/* Larger, tighter leading */}
            <p className="text-xs text-blue-200/80 hidden sm:block">{t('navigation.innovationExcellence')}</p> {/* Hidden on smallest screens */}
          </div>
        </Link>
        {/* Desktop Navigation */}
        <div className={`hidden md:flex items-center ${isRtl ? 'space-x-reverse' : ''} gap-x-8`}> {/* Consistent larger gap */}
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`relative text-base font-medium transition-all duration-300 ease-in-out py-2 px-3 rounded-lg
                ${isActive(item.href) ? 'text-[#60a5fa] bg-[#3b82f6]/20 font-semibold' : 'text-blue-200/70 hover:text-[#60a5fa] hover:bg-[#1e3a8a]/30'}
              `}
            >
              {item.name}
              {/* Active link underline effect */}
              {isActive(item.href) && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-[#60a5fa] rounded-full animate-fade-in" />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button AND Language Switcher */}
        <div className={`hidden md:flex items-center ${isRtl ? 'space-x-reverse' : ''} gap-4`}>
          <Link to="/contact">
            <Button
              variant="default" // Using default button with custom styling
              size="lg" // Slightly larger button
              className="flex items-center gap-2 px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5
                         bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] text-white hover:from-[#60a5fa] hover:to-[#3b82f6]
                         font-semibold rounded-full"
            >
              <Zap className="w-4 h-4" />
              {t('navigation.contactUsNow')}
            </Button>
          </Link>
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button (and Language Switcher for mobile) */}
        <div className={`md:hidden flex items-center ${isRtl ? 'flex-row-reverse' : ''} gap-3`}> {/* Increased gap for mobile */}
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-blue-200/80 hover:bg-[#1e3a8a]/30"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 pb-6 border-t border-[#1e3a8a]/50 bg-[#0A1128] animate-fade-down-in"> {/* Added animate-fade-down-in (you might need to define this in your CSS) */}
          <div className="flex flex-col space-y-2 px-6 pt-4"> {/* Adjusted spacing and padding */}
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-lg font-medium transition-colors block py-3 px-4 rounded-lg
                  ${isActive(item.href) ? 'text-[#60a5fa] bg-[#3b82f6]/15 font-semibold' : 'text-blue-200/80 hover:bg-[#1e3a8a]/20 hover:text-[#60a5fa]'}
                `}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" className="mt-6 block"> {/* Added block and margin-top */}
              <Button 
                variant="default" 
                size="lg" 
                className="w-full flex justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300
                           bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] text-white hover:from-[#60a5fa] hover:to-[#3b82f6]
                           font-semibold rounded-full"
              >
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
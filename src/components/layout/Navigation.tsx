// src/components/layout/Navigation.tsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Code, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from "@/assets/logo.png"; // Correct logo import

// IMPORT THE LANGUAGE SWITCHER HERE
import LanguageSwitcher from '../LanguageSwitcher'; // Assuming LanguageSwitcher.tsx is in src/components/LanguageSwitcher.tsx

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          {/* Logo */}
          <img
            src={logo} // Correctly using the imported logo
            alt="Aliance Software Logo"
            className="w-10 h-10 object-contain rounded-lg shadow-glow"
          />

          {/* Text */}
          <div>
            <h1 className="text-xl font-bold gradient-text">Aliance Software</h1>
            <p className="text-xs text-muted-foreground">Innovation & Excellence</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.href) ? 'text-primary font-semibold' : 'text-foreground/80'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button AND Language Switcher */}
        <div className="hidden md:flex items-center gap-4"> {/* Used gap-4 for spacing */}
          <Link to="/contact">
            <Button variant="hero" size="default" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Contact Us Now
            </Button>
          </Link>
          {/* LANGUAGE SWITCHER FOR DESKTOP */}
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button (and Language Switcher for mobile) */}
        <div className="md:hidden flex items-center gap-2"> {/* Added flex and gap for mobile layout */}
          <LanguageSwitcher /> {/* LANGUAGE SWITCHER FOR MOBILE, visible next to menu button */}
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
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
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
                Contact Us Now
              </Button>
            </Link>
            {/* You might also want the LanguageSwitcher here if you prefer it inside the dropdown */}
            {/* <div className="mt-4 px-6">
              <LanguageSwitcher />
            </div> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
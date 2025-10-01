// src/components/LanguageSwitcher.tsx
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Languages } from 'lucide-react'; // For the language icon

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* Added a text label and made the button slightly larger for easier visibility and clicking */}
        <Button variant="outline" size="sm" className="h-9 px-3 flex items-center gap-2 bg-gray-800 text-white hover:bg-gray-700">
          <Languages className="h-4 w-4" />
          <span className="text-sm">{i18n.language.toUpperCase()}</span> {/* Shows current language (e.g., EN, AR, FR) */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {/* Highlight the currently active language */}
        <DropdownMenuItem onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'font-bold' : ''}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('ar')} className={i18n.language === 'ar' ? 'font-bold' : ''}>
          العربية
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('fr')} className={i18n.language === 'fr' ? 'font-bold' : ''}>
          Français
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
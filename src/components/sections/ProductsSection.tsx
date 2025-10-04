import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Download, ExternalLink, Star, Users } from 'lucide-react';
import { allProducts } from '@/data/productsData';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const ProductsSection = () => {
  const { t } = useTranslation(); // Initialize the translation hook

  // Helper to translate status dynamically
  const getTranslatedStatus = (status: string) => {
    switch (status) {
      case 'Popular': return t('productsSection.status.popular');
      case 'New': return t('productsSection.status.new');
      case 'Featured': return t('productsSection.status.featured');
      case 'Updated': return t('productsSection.status.updated');
      default: return status; // Fallback if status isn't translated
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Popular': return 'bg-primary';
      case 'New': return 'bg-green-500';
      case 'Featured': return 'bg-gradient-primary';
      case 'Updated': return 'bg-orange-500';
      default: return 'bg-muted';
    }
  };

  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 text-sm text-primary">
            <Star className="w-4 h-4" />
            {t('productsSection.featuredProducts')} {/* Translated */}
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">{t('productsSection.headingPart1')}</span> {/* Translated */}
            <br />
            <span className="text-foreground">{t('productsSection.headingPart2')}</span> {/* Translated */}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('productsSection.subheading')} {/* Translated */}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {allProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="relative">
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 ${getStatusColor(product.status)} text-white text-xs px-2 py-1 rounded-full font-medium`}>
                  {getTranslatedStatus(product.status)} {/* Translated dynamically */}
                </div>
                
                {/* Product Image */}
                <div 
                  className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-lg mb-4 bg-cover bg-center"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {product.name} {/* Product names likely remain untranslated, or you could add keys for them */}
                </CardTitle>
                
                <CardDescription className="text-muted-foreground">
                  {product.description} {/* Product descriptions likely remain untranslated, or you could add keys for them */}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Rating & Users */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{product.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{product.users} {t('productsSection.users')}</span> {/* Translated "Users" */}
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, i) => (
                    <span 
                      key={i}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {feature} {/* Features likely remain untranslated, or you could add keys for them */}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="flex-1 group" 
                    onClick={() => window.location.href = `/product/${product.id}`}
                  >
                    <Download className="w-4 h-4" />
                    {t('productsSection.learnMore')} {/* Translated */}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => window.location.href = `/product/${product.id}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t('productsSection.demo')} {/* Translated */}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group" onClick={() => window.location.href = '/products'}>
            {t('productsSection.viewAllProducts')} {/* Translated */}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Download, ExternalLink, Star, Users } from 'lucide-react';
import { allProducts } from '@/data/productsData';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const ProductsSection = () => {
  const { t } = useTranslation();

  const getTranslatedStatus = (status: string) => {
    switch (status) {
      case 'Popular': return t('productsSection.status.popular');
      case 'New': return t('productsSection.status.new');
      case 'Featured': return t('productsSection.status.featured');
      case 'Updated': return t('productsSection.status.updated');
      default: return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Popular': return 'bg-yellow-500'; // Changed to a more vibrant yellow
      case 'New': return 'bg-green-500';
      case 'Featured': return 'bg-gradient-to-r from-purple-500 to-indigo-500'; // More premium gradient
      case 'Updated': return 'bg-orange-500';
      default: return 'bg-gray-400';
    }
  };

  const translateProductField = (productId: number, key: string, defaultValue: string) => {
    return t(`productDetails.products.${productId}.${key}`, defaultValue);
  };

  return (
    <section className="py-24 relative overflow-hidden"> {/* Added overflow-hidden for subtle effects */}
      {/* Background with a more dynamic gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background opacity-90" />

      {/* Subtle background pattern/texture - optional, but adds depth */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'url("/path/to/subtle-pattern.svg")', backgroundSize: 'cover' }} /> {/* Replace with a real path if desired */}

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 text-sm text-primary font-medium shadow-sm">
            <Star className="w-4 h-4 fill-primary text-primary" /> {/* Filled star */}
            {t('productsSection.featuredProducts')}
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-7 leading-tight"> {/* Larger, bolder heading */}
            <span className="gradient-text">{t('productsSection.headingPart1')}</span>
            <br />
            <span className="text-foreground">{t('productsSection.headingPart2')}</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"> {/* Lighter text for subheading */}
            {t('productsSection.subheading')}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 mb-20"> {/* Increased gap for more breathing room */}
          {allProducts.map((product, index) => (
            <Card
              key={product.id}
              className="group relative bg-card/60 backdrop-blur-md border border-border/70 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-2" // More pronounced hover effect
              style={{ animationDelay: `${index * 0.15}s` }} // Slightly slower animation cascade
            >
              <CardHeader className="p-0 relative rounded-t-xl overflow-hidden">
                {/* Product Image */}
                <div
                  className="w-full h-52 bg-gradient-to-br from-primary/30 to-primary-light/30 bg-cover bg-center transition-transform duration-300 group-hover:scale-105" // Image scale on hover
                  style={{ backgroundImage: `url(${product.image})` }}
                >
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-end p-4">
                    {/* Status Badge - positioned within the image for a cleaner look */}
                    <div className={`absolute top-4 right-4 ${getStatusColor(product.status)} text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-md`}>
                      {getTranslatedStatus(product.status)}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6 space-y-5"> {/* Adjusted padding and spacing */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <CardTitle className="text-2xl font-bold mb-2 md:mb-0 group-hover:text-primary transition-colors duration-300 leading-snug">
                    {translateProductField(product.id, 'name', product.name)}
                    </CardTitle>
                    {/* Rating & Users - moved here for better prominence */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold text-foreground">{product.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{product.users} {t('productsSection.users')}</span>
                        </div>
                    </div>
                </div>


                <CardDescription className="text-base text-muted-foreground leading-relaxed"> {/* Larger, lighter description */}
                  {translateProductField(product.id, 'description', product.description)}
                </CardDescription>

                {/* Features */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {product.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium transition-colors hover:bg-primary/20"
                    >
                      {translateProductField(product.id, `features.${i}`, feature)}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-6"> {/* Buttons stack on small screens, row on larger */}
                  <Button
                    variant="default"
                    size="lg" // Larger buttons
                    className="flex-1 group transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    onClick={() => window.location.href = `/product/${product.id}`}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {t('productsSection.learnMore')}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg" // Larger buttons
                    className="flex-1 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border-border/70 hover:border-primary/50 text-foreground hover:text-primary"
                    onClick={() => window.location.href = `/product/${product.id}`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t('productsSection.demo')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group text-lg px-8 py-4 border-2 border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-md" onClick={() => window.location.href = '/products'}>
            {t('productsSection.viewAllProducts')}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Download, ExternalLink, Star, Users } from 'lucide-react';
import { allProducts } from '@/data/productsData';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { Link } from 'react-router-dom';
import OptimizedImage from '@/components/ui/OptimizedImage';

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
    <section className="py-24 relative overflow-hidden bg-[#0A1128] text-white"> {/* Added overflow-hidden for subtle effects */}
      {/* Decorative blobs (CSS-driven) to reduce DOM noise and improve performance */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="hero-background-blobs">
          <div className="blob" />
          <div className="blob" />
          <div className="blob" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-[#1e3a8a]/20 border border-[#3b82f6]/40 rounded-full px-5 py-2 mb-6 text-sm text-[#93c5fd] font-medium shadow-lg">
            <Star className="w-4 h-4 fill-[#facc15] text-[#facc15]" /> {/* Filled star */}
            {t('productsSection.featuredProducts')}
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-7 leading-tight"> {/* Larger, bolder heading */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd] drop-shadow-lg">{t('productsSection.headingPart1')}</span>
            <br />
            <span className="text-white/95">{t('productsSection.headingPart2')}</span>
          </h2>

          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed drop-shadow-sm"> {/* Lighter text for subheading */}
            {t('productsSection.subheading')}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 mb-20"> {/* Increased gap for more breathing room */}
          {allProducts.map((product, index) => (
            <Card
              key={product.id}
              className="group relative bg-[#0C1530]/70 backdrop-blur-md border border-[#1e3a8a]/50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-2" // More pronounced hover effect
              style={{ animationDelay: `${index * 0.15}s` }} // Slightly slower animation cascade
            >
              <CardHeader className="p-0 relative rounded-t-xl overflow-hidden">
                {/* Product Image (use img with lazy loading for better performance) */}
                <div className="w-full h-52 relative overflow-hidden rounded-t-xl">
                  <OptimizedImage src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors duration-300 flex items-end p-4">
                    {/* Status Badge - positioned within the image for a cleaner look */}
                    <div className={`absolute top-4 right-4 ${getStatusColor(product.status)} text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-md`}>
                      {getTranslatedStatus(product.status)}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6 space-y-5"> {/* Adjusted padding and spacing */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <CardTitle className="text-2xl font-bold mb-2 md:mb-0 group-hover:text-[#60a5fa] transition-colors duration-300 leading-snug">
                    {translateProductField(product.id, 'name', product.name)}
                    </CardTitle>
                    {/* Rating & Users - moved here for better prominence */}
                    <div className="flex items-center gap-4 text-sm text-blue-300">
                        <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold text-white/90">{product.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Users className="w-4 h-4 text-blue-400" />
                            <span>{product.users} {t('productsSection.users')}</span>
                        </div>
                    </div>
                </div>

                <CardDescription className="text-base text-blue-200 leading-relaxed"> {/* Larger, lighter description */}
                  {translateProductField(product.id, 'description', product.description)}
                </CardDescription>

                {/* Features */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {product.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#1e3a8a]/30 text-[#93c5fd] px-3 py-1.5 rounded-full font-medium transition-colors hover:bg-[#3b82f6]/30"
                    >
                      {translateProductField(product.id, `features.${i}`, feature)}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-6"> {/* Buttons stack on small screens, row on larger */}
                  <Link to={`/product/${product.id}`} className="flex-1 block">
                    <Button
                      variant="default"
                      size="lg"
                      className="w-full group transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]
                                 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] text-white hover:from-[#60a5fa] hover:to-[#3b82f6]"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      {t('productsSection.learnMore')}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to={`/product/${product.id}`} className="flex-1 block">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]
                                 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t('productsSection.demo')}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group text-lg px-8 py-4 border-2 border-[#3b82f6]/50 text-[#60a5fa] hover:bg-[#3b82f6]/10 transition-all duration-300 hover:shadow-md" onClick={() => window.location.href = '/products'}>
            {t('productsSection.viewAllProducts')}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
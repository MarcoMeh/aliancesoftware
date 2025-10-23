import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Download, ExternalLink, Star, Users, Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { allProducts } from '@/data/productsData';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Products = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Popular': return 'bg-gradient-to-r from-[#60a5fa] to-[#93c5fd]'; // Using Hero section's gradient
      case 'New': return 'bg-green-600'; // Slightly adjusted for contrast
      case 'Featured': return 'bg-purple-600'; // Another distinct color
      case 'Updated': return 'bg-orange-600'; // Slightly adjusted for contrast
      default: return 'bg-gray-500';
    }
  };

  const getTranslatedStatus = (status: string) => {
    switch (status) {
      case 'Popular': return t('productsSection.status.popular');
      case 'New': return t('productsSection.status.new');
      case 'Featured': return t('productsSection.status.featured');
      case 'Updated': return t('productsSection.status.updated');
      default: return status;
    }
  };

  const translateProductField = (productId: number, key: string, defaultValue: string) => {
    return t(`productDetails.products.${productId}.${key}`, defaultValue);
  };

  return (
    <div
      className="min-h-screen relative
                 bg-gradient-to-br from-[#0A1128] via-[#0C1530] to-[#121A3D] text-white"
    >
      {/* Abstract Background Elements - Lighter opacity */}
      <div className="absolute inset-0 z-0 opacity-8"> {/* Adjusted opacity to 8% */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#1e3a8a] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" /> {/* Lighter opacity */}
        <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-[#3b82f6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" /> {/* Lighter opacity */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#0a0a0a] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" /> {/* Lighter opacity */}

        {/* Subtle grid and lines */}
        <div className="absolute inset-0 opacity-3 pointer-events-none"> {/* Lighter opacity */}
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-500 rounded-full"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `glow ${Math.random() * 10 + 5}s infinite alternate`,
              }}
            />
          ))}
          <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
      </div>

      <Navigation />

      <main className="relative z-10 pt-24">
        {/* Header */}
        <section
          className={`py-16 text-center
                      ${isRtl ? 'rtl' : 'ltr'}`}
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          <div className="container mx-auto px-6">
            <div className="mb-12 animate-fade-in">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tighter">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd] drop-shadow-lg">
                  {t('productsSection.headingPart1')}
                </span>
                <br className="block sm:hidden" />
                <span className="text-white/95">{t('productsSection.headingPart2')}</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-200 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
                {t('productsSection.subheading')}
              </p>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-12">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
                <Input
                  placeholder={t('productsSection.searchPlaceholder')}
                  className="pl-10 bg-white/10 border-blue-400/30 text-white placeholder-blue-300 hover:border-blue-400 focus:border-blue-500 transition-colors"
                />
              </div>
              <Button
                variant="outline"
                className={`group gap-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white
                            ${isRtl ? 'flex-row-reverse' : ''}`}
              >
                <Filter className="w-4 h-4" />
                {t('productsSection.filterButton')}
              </Button>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProducts.map((product, index) => (
                <Link key={product.id} to={`/product/${product.id}`} className="block">
                  <Card
                    className="group bg-white/5 backdrop-blur-sm border-blue-400/20 hover:border-blue-400/50 card-hover h-full
                               transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="relative">
                      {/* Status Badge */}
                      <div className={`absolute top-4 ${isRtl ? 'left-4' : 'right-4'} ${getStatusColor(product.status)} text-white text-xs px-3 py-1 rounded-full font-medium shadow-md`}>
                        {getTranslatedStatus(product.status)}
                      </div>

                      {/* Product Image */}
                      <div
                        className="w-full h-48 bg-gradient-to-br from-[#1e3a8a]/30 to-[#3b82f6]/30 rounded-lg mb-4 bg-cover bg-center overflow-hidden"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <CardTitle className="text-xl font-semibold group-hover:text-[#60a5fa] transition-colors">
                        {translateProductField(product.id, 'name', product.name)}
                      </CardTitle>

                      <CardDescription className="text-blue-200">
                        {translateProductField(product.id, 'description', product.description)}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Rating & Users */}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{product.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 text-blue-300">
                          <Users className="w-4 h-4" />
                          <span>{product.users} {t('productsSection.users')}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, i) => (
                          <span
                            key={i}
                            className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30"
                          >
                            {translateProductField(product.id, `features.${i}`, feature)}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 pt-4">
                        <Button
                          variant="default"
                          size="sm"
                          className={`flex-1 group px-4 py-2 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300
                                      bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] text-white hover:from-[#60a5fa] hover:to-[#3b82f6]
                                      ${isRtl ? 'flex-row-reverse' : ''}`}
                        >
                          <Download className={`w-4 h-4 group-hover:scale-110 transition-transform ${isRtl ? 'ml-2' : 'mr-2'}`} />
                          {t('productsSection.learnMore')}
                          <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRtl ? 'mr-2 rotate-180' : 'ml-2'}`} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Products;
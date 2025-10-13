import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Download, ExternalLink, Star, Users, Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { allProducts } from '@/data/productsData';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // <--- IMPORTANT: Add this import

const Products = () => {
  const { t } = useTranslation();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Popular': return 'bg-primary';
      case 'New': return 'bg-green-500';
      case 'Featured': return 'bg-gradient-primary';
      case 'Updated': return 'bg-orange-500';
      default: return 'bg-muted';
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
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Header */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">{t('productsSection.headingPart1')}</span>
              </h1>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-foreground">{t('productsSection.headingPart2')}</span>
              </h1>
              <p className="text-xl text-black max-w-3xl mx-auto">
                {t('productsSection.subheading')}
              </p>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-12">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black w-5 h-5" />
                <Input
                  placeholder={t('productsSection.searchPlaceholder')}
                  className="pl-10 bg-card/50 border-border/50"
                />
              </div>
              <Button variant="outline" className="gap-2">
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
                // <--- IMPORTANT: Wrap the Card with Link
                <Link key={product.id} to={`/product/${product.id}`} className="block">
                  <Card
                    className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 card-hover h-full" // Added h-full for consistent height
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="relative">
                      {/* Status Badge */}
                      <div className={`absolute top-4 right-4 ${getStatusColor(product.status)} text-white text-xs px-2 py-1 rounded-full font-medium`}>
                        {getTranslatedStatus(product.status)}
                      </div>

                      {/* Product Image */}
                      <div
                        className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-lg mb-4 bg-cover bg-center"
                        style={{ backgroundImage: `url(${product.image})` }}
                      />

                      <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {translateProductField(product.id, 'name', product.name)}
                      </CardTitle>

                      <CardDescription className="text-black">
                        {translateProductField(product.id, 'description', product.description)}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Rating & Users */}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{product.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 text-black">
                          <Users className="w-4 h-4" />
                          <span>{product.users} {t('productsSection.users')}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, i) => (
                          <span
                            key={i}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                          >
                            {translateProductField(product.id, `features.${i}`, feature)}
                          </span>
                        ))}
                      </div>

                      {/* Actions - Removed onClick handlers as the entire card navigates */}
                      <div className="flex gap-3 pt-4">
                        <Button
                          variant="default"
                          size="sm"
                          className="flex-1 group"
                          // onClick={(e) => { e.stopPropagation(); window.location.href = `/product/${product.id}`}}
                        >
                          <Download className="w-4 h-4" />
                          {t('productsSection.learnMore')}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link> // <--- End of Link wrapper
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Products;
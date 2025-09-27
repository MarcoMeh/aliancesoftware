import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Download, ExternalLink, Star, Users, Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import productsShowcase from '@/assets/products-showcase.jpg';

const Products = () => {
  const allProducts = [
    {
      id: 1,
      name: 'TaskFlow Pro',
      description: 'Advanced project management platform with AI-powered insights',
      category: 'Productivity',
      rating: 4.9,
      users: '10K+',
      features: ['AI Analytics', 'Team Collaboration', 'Time Tracking'],
      status: 'Popular'
    },
    {
      id: 2,
      name: 'DataViz Studio',
      description: 'Professional data visualization and reporting suite',
      category: 'Analytics',
      rating: 4.8,
      users: '5K+',
      features: ['Real-time Charts', 'Custom Reports', 'API Integration'],
      status: 'New'
    },
    {
      id: 3,
      name: 'SecureVault',
      description: 'Enterprise-grade password and secrets management',
      category: 'Security',
      rating: 4.9,
      users: '15K+',
      features: ['End-to-End Encryption', 'Team Sharing', 'Audit Logs'],
      status: 'Featured'
    },
    {
      id: 4,
      name: 'CloudSync',
      description: 'Seamless file synchronization across all platforms',
      category: 'Storage',
      rating: 4.7,
      users: '8K+',
      features: ['Real-time Sync', 'Version Control', 'Offline Access'],
      status: 'Updated'
    },
    {
      id: 5,
      name: 'CodeAssist AI',
      description: 'Intelligent code completion and debugging assistant',
      category: 'Development',
      rating: 4.8,
      users: '12K+',
      features: ['Smart Completion', 'Bug Detection', 'Code Optimization'],
      status: 'Popular'
    },
    {
      id: 6,
      name: 'DesignFlow',
      description: 'Professional UI/UX design collaboration platform',
      category: 'Design',
      rating: 4.7,
      users: '6K+',
      features: ['Real-time Collaboration', 'Version History', 'Component Library'],
      status: 'New'
    }
  ];

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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Header */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Our Products</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover our complete collection of professional software solutions designed to enhance productivity and streamline workflows.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-12">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input 
                  placeholder="Search products..." 
                  className="pl-10 bg-card/50 border-border/50"
                />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProducts.map((product, index) => (
                <Card 
                  key={product.id} 
                  className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="relative">
                    {/* Status Badge */}
                    <div className={`absolute top-4 right-4 ${getStatusColor(product.status)} text-white text-xs px-2 py-1 rounded-full font-medium`}>
                      {product.status}
                    </div>
                    
                    {/* Product Image */}
                    <div 
                      className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-lg mb-4 bg-cover bg-center"
                      style={{ backgroundImage: `url(${productsShowcase})` }}
                    />
                    
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {product.name}
                    </CardTitle>
                    
                    <CardDescription className="text-muted-foreground">
                      {product.description}
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
                        <span>{product.users} users</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, i) => (
                        <span 
                          key={i}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-4">
                      <Button variant="default" size="sm" className="flex-1 group">
                        <Download className="w-4 h-4" />
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Products;
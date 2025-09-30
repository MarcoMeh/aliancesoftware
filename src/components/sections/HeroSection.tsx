import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Rocket, Code } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white text-black">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-white to-blue-100/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-300 rounded-full px-4 py-2 mb-8 text-sm text-blue-700 backdrop-blur-sm">
            <Rocket className="w-4 h-4" />
            Aliance Software — Your Partner in Digital Transformation
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Smart Business Software
            </span>
            <br />
            <span className="text-gray-800">and Digital Solutions</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            At Aliance Software, we create powerful desktop applications that help organizations
            manage administration, clients, and data. We also design websites, logos, videos, and
            full digital branding to grow your business with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button
              variant="hero"
              size="hero"
              className="group bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => (window.location.href = '/products')}
            >
              <Code className="w-5 h-5" />
              Explore Software
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="hero"
              className="group border-blue-600 text-blue-600 hover:bg-blue-50"
              onClick={() => (window.location.href = '/services')}
            >
              <Play className="w-5 h-5" />
              Request Service
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {[
              { label: 'Software Launched', value: '10+' },
              { label: 'Happy Clients', value: '100+' },
              { label: 'Years Experience', value: '5+' },
              { label: 'Success Rate', value: '98%' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full opacity-20 animate-glow" />
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-blue-300/30 rounded-lg rotate-45 animate-bounce" />
    </section>
  );
};

export default HeroSection;

import React from 'react';
import { AlertCircle, Trash2, Droplets } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1638890814376-5888af1b052f?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Alert Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 text-accent-foreground">
            <AlertCircle className="w-5 h-5" />
            <span className="text-sm font-semibold">Alerta Ambiental - Iztapalapa</span>
          </div>

          {/* Main Heading */}
          <h1 className="heading-display text-4xl sm:text-5xl lg:text-7xl text-white leading-tight">
            No Más Basura en
            <span className="block mt-2" style={{ color: 'hsl(var(--accent))' }}>
              Nuestras Calles
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Cada envoltorio, cada botella, cada residuo que tiramos contamina nuestro hogar. 
            Es hora de actuar por un Iztapalapa más limpio.
          </p>

          {/* Icon Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8">
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                <Trash2 className="w-7 h-7 text-accent-foreground" />
              </div>
              <p className="text-white font-semibold">Calles Sucias</p>
              <p className="text-sm text-gray-300 text-center">Residuos acumulados afean nuestra comunidad</p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                <Droplets className="w-7 h-7 text-accent-foreground" />
              </div>
              <p className="text-white font-semibold">Coladeras Tapadas</p>
              <p className="text-sm text-gray-300 text-center">La basura provoca inundaciones severas</p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                <AlertCircle className="w-7 h-7 text-accent-foreground" />
              </div>
              <p className="text-white font-semibold">Medio Ambiente</p>
              <p className="text-sm text-gray-300 text-center">Daño irreversible a nuestro ecosistema</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <a 
              href="#actuar" 
              className="btn-accent inline-flex items-center gap-2 text-lg"
            >
              Únete al Cambio
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import React from 'react';
import { TrendingUp, Users, TreePine, Recycle } from 'lucide-react';

export const StatsSection = () => {
  const stats = [
    {
      icon: Trash2Icon,
      number: '13,000',
      label: 'Toneladas de basura',
      sublabel: 'generadas diariamente en Iztapalapa'
    },
    {
      icon: Droplets,
      number: '60%',
      label: 'Coladeras obstruidas',
      sublabel: 'por residuos sólidos en época de lluvias'
    },
    {
      icon: TrendingUp,
      number: '45%',
      label: 'Aumento en enfermedades',
      sublabel: 'relacionadas con contaminación'
    },
    {
      icon: AlertTriangle,
      number: '8 de 10',
      label: 'Calles afectadas',
      sublabel: 'por acumulación de residuos'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl text-foreground">
            La Realidad de
            <span className="block mt-2" style={{ color: 'hsl(var(--accent))' }}>
              Nuestro Problema
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cifras alarmantes que demuestran la urgencia de actuar ahora
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative bg-card rounded-2xl p-8 card-hover border border-border text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <stat.icon className="w-8 h-8" style={{ color: 'hsl(var(--primary))' }} />
              </div>
              <div className="space-y-3">
                <p className="text-4xl sm:text-5xl font-bold heading-display" style={{ color: 'hsl(var(--accent))' }}>
                  {stat.number}
                </p>
                <p className="text-lg font-semibold text-foreground">
                  {stat.label}
                </p>
                <p className="text-sm text-muted-foreground">
                  {stat.sublabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Icons as components to avoid import issues
const Trash2Icon = ({ className, style }) => (
  <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const Droplets = ({ className, style }) => (
  <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const AlertTriangle = ({ className, style }) => (
  <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

export default StatsSection;


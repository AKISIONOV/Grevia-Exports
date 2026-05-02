import React from 'react';
import { Globe2, ShieldCheck, Award, Ship, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TrustStats = () => {
  const { t } = useTranslation();

  const stats = [
    { id: 1, icon: Globe2, value: "10+", label: t('stats.countries') },
    { id: 2, icon: ShieldCheck, value: "ISO", label: t('stats.certified') },
    { id: 3, icon: Award, value: "100%", label: t('stats.quality') },
    { id: 4, icon: Ship, value: "140+", label: t('stats.shipments') },
    { id: 5, icon: CheckCircle, value: "FSSAI", label: t('stats.approved') },
  ];

  return (
    <section id="quality" className="bg-primary py-8 sm:py-12 border-y-4 border-accent relative z-20 shadow-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center text-center space-y-2 sm:space-y-4 group">
              <div className="p-3 sm:p-4 bg-primary-light rounded-full group-hover:bg-accent transition-colors duration-300 shadow-inner">
                <stat.icon className="w-8 h-8 sm:w-9 sm:h-9 text-accent group-hover:text-primary-dark transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-serif">{stat.value}</h3>
                <p className="text-white/80 font-medium mt-1 text-xs sm:text-sm lg:text-base uppercase tracking-wider">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStats;

import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const formLink = "https://docs.google.com/forms/d/1BENrusuFBdBsiZtRQ_fY1ckRg6sVtEahkyOoFGrW4A4/viewform";

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-48 lg:pb-32 bg-background min-h-[90vh] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center z-10 relative">
        <div className="space-y-6 md:space-y-8 max-w-2xl mt-8 lg:mt-0">
          <div className="inline-block px-4 py-1.5 bg-accent/20 text-yellow-700 rounded-full font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-sm">
            {t('hero.priority')}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-dark">
            {t('hero.title')}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-charcoal-light leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4">
            <a 
              href={formLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 md:px-8 md:py-4 bg-primary text-white text-center rounded-md font-semibold text-base md:text-lg hover:bg-primary-light transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              {t('hero.orderBtn')}
            </a>
            <a 
              href="#products"
              className="px-6 py-3 md:px-8 md:py-4 bg-white border-2 border-primary text-primary text-center rounded-md font-semibold text-base md:text-lg hover:bg-stone-50 transition-all"
            >
              {t('hero.exploreBtn')}
            </a>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[600px] w-full rounded-2xl shadow-2xl flex items-center justify-center bg-stone-200 border-4 border-white mt-8 lg:mt-0 overflow-hidden">
          <img src="images/hero.webp" alt="Premium Green Cardamom Pods" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="eager" />
        </div>
      </div>
      
      {/* Decorative blobs */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10 hidden sm:block"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 hidden md:block"></div>
    </section>
  );
};

export default Hero;

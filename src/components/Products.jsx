import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ProductCard = ({ product, t }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full border border-stone-100 hover:-translate-y-1">
      <div className="h-40 sm:h-48 bg-stone-200 flex items-center justify-center border-b border-stone-100 relative overflow-hidden group-hover:shadow-inner">
        <img src={product.imageSrc} alt={product.category} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary-dark mb-3 sm:mb-4 group-hover:text-primary transition-colors">{product.category}</h3>
        <div className="mb-4 sm:mb-6 flex-1">
          <h4 className="text-xs sm:text-sm font-bold text-charcoal-light mb-2 sm:mb-3 uppercase tracking-wide">{t('productCard.varieties')}</h4>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {product.varieties.map((variety, idx) => (
              <span key={idx} className="px-2 py-1 sm:px-3 sm:py-1 bg-background text-primary-dark text-[10px] sm:text-xs font-semibold rounded-full border border-primary/10">
                {variety}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-auto border-t border-stone-100 pt-3 sm:pt-4 cursor-pointer">
          <div className="text-xs sm:text-sm text-charcoal-light font-bold flex items-center justify-between group-hover:text-accent transition-colors">
            <span>{t('productCard.details')}</span>
            <ChevronDown size={18} className="transform group-hover:rotate-180 transition-transform duration-300 text-accent" />
          </div>
          
          <div className="max-h-0 overflow-hidden group-hover:max-h-64 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 mt-0 group-hover:mt-3 sm:group-hover:mt-4 space-y-2 sm:space-y-3">
            <div>
              <span className="font-bold text-primary text-[10px] sm:text-xs uppercase tracking-wide block mb-0.5 sm:mb-1">{t('productCard.quality')}</span>
              <p className="text-xs sm:text-sm text-charcoal">{product.quality}</p>
            </div>
            <div>
              <span className="font-bold text-primary text-[10px] sm:text-xs uppercase tracking-wide block mb-0.5 sm:mb-1">{t('productCard.packaging')}</span>
              <p className="text-xs sm:text-sm text-charcoal">{product.packaging}</p>
            </div>
            <div>
              <span className="font-bold text-primary text-[10px] sm:text-xs uppercase tracking-wide block mb-0.5 sm:mb-1">{t('productCard.readiness')}</span>
              <p className="text-xs sm:text-sm text-charcoal">{product.readiness}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const { t } = useTranslation();

  const productsData = [
    {
      category: t('categories.spices'),
      imageSrc: "/images/spices.webp",
      varieties: ["Turmeric (Powder/Whole)", "Red Chili (Powder/Whole)", "Coriander (Powder/Seeds)", "Cumin Seeds", "Black Pepper", "Cloves", "Cinnamon"],
      quality: "Grade A, Export Quality, Lab Tested.",
      packaging: "25kg, 50kg bags or custom.",
      readiness: "International food safety compliance."
    },
    {
      category: t('categories.rice'),
      imageSrc: "/images/rice.webp",
      varieties: ["Basmati (Traditional/Aged)", "Non-Basmati", "Parboiled", "Broken", "Organic"],
      quality: "Premium grades, consistent length, minimal breakage.",
      packaging: "5kg, 10kg, 25kg, 50kg, custom branding.",
      readiness: "Meets international moisture/purity standards."
    },
    {
      category: t('categories.pulses'),
      imageSrc: "/images/pulses.webp",
      varieties: ["Toor Dal", "Moong Dal", "Urad Dal", "Chana Dal", "Masoor Dal", "Chickpeas (Kabuli/Desi)"],
      quality: "Cleaned, polished, size/color graded.",
      packaging: "25kg/50kg moisture-proof.",
      readiness: "Export-grade, minimal foreign matter."
    },
    {
      category: t('categories.cashews'),
      imageSrc: "/images/cashews.webp",
      varieties: ["W180", "W210", "W240", "W320", "W450", "Splits (sw)", "Pieces (LWP, SWP, BB)"],
      quality: "Grade A, uniform size, moisture controlled.",
      packaging: "Vacuum-sealed 10kg/25kg tins/cartons.",
      readiness: "Full traceability."
    },
    {
      category: t('categories.cocopeat'),
      imageSrc: "/images/cocopeat.webp",
      varieties: ["Low EC", "High EC", "Blocks (5kg)", "Bales", "Coco Chips", "Coco Fiber"],
      quality: "Washed, buffered, pH balanced.",
      packaging: "Compressed blocks/bales.",
      readiness: "Ideal for horticulture, organic options."
    },
    {
      category: t('categories.agro'),
      imageSrc: "/images/agro.webp",
      varieties: ["Dry Fruits & Nuts", "Seeds (Sesame, Mustard)", "Sugar", "Tea", "Coffee Beans", "Jaggery", "Tamarind"],
      quality: "Carefully sourced, international parameters.",
      packaging: "Customizable.",
      readiness: "Full documentation support."
    }
  ];

  return (
    <section id="products" className="py-16 sm:py-24 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-primary-dark mb-4 sm:mb-6">
            {t('products.title')}
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-accent mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-charcoal-light">
            {t('products.subtitle')}
          </p>
        </div>

        {/* Featured Card: Natural Cardamom */}
        <div className="mb-12 sm:mb-16 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden border-2 border-accent/30 relative">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 min-h-[250px] sm:min-h-[300px] bg-stone-200 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute top-4 left-4 bg-accent text-primary-dark font-bold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm shadow-md z-10 uppercase tracking-wide">
                {t('products.featured')}
              </div>
              <img src="/images/featured.webp" alt="Premium Green Cardamom" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-primary/10 transition-opacity duration-300 group-hover:opacity-0"></div>
            </div>
            <div className="md:col-span-3 p-6 sm:p-8 lg:p-12 flex flex-col justify-center relative">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-primary-dark mb-3 sm:mb-4">{t('products.cardamom.title')}</h3>
              <p className="text-charcoal text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
                {t('products.cardamom.desc')}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10">
                 <div className="bg-background p-4 rounded-lg border border-stone-100">
                  <h4 className="font-bold text-primary uppercase tracking-wide text-xs sm:text-sm mb-1.5 sm:mb-2">{t('products.cardamom.qualityTitle')}</h4>
                  <p className="text-xs sm:text-sm text-charcoal font-medium">{t('products.cardamom.qualityDesc')}</p>
                </div>
                <div className="bg-background p-4 rounded-lg border border-stone-100">
                  <h4 className="font-bold text-primary uppercase tracking-wide text-xs sm:text-sm mb-1.5 sm:mb-2">{t('products.cardamom.pkgTitle')}</h4>
                  <p className="text-xs sm:text-sm text-charcoal font-medium">{t('products.cardamom.pkgDesc')}</p>
                </div>
              </div>
              
              <a 
                href="https://docs.google.com/forms/d/1BENrusuFBdBsiZtRQ_fY1ckRg6sVtEahkyOoFGrW4A4/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-block bg-primary text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-md font-semibold text-center hover:bg-primary-light transition-all shadow-lg hover:-translate-y-0.5 text-sm sm:text-base"
              >
                {t('products.cardamom.inquireBtn')}
              </a>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {productsData.map((product, idx) => (
            <ProductCard key={idx} product={product} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

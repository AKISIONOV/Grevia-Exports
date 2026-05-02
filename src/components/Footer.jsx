import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const formLink = "https://docs.google.com/forms/d/1BENrusuFBdBsiZtRQ_fY1ckRg6sVtEahkyOoFGrW4A4/viewform";

  return (
    <footer id="contact" className="bg-primary-dark text-white pt-16 sm:pt-20 pb-8 sm:pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand Info */}
          <div className="space-y-4 sm:space-y-6 lg:col-span-1">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-accent">Grevia Exports</h2>
            <p className="text-stone-300 leading-relaxed text-sm">
              {t('footer.brandDesc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold font-serif mb-4 sm:mb-6 text-white">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#home" className="text-sm sm:text-base text-stone-300 hover:text-accent transition-colors block py-1">{t('nav.home')}</a></li>
              <li><a href="#products" className="text-sm sm:text-base text-stone-300 hover:text-accent transition-colors block py-1">{t('nav.products')}</a></li>
              <li><a href="#quality" className="text-sm sm:text-base text-stone-300 hover:text-accent transition-colors block py-1">{t('nav.quality')}</a></li>
              <li><a href={formLink} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-stone-300 hover:text-accent transition-colors block py-1">{t('nav.quote')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-lg sm:text-xl font-bold font-serif mb-4 sm:mb-6 text-white">{t('footer.contactUs')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-4 sm:space-y-6">
                <a href="tel:+917708081821" className="flex items-start space-x-3 sm:space-x-4 text-stone-300 hover:text-accent transition-colors group">
                  <div className="p-2 bg-primary/50 rounded-full group-hover:bg-accent/20 transition-colors">
                    <Phone size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-xs sm:text-sm uppercase tracking-wider mb-0.5 sm:mb-1">{t('footer.phone')}</p>
                    <p className="font-medium text-sm sm:text-base">+91 77080 81821</p>
                  </div>
                </a>
                <a href="https://wa.me/919360410920" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-3 sm:space-x-4 text-stone-300 hover:text-accent transition-colors group">
                  <div className="p-2 bg-primary/50 rounded-full group-hover:bg-accent/20 transition-colors">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-xs sm:text-sm uppercase tracking-wider mb-0.5 sm:mb-1">{t('footer.whatsapp')}</p>
                    <p className="font-medium text-sm sm:text-base">+91 93604 10920</p>
                  </div>
                </a>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <a href="mailto:greviaexports1@gmail.com" className="flex items-start space-x-3 sm:space-x-4 text-stone-300 hover:text-accent transition-colors break-all group">
                  <div className="p-2 bg-primary/50 rounded-full group-hover:bg-accent/20 transition-colors">
                    <Mail size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-xs sm:text-sm uppercase tracking-wider mb-0.5 sm:mb-1">{t('footer.email')}</p>
                    <p className="font-medium text-xs sm:text-sm">greviaexports1@gmail.com</p>
                  </div>
                </a>
                <div className="pt-2">
                  <a 
                    href={formLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-accent text-primary-dark px-6 py-3 rounded-md font-bold hover:bg-accent-light transition-all shadow-md hover:-translate-y-0.5 text-sm sm:text-base"
                  >
                    {t('footer.inquiryBtn')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-700/50 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-stone-400 gap-4 md:gap-0 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
          <p className="font-medium text-stone-300">{t('footer.tagline')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

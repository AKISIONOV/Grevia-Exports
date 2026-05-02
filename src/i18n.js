import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        products: "Products",
        quality: "Quality",
        contact: "Contact",
        quote: "Get a Quote",
        language: "Language"
      },
      hero: {
        priority: "Top Priority Focus",
        title: "Exporting Premium True Natural Cardamom & Finest Indian Spices Worldwide.",
        subtitle: "Delivering uncompromised quality, rich aroma, and authentic taste from the heart of India to the global market. Your trusted partner in international agro-commodity supply.",
        orderBtn: "Order Now / Inquire",
        exploreBtn: "Explore Products",
        imgPlaceholder: "Image Placeholder",
        imgDesc: "\"Hero Background: High-resolution, cinematic shot of fresh, premium green cardamom pods.\""
      },
      stats: {
        countries: "Countries Served",
        certified: "Certified Products",
        quality: "Quality Certified",
        shipments: "Export Shipments",
        approved: "Approved"
      },
      products: {
        title: "Our Premium Export Catalog",
        subtitle: "Sourced directly from the best farms, processed with care, and packed to meet the highest global standards.",
        featured: "Featured Product",
        cardamom: {
          title: "Natural Cardamom",
          desc: "Known as the \"Queen of Spices\", our True Natural Cardamom is sourced from the lush estates of India. We export pods with vibrant green color, rich essential oil content, and intense aroma.",
          qualityTitle: "Quality & Grades",
          qualityDesc: "8mm, 7.5mm, 7mm, 6.5mm, Split, Seeds. Export Quality, Lab Tested.",
          pkgTitle: "Packaging & Supply",
          pkgDesc: "5kg, 10kg, 25kg, 50kg bags. Customized packaging available.",
          inquireBtn: "Inquire for Cardamom",
          imgTitle: "Image: Premium Green Cardamom Pods",
          imgDesc: "High quality, large size, export grade"
        }
      },
      productCard: {
        varieties: "Available Varieties",
        details: "Export Details",
        quality: "Quality",
        packaging: "Packaging",
        readiness: "Export Readiness"
      },
      footer: {
        brandDesc: "Exporting Premium True Natural Cardamom & Finest Indian Spices Worldwide. Your trusted partner for quality agricultural commodities.",
        quickLinks: "Quick Links",
        contactUs: "Contact Us",
        phone: "Phone",
        whatsapp: "WhatsApp",
        email: "Email",
        inquiryBtn: "Inquiry Form",
        rights: "Grevia Exports. All rights reserved.",
        tagline: "Premium True Natural Cardamom & Finest Indian Spices"
      },
      categories: {
        spices: "Spices",
        rice: "Rice",
        pulses: "Pulses",
        cashews: "Cashew Nuts",
        cocopeat: "Cocopeat",
        agro: "Agro Commodities"
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        products: "Productos",
        quality: "Calidad",
        contact: "Contacto",
        quote: "Obtener Cotización",
        language: "Idioma"
      },
      hero: {
        priority: "Enfoque de Máxima Prioridad",
        title: "Exportación de Cardamomo Natural Premium y las Mejores Especias Indias a Nivel Mundial.",
        subtitle: "Entregando calidad sin concesiones, rico aroma y sabor auténtico desde el corazón de la India al mercado global. Su socio de confianza en el suministro internacional.",
        orderBtn: "Ordenar Ahora / Consultar",
        exploreBtn: "Explorar Productos",
        imgPlaceholder: "Marcador de Imagen",
        imgDesc: "\"Fondo de Inicio: Toma cinematográfica de alta resolución de vainas de cardamomo verde premium y frescas.\""
      },
      stats: {
        countries: "Países Servidos",
        certified: "Productos Certificados",
        quality: "Calidad Certificada",
        shipments: "Envíos de Exportación",
        approved: "Aprobado"
      },
      products: {
        title: "Nuestro Catálogo de Exportación Premium",
        subtitle: "Procedente directamente de las mejores granjas, procesado con cuidado y empacado para cumplir con los más altos estándares globales.",
        featured: "Producto Destacado",
        cardamom: {
          title: "Cardamomo Natural",
          desc: "Conocida como la \"Reina de las Especias\", nuestro Cardamomo Natural Verdadero proviene de las exuberantes fincas de la India. Exportamos vainas con vibrante color verde y rico aroma.",
          qualityTitle: "Calidad y Grados",
          qualityDesc: "8mm, 7.5mm, 7mm, 6.5mm, Partido, Semillas. Calidad de Exportación, Probado en Laboratorio.",
          pkgTitle: "Empaque y Suministro",
          pkgDesc: "Bolsas de 5kg, 10kg, 25kg, 50kg. Empaque personalizado disponible.",
          inquireBtn: "Consultar por Cardamomo",
          imgTitle: "Imagen: Vainas de Cardamomo Verde Premium",
          imgDesc: "Alta calidad, tamaño grande, grado de exportación"
        }
      },
      productCard: {
        varieties: "Variedades Disponibles",
        details: "Detalles de Exportación",
        quality: "Calidad",
        packaging: "Empaque",
        readiness: "Preparación para Exportación"
      },
      footer: {
        brandDesc: "Exportación de Cardamomo Natural Premium y las Mejores Especias Indias. Su socio de confianza para productos agrícolas de calidad.",
        quickLinks: "Enlaces Rápidos",
        contactUs: "Contáctenos",
        phone: "Teléfono",
        whatsapp: "WhatsApp",
        email: "Correo Electrónico",
        inquiryBtn: "Formulario de Consulta",
        rights: "Grevia Exports. Todos los derechos reservados.",
        tagline: "Cardamomo Natural Premium y las Mejores Especias Indias"
      },
      categories: {
        spices: "Especias",
        rice: "Arroz",
        pulses: "Legumbres",
        cashews: "Anacardos",
        cocopeat: "Fibra de Coco",
        agro: "Productos Agrícolas"
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        products: "Produits",
        quality: "Qualité",
        contact: "Contact",
        quote: "Obtenir un Devis",
        language: "Langue"
      },
      hero: {
        priority: "Priorité Absolue",
        title: "Exportation de Cardamome Naturelle Premium & des Meilleures Épices Indiennes.",
        subtitle: "Une qualité sans compromis, un arôme riche et un goût authentique du cœur de l'Inde vers le marché mondial. Votre partenaire de confiance en approvisionnement international.",
        orderBtn: "Commander / Se Renseigner",
        exploreBtn: "Explorer les Produits",
        imgPlaceholder: "Espace Réservé pour l'Image",
        imgDesc: "\"Arrière-plan : Photo haute résolution de gousses de cardamome verte fraîches et de qualité supérieure.\""
      },
      stats: {
        countries: "Pays Desservis",
        certified: "Produits Certifiés",
        quality: "Qualité Certifiée",
        shipments: "Expéditions Réalisées",
        approved: "Approuvé"
      },
      products: {
        title: "Notre Catalogue d'Exportation Premium",
        subtitle: "Provenant directement des meilleures fermes, traité avec soin et emballé pour répondre aux normes mondiales les plus strictes.",
        featured: "Produit Phare",
        cardamom: {
          title: "Cardamome Naturelle",
          desc: "Connue sous le nom de \"Reine des Épices\", notre véritable cardamome naturelle provient des domaines luxuriants de l'Inde. Nous exportons des gousses à la couleur verte vibrante.",
          qualityTitle: "Qualité & Grades",
          qualityDesc: "8mm, 7.5mm, 7mm, 6.5mm, Fendue, Graines. Qualité d'exportation.",
          pkgTitle: "Emballage & Approvisionnement",
          pkgDesc: "Sacs de 5kg, 10kg, 25kg, 50kg. Emballage personnalisé disponible.",
          inquireBtn: "Se Renseigner sur la Cardamome",
          imgTitle: "Image : Gousses de Cardamome Verte Premium",
          imgDesc: "Haute qualité, grande taille, grade d'exportation"
        }
      },
      productCard: {
        varieties: "Variétés Disponibles",
        details: "Détails d'Exportation",
        quality: "Qualité",
        packaging: "Emballage",
        readiness: "Prêt pour l'Export"
      },
      footer: {
        brandDesc: "Exportation de Cardamome Naturelle Premium & des Meilleures Épices Indiennes à l'échelle mondiale. Votre partenaire de confiance.",
        quickLinks: "Liens Rapides",
        contactUs: "Nous Contacter",
        phone: "Téléphone",
        whatsapp: "WhatsApp",
        email: "Email",
        inquiryBtn: "Formulaire de Demande",
        rights: "Grevia Exports. Tous droits réservés.",
        tagline: "Cardamome Naturelle Premium & Meilleures Épices Indiennes"
      },
      categories: {
        spices: "Épices",
        rice: "Riz",
        pulses: "Légumineuses",
        cashews: "Noix de Cajou",
        cocopeat: "Fibre de Coco",
        agro: "Produits Agricoles"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

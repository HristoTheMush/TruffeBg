/* ============================================================
   Truffe de Bulgarie — script.js
   Vanilla JS only: i18n, hero slider, nav, contact form.
   ============================================================ */

(function () {
  'use strict';

  /* ============================================================
     1. TRANSLATIONS
     ============================================================ */
  const translations = {
    en: {
      site_title: "Truffe de Bulgarie | Artisan Truffles",
      nav_home: "Home",
      nav_truffles: "Truffles",
      nav_pricing: "Prices",
      nav_about: "About",
      nav_contact: "Contact",

      slide1_title: "From the Forest to Your Table",
      slide1_subtitle: "Hand-harvested truffles, delivered with care and tradition.",
      slide1_cta: "Discover Our Truffles",
      slide2_title: "A Treasure Unearthed",
      slide2_subtitle: "Each truffle is inspected by hand before it ever reaches your table.",
      slide2_cta: "See the Varieties",
      slide3_title: "The Art of the Hunt",
      slide3_subtitle: "Our trained dogs track every truffle deep in the Bulgarian forest.",
      slide3_cta: "Our Story",

      intro_text: "A family-run team based in Veliko Tarnovo, Bulgaria, bringing together more than 30 experienced truffle hunters and suppliers. We harvest exclusively local Bulgarian truffles straight from the forest — forest-fresh quality at honest prices, trusted by chefs, resellers, and gourmet distributors across Europe.",

      truffles_heading: "Our Truffle Varieties",
      truffle1_name: "Black Winter Truffle",
      truffle1_desc: "Prized for its intense aroma and deep, earthy flavor, the Black Winter Truffle is harvested between December and March. A true delicacy for the winter table.",
      truffle2_name: "Black Summer Truffle",
      truffle2_desc: "Milder and more delicate than its winter cousin, the Black Summer Truffle offers a subtle, nutty aroma, perfect for warm-weather dishes.",
      truffle3_name: "White Alba Truffle",
      truffle3_desc: "Native to the hills of Piedmont, the White Alba Truffle is celebrated as the most precious of all, prized for its intoxicating fragrance.",
      truffle4_name: "Burgundy Truffle",
      truffle4_desc: "Harvested in early autumn, the Burgundy Truffle brings a refined, hazelnut-like aroma that pairs beautifully with simple, seasonal dishes.",

      pricing_heading: "Wholesale Pricing",
      pricing_col_truffle: "Truffle",
      pricing_col_price: "Price per kg",
      pricing_col_grade: "Grade",
      pricing_col_size: "Size",
      pricing_col_price_short: "Price",
      price1_value: "€0 / kg",
      price2_value: "€150 / kg",
      pricing_burgundy_heading: "Tuber uncinatum (Burgundy / Autumn Truffle)",
      pricing_burgundy_grade1: "Extra+",
      pricing_burgundy_size1: "15 g and above",
      pricing_burgundy_price1: "€650 / kg",
      pricing_burgundy_grade2: "Class I",
      pricing_burgundy_size2: "10-15 g",
      pricing_burgundy_price2: "€350 / kg",
      pricing_burgundy_grade3: "Class II",
      pricing_burgundy_size3: "up to 10 g",
      pricing_burgundy_price3: "€180 / kg",
      pricing_alba_heading: "Tuber magnatum Pico (Italian White Truffle)",
      pricing_alba_grade1: "Extra",
      pricing_alba_price1: "€5,000 / kg",
      pricing_alba_grade2: "Class I",
      pricing_alba_price2: "€4,000 / kg",
      pricing_alba_grade3: "Class II",
      pricing_alba_price3: "€3,000 / kg",
      pricing_alba_grade4: "Class III",
      pricing_alba_price4: "€2,000 / kg",
      pricing_note: "Prices are indicative and may vary depending on seasonal availability and quality grade. Contact us for a current quote.",
      pricing_cta: "Contact Us for Orders",

      story1_heading: "From the Land to the Table",
      story1_link: "Discover",
      story2_heading: "Truffle Stories",
      story2_link: "Discover",

      whyus_heading: "Why Choose Us",
      why1_title: "Hand-Selected",
      why1_text: "Every truffle is inspected and chosen by hand, ensuring only the finest reach your table.",
      why2_title: "Sustainably Sourced",
      why2_text: "We work with local foragers who respect the forest and its natural cycles.",
      why3_title: "Generations of Expertise",
      why3_text: "Three generations of knowledge guide our harvesting, grading, and selection process.",

      why_checklist_heading: "At a Glance",
      why_check1: "Over 10 years of proven industry experience",
      why_check2: "100% fresh, hand-selected local truffles",
      why_check3: "Fast, reliable delivery within 24 hours via DHL",
      why_check4: "Flexible wholesale pricing based on quantity",
      why_check5: "Trusted by chefs, resellers, and gourmet distributors across Europe",

      about_heading: "Our Story",
      about_text: "For more than 10 years, our family-run team has specialized in sourcing and exporting fresh truffles from the forests around Veliko Tarnovo. Working alongside more than 30 experienced hunters and suppliers, we harvest exclusively local Bulgarian truffles and deliver them across Europe — to clients in Italy, France, Spain, Germany, and beyond. Our specially trained dogs work alongside our foragers, using their keen sense of smell to locate truffles hidden deep beneath the forest floor.",

      contact_heading: "Get in Touch",
      contact_name_label: "Contact",
      contact_company_label: "Company",
      contact_email_label: "Email",
      contact_phone_fr_label: "Phone (France)",
      contact_phone_bg_label: "Phone (Bulgaria)",
      contact_address_label: "Address",
      contact_vat_label: "VAT",

      order_info_heading: "Ordering Information",
      order_info_payment: "Payment is due within 24 hours of invoice.",
      order_info_vat: "A valid intra-community VAT number is required to avoid a 20% VAT surcharge.",
      order_info_samples: "Samples and our current price list are available on request.",

      form_name_label: "Name",
      form_email_label: "Email",
      form_message_label: "Message",
      form_submit: "Send Message",
      form_success: "Thank you! Your message has been received.",

      eyebrow_truffles: "Our Range",
      eyebrow_pricing: "For Chefs & Distributors",
      eyebrow_whyus: "Our Promise",
      eyebrow_about: "Behind the Harvest",
      eyebrow_contact: "Wholesale Inquiries",
      trust1_label: "Years of Experience",
      trust2_label: "Hunters & Suppliers",
      trust3_label: "DHL Delivery",
      trust4_label: "Local Bulgarian Truffles",
      footer_nav_heading: "Navigate",
      footer_contact_heading: "Contact",

      footer_tagline: "Fine truffles, rooted in tradition.",
      footer_copyright: "© 2026 Truffe de Bulgarie. All rights reserved."
    },

    fr: {
      site_title: "Truffe de Bulgarie | Truffes Artisanales",
      nav_home: "Accueil",
      nav_truffles: "Truffes",
      nav_pricing: "Tarifs",
      nav_about: "À propos",
      nav_contact: "Contact",

      slide1_title: "De la forêt à votre table",
      slide1_subtitle: "Des truffes récoltées à la main, livrées avec soin et tradition.",
      slide1_cta: "Découvrir nos truffes",
      slide2_title: "Un trésor mis au jour",
      slide2_subtitle: "Chaque truffe est inspectée à la main avant d'arriver jusqu'à votre table.",
      slide2_cta: "Voir les variétés",
      slide3_title: "L'art de la chasse",
      slide3_subtitle: "Nos chiens dressés traquent chaque truffe au cœur de la forêt bulgare.",
      slide3_cta: "Notre histoire",

      intro_text: "Une équipe familiale basée à Veliko Tarnovo, en Bulgarie, réunissant plus de 30 chercheurs et fournisseurs de truffes expérimentés. Nous récoltons exclusivement des truffes bulgares locales directement en forêt — une fraîcheur de forêt à prix juste, la confiance des chefs, revendeurs et distributeurs gourmets à travers l'Europe.",

      truffles_heading: "Nos variétés de truffes",
      truffle1_name: "Truffe Noire d'Hiver",
      truffle1_desc: "Appréciée pour son arôme intense et sa saveur profonde et terreuse, la truffe noire d'hiver est récoltée entre décembre et mars. Un véritable délice pour la table hivernale.",
      truffle2_name: "Truffe Noire d'Été",
      truffle2_desc: "Plus douce et délicate que sa cousine hivernale, la truffe noire d'été offre un arôme subtil et noisetté, parfait pour les plats de saison chaude.",
      truffle3_name: "Truffe Blanche d'Alba",
      truffle3_desc: "Originaire des collines du Piémont, la truffe blanche d'Alba est considérée comme la plus précieuse de toutes, réputée pour son parfum envoûtant.",
      truffle4_name: "Truffe de Bourgogne",
      truffle4_desc: "Récoltée au début de l'automne, la truffe de Bourgogne dégage un arôme raffiné de noisette qui se marie à merveille avec des plats simples et de saison.",

      pricing_heading: "Tarifs de gros",
      pricing_col_truffle: "Truffe",
      pricing_col_price: "Prix au kg",
      pricing_col_grade: "Catégorie",
      pricing_col_size: "Taille",
      pricing_col_price_short: "Prix",
      price1_value: "0 € / kg",
      price2_value: "150 € / kg",
      pricing_burgundy_heading: "Tuber uncinatum (truffe de Bourgogne / d'automne)",
      pricing_burgundy_grade1: "Extra+",
      pricing_burgundy_size1: "15 g et plus",
      pricing_burgundy_price1: "650 € / kg",
      pricing_burgundy_grade2: "Catégorie I",
      pricing_burgundy_size2: "10-15 g",
      pricing_burgundy_price2: "350 € / kg",
      pricing_burgundy_grade3: "Catégorie II",
      pricing_burgundy_size3: "jusqu'à 10 g",
      pricing_burgundy_price3: "180 € / kg",
      pricing_alba_heading: "Tuber magnatum Pico (truffe blanche d'Italie)",
      pricing_alba_grade1: "Extra",
      pricing_alba_price1: "5 000 € / kg",
      pricing_alba_grade2: "Catégorie I",
      pricing_alba_price2: "4 000 € / kg",
      pricing_alba_grade3: "Catégorie II",
      pricing_alba_price3: "3 000 € / kg",
      pricing_alba_grade4: "Catégorie III",
      pricing_alba_price4: "2 000 € / kg",
      pricing_note: "Les prix sont indicatifs et peuvent varier selon la disponibilité saisonnière et la qualité. Contactez-nous pour un devis actuel.",
      pricing_cta: "Nous contacter pour commander",

      story1_heading: "De la terre à la table",
      story1_link: "Découvrir",
      story2_heading: "Récits de truffes",
      story2_link: "Découvrir",

      whyus_heading: "Pourquoi nous choisir",
      why1_title: "Sélectionnées à la main",
      why1_text: "Chaque truffe est inspectée et choisie à la main, garantissant que seules les meilleures arrivent jusqu'à votre table.",
      why2_title: "Sourcées durablement",
      why2_text: "Nous travaillons avec des cueilleurs locaux qui respectent la forêt et ses cycles naturels.",
      why3_title: "Générations d'expertise",
      why3_text: "Trois générations de savoir-faire guident notre récolte, notre classification et notre sélection.",

      why_checklist_heading: "En Bref",
      why_check1: "Plus de 10 ans d'expérience éprouvée dans le secteur",
      why_check2: "Truffes locales 100 % fraîches et sélectionnées à la main",
      why_check3: "Livraison rapide et fiable sous 24 heures via DHL",
      why_check4: "Tarifs de gros flexibles selon la quantité",
      why_check5: "La confiance des chefs, revendeurs et distributeurs gourmets à travers l'Europe",

      about_heading: "Notre histoire",
      about_text: "Depuis plus de 10 ans, notre équipe familiale se spécialise dans la sélection et l'exportation de truffes fraîches récoltées dans les forêts autour de Veliko Tarnovo. Aux côtés de plus de 30 chercheurs et fournisseurs expérimentés, nous récoltons exclusivement des truffes bulgares locales et les livrons à travers l'Europe — à des clients en Italie, en France, en Espagne, en Allemagne et au-delà. Nos chiens spécialement dressés accompagnent nos chercheurs, utilisant leur odorat exceptionnel pour repérer les truffes cachées sous la terre de la forêt.",

      contact_heading: "Contactez-nous",
      contact_name_label: "Contact",
      contact_company_label: "Société",
      contact_email_label: "E-mail",
      contact_phone_fr_label: "Téléphone (France)",
      contact_phone_bg_label: "Téléphone (Bulgarie)",
      contact_address_label: "Adresse",
      contact_vat_label: "TVA",

      order_info_heading: "Informations de commande",
      order_info_payment: "Le paiement est dû dans les 24 heures suivant la facture.",
      order_info_vat: "Un numéro de TVA intracommunautaire valide est requis pour éviter une majoration de TVA de 20 %.",
      order_info_samples: "Échantillons et tarif actuel disponibles sur demande.",

      form_name_label: "Nom",
      form_email_label: "E-mail",
      form_message_label: "Message",
      form_submit: "Envoyer le message",
      form_success: "Merci ! Votre message a bien été reçu.",

      eyebrow_truffles: "Notre Sélection",
      eyebrow_pricing: "Pour Chefs & Distributeurs",
      eyebrow_whyus: "Notre Engagement",
      eyebrow_about: "Les Coulisses de la Récolte",
      eyebrow_contact: "Demandes Professionnelles",
      trust1_label: "Ans d'Expérience",
      trust2_label: "Chercheurs & Fournisseurs",
      trust3_label: "Livraison DHL",
      trust4_label: "Truffes Bulgares Locales",
      footer_nav_heading: "Navigation",
      footer_contact_heading: "Contact",

      footer_tagline: "De fines truffes, enracinées dans la tradition.",
      footer_copyright: "© 2026 Truffe de Bulgarie. Tous droits réservés."
    },

    it: {
      site_title: "Truffe de Bulgarie | Tartufi Artigianali",
      nav_home: "Home",
      nav_truffles: "Tartufi",
      nav_pricing: "Prezzi",
      nav_about: "Chi siamo",
      nav_contact: "Contatti",

      slide1_title: "Dalla foresta alla vostra tavola",
      slide1_subtitle: "Tartufi raccolti a mano, consegnati con cura e tradizione.",
      slide1_cta: "Scopri i nostri tartufi",
      slide2_title: "Un tesoro riportato alla luce",
      slide2_subtitle: "Ogni tartufo viene ispezionato a mano prima di arrivare sulla vostra tavola.",
      slide2_cta: "Scopri le varietà",
      slide3_title: "L'arte della cerca",
      slide3_subtitle: "I nostri cani addestrati inseguono ogni tartufo nel cuore del bosco bulgaro.",
      slide3_cta: "La nostra storia",

      intro_text: "Un team familiare con sede a Veliko Tarnovo, in Bulgaria, che riunisce oltre 30 esperti cercatori e fornitori di tartufi. Raccogliamo esclusivamente tartufi bulgari locali direttamente dal bosco — freschezza di bosco a un prezzo giusto, la fiducia di chef, rivenditori e distributori gourmet in tutta Europa.",

      truffles_heading: "Le nostre varietà di tartufo",
      truffle1_name: "Tartufo Nero Invernale",
      truffle1_desc: "Apprezzato per il suo aroma intenso e il sapore profondo e terroso, il tartufo nero invernale viene raccolto tra dicembre e marzo. Una vera delizia per la tavola invernale.",
      truffle2_name: "Tartufo Nero Estivo",
      truffle2_desc: "Più delicato e leggero rispetto al suo omologo invernale, il tartufo nero estivo offre un aroma sottile e nocciolato, perfetto per i piatti estivi.",
      truffle3_name: "Tartufo Bianco d'Alba",
      truffle3_desc: "Originario delle colline del Piemonte, il tartufo bianco d'Alba è considerato il più prezioso di tutti, celebre per il suo profumo inebriante.",
      truffle4_name: "Tartufo di Borgogna",
      truffle4_desc: "Raccolto all'inizio dell'autunno, il tartufo di Borgogna sprigiona un aroma raffinato di nocciola, perfetto in abbinamento a piatti semplici e di stagione.",

      pricing_heading: "Listino prezzi all'ingrosso",
      pricing_col_truffle: "Tartufo",
      pricing_col_price: "Prezzo al kg",
      pricing_col_grade: "Categoria",
      pricing_col_size: "Dimensione",
      pricing_col_price_short: "Prezzo",
      price1_value: "€0 / kg",
      price2_value: "€150 / kg",
      pricing_burgundy_heading: "Tuber uncinatum (tartufo di Borgogna / autunnale)",
      pricing_burgundy_grade1: "Extra+",
      pricing_burgundy_size1: "15 g e oltre",
      pricing_burgundy_price1: "€650 / kg",
      pricing_burgundy_grade2: "Classe I",
      pricing_burgundy_size2: "10-15 g",
      pricing_burgundy_price2: "€350 / kg",
      pricing_burgundy_grade3: "Classe II",
      pricing_burgundy_size3: "fino a 10 g",
      pricing_burgundy_price3: "€180 / kg",
      pricing_alba_heading: "Tuber magnatum Pico (tartufo bianco italiano)",
      pricing_alba_grade1: "Extra",
      pricing_alba_price1: "€5.000 / kg",
      pricing_alba_grade2: "Classe I",
      pricing_alba_price2: "€4.000 / kg",
      pricing_alba_grade3: "Classe II",
      pricing_alba_price3: "€3.000 / kg",
      pricing_alba_grade4: "Classe III",
      pricing_alba_price4: "€2.000 / kg",
      pricing_note: "I prezzi sono indicativi e possono variare in base alla disponibilità stagionale e alla qualità. Contattaci per un preventivo aggiornato.",
      pricing_cta: "Contattaci per ordinare",

      story1_heading: "Dalla terra alla tavola",
      story1_link: "Scopri",
      story2_heading: "Storie di tartufo",
      story2_link: "Scopri",

      whyus_heading: "Perché sceglierci",
      why1_title: "Selezionati a mano",
      why1_text: "Ogni tartufo viene ispezionato e scelto a mano, garantendo che solo i migliori arrivino sulla vostra tavola.",
      why2_title: "Provenienza sostenibile",
      why2_text: "Collaboriamo con raccoglitori locali che rispettano il bosco e i suoi cicli naturali.",
      why3_title: "Generazioni di esperienza",
      why3_text: "Tre generazioni di conoscenza guidano la nostra raccolta, selezione e classificazione.",

      why_checklist_heading: "In Breve",
      why_check1: "Oltre 10 anni di comprovata esperienza nel settore",
      why_check2: "Tartufi locali 100% freschi e selezionati a mano",
      why_check3: "Consegna rapida e affidabile entro 24 ore con DHL",
      why_check4: "Prezzi all'ingrosso flessibili in base alla quantità",
      why_check5: "La fiducia di chef, rivenditori e distributori gourmet in tutta Europa",

      about_heading: "La nostra storia",
      about_text: "Da oltre 10 anni, il nostro team familiare è specializzato nella selezione e nell'esportazione di tartufi freschi provenienti dai boschi intorno a Veliko Tarnovo. Insieme a oltre 30 cercatori e fornitori esperti, raccogliamo esclusivamente tartufi bulgari locali e li consegniamo in tutta Europa — a clienti in Italia, Francia, Spagna, Germania e oltre. I nostri cani appositamente addestrati affiancano i nostri cercatori, utilizzando il loro fiuto eccezionale per individuare i tartufi nascosti sotto il terreno del bosco.",

      contact_heading: "Contattaci",
      contact_name_label: "Contatto",
      contact_company_label: "Azienda",
      contact_email_label: "Email",
      contact_phone_fr_label: "Telefono (Francia)",
      contact_phone_bg_label: "Telefono (Bulgaria)",
      contact_address_label: "Indirizzo",
      contact_vat_label: "P.IVA",

      order_info_heading: "Informazioni per l'ordine",
      order_info_payment: "Il pagamento è dovuto entro 24 ore dalla fattura.",
      order_info_vat: "È richiesta una partita IVA intracomunitaria valida per evitare una maggiorazione IVA del 20%.",
      order_info_samples: "Campioni e listino prezzi attuale disponibili su richiesta.",

      form_name_label: "Nome",
      form_email_label: "Email",
      form_message_label: "Messaggio",
      form_submit: "Invia messaggio",
      form_success: "Grazie! Il tuo messaggio è stato ricevuto.",

      eyebrow_truffles: "La Nostra Selezione",
      eyebrow_pricing: "Per Chef e Distributori",
      eyebrow_whyus: "Il Nostro Impegno",
      eyebrow_about: "Dietro la Raccolta",
      eyebrow_contact: "Richieste All'ingrosso",
      trust1_label: "Anni di Esperienza",
      trust2_label: "Cercatori e Fornitori",
      trust3_label: "Consegna DHL",
      trust4_label: "Tartufi Bulgari Locali",
      footer_nav_heading: "Naviga",
      footer_contact_heading: "Contatti",

      footer_tagline: "Tartufi pregiati, radicati nella tradizione.",
      footer_copyright: "© 2026 Truffe de Bulgarie. Tutti i diritti riservati."
    }
  };

  const LANG_STORAGE_KEY = 'truffleDeBulgarieLang';
  const DEFAULT_LANG = 'en';

  /* ============================================================
     2. LANGUAGE SWITCHING
     ============================================================ */
  function applyLanguage(lang) {
    const dict = translations[lang] || translations[DEFAULT_LANG];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    document.documentElement.lang = lang;
    document.title = dict.site_title || document.title;

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    localStorage.setItem(LANG_STORAGE_KEY, lang);
  }

  function initLanguageSwitcher() {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLanguage(btn.getAttribute('data-lang'));
      });
    });

    const savedLang = localStorage.getItem(LANG_STORAGE_KEY);
    const initialLang = translations[savedLang] ? savedLang : DEFAULT_LANG;
    applyLanguage(initialLang);
  }

  /* ============================================================
     3. MOBILE NAV / HAMBURGER
     ============================================================ */
  function initMobileNav() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('mainNav');
    if (!hamburger || !nav) return;

    hamburger.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ============================================================
     4. HERO SLIDER
     ============================================================ */
  function initHeroSlider() {
    const hero = document.getElementById('hero');
    const slider = document.getElementById('slider');
    const dotsContainer = document.getElementById('sliderDots');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    if (!hero || !slider || !dotsContainer) return;

    const slides = Array.from(slider.querySelectorAll('.slide'));
    const AUTO_ADVANCE_MS = 7000;
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let currentIndex = slides.findIndex(function (s) { return s.classList.contains('active'); });
    if (currentIndex < 0) currentIndex = 0;
    let autoTimer = null;

    // Build dot indicators
    slides.forEach(function (_, i) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'dot' + (i === currentIndex ? ' active' : '');
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      dot.setAttribute('aria-selected', i === currentIndex ? 'true' : 'false');
      dot.addEventListener('click', function () {
        goToSlide(i);
        restartAutoAdvance();
      });
      dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.querySelectorAll('.dot'));

    function goToSlide(index) {
      const nextIndex = (index + slides.length) % slides.length;
      slides[currentIndex].classList.remove('active');
      dots[currentIndex].classList.remove('active');
      dots[currentIndex].setAttribute('aria-selected', 'false');

      currentIndex = nextIndex;

      slides[currentIndex].classList.add('active');
      dots[currentIndex].classList.add('active');
      dots[currentIndex].setAttribute('aria-selected', 'true');
    }

    function nextSlide() { goToSlide(currentIndex + 1); }
    function prevSlide() { goToSlide(currentIndex - 1); }

    function startAutoAdvance() {
      if (prefersReducedMotion) return;
      autoTimer = window.setInterval(nextSlide, AUTO_ADVANCE_MS);
    }

    function stopAutoAdvance() {
      if (autoTimer) {
        window.clearInterval(autoTimer);
        autoTimer = null;
      }
    }

    function restartAutoAdvance() {
      stopAutoAdvance();
      startAutoAdvance();
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        prevSlide();
        restartAutoAdvance();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        nextSlide();
        restartAutoAdvance();
      });
    }

    // Pause on hover
    hero.addEventListener('mouseenter', stopAutoAdvance);
    hero.addEventListener('mouseleave', startAutoAdvance);

    // Pause on keyboard focus within the hero (accessibility)
    hero.addEventListener('focusin', stopAutoAdvance);
    hero.addEventListener('focusout', startAutoAdvance);

    // Keyboard arrow navigation when hero has focus
    hero.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { nextSlide(); restartAutoAdvance(); }
      if (e.key === 'ArrowLeft') { prevSlide(); restartAutoAdvance(); }
    });

    // Touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    const SWIPE_THRESHOLD = 40;

    slider.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoAdvance();
    }, { passive: true });

    slider.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].screenX;
      const delta = touchEndX - touchStartX;
      if (Math.abs(delta) > SWIPE_THRESHOLD) {
        if (delta < 0) nextSlide(); else prevSlide();
      }
      startAutoAdvance();
    }, { passive: true });

    startAutoAdvance();
  }

  /* ============================================================
     5. CONTACT FORM (no real submission — client-side only)
     ============================================================ */
  function initContactForm() {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    if (!form || !status) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const lang = document.documentElement.lang || DEFAULT_LANG;
      const dict = translations[lang] || translations[DEFAULT_LANG];
      status.textContent = dict.form_success;
      form.reset();
    });
  }

  /* ============================================================
     Init
     ============================================================ */
  document.addEventListener('DOMContentLoaded', function () {
    initLanguageSwitcher();
    initMobileNav();
    initHeroSlider();
    initContactForm();
  });
})();

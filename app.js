const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
const languageSelect = document.querySelector("[data-language-select]");

const translations = {
  en: {
    lang: "en-IN",
    dir: "ltr",
    brandSmall: "Mumbai roadside rescue",
    nav: ["Services", "Emergency", "Mumbai Areas", "FAQ"],
    navCall: "Call +91 86918 80050",
    language: "Language",
    heroEyebrow: "24/7 Emergency Car Help in Mumbai",
    heroTitle: "Fast Mechanic for battery jump start, towing and on-road car rescue.",
    heroLede: "Stuck at home, office, highway, parking basement or late-night road? Call Fast Mechanic for urgent car breakdown support across Mumbai, Thane and Navi Mumbai.",
    callNow: "Call Now",
    saveContact: "Save Contact",
    trust: ["Live phone support", "Mumbai wide coverage", "Transparent quotes"],
    hotline: "Fast Response Hotline",
    rescueServices: ["Battery Jump Start", "Key Lock Assistance", "Towing and Petrol Delivery"],
    addContact: "Add Fast Mechanic to contacts",
    metrics: ["Hour support", "Mumbai zones", "Emergency services", "Direct call number"],
    servicesEyebrow: "Core Services",
    servicesTitle: "Roadside assistance built for Mumbai traffic, rain and late-night breakdowns.",
    servicesText: "Fast Mechanic focuses on emergency fixes that get you moving or safely towed without wasting time searching for a garage.",
    serviceBadges: ["Jump Start", "Key Lock", "Towing", "Fuel Help", "Stepney", "Mechanic"],
    serviceTitles: ["Battery Jump Start", "Key Lock Assistance", "Towing Service", "Petrol Delivery", "Stepney Change", "Car Mechanic"],
    serviceTexts: [
      "Dead battery support for cars stuck at home, office, parking lots, malls or roadside locations.",
      "Help for accidental car lockout situations, stuck keys and urgent access issues.",
      "Arrange towing for cars that cannot be started, moved safely or repaired at the breakdown point.",
      "Emergency fuel delivery assistance when your vehicle runs out of petrol in Mumbai traffic.",
      "Quick spare wheel change support when a tyre fails and you need safe on-road help.",
      "Doorstep and roadside mechanic checks for minor faults, starting trouble and urgent diagnosis."
    ],
    serviceCtas: ["Call for jump start", "Call for key help", "Call for towing", "Call for petrol", "Call for stepney", "Call mechanic"],
    emergencyEyebrow: "More Emergency Help",
    emergencyTitle: "One number for the services people search during a breakdown.",
    emergencyText: "To strengthen service coverage and local search relevance, Fast Mechanic can also present these high-intent emergency services across Mumbai.",
    emergencyActions: ["Call Emergency Line", "View Contact Card"],
    emergencyTitles: ["Flat Tyre Help", "Car Not Starting", "Accident Towing", "Wrong Fuel Support", "Overheating Help", "Brake Issue Help", "Clutch and Gear Trouble", "Basement Recovery"],
    emergencyTexts: [
      "Puncture coordination and roadside tyre support.",
      "Battery, starter, fuse and basic diagnosis support.",
      "Safe tow coordination after breakdown or collision.",
      "Guidance and mechanic assistance for refuelling mistakes.",
      "Coolant leak, radiator and warning-light checks.",
      "Emergency inspection before the vehicle is moved.",
      "Roadside assessment for manual and automatic cars.",
      "Support for cars stuck in building or mall parking."
    ],
    processEyebrow: "How It Works",
    processTitle: "Fast, simple and made for stressful moments.",
    processTitles: ["Call Fast Mechanic", "Get Clear Guidance", "Assistance Arrives"],
    processTexts: [
      "Share your car model, issue and exact location or nearby landmark.",
      "We help identify whether you need jump start, mechanic, towing, fuel or tyre support.",
      "A suitable roadside solution is arranged so your car can move or be taken safely."
    ],
    coverageEyebrow: "Mumbai Coverage",
    coverageTitle: "Roadside mechanic and towing assistance across Mumbai.",
    coverageText: "Fast Mechanic targets high-demand car breakdown locations including residential towers, office zones, highways, railway station areas, mall parking, airport routes and South Mumbai business districts.",
    seoEyebrow: "Search Ready Contact",
    seoTitle: "Fast Mechanic service card details for search engines and customers.",
    seoText: "This website includes local business schema, service catalog schema, FAQ schema, canonical URLs, sitemap, robots file and a downloadable vCard. Google rich results are controlled by Google, but the site now gives crawlers the clearest possible business and service signals.",
    searchCard: ["Fast Mechanic", "24/7 Car Roadside Assistance in Mumbai"],
    faqEyebrow: "FAQ",
    faqTitle: "Answers for urgent car breakdown searches.",
    faqQuestions: [
      "Do you provide battery jump start in Mumbai?",
      "Can you help if my car keys are locked inside?",
      "Do you offer towing service?",
      "Can customers save your number directly?"
    ],
    faqAnswers: [
      "Yes. Call Fast Mechanic at +91 86918 80050 for dead battery and car jump start assistance across Mumbai.",
      "Fast Mechanic can assist with car lockout and key lock situations. Call with your car model and location for guidance.",
      "Yes. If your car cannot be moved safely, Fast Mechanic can help arrange towing support in Mumbai, Thane and Navi Mumbai.",
      "Yes. Use the Save Contact button to add Fast Mechanic, +91 86918 80050, directly to your device contacts."
    ],
    footerSmall: "Emergency car help Mumbai",
    footerText: "24/7 roadside assistance for battery jump start, key lockout, towing, petrol delivery, stepney change and car mechanic service in Mumbai.",
    footerHeads: ["Services", "Popular Searches", "Contact"],
    footerServices: ["Battery Jump Start", "Towing Service", "Petrol Delivery", "Stepney Change"],
    footerSearches: ["car mechanic near me Mumbai", "roadside assistance Mumbai", "battery jump start Mumbai", "towing service Mumbai"],
    footerBottom: "Copyright 2026 Fast Mechanic. All rights reserved.",
    emergencyCall: "Emergency Call"
  },
  mr: {
    lang: "mr-IN",
    dir: "ltr",
    brandSmall: "मुंबई रोडसाइड मदत",
    nav: ["सेवा", "आपत्कालीन", "मुंबई भाग", "प्रश्न"],
    navCall: "कॉल +91 86918 80050",
    language: "भाषा",
    heroEyebrow: "मुंबईत 24/7 आपत्कालीन कार मदत",
    heroTitle: "बॅटरी जंप स्टार्ट, टोइंग आणि ऑन-रोड कार रेस्क्यूसाठी Fast Mechanic.",
    heroLede: "घर, ऑफिस, हायवे, पार्किंग बेसमेंट किंवा रात्री रस्त्यावर अडकलात? मुंबई, ठाणे आणि नवी मुंबईत तातडीच्या कार ब्रेकडाउन मदतीसाठी Fast Mechanic ला कॉल करा.",
    callNow: "आता कॉल करा",
    saveContact: "संपर्क सेव्ह करा",
    trust: ["फोनवर थेट मदत", "संपूर्ण मुंबई कव्हरेज", "स्पष्ट कोट"],
    hotline: "फास्ट रिस्पॉन्स हेल्पलाइन",
    rescueServices: ["बॅटरी जंप स्टार्ट", "की लॉक मदत", "टोइंग आणि पेट्रोल डिलिव्हरी"],
    addContact: "Fast Mechanic संपर्कात जोडा",
    metrics: ["तास मदत", "मुंबई झोन", "आपत्कालीन सेवा", "थेट कॉल नंबर"],
    servicesEyebrow: "मुख्य सेवा",
    servicesTitle: "मुंबई ट्रॅफिक, पाऊस आणि रात्रीच्या ब्रेकडाउनसाठी रोडसाइड मदत.",
    servicesText: "गॅरेज शोधण्यात वेळ न घालवता कार चालू करणे किंवा सुरक्षित टो करणे यावर Fast Mechanic लक्ष देते.",
    serviceBadges: ["जंप स्टार्ट", "की लॉक", "टोइंग", "फ्युएल मदत", "स्टेपनी", "मेकॅनिक"],
    serviceTitles: ["बॅटरी जंप स्टार्ट", "की लॉक मदत", "टोइंग सेवा", "पेट्रोल डिलिव्हरी", "स्टेपनी बदल", "कार मेकॅनिक"],
    serviceTexts: [
      "घर, ऑफिस, पार्किंग, मॉल किंवा रस्त्यावर अडकलेल्या कारसाठी मृत बॅटरी मदत.",
      "कार लॉकआउट, अडकलेली किल्ली आणि तातडीच्या अॅक्सेस समस्यांसाठी मदत.",
      "कार सुरू होत नसल्यास किंवा सुरक्षित हलवता येत नसल्यास टोइंगची मदत.",
      "मुंबई ट्रॅफिकमध्ये पेट्रोल संपल्यास आपत्कालीन इंधन मदत.",
      "टायर खराब झाल्यास स्टेपनी बदलण्यासाठी जलद ऑन-रोड मदत.",
      "लहान दोष, स्टार्टिंग समस्या आणि तातडीच्या तपासणीसाठी डोअरस्टेप व रोडसाइड मेकॅनिक."
    ],
    serviceCtas: ["जंप स्टार्टसाठी कॉल", "की मदतीसाठी कॉल", "टोइंगसाठी कॉल", "पेट्रोलसाठी कॉल", "स्टेपनीसाठी कॉल", "मेकॅनिकला कॉल"],
    emergencyEyebrow: "अधिक आपत्कालीन मदत",
    emergencyTitle: "ब्रेकडाउनवेळी लोक शोधतात त्या सेवांसाठी एकच नंबर.",
    emergencyText: "मुंबईभर उच्च-गरजेच्या आपत्कालीन सेवांसाठी Fast Mechanic मदत देऊ शकते.",
    emergencyActions: ["आपत्कालीन लाइनला कॉल", "कॉन्टॅक्ट कार्ड पहा"],
    emergencyTitles: ["फ्लॅट टायर मदत", "कार सुरू होत नाही", "अपघात टोइंग", "चुकीचे इंधन मदत", "ओव्हरहीटिंग मदत", "ब्रेक समस्या मदत", "क्लच आणि गियर समस्या", "बेसमेंट रिकव्हरी"],
    emergencyTexts: ["पंक्चर आणि रोडसाइड टायर मदत.", "बॅटरी, स्टार्टर, फ्यूज आणि मूलभूत तपासणी.", "ब्रेकडाउन किंवा अपघातानंतर सुरक्षित टो मदत.", "चुकीचे इंधन भरल्यास मार्गदर्शन व मेकॅनिक मदत.", "कूलंट लीक, रेडिएटर आणि वॉर्निंग लाईट तपासणी.", "वाहन हलवण्यापूर्वी आपत्कालीन तपासणी.", "मॅन्युअल आणि ऑटोमॅटिक कारसाठी रोडसाइड तपासणी.", "बिल्डिंग किंवा मॉल पार्किंगमध्ये अडकलेल्या कारसाठी मदत."],
    processEyebrow: "कसे काम करते",
    processTitle: "जलद, सोपे आणि तणावाच्या क्षणांसाठी तयार.",
    processTitles: ["Fast Mechanic ला कॉल", "स्पष्ट मार्गदर्शन", "मदत पोहोचते"],
    processTexts: ["कार मॉडेल, समस्या आणि अचूक लोकेशन सांगा.", "जंप स्टार्ट, मेकॅनिक, टोइंग, फ्युएल किंवा टायर मदत काय हवी ते ओळखतो.", "योग्य रोडसाइड उपायाची व्यवस्था केली जाते."],
    coverageEyebrow: "मुंबई कव्हरेज",
    coverageTitle: "मुंबईभर रोडसाइड मेकॅनिक आणि टोइंग मदत.",
    coverageText: "रहिवासी टॉवर्स, ऑफिस झोन, हायवे, स्टेशन परिसर, मॉल पार्किंग, एअरपोर्ट रूट्स आणि दक्षिण मुंबई बिझनेस भागांसाठी Fast Mechanic सेवा देते.",
    seoEyebrow: "सर्च रेडी कॉन्टॅक्ट",
    seoTitle: "सर्च इंजिन आणि ग्राहकांसाठी Fast Mechanic सेवा कार्ड तपशील.",
    seoText: "या वेबसाइटमध्ये लोकल बिझनेस स्कीमा, सेवा कॅटलॉग, FAQ, साईटमॅप, robots फाइल आणि डाउनलोड होणारे vCard आहे.",
    searchCard: ["Fast Mechanic", "मुंबईत 24/7 कार रोडसाइड मदत"],
    faqEyebrow: "FAQ",
    faqTitle: "तातडीच्या कार ब्रेकडाउन प्रश्नांची उत्तरे.",
    faqQuestions: ["मुंबईत बॅटरी जंप स्टार्ट देता का?", "कारची किल्ली आत लॉक झाली तर मदत करता का?", "टोइंग सेवा आहे का?", "ग्राहक तुमचा नंबर सेव्ह करू शकतात का?"],
    faqAnswers: ["हो. बॅटरी जंप स्टार्टसाठी +91 86918 80050 वर कॉल करा.", "हो. कार मॉडेल आणि लोकेशन सांगून की लॉक मदतीसाठी कॉल करा.", "हो. कार सुरक्षित हलू शकत नसेल तर टोइंग मदत मिळू शकते.", "हो. Save Contact बटन वापरून नंबर फोनमध्ये सेव्ह करता येतो."],
    footerSmall: "मुंबई आपत्कालीन कार मदत",
    footerText: "बॅटरी जंप स्टार्ट, की लॉकआउट, टोइंग, पेट्रोल डिलिव्हरी, स्टेपनी बदल आणि कार मेकॅनिकसाठी 24/7 रोडसाइड मदत.",
    footerHeads: ["सेवा", "लोकप्रिय शोध", "संपर्क"],
    footerServices: ["बॅटरी जंप स्टार्ट", "टोइंग सेवा", "पेट्रोल डिलिव्हरी", "स्टेपनी बदल"],
    footerSearches: ["मुंबईत कार मेकॅनिक जवळ", "रोडसाइड असिस्टन्स मुंबई", "बॅटरी जंप स्टार्ट मुंबई", "टोइंग सेवा मुंबई"],
    footerBottom: "Copyright 2026 Fast Mechanic. सर्व हक्क राखीव.",
    emergencyCall: "आपत्कालीन कॉल"
  }
};

translations.hi = {
  ...translations.en,
  lang: "hi-IN",
  brandSmall: "मुंबई रोडसाइड सहायता",
  nav: ["सेवाएं", "इमरजेंसी", "मुंबई क्षेत्र", "FAQ"],
  language: "भाषा",
  heroEyebrow: "मुंबई में 24/7 इमरजेंसी कार सहायता",
  heroTitle: "बैटरी जंप स्टार्ट, टोइंग और ऑन-रोड कार रेस्क्यू के लिए Fast Mechanic.",
  heroLede: "घर, ऑफिस, हाईवे, पार्किंग बेसमेंट या देर रात सड़क पर फंसे हैं? मुंबई, ठाणे और नवी मुंबई में तुरंत कार ब्रेकडाउन सहायता के लिए कॉल करें.",
  callNow: "अभी कॉल करें",
  saveContact: "संपर्क सेव करें",
  servicesEyebrow: "मुख्य सेवाएं",
  serviceTitles: ["बैटरी जंप स्टार्ट", "की लॉक सहायता", "टोइंग सेवा", "पेट्रोल डिलीवरी", "स्टेपनी बदलना", "कार मैकेनिक"],
  serviceCtas: ["जंप स्टार्ट के लिए कॉल", "की मदद के लिए कॉल", "टोइंग के लिए कॉल", "पेट्रोल के लिए कॉल", "स्टेपनी के लिए कॉल", "मैकेनिक कॉल करें"],
  coverageTitle: "पूरे मुंबई में रोडसाइड मैकेनिक और टोइंग सहायता.",
  footerHeads: ["सेवाएं", "लोकप्रिय खोज", "संपर्क"],
  emergencyCall: "इमरजेंसी कॉल"
};

translations.ur = {
  ...translations.en,
  lang: "ur-IN",
  dir: "rtl",
  brandSmall: "ممبئی روڈ سائیڈ مدد",
  nav: ["سروسز", "ایمرجنسی", "ممبئی علاقے", "FAQ"],
  navCall: "کال +91 86918 80050",
  language: "زبان",
  heroEyebrow: "ممبئی میں 24/7 ایمرجنسی کار مدد",
  heroTitle: "بیٹری جمپ اسٹارٹ، ٹوئنگ اور آن روڈ کار ریسکیو کے لیے Fast Mechanic.",
  heroLede: "گھر، دفتر، ہائی وے، پارکنگ بیسمنٹ یا رات میں سڑک پر پھنس گئے؟ ممبئی، تھانے اور نوی ممبئی میں فوری مدد کے لیے کال کریں.",
  callNow: "ابھی کال کریں",
  saveContact: "رابطہ محفوظ کریں",
  trust: ["فون سپورٹ", "ممبئی بھر کوریج", "صاف قیمت"],
  hotline: "فاسٹ رسپانس ہاٹ لائن",
  addContact: "Fast Mechanic کو contacts میں شامل کریں",
  serviceTitles: ["بیٹری جمپ اسٹارٹ", "کی لاک مدد", "ٹوئنگ سروس", "پیٹرول ڈیلیوری", "اسٹیپنی تبدیل", "کار مکینک"],
  serviceCtas: ["جمپ اسٹارٹ کے لیے کال", "کی مدد کے لیے کال", "ٹوئنگ کے لیے کال", "پیٹرول کے لیے کال", "اسٹیپنی کے لیے کال", "مکینک کو کال"],
  coverageEyebrow: "ممبئی کوریج",
  coverageTitle: "ممبئی بھر میں روڈ سائیڈ مکینک اور ٹوئنگ مدد.",
  searchCard: ["Fast Mechanic", "ممبئی میں 24/7 کار روڈ سائیڈ مدد"],
  footerSmall: "ممبئی ایمرجنسی کار مدد",
  emergencyCall: "ایمرجنسی کال"
};

translations.gu = {
  ...translations.en,
  lang: "gu-IN",
  brandSmall: "મુંબઈ રોડસાઈડ મદદ",
  nav: ["સેવાઓ", "ઇમરજન્સી", "મુંબઈ વિસ્તાર", "FAQ"],
  language: "ભાષા",
  heroEyebrow: "મુંબઈમાં 24/7 ઇમરજન્સી કાર મદદ",
  heroTitle: "બેટરી જમ્પ સ્ટાર્ટ, ટોઇંગ અને ઓન-રોડ કાર રેસ્ક્યૂ માટે Fast Mechanic.",
  heroLede: "ઘર, ઓફિસ, હાઇવે, પાર્કિંગ બેઝમેન્ટ અથવા રાત્રે રસ્તા પર ફસાયા છો? મુંબઈ, થાણે અને નવી મુંબઈમાં તાત્કાલિક મદદ માટે કોલ કરો.",
  callNow: "હમણાં કોલ કરો",
  saveContact: "સંપર્ક સેવ કરો",
  serviceTitles: ["બેટરી જમ્પ સ્ટાર્ટ", "કી લોક મદદ", "ટોઇંગ સેવા", "પેટ્રોલ ડિલિવરી", "સ્ટેપની બદલાવ", "કાર મેકેનિક"],
  serviceCtas: ["જમ્પ સ્ટાર્ટ માટે કોલ", "કી મદદ માટે કોલ", "ટોઇંગ માટે કોલ", "પેટ્રોલ માટે કોલ", "સ્ટેપની માટે કોલ", "મેકેનિકને કોલ"],
  coverageTitle: "મુંબઈભરમાં રોડસાઈડ મેકેનિક અને ટોઇંગ મદદ.",
  footerHeads: ["સેવાઓ", "લોકપ્રિય શોધ", "સંપર્ક"],
  emergencyCall: "ઇમરજન્સી કોલ"
};

translations.ta = {
  ...translations.en,
  lang: "ta-IN",
  brandSmall: "மும்பை சாலை உதவி",
  nav: ["சேவைகள்", "அவசரம்", "மும்பை பகுதிகள்", "FAQ"],
  language: "மொழி",
  heroEyebrow: "மும்பையில் 24/7 அவசர கார் உதவி",
  heroTitle: "பேட்டரி ஜம்ப் ஸ்டார்ட், டோயிங் மற்றும் ஆன்-ரோடு கார் ரெஸ்க்யூக்கு Fast Mechanic.",
  heroLede: "வீடு, அலுவலகம், ஹைவே, பார்க்கிங் பேஸ்மென்ட் அல்லது இரவு சாலையில் சிக்கியுள்ளீர்களா? மும்பை, தானே மற்றும் நவி மும்பையில் உடனடி உதவிக்கு அழைக்கவும்.",
  callNow: "இப்போது அழைக்கவும்",
  saveContact: "தொடர்பை சேமிக்கவும்",
  serviceTitles: ["பேட்டரி ஜம்ப் ஸ்டார்ட்", "கீ லாக் உதவி", "டோயிங் சேவை", "பெட்ரோல் டெலிவரி", "ஸ்டெப்னி மாற்றம்", "கார் மெக்கானிக்"],
  serviceCtas: ["ஜம்ப் ஸ்டார்டுக்கு அழைக்கவும்", "கீ உதவிக்கு அழைக்கவும்", "டோயிங்குக்கு அழைக்கவும்", "பெட்ரோலுக்கு அழைக்கவும்", "ஸ்டெப்னிக்கு அழைக்கவும்", "மெக்கானிக்கைக் அழைக்கவும்"],
  coverageTitle: "மும்பை முழுவதும் சாலை மெக்கானிக் மற்றும் டோயிங் உதவி.",
  footerHeads: ["சேவைகள்", "பிரபல தேடல்கள்", "தொடர்பு"],
  emergencyCall: "அவசர அழைப்பு"
};

const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element && value) element.textContent = value;
};

const setTextList = (selector, values) => {
  if (!values) return;
  document.querySelectorAll(selector).forEach((element, index) => {
    if (values[index]) element.textContent = values[index];
  });
};

const applyLanguage = (lang) => {
  const text = translations[lang] || translations.en;
  document.documentElement.lang = text.lang;
  document.documentElement.dir = text.dir || "ltr";
  document.body.classList.toggle("is-rtl", text.dir === "rtl");

  setText(".brand small", text.brandSmall);
  setText(".footer-brand small", text.footerSmall);
  setTextList(".nav-links > a:not(.nav-call)", text.nav);
  setText(".nav-call", text.navCall);
  setText(".language-control span", text.language);
  setText(".hero-copy .eyebrow", text.heroEyebrow);
  setText(".hero-copy h1", text.heroTitle);
  setText(".hero-lede", text.heroLede);
  setText(".hero-actions .btn-primary", text.callNow);
  setText(".hero-actions .btn-secondary", text.saveContact);
  setTextList(".trust-row span", text.trust);
  setText(".rescue-card p", text.hotline);
  setTextList(".rescue-card li", text.rescueServices);
  setText(".mini-link", text.addContact);
  setTextList(".metrics span", text.metrics);
  setText("#services .section-head .eyebrow", text.servicesEyebrow);
  setText("#services .section-head h2", text.servicesTitle);
  setText("#services .section-head p:not(.eyebrow)", text.servicesText);
  setTextList(".service-media span", text.serviceBadges);
  setTextList(".service-card h3", text.serviceTitles);
  setTextList(".service-card p", text.serviceTexts);
  setTextList(".service-cta", text.serviceCtas);
  setText(".emergency-copy .eyebrow", text.emergencyEyebrow);
  setText(".emergency-copy h2", text.emergencyTitle);
  setText(".emergency-copy p:not(.eyebrow)", text.emergencyText);
  setTextList(".emergency-actions a", text.emergencyActions);
  setTextList(".emergency-list strong", text.emergencyTitles);
  setTextList(".emergency-list span", text.emergencyTexts);
  setText(".process-section .section-head .eyebrow", text.processEyebrow);
  setText(".process-section .section-head h2", text.processTitle);
  setTextList(".process-step h3", text.processTitles);
  setTextList(".process-step p", text.processTexts);
  setText(".coverage-copy .eyebrow", text.coverageEyebrow);
  setText(".coverage-copy h2", text.coverageTitle);
  setText(".coverage-copy p:not(.eyebrow)", text.coverageText);
  setText(".seo-panel .eyebrow", text.seoEyebrow);
  setText(".seo-panel h2", text.seoTitle);
  setText(".seo-panel p:not(.eyebrow)", text.seoText);
  setTextList(".search-card strong, .search-card span", text.searchCard);
  setText(".search-card a:last-child", text.saveContact);
  setText(".faq-section .section-head .eyebrow", text.faqEyebrow);
  setText(".faq-section .section-head h2", text.faqTitle);
  setTextList("details summary", text.faqQuestions);
  setTextList("details p", text.faqAnswers);
  setText(".site-footer p", text.footerText);
  setTextList(".footer-grid h2", text.footerHeads);
  setTextList(".footer-grid > div:nth-child(2) a", text.footerServices);
  setTextList(".footer-grid > div:nth-child(3) a", text.footerSearches);
  setText(".footer-grid > div:nth-child(4) a:nth-of-type(2)", text.saveContact);
  setText(".footer-bottom span", text.footerBottom);
  setText(".footer-bottom a", text.emergencyCall);
  setText(".sticky-call a:first-child", text.navCall);
  setText(".sticky-call a:last-child", text.saveContact);
};

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 20);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navLinks.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }
});

const savedLanguage = "en";
if (languageSelect) {
  languageSelect.value = translations[savedLanguage] ? savedLanguage : "en";
  applyLanguage(languageSelect.value);
  languageSelect.addEventListener("change", () => applyLanguage(languageSelect.value));
} else {
  applyLanguage(savedLanguage);
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      const target = Number(element.getAttribute("data-count") || 0);
      const duration = 900;
      const startedAt = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = String(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
      countObserver.unobserve(element);
    });
  },
  { threshold: 0.4 }
);

document.querySelectorAll("[data-count]").forEach((element) => {
  countObserver.observe(element);
});

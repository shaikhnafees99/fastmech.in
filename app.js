const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
const languageSelect = document.querySelector("[data-language-select]");
const PHONE_DISPLAY = "+91 70218 10153";
const PHONE_TEL = "+917021810153";
const WHATSAPP_URL = `https://wa.me/${PHONE_TEL.replace("+", "")}?text=Hi%20Fast%20Mechanic%2C%20I%20need%20roadside%20assistance%20in%20Mumbai.`;

const translations = {
  en: {
    lang: "en-IN",
    dir: "ltr",
    brandSmall: "Mumbai roadside rescue",
    nav: ["Services", "Emergency", "Mumbai Areas", "FAQ"],
    navCall: "Call +91 70218 10153",
    whatsapp: "Chat WhatsApp",
    language: "Language",
    heroEyebrow: "24/7 Emergency Car Help in Mumbai",
    heroTitle: "Fast Mechanic for new battery sale, jump start, key lock, towing, petrol delivery, stepney change and car mechanic help.",
    heroLede: "Stuck at home, office, highway, parking basement or late-night road? Call Fast Mechanic for urgent car breakdown support across Mumbai, Andheri, Thane and Vashi.",
    callNow: "Call Now",
    saveContact: "Save Contact",
    trust: ["Live phone support", "Mumbai wide coverage", "Transparent quotes"],
    hotline: "Fast Response Hotline",
    rescueServices: ["Battery Jump Start", "Key Lock Assistance", "Towing and Petrol Delivery"],
    addContact: "Add Fast Mechanic to contacts",
    metrics: ["Hour support", "Area pages", "Emergency services", "Direct call number"],
    servicesEyebrow: "Core Services",
    servicesTitle: "Roadside assistance built for Mumbai traffic, rain and late-night breakdowns.",
    servicesText: "Fast Mechanic focuses on emergency fixes that get you moving or safely towed without wasting time searching for a garage.",
    serviceBadges: ["New Battery", "Jump Start", "Key Lock", "Towing", "Fuel Help", "Stepney", "Mechanic"],
    serviceTitles: ["New Battery Sale", "Battery Jump Start", "Key Lock Assistance", "Towing Service", "Petrol Delivery", "Stepney Change", "Car Mechanic"],
    serviceTexts: [
      "New car battery sale support with battery selection guidance, doorstep coordination and replacement help.",
      "Dead battery support for cars stuck at home, office, parking lots, malls or roadside locations.",
      "Help for accidental car lockout situations, stuck keys and urgent access issues.",
      "Arrange towing for cars that cannot be started, moved safely or repaired at the breakdown point.",
      "Emergency fuel delivery assistance when your vehicle runs out of petrol in Mumbai traffic.",
      "Quick spare wheel change support when a tyre fails and you need safe on-road help.",
      "Doorstep and roadside mechanic checks for minor faults, starting trouble and urgent diagnosis."
    ],
    serviceCtas: ["Call for new battery", "Call for jump start", "Call for key help", "Call for towing", "Call for petrol", "Call for stepney", "Call mechanic"],
    emergencyEyebrow: "More Emergency Help",
    emergencyTitle: "One number for urgent roadside help across Mumbai.",
    emergencyText: "Fast Mechanic helps with stressful car problems in parking basements, office zones, highways, station roads, airport routes and busy city traffic.",
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
    coverageText: "Fast Mechanic supports common car breakdown locations including residential towers, office zones, highways, railway station areas, mall parking, airport routes and South Mumbai business districts inside the active South Mumbai, Andheri, Thane and Vashi radius.",
    coverageNote: "Primary PIN codes are shown for service planning. Some Mumbai localities use multiple postal codes.",
    localSeoEyebrow: "Mumbai Local Searches",
    localSeoTitle: "Emergency car services by location in Mumbai.",
    localSeoText: "Fast Mechanic supports roadside assistance calls across South Mumbai, central Mumbai, Bandra, Andheri, Thane and Vashi.",
    localSeoCta: "Call now",
    localSeoCtas: [
      "Call for South Mumbai jump start",
      "Call for Andheri towing",
      "Call for Bandra petrol help",
      "Call mechanic in Thane",
      "Call Vashi assistance",
      "Call key lock help",
      "Call for Powai stepney",
      "Call Chembur tyre help",
      "Call Dadar jump start",
      "Call Ghatkopar car help",
      "Call Kurla mechanic",
      "Call Worli assistance",
      "Call Mulund breakdown help",
      "Call airport fuel help"
    ],
    seoEyebrow: "Contact Ready",
    seoTitle: "Fast Mechanic contact details for quick service calls.",
    seoText: "Use the contact card to call Fast Mechanic, save the number on your device or share the details when arranging roadside assistance for a vehicle in Mumbai.",
    searchCard: ["Fast Mechanic", "24/7 Car Roadside Assistance in Mumbai"],
    locationEyebrow: "Fast Mechanic Location",
    locationTitle: "Fast Mechanic roadside assistance anywhere in Mumbai.",
    locationText: "Use the map for the Fast Mechanic service point around New Tank Bandar Road, Darukhana, E Ward, Mumbai, Maharashtra 400010. For emergency roadside assistance anywhere in Mumbai, call before visiting so support can be coordinated at your vehicle location.",
    locationAddressLabel: "Address",
    locationActions: ["Open Google Maps", "Open Street Map"],
    faqEyebrow: "FAQ",
    faqTitle: "Answers for urgent car breakdown questions.",
    faqQuestions: [
      "Do you provide battery jump start in Mumbai?",
      "Can you help if my car keys are locked inside?",
      "Do you offer towing service?",
      "Can customers save your number directly?"
    ],
    faqAnswers: [
      "Yes. Call Fast Mechanic at +91 70218 10153 for dead battery and car jump start assistance across Mumbai.",
      "Fast Mechanic can assist with car lockout and key lock situations. Call with your car model and location for guidance.",
      "Yes. If your car cannot be moved safely, Fast Mechanic can help arrange towing support in Mumbai, Andheri, Thane and Vashi.",
      "Yes. Use the Save Contact button to add Fast Mechanic, +91 70218 10153, directly to your device contacts."
    ],
    footerSmall: "Emergency car help Mumbai",
    footerText: "24/7 roadside assistance for new battery sale, battery jump start, key lockout, towing, petrol delivery, stepney change and car mechanic service in Mumbai.",
    footerHeads: ["Services", "Popular Searches", "Contact"],
    footerServices: ["New Battery Sale", "Battery Jump Start", "Towing Service", "Petrol Delivery"],
    footerSearches: ["car mechanic near me Mumbai", "roadside assistance Mumbai", "battery jump start Mumbai", "towing service Mumbai"],
    footerBottom: "Copyright 2026 Fast Mechanic. All rights reserved.",
    emergencyCall: "Emergency Call"
  },
  mr: {
    lang: "mr-IN",
    dir: "ltr",
    brandSmall: "मुंबई रोडसाइड मदत",
    nav: ["सेवा", "आपत्कालीन", "मुंबई भाग", "प्रश्न"],
  navCall: "कॉल +91 70218 10153",
  whatsapp: "WhatsApp चैट",
    language: "भाषा",
    heroEyebrow: "मुंबईत 24/7 आपत्कालीन कार मदत",
    heroTitle: "नवीन बॅटरी विक्री, जंप स्टार्ट, की लॉक, टोइंग, पेट्रोल डिलिव्हरी, स्टेपनी बदल आणि कार मेकॅनिक मदतीसाठी Fast Mechanic.",
    heroLede: "घर, ऑफिस, हायवे, पार्किंग बेसमेंट किंवा रात्री रस्त्यावर अडकलात? मुंबई, अंधेरी आणि ठाण्यात तातडीच्या कार ब्रेकडाउन मदतीसाठी Fast Mechanic ला कॉल करा.",
    callNow: "आता कॉल करा",
    saveContact: "संपर्क सेव्ह करा",
    trust: ["फोनवर थेट मदत", "संपूर्ण मुंबई कव्हरेज", "स्पष्ट कोट"],
    hotline: "फास्ट रिस्पॉन्स हेल्पलाइन",
    rescueServices: ["बॅटरी जंप स्टार्ट", "की लॉक मदत", "टोइंग आणि पेट्रोल डिलिव्हरी"],
    addContact: "Fast Mechanic संपर्कात जोडा",
    metrics: ["तास मदत", "एरिया पेजेस", "आपत्कालीन सेवा", "थेट कॉल नंबर"],
    servicesEyebrow: "मुख्य सेवा",
    servicesTitle: "मुंबई ट्रॅफिक, पाऊस आणि रात्रीच्या ब्रेकडाउनसाठी रोडसाइड मदत.",
    servicesText: "गॅरेज शोधण्यात वेळ न घालवता कार चालू करणे किंवा सुरक्षित टो करणे यावर Fast Mechanic लक्ष देते.",
    serviceBadges: ["नवी बॅटरी", "जंप स्टार्ट", "की लॉक", "टोइंग", "फ्युएल मदत", "स्टेपनी", "मेकॅनिक"],
    serviceTitles: ["नवीन बॅटरी विक्री", "बॅटरी जंप स्टार्ट", "की लॉक मदत", "टोइंग सेवा", "पेट्रोल डिलिव्हरी", "स्टेपनी बदल", "कार मेकॅनिक"],
    serviceTexts: [
      "कारसाठी नवीन बॅटरी निवड, doorstep coordination आणि replacement help.",
      "घर, ऑफिस, पार्किंग, मॉल किंवा रस्त्यावर अडकलेल्या कारसाठी मृत बॅटरी मदत.",
      "कार लॉकआउट, अडकलेली किल्ली आणि तातडीच्या अॅक्सेस समस्यांसाठी मदत.",
      "कार सुरू होत नसल्यास किंवा सुरक्षित हलवता येत नसल्यास टोइंगची मदत.",
      "मुंबई ट्रॅफिकमध्ये पेट्रोल संपल्यास आपत्कालीन इंधन मदत.",
      "टायर खराब झाल्यास स्टेपनी बदलण्यासाठी जलद ऑन-रोड मदत.",
      "लहान दोष, स्टार्टिंग समस्या आणि तातडीच्या तपासणीसाठी डोअरस्टेप व रोडसाइड मेकॅनिक."
    ],
    serviceCtas: ["नवीन बॅटरीसाठी कॉल", "जंप स्टार्टसाठी कॉल", "की मदतीसाठी कॉल", "टोइंगसाठी कॉल", "पेट्रोलसाठी कॉल", "स्टेपनीसाठी कॉल", "मेकॅनिकला कॉल"],
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
    coverageText: "दक्षिण मुंबई, अंधेरी, ठाणे आणि वाशी या active radius मध्ये residential towers, office zones, highways, station areas, mall parking, airport routes आणि South Mumbai business districts साठी Fast Mechanic सेवा देते.",
    coverageNote: "सेवा नियोजनासाठी मुख्य PIN codes दाखवले आहेत. काही मुंबई भागांमध्ये अनेक postal codes वापरले जातात.",
    localSeoEyebrow: "मुंबई स्थानिक शोध",
    localSeoTitle: "मुंबईत लोकेशननुसार आपत्कालीन कार सेवा.",
    localSeoText: "Fast Mechanic South Mumbai, central Mumbai, Bandra, Andheri, Thane आणि Vashi मध्ये roadside assistance calls साठी मदत करते.",
    localSeoCta: "आता कॉल करा",
    seoEyebrow: "सर्च रेडी कॉन्टॅक्ट",
    seoTitle: "सर्च इंजिन आणि ग्राहकांसाठी Fast Mechanic सेवा कार्ड तपशील.",
    seoText: "कॉल करण्यासाठी, नंबर सेव्ह करण्यासाठी किंवा मुंबईत roadside assistance details शेअर करण्यासाठी contact card वापरा.",
    searchCard: ["Fast Mechanic", "मुंबईत 24/7 कार रोडसाइड मदत"],
    locationEyebrow: "Fast Mechanic लोकेशन",
    locationTitle: "मुंबईत कुठेही Fast Mechanic roadside assistance.",
    locationText: "New Tank Bandar Road, Darukhana, E Ward, Mumbai, Maharashtra 400010 जवळील Fast Mechanic service point साठी map वापरा. Emergency roadside assistance साठी येण्यापूर्वी call करा, जेणेकरून तुमच्या vehicle location वर support coordinate करता येईल.",
    locationAddressLabel: "पत्ता",
    locationActions: ["Google Maps उघडा", "Street Map उघडा"],
    faqEyebrow: "FAQ",
    faqTitle: "तातडीच्या कार ब्रेकडाउन प्रश्नांची उत्तरे.",
    faqQuestions: ["मुंबईत बॅटरी जंप स्टार्ट देता का?", "कारची किल्ली आत लॉक झाली तर मदत करता का?", "टोइंग सेवा आहे का?", "ग्राहक तुमचा नंबर सेव्ह करू शकतात का?"],
    faqAnswers: ["हो. बॅटरी जंप स्टार्टसाठी +91 70218 10153 वर कॉल करा.", "हो. कार मॉडेल आणि लोकेशन सांगून की लॉक मदतीसाठी कॉल करा.", "हो. कार सुरक्षित हलू शकत नसेल तर टोइंग मदत मिळू शकते.", "हो. Save Contact बटन वापरून नंबर फोनमध्ये सेव्ह करता येतो."],
    footerSmall: "मुंबई आपत्कालीन कार मदत",
    footerText: "नवीन बॅटरी विक्री, बॅटरी जंप स्टार्ट, की लॉकआउट, टोइंग, पेट्रोल डिलिव्हरी, स्टेपनी बदल आणि कार मेकॅनिकसाठी 24/7 रोडसाइड मदत.",
    footerHeads: ["सेवा", "लोकप्रिय शोध", "संपर्क"],
    footerServices: ["नवीन बॅटरी विक्री", "बॅटरी जंप स्टार्ट", "टोइंग सेवा", "पेट्रोल डिलिव्हरी"],
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
  whatsapp: "WhatsApp चॅट",
  heroEyebrow: "मुंबई में 24/7 इमरजेंसी कार सहायता",
  heroTitle: "नई बैटरी बिक्री, जंप स्टार्ट, की लॉक, टोइंग, पेट्रोल डिलीवरी, स्टेपनी बदलने और कार मैकेनिक मदद के लिए Fast Mechanic.",
  heroLede: "घर, ऑफिस, हाईवे, पार्किंग बेसमेंट या देर रात सड़क पर फंसे हैं? मुंबई, अंधेरी, ठाणे और वाशी में तुरंत कार ब्रेकडाउन सहायता के लिए कॉल करें.",
  callNow: "अभी कॉल करें",
  saveContact: "संपर्क सेव करें",
  servicesEyebrow: "मुख्य सेवाएं",
  serviceTitles: ["नई बैटरी बिक्री", "बैटरी जंप स्टार्ट", "की लॉक सहायता", "टोइंग सेवा", "पेट्रोल डिलीवरी", "स्टेपनी बदलना", "कार मैकेनिक"],
  serviceCtas: ["नई बैटरी के लिए कॉल", "जंप स्टार्ट के लिए कॉल", "की मदद के लिए कॉल", "टोइंग के लिए कॉल", "पेट्रोल के लिए कॉल", "स्टेपनी के लिए कॉल", "मैकेनिक कॉल करें"],
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
  navCall: "کال +91 70218 10153",
  whatsapp: "WhatsApp چیٹ",
  language: "زبان",
  heroEyebrow: "ممبئی میں 24/7 ایمرجنسی کار مدد",
  heroTitle: "نئی بیٹری سیل، جمپ اسٹارٹ، کی لاک، ٹوئنگ، پیٹرول ڈیلیوری، اسٹیپنی تبدیلی اور کار مکینک مدد کے لیے Fast Mechanic.",
  heroLede: "گھر، دفتر، ہائی وے، پارکنگ بیسمنٹ یا رات میں سڑک پر پھنس گئے؟ ممبئی، اندھیری، تھانے اور واشی میں فوری مدد کے لیے کال کریں.",
  callNow: "ابھی کال کریں",
  saveContact: "رابطہ محفوظ کریں",
  trust: ["فون سپورٹ", "ممبئی بھر کوریج", "صاف قیمت"],
  hotline: "فاسٹ رسپانس ہاٹ لائن",
  addContact: "Fast Mechanic کو contacts میں شامل کریں",
  serviceTitles: ["نئی بیٹری سیل", "بیٹری جمپ اسٹارٹ", "کی لاک مدد", "ٹوئنگ سروس", "پیٹرول ڈیلیوری", "اسٹیپنی تبدیل", "کار مکینک"],
  serviceCtas: ["نئی بیٹری کے لیے کال", "جمپ اسٹارٹ کے لیے کال", "کی مدد کے لیے کال", "ٹوئنگ کے لیے کال", "پیٹرول کے لیے کال", "اسٹیپنی کے لیے کال", "مکینک کو کال"],
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
  whatsapp: "WhatsApp ચેટ",
  heroEyebrow: "મુંબઈમાં 24/7 ઇમરજન્સી કાર મદદ",
  heroTitle: "નવી બેટરી વેચાણ, જમ્પ સ્ટાર્ટ, કી લોક, ટોઇંગ, પેટ્રોલ ડિલિવરી, સ્ટેપની બદલાવ અને કાર મેકેનિક મદદ માટે Fast Mechanic.",
  heroLede: "ઘર, ઓફિસ, હાઇવે, પાર્કિંગ બેઝમેન્ટ અથવા રાત્રે રસ્તા પર ફસાયા છો? મુંબઈ, અંધેરી, થાણે અને વાશીમાં તાત્કાલિક મદદ માટે કોલ કરો.",
  callNow: "હમણાં કોલ કરો",
  saveContact: "સંપર્ક સેવ કરો",
  serviceTitles: ["નવી બેટરી વેચાણ", "બેટરી જમ્પ સ્ટાર્ટ", "કી લોક મદદ", "ટોઇંગ સેવા", "પેટ્રોલ ડિલિવરી", "સ્ટેપની બદલાવ", "કાર મેકેનિક"],
  serviceCtas: ["નવી બેટરી માટે કોલ", "જમ્પ સ્ટાર્ટ માટે કોલ", "કી મદદ માટે કોલ", "ટોઇંગ માટે કોલ", "પેટ્રોલ માટે કોલ", "સ્ટેપની માટે કોલ", "મેકેનિકને કોલ"],
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
  whatsapp: "WhatsApp அரட்டை",
  heroEyebrow: "மும்பையில் 24/7 அவசர கார் உதவி",
  heroTitle: "புதிய battery sale, ஜம்ப் ஸ்டார்ட், கீ லாக், டோயிங், பெட்ரோல் டெலிவரி, ஸ்டெப்னி மாற்றம் மற்றும் கார் மெக்கானிக் உதவிக்கு Fast Mechanic.",
  heroLede: "வீடு, அலுவலகம், ஹைவே, பார்க்கிங் பேஸ்மென்ட் அல்லது இரவு சாலையில் சிக்கியுள்ளீர்களா? மும்பை, அந்தேரி, தானே மற்றும் வாஷி பகுதியில் உடனடி உதவிக்கு அழைக்கவும்.",
  callNow: "இப்போது அழைக்கவும்",
  saveContact: "தொடர்பை சேமிக்கவும்",
  serviceTitles: ["புதிய Battery Sale", "பேட்டரி ஜம்ப் ஸ்டார்ட்", "கீ லாக் உதவி", "டோயிங் சேவை", "பெட்ரோல் டெலிவரி", "ஸ்டெப்னி மாற்றம்", "கார் மெக்கானிக்"],
  serviceCtas: ["புதிய battery க்கு அழைக்கவும்", "ஜம்ப் ஸ்டார்டுக்கு அழைக்கவும்", "கீ உதவிக்கு அழைக்கவும்", "டோயிங்குக்கு அழைக்கவும்", "பெட்ரோலுக்கு அழைக்கவும்", "ஸ்டெப்னிக்கு அழைக்கவும்", "மெக்கானிக்கைக் அழைக்கவும்"],
  coverageTitle: "மும்பை முழுவதும் சாலை மெக்கானிக் மற்றும் டோயிங் உதவி.",
  footerHeads: ["சேவைகள்", "பிரபல தேடல்கள்", "தொடர்பு"],
  emergencyCall: "அவசர அழைப்பு"
};

Object.assign(translations.hi, {
  navCall: `कॉल ${PHONE_DISPLAY}`,
  whatsapp: "WhatsApp चैट",
  trust: ["फोन पर सीधी सहायता", "पूरे मुंबई में कवरेज", "स्पष्ट कीमत"],
  hotline: "फास्ट रिस्पॉन्स हेल्पलाइन",
  rescueServices: ["बैटरी जंप स्टार्ट", "की लॉक सहायता", "टोइंग और पेट्रोल डिलीवरी"],
  addContact: "Fast Mechanic को contacts में जोड़ें",
  metrics: ["घंटे सहायता", "एरिया पेज", "इमरजेंसी सेवाएं", "सीधा कॉल नंबर"],
  servicesTitle: "मुंबई ट्रैफिक, बारिश और देर रात ब्रेकडाउन के लिए रोडसाइड सहायता.",
  servicesText: "Fast Mechanic गैराज खोजने में समय गंवाए बिना कार शुरू करवाने या सुरक्षित टो करवाने पर ध्यान देता है.",
  serviceBadges: ["नई बैटरी", "जंप स्टार्ट", "की लॉक", "टोइंग", "फ्यूल हेल्प", "स्टेपनी", "मैकेनिक"],
  serviceTexts: [
    "नई कार बैटरी चयन, doorstep coordination और replacement help.",
    "घर, ऑफिस, पार्किंग, मॉल या सड़क पर फंसी कारों के लिए डेड बैटरी सहायता.",
    "कार लॉकआउट, फंसी चाबी और जरूरी एक्सेस समस्याओं में मदद.",
    "जो कार शुरू नहीं हो रही या सुरक्षित नहीं चल सकती, उसके लिए टोइंग सहायता.",
    "मुंबई ट्रैफिक में पेट्रोल खत्म होने पर इमरजेंसी फ्यूल सहायता.",
    "टायर खराब होने पर जल्दी स्पेयर व्हील बदलने की ऑन-रोड मदद.",
    "छोटी खराबी, स्टार्टिंग समस्या और तुरंत जांच के लिए डोरस्टेप व रोडसाइड मैकेनिक."
  ],
  emergencyEyebrow: "अधिक इमरजेंसी मदद",
  emergencyTitle: "ब्रेकडाउन के समय खोजी जाने वाली सेवाओं के लिए एक ही नंबर.",
  emergencyText: "Fast Mechanic पूरे मुंबई में हाई-इंटेंट इमरजेंसी कार सेवाओं में सहायता देता है.",
  emergencyActions: ["इमरजेंसी लाइन कॉल करें", "कॉन्टैक्ट कार्ड देखें"],
  emergencyTitles: ["फ्लैट टायर मदद", "कार स्टार्ट नहीं हो रही", "एक्सीडेंट टोइंग", "गलत फ्यूल सहायता", "ओवरहीटिंग मदद", "ब्रेक समस्या मदद", "क्लच और गियर समस्या", "बेसमेंट रिकवरी"],
  emergencyTexts: ["पंक्चर समन्वय और रोडसाइड टायर सहायता.", "बैटरी, स्टार्टर, फ्यूज और बेसिक जांच.", "ब्रेकडाउन या टक्कर के बाद सुरक्षित टो सहायता.", "गलत फ्यूल भरने पर मार्गदर्शन और मैकेनिक सहायता.", "कूलेंट लीक, रेडिएटर और वार्निंग लाइट जांच.", "वाहन हिलाने से पहले इमरजेंसी निरीक्षण.", "मैनुअल और ऑटोमैटिक कारों की रोडसाइड जांच.", "बिल्डिंग या मॉल पार्किंग में फंसी कारों के लिए मदद."],
  processEyebrow: "कैसे काम करता है",
  processTitle: "तेज, आसान और तनाव वाले समय के लिए बनाया गया.",
  processTitles: ["Fast Mechanic को कॉल करें", "स्पष्ट मार्गदर्शन पाएं", "सहायता पहुंचती है"],
  processTexts: ["अपनी कार मॉडल, समस्या और सही लोकेशन या नजदीकी लैंडमार्क बताएं.", "हम समझने में मदद करते हैं कि जंप स्टार्ट, मैकेनिक, टोइंग, फ्यूल या टायर सहायता चाहिए.", "सही रोडसाइड समाधान की व्यवस्था की जाती है ताकि कार चल सके या सुरक्षित ले जाई जा सके."],
  coverageEyebrow: "मुंबई कवरेज",
  coverageText: "Fast Mechanic active South Mumbai, Andheri, Thane और Vashi radius में residential towers, office zones, highways, station areas, mall parking, airport routes और South Mumbai business districts में car breakdown सहायता देता है.",
  coverageNote: "सेवा planning के लिए मुख्य PIN codes दिखाए गए हैं. कुछ Mumbai localities में multiple postal codes होते हैं.",
  localSeoEyebrow: "मुंबई लोकल सर्च",
  localSeoTitle: "मुंबई में location के हिसाब से emergency car services.",
  localSeoText: "Fast Mechanic South Mumbai, central Mumbai, Bandra, Andheri, Thane और Vashi में roadside assistance calls के लिए मदद करता है.",
  localSeoCta: "अभी कॉल करें",
  seoEyebrow: "सर्च रेडी कॉन्टैक्ट",
  seoTitle: "सर्च इंजन और ग्राहकों के लिए Fast Mechanic सेवा कार्ड विवरण.",
  seoText: "कॉल करने, नंबर सेव करने या मुंबई में roadside assistance details शेयर करने के लिए contact card इस्तेमाल करें.",
  searchCard: ["Fast Mechanic", "मुंबई में 24/7 कार रोडसाइड सहायता"],
  locationEyebrow: "Fast Mechanic लोकेशन",
  locationTitle: "मुंबई में कहीं भी Fast Mechanic roadside assistance.",
  locationText: "New Tank Bandar Road, Darukhana, E Ward, Mumbai, Maharashtra 400010 के पास Fast Mechanic service point के लिए map देखें. Emergency roadside assistance के लिए आने से पहले call करें ताकि support आपकी vehicle location पर coordinate हो सके.",
  locationAddressLabel: "पता",
  locationActions: ["Google Maps खोलें", "Street Map खोलें"],
  faqEyebrow: "FAQ",
  faqTitle: "तुरंत कार ब्रेकडाउन सवालों के जवाब.",
  faqQuestions: ["क्या आप मुंबई में बैटरी जंप स्टार्ट देते हैं?", "क्या कार की चाबी अंदर लॉक हो जाए तो मदद करते हैं?", "क्या towing service उपलब्ध है?", "क्या ग्राहक आपका नंबर सीधे सेव कर सकते हैं?"],
  faqAnswers: [`हां. मुंबई में dead battery और car jump start के लिए Fast Mechanic को ${PHONE_DISPLAY} पर कॉल करें.`, "Fast Mechanic car lockout और key lock स्थिति में मदद कर सकता है. कार मॉडल और लोकेशन बताकर कॉल करें.", "हां. अगर कार सुरक्षित नहीं चल सकती, तो Fast Mechanic मुंबई, अंधेरी, ठाणे और वाशी में towing support arrange कर सकता है.", `हां. Save Contact button से Fast Mechanic, ${PHONE_DISPLAY}, को सीधे contacts में सेव करें.`],
  footerSmall: "मुंबई इमरजेंसी कार सहायता",
  footerText: "नई बैटरी बिक्री, battery jump start, key lockout, towing, petrol delivery, stepney change और car mechanic service के लिए 24/7 roadside assistance.",
  footerServices: ["नई बैटरी बिक्री", "बैटरी जंप स्टार्ट", "टोइंग सेवा", "पेट्रोल डिलीवरी"],
  footerSearches: ["कार मैकेनिक near me मुंबई", "रोडसाइड असिस्टेंस मुंबई", "बैटरी जंप स्टार्ट मुंबई", "टोइंग सर्विस मुंबई"],
  footerBottom: "Copyright 2026 Fast Mechanic. सभी अधिकार सुरक्षित."
});

Object.assign(translations.ur, {
  metrics: ["گھنٹے مدد", "ایریا پیجز", "ایمرجنسی سروسز", "براہ راست کال نمبر"],
  servicesEyebrow: "اہم سروسز",
  servicesTitle: "ممبئی ٹریفک، بارش اور رات کے breakdowns کے لیے روڈ سائیڈ مدد.",
  servicesText: "Fast Mechanic گیراج ڈھونڈنے میں وقت ضائع کیے بغیر گاڑی چلانے یا محفوظ tow کروانے میں مدد دیتا ہے.",
  serviceBadges: ["نئی بیٹری", "جمپ اسٹارٹ", "کی لاک", "ٹوئنگ", "فیول مدد", "اسٹیپنی", "مکینک"],
  serviceTexts: [
    "نئی car battery selection، doorstep coordination اور replacement help.",
    "گھر، دفتر، پارکنگ، مال یا سڑک پر پھنسی گاڑی کے لیے dead battery مدد.",
    "car lockout، stuck keys اور urgent access issues میں مدد.",
    "جو گاڑی start نہ ہو یا محفوظ طریقے سے move نہ ہو سکے اس کے لیے towing مدد.",
    "ممبئی ٹریفک میں petrol ختم ہونے پر emergency fuel assistance.",
    "tyre fail ہونے پر جلد spare wheel change support.",
    "minor faults، starting trouble اور urgent diagnosis کے لیے doorstep اور roadside mechanic."
  ],
  emergencyEyebrow: "مزید ایمرجنسی مدد",
  emergencyTitle: "breakdown کے وقت تلاش کی جانے والی سروسز کے لیے ایک نمبر.",
  emergencyText: "Fast Mechanic ممبئی میں urgent roadside car problems کے لیے مدد دیتا ہے.",
  emergencyActions: ["ایمرجنسی لائن کال کریں", "کانٹیکٹ کارڈ دیکھیں"],
  emergencyTitles: ["فلیٹ ٹائر مدد", "گاڑی اسٹارٹ نہیں", "حادثہ ٹوئنگ", "غلط فیول مدد", "اوور ہیٹنگ مدد", "بریک مسئلہ مدد", "کلچ اور گیئر مسئلہ", "بیسمنٹ ریکوری"],
  emergencyTexts: ["puncture coordination اور roadside tyre support.", "battery، starter، fuse اور basic diagnosis support.", "breakdown یا collision کے بعد safe tow coordination.", "refuelling mistake کے لیے guidance اور mechanic assistance.", "coolant leak، radiator اور warning-light checks.", "گاڑی move کرنے سے پہلے emergency inspection.", "manual اور automatic cars کے لیے roadside assessment.", "building یا mall parking میں پھنسی گاڑیوں کے لیے support."],
  processEyebrow: "طریقہ کار",
  processTitle: "تیز، آسان اور stressful moments کے لیے بنایا گیا.",
  processTitles: ["Fast Mechanic کو کال کریں", "واضح رہنمائی لیں", "مدد پہنچتی ہے"],
  processTexts: ["اپنی car model، issue اور exact location یا nearby landmark بتائیں.", "ہم identify کرتے ہیں کہ jump start، mechanic، towing، fuel یا tyre support چاہیے.", "مناسب roadside solution arrange کیا جاتا ہے تاکہ گاڑی move ہو سکے یا safely لے جائی جا سکے."],
  coverageText: "Fast Mechanic active South Mumbai، Andheri، Thane اور Vashi radius میں residential towers، office zones، highways، station areas، mall parking، airport routes اور South Mumbai business districts میں car breakdown support دیتا ہے.",
  coverageNote: "service planning کے لیے primary PIN codes دکھائے گئے ہیں. کچھ Mumbai localities میں multiple postal codes ہوتے ہیں.",
  localSeoEyebrow: "ممبئی لوکل سرچز",
  localSeoTitle: "ممبئی میں location کے حساب سے emergency car services.",
  localSeoText: "Fast Mechanic South Mumbai، central Mumbai، Bandra، Andheri، Thane اور Vashi میں roadside assistance calls کے لیے مدد کرتا ہے.",
  localSeoCta: "ابھی کال کریں",
  seoEyebrow: "سرچ ریڈی کانٹیکٹ",
  seoTitle: "Fast Mechanic contact details for quick service calls.",
  seoText: "Call کرنے، number save کرنے یا Mumbai roadside assistance details share کرنے کے لیے contact card استعمال کریں.",
  locationEyebrow: "Fast Mechanic لوکیشن",
  locationTitle: "ممبئی میں کہیں بھی Fast Mechanic roadside assistance.",
  locationText: "New Tank Bandar Road, Darukhana, E Ward, Mumbai, Maharashtra 400010 کے قریب Fast Mechanic service point کے لیے map استعمال کریں. Emergency roadside assistance کے لیے آنے سے پہلے call کریں تاکہ support آپ کی vehicle location پر coordinate ہو سکے.",
  locationAddressLabel: "پتہ",
  locationActions: ["Google Maps کھولیں", "Street Map کھولیں"],
  faqEyebrow: "FAQ",
  faqTitle: "urgent car breakdown questions کے جواب.",
  faqQuestions: ["کیا آپ ممبئی میں battery jump start دیتے ہیں؟", "کیا car keys اندر locked ہوں تو مدد کرتے ہیں؟", "کیا towing service ہے؟", "کیا customers نمبر directly save کر سکتے ہیں؟"],
  faqAnswers: [`جی ہاں. dead battery اور car jump start assistance کے لیے Fast Mechanic کو ${PHONE_DISPLAY} پر کال کریں.`, "Fast Mechanic car lockout اور key lock situations میں مدد کر سکتا ہے. car model اور location کے ساتھ call کریں.", "جی ہاں. اگر car safely move نہیں ہو سکتی تو Fast Mechanic ممبئی، اندھیری، تھانے اور واشی میں towing support arrange کر سکتا ہے.", `جی ہاں. Save Contact button سے Fast Mechanic، ${PHONE_DISPLAY}، کو device contacts میں add کریں.`],
  footerText: "new battery sale، battery jump start، key lockout، towing، petrol delivery، stepney change اور car mechanic service کے لیے 24/7 roadside assistance.",
  footerHeads: ["سروسز", "مشہور سرچز", "کانٹیکٹ"],
  footerServices: ["نئی بیٹری سیل", "بیٹری جمپ اسٹارٹ", "ٹوئنگ سروس", "پیٹرول ڈیلیوری"],
  footerSearches: ["car mechanic near me Mumbai", "roadside assistance Mumbai", "battery jump start Mumbai", "towing service Mumbai"],
  footerBottom: "Copyright 2026 Fast Mechanic. تمام حقوق محفوظ ہیں."
});

Object.assign(translations.gu, {
  navCall: `કોલ ${PHONE_DISPLAY}`,
  trust: ["ફોન પર સીધી મદદ", "સમગ્ર મુંબઈ કવરેજ", "સ્પષ્ટ ભાવ"],
  hotline: "ફાસ્ટ રિસ્પોન્સ હેલ્પલાઇન",
  rescueServices: ["બેટરી જમ્પ સ્ટાર્ટ", "કી લોક મદદ", "ટોઇંગ અને પેટ્રોલ ડિલિવરી"],
  addContact: "Fast Mechanic ને contacts માં ઉમેરો",
  metrics: ["કલાક સહાય", "એરિયા પેજ", "ઇમરજન્સી સેવાઓ", "સીધો કોલ નંબર"],
  servicesEyebrow: "મુખ્ય સેવાઓ",
  servicesTitle: "મુંબઈ ટ્રાફિક, વરસાદ અને મોડી રાતના બ્રેકડાઉન માટે રોડસાઈડ સહાય.",
  servicesText: "Fast Mechanic ગેરેજ શોધવામાં સમય બગાડ્યા વગર કાર ચાલુ કરાવવા અથવા સુરક્ષિત tow કરાવવામાં મદદ કરે છે.",
  serviceBadges: ["નવી બેટરી", "જમ્પ સ્ટાર્ટ", "કી લોક", "ટોઇંગ", "ફ્યુઅલ મદદ", "સ્ટેપની", "મેકેનિક"],
  serviceTexts: [
    "નવી car battery selection, doorstep coordination અને replacement help.",
    "ઘર, ઓફિસ, પાર્કિંગ, મોલ અથવા રસ્તા પર ફસાયેલી કાર માટે dead battery સહાય.",
    "કાર લોકઆઉટ, અટકેલી ચાવી અને urgent access issues માટે મદદ.",
    "કાર શરૂ ન થાય અથવા સુરક્ષિત ખસેડી ન શકાય ત્યારે towing સહાય.",
    "મુંબઈ ટ્રાફિકમાં પેટ્રોલ ખતમ થાય ત્યારે emergency fuel assistance.",
    "ટાયર ખરાબ થાય ત્યારે ઝડપી spare wheel change support.",
    "નાની ખામી, starting trouble અને urgent diagnosis માટે doorstep અને roadside mechanic."
  ],
  emergencyEyebrow: "વધુ ઇમરજન્સી મદદ",
  emergencyTitle: "બ્રેકડાઉન સમયે લોકો શોધે તેવી સેવાઓ માટે એક જ નંબર.",
  emergencyText: "Fast Mechanic મુંબઈમાં urgent roadside car problems માટે મદદ આપે છે.",
  emergencyActions: ["ઇમરજન્સી લાઇન કોલ કરો", "કૉન્ટેક્ટ કાર્ડ જુઓ"],
  emergencyTitles: ["ફ્લેટ ટાયર મદદ", "કાર સ્ટાર્ટ નથી થતી", "એક્સિડન્ટ ટોઇંગ", "ખોટું ફ્યુઅલ મદદ", "ઓવરહીટિંગ મદદ", "બ્રેક સમસ્યા મદદ", "ક્લચ અને ગિયર સમસ્યા", "બેઝમેન્ટ રિકવરી"],
  emergencyTexts: ["પંકચર coordination અને roadside tyre support.", "બેટરી, starter, fuse અને basic diagnosis support.", "breakdown અથવા collision પછી safe tow coordination.", "refuelling mistake માટે guidance અને mechanic assistance.", "coolant leak, radiator અને warning-light checks.", "વાહન ખસેડતા પહેલાં emergency inspection.", "manual અને automatic cars માટે roadside assessment.", "building અથવા mall parking માં ફસાયેલી કાર માટે support."],
  processEyebrow: "કેવી રીતે કામ કરે છે",
  processTitle: "ઝડપી, સરળ અને તણાવભરી ક્ષણો માટે બનાવેલું.",
  processTitles: ["Fast Mechanic ને કોલ કરો", "સ્પષ્ટ માર્ગદર્શન મેળવો", "સહાય પહોંચે છે"],
  processTexts: ["તમારી car model, issue અને exact location અથવા nearby landmark જણાવો.", "અમે identify કરવામાં મદદ કરીએ છીએ કે jump start, mechanic, towing, fuel અથવા tyre support જોઈએ.", "યોગ્ય roadside solution arrange થાય છે જેથી કાર ખસેડી શકાય અથવા સુરક્ષિત લઈ જઈ શકાય."],
  coverageEyebrow: "મુંબઈ કવરેજ",
  coverageText: "Fast Mechanic active South Mumbai, Andheri, Thane અને Vashi radius માં residential towers, office zones, highways, station areas, mall parking, airport routes અને South Mumbai business districts માટે car breakdown support આપે છે.",
  coverageNote: "service planning માટે primary PIN codes બતાવ્યા છે. કેટલીક Mumbai localities માં multiple postal codes હોય છે.",
  localSeoEyebrow: "મુંબઈ લોકલ સર્ચ",
  localSeoTitle: "મુંબઈમાં location પ્રમાણે emergency car services.",
  localSeoText: "Fast Mechanic South Mumbai, central Mumbai, Bandra, Andheri, Thane અને Vashi માં roadside assistance calls માટે મદદ કરે છે.",
  localSeoCta: "હમણાં કોલ કરો",
  seoEyebrow: "સર્ચ રેડી કૉન્ટેક્ટ",
  seoTitle: "ઝડપી service calls માટે Fast Mechanic contact details.",
  seoText: "Call કરવા, number save કરવા અથવા Mumbai roadside assistance details share કરવા contact card વાપરો.",
  searchCard: ["Fast Mechanic", "મુંબઈમાં 24/7 કાર રોડસાઈડ મદદ"],
  locationEyebrow: "Fast Mechanic location",
  locationTitle: "મુંબઈમાં ક્યાંય પણ Fast Mechanic roadside assistance.",
  locationText: "New Tank Bandar Road, Darukhana, E Ward, Mumbai, Maharashtra 400010 નજીકના Fast Mechanic service point માટે map જુઓ. Emergency roadside assistance માટે આવતાં પહેલાં call કરો જેથી support તમારી vehicle location પર coordinate થઈ શકે.",
  locationAddressLabel: "સરનામું",
  locationActions: ["Google Maps ખોલો", "Street Map ખોલો"],
  faqEyebrow: "FAQ",
  faqTitle: "urgent car breakdown questions માટે જવાબો.",
  faqQuestions: ["શું તમે મુંબઈમાં battery jump start આપો છો?", "કારની keys અંદર locked હોય તો મદદ કરો છો?", "શું towing service છે?", "શું customers તમારો number directly save કરી શકે છે?"],
  faqAnswers: [`હા. dead battery અને car jump start assistance માટે Fast Mechanic ને ${PHONE_DISPLAY} પર કોલ કરો.`, "Fast Mechanic car lockout અને key lock situations માં મદદ કરી શકે છે. car model અને location સાથે call કરો.", "હા. જો car safely move ન થઈ શકે તો Fast Mechanic Mumbai, Andheri, Thane અને Vashi માં towing support arrange કરી શકે છે.", `હા. Save Contact button થી Fast Mechanic, ${PHONE_DISPLAY}, ને device contacts માં add કરો.`],
  footerSmall: "મુંબઈ ઇમરજન્સી કાર મદદ",
  footerText: "new battery sale, battery jump start, key lockout, towing, petrol delivery, stepney change અને car mechanic service માટે 24/7 roadside assistance.",
  footerServices: ["નવી બેટરી વેચાણ", "બેટરી જમ્પ સ્ટાર્ટ", "ટોઇંગ સેવા", "પેટ્રોલ ડિલિવરી"],
  footerSearches: ["car mechanic near me Mumbai", "roadside assistance Mumbai", "battery jump start Mumbai", "towing service Mumbai"],
  footerBottom: "Copyright 2026 Fast Mechanic. બધા હકો અનામત."
});

Object.assign(translations.ta, {
  navCall: `${PHONE_DISPLAY} அழைக்கவும்`,
  trust: ["நேரடி தொலைபேசி உதவி", "மும்பை முழு கவரேஜ்", "தெளிவான கட்டணம்"],
  hotline: "ஃபாஸ்ட் ரெஸ்பான்ஸ் ஹெல்ப்லைன்",
  rescueServices: ["பேட்டரி ஜம்ப் ஸ்டார்ட்", "கீ லாக் உதவி", "டோயிங் மற்றும் பெட்ரோல் டெலிவரி"],
  addContact: "Fast Mechanic ஐ contacts இல் சேர்க்கவும்",
  metrics: ["மணி நேர உதவி", "Area pages", "அவசர சேவைகள்", "நேரடி அழைப்பு எண்"],
  servicesEyebrow: "முக்கிய சேவைகள்",
  servicesTitle: "மும்பை போக்குவரத்து, மழை மற்றும் இரவு நேர breakdown களுக்கான சாலை உதவி.",
  servicesText: "Garage தேட நேரம் வீணாக்காமல் கார் start ஆக அல்லது பாதுகாப்பாக tow செய்ய Fast Mechanic உதவுகிறது.",
  serviceBadges: ["புதிய Battery", "ஜம்ப் ஸ்டார்ட்", "கீ லாக்", "டோயிங்", "எரிபொருள் உதவி", "ஸ்டெப்னி", "மெக்கானிக்"],
  serviceTexts: [
    "புதிய car battery selection, doorstep coordination மற்றும் replacement help.",
    "வீடு, அலுவலகம், parking, mall அல்லது roadside இடங்களில் சிக்கிய கார்கள் க்கான dead battery support.",
    "car lockout, stuck keys மற்றும் urgent access issues க்கான உதவி.",
    "start ஆகாத அல்லது safe ஆக move செய்ய முடியாத கார்களுக்கு towing உதவி.",
    "மும்பை traffic இல் petrol முடிந்தால் emergency fuel assistance.",
    "tyre fail ஆகும் போது விரைவான spare wheel change support.",
    "minor faults, starting trouble மற்றும் urgent diagnosis க்கான doorstep மற்றும் roadside mechanic."
  ],
  emergencyEyebrow: "மேலும் அவசர உதவி",
  emergencyTitle: "breakdown நேரத்தில் மக்கள் தேடும் சேவைகளுக்கு ஒரு எண்.",
  emergencyText: "Fast Mechanic மும்பையில் urgent roadside car problems க்கு உதவுகிறது.",
  emergencyActions: ["அவசர எண் அழைக்கவும்", "Contact Card பார்க்கவும்"],
  emergencyTitles: ["Flat Tyre Help", "Car Not Starting", "Accident Towing", "Wrong Fuel Support", "Overheating Help", "Brake Issue Help", "Clutch and Gear Trouble", "Basement Recovery"],
  emergencyTexts: ["puncture coordination மற்றும் roadside tyre support.", "battery, starter, fuse மற்றும் basic diagnosis support.", "breakdown அல்லது collision பிறகு safe tow coordination.", "refuelling mistakes க்கு guidance மற்றும் mechanic assistance.", "coolant leak, radiator மற்றும் warning-light checks.", "vehicle move செய்யும் முன் emergency inspection.", "manual மற்றும் automatic cars க்கான roadside assessment.", "building அல்லது mall parking இல் சிக்கிய கார்களுக்கு support."],
  processEyebrow: "எப்படி செயல்படும்",
  processTitle: "வேகமானது, எளிமையானது மற்றும் stressful moments க்காக வடிவமைக்கப்பட்டது.",
  processTitles: ["Fast Mechanic ஐ அழைக்கவும்", "தெளிவான வழிகாட்டல் பெறவும்", "உதவி வரும்"],
  processTexts: ["உங்கள் car model, issue மற்றும் exact location அல்லது nearby landmark பகிரவும்.", "jump start, mechanic, towing, fuel அல்லது tyre support தேவைதானா என்று உதவுகிறோம்.", "கார் move ஆக அல்லது safely எடுத்துச் செல்ல சரியான roadside solution arrange செய்யப்படும்."],
  coverageEyebrow: "மும்பை கவரேஜ்",
  coverageText: "Fast Mechanic active South Mumbai, Andheri, Thane மற்றும் Vashi radius இல் residential towers, office zones, highways, station areas, mall parking, airport routes மற்றும் South Mumbai business districts க்கு car breakdown support வழங்குகிறது.",
  coverageNote: "service planning க்கு primary PIN codes காட்டப்பட்டுள்ளன. சில Mumbai localities பல postal codes பயன்படுத்துகின்றன.",
  localSeoEyebrow: "மும்பை லோகல் தேடல்கள்",
  localSeoTitle: "மும்பையில் location அடிப்படையிலான emergency car services.",
  localSeoText: "Fast Mechanic South Mumbai, central Mumbai, Bandra, Andheri, Thane மற்றும் Vashi இல் roadside assistance calls க்கு உதவுகிறது.",
  localSeoCta: "இப்போது அழைக்கவும்",
  seoEyebrow: "Search Ready Contact",
  seoTitle: "Quick service calls க்கான Fast Mechanic contact details.",
  seoText: "இந்த website local business schema, service catalog schema, FAQ schema, canonical URLs, sitemap, robots file மற்றும் downloadable vCard உடன் உள்ளது.",
  searchCard: ["Fast Mechanic", "மும்பையில் 24/7 கார் சாலை உதவி"],
  locationEyebrow: "Fast Mechanic Location",
  locationTitle: "மும்பையில் எங்கும் Fast Mechanic roadside assistance.",
  locationText: "New Tank Bandar Road, Darukhana, E Ward, Mumbai, Maharashtra 400010 அருகிலுள்ள Fast Mechanic service point க்கு map பயன்படுத்தவும். Emergency roadside assistance க்கு வருவதற்கு முன் call செய்யவும்; support உங்கள் vehicle location இல் coordinate செய்யப்படும்.",
  locationAddressLabel: "முகவரி",
  locationActions: ["Google Maps திறக்கவும்", "Street Map திறக்கவும்"],
  faqEyebrow: "FAQ",
  faqTitle: "urgent car breakdown questions க்கான பதில்கள்.",
  faqQuestions: ["மும்பையில் battery jump start தருகிறீர்களா?", "car keys உள்ளே locked இருந்தால் உதவுவீர்களா?", "towing service இருக்கிறதா?", "customers உங்கள் number ஐ directly save செய்ய முடியுமா?"],
  faqAnswers: [`ஆம். dead battery மற்றும் car jump start assistance க்கு Fast Mechanic ஐ ${PHONE_DISPLAY} இல் அழைக்கவும்.`, "Fast Mechanic car lockout மற்றும் key lock situations இல் உதவ முடியும். car model மற்றும் location உடன் call செய்யவும்.", "ஆம். car safely move ஆக முடியாவிட்டால் Fast Mechanic Mumbai, Andheri, Thane மற்றும் Vashi இல் towing support arrange செய்ய முடியும்.", `ஆம். Save Contact button மூலம் Fast Mechanic, ${PHONE_DISPLAY}, ஐ device contacts இல் add செய்யலாம்.`],
  footerSmall: "மும்பை அவசர கார் உதவி",
  footerText: "new battery sale, battery jump start, key lockout, towing, petrol delivery, stepney change மற்றும் car mechanic service க்கு 24/7 roadside assistance.",
  footerServices: ["புதிய Battery Sale", "பேட்டரி ஜம்ப் ஸ்டார்ட்", "டோயிங் சேவை", "பெட்ரோல் டெலிவரி"],
  footerSearches: ["car mechanic near me Mumbai", "roadside assistance Mumbai", "battery jump start Mumbai", "towing service Mumbai"],
  footerBottom: "Copyright 2026 Fast Mechanic. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
});

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

const setRepeatedText = (selector, value) => {
  if (!value) return;
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value;
  });
};

const updateContactLinks = () => {
  document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
    link.setAttribute("href", `tel:${PHONE_TEL}`);
  });

  document.querySelectorAll(".phone-number, .search-card a:first-of-type, .footer-grid > div:nth-child(4) a:first-of-type").forEach((link) => {
    link.textContent = PHONE_DISPLAY;
  });

  document.querySelectorAll(".whatsapp-chat").forEach((link) => {
    link.setAttribute("href", WHATSAPP_URL);
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
  setText(".coverage-note", text.coverageNote);
  setText(".local-seo-section .section-head .eyebrow", text.localSeoEyebrow);
  setText(".local-seo-section .section-head h2", text.localSeoTitle);
  setText(".local-seo-section .section-head p:not(.eyebrow)", text.localSeoText);
  if (text.localSeoCtas) {
    setTextList(".local-seo-card a", text.localSeoCtas);
  } else {
    setRepeatedText(".local-seo-card a", text.localSeoCta);
  }
  setText(".seo-panel .eyebrow", text.seoEyebrow);
  setText(".seo-panel h2", text.seoTitle);
  setText(".seo-panel p:not(.eyebrow)", text.seoText);
  setTextList(".search-card strong, .search-card span", text.searchCard);
  setText(".search-card a:last-child", text.saveContact);
  setText(".location-copy .eyebrow", text.locationEyebrow);
  setText(".location-copy h2", text.locationTitle);
  setText(".location-copy > p:not(.eyebrow)", text.locationText);
  setText(".location-details strong", text.locationAddressLabel);
  setTextList(".location-actions a", text.locationActions);
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
  setText(".sticky-call a:nth-child(2)", text.saveContact);
  setText(".whatsapp-chat span", text.whatsapp);
  updateContactLinks();
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

const savedLanguage = localStorage.getItem("fastMechanicLanguage") || "en";
if (languageSelect) {
  languageSelect.value = translations[savedLanguage] ? savedLanguage : "en";
  applyLanguage(languageSelect.value);
  languageSelect.addEventListener("change", () => {
    localStorage.setItem("fastMechanicLanguage", languageSelect.value);
    applyLanguage(languageSelect.value);
  });
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

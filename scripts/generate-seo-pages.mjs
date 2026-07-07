import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const siteUrl = "https://fastmech.in";
const phoneDisplay = "+91 70218 10153";
const phoneTel = "+917021810153";
const whatsappUrl = "https://wa.me/917021810153?text=Hi%20Fast%20Mechanic%2C%20I%20need%20roadside%20assistance%20in%20Mumbai.";
const lastmod = "2026-07-07";
const address = "New Tank Bandar Road, Darukhana, E Ward, Mumbai, Maharashtra 400010, India";
const mapUrl = "https://www.google.com/maps?q=18.9788291,72.8482657";
const openGraphImage = `${siteUrl}/google-ads-kit/images/png-ready/fast-mechanic-search-ad-1200x628.png`;

const services = [
  {
    slug: "new-battery-sale",
    name: "New Battery Sale",
    short: "New car battery sale support with battery selection guidance, doorstep coordination and replacement help.",
    image: "service-new-battery.svg",
    cta: "Call for new battery",
    intent: "new car battery, battery replacement, car battery sale near me, doorstep battery replacement",
    price: "Battery price depends on brand, warranty, car model and availability"
  },
  {
    slug: "battery-jump-start",
    name: "Battery Jump Start",
    short: "Dead battery jump start support for cars stuck at home, office, basement parking or roadside.",
    image: "service-jump-start.svg",
    cta: "Call battery jump start",
    intent: "dead battery, weak battery, jump start near me, car battery boost",
    price: "Call for quote after location and vehicle details"
  },
  {
    slug: "towing-service",
    name: "Towing Service",
    short: "Towing coordination for cars that cannot be started, moved safely or driven after a breakdown.",
    image: "service-towing.svg",
    cta: "Call towing service",
    intent: "towing near me, car towing, emergency tow, accident towing",
    price: "Quote depends on pickup point, drop point and vehicle condition"
  },
  {
    slug: "petrol-delivery",
    name: "Petrol Delivery",
    short: "Emergency fuel help when petrol finishes on Mumbai roads, parking areas or airport routes.",
    image: "service-petrol.svg",
    cta: "Call petrol help",
    intent: "petrol delivery, fuel help, petrol finished, emergency petrol",
    price: "Call for current assistance charges and route availability"
  },
  {
    slug: "key-lock-assistance",
    name: "Key Lock Assistance",
    short: "Car key lockout guidance when keys are locked inside or the door lock is not responding.",
    image: "service-key-lock.svg",
    cta: "Call key lock help",
    intent: "car lockout, key locked inside car, key lock help, car key assistance",
    price: "Call with car model and lock issue for guidance"
  },
  {
    slug: "stepney-change",
    name: "Stepney Change",
    short: "Spare wheel change support for flat tyre, puncture and unsafe tyre situations.",
    image: "service-stepney.svg",
    cta: "Call stepney help",
    intent: "stepney change, flat tyre help, puncture help, spare wheel change",
    price: "Call for quote based on location and tyre condition"
  },
  {
    slug: "car-mechanic",
    name: "Car Mechanic",
    short: "Roadside and doorstep mechanic checks for starting trouble, overheating, brake alerts and minor faults.",
    image: "service-mechanic.svg",
    cta: "Call car mechanic",
    intent: "car mechanic near me, roadside mechanic, car not starting, emergency mechanic",
    price: "Inspection and repair quote depends on issue and vehicle model"
  },
  {
    slug: "roadside-assistance",
    name: "Emergency Roadside Assistance",
    short: "One-number support for jump start, towing, petrol, stepney, lockout and urgent mechanic needs.",
    image: "logo.svg",
    cta: "Call roadside assistance",
    intent: "roadside assistance near me, car breakdown help, on road car rescue, emergency car help",
    price: "Call for quote and available support options"
  }
];

const serviceGuidance = {
  "new-battery-sale": {
    scope: "Battery fitment depends on the vehicle variant, battery tray size, terminal layout, warranty preference and current stock.",
    safety: "Do not touch or attempt to charge a battery that is swollen, leaking, unusually hot or producing a strong smell.",
    modelAdvice: "Share the model year, fuel type and whether the car has start-stop technology so the correct battery specification can be checked.",
    checks: [
      ["Vehicle details", "Share the car make, model, model year and fuel type."],
      ["Battery condition", "Describe whether the battery is weak, completely dead, swollen, leaking or showing a dashboard warning."],
      ["Access details", "Mention basement height, society gate, roadside position or any parking restriction before assistance is arranged."]
    ]
  },
  "battery-jump-start": {
    scope: "Jump-start suitability depends on battery condition, terminal access and whether the vehicle uses a conventional 12-volt system.",
    safety: "Keep hands and metal objects away from battery terminals. Do not attempt a jump start if the battery is cracked, leaking or swollen.",
    modelAdvice: "Share the model year, fuel type, dashboard warning lights and whether the starter clicks or remains silent.",
    checks: [
      ["Starting symptom", "Tell us whether the starter clicks, cranks slowly, remains silent or the dashboard lights are completely off."],
      ["Vehicle details", "Share the car make, model, model year and fuel type."],
      ["Safe access", "Move passengers to a safe place, switch off accessories and describe the exact parking or roadside position."]
    ]
  },
  "towing-service": {
    scope: "The towing method depends on transmission, drivetrain, wheel condition, ground clearance and access at the pickup point.",
    safety: "Do not continue driving after a collision, severe overheating, brake failure, major fluid leak or damaged wheel.",
    modelAdvice: "Share whether the vehicle is automatic or manual, whether the steering and wheels move, and the intended drop location.",
    checks: [
      ["Pickup and drop", "Share exact pickup and destination locations with nearby landmarks."],
      ["Vehicle condition", "Tell us whether the car rolls, steers, has locked wheels or has accident damage."],
      ["Access restrictions", "Mention basement height, narrow lanes, traffic restrictions or society entry requirements."]
    ]
  },
  "petrol-delivery": {
    scope: "Fuel assistance depends on route access, current availability and a safe stopping position for the vehicle.",
    safety: "Switch off the ignition, avoid smoking or open flames and wait away from moving traffic where possible.",
    modelAdvice: "Confirm the correct fuel type before assistance is arranged; never add petrol to a diesel vehicle or diesel to a petrol vehicle.",
    checks: [
      ["Fuel type", "Confirm whether the vehicle requires petrol or diesel before assistance is arranged."],
      ["Exact location", "Share a live location, road direction and nearest landmark."],
      ["Vehicle position", "Tell us whether the car is safely parked, blocking traffic or stopped on a flyover or highway shoulder."]
    ]
  },
  "key-lock-assistance": {
    scope: "Lockout assistance depends on the key type, vehicle model, lock condition and whether a spare key is available.",
    safety: "Do not force the window, door frame or electronic lock because this can cause costly damage.",
    modelAdvice: "Share whether the key is locked inside, lost, broken, not detected or the remote battery appears weak.",
    checks: [
      ["Key situation", "Explain whether the key is inside the car, lost, broken or not detected by the vehicle."],
      ["Vehicle details", "Share the make, model, model year and key type if known."],
      ["Ownership details", "Keep vehicle identification or ownership proof available when assistance is requested."]
    ]
  },
  "stepney-change": {
    scope: "A spare-wheel change depends on a usable stepney, wheel tools, wheel condition and a stable place to lift the car.",
    safety: "Do not stand on the traffic side of the vehicle or attempt to use a jack on a slope, soft ground or an unsafe highway lane.",
    modelAdvice: "Share whether the spare wheel and factory toolkit are present and whether any wheel nut is damaged or locked.",
    checks: [
      ["Tyre condition", "Describe whether the tyre is punctured, torn, off the rim or affected by wheel damage."],
      ["Spare and tools", "Confirm whether the stepney, jack and wheel spanner are available."],
      ["Safe position", "Share the road surface, traffic conditions and exact vehicle location."]
    ]
  },
  "car-mechanic": {
    scope: "Roadside diagnosis is intended for starting trouble, warning lights, overheating and minor faults; major repairs may require towing.",
    safety: "Stop driving if the temperature warning is high, brakes feel unsafe, oil pressure is low or fluid is leaking heavily.",
    modelAdvice: "Share the warning lights, sounds, smells and events immediately before the fault appeared.",
    checks: [
      ["Symptoms", "Describe warning lights, unusual sounds, smells, leaks and whether the engine starts."],
      ["Recent events", "Mention recent repairs, battery replacement, overheating, water exposure or an impact."],
      ["Vehicle details", "Share the make, model, model year, fuel type and transmission."]
    ]
  },
  "roadside-assistance": {
    scope: "The first call is used to identify whether the safest response is a jump start, battery replacement, towing, fuel help, stepney change, lockout help or mechanic visit.",
    safety: "Turn on hazard lights, move away from active traffic when possible and avoid standing between the vehicle and moving traffic.",
    modelAdvice: "Share the vehicle model, exact symptom, warning lights and whether the car can roll, steer or start.",
    checks: [
      ["Immediate problem", "Describe what happened and whether the vehicle can start, steer, roll or move safely."],
      ["Exact position", "Share a live location, road direction, nearest landmark and parking access details."],
      ["Vehicle details", "Share the make, model, model year, fuel type and transmission."]
    ]
  }
};

const brandSeoServiceSlugs = new Set([
  "new-battery-sale",
  "battery-jump-start",
  "towing-service",
  "car-mechanic",
  "roadside-assistance"
]);

const brandSeoAreaSlugs = new Set([
  "south-mumbai",
  "colaba",
  "fort",
  "churchgate",
  "nariman-point",
  "lower-parel",
  "bandra-west",
  "bandra-east",
  "bkc",
  "andheri-east",
  "andheri-west",
  "chakala",
  "marol",
  "powai",
  "kurla",
  "chembur",
  "ghatkopar-east",
  "thane-west",
  "vashi",
  "airoli"
]);

const carBrands = [
  brand("maruti-suzuki", "Maruti Suzuki", ["Swift", "Baleno", "WagonR", "Dzire", "Ertiga"]),
  brand("hyundai", "Hyundai", ["i20", "Creta", "Venue", "Verna", "Grand i10"]),
  brand("tata", "Tata", ["Nexon", "Punch", "Tiago", "Altroz", "Harrier"]),
  brand("mahindra", "Mahindra", ["Scorpio", "XUV700", "XUV300", "Bolero", "Thar"]),
  brand("honda", "Honda", ["City", "Amaze", "Jazz", "WR-V", "Elevate"]),
  brand("toyota", "Toyota", ["Innova", "Fortuner", "Glanza", "Urban Cruiser", "Etios"]),
  brand("kia", "Kia", ["Seltos", "Sonet", "Carens", "Carnival"]),
  brand("mg", "MG", ["Hector", "Astor", "ZS EV", "Gloster"]),
  brand("skoda", "Skoda", ["Rapid", "Slavia", "Kushaq", "Octavia"]),
  brand("volkswagen", "Volkswagen", ["Polo", "Vento", "Virtus", "Taigun"]),
  brand("renault", "Renault", ["Kwid", "Kiger", "Triber", "Duster"]),
  brand("nissan", "Nissan", ["Magnite", "Sunny", "Terrano", "Micra"]),
  brand("ford", "Ford", ["EcoSport", "Figo", "Endeavour", "Aspire"]),
  brand("chevrolet", "Chevrolet", ["Beat", "Spark", "Cruze", "Enjoy"]),
  brand("mercedes-benz", "Mercedes-Benz", ["C-Class", "E-Class", "GLA", "GLC"]),
  brand("bmw", "BMW", ["3 Series", "5 Series", "X1", "X3"]),
  brand("audi", "Audi", ["A3", "A4", "Q3", "Q5"]),
  brand("jeep", "Jeep", ["Compass", "Meridian", "Wrangler"]),
  brand("fiat", "Fiat", ["Punto", "Linea", "Avventura"]),
  brand("citroen", "Citroen", ["C3", "C3 Aircross", "C5 Aircross"])
];

const priorityCarBrands = carBrands.slice(0, 10);

const areas = [
  area("south-mumbai", "South Mumbai", "400001-400010", "South Mumbai", ["Fort", "Colaba", "Churchgate", "Marine Lines", "Nariman Point"], ["Marine Drive", "P D'Mello Road", "Free Press Journal Marg"], "business district parking, station roads and late-night office exits"),
  area("colaba", "Colaba", "400005", "South Mumbai", ["Gateway of India", "Colaba Causeway", "Cuffe Parade", "Sassoon Dock"], ["Shahid Bhagat Singh Road", "Nathalal Parekh Marg"], "tourist traffic, hotel parking and narrow market lanes"),
  area("cuffe-parade", "Cuffe Parade", "400005", "South Mumbai", ["World Trade Centre", "Maker Towers", "Colaba", "Backbay"], ["Captain Prakash Pethe Marg", "GD Somani Marg"], "office towers, residential parking and late-night exits"),
  area("fort", "Fort", "400001", "South Mumbai", ["Flora Fountain", "Horniman Circle", "CST", "Ballard Estate"], ["DN Road", "MG Road", "P D'Mello Road"], "dense office streets, station movement and basement parking"),
  area("cst", "CST", "400001", "South Mumbai", ["Chhatrapati Shivaji Terminus", "Fort", "Crawford Market", "Ballard Estate"], ["DN Road", "P D'Mello Road", "JJ Flyover"], "railway station traffic, office rush and tight pickup points"),
  area("ballard-estate", "Ballard Estate", "400001", "South Mumbai", ["Ballard Pier", "Fort", "CST", "Mumbai Port"], ["P D'Mello Road", "Sprott Road"], "port-side routes, commercial parking and slow traffic corridors"),
  area("churchgate", "Churchgate", "400020", "South Mumbai", ["Churchgate Station", "Oval Maidan", "Eros", "Marine Lines"], ["Maharshi Karve Road", "Veer Nariman Road"], "station roads, college parking and business district exits"),
  area("marine-lines", "Marine Lines", "400020", "South Mumbai", ["Marine Drive", "Churchgate", "Charni Road", "Girgaon Chowpatty"], ["Marine Drive", "Princess Street Flyover"], "coastal traffic, event parking and evening breakdowns"),
  area("nariman-point", "Nariman Point", "400021", "South Mumbai", ["NCPA", "Mantralaya", "Marine Drive", "Churchgate"], ["Free Press Journal Marg", "Madame Cama Road"], "corporate parking, office towers and sea-facing roads"),
  area("mantralaya", "Mantralaya", "400032", "South Mumbai", ["Mantralaya", "Nariman Point", "Churchgate", "Marine Drive"], ["Madame Cama Road", "Maharshi Karve Road"], "government office parking, coastal roads and official vehicle routes"),
  area("kalbadevi", "Kalbadevi", "400002", "South Mumbai", ["Zaveri Bazaar", "Bhuleshwar", "Crawford Market", "Marine Lines"], ["Kalbadevi Road", "Princess Street"], "market lanes, older buildings and crowded parking"),
  area("crawford-market", "Crawford Market", "400003", "South Mumbai", ["Crawford Market", "CST", "Masjid Bunder", "Kalbadevi"], ["Lokmanya Tilak Marg", "JJ Flyover"], "market traffic, loading lanes and narrow turns"),
  area("masjid-bunder", "Masjid Bunder", "400003", "South Mumbai", ["Masjid Station", "Crawford Market", "Mandvi", "Pydhonie"], ["Mohammed Ali Road", "P D'Mello Road"], "market pickup points, port roads and evening congestion"),
  area("mandvi", "Mandvi", "400003", "South Mumbai", ["Mandvi", "Masjid Bunder", "Pydhonie", "Crawford Market"], ["Mohammed Ali Road", "P D'Mello Road"], "trading lanes, loading points and compact market parking"),
  area("pydhonie", "Pydhonie", "400003", "South Mumbai", ["Pydhonie", "Bhendi Bazaar", "Masjid Bunder", "Crawford Market"], ["Mohammed Ali Road", "SVP Road"], "crowded market roads, narrow turns and evening congestion"),
  area("bhendi-bazaar", "Bhendi Bazaar", "400003", "South Mumbai", ["Bhendi Bazaar", "Dongri", "Pydhonie", "Crawford Market"], ["Mohammed Ali Road", "JJ Flyover"], "market routes, older buildings and tight roadside pickup points"),
  area("dongri", "Dongri", "400009", "South Mumbai", ["Dongri", "Umerkhadi", "Mazgaon", "Bhendi Bazaar"], ["JJ Flyover", "Nesbit Road"], "narrow residential lanes, port-side roads and central market traffic"),
  area("girgaon", "Girgaon", "400004", "South Mumbai", ["Girgaon Chowpatty", "Charni Road", "Opera House", "Kalbadevi"], ["SVP Road", "Marine Drive"], "coastal parking, society lanes and festival traffic"),
  area("charni-road", "Charni Road", "400004", "South Mumbai", ["Charni Road Station", "Girgaon", "Marine Lines", "Opera House"], ["Maharshi Karve Road", "SVP Road"], "station roads, residential lanes and beach-side movement"),
  area("opera-house", "Opera House", "400004", "South Mumbai", ["Royal Opera House", "Girgaon", "Grant Road", "Charni Road"], ["SVP Road", "Lamington Road"], "market parking, theatre-area traffic and compact lanes"),
  area("grant-road", "Grant Road", "400007", "South Mumbai", ["Grant Road Station", "Lamington Road", "Opera House", "Tardeo"], ["Lamington Road", "Nana Chowk"], "electronics market traffic, station roads and older car parking"),
  area("lamington-road", "Lamington Road", "400007", "South Mumbai", ["Lamington Road", "Grant Road", "Opera House", "Mumbai Central"], ["Lamington Road", "DB Marg"], "electronics market parking, repair lanes and station traffic"),
  area("nana-chowk", "Nana Chowk", "400007", "South Mumbai", ["Nana Chowk", "Grant Road", "Tardeo", "Opera House"], ["Nana Chowk Road", "Lamington Road"], "junction traffic, building parking and quick roadside stops"),
  area("mumbai-central", "Mumbai Central", "400008", "South Mumbai", ["Mumbai Central Station", "Nagpada", "Tardeo", "Byculla"], ["Bellasis Road", "JJ Flyover"], "station rush, taxi corridors and long-stop parking"),
  area("nagpada", "Nagpada", "400008", "South Mumbai", ["Nagpada", "Mumbai Central", "Byculla", "Agripada"], ["Bellasis Road", "JJ Flyover"], "dense residential roads, taxi routes and late-night traffic"),
  area("agripada", "Agripada", "400011", "South Mumbai", ["Agripada", "Mumbai Central", "Mahalaxmi", "Byculla"], ["Dr Anandrao Nair Road", "Arthur Road"], "hospital roads, society parking and central Mumbai lanes"),
  area("tardeo", "Tardeo", "400034", "South Mumbai", ["Tardeo Road", "Haji Ali", "Mumbai Central", "Mahalaxmi"], ["Tardeo Road", "Dr E Moses Road"], "uphill roads, office buildings and residential towers"),
  area("haji-ali", "Haji Ali", "400034", "Central Mumbai", ["Haji Ali", "Tardeo", "Mahalaxmi", "Worli"], ["Lala Lajpatrai Marg", "Dr E Moses Road"], "coastal junction traffic, flyover exits and premium tower parking"),
  area("mahalaxmi", "Mahalaxmi", "400011", "Central Mumbai", ["Mahalaxmi Racecourse", "Haji Ali", "Lower Parel", "Byculla"], ["Dr E Moses Road", "Keshavrao Khadye Marg"], "racecourse traffic, flyovers and parking exits"),
  area("byculla", "Byculla", "400008", "Central Mumbai", ["Byculla Station", "Mahalaxmi", "Mazgaon", "Rani Baug"], ["Dr Babasaheb Ambedkar Road", "JJ Flyover"], "station roads, older buildings and central Mumbai routes"),
  area("mazgaon", "Mazgaon", "400010", "Central Mumbai", ["Mazgaon Dock", "Byculla", "Darukhana", "Reay Road"], ["Nesbit Road", "P D'Mello Road"], "dock roads, commercial lanes and mixed traffic"),
  area("darukhana", "Darukhana", "400010", "Central Mumbai", ["New Tank Bandar Road", "Reay Road", "Mazgaon", "Cotton Green"], ["New Tank Bandar Road", "P D'Mello Road"], "workshop roads, parking sheds and industrial lanes"),
  area("reay-road", "Reay Road", "400010", "Central Mumbai", ["Reay Road Station", "Darukhana", "Cotton Green", "Mazgaon"], ["Barrister Nath Pai Road", "P D'Mello Road"], "industrial routes, port-side turns and station access"),
  area("parel", "Parel", "400012", "Central Mumbai", ["Parel Station", "Lalbaug", "Lower Parel", "Dadar"], ["Dr Babasaheb Ambedkar Road", "NM Joshi Marg"], "office towers, hospital routes and central traffic"),
  area("lalbaug", "Lalbaug", "400012", "Central Mumbai", ["Lalbaug Market", "Parel", "Byculla", "Cotton Green"], ["Dr BA Road", "Ganesh Gully"], "festival routes, market lanes and building parking"),
  area("lower-parel", "Lower Parel", "400013", "Central Mumbai", ["Phoenix Mills", "Kamala Mills", "Worli", "Prabhadevi"], ["Senapati Bapat Marg", "NM Joshi Marg"], "office towers, mall basements and evening traffic"),
  area("elphinstone-road", "Elphinstone Road", "400013", "Central Mumbai", ["Elphinstone Road", "Lower Parel", "Prabhadevi", "Parel"], ["Senapati Bapat Marg", "NM Joshi Marg"], "office roads, mill compounds and central railway access"),
  area("worli", "Worli", "400018", "Central Mumbai", ["Worli Sea Face", "Haji Ali", "Lower Parel", "Prabhadevi"], ["Annie Besant Road", "Worli Sea Link approach"], "sea link routes, corporate parking and flyover exits"),
  area("worli-sea-face", "Worli Sea Face", "400030", "Central Mumbai", ["Worli Sea Face", "Haji Ali", "Prabhadevi", "Sea Link"], ["Worli Sea Face Road", "Annie Besant Road"], "coastal parking, sea-link feeder routes and evening traffic"),
  area("worli-naka", "Worli Naka", "400018", "Central Mumbai", ["Worli Naka", "Lower Parel", "Haji Ali", "Prabhadevi"], ["Dr E Moses Road", "Annie Besant Road"], "junction traffic, commercial parking and flyover movement"),
  area("prabhadevi", "Prabhadevi", "400025", "Central Mumbai", ["Siddhivinayak Temple", "Worli", "Dadar", "Lower Parel"], ["Veer Savarkar Marg", "Kakasaheb Gadgil Marg"], "temple traffic, society towers and central routes"),
  area("dadar-east", "Dadar East", "400014", "Central Mumbai", ["Dadar TT", "Parel", "Matunga", "Hindmata"], ["Dr BA Road", "Eastern Express Highway connector"], "station crowd, market roads and central junctions"),
  area("hindmata", "Hindmata", "400014", "Central Mumbai", ["Hindmata", "Dadar East", "Parel", "Lalbaug"], ["Dr BA Road", "Dadasaheb Phalke Road"], "market roads, bridge traffic and central station movement"),
  area("dadar-tt", "Dadar TT", "400014", "Central Mumbai", ["Dadar TT", "Dadar East", "Matunga", "Sion"], ["Dr BA Road", "Tilak Road"], "busy junctions, taxi routes and central railway access"),
  area("dadar-west", "Dadar West", "400028", "Central Mumbai", ["Shivaji Park", "Dadar Station", "Prabhadevi", "Mahim"], ["Gokhale Road", "Senapati Bapat Marg"], "market parking, station exits and residential lanes"),
  area("shivaji-park", "Shivaji Park", "400028", "Central Mumbai", ["Shivaji Park", "Dadar West", "Prabhadevi", "Mahim"], ["Keluskar Road", "Lady Jamshedji Road"], "residential parking, ground-side roads and evening traffic"),
  area("matunga", "Matunga", "400019", "Central Mumbai", ["Matunga Station", "Dadar", "Sion", "King's Circle"], ["Dr BA Road", "Lakhamsi Nappu Road"], "college roads, station lanes and central traffic"),
  area("kings-circle", "King's Circle", "400019", "Central Mumbai", ["King's Circle", "Matunga", "Sion", "Wadala"], ["Dr BA Road", "Lady Jamshedji Road"], "college traffic, garden-side roads and residential parking"),
  area("sion", "Sion", "400022", "Central Mumbai", ["Sion Circle", "Sion Hospital", "Kurla", "Matunga"], ["Eastern Express Highway", "Sion-Panvel Highway"], "highway connectors, hospital routes and flyover traffic"),
  area("chunabhatti", "Chunabhatti", "400022", "Central Mumbai", ["Chunabhatti", "Sion", "BKC Connector", "Kurla"], ["Sion-Trombay Road", "Eastern Express Highway"], "connector routes, society parking and highway-side stops"),
  area("wadala", "Wadala", "400031", "Central Mumbai", ["Wadala Station", "Sion", "Matunga", "Sewri"], ["Rafi Ahmed Kidwai Road", "Eastern Freeway connector"], "truck routes, station roads and society parking"),
  area("sewri", "Sewri", "400015", "Central Mumbai", ["Sewri Station", "Cotton Green", "Wadala", "Eastern Freeway"], ["Sewri-Chembur Road", "Eastern Freeway"], "industrial lanes, freeway access and parking sheds"),
  area("cotton-green", "Cotton Green", "400033", "Central Mumbai", ["Cotton Green Station", "Reay Road", "Lalbaug", "Sewri"], ["Barrister Nath Pai Road", "Dr BA Road"], "warehouse routes, station roads and central lanes"),
  area("mahim", "Mahim", "400016", "Western Mumbai", ["Mahim Causeway", "Bandra", "Dadar West", "Sion"], ["Lady Jamshedji Road", "Mahim Causeway"], "causeway traffic, station access and sea-link feeder routes"),
  area("bandra-west", "Bandra West", "400050", "Western Mumbai", ["Linking Road", "Hill Road", "Carter Road", "Bandstand"], ["SV Road", "Turner Road"], "shopping streets, restaurant parking and coastal traffic"),
  area("bandra-east", "Bandra East", "400051", "Western Mumbai", ["Bandra Station", "BKC", "Kalanagar", "Kurla"], ["Western Express Highway", "BKC Connector"], "office traffic, station roads and highway exits"),
  area("bkc", "BKC", "400051", "Western Mumbai", ["Bandra Kurla Complex", "Jio World Drive", "MCA Club", "Kalina"], ["BKC Road", "BKC Connector"], "corporate parking, event exits and late-night office calls"),
  area("kalina", "Kalina", "400098", "Western Mumbai", ["Kalina", "BKC", "Santacruz East", "Vakola"], ["CST Road", "BKC Connector"], "university roads, office parking and airport-side traffic"),
  area("vakola", "Vakola", "400055", "Western Mumbai", ["Vakola", "Santacruz East", "Kalina", "BKC"], ["Western Express Highway", "CST Road"], "highway traffic, airport-side lanes and residential parking"),
  area("khar", "Khar", "400052", "Western Mumbai", ["Khar Station", "Bandra", "Santacruz", "Linking Road"], ["SV Road", "16th Road"], "residential towers, station roads and shopping lanes"),
  area("santacruz", "Santacruz", "400054", "Western Mumbai", ["Santacruz Station", "Kalina", "Juhu", "Vile Parle"], ["SV Road", "Western Express Highway"], "airport-side traffic, station roads and residential parking"),
  area("juhu", "Juhu", "400049", "Western Mumbai", ["Juhu Beach", "JVPD", "Vile Parle", "Santacruz"], ["Juhu Tara Road", "Gulmohar Road"], "beach traffic, bungalow lanes and evening congestion"),
  area("jvpd", "JVPD", "400049", "Western Mumbai", ["JVPD", "Juhu", "Vile Parle", "Andheri West"], ["Gulmohar Road", "Juhu Tara Road"], "premium society lanes, beach routes and late-night parking calls"),
  area("irla", "Irla", "400056", "Western Mumbai", ["Irla", "Vile Parle West", "Juhu", "Andheri West"], ["SV Road", "Gulmohar Road"], "shopping lanes, station traffic and residential parking"),
  area("vile-parle", "Vile Parle", "400057", "Western Mumbai", ["Vile Parle Station", "Airport", "Juhu", "Andheri"], ["SV Road", "Western Express Highway"], "airport routes, station lanes and residential parking"),
  area("mumbai-airport", "Mumbai Airport", "400099", "Western Mumbai", ["T1 Domestic Airport", "T2 International Airport", "Sahar", "Marol"], ["Sahar Road", "Western Express Highway"], "airport pickups, hotel parking and late-night travel"),
  area("sahar", "Sahar", "400099", "Western Mumbai", ["Sahar Village", "T2 Airport", "Marol", "Andheri East"], ["Sahar Road", "Andheri-Kurla Road"], "airport access roads, hotel basements and night breakdowns"),
  area("andheri-east", "Andheri East", "400059", "Western Mumbai", ["Marol", "MIDC", "Chakala", "Sahar"], ["Andheri-Kurla Road", "Western Express Highway"], "industrial estates, airport traffic and office parking"),
  area("chakala", "Chakala", "400093", "Western Mumbai", ["Chakala", "Andheri East", "MIDC", "JB Nagar"], ["Andheri-Kurla Road", "Western Express Highway"], "metro routes, office parking and highway access"),
  area("jb-nagar", "JB Nagar", "400059", "Western Mumbai", ["JB Nagar", "Chakala", "Andheri East", "Airport Road"], ["Andheri-Kurla Road", "Airport Road Metro"], "airport road traffic, office lanes and hotel parking"),
  area("andheri-west", "Andheri West", "400053", "Western Mumbai", ["DN Nagar", "Lokhandwala", "Versova", "Oshiwara"], ["JP Road", "Link Road"], "media offices, market lanes and residential towers"),
  area("lokhandwala-andheri", "Lokhandwala Andheri", "400053", "Western Mumbai", ["Lokhandwala Complex", "Andheri West", "Oshiwara", "Versova"], ["New Link Road", "Lokhandwala Road"], "society towers, market streets and media office parking"),
  area("oshiwara", "Oshiwara", "400102", "Western Mumbai", ["Oshiwara", "Andheri West", "Lokhandwala", "Jogeshwari"], ["New Link Road", "SV Road"], "link-road traffic, residential towers and commercial parking"),
  area("four-bungalows", "Four Bungalows", "400053", "Western Mumbai", ["Four Bungalows", "Andheri West", "DN Nagar", "Versova"], ["JP Road", "New Link Road"], "metro roads, society lanes and evening traffic"),
  area("seven-bungalows", "Seven Bungalows", "400061", "Western Mumbai", ["Seven Bungalows", "Versova", "Andheri West", "Yari Road"], ["JP Road", "Yari Road"], "coastal lanes, society parking and late-night traffic"),
  area("marol", "Marol", "400059", "Western Mumbai", ["Marol Naka", "Saki Naka", "Airport", "Andheri East"], ["Andheri-Kurla Road", "Military Road"], "hotel parking, airport-side roads and office routes"),
  area("midc-andheri", "MIDC Andheri", "400093", "Western Mumbai", ["MIDC", "Seepz", "Chakala", "Andheri East"], ["Mahakali Caves Road", "Andheri-Kurla Road"], "industrial parking, business parks and tight internal roads"),
  area("seepz", "SEEPZ", "400096", "Western Mumbai", ["SEEPZ", "MIDC Andheri", "Powai", "Marol"], ["JVLR", "Mahakali Caves Road"], "business park parking, security gates and office route breakdowns"),
  area("mahakali-caves", "Mahakali Caves", "400093", "Western Mumbai", ["Mahakali Caves", "MIDC Andheri", "Chakala", "Jogeshwari"], ["Mahakali Caves Road", "JVLR"], "office routes, hill-side roads and industrial parking"),
  area("dn-nagar", "DN Nagar", "400053", "Western Mumbai", ["DN Nagar Metro", "Andheri West", "Versova", "Lokhandwala"], ["JP Road", "New Link Road"], "metro roads, society parking and evening traffic"),
  area("versova", "Versova", "400061", "Western Mumbai", ["Versova Beach", "Yari Road", "DN Nagar", "Andheri West"], ["JP Road", "Yari Road"], "coastal lanes, residential parking and late-night routes"),
  area("yari-road", "Yari Road", "400061", "Western Mumbai", ["Yari Road", "Versova", "Seven Bungalows", "Andheri West"], ["Yari Road", "JP Road"], "coastal society lanes, beach-side parking and night calls"),
  area("saki-naka", "Saki Naka", "400072", "Western Mumbai", ["Saki Naka Junction", "Marol", "Powai", "Kurla"], ["Andheri-Kurla Road", "Saki Vihar Road"], "junction traffic, commercial lanes and airport connectors"),
  area("chandivali", "Chandivali", "400072", "Eastern Mumbai", ["Chandivali", "Powai", "Saki Naka", "Hiranandani"], ["Saki Vihar Road", "JVLR"], "office parks, residential towers and hill-side roads"),
  area("asalpha", "Asalpha", "400084", "Eastern Mumbai", ["Asalpha", "Ghatkopar West", "Saki Naka", "Andheri-Ghatkopar Link Road"], ["Andheri-Ghatkopar Link Road", "LBS Marg"], "steep lanes, metro roads and link-road breakdowns"),
  area("kurla", "Kurla", "400070", "Eastern Mumbai", ["Kurla Station", "Phoenix Marketcity", "BKC Connector", "Saki Naka"], ["LBS Marg", "CST Road"], "market roads, mall parking and connector traffic"),
  area("chembur", "Chembur", "400071", "Eastern Mumbai", ["Chembur Station", "Tilak Nagar", "Sion", "Eastern Freeway"], ["Eastern Express Highway", "VN Purav Marg"], "freeway routes, society parking and station roads"),
  area("tilak-nagar", "Tilak Nagar", "400089", "Eastern Mumbai", ["Tilak Nagar Station", "Chembur", "Kurla", "Sion"], ["Santacruz-Chembur Link Road", "Shell Colony Road"], "residential lanes, station roads and link-road traffic"),
  area("govandi", "Govandi", "400088", "Eastern Mumbai", ["Govandi", "Chembur", "Deonar", "Mankhurd"], ["Sion-Trombay Road", "VN Purav Marg"], "station routes, highway connectors and residential parking"),
  area("deonar", "Deonar", "400088", "Eastern Mumbai", ["Deonar", "Govandi", "Chembur", "Trombay"], ["Sion-Trombay Road", "Eastern Freeway connector"], "freeway access, depot routes and residential roads"),
  area("mankhurd", "Mankhurd", "400043", "Eastern Mumbai", ["Mankhurd", "Govandi", "Vashi Bridge", "Trombay"], ["Sion-Panvel Highway", "Mankhurd Link Road"], "Vashi bridge approach, highway stops and station traffic"),
  area("trombay", "Trombay", "400088", "Eastern Mumbai", ["Trombay", "Chembur", "Deonar", "Mankhurd"], ["Sion-Trombay Road", "Eastern Freeway"], "industrial routes, freeway access and long roadside stops"),
  area("ghatkopar-east", "Ghatkopar East", "400077", "Eastern Mumbai", ["Pant Nagar", "Ghatkopar Station", "Chembur", "Vidyavihar"], ["LBS Marg", "Eastern Express Highway"], "station traffic, society roads and highway access"),
  area("ghatkopar-west", "Ghatkopar West", "400086", "Eastern Mumbai", ["LBS Marg", "Vidyavihar", "Asalpha", "Saki Naka"], ["LBS Marg", "Andheri-Ghatkopar Link Road"], "link-road traffic, market parking and hill-side roads"),
  area("vidyavihar", "Vidyavihar", "400086", "Eastern Mumbai", ["Vidyavihar Station", "Ghatkopar", "Kurla", "Somaiya"], ["LBS Marg", "Rajawadi Road"], "campus roads, station lanes and residential parking"),
  area("powai", "Powai", "400076", "Eastern Mumbai", ["Hiranandani", "IIT Bombay", "Chandivali", "JVLR"], ["JVLR", "Saki Vihar Road"], "office parks, lake-side roads and hill traffic"),
  area("vikhroli", "Vikhroli", "400079", "Eastern Mumbai", ["Vikhroli Station", "Godrej Colony", "Kanjurmarg", "Powai"], ["Eastern Express Highway", "LBS Marg"], "highway access, office parking and society lanes"),
  area("kanjurmarg", "Kanjurmarg", "400042", "Eastern Mumbai", ["Kanjurmarg Station", "Powai", "Vikhroli", "Bhandup"], ["LBS Marg", "JVLR"], "office zones, station roads and highway connectors"),
  area("bhandup", "Bhandup", "400078", "Eastern Mumbai", ["Bhandup Station", "Nahur", "Mulund", "Kanjurmarg"], ["LBS Marg", "Eastern Express Highway"], "industrial roads, station traffic and residential pockets"),
  area("nahur", "Nahur", "400080", "Thane Corridor", ["Nahur Station", "Mulund", "Bhandup", "Eastern Express Highway"], ["LBS Marg", "Goregaon-Mulund Link Road"], "link-road routes, station lanes and parking exits"),
  area("mulund-west", "Mulund West", "400080", "Thane Corridor", ["Mulund Station", "Nahur", "Johnson and Johnson", "Thane"], ["LBS Marg", "Eastern Express Highway"], "highway movement, society towers and commercial parking"),
  area("mulund-east", "Mulund East", "400081", "Thane Corridor", ["Mulund East Station", "Thane", "Nahur", "Eastern Express Highway"], ["Eastern Express Highway", "Gavanpada Road"], "residential lanes, highway access and station roads"),
  area("thane-west", "Thane West", "400601", "Thane Corridor", ["Naupada", "Majiwada", "Ghodbunder Road", "Teen Hath Naka"], ["Eastern Express Highway", "Ghodbunder Road"], "highway traffic, mall parking and large residential towers"),
  area("thane-east", "Thane East", "400603", "Thane Corridor", ["Kopri", "Thane Station", "Mulund East", "Airoli"], ["Eastern Express Highway", "Kopri Bridge"], "station access, bridge routes and residential pockets"),
  area("naupada", "Naupada", "400602", "Thane Corridor", ["Naupada", "Thane Station", "Panch Pakhadi", "Teen Hath Naka"], ["Gokhale Road", "Eastern Express Highway"], "station-side roads, market parking and office exits"),
  area("panch-pakhadi", "Panch Pakhadi", "400602", "Thane Corridor", ["Panch Pakhadi", "Naupada", "Teen Hath Naka", "Thane West"], ["Eastern Express Highway", "Gokhale Road"], "office roads, tower parking and Thane station access"),
  area("teen-hath-naka", "Teen Hath Naka", "400604", "Thane Corridor", ["Teen Hath Naka", "Naupada", "Wagle Estate", "Thane West"], ["Eastern Express Highway", "LBS Marg"], "junction traffic, highway breakdowns and office parking"),
  area("majiwada", "Majiwada", "400601", "Thane Corridor", ["Majiwada Junction", "Viviana Mall", "Kapurbawdi", "Thane West"], ["Eastern Express Highway", "Ghodbunder Road"], "junction traffic, mall basements and highway breakdowns"),
  area("kapurbawdi", "Kapurbawdi", "400607", "Thane Corridor", ["Kapurbawdi", "Majiwada", "Manpada", "Thane West"], ["Ghodbunder Road", "Eastern Express Highway"], "flyover traffic, mall routes and residential tower parking"),
  area("manpada-thane", "Manpada Thane", "400607", "Thane Corridor", ["Manpada", "Kapurbawdi", "Ghodbunder Road", "Thane West"], ["Ghodbunder Road", "Pokhran Road"], "residential towers, highway connectors and evening congestion"),
  area("vartak-nagar", "Vartak Nagar", "400606", "Thane Corridor", ["Vartak Nagar", "Pokhran Road", "Thane West", "Majiwada"], ["Pokhran Road", "Eastern Express Highway"], "society parking, hill-side roads and Thane commuter routes"),
  area("kolshet", "Kolshet", "400607", "Thane Corridor", ["Kolshet", "Kapurbawdi", "Manpada", "Thane West"], ["Kolshet Road", "Ghodbunder Road"], "tower parking, internal roads and highway access"),
  area("wagle-estate", "Wagle Estate", "400604", "Thane Corridor", ["Wagle Estate", "Teen Hath Naka", "Mulund", "Thane West"], ["LBS Marg", "Eastern Express Highway"], "industrial roads, office parking and commercial lanes"),
  area("kalwa", "Kalwa", "400605", "Thane Corridor", ["Kalwa Station", "Thane", "Airoli", "Parsik Nagar"], ["Kalwa Bridge", "Thane-Belapur Road"], "bridge traffic, station roads and residential towers"),
  area("airoli", "Airoli", "400708", "Vashi Corridor", ["Airoli Bridge", "Airoli Station", "Rabale", "Mulund"], ["Thane-Belapur Road", "Airoli Bridge Road"], "bridge routes, office parks and highway connectors"),
  area("rabale", "Rabale", "400701", "Vashi Corridor", ["Rabale", "Airoli", "Ghansoli", "Thane-Belapur Road"], ["Thane-Belapur Road", "Rabale MIDC Road"], "MIDC parking, highway connectors and office route breakdowns"),
  area("ghansoli", "Ghansoli", "400701", "Vashi Corridor", ["Ghansoli", "Rabale", "Kopar Khairane", "Airoli"], ["Thane-Belapur Road", "Palm Beach Road connector"], "station roads, office parks and residential tower parking"),
  area("kopar-khairane", "Kopar Khairane", "400709", "Vashi Corridor", ["Kopar Khairane", "Ghansoli", "Vashi", "Turbhe"], ["Thane-Belapur Road", "Palm Beach Road"], "residential roads, station access and Navi Mumbai connector traffic"),
  area("vashi", "Vashi", "400703", "Vashi Corridor", ["Vashi Station", "Palm Beach Road", "APMC Market", "Turbhe"], ["Palm Beach Road", "Sion-Panvel Highway"], "market roads, highway access and mall parking"),
  area("apmc-vashi", "APMC Vashi", "400703", "Vashi Corridor", ["APMC Market", "Vashi", "Turbhe", "Sanpada"], ["APMC Road", "Sion-Panvel Highway"], "market loading lanes, wholesale parking and early morning traffic"),
  area("turbhe", "Turbhe", "400705", "Vashi Corridor", ["Turbhe Station", "APMC", "Vashi", "Sanpada"], ["Thane-Belapur Road", "Turbhe MIDC Road"], "industrial roads, market routes and parking exits"),
  area("sanpada", "Sanpada", "400705", "Vashi Corridor", ["Sanpada Station", "Vashi", "Palm Beach Road", "Turbhe"], ["Palm Beach Road", "Sion-Panvel Highway"], "residential towers, station roads and highway-side stops"),
  area("juinagar", "Juinagar", "400705", "Vashi Corridor", ["Juinagar", "Sanpada", "Nerul", "Sion-Panvel Highway"], ["Sion-Panvel Highway", "Palm Beach Road"], "station roads, highway access and residential parking near Vashi")
];

function area(slug, name, pin, group, landmarks, roads, issue) {
  return { slug, name, pin, group, landmarks, roads, issue };
}

function brand(slug, name, models) {
  return { slug, name, models };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function slugTitle(slug) {
  return slug.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

function relativePrefix(depth) {
  return "../".repeat(depth);
}

function flatAreaServiceSlug(item, service) {
  return `${service.slug}-in-${item.slug}`;
}

function flatAreaServicePath(item, service) {
  return `/car-services/mumbai/${flatAreaServiceSlug(item, service)}/`;
}

function brandServicePath(item, service, carBrand) {
  return `/car-services/mumbai/${flatAreaServiceSlug(item, service)}/${carBrand.slug}/`;
}

function brandEnabled(service) {
  return brandSeoServiceSlugs.has(service.slug);
}

function brandPageEnabled(item, service) {
  return brandEnabled(service) && brandSeoAreaSlugs.has(item.slug);
}

function pageShell({ title, description, canonicalPath, depth, body, schema }) {
  const prefix = relativePrefix(depth);
  const canonical = `${siteUrl}${canonicalPath}`;
  return `<!doctype html>
<html lang="en-IN">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="format-detection" content="telephone=yes">
    <meta name="geo.region" content="IN-MH">
    <meta name="geo.placename" content="Mumbai">
    <link rel="canonical" href="${canonical}">
    <link rel="alternate" hreflang="en-IN" href="${canonical}">
    <link rel="icon" type="image/svg+xml" href="${prefix}logo.svg?v=realistic-20260526">
    <link rel="stylesheet" href="${prefix}styles.css?v=20260704-indexing">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Fast Mechanic">
    <meta property="og:title" content="${escapeHtml(title)}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${openGraphImage}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(title)}">
    <meta name="twitter:description" content="${escapeHtml(description)}">
    <meta name="twitter:image" content="${openGraphImage}">
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
  </head>
  <body class="silo-page">
    ${siteHeader(prefix)}
    ${body}
    ${siteFooter(prefix)}
    ${stickyActions(prefix)}
    <script>
      const menuToggle = document.querySelector("[data-menu-toggle]");
      const navLinks = document.querySelector("[data-nav-links]");
      menuToggle?.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
      });
    </script>
  </body>
</html>
`;
}

function siteHeader(prefix) {
  return `<header class="site-header">
      <nav class="nav" aria-label="Primary navigation">
        <a class="brand" href="${prefix}" aria-label="Fast Mechanic home">
          <span class="brand-mark" aria-hidden="true"><img src="${prefix}logo.svg?v=realistic-20260526" alt=""></span>
          <span>
            <strong>Fast Mechanic</strong>
            <small>Mumbai roadside rescue</small>
          </span>
        </a>
        <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" data-menu-toggle>
          <span></span><span></span><span></span>
        </button>
        <div class="nav-links" data-nav-links>
          <a href="${prefix}#services">Services</a>
          <a href="${prefix}#coverage">Mumbai Areas</a>
          <a href="${prefix}car-services/">Car Services</a>
          <a href="${prefix}car-services/mumbai/">Mumbai Hub</a>
          <a class="nav-call" href="tel:${phoneTel}">Call ${phoneDisplay}</a>
        </div>
      </nav>
    </header>`;
}

function siteFooter(prefix) {
  return `<footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <a class="brand footer-brand" href="${prefix}">
            <span class="brand-mark" aria-hidden="true"><img src="${prefix}logo.svg?v=realistic-20260526" alt=""></span>
            <span>
              <strong>Fast Mechanic</strong>
              <small>Emergency car help Mumbai</small>
            </span>
          </a>
          <p>24/7 roadside assistance for new battery sale, battery jump start, key lockout, towing, petrol delivery, stepney change and car mechanic service in Mumbai.</p>
        </div>
        <div>
          <h2>Services</h2>
          ${services.slice(0, 5).map((service) => `<a href="${prefix}car-services/mumbai/${service.slug}/">${service.name}</a>`).join("")}
        </div>
        <div>
          <h2>Area Pages</h2>
          <a href="${prefix}car-services/mumbai/south-mumbai/">South Mumbai</a>
          <a href="${prefix}car-services/mumbai/andheri-east/">Andheri East</a>
          <a href="${prefix}car-services/mumbai/thane-west/">Thane West</a>
          <a href="${prefix}car-services/mumbai/vashi/">Vashi</a>
        </div>
        <div>
          <h2>Contact</h2>
          <a href="tel:${phoneTel}">${phoneDisplay}</a>
          <a href="${prefix}fast-mechanic.vcf" download="Fast-Mechanic.vcf">Save Contact</a>
          <span>${address}</span>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <span>Copyright 2026 Fast Mechanic. All rights reserved.</span>
          <a href="tel:${phoneTel}">Emergency Call</a>
        </div>
      </div>
    </footer>`;
}

function stickyActions(prefix) {
  return `<div class="sticky-call" aria-label="Sticky contact actions">
      <a href="tel:${phoneTel}">Call ${phoneDisplay}</a>
      <a href="${prefix}fast-mechanic.vcf" download="Fast-Mechanic.vcf">Save Contact</a>
      <a class="whatsapp-chat" href="${whatsappUrl}" target="_blank" rel="noopener">
        <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.03 3.2A12.64 12.64 0 0 0 5.2 22.34L3.8 28.8l6.61-1.5A12.64 12.64 0 1 0 16.03 3.2Zm0 22.93c-1.83 0-3.62-.49-5.18-1.42l-.37-.22-3.92.89.83-3.84-.24-.39a10.3 10.3 0 1 1 8.88 4.98Zm5.66-7.72c-.31-.16-1.84-.91-2.12-1.01-.28-.1-.49-.16-.7.16-.2.31-.8 1.01-.98 1.22-.18.2-.36.23-.67.08-.31-.16-1.31-.48-2.5-1.54-.92-.82-1.55-1.84-1.73-2.15-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.2-.31.31-.52.1-.2.05-.39-.03-.54-.08-.16-.7-1.69-.96-2.31-.25-.6-.51-.52-.7-.53h-.6c-.2 0-.54.08-.82.39-.28.31-1.08 1.06-1.08 2.59s1.11 3 1.27 3.21c.16.2 2.19 3.34 5.3 4.68.74.32 1.32.51 1.77.65.74.24 1.42.2 1.96.12.6-.09 1.84-.75 2.1-1.48.26-.72.26-1.34.18-1.48-.08-.13-.28-.2-.6-.36Z"/></svg>
        <span>Chat WhatsApp</span>
      </a>
    </div>`;
}

function hero({ eyebrow, title, lede, breadcrumbs, depth }) {
  const prefix = relativePrefix(depth);
  return `<section class="silo-hero section">
      <div class="container silo-hero-grid">
        <div class="silo-hero-copy">
          ${breadcrumb(breadcrumbs)}
          <p class="eyebrow">${escapeHtml(eyebrow)}</p>
          <h1>${escapeHtml(title)}</h1>
          <p class="hero-lede">${escapeHtml(lede)}</p>
          <div class="hero-actions" aria-label="Primary actions">
            <a class="btn btn-primary" href="tel:${phoneTel}">Call Now</a>
            <a class="btn btn-secondary" href="${prefix}fast-mechanic.vcf" download="Fast-Mechanic.vcf">Save Contact</a>
          </div>
          <div class="trust-row" aria-label="Service highlights">
            <span>24/7 phone support</span>
            <span>Doorstep and roadside help</span>
            <span>Service area business</span>
          </div>
        </div>
        <aside class="silo-contact-card" aria-label="Fast Mechanic contact card">
          <strong>Fast Mechanic Hotline</strong>
          <a class="phone-number" href="tel:${phoneTel}">${phoneDisplay}</a>
          <span>New battery sale, battery jump start, towing, petrol delivery, key lock, stepney change and roadside mechanic assistance.</span>
          <a class="btn btn-primary" href="${whatsappUrl}" target="_blank" rel="noopener">Chat WhatsApp</a>
        </aside>
      </div>
    </section>`;
}

function breadcrumb(items) {
  return `<nav class="breadcrumb" aria-label="Breadcrumb">${items.map((item, index) => {
    if (index === 0) return `<a href="${item.href}">${escapeHtml(item.label)}</a>`;
    if (item.href) return `<span><a href="${item.href}">${escapeHtml(item.label)}</a></span>`;
    return `<span>${escapeHtml(item.label)}</span>`;
  }).join("")}</nav>`;
}

function serviceCards(prefix = "") {
  return services.map((service) => `<article class="silo-card">
        <img src="${prefix}${service.image}" alt="${escapeHtml(service.name)} illustration" loading="lazy">
        <h3>${escapeHtml(service.name)}</h3>
        <p>${escapeHtml(service.short)}</p>
        <a class="service-cta" href="tel:${phoneTel}">${escapeHtml(service.cta)}</a>
      </article>`).join("");
}

function areaDirectory(areaList, prefix = "") {
  return areaList.map((item) => `<a href="${prefix}car-services/mumbai/${item.slug}/">
      <strong>${escapeHtml(item.name)}</strong>
      <span>PIN ${escapeHtml(item.pin)} - ${escapeHtml(item.landmarks.slice(0, 3).join(", "))}</span>
      <em>View area page</em>
    </a>`).join("");
}

function serviceDirectory(prefix = "") {
  return services.map((service) => `<a href="${prefix}car-services/mumbai/${service.slug}/">
      <strong>${escapeHtml(service.name)}</strong>
      <span>${escapeHtml(service.short)}</span>
      <em>View service page</em>
    </a>`).join("");
}

function areaServiceCards(item, prefix = "") {
  return services.map((service) => `<article class="silo-card">
        <img src="${prefix}${service.image}" alt="${escapeHtml(service.name)} in ${escapeHtml(item.name)} illustration" loading="lazy">
        <h3>${escapeHtml(service.name)} in ${escapeHtml(item.name)}</h3>
        <p>${escapeHtml(service.short)}</p>
        <a class="service-cta" href="${prefix}car-services/mumbai/${flatAreaServiceSlug(item, service)}/">View ${escapeHtml(item.name)} page</a>
      </article>`).join("");
}

function areaServiceDirectory(areaList, service, prefix = "") {
  return areaList.map((item) => `<a href="${prefix}car-services/mumbai/${flatAreaServiceSlug(item, service)}/">
      <strong>${escapeHtml(service.name)} in ${escapeHtml(item.name)}</strong>
      <span>PIN ${escapeHtml(item.pin)} - ${escapeHtml(item.landmarks.slice(0, 3).join(", "))}</span>
      <em>View local service page</em>
    </a>`).join("");
}

function brandDirectory(item, service, prefix = "") {
  if (!brandPageEnabled(item, service)) return "";
  return priorityCarBrands.map((carBrand) => `<a href="${prefix}car-services/mumbai/${flatAreaServiceSlug(item, service)}/${carBrand.slug}/">
      <strong>${escapeHtml(carBrand.name)} ${escapeHtml(service.name)} in ${escapeHtml(item.name)}</strong>
      <span>Popular models: ${escapeHtml(carBrand.models.slice(0, 4).join(", "))}</span>
      <em>View car brand page</em>
    </a>`).join("");
}

function brandAreaDirectory(areaList, service, carBrand, prefix = "") {
  return areaList.map((item) => `<a href="${prefix}car-services/mumbai/${flatAreaServiceSlug(item, service)}/${carBrand.slug}/">
      <strong>${escapeHtml(carBrand.name)} ${escapeHtml(service.name)} in ${escapeHtml(item.name)}</strong>
      <span>PIN ${escapeHtml(item.pin)} - ${escapeHtml(item.landmarks.slice(0, 3).join(", "))}</span>
      <em>View nearby brand page</em>
    </a>`).join("");
}

function businessSchema({ canonicalPath, name, description, pageType = "AutoRepair", areaServed }) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "AutomotiveBusiness", "AutoRepair"],
        "@id": `${siteUrl}/#business`,
        name: "Fast Mechanic",
        url: siteUrl,
        telephone: phoneTel,
        logo: `${siteUrl}/logo.svg`,
        image: openGraphImage,
        priceRange: "Call for quote",
        description: "24/7 emergency car roadside assistance and doorstep mechanic services in Mumbai.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "New Tank Bandar Road, Darukhana, E Ward",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          postalCode: "400010",
          addressCountry: "IN"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 18.9788291,
          longitude: 72.8482657
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "00:00",
            closes: "23:59"
          }
        ],
        areaServed,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: phoneTel,
          contactType: "customer support",
          areaServed: "IN-MH",
          availableLanguage: ["English", "Hindi", "Marathi", "Urdu", "Gujarati", "Tamil"]
        },
        potentialAction: [
          { "@type": "CommunicateAction", name: "Call Fast Mechanic", target: `tel:${phoneTel}` },
          { "@type": "CommunicateAction", name: "Chat with Fast Mechanic on WhatsApp", target: whatsappUrl }
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Fast Mechanic emergency car services",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.name,
              description: service.short,
              areaServed
            }
          }))
        }
      },
      {
        "@type": pageType,
        "@id": `${siteUrl}${canonicalPath}#page`,
        name,
        url: `${siteUrl}${canonicalPath}`,
        description,
        dateModified: lastmod,
        provider: { "@id": `${siteUrl}/#business` },
        isPartOf: { "@id": `${siteUrl}/#website` }
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Fast Mechanic"
      }
    ]
  };
}

function breadcrumbSchema(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${siteUrl}${item.path}`
    }))
  };
}

function faqSchema(items) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a
      }
    }))
  };
}

function mergeSchema(base, additions) {
  base["@graph"].push(...additions);
  return base;
}

function categoryPage() {
  const canonicalPath = "/car-services/";
  const title = "Car Services in Mumbai | Fast Mechanic Roadside Assistance";
  const description = "Fast Mechanic car services in Mumbai include new battery sale, battery jump start, towing, petrol delivery, key lock, stepney change and roadside mechanic help. Call +91 70218 10153.";
  const schema = mergeSchema(
    businessSchema({
      canonicalPath,
      name: "Fast Mechanic Car Services",
      description,
      pageType: "CollectionPage",
      areaServed: areas.map((item) => item.name)
    }),
    [breadcrumbSchema([
      { label: "Home", path: "/" },
      { label: "Car Services", path: "/car-services/" }
    ])]
  );

  const body = `${hero({
    eyebrow: "Mumbai Car Services",
    title: "Car services and roadside assistance in Mumbai.",
    lede: "Use this service hub to reach emergency car help pages for Mumbai, South Mumbai, Andheri, Thane, Vashi and every named locality in the active Fast Mechanic radius.",
    breadcrumbs: [
      { label: "Home", href: "../" },
      { label: "Car Services" }
    ],
    depth: 1
  })}
    <main>
      <section class="silo-section">
        <div class="container silo-intro-grid">
          <div class="silo-copy">
            <p class="eyebrow">Service Categories</p>
            <h2>Choose the service that matches your car problem.</h2>
            <p>Open a service below for safety guidance, information to share on the call, coverage areas and direct contact options. If you are unsure which service is needed, call roadside assistance and describe the vehicle symptoms.</p>
          </div>
          <div class="silo-card-grid">${serviceCards("../")}</div>
        </div>
      </section>
      <section class="silo-section alt">
        <div class="container">
          <div class="section-head">
            <p class="eyebrow">Mumbai Service Areas</p>
            <h2>Open the Mumbai hub or go directly to a local area page.</h2>
            <p>The active radius covers South Mumbai, Central Mumbai, the Bandra-Andheri corridor, Eastern Mumbai, Thane corridor and the Vashi corridor.</p>
          </div>
          <div class="hero-actions"><a class="btn btn-primary" href="mumbai/">Open Mumbai service hub</a><a class="btn btn-dark" href="tel:${phoneTel}">Call ${phoneDisplay}</a></div>
          <div class="area-directory">${areaDirectory(areas, "../")}</div>
        </div>
      </section>
    </main>`;

  return pageShell({ title, description, keywords: "car services Mumbai, new battery sale Mumbai, car mechanic Mumbai, roadside assistance Mumbai, towing Mumbai, battery jump start Mumbai", canonicalPath, depth: 1, body, schema });
}

function cityPage() {
  const canonicalPath = "/car-services/mumbai/";
  const title = "Best Car Workshop & Doorstep Repair in Mumbai | Fast Mechanic";
  const description = "Fast Mechanic provides emergency car repair, new battery sale, roadside assistance, towing, battery jump start, petrol delivery and doorstep mechanic help across Mumbai, Andheri, Thane and Vashi.";
  const groups = [...new Set(areas.map((item) => item.group))];
  const schema = mergeSchema(
    businessSchema({
      canonicalPath,
      name: "Fast Mechanic Mumbai",
      description,
      pageType: "CollectionPage",
      areaServed: areas.map((item) => item.name)
    }),
    [
      breadcrumbSchema([
        { label: "Home", path: "/" },
        { label: "Car Services", path: "/car-services/" },
        { label: "Mumbai", path: "/car-services/mumbai/" }
      ]),
      faqSchema([
        {
          q: "Does Fast Mechanic provide roadside assistance across Mumbai?",
          a: `Yes. Fast Mechanic provides new battery sale, battery jump start, towing, petrol delivery, key lock assistance, stepney change and roadside mechanic help across the active Mumbai radius. Call ${phoneDisplay}.`
        },
        {
          q: "Which Mumbai areas are covered?",
          a: "Coverage includes South Mumbai, Central Mumbai, Bandra, Andheri, Kurla, Chembur, Powai, Ghatkopar, Mulund, Thane, Vashi and nearby corridor areas listed on this page."
        },
        {
          q: "Can I call directly from the website?",
          a: `Yes. Every page includes a tel link for ${phoneDisplay}, WhatsApp chat and a vCard download for saving the contact.`
        }
      ])
    ]
  );

  const body = `${hero({
    eyebrow: "Mumbai Car Service Hub",
    title: "Best car workshop and doorstep repair in Mumbai.",
    lede: "Fast Mechanic handles 24/7 car breakdown calls across Mumbai, from Gateway of India and Marine Drive to Bandra, Andheri, Powai, Thane and Vashi.",
    breadcrumbs: [
      { label: "Home", href: "../../" },
      { label: "Car Services", href: "../" },
      { label: "Mumbai" }
    ],
    depth: 2
  })}
    <main>
      <section class="silo-section">
        <div class="container silo-intro-grid">
          <div class="silo-copy">
            <p class="eyebrow">Mumbai Service Coverage</p>
            <h2>Doorstep and roadside car repair for Mumbai breakdown locations.</h2>
            <p>Fast Mechanic handles calls from residential towers, office basements, mall parking, railway station roads, airport routes, Eastern Express Highway, Western Express Highway, Sion-Panvel Highway and South Mumbai business districts.</p>
            <ul>
              <li>Service point: New Tank Bandar Road, Darukhana, Mumbai 400010.</li>
              <li>Active radius: South Mumbai, Andheri, Thane, Vashi and the listed connecting areas.</li>
              <li>Call directly, send the vehicle location on WhatsApp or save the Fast Mechanic contact card.</li>
            </ul>
          </div>
          <div class="silo-map-frame">
            <iframe title="Fast Mechanic Mumbai service point map" src="https://www.openstreetmap.org/export/embed.html?bbox=72.8432657%2C18.9738291%2C72.8532657%2C18.9838291&amp;layer=mapnik&amp;marker=18.9788291%2C72.8482657" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
      <section class="silo-section alt">
        <div class="container">
          <div class="section-head">
            <p class="eyebrow">Mumbai Services</p>
            <h2>Emergency service pages for Mumbai drivers.</h2>
            <p>Choose a service to see practical call details, safety guidance and the Mumbai localities currently covered.</p>
          </div>
          <div class="service-directory">${serviceDirectory("../../")}</div>
        </div>
      </section>
      ${groups.map((group) => {
        const groupAreas = areas.filter((item) => item.group === group);
        return `<section class="silo-section">
          <div class="container">
            <div class="section-head">
              <p class="eyebrow">${escapeHtml(group)}</p>
              <h2>${escapeHtml(group)} car breakdown coverage.</h2>
              <p>Open a dedicated local page for new battery sale, car mechanic, towing, jump start, petrol delivery and stepney help in each named area.</p>
            </div>
            <div class="area-directory">${areaDirectory(groupAreas, "../../")}</div>
          </div>
        </section>`;
      }).join("")}
      <section class="silo-section alt">
        <div class="container silo-cta-band">
          <p class="eyebrow">Direct Assistance</p>
          <h2>Need car help in Mumbai right now?</h2>
          <p>Call Fast Mechanic before visiting the service point so assistance can be coordinated at your exact vehicle location.</p>
          <div class="hero-actions"><a class="btn btn-primary" href="tel:${phoneTel}">Call ${phoneDisplay}</a><a class="btn btn-secondary" href="../../fast-mechanic.vcf" download="Fast-Mechanic.vcf">Save Contact</a></div>
        </div>
      </section>
    </main>`;

  return pageShell({ title, description, keywords: "car service Mumbai, new battery sale Mumbai, doorstep car repair Mumbai, roadside assistance Mumbai, car workshop Mumbai, emergency mechanic Mumbai, towing Mumbai", canonicalPath, depth: 2, body, schema });
}

function servicePage(service) {
  const canonicalPath = `/car-services/mumbai/${service.slug}/`;
  const title = `${service.name} in Mumbai | Fast Mechanic`;
  const description = `${service.name} in Mumbai from Fast Mechanic. ${service.short} Service areas include South Mumbai, Andheri, Thane and Vashi. Call ${phoneDisplay}.`;
  const guidance = serviceGuidance[service.slug];
  const schema = mergeSchema(
    businessSchema({
      canonicalPath,
      name: `${service.name} in Mumbai`,
      description,
      pageType: "Service",
      areaServed: areas.map((item) => item.name)
    }),
    [
      breadcrumbSchema([
        { label: "Home", path: "/" },
        { label: "Car Services", path: "/car-services/" },
        { label: "Mumbai", path: "/car-services/mumbai/" },
        { label: service.name, path: canonicalPath }
      ]),
      faqSchema([
        {
          q: `Is ${service.name.toLowerCase()} available in Mumbai?`,
          a: `Yes. Fast Mechanic supports ${service.name.toLowerCase()} calls across the active Mumbai radius including South Mumbai, Andheri, Thane and Vashi.`
        },
        {
          q: `How do I book ${service.name.toLowerCase()}?`,
          a: `Call ${phoneDisplay}, share your car model, exact location and nearby landmark. Fast Mechanic will guide the next step.`
        },
        {
          q: `What is the price for ${service.name.toLowerCase()}?`,
          a: service.price
        }
      ])
    ]
  );

  const topAreas = areas.filter((item) => ["South Mumbai", "Western Mumbai", "Thane Corridor", "Vashi Corridor"].includes(item.group)).slice(0, 30);
  const body = `${hero({
    eyebrow: "Mumbai Emergency Service",
    title: `${service.name} in Mumbai.`,
    lede: `${service.short} Fast Mechanic supports this service across South Mumbai, Central Mumbai, Bandra, Andheri, Powai, Mulund, Thane and Vashi.`,
    breadcrumbs: [
      { label: "Home", href: "../../../" },
      { label: "Car Services", href: "../../" },
      { label: "Mumbai", href: "../" },
      { label: service.name }
    ],
    depth: 3
  })}
    <main>
      <section class="silo-section">
        <div class="container silo-intro-grid">
          <div class="silo-copy">
            <p class="eyebrow">Service Detail</p>
            <h2>${escapeHtml(service.name)} for urgent Mumbai car breakdowns.</h2>
            <p>${escapeHtml(service.short)} ${escapeHtml(guidance.scope)}</p>
            <ul>
              <li>Call: <a href="tel:${phoneTel}">${phoneDisplay}</a></li>
              <li>WhatsApp: <a href="${whatsappUrl}" target="_blank" rel="noopener">Chat Fast Mechanic</a></li>
              <li>Service point: ${escapeHtml(address)}</li>
              <li>Pricing: ${escapeHtml(service.price)}</li>
            </ul>
          </div>
          <div class="silo-card">
            <img src="../../../${service.image}" alt="${escapeHtml(service.name)} illustration" loading="lazy">
            <h3>${escapeHtml(service.name)}</h3>
            <p>${escapeHtml(service.short)}</p>
            <a class="service-cta" href="tel:${phoneTel}">${escapeHtml(service.cta)}</a>
          </div>
        </div>
      </section>
      <section class="silo-section alt">
        <div class="container">
          <div class="section-head">
            <p class="eyebrow">Before You Call</p>
            <h2>Details that help arrange ${escapeHtml(service.name.toLowerCase())}.</h2>
            <p>${escapeHtml(guidance.safety)}</p>
          </div>
          <div class="faq-mini-grid">
            ${guidance.checks.map(([heading, text]) => `<article class="faq-mini-card"><h3>${escapeHtml(heading)}</h3><p>${escapeHtml(text)}</p></article>`).join("")}
          </div>
        </div>
      </section>
      <section class="silo-section alt">
        <div class="container">
          <div class="section-head">
            <p class="eyebrow">Where Available</p>
            <h2>${escapeHtml(service.name)} area coverage.</h2>
            <p>Choose the nearest listed locality to see landmarks, road access notes and direct contact details for that area.</p>
          </div>
          <div class="area-directory">${areaServiceDirectory(topAreas, service, "../../../")}</div>
          <a class="text-link" href="../">View complete Mumbai area directory</a>
        </div>
      </section>
      <section class="silo-section">
        <div class="container">
          <div class="section-head">
            <p class="eyebrow">Related Services</p>
            <h2>Other emergency services from Fast Mechanic.</h2>
          </div>
          <div class="service-directory">${serviceDirectory("../../../")}</div>
        </div>
      </section>
    </main>`;

  return pageShell({ title, description, keywords: `${service.name} Mumbai, ${service.intent}, Fast Mechanic, car service Mumbai, roadside assistance Mumbai`, canonicalPath, depth: 3, body, schema });
}

function areaPage(item, index) {
  const canonicalPath = `/car-services/mumbai/${item.slug}/`;
  const title = `Car Mechanic & Roadside Assistance in ${item.name} | Fast Mechanic`;
  const description = `Fast Mechanic provides new battery sale, battery jump start, towing, petrol delivery, key lock, stepney change and roadside car mechanic help in ${item.name}, Mumbai. Call ${phoneDisplay}.`;
  const nearby = nearbyAreas(item, index);
  const faqs = [
    {
      q: `Do you provide battery jump start in ${item.name}?`,
      a: `Yes. Fast Mechanic provides dead battery jump start support in ${item.name} and nearby locations including ${item.landmarks.slice(0, 3).join(", ")}.`
    },
    {
      q: `Do you sell new car batteries in ${item.name}?`,
      a: `Yes. Fast Mechanic provides new battery sale coordination in ${item.name}. Call ${phoneDisplay} with your car model, battery type if known and exact location.`
    },
    {
      q: `Can Fast Mechanic arrange towing from ${item.name}?`,
      a: `Yes. If your car cannot be moved safely from ${item.name}, call ${phoneDisplay} and share the pickup point, drop point and vehicle condition.`
    },
    {
      q: `How do I call a roadside mechanic in ${item.name}?`,
      a: `Use the Call Now button or dial ${phoneDisplay}. Share the vehicle model, issue, exact location and nearest landmark in ${item.name}.`
    }
  ];
  const schema = mergeSchema(
    businessSchema({
      canonicalPath,
      name: `Fast Mechanic ${item.name}`,
      description,
      pageType: "WebPage",
      areaServed: [item.name, ...nearby.map((areaItem) => areaItem.name)]
    }),
    [
      breadcrumbSchema([
        { label: "Home", path: "/" },
        { label: "Car Services", path: "/car-services/" },
        { label: "Mumbai", path: "/car-services/mumbai/" },
        { label: item.name, path: canonicalPath }
      ]),
      faqSchema(faqs)
    ]
  );

  const body = `${hero({
    eyebrow: `PIN ${item.pin} Roadside Help`,
    title: `Car mechanic and roadside assistance in ${item.name}.`,
    lede: `Fast Mechanic helps with new battery sale, battery jump start, towing, petrol delivery, key lock, stepney change and urgent car mechanic calls around ${item.landmarks.join(", ")}.`,
    breadcrumbs: [
      { label: "Home", href: "../../../" },
      { label: "Car Services", href: "../../" },
      { label: "Mumbai", href: "../" },
      { label: item.name }
    ],
    depth: 3
  })}
    <main>
      <section class="silo-section">
        <div class="container silo-intro-grid">
          <div class="silo-copy">
            <p class="eyebrow">${escapeHtml(item.group)}</p>
            <h2>Emergency car help around ${escapeHtml(item.name)} landmarks.</h2>
            <p>Drivers call Fast Mechanic in ${escapeHtml(item.name)} for ${escapeHtml(item.issue)}. The local response focus includes ${escapeHtml(item.landmarks.join(", "))} and nearby routes such as ${escapeHtml(item.roads.join(", "))}.</p>
            <p>Available help includes new battery sale, battery jump start, towing, petrol delivery, key lock assistance, stepney change and roadside mechanic support. Share the exact vehicle position and nearest landmark when calling.</p>
            <ul>
              <li>Primary PIN code: ${escapeHtml(item.pin)}</li>
              <li>Service point: ${escapeHtml(address)}</li>
              <li>Direct call: <a href="tel:${phoneTel}">${phoneDisplay}</a></li>
            </ul>
          </div>
          <div class="silo-card-grid">${areaServiceCards(item, "../../../")}</div>
        </div>
      </section>
      <section class="silo-section alt">
        <div class="container">
          <div class="section-head">
            <p class="eyebrow">${escapeHtml(item.name)} Services</p>
            <h2>Choose the help your vehicle needs.</h2>
            <p>If the problem is unclear, call roadside assistance and describe the warning lights, sounds and whether the car can move safely.</p>
          </div>
          <div class="faq-mini-grid">
            ${services.map((service) => `<article class="faq-mini-card"><h3>${escapeHtml(service.name)} in ${escapeHtml(item.name)}</h3><p>${escapeHtml(service.short)} Call ${phoneDisplay} with your exact location near ${escapeHtml(item.landmarks[0])}.</p></article>`).join("")}
          </div>
        </div>
      </section>
      <section class="silo-section">
        <div class="container">
          <div class="section-head">
            <p class="eyebrow">Nearby Coverage</p>
            <h2>Related service-area pages near ${escapeHtml(item.name)}.</h2>
            <p>Use the nearby area list when the vehicle is outside ${escapeHtml(item.name)} or close to a connecting road.</p>
          </div>
          <div class="area-directory">${areaDirectory(nearby, "../../../")}</div>
          <a class="text-link" href="../">Back to complete Mumbai directory</a>
        </div>
      </section>
      <section class="silo-section alt">
        <div class="container">
          <div class="section-head">
            <p class="eyebrow">FAQ</p>
            <h2>Fast Mechanic ${escapeHtml(item.name)} questions.</h2>
          </div>
          <div class="faq-mini-grid">
            ${faqs.map((faq) => `<article class="faq-mini-card"><h3>${escapeHtml(faq.q)}</h3><p>${escapeHtml(faq.a)}</p></article>`).join("")}
          </div>
        </div>
      </section>
      <section class="silo-section">
        <div class="container silo-cta-band">
          <p class="eyebrow">Call Fast Mechanic</p>
          <h2>Need car help in ${escapeHtml(item.name)}?</h2>
          <p>Call Fast Mechanic now for new battery sale, battery, towing, petrol, key lock, stepney or mechanic support. The fastest call is the direct number below.</p>
          <div class="hero-actions"><a class="btn btn-primary" href="tel:${phoneTel}">Call ${phoneDisplay}</a><a class="btn btn-secondary" href="${whatsappUrl}" target="_blank" rel="noopener">Chat WhatsApp</a></div>
        </div>
      </section>
    </main>`;

  return pageShell({ title, description, keywords: `new battery sale ${item.name}, car battery ${item.name}, car mechanic ${item.name}, roadside assistance ${item.name}, towing service ${item.name}, battery jump start ${item.name}, petrol delivery ${item.name}, stepney change ${item.name}, Fast Mechanic ${item.name}`, canonicalPath, depth: 3, body, schema });
}

function flatAreaServicePage(item, service, index) {
  const canonicalPath = flatAreaServicePath(item, service);
  const title = `${service.name} in ${item.name} | Fast Mechanic`;
  const description = `Fast Mechanic provides ${service.name.toLowerCase()} in ${item.name}, Mumbai. ${service.short} Call ${phoneDisplay} for local car help.`;
  const nearby = nearbyAreas(item, index);
  const guidance = serviceGuidance[service.slug];
  const schema = mergeSchema(
    businessSchema({
      canonicalPath,
      name: `${service.name} in ${item.name}`,
      description,
      pageType: "Service",
      areaServed: [item.name]
    }),
    [
      breadcrumbSchema([
        { label: "Home", path: "/" },
        { label: "Car Services", path: "/car-services/" },
        { label: "Mumbai", path: "/car-services/mumbai/" },
        { label: item.name, path: `/car-services/mumbai/${item.slug}/` },
        { label: service.name, path: canonicalPath }
      ]),
      faqSchema([
        {
          q: `Is ${service.name.toLowerCase()} available in ${item.name}?`,
          a: `Yes. Fast Mechanic supports ${service.name.toLowerCase()} calls in ${item.name} and nearby locations around ${item.landmarks.slice(0, 3).join(", ")}.`
        },
        {
          q: `How do I book ${service.name.toLowerCase()} in ${item.name}?`,
          a: `Call ${phoneDisplay}, share your car model, exact location in ${item.name} and the nearest landmark.`
        },
        {
          q: `What is the price for ${service.name.toLowerCase()} in ${item.name}?`,
          a: service.price
        }
      ])
    ]
  );

  const body = `${hero({
    eyebrow: `PIN ${item.pin} Local Service`,
    title: `${service.name} in ${item.name}.`,
    lede: `${service.short} Fast Mechanic supports ${service.name.toLowerCase()} around ${item.landmarks.join(", ")} and nearby ${item.group} routes.`,
    breadcrumbs: [
      { label: "Home", href: "../../../" },
      { label: "Car Services", href: "../../" },
      { label: "Mumbai", href: "../" },
      { label: item.name, href: `../${item.slug}/` },
      { label: service.name }
    ],
    depth: 3
  })}
    <main>
      <section class="silo-section">
        <div class="container silo-intro-grid">
          <div class="silo-copy">
            <p class="eyebrow">${escapeHtml(item.group)}</p>
            <h2>${escapeHtml(service.name)} support near ${escapeHtml(item.landmarks[0])}.</h2>
            <p>Fast Mechanic handles ${escapeHtml(service.name.toLowerCase())} calls around ${escapeHtml(item.name)} for situations involving ${escapeHtml(item.issue)}. Common access routes include ${escapeHtml(item.roads.join(", "))}.</p>
            <p>${escapeHtml(guidance.scope)}</p>
            <ul>
              <li>Area: ${escapeHtml(item.name)}, Mumbai</li>
              <li>Primary PIN code: ${escapeHtml(item.pin)}</li>
              <li>Service: ${escapeHtml(service.name)}</li>
              <li>Direct call: <a href="tel:${phoneTel}">${phoneDisplay}</a></li>
              <li>Pricing: ${escapeHtml(service.price)}</li>
            </ul>
          </div>
          <div class="silo-card">
            <img src="../../../${service.image}" alt="${escapeHtml(service.name)} in ${escapeHtml(item.name)} illustration" loading="lazy">
            <h3>${escapeHtml(service.name)} in ${escapeHtml(item.name)}</h3>
            <p>${escapeHtml(service.short)}</p>
            <a class="service-cta" href="tel:${phoneTel}">${escapeHtml(service.cta)}</a>
          </div>
        </div>
      </section>
      <section class="silo-section alt">
        <div class="container">
          <div class="section-head">
            <p class="eyebrow">Before Assistance Arrives</p>
            <h2>Information to share from ${escapeHtml(item.name)}.</h2>
            <p>${escapeHtml(guidance.safety)}</p>
          </div>
          <div class="faq-mini-grid">
            ${guidance.checks.map(([heading, text]) => `<article class="faq-mini-card"><h3>${escapeHtml(heading)}</h3><p>${escapeHtml(text)} Include the nearest ${escapeHtml(item.name)} landmark when relevant.</p></article>`).join("")}
          </div>
        </div>
      </section>
      <section class="silo-section alt">
        <div class="container">
          <div class="section-head">
            <p class="eyebrow">Same Service Nearby</p>
            <h2>${escapeHtml(service.name)} pages near ${escapeHtml(item.name)}.</h2>
            <p>Choose a nearby locality if the vehicle is outside ${escapeHtml(item.name)} or close to a connecting road.</p>
          </div>
          <div class="area-directory">${areaServiceDirectory(nearby, service, "../../../")}</div>
        </div>
      </section>
      ${brandPageEnabled(item, service) ? `<section class="silo-section">
        <div class="container">
          <div class="section-head">
            <p class="eyebrow">Car Brand Pages</p>
            <h2>${escapeHtml(service.name)} in ${escapeHtml(item.name)} by car brand.</h2>
            <p>Select the vehicle manufacturer for model examples and the details that help confirm suitable ${escapeHtml(service.name.toLowerCase())} support.</p>
          </div>
          <div class="area-directory">${brandDirectory(item, service, "../../../")}</div>
        </div>
      </section>` : ""}
      <section class="silo-section">
        <div class="container">
          <div class="section-head">
            <p class="eyebrow">Other ${escapeHtml(item.name)} Services</p>
            <h2>All Fast Mechanic services in ${escapeHtml(item.name)}.</h2>
          </div>
          <div class="service-directory">${services.map((other) => `<a href="../${flatAreaServiceSlug(item, other)}/"><strong>${escapeHtml(other.name)} in ${escapeHtml(item.name)}</strong><span>${escapeHtml(other.short)}</span><em>View local service</em></a>`).join("")}</div>
        </div>
      </section>
    </main>`;

  return pageShell({ title, description, keywords: `${service.name} ${item.name}, ${service.intent}, ${item.name}, car service ${item.name}, Fast Mechanic`, canonicalPath, depth: 3, body, schema });
}

function brandServicePage(item, service, carBrand, index) {
  const canonicalPath = brandServicePath(item, service, carBrand);
  const title = `${carBrand.name} ${service.name} in ${item.name} | Fast Mechanic`;
  const description = `Fast Mechanic provides ${carBrand.name} ${service.name.toLowerCase()} in ${item.name}, Mumbai. Support for models like ${carBrand.models.slice(0, 4).join(", ")}. Call ${phoneDisplay}.`;
  const nearby = nearbyAreas(item, index);
  const modelText = carBrand.models.join(", ");
  const guidance = serviceGuidance[service.slug];
  const schema = mergeSchema(
    businessSchema({
      canonicalPath,
      name: `${carBrand.name} ${service.name} in ${item.name}`,
      description,
      pageType: "Service",
      areaServed: [item.name]
    }),
    [
      breadcrumbSchema([
        { label: "Home", path: "/" },
        { label: "Car Services", path: "/car-services/" },
        { label: "Mumbai", path: "/car-services/mumbai/" },
        { label: `${service.name} in ${item.name}`, path: flatAreaServicePath(item, service) },
        { label: carBrand.name, path: canonicalPath }
      ]),
      faqSchema([
        {
          q: `Is ${carBrand.name} ${service.name.toLowerCase()} available in ${item.name}?`,
          a: `Yes. Fast Mechanic supports ${carBrand.name} ${service.name.toLowerCase()} calls in ${item.name}, including common models such as ${modelText}.`
        },
        {
          q: `What details should I share for ${carBrand.name} ${service.name.toLowerCase()}?`,
          a: `Call ${phoneDisplay} with your ${carBrand.name} model, fuel type if known, current issue, exact ${item.name} location and nearest landmark.`
        },
        {
          q: `Does Fast Mechanic support ${carBrand.name} roadside calls near ${item.landmarks[0]}?`,
          a: `Yes. Fast Mechanic supports roadside and doorstep coordination around ${item.landmarks.slice(0, 3).join(", ")} and nearby ${item.group} roads.`
        }
      ]),
      {
        "@type": "Service",
        name: `${carBrand.name} ${service.name} in ${item.name}`,
        serviceType: `${service.name} for ${carBrand.name} cars`,
        provider: { "@id": `${siteUrl}/#business` },
        areaServed: item.name,
        brand: {
          "@type": "Brand",
          name: carBrand.name
        }
      }
    ]
  );

  const body = `${hero({
    eyebrow: `${carBrand.name} Car Help`,
    title: `${carBrand.name} ${service.name} in ${item.name}.`,
    lede: `Fast Mechanic supports ${carBrand.name} ${service.name.toLowerCase()} calls around ${item.landmarks.join(", ")} for models such as ${modelText}.`,
    breadcrumbs: [
      { label: "Home", href: "../../../../" },
      { label: "Car Services", href: "../../../" },
      { label: "Mumbai", href: "../../" },
      { label: `${service.name} in ${item.name}`, href: "../" },
      { label: carBrand.name }
    ],
    depth: 4
  })}
    <main>
      <section class="silo-section">
        <div class="container silo-intro-grid">
          <div class="silo-copy">
            <p class="eyebrow">${escapeHtml(item.group)} Vehicle Support</p>
            <h2>${escapeHtml(carBrand.name)} ${escapeHtml(service.name.toLowerCase())} support near ${escapeHtml(item.landmarks[0])}.</h2>
            <p>${escapeHtml(guidance.scope)} For ${escapeHtml(carBrand.name)} vehicles, ${escapeHtml(guidance.modelAdvice)}</p>
            <p>Common ${escapeHtml(carBrand.name)} models include ${escapeHtml(modelText)}. Share the model name, exact ${escapeHtml(item.name)} location and current issue when calling.</p>
            <ul>
              <li>Brand: ${escapeHtml(carBrand.name)}</li>
              <li>Service: ${escapeHtml(service.name)}</li>
              <li>Area: ${escapeHtml(item.name)}, Mumbai</li>
              <li>Nearby landmarks: ${escapeHtml(item.landmarks.slice(0, 4).join(", "))}</li>
              <li>Direct call: <a href="tel:${phoneTel}">${phoneDisplay}</a></li>
            </ul>
          </div>
          <div class="silo-card">
            <img src="../../../../${service.image}" alt="${escapeHtml(carBrand.name)} ${escapeHtml(service.name)} in ${escapeHtml(item.name)} illustration" loading="lazy">
            <h3>${escapeHtml(carBrand.name)} ${escapeHtml(service.name)}</h3>
            <p>${escapeHtml(service.short)} Support can depend on model, location, vehicle condition and current availability.</p>
            <a class="service-cta" href="tel:${phoneTel}">${escapeHtml(service.cta)}</a>
          </div>
        </div>
      </section>
      <section class="silo-section alt">
        <div class="container">
          <div class="section-head">
            <p class="eyebrow">Popular Models</p>
            <h2>${escapeHtml(carBrand.name)} model details to share.</h2>
            <p>${escapeHtml(guidance.safety)}</p>
          </div>
          <div class="faq-mini-grid">
            ${carBrand.models.map((model) => `<article class="faq-mini-card"><h3>${escapeHtml(model)} ${escapeHtml(service.name)}</h3><p>For a ${escapeHtml(carBrand.name)} ${escapeHtml(model)}, ${escapeHtml(guidance.modelAdvice)} Call ${phoneDisplay} from near ${escapeHtml(item.landmarks[0])}, ${escapeHtml(item.name)}.</p></article>`).join("")}
          </div>
        </div>
      </section>
      <section class="silo-section">
        <div class="container">
          <div class="section-head">
            <p class="eyebrow">Before You Call</p>
            <h2>Details needed for ${escapeHtml(carBrand.name)} ${escapeHtml(service.name.toLowerCase())}.</h2>
          </div>
          <div class="faq-mini-grid">
            ${guidance.checks.map(([heading, text]) => `<article class="faq-mini-card"><h3>${escapeHtml(heading)}</h3><p>${escapeHtml(text)}</p></article>`).join("")}
          </div>
        </div>
      </section>
      <section class="silo-section">
        <div class="container">
          <div class="section-head">
            <p class="eyebrow">Same Brand Nearby</p>
            <h2>${escapeHtml(carBrand.name)} ${escapeHtml(service.name)} pages near ${escapeHtml(item.name)}.</h2>
            <p>Choose a nearby locality when the vehicle is outside ${escapeHtml(item.name)} or close to a connecting road.</p>
          </div>
          <div class="area-directory">${brandAreaDirectory(nearby, service, carBrand, "../../../../")}</div>
        </div>
      </section>
      <section class="silo-section alt">
        <div class="container">
          <div class="section-head">
            <p class="eyebrow">Other Brands</p>
            <h2>Other car brands for ${escapeHtml(service.name)} in ${escapeHtml(item.name)}.</h2>
          </div>
          <div class="area-directory">${brandDirectory(item, service, "../../../../")}</div>
        </div>
      </section>
    </main>`;

  return pageShell({ title, description, keywords: `${carBrand.name} ${service.name} ${item.name}, ${carBrand.name} car help ${item.name}, ${service.intent}, ${item.name}, Fast Mechanic`, canonicalPath, depth: 4, body, schema });
}

function legacyAreaServicePage(item, service) {
  const targetPath = flatAreaServicePath(item, service);
  const targetRelative = `../../../../car-services/mumbai/${flatAreaServiceSlug(item, service)}/`;
  const title = `${service.name} in ${item.name} | Fast Mechanic`;
  return `<!doctype html>
<html lang="en-IN">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(title)}</title>
    <meta name="robots" content="noindex, follow">
    <link rel="canonical" href="${siteUrl}${targetPath}">
    <meta http-equiv="refresh" content="0; url=${targetRelative}">
    <script>window.location.replace("${targetRelative}");</script>
  </head>
  <body>
    <p>${escapeHtml(title)} moved to <a href="${targetRelative}">${escapeHtml(`${siteUrl}${targetPath}`)}</a>.</p>
    <p>For urgent Fast Mechanic help, call <a href="tel:${phoneTel}">${phoneDisplay}</a>.</p>
  </body>
</html>
`;
}

function nearbyAreas(item, index) {
  const sameGroup = areas.filter((candidate) => candidate.group === item.group && candidate.slug !== item.slug);
  const windowAreas = [
    ...areas.slice(Math.max(0, index - 3), index),
    ...areas.slice(index + 1, index + 4)
  ].filter((candidate) => candidate.slug !== item.slug);
  const merged = [...sameGroup.slice(0, 5), ...windowAreas];
  const unique = [];
  const seen = new Set();
  for (const candidate of merged) {
    if (seen.has(candidate.slug)) continue;
    seen.add(candidate.slug);
    unique.push(candidate);
  }
  return unique.slice(0, 8);
}

async function writePage(relativePath, html) {
  const fullPath = path.join(root, relativePath);
  await mkdir(path.dirname(fullPath), { recursive: true });
  await writeFile(fullPath, html, "utf8");
}

function sitemapUrlset(urls) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url>
    <loc>${siteUrl}${url.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join("\n")}
</urlset>
`;
}

function sitemapIndexXml(files) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${files.map((file) => `  <sitemap>
    <loc>${siteUrl}/sitemap/${file}</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`).join("\n")}
</sitemapindex>
`;
}

function sitemapGroups() {
  const modelServices = services.filter((service) => brandEnabled(service));
  const modelAreas = areas.filter((item) => brandSeoAreaSlugs.has(item.slug));
  return {
    "main.xml": [
      { loc: "/", priority: "1.0", changefreq: "weekly" },
      { loc: "/car-services/", priority: "0.95", changefreq: "weekly" },
      { loc: "/car-services/mumbai/", priority: "0.95", changefreq: "weekly" },
      ...services.map((service) => ({ loc: `/car-services/mumbai/${service.slug}/`, priority: "0.88", changefreq: "weekly" }))
    ],
    "mumbai-areas.xml": areas.map((item) => ({ loc: `/car-services/mumbai/${item.slug}/`, priority: "0.84", changefreq: "weekly" })),
    "mumbai-services.xml": areas.flatMap((item) => services.map((service) => ({ loc: flatAreaServicePath(item, service), priority: "0.80", changefreq: "weekly" }))),
    "mumbai-car-brands.xml": modelAreas.flatMap((item) => modelServices.flatMap((service) => priorityCarBrands.map((carBrand) => ({ loc: brandServicePath(item, service, carBrand), priority: "0.72", changefreq: "weekly" }))))
  };
}

async function main() {
  await rm(path.join(root, "car-services"), { recursive: true, force: true });
  await rm(path.join(root, "sitemap"), { recursive: true, force: true });
  await rm(path.join(root, "google-ads-kit/site-files/sitemap"), { recursive: true, force: true });
  await writePage("car-services/index.html", categoryPage());
  await writePage("car-services/mumbai/index.html", cityPage());

  for (const service of services) {
    await writePage(`car-services/mumbai/${service.slug}/index.html`, servicePage(service));
  }

  const modelServices = services.filter((service) => brandEnabled(service));
  const modelAreas = areas.filter((item) => brandSeoAreaSlugs.has(item.slug));
  for (const [index, item] of areas.entries()) {
    await writePage(`car-services/mumbai/${item.slug}/index.html`, areaPage(item, index));
    for (const service of services) {
      await writePage(`car-services/mumbai/${flatAreaServiceSlug(item, service)}/index.html`, flatAreaServicePage(item, service, index));
      await writePage(`car-services/mumbai/${item.slug}/${service.slug}/index.html`, legacyAreaServicePage(item, service));
    }
  }

  for (const item of modelAreas) {
    const index = areas.findIndex((candidate) => candidate.slug === item.slug);
    for (const service of modelServices) {
      for (const carBrand of priorityCarBrands) {
        await writePage(`car-services/mumbai/${flatAreaServiceSlug(item, service)}/${carBrand.slug}/index.html`, brandServicePage(item, service, carBrand, index));
      }
    }
  }

  const groups = sitemapGroups();
  const sitemapFiles = Object.keys(groups);
  const sitemapIndex = sitemapIndexXml(sitemapFiles);
  await writePage("sitemap.xml", sitemapIndex);
  await writePage("google-ads-kit/site-files/sitemap.xml", sitemapIndex);
  for (const [file, urls] of Object.entries(groups)) {
    const xml = sitemapUrlset(urls);
    await writePage(`sitemap/${file}`, xml);
    await writePage(`google-ads-kit/site-files/sitemap/${file}`, xml);
  }

  console.log(`Generated ${areas.length} area pages, ${services.length} service pages, ${areas.length * services.length} flat area-service pages, ${areas.length * services.length} legacy pages, ${modelAreas.length * modelServices.length * priorityCarBrands.length} brand pages and ${sitemapFiles.length} sitemap files.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

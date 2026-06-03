import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const siteUrl = "https://fastmech.in";
const phoneDisplay = "+91 70218 10153";
const phoneTel = "+917021810153";
const whatsappUrl = "https://wa.me/917021810153?text=Hi%20Fast%20Mechanic%2C%20I%20need%20roadside%20assistance%20in%20Mumbai.";
const lastmod = "2026-06-03";
const address = "New Tank Bandar Road, Darukhana, E Ward, Mumbai, Maharashtra 400010, India";
const mapUrl = "https://www.google.com/maps?q=18.9788291,72.8482657";
const openGraphImage = `${siteUrl}/google-ads-kit/images/png-ready/fast-mechanic-search-ad-1200x628.png`;

const services = [
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
  area("kalbadevi", "Kalbadevi", "400002", "South Mumbai", ["Zaveri Bazaar", "Bhuleshwar", "Crawford Market", "Marine Lines"], ["Kalbadevi Road", "Princess Street"], "market lanes, older buildings and crowded parking"),
  area("crawford-market", "Crawford Market", "400003", "South Mumbai", ["Crawford Market", "CST", "Masjid Bunder", "Kalbadevi"], ["Lokmanya Tilak Marg", "JJ Flyover"], "market traffic, loading lanes and narrow turns"),
  area("masjid-bunder", "Masjid Bunder", "400003", "South Mumbai", ["Masjid Station", "Crawford Market", "Mandvi", "Pydhonie"], ["Mohammed Ali Road", "P D'Mello Road"], "market pickup points, port roads and evening congestion"),
  area("girgaon", "Girgaon", "400004", "South Mumbai", ["Girgaon Chowpatty", "Charni Road", "Opera House", "Kalbadevi"], ["SVP Road", "Marine Drive"], "coastal parking, society lanes and festival traffic"),
  area("charni-road", "Charni Road", "400004", "South Mumbai", ["Charni Road Station", "Girgaon", "Marine Lines", "Opera House"], ["Maharshi Karve Road", "SVP Road"], "station roads, residential lanes and beach-side movement"),
  area("opera-house", "Opera House", "400004", "South Mumbai", ["Royal Opera House", "Girgaon", "Grant Road", "Charni Road"], ["SVP Road", "Lamington Road"], "market parking, theatre-area traffic and compact lanes"),
  area("grant-road", "Grant Road", "400007", "South Mumbai", ["Grant Road Station", "Lamington Road", "Opera House", "Tardeo"], ["Lamington Road", "Nana Chowk"], "electronics market traffic, station roads and older car parking"),
  area("mumbai-central", "Mumbai Central", "400008", "South Mumbai", ["Mumbai Central Station", "Nagpada", "Tardeo", "Byculla"], ["Bellasis Road", "JJ Flyover"], "station rush, taxi corridors and long-stop parking"),
  area("tardeo", "Tardeo", "400034", "South Mumbai", ["Tardeo Road", "Haji Ali", "Mumbai Central", "Mahalaxmi"], ["Tardeo Road", "Dr E Moses Road"], "uphill roads, office buildings and residential towers"),
  area("mahalaxmi", "Mahalaxmi", "400011", "Central Mumbai", ["Mahalaxmi Racecourse", "Haji Ali", "Lower Parel", "Byculla"], ["Dr E Moses Road", "Keshavrao Khadye Marg"], "racecourse traffic, flyovers and parking exits"),
  area("byculla", "Byculla", "400008", "Central Mumbai", ["Byculla Station", "Mahalaxmi", "Mazgaon", "Rani Baug"], ["Dr Babasaheb Ambedkar Road", "JJ Flyover"], "station roads, older buildings and central Mumbai routes"),
  area("mazgaon", "Mazgaon", "400010", "Central Mumbai", ["Mazgaon Dock", "Byculla", "Darukhana", "Reay Road"], ["Nesbit Road", "P D'Mello Road"], "dock roads, commercial lanes and mixed traffic"),
  area("darukhana", "Darukhana", "400010", "Central Mumbai", ["New Tank Bandar Road", "Reay Road", "Mazgaon", "Cotton Green"], ["New Tank Bandar Road", "P D'Mello Road"], "workshop roads, parking sheds and industrial lanes"),
  area("reay-road", "Reay Road", "400010", "Central Mumbai", ["Reay Road Station", "Darukhana", "Cotton Green", "Mazgaon"], ["Barrister Nath Pai Road", "P D'Mello Road"], "industrial routes, port-side turns and station access"),
  area("parel", "Parel", "400012", "Central Mumbai", ["Parel Station", "Lalbaug", "Lower Parel", "Dadar"], ["Dr Babasaheb Ambedkar Road", "NM Joshi Marg"], "office towers, hospital routes and central traffic"),
  area("lalbaug", "Lalbaug", "400012", "Central Mumbai", ["Lalbaug Market", "Parel", "Byculla", "Cotton Green"], ["Dr BA Road", "Ganesh Gully"], "festival routes, market lanes and building parking"),
  area("lower-parel", "Lower Parel", "400013", "Central Mumbai", ["Phoenix Mills", "Kamala Mills", "Worli", "Prabhadevi"], ["Senapati Bapat Marg", "NM Joshi Marg"], "office towers, mall basements and evening traffic"),
  area("worli", "Worli", "400018", "Central Mumbai", ["Worli Sea Face", "Haji Ali", "Lower Parel", "Prabhadevi"], ["Annie Besant Road", "Worli Sea Link approach"], "sea link routes, corporate parking and flyover exits"),
  area("prabhadevi", "Prabhadevi", "400025", "Central Mumbai", ["Siddhivinayak Temple", "Worli", "Dadar", "Lower Parel"], ["Veer Savarkar Marg", "Kakasaheb Gadgil Marg"], "temple traffic, society towers and central routes"),
  area("dadar-east", "Dadar East", "400014", "Central Mumbai", ["Dadar TT", "Parel", "Matunga", "Hindmata"], ["Dr BA Road", "Eastern Express Highway connector"], "station crowd, market roads and central junctions"),
  area("dadar-west", "Dadar West", "400028", "Central Mumbai", ["Shivaji Park", "Dadar Station", "Prabhadevi", "Mahim"], ["Gokhale Road", "Senapati Bapat Marg"], "market parking, station exits and residential lanes"),
  area("shivaji-park", "Shivaji Park", "400028", "Central Mumbai", ["Shivaji Park", "Dadar West", "Prabhadevi", "Mahim"], ["Keluskar Road", "Lady Jamshedji Road"], "residential parking, ground-side roads and evening traffic"),
  area("matunga", "Matunga", "400019", "Central Mumbai", ["Matunga Station", "Dadar", "Sion", "King's Circle"], ["Dr BA Road", "Lakhamsi Nappu Road"], "college roads, station lanes and central traffic"),
  area("sion", "Sion", "400022", "Central Mumbai", ["Sion Circle", "Sion Hospital", "Kurla", "Matunga"], ["Eastern Express Highway", "Sion-Panvel Highway"], "highway connectors, hospital routes and flyover traffic"),
  area("wadala", "Wadala", "400031", "Central Mumbai", ["Wadala Station", "Sion", "Matunga", "Sewri"], ["Rafi Ahmed Kidwai Road", "Eastern Freeway connector"], "truck routes, station roads and society parking"),
  area("sewri", "Sewri", "400015", "Central Mumbai", ["Sewri Station", "Cotton Green", "Wadala", "Eastern Freeway"], ["Sewri-Chembur Road", "Eastern Freeway"], "industrial lanes, freeway access and parking sheds"),
  area("cotton-green", "Cotton Green", "400033", "Central Mumbai", ["Cotton Green Station", "Reay Road", "Lalbaug", "Sewri"], ["Barrister Nath Pai Road", "Dr BA Road"], "warehouse routes, station roads and central lanes"),
  area("mahim", "Mahim", "400016", "Western Mumbai", ["Mahim Causeway", "Bandra", "Dadar West", "Sion"], ["Lady Jamshedji Road", "Mahim Causeway"], "causeway traffic, station access and sea-link feeder routes"),
  area("bandra-west", "Bandra West", "400050", "Western Mumbai", ["Linking Road", "Hill Road", "Carter Road", "Bandstand"], ["SV Road", "Turner Road"], "shopping streets, restaurant parking and coastal traffic"),
  area("bandra-east", "Bandra East", "400051", "Western Mumbai", ["Bandra Station", "BKC", "Kalanagar", "Kurla"], ["Western Express Highway", "BKC Connector"], "office traffic, station roads and highway exits"),
  area("bkc", "BKC", "400051", "Western Mumbai", ["Bandra Kurla Complex", "Jio World Drive", "MCA Club", "Kalina"], ["BKC Road", "BKC Connector"], "corporate parking, event exits and late-night office calls"),
  area("khar", "Khar", "400052", "Western Mumbai", ["Khar Station", "Bandra", "Santacruz", "Linking Road"], ["SV Road", "16th Road"], "residential towers, station roads and shopping lanes"),
  area("santacruz", "Santacruz", "400054", "Western Mumbai", ["Santacruz Station", "Kalina", "Juhu", "Vile Parle"], ["SV Road", "Western Express Highway"], "airport-side traffic, station roads and residential parking"),
  area("juhu", "Juhu", "400049", "Western Mumbai", ["Juhu Beach", "JVPD", "Vile Parle", "Santacruz"], ["Juhu Tara Road", "Gulmohar Road"], "beach traffic, bungalow lanes and evening congestion"),
  area("vile-parle", "Vile Parle", "400057", "Western Mumbai", ["Vile Parle Station", "Airport", "Juhu", "Andheri"], ["SV Road", "Western Express Highway"], "airport routes, station lanes and residential parking"),
  area("mumbai-airport", "Mumbai Airport", "400099", "Western Mumbai", ["T1 Domestic Airport", "T2 International Airport", "Sahar", "Marol"], ["Sahar Road", "Western Express Highway"], "airport pickups, hotel parking and late-night travel"),
  area("sahar", "Sahar", "400099", "Western Mumbai", ["Sahar Village", "T2 Airport", "Marol", "Andheri East"], ["Sahar Road", "Andheri-Kurla Road"], "airport access roads, hotel basements and night breakdowns"),
  area("andheri-east", "Andheri East", "400059", "Western Mumbai", ["Marol", "MIDC", "Chakala", "Sahar"], ["Andheri-Kurla Road", "Western Express Highway"], "industrial estates, airport traffic and office parking"),
  area("andheri-west", "Andheri West", "400053", "Western Mumbai", ["DN Nagar", "Lokhandwala", "Versova", "Oshiwara"], ["JP Road", "Link Road"], "media offices, market lanes and residential towers"),
  area("marol", "Marol", "400059", "Western Mumbai", ["Marol Naka", "Saki Naka", "Airport", "Andheri East"], ["Andheri-Kurla Road", "Military Road"], "hotel parking, airport-side roads and office routes"),
  area("midc-andheri", "MIDC Andheri", "400093", "Western Mumbai", ["MIDC", "Seepz", "Chakala", "Andheri East"], ["Mahakali Caves Road", "Andheri-Kurla Road"], "industrial parking, business parks and tight internal roads"),
  area("dn-nagar", "DN Nagar", "400053", "Western Mumbai", ["DN Nagar Metro", "Andheri West", "Versova", "Lokhandwala"], ["JP Road", "New Link Road"], "metro roads, society parking and evening traffic"),
  area("versova", "Versova", "400061", "Western Mumbai", ["Versova Beach", "Yari Road", "DN Nagar", "Andheri West"], ["JP Road", "Yari Road"], "coastal lanes, residential parking and late-night routes"),
  area("saki-naka", "Saki Naka", "400072", "Western Mumbai", ["Saki Naka Junction", "Marol", "Powai", "Kurla"], ["Andheri-Kurla Road", "Saki Vihar Road"], "junction traffic, commercial lanes and airport connectors"),
  area("kurla", "Kurla", "400070", "Eastern Mumbai", ["Kurla Station", "Phoenix Marketcity", "BKC Connector", "Saki Naka"], ["LBS Marg", "CST Road"], "market roads, mall parking and connector traffic"),
  area("chembur", "Chembur", "400071", "Eastern Mumbai", ["Chembur Station", "Tilak Nagar", "Sion", "Eastern Freeway"], ["Eastern Express Highway", "VN Purav Marg"], "freeway routes, society parking and station roads"),
  area("tilak-nagar", "Tilak Nagar", "400089", "Eastern Mumbai", ["Tilak Nagar Station", "Chembur", "Kurla", "Sion"], ["Santacruz-Chembur Link Road", "Shell Colony Road"], "residential lanes, station roads and link-road traffic"),
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
  area("majiwada", "Majiwada", "400601", "Thane Corridor", ["Majiwada Junction", "Viviana Mall", "Kapurbawdi", "Thane West"], ["Eastern Express Highway", "Ghodbunder Road"], "junction traffic, mall basements and highway breakdowns"),
  area("wagle-estate", "Wagle Estate", "400604", "Thane Corridor", ["Wagle Estate", "Teen Hath Naka", "Mulund", "Thane West"], ["LBS Marg", "Eastern Express Highway"], "industrial roads, office parking and commercial lanes"),
  area("kalwa", "Kalwa", "400605", "Thane Corridor", ["Kalwa Station", "Thane", "Airoli", "Parsik Nagar"], ["Kalwa Bridge", "Thane-Belapur Road"], "bridge traffic, station roads and residential towers"),
  area("airoli", "Airoli", "400708", "Vashi Corridor", ["Airoli Bridge", "Airoli Station", "Rabale", "Mulund"], ["Thane-Belapur Road", "Airoli Bridge Road"], "bridge routes, office parks and highway connectors"),
  area("vashi", "Vashi", "400703", "Vashi Corridor", ["Vashi Station", "Palm Beach Road", "APMC Market", "Turbhe"], ["Palm Beach Road", "Sion-Panvel Highway"], "market roads, highway access and mall parking"),
  area("apmc-vashi", "APMC Vashi", "400703", "Vashi Corridor", ["APMC Market", "Vashi", "Turbhe", "Sanpada"], ["APMC Road", "Sion-Panvel Highway"], "market loading lanes, wholesale parking and early morning traffic"),
  area("turbhe", "Turbhe", "400705", "Vashi Corridor", ["Turbhe Station", "APMC", "Vashi", "Sanpada"], ["Thane-Belapur Road", "Turbhe MIDC Road"], "industrial roads, market routes and parking exits"),
  area("sanpada", "Sanpada", "400705", "Vashi Corridor", ["Sanpada Station", "Vashi", "Palm Beach Road", "Turbhe"], ["Palm Beach Road", "Sion-Panvel Highway"], "residential towers, station roads and highway-side stops")
];

function area(slug, name, pin, group, landmarks, roads, issue) {
  return { slug, name, pin, group, landmarks, roads, issue };
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

function pageShell({ title, description, keywords, canonicalPath, depth, body, schema }) {
  const prefix = relativePrefix(depth);
  const canonical = `${siteUrl}${canonicalPath}`;
  return `<!doctype html>
<html lang="en-IN">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}">
    <meta name="keywords" content="${escapeHtml(keywords)}">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="format-detection" content="telephone=yes">
    <meta name="geo.region" content="IN-MH">
    <meta name="geo.placename" content="Mumbai">
    <link rel="canonical" href="${canonical}">
    <link rel="icon" type="image/svg+xml" href="${prefix}logo.svg?v=realistic-20260526">
    <link rel="stylesheet" href="${prefix}styles.css?v=20260603-silo">
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
          <p>24/7 roadside assistance for battery jump start, key lockout, towing, petrol delivery, stepney change and car mechanic service in Mumbai.</p>
        </div>
        <div>
          <h2>Services</h2>
          ${services.slice(0, 4).map((service) => `<a href="${prefix}car-services/mumbai/${service.slug}/">${service.name}</a>`).join("")}
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
          <span>Battery jump start, towing, petrol delivery, key lock, stepney change and roadside mechanic assistance.</span>
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
  return services.slice(0, 6).map((service) => `<article class="silo-card">
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
  const description = "Fast Mechanic car services in Mumbai include battery jump start, towing, petrol delivery, key lock, stepney change and roadside mechanic help. Call +91 70218 10153.";
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
    eyebrow: "Car Service Silo",
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
            <h2>Emergency help pages for high-intent car breakdown searches.</h2>
            <p>Fast Mechanic separates each major emergency service so Google and customers can understand exactly what is available before calling. Every service page links into the Mumbai area pages for stronger local relevance.</p>
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

  return pageShell({ title, description, keywords: "car services Mumbai, car mechanic Mumbai, roadside assistance Mumbai, towing Mumbai, battery jump start Mumbai", canonicalPath, depth: 1, body, schema });
}

function cityPage() {
  const canonicalPath = "/car-services/mumbai/";
  const title = "Best Car Workshop & Doorstep Repair in Mumbai | Fast Mechanic";
  const description = "Fast Mechanic provides emergency car repair, roadside assistance, towing, battery jump start, petrol delivery and doorstep mechanic help across Mumbai, Andheri, Thane and Vashi.";
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
          a: `Yes. Fast Mechanic provides battery jump start, towing, petrol delivery, key lock assistance, stepney change and roadside mechanic help across the active Mumbai radius. Call ${phoneDisplay}.`
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
            <p class="eyebrow">Mumbai Local SEO Page</p>
            <h2>Doorstep and roadside car repair for Mumbai breakdown locations.</h2>
            <p>Fast Mechanic targets real Mumbai emergency points: residential towers, office basements, mall parking, railway station roads, airport routes, Eastern Express Highway, Western Express Highway, Sion-Panvel Highway and South Mumbai business districts.</p>
            <ul>
              <li>Localized support from New Tank Bandar Road, Darukhana, Mumbai 400010.</li>
              <li>Service radius built around South Mumbai, Andheri, Thane and Vashi.</li>
              <li>Call leads, WhatsApp leads, vCard saving and service schema are included for search engines.</li>
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
            <p>Each service page is written for Mumbai-specific breakdown intent and links to all active locality pages.</p>
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
              <p>Open a dedicated local page for car mechanic, towing, jump start, petrol delivery and stepney help in each named area.</p>
            </div>
            <div class="area-directory">${areaDirectory(groupAreas, "../../")}</div>
          </div>
        </section>`;
      }).join("")}
      <section class="silo-section alt">
        <div class="container silo-cta-band">
          <p class="eyebrow">Direct Call Lead</p>
          <h2>Need car help in Mumbai right now?</h2>
          <p>Call Fast Mechanic before visiting the service point so assistance can be coordinated at your exact vehicle location.</p>
          <div class="hero-actions"><a class="btn btn-primary" href="tel:${phoneTel}">Call ${phoneDisplay}</a><a class="btn btn-secondary" href="../../fast-mechanic.vcf" download="Fast-Mechanic.vcf">Save Contact</a></div>
        </div>
      </section>
    </main>`;

  return pageShell({ title, description, keywords: "car service Mumbai, doorstep car repair Mumbai, roadside assistance Mumbai, car workshop Mumbai, emergency mechanic Mumbai, towing Mumbai", canonicalPath, depth: 2, body, schema });
}

function servicePage(service) {
  const canonicalPath = `/car-services/mumbai/${service.slug}/`;
  const title = `${service.name} in Mumbai | Fast Mechanic`;
  const description = `${service.name} in Mumbai from Fast Mechanic. ${service.short} Service areas include South Mumbai, Andheri, Thane and Vashi. Call ${phoneDisplay}.`;
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
            <p>${escapeHtml(service.short)} This page is optimized for searches such as ${escapeHtml(service.intent)} in Mumbai and nearby service-area locations.</p>
            <ul>
              <li>Call lead: <a href="tel:${phoneTel}">${phoneDisplay}</a></li>
              <li>WhatsApp lead: <a href="${whatsappUrl}" target="_blank" rel="noopener">Chat Fast Mechanic</a></li>
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
            <p class="eyebrow">Where Available</p>
            <h2>${escapeHtml(service.name)} area coverage.</h2>
            <p>These pages help customers and search engines connect the service with specific Mumbai localities inside the active radius.</p>
          </div>
          <div class="area-directory">${areaDirectory(topAreas, "../../../")}</div>
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
  const description = `Fast Mechanic provides battery jump start, towing, petrol delivery, key lock, stepney change and roadside car mechanic help in ${item.name}, Mumbai. Call ${phoneDisplay}.`;
  const nearby = nearbyAreas(item, index);
  const faqs = [
    {
      q: `Do you provide battery jump start in ${item.name}?`,
      a: `Yes. Fast Mechanic provides dead battery jump start support in ${item.name} and nearby locations including ${item.landmarks.slice(0, 3).join(", ")}.`
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
    lede: `Fast Mechanic helps with battery jump start, towing, petrol delivery, key lock, stepney change and urgent car mechanic calls around ${item.landmarks.join(", ")}.`,
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
            <p>Use this dedicated page for searches like car mechanic near me in ${escapeHtml(item.name)}, towing service in ${escapeHtml(item.name)}, battery jump start in ${escapeHtml(item.name)} and petrol delivery near ${escapeHtml(item.name)}.</p>
            <ul>
              <li>Primary PIN code: ${escapeHtml(item.pin)}</li>
              <li>Service point: ${escapeHtml(address)}</li>
              <li>Direct call: <a href="tel:${phoneTel}">${phoneDisplay}</a></li>
            </ul>
          </div>
          <div class="silo-card-grid">${serviceCards("../../../")}</div>
        </div>
      </section>
      <section class="silo-section alt">
        <div class="container">
          <div class="section-head">
            <p class="eyebrow">Popular ${escapeHtml(item.name)} Searches</p>
            <h2>Service intent covered for ${escapeHtml(item.name)} car owners.</h2>
            <p>These are the urgent search scenarios this page is structured to answer clearly.</p>
          </div>
          <div class="faq-mini-grid">
            ${services.slice(0, 6).map((service) => `<article class="faq-mini-card"><h3>${escapeHtml(service.name)} in ${escapeHtml(item.name)}</h3><p>${escapeHtml(service.short)} Call ${phoneDisplay} with your exact location near ${escapeHtml(item.landmarks[0])}.</p></article>`).join("")}
          </div>
        </div>
      </section>
      <section class="silo-section">
        <div class="container">
          <div class="section-head">
            <p class="eyebrow">Nearby Coverage</p>
            <h2>Related service-area pages near ${escapeHtml(item.name)}.</h2>
            <p>Internal area links help Google understand the real local radius and give customers nearby options.</p>
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
          <p class="eyebrow">Call Lead Ready</p>
          <h2>Need car help in ${escapeHtml(item.name)}?</h2>
          <p>Call Fast Mechanic now for battery, towing, petrol, key lock, stepney or mechanic support. The fastest call is the direct number below.</p>
          <div class="hero-actions"><a class="btn btn-primary" href="tel:${phoneTel}">Call ${phoneDisplay}</a><a class="btn btn-secondary" href="${whatsappUrl}" target="_blank" rel="noopener">Chat WhatsApp</a></div>
        </div>
      </section>
    </main>`;

  return pageShell({ title, description, keywords: `car mechanic ${item.name}, roadside assistance ${item.name}, towing service ${item.name}, battery jump start ${item.name}, petrol delivery ${item.name}, stepney change ${item.name}, Fast Mechanic ${item.name}`, canonicalPath, depth: 3, body, schema });
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

function sitemapXml() {
  const urls = [
    { loc: "/", priority: "1.0", changefreq: "weekly" },
    { loc: "/car-services/", priority: "0.95", changefreq: "weekly" },
    { loc: "/car-services/mumbai/", priority: "0.95", changefreq: "weekly" },
    ...services.map((service) => ({ loc: `/car-services/mumbai/${service.slug}/`, priority: "0.88", changefreq: "weekly" })),
    ...areas.map((item) => ({ loc: `/car-services/mumbai/${item.slug}/`, priority: "0.84", changefreq: "weekly" }))
  ];

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

async function main() {
  await rm(path.join(root, "car-services"), { recursive: true, force: true });
  await writePage("car-services/index.html", categoryPage());
  await writePage("car-services/mumbai/index.html", cityPage());

  for (const service of services) {
    await writePage(`car-services/mumbai/${service.slug}/index.html`, servicePage(service));
  }

  for (const [index, item] of areas.entries()) {
    await writePage(`car-services/mumbai/${item.slug}/index.html`, areaPage(item, index));
  }

  const sitemap = sitemapXml();
  await writePage("sitemap.xml", sitemap);
  await writePage("google-ads-kit/site-files/sitemap.xml", sitemap);

  console.log(`Generated ${areas.length} area pages, ${services.length} service pages, category pages and sitemap.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

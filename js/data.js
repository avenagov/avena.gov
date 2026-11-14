/* ==========================================================================
   AVENA NATIONAL DATA FILE - edit this file to update the website.
   Empty strings ("") are shown on the site as clearly marked placeholders.
   Dates use YYYY-MM-DD. Lists: add, remove or reorder entries freely.
   ========================================================================== */
window.AVENA = {
  placeholder: "Information not yet published",

  site: {
    founded: "2023-03-05",
    capital: "Stonepoint",
    motto: "Viva l'Avena",
    animal: "Fox",
    government: "Presidential system"
  },

  /* Official email contacts (shown in the footer, on department cards and in search). */
  contacts: [
    { label: "Government of Avena (main)", email: "avena.gov3523@gmail.com" },
    { label: "Office of Foreign Communication (AFC)", email: "Avena.foreigncommunication@gmail.com" },
    { label: "Border Control Department (BCD)", email: "avenabcd.gov@gmail.com" }
  ],

  colour: { red: "#c8202f", green: "#138a4b", blue: "#1747a6", navy: "#0d1b2e", white: "#ffffff" },

  /* Main navigation (children become dropdown menus) */
  nav: [
    { label: "Home", href: "index.html" },
    { label: "About Avena", href: "about.html", children: [
      { label: "Overview", href: "about.html" },
      { label: "National Symbols", href: "symbols.html" },
      { label: "Traditions and holidays", href: "about.html#traditions" } ] },
    { label: "Government", href: "government.html", children: [
      { label: "Office of the President", href: "government.html#office" },
      { label: "National Council", href: "government.html#council" },
      { label: "Departments", href: "government.html#departments" } ] },
    { label: "History", href: "history.html" },
    { label: "Laws", href: "constitution.html", children: [
      { label: "Constitution", href: "constitution.html#constitution" },
      { label: "Laws and legislation", href: "constitution.html#law" },
      { label: "Decrees and orders", href: "constitution.html#decree" } ] },
    { label: "Citizenship", href: "citizenship.html" },
    { label: "Territories", href: "territories.html" },
    { label: "News", href: "news.html" },
    { label: "Public Services", href: "services.html" }
  ],

  /* Homepage "Explore Avena" tiles */
  explore: [
    { t: "About Avena", d: "What Avena is, its two eras and its traditions.", h: "about.html" },
    { t: "Government", d: "The Office of the President, National Council and departments.", h: "government.html" },
    { t: "National History", d: "An interactive timeline from the founding on March 5, 2023.", h: "history.html" },
    { t: "Citizenship", d: "Information for Avenians and those interested in citizenship.", h: "citizenship.html" },
    { t: "Laws and Constitution", d: "The Constitution, laws and official decrees.", h: "constitution.html" },
    { t: "National Symbols", d: "The flag, motto, colours, national animal and anthem.", h: "symbols.html" },
    { t: "Territories", d: "Stonepoint, Verdan, New Ludis, Arcanus and North Pretinum.", h: "territories.html" }
  ],

  /* Office holders. Add { title, name, note } entries. */
  officials: [
    { title: "President", name: "Henry", note: "Head of the Government of Avena." },
    { title: "Vice President", name: "Grayson", note: "Also serves as Military General." }
  ],

  /* Government hierarchy, top to bottom. */
  hierarchy: [
    { label: "President", note: "Office of the President" },
    { label: "Vice President", note: "Office of the President" },
    { label: "National Council", note: "" },
    { label: "Government departments", note: "AMLK, AISS, APPS, BCD, ASASO, AFC, UFAM, GAFP, TGAU, ASA, ANDED" }
  ],

  /* name = full name, desc = responsibilities, head = department head, email (optional). Leave "" if unknown. */
  departments: [
    { acr: "AMLK", name: "", desc: "Education, including ASMIS.", head: "" },
    { acr: "AISS", name: "Avena Internal Security Service", desc: "Domestic security.", head: "" },
    { acr: "APPS", name: "Avena Presidential Protection Service", desc: "", head: "" },
    { acr: "BCD", name: "Border Control Division", desc: "", head: "", email: "avenabcd.gov@gmail.com" },
    { acr: "ASASO", name: "Avena Stars and Space Office", desc: "Operates the Stonepoint Observatory and the Black Star.", head: "" },
    { acr: "AFC", name: "Avena Foreign Communications", desc: "", head: "", email: "Avena.foreigncommunication@gmail.com" },
    { acr: "UFAM", name: "United Federation of Avena Management", desc: "", head: "" },
    { acr: "GAFP", name: "Grand Avena Forest Police", desc: "", head: "" },
    { acr: "TGAU", name: "The Grand Avena Union", desc: "Aid, finance and elections.", head: "" },
    { acr: "ASA", name: "", desc: "Intelligence and foreign operations.", head: "" },
    { acr: "ANDED", name: "Avena Nation Department of Exploration and Discovery", desc: "Mapping and resources.", head: "" }
  ],

  /* era: "founding" or "expansion". detail = longer text (optional). */
  history: [
    { id: "founding", date: "2023-03-05", era: "founding", title: "Founding of Avena", summary: "Avena was founded on March 5, 2023.", detail: "This date begins the Founding Era and is observed each year as the Day of Avena." },
    { id: "ludis-founded", date: "2023-05-25", era: "founding", title: "Founding of Ludis", summary: "Ludis was founded on May 25, 2023.", detail: "" },
    { id: "new-cratia-founded", date: "2023-07-05", era: "founding", title: "Founding of New Cratia", summary: "New Cratia was founded on July 5, 2023.", detail: "" },
    { id: "ludis-annexed", date: "2024-04-15", era: "founding", title: "Annexation of Ludis", summary: "Ludis was annexed by Avena on April 15, 2024.", detail: "" },
    { id: "new-cratia-annexed", date: "2024-12-31", era: "founding", title: "Annexation of New Cratia", summary: "New Cratia was annexed by Avena on December 31, 2024.", detail: "" },
    { id: "constitution-adopted", date: "2025-02-08", era: "founding", title: "Constitution adopted", summary: "The Constitution of Avena was adopted on February 8, 2025.", detail: "" },
    { id: "expansion-era", date: "2025-02-15", era: "expansion", title: "Beginning of the Expansion Era", summary: "The Expansion Era began on February 15, 2025.", detail: "" },
    { id: "arcanus-capital", date: "2026-03-24", era: "expansion", title: "Arcanus declared a temporary capital and fort", summary: "During the Revolutionary War, Arcanus was declared a temporary capital and fort on March 24, 2026.", detail: "" },
    { id: "constitution-rediscovered", date: "2026-06-08", era: "expansion", title: "Constitution rediscovered", summary: "The Constitution of Avena was rediscovered on June 8, 2026.", detail: "" }
  ],

  docTypes: [
    { type: "constitution", label: "Constitution" },
    { type: "law", label: "Laws and legislation" },
    { type: "decree", label: "Decrees and official orders" }
  ],

  /* Add laws and decrees here. type: constitution | law | decree.
     date = adoption/issue date, version e.g. "1.0", url = link to the document (PDF, page, etc.). */
  documents: [
    { id: "constitution-doc", type: "constitution", title: "Constitution of Avena", date: "2025-02-08", version: "", status: "In force", url: "",
      summary: "Adopted on February 8, 2025 and rediscovered on June 8, 2026. The full text has not yet been published on this website." }
  ],

  /* News: add a new entry; the newest are shown first on the homepage automatically.
     category: Government | History | Territories | Announcements (or add your own)
     body: array of paragraphs. image: optional path such as "assets/images/photo.jpg" */
  news: [
    { id: "website-launch", date: "2026-11-14", category: "Announcements", headline: "Official national website published",
      summary: "The Government of Avena now has an official national website.",
      body: ["This website brings together public information about Avena's government, history, constitution, citizenship, symbols and territories.", "Pages that show a marked placeholder will be completed as official information is published."], image: "" },
    { id: "constitution-rediscovered", date: "2026-06-08", category: "History", headline: "Constitution rediscovered",
      summary: "Avena's Constitution, adopted on February 8, 2025, was rediscovered.",
      body: ["The Constitution of Avena, adopted on February 8, 2025, was rediscovered on June 8, 2026."], image: "" },
    { id: "arcanus-temporary-capital", date: "2026-03-24", category: "Territories", headline: "Arcanus declared a temporary capital and fort",
      summary: "Arcanus took on a wartime role during the Revolutionary War.",
      body: ["On March 24, 2026, during the Revolutionary War, Arcanus was declared a temporary capital and fort."], image: "" },
    { id: "expansion-era-begins", date: "2025-02-15", category: "History", headline: "The Expansion Era begins",
      summary: "A new era in Avena's history began on February 15, 2025.",
      body: ["The Expansion Era began on February 15, 2025, one week after the Constitution was adopted."], image: "" },
    { id: "constitution-adopted-news", date: "2025-02-08", category: "Government", headline: "Constitution adopted",
      summary: "Avena adopted its Constitution on February 8, 2025.",
      body: ["The Constitution of Avena was adopted on February 8, 2025."], image: "" }
  ],

  /* Only confirmed information. Add facts as short sentences. */
  territories: [
    { id: "stonepoint", name: "Stonepoint", kind: "Capital seat", facts: ["Stonepoint is the capital seat of Avena.", "The Stonepoint Observatory is operated by ASASO."] },
    { id: "verdan", name: "Verdan", kind: "Province", facts: ["Verdan was formerly known as Treeland."] },
    { id: "new-ludis", name: "New Ludis", kind: "Territory", facts: [] },
    { id: "arcanus", name: "Arcanus", kind: "Territory", facts: ["Arcanus was declared a temporary capital and fort on March 24, 2026, during the Revolutionary War."] },
    { id: "north-pretinum", name: "North Pretinum", kind: "Territory", facts: [] }
  ],

  /* url "" = placeholder (button explains the link is not yet published). */
  services: [
    { group: "Citizens", items: [
      { id: "registry", title: "Citizen registry", desc: "The official register of Avenian citizens.", url: "" },
      { id: "national-id", title: "National identification services", desc: "Apply for or verify national identification.", url: "" } ] },
    { group: "Government", items: [
      { id: "departments", title: "Government departments", desc: "All national departments and their responsibilities.", url: "government.html#departments" },
      { id: "council", title: "National Council", desc: "Information about the National Council.", url: "government.html#council" } ] },
    { group: "Democracy and documents", items: [
      { id: "elections", title: "Elections and referendums", desc: "Voting information and results.", url: "" },
      { id: "documents", title: "Public documents", desc: "The Constitution, laws and decrees.", url: "constitution.html" } ] }
  ],

  holidays: [
    { date: "Feb 22", name: "Flag Day" }, { date: "Mar 5", name: "Day of Avena" },
    { date: "Apr 1", name: "Avena's Legacy Day" }, { date: "Apr 4", name: "Hockey Day" },
    { date: "Jun 6", name: "President Day" }, { date: "Jul 3-5", name: "Skyfall Festival" },
    { date: "Jul 6", name: "Siblings Day" }, { date: "Nov 28", name: "Culture Day" },
    { date: "Dec 10", name: "Comeback Day" }
  ],

  /* Extra entries for website search. */
  pages: [
    { title: "Home", url: "index.html", text: "Welcome to Avena official national website news explore" },
    { title: "About Avena", url: "about.html", text: "micronation founded March 5, 2023 Founding Era Expansion Era national identity geography traditions" },
    { title: "Government", url: "government.html", text: "President Vice President National Council departments hierarchy Office of the President" },
    { title: "National History", url: "history.html", text: "timeline events history Founding Era Expansion Era" },
    { title: "Constitution and Laws", url: "constitution.html", text: "constitution laws legislation decrees official orders documents versions" },
    { title: "Citizenship", url: "citizenship.html", text: "citizens Avenians citizenship registry rights responsibilities policies" },
    { title: "Citizenship rights and responsibilities", url: "citizenship.html#rights", text: "citizen rights duties responsibilities Avenians" },
    { title: "Citizenship policies", url: "citizenship.html#policies", text: "citizenship policy application eligibility" },
    { title: "National Symbols", url: "symbols.html", text: "flag motto colours animal anthem" },
    { title: "National flag", url: "symbols.html#flag", text: "red green blue stripes white square black star" },
    { title: "National anthem", url: "symbols.html#anthem", text: "anthem Viva L'Avena song lyrics" },
    { title: "National animal: Fox", url: "symbols.html#animal", text: "fox national animal" },
    { title: "National motto", url: "symbols.html#motto", text: "Viva l'Avena motto" },
    { title: "Traditions and holidays", url: "about.html#traditions", text: "holidays Flag Day Day of Avena Hockey Day Skyfall Festival Culture Day Comeback Day" },
    { title: "National Council", url: "government.html#council", text: "National Council legislature" },
    { title: "Office of the President", url: "government.html#office", text: "President executive office" },
    { title: "Territories", url: "territories.html", text: "Stonepoint Verdan New Ludis Arcanus North Pretinum map" },
    { title: "News and Announcements", url: "news.html", text: "news announcements archive" },
    { title: "Public Services", url: "services.html", text: "services directory registry identification elections documents" },
    { title: "Contact the government", url: "index.html#contact", text: "contact email address government foreign communication border control" }
  ]
};

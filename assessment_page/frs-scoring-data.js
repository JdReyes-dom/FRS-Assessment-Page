// ============================================================
// FRS SCORING DATA — v10 (FINAL CALIBRATION)
// Column order: [DS, BD, AI, DO, IS, IoT, SD, DA, CS, WD]
// ============================================================

const FRS_TRACK_KEYS = [
  "data-science","big-data","artificial-intelligence","devops",
  "modern-it-support","internet-of-things","software-development",
  "data-analyst","cyber-security","web-development"
];

const FRS_TRACK_NAMES = {
  "data-science":"Data Science","big-data":"Big Data",
  "artificial-intelligence":"Artificial Intelligence","devops":"DevOps",
  "modern-it-support":"Modern IT Support","internet-of-things":"Internet of Things",
  "software-development":"Software Development","data-analyst":"Data Analyst",
  "cyber-security":"Cyber Security","web-development":"Web Development"
};

const FRS_SCORING_DATA = {

  // ---- SECTION 1: ROLES AND ENVIRONMENT ----

  // Q1 Fast-paced
  1:  { 5:[0.5,0.25,0.5,1.0,1.0,0.25,0.25,0.5,0.25,1.0],
        4:[0.25,0.25,0.25,0.75,0.75,0.25,0.25,0.25,0.25,0.75],
        3:[0.25,0.25,0.25,0.5,0.5,0,0.25,0.25,0.25,0.5],
        2:[0,0,0,0.25,0.25,0,0,0,0,0.25],
        1:[0,0,0,0,0,0,0,0,0,0] },

  // Q2 Complex — SD/DS exclusive
  2:  { 5:[1.0,0.75,0.75,0.25,0.25,0.25,1.0,0.5,0.5,0.25],
        4:[0.75,0.5,0.5,0.25,0.25,0.25,0.75,0.25,0.5,0.25],
        3:[0.5,0.25,0.25,0,0,0,0.5,0.25,0.25,0],
        2:[0.25,0,0.25,0,0,0,0.25,0,0.25,0],
        1:[0,0,0,0,0,0,0,0,0,0] },

  // Q3 Competitive team
  3:  { 5:[0.25,0.5,0.5,1.0,1.0,0.25,0.25,0.25,0.25,1.0],
        4:[0.25,0.25,0.25,0.75,0.75,0.25,0.25,0.25,0.25,0.75],
        3:[0,0.25,0,0.5,0.5,0.25,0.25,0,0,0.5],
        2:[0,0,0,0.25,0.25,0,0,0,0,0.25],
        1:[0,0,0,0,0,0,0,0,0,0] },

  // Q4 Structure
  4:  { 5:[0.75,1.0,0.25,0.75,1.0,0.5,0.5,1.0,1.0,0.25],
        4:[0.5,0.75,0.25,0.5,0.75,0.25,0.5,0.75,0.75,0.25],
        3:[0.25,0.5,0,0.25,0.5,0.25,0.25,0.5,0.5,0],
        2:[0,0.25,0,0,0.25,0,0,0.25,0.25,0],
        1:[0,0,0,0,0,0,0,0,0,0] },

  // Q5 Remote — DS/AI/WD
  5:  { 5:[1.0,0.25,1.0,0.5,0.25,0.25,0.5,0.5,0.5,1.0],
        4:[0.75,0.25,0.75,0.25,0.25,0.25,0.5,0.25,0.25,0.75],
        3:[0.5,0,0.5,0.25,0,0,0.25,0.25,0.25,0.5],
        2:[0.25,0,0.25,0,0,0,0,0,0,0.25],
        1:[0,0,0,0,0,0,0,0,0,0] },

  // Q6 Focus in noise — DA, CS exclusive (DS reduced)
  6:  { 5:[0.5,1.0,0.5,0.5,0.25,0.25,0.25,1.0,1.0,0.25],
        4:[0.25,0.75,0.5,0.25,0.25,0.25,0.25,0.75,0.75,0.25],
        3:[0.25,0.5,0.25,0.25,0,0,0.25,0.5,0.5,0],
        2:[0,0.25,0,0,0,0,0,0.25,0.25,0],
        1:[0,0,0,0,0,0,0,0,0,0] },

  // Q7 Collaboration
  7:  { 5:[0.25,0.5,0.25,1.0,1.0,0.25,0.25,0.25,0.25,1.0],
        4:[0.25,0.25,0.25,0.75,0.75,0.25,0.25,0.25,0.25,0.75],
        3:[0,0.25,0.25,0.5,0.5,0,0.25,0,0,0.5],
        2:[0,0,0,0.25,0.25,0,0,0,0,0.25],
        1:[0,0,0,0,0,0,0,0,0,0] },

  // Q8 Universal
  8:  { 5:[0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4],
        4:[0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3],
        3:[0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2],
        2:[0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1],
        1:[0,0,0,0,0,0,0,0,0,0] },

  // Q9 Creative — AI, IoT, WD exclusive
  9:  { 5:[0.25,0.25,1.0,0.5,0.25,1.0,0.25,0,0,1.0],
        4:[0.25,0,0.75,0.25,0.25,0.75,0.25,0,0,0.75],
        3:[0,0,0.5,0.25,0.25,0.5,0,0,0,0.5],
        2:[0,0,0.25,0,0,0.25,0,0,0,0.25],
        1:[0,0,0,0,0,0,0,0,0,0] },

  // Q10 Flowcharts — BD, DA exclusive
  10: { 5:[0.5,1.0,0.25,0.75,0.75,0.5,0.5,1.0,1.0,0.25],
        4:[0.5,0.75,0.25,0.5,0.5,0.25,0.5,0.75,0.75,0.25],
        3:[0.25,0.5,0,0.25,0.25,0.25,0.25,0.5,0.5,0],
        2:[0,0.25,0,0,0,0,0,0.25,0.25,0],
        1:[0,0,0,0,0,0,0,0,0,0] },

  // ---- SECTION 2: HOBBIES AND INTERESTS ----

  // Q11 Design — WD exclusive
  11: { 5:[0,0,0.75,0,0,0.25,0.25,0,0,1.0],
        4:[0,0,0.5,0,0,0.25,0.25,0,0,0.75],
        3:[0,0,0.25,0,0,0,0,0,0,0.5],
        2:[0,0,0,0,0,0,0,0,0,0.25],
        1:[0,0,0,0,0,0,0,0,0,0] },

  // Q12 Systems — SD/DS exclusive (AI reduced)
  12: { 5:[1.0,0.75,0.75,0.5,0.25,0.25,1.0,0.5,1.0,0.25],
        4:[0.75,0.5,0.5,0.25,0.25,0.25,0.75,0.5,0.75,0.25],
        3:[0.5,0.5,0.5,0.25,0,0,0.5,0.25,0.5,0],
        2:[0.25,0.25,0.25,0,0,0,0.25,0,0.25,0],
        1:[0,0,0,0,0,0,0,0,0,0] },

  // Q13 Math — DS, BD exclusive (DA reduced)
  13: { 5:[1.0,1.0,0.25,0,0,0,0.5,0.5,0.25,0],
        4:[0.75,0.75,0.25,0,0,0,0.5,0.5,0.25,0],
        3:[0.5,0.5,0,0,0,0,0.25,0.25,0,0],
        2:[0.25,0.25,0,0,0,0,0,0.25,0,0],
        1:[0,0,0,0,0,0,0,0,0,0] },

  // Q14 Research — DS, IoT exclusive (AI reduced)
  14: { 5:[1.0,0.5,0.75,0.25,0,1.0,0.25,0.25,0.5,0],
        4:[0.75,0.5,0.5,0.25,0,0.75,0.25,0.25,0.5,0],
        3:[0.5,0.25,0.5,0,0,0.5,0.25,0,0.25,0],
        2:[0.25,0,0.25,0,0,0.25,0,0,0,0],
        1:[0,0,0,0,0,0,0,0,0,0] },

  // Q15 Organize — DO, IS exclusive
  15: { 5:[0,0.5,0.25,1.0,1.0,0,0.25,0.5,0.25,0.75],
        4:[0,0.25,0.25,0.75,0.75,0,0.25,0.25,0.25,0.5],
        3:[0,0.25,0,0.5,0.5,0,0.25,0.25,0,0.25],
        2:[0,0,0,0.25,0.25,0,0,0,0,0.25],
        1:[0,0,0,0,0,0,0,0,0,0] },

  // Q16 Build — IoT, WD exclusive (AI reduced)
  16: { 5:[0.25,0.25,0.5,0.25,0.25,1.0,0.5,0.25,0,1.0],
        4:[0.25,0.25,0.5,0.25,0.25,0.75,0.5,0.25,0,0.75],
        3:[0.25,0,0.25,0,0.25,0.5,0.25,0,0,0.5],
        2:[0,0,0.25,0,0,0.25,0,0,0,0.25],
        1:[0,0,0,0,0,0,0,0,0,0] },

  // Q17 Poetry/explain — IS, WD exclusive
  17: { 5:[0.25,0.25,0.5,0.5,1.0,0,0.25,0.25,0.25,1.0],
        4:[0.25,0.25,0.5,0.25,0.75,0,0.25,0.25,0.25,0.75],
        3:[0,0,0.25,0.25,0.5,0,0.25,0,0,0.5],
        2:[0,0,0,0,0.25,0,0,0,0,0.25],
        1:[0,0,0,0,0,0,0,0,0,0] },

  // Q18 Universal
  18: { 5:[0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4],
        4:[0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3],
        3:[0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2],
        2:[0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1],
        1:[0,0,0,0,0,0,0,0,0,0] },

  // Q19 Puzzles — SD/DS/BD/DA exclusive (AI reduced)
  19: { 5:[1.0,1.0,0.5,0.25,0,0,1.0,1.0,0.75,0],
        4:[0.75,0.75,0.5,0.25,0,0,0.75,0.75,0.5,0],
        3:[0.5,0.5,0.25,0,0,0,0.5,0.5,0.5,0],
        2:[0.25,0.25,0,0,0,0,0.25,0.25,0.25,0],
        1:[0,0,0,0,0,0,0,0,0,0] },

  // Q20 Observe — IoT, DA exclusive
  20: { 5:[0.5,0.5,0.25,0.25,0.25,1.0,0.25,1.0,1.0,0.5],
        4:[0.25,0.5,0.25,0.25,0.25,0.75,0.25,0.75,0.75,0.25],
        3:[0.25,0.25,0.25,0,0,0.5,0.25,0.5,0.5,0.25],
        2:[0,0.25,0,0,0,0.25,0,0.25,0.25,0],
        1:[0,0,0,0,0,0,0,0,0,0] },

  // ---- SECTION 3: PERSONAL QUALITIES ----

  // Q21 Detail — BD, DA exclusive
  21: { 5:[0.25,1.0,0.25,0.25,0.75,0.25,0.25,1.0,0.5,0.25],
        4:[0.25,0.75,0.25,0.25,0.5,0.25,0.25,0.75,0.5,0.25],
        3:[0.25,0.5,0.25,0.25,0.5,0.25,0.25,0.5,0.25,0.25],
        2:[0,0.25,0,0,0.25,0,0,0.25,0,0],
        1:[0,0,0,0,0,0,0,0,0,0] },

  // Q22 Resilience — CS, DO exclusive (DS/IS reduced)
  22: { 5:[0.25,0.5,0.5,1.0,0.5,0.25,0.25,0.5,1.25,0.75],
        4:[0.25,0.25,0.25,0.75,0.25,0.25,0.25,0.25,1.0,0.5],
        3:[0.25,0.25,0.25,0.5,0.25,0,0.25,0.25,0.75,0.25],
        2:[0,0,0,0.25,0,0,0,0,0.5,0],
        1:[0,0,0,0,0,0,0,0,0,0] },

  // Q23 Checklists — BD, DA exclusive
  23: { 5:[0.25,1.0,0.25,0.25,0.75,0.25,0.25,1.0,0.5,0.25],
        4:[0.25,0.75,0.25,0.25,0.5,0.25,0.25,0.75,0.5,0.25],
        3:[0.25,0.5,0.25,0.25,0.5,0.25,0.25,0.5,0.25,0.25],
        2:[0,0.25,0,0,0.25,0,0,0.25,0,0],
        1:[0,0,0,0,0,0,0,0,0,0] },

  // Q24 Behind scenes — DS, AI exclusive
  24: { 5:[1.0,0.25,1.0,0.5,0.25,0.25,0.5,0.5,0.25,1.0],
        4:[0.75,0.25,0.75,0.5,0.25,0.25,0.5,0.25,0.25,0.75],
        3:[0.5,0,0.5,0.25,0,0,0.25,0.25,0.25,0.5],
        2:[0.25,0,0.25,0,0,0,0,0,0,0.25],
        1:[0,0,0,0,0,0,0,0,0,0] },

  // Q25 Calm — CS exclusive (DS reduced)
  25: { 5:[0.5,0.5,0.5,1.0,1.0,0.25,0.25,0.25,1.25,0.5],
        4:[0.25,0.5,0.5,0.75,0.75,0.25,0.25,0.25,1.0,0.5],
        3:[0.25,0.25,0.25,0.5,0.5,0,0.25,0.25,0.75,0.25],
        2:[0,0,0,0.25,0.25,0,0,0,0.5,0],
        1:[0,0,0,0,0,0,0,0,0,0] },

  // Q26 Curiosity — DS, AI, IoT exclusive (SD reduced)
  26: { 5:[1.0,0.5,1.0,0.25,0,1.0,0.25,0.25,0,0],
        4:[0.75,0.5,0.75,0.25,0,0.75,0.25,0.25,0,0],
        3:[0.5,0.25,0.5,0,0,0.5,0.25,0.25,0,0],
        2:[0.25,0,0.25,0,0,0.25,0,0,0,0],
        1:[0,0,0,0,0,0,0,0,0,0] },

  // Q27 Explain simply — IS, WD exclusive
  27: { 5:[0,0,0.5,0.75,1.0,0,0.25,0,0,1.0],
        4:[0,0,0.5,0.5,0.75,0,0.25,0,0,0.75],
        3:[0,0,0.25,0.5,0.5,0,0.25,0,0,0.5],
        2:[0,0,0.25,0.25,0.25,0,0,0,0,0.25],
        1:[0,0,0,0,0,0,0,0,0,0] },

  // Q28 Adapt — DO, WD exclusive (IS reduced)
  28: { 5:[0.5,0.25,0.75,1.0,0.25,0.25,0.5,0.25,0.5,1.0],
        4:[0.5,0.25,0.5,0.75,0.25,0.25,0.5,0.25,0.5,0.75],
        3:[0.25,0.25,0.25,0.5,0.25,0,0.25,0.25,0.25,0.5],
        2:[0,0,0,0.25,0,0,0.25,0,0,0.25],
        1:[0,0,0,0,0,0,0,0,0,0] },

  // Q29 Troubleshoot — CS, SD exclusive (DS reduced)
  29: { 5:[0.25,1.0,0.5,0.75,1.0,0.5,1.0,0.5,0.75,0],
        4:[0.25,0.75,0.5,0.75,0.75,0.5,0.75,0.5,0.5,0],
        3:[0.25,0.5,0.25,0.5,0.5,0.25,0.5,0.25,0.25,0],
        2:[0,0.25,0,0.25,0.25,0,0.25,0,0.25,0],
        1:[0,0,0,0,0,0,0,0,0,0] },

  // Q30 Speaker — IS, WD exclusive
  30: { 5:[0,0,0.5,0.75,1.0,0,0.25,0,0,1.0],
        4:[0,0,0.5,0.5,0.75,0,0.25,0,0,0.75],
        3:[0,0,0.25,0.5,0.5,0,0.25,0,0,0.5],
        2:[0,0,0.25,0.25,0.25,0,0,0,0,0.25],
        1:[0,0,0,0,0,0,0,0,0,0] }
};

const FRS_TRACK_PROFILES = {
  "data-science": { name: "Data Science", description: "Ideal for analytical problem-solvers who are driven by curiosity and committed to using data, mathematics, and technology to tackle complex challenges.", roles: ["Data Analysts","Accountants","Digital Forensics Engineers","Researchers","Marketing Firm Specialist","Popcom","PSA","Customs","PPE Specialists","Workforce Management","Supply Chain","Procurement","Full Stack Developers","Programmers","Data Scientists","Virtual Assistants"], characterImg: "images/track-5-character.svg?v=2", iconImg: "images/track-5-icon.svg?v=2" },
  "big-data": { name: "Big Data", description: "Perfect for detail-oriented individuals who are driven to organize, process, and uncover valuable insights from large volumes of data.", roles: ["Workforce Planner","Supply Chain Members","Procurement","Stock Inventory Specialists","Accountants","HRIS Administrators","Registrar","Admin Personnel","Hospital Admission Specialist/Officer","BCP Officer","Quality Assurance","Government Personnel for Volume Transactions"], characterImg: "images/track-2-character.svg?v=2", iconImg: "images/track-2-icon.svg?v=2" },
  "artificial-intelligence": { name: "Artificial Intelligence", description: "Ideal for curious and innovative minds who are passionate about creating intelligent systems that can learn, adapt, and solve real-world problems.", roles: ["Any industry (student or professional)","Developers & Programmers","AI Algorithm Designers"], characterImg: "images/track-1-character.svg?v=2", iconImg: "images/track-1-icon.svg?v=2" },
  "devops": { name: "DevOps", description: "Perfect for collaborative and adaptable individuals committed to improving workflows, automating processes, and delivering reliable software solutions.", roles: ["DevOps Specialist","Full Stack Developers","Executives","Administrators","Resource Planners","Infrastructure Engineers","Programmers","Network Security"], characterImg: "images/track-6-character.svg?v=2", iconImg: "images/track-6-icon.svg?v=2" },
  "modern-it-support": { name: "Modern IT Support", description: "Suited for dependable and service-oriented individuals dedicated to resolving technical issues and helping others make the most of technology, Virtual Assistants.", roles: ["BPO","Customer Support (Online Transactions)","IT Support Technician","Telemarketers","Hardware Technicians","RPO Professionals","Call Center & Hotline Agents","Operations Managers"], characterImg: "images/track-8-character.svg?v=2", iconImg: "images/track-8-icon.svg?v=2" },
  "internet-of-things": { name: "Internet of Things", description: "Designed for innovative and hands-on individuals passionate about connecting devices and building smart technologies that improve everyday life.", roles: ["Industrial Designer","Civil Engineers","Environmental Scientist","Aeronautics Engineers","Mechanical Engineers","Chemical Engineers","R&D Professionals","Scientists","Entrepreneurs","Production Managers","Lab Researchers","Business Development Specialist"], characterImg: "images/track-7-character.svg?v=2", iconImg: "images/track-7-icon.svg?v=2" },
  "software-development": { name: "Software Development", description: "Ideal for creative and logical thinkers passionate about designing and developing software solutions that address real-world needs.", roles: ["Full Stack Developers","Content Developers","Functional Consultants","FinTech","Game Developers","SMEs","UI/UX Designers","Programmers","Project Managers"], characterImg: "images/track-9-character.svg?v=2", iconImg: "images/track-9-icon.svg?v=2" },
  "data-analyst": { name: "Data Analyst", description: "Well-suited for observant and logical thinkers passionate about transforming data into meaningful insights that support informed decisions.", roles: ["Encoders","Data Analysts","Supervisors & Up (All Industries)","Accountants","Digital Forensics Engineers","Researchers","Marketing Firm Specialist","Popcom","PSA","Customs","Drop Shippers","PPE Specialists","Workforce Management","Supply Chain","Procurement","Virtual Assistants"], characterImg: "images/track-4-character.svg?v=2", iconImg: "images/track-4-icon.svg?v=2" },
  "cyber-security": { name: "Cyber Security", description: "Suited for vigilant and analytical individuals dedicated to protecting systems, networks, and digital information from evolving cyber threats.", roles: ["NBI","CIDG","Cloud Computing Specialist","FinTech Member","IT Engineers","Infrastructure Engineers","System Leads","Administrators","Auditors","Forensics Engineers","Lawyers"], characterImg: "images/track-3-character.svg?v=2", iconImg: "images/track-3-icon.svg?v=2" },
  "web-development": { name: "Web Development", description: "Perfect for creative and detail-oriented individuals committed to building engaging, accessible, and user-friendly digital experiences.", roles: ["Full Stack Developers","Content Developers","Functional Consultants","FinTech","Game Developers","SMEs","UI/UX Designers","Programmers","Project Managers"], characterImg: "images/track-10-character.svg?v=2", iconImg: "images/track-10-icon.svg?v=2" }
};

function calculateFRSScores(answers) {
  const scores = {};
  FRS_TRACK_KEYS.forEach(k => scores[k] = 0);
  for (let q = 1; q <= 30; q++) {
    const scaleValue = answers[q];
    if (!scaleValue) continue;
    const row = FRS_SCORING_DATA[q];
    if (!row) continue;
    const points = row[scaleValue];
    if (!points) continue;
    FRS_TRACK_KEYS.forEach((key, idx) => { scores[key] += points[idx]; });
  }
  Object.keys(scores).forEach(k => { scores[k] = Math.round(scores[k] * 100) / 100; });
  const ranked = FRS_TRACK_KEYS
    .map(key => ({ key, name: FRS_TRACK_NAMES[key], score: scores[key] }))
    .sort((a, b) => b.score - a.score);
  return { scores, ranked, topTrack: ranked[0].key, topScore: ranked[0].score };
}
/* ==========================================================================
   FRS PRE-TEST TRACKS & ASSET REGISTRY
   Centralized data array defining 10 specialized career tracks.
   ========================================================================== */

const FRS_TRACKS_DATA = [
  {
    id: "ai",
    number: 1,
    name: "Artificial Intelligence",
    characterImg: "images/track-1-character.svg?v=2",
    iconImg: "images/track-1-icon.svg?v=2",
    description: "Ideal for curious and innovative minds who are passionate about creating intelligent systems that can learn, adapt, and solve real-world problems.",
    rolesAnchor: "roles-ai",
    roles: [
      "Any industry (student or professional)",
      "Developers & Programmers",
      "AI Algorithm Designers"
    ]
  },
  {
    id: "bigdata",
    number: 2,
    name: "Big Data",
    characterImg: "images/track-2-character.svg?v=2",
    iconImg: "images/track-2-icon.svg?v=2",
    description: "Perfect for detail-oriented individuals who are driven to organize, process, and uncover valuable insights from large volumes of data.",
    rolesAnchor: "roles-bigdata",
    roles: [
      "Workforce Planner",
      "Supply Chain Members",
      "Procurement",
      "Stock Inventory Specialists",
      "Accountants",
      "HRIS Administrators",
      "Registrar",
      "Admin Personnel",
      "Hospital Admission Specialist/Officer",
      "BCP Officer",
      "Quality Assurance",
      "Government Personnel for Volume Transactions"
    ]
  },
  {
    id: "cybersecurity",
    number: 3,
    name: "Cyber Security",
    characterImg: "images/track-3-character.svg?v=2",
    iconImg: "images/track-3-icon.svg?v=2",
    description: "Suited for vigilant and analytical individuals dedicated to protecting systems, networks, and digital information from evolving cyber threats.",
    rolesAnchor: "roles-cybersecurity",
    roles: [
      "NBI",
      "CIDG",
      "Cloud Computing Specialist",
      "FinTech Member",
      "IT Engineers",
      "Infrastructure Engineers",
      "System Leads",
      "Administrators",
      "Auditors",
      "Forensics Engineers",
      "Lawyers"
    ]
  },
  {
    id: "dataanalysis",
    number: 4,
    name: "Data Analysis",
    characterImg: "images/track-4-character.svg?v=2",
    iconImg: "images/track-4-icon.svg?v=2",
    description: "Well-suited for observant and logical thinkers passionate about transforming data into meaningful insights that support informed decisions.",
    rolesAnchor: "roles-dataanalysis",
    roles: [
      "Encoders",
      "Data Analysts",
      "Supervisors & Up (All Industries)",
      "Accountants",
      "Digital Forensics Engineers",
      "Researchers",
      "Marketing Firm Specialist",
      "Popcom",
      "PSA",
      "Customs",
      "Drop Shippers",
      "PPE Specialists",
      "Workforce Management",
      "Supply Chain",
      "Procurement",
      "Virtual Assistants"
    ]
  },
  {
    id: "datascience",
    number: 5,
    name: "Data Science",
    characterImg: "images/track-5-character.svg?v=2",
    iconImg: "images/track-5-icon.svg?v=2",
    description: "Ideal for analytical problem-solvers driven by curiosity and committed to using data, mathematics, and technology to tackle complex challenges.",
    rolesAnchor: "roles-datascience",
    roles: [
      "Data Analysts",
      "Accountants",
      "Digital Forensics Engineers",
      "Researchers",
      "Marketing Firm Specialist",
      "Popcom",
      "PSA",
      "Customs",
      "PPE Specialists",
      "Workforce Management",
      "Supply Chain",
      "Procurement",
      "Full Stack Developers",
      "Programmers",
      "Data Scientists",
      "Virtual Assistants"
    ]
  },
  {
    id: "devops",
    number: 6,
    name: "DevOps",
    characterImg: "images/track-6-character.svg?v=2",
    iconImg: "images/track-6-icon.svg?v=2",
    description: "Perfect for collaborative and adaptable individuals committed to improving workflows, automating processes, and delivering reliable software solutions.",
    rolesAnchor: "roles-devops",
    roles: [
      "DevOps Specialist",
      "Full Stack Developers",
      "Executives",
      "Administrators",
      "Resource Planners",
      "Infrastructure Engineers",
      "Programmers",
      "Network Security"
    ]
  },
  {
    id: "iot",
    number: 7,
    name: "Internet of Things",
    characterImg: "images/track-7-character.svg?v=2",
    iconImg: "images/track-7-icon.svg?v=2",
    description: "Designed for innovative and hands-on individuals passionate about connecting devices and building smart technologies that improve everyday life.",
    rolesAnchor: "roles-iot",
    roles: [
      "Industrial Designer",
      "Civil Engineers",
      "Environmental Scientist",
      "Aeronautics Engineers",
      "Mechanical Engineers",
      "Chemical Engineers",
      "R&D Professionals",
      "Scientists",
      "Entrepreneurs",
      "Production Managers",
      "Lab Researchers",
      "Business Development Specialist"
    ]
  },
  {
    id: "itsupport",
    number: 8,
    name: "Modern IT Support",
    characterImg: "images/track-8-character.svg?v=2",
    iconImg: "images/track-8-icon.svg?v=2",
    description: "Suited for dependable and service-oriented individuals dedicated to resolving technical issues and helping others make the most of technology, Virtual Assistants.",
    rolesAnchor: "roles-itsupport",
    roles: [
      "BPO",
      "Customer Support (Online Transactions)",
      "IT Support Technician",
      "Telemarketers",
      "Hardware Technicians",
      "RPO Professionals",
      "Call Center & Hotline Agents",
      "Operations Managers"
    ]
  },
  {
    id: "software",
    number: 9,
    name: "Software Development",
    characterImg: "images/track-9-character.svg?v=2",
    iconImg: "images/track-9-icon.svg?v=2",
    description: "Ideal for creative and logical thinkers passionate about designing and developing software solutions that address real-world needs.",
    rolesAnchor: "roles-software",
    roles: [
      "Full Stack Developers",
      "Content Developers",
      "Functional Consultants",
      "FinTech",
      "Game Developers",
      "SMEs",
      "UI/UX Designers",
      "Programmers",
      "Project Managers"
    ]
  },
  {
    id: "web",
    number: 10,
    name: "Web Development",
    characterImg: "images/track-10-character.svg?v=2",
    iconImg: "images/track-10-icon.svg?v=2",
    description: "Perfect for creative and detail-oriented individuals committed to building engaging, accessible, and user-friendly digital experiences.",
    rolesAnchor: "roles-web",
    roles: [
      "Full Stack Developers",
      "Content Developers",
      "Functional Consultants",
      "FinTech",
      "Game Developers",
      "SMEs",
      "UI/UX Designers",
      "Programmers",
      "Project Managers"
    ]
  }
];

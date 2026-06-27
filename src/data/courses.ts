import aiWorkflowLogo from "@/assets/program-images/Ai Workflow.png";
import amazonLogo from "@/assets/program-images/amazon-removebg-preview.png";
import apiLogo from "@/assets/program-images/API-removebg-preview.png";
import csharpLogo from "@/assets/program-images/c-sharp.png";
import dotnetLogo from "@/assets/program-images/dotnet-removebg-preview.png";
import ecommerceLogo from "@/assets/program-images/ecommers-removebg-preview.png";
import expressLogo from "@/assets/program-images/express_js-removebg-preview.png";
import googleAdsLogo from "@/assets/program-images/Google-AdWords-logo-rectangle.png";
import graphicDesignLogo from "@/assets/program-images/graphic-design-removebg-preview.png";
import htmlLogo from "@/assets/program-images/HTML-5-Badge-Logo.png";
import makeLogo from "@/assets/program-images/Make-No-Code-DataScientest-removebg-preview.png";
import marketplaceLogo from "@/assets/program-images/marketplace-removebg-preview.png";
import metaAdsLogo from "@/assets/program-images/meta ad .png";
import mongoLogo from "@/assets/program-images/mongo-removebg-preview.png";
import nodeLogo from "@/assets/program-images/node_js-removebg-preview.png";
import promptLogo from "@/assets/program-images/prompt-engineering-logo.png";
import pythonLogo from "@/assets/program-images/python-removebg-preview.png";
import reactLogo from "@/assets/program-images/React-removebg-preview.png";
import shopifyLogo from "@/assets/program-images/shopify-removebg-preview.png";
import socialMarketingLogo from "@/assets/program-images/social-media-marketing-removebg-preview.png";
import tiktokLogo from "@/assets/program-images/tiktok-advertising.png";

export interface Course {
  id: string;
  number: string;
  track: string;
  title: string;
  programName: string;
  description: string;
  category: string;
  duration: string;
  sessions: string;
  level: string;
  price: number;
  image: string;
  instructor: string;
  instructorRole: string;
  overview: string;
  outcomes: string[];
  tools: string[];
  toolLogos: { name: string; image: string }[];
  curriculum: { week: string; title: string; lessons: string[] }[];
  industryTrends: string[];
  impactHeadline: string;
  impactMetrics: { label: string; value: string }[];
  defaultProfile: string;
}

export const professionalProfiles = [
  "Student (CS / IT / Engineering)",
  "Student (Non-Tech / Business / Arts)",
  "Working Professional (Developer / Marketer / Corporate Employee)",
  "Freelancer / Remote Operator",
  "Business Owner / Agency Founder",
  "Teacher / Educator / Academic Administrator",
  "Unemployed / Seeking Transition",
];

export const courses: Course[] = [
  {
    id: "next-gen-developer",
    number: "01",
    track: "Development Track",
    title: "Next-Gen Developer",
    programName: "Next-Gen Developer: Vibe Coding & Core Development",
    description: "Full-Stack Software Architecture, AI Orchestration & Guaranteed Internship",
    category: "Development",
    duration: "5 Months",
    sessions: "3 Classes/Week",
    level: "Advanced",
    price: 65000,
    image: "/p2p/nextGen.jpeg",
    instructor: "Hakamtechsol Technical Board",
    instructorRole: "Enterprise Software Leads",
    overview:
      "A comprehensive, career-defining cohort program designed to turn learners into professional software developers. Instead of focus on rote learning of complex codes, you will master next-generation code assistants, database connections, and full-stack integration pipelines. Includes a guaranteed company internship at Hakamtechsol to build real corporate experience.",
    outcomes: [
      "Construct dynamic and fully responsive web application interfaces.",
      "Design and deploy secure backend servers and RESTful controller endpoints.",
      "Connect and query relational tables alongside document database designs.",
      "Automate cloud-ready deployment routes and version control pipelines.",
      "Integrate intelligent server-side automation scripts and system workflows.",
      "Receive a guaranteed professional developer internship at Hakamtechsol."
    ],
    tools: [
      "Frontend UI Systems",
      "API Architectures",
      "Database Engines",
      "AI Workflows",
      "Cloud Pipelines",
      "Version Control"
    ],
    toolLogos: [
      { name: "Frontend UI", image: reactLogo },
      { name: "API", image: apiLogo },
      { name: "Database", image: mongoLogo },
      { name: "AI Workflow", image: aiWorkflowLogo },
      { name: "Cloud Pipelines", image: makeLogo },
    ],
    curriculum: [
      {
        week: "Month 1",
        title: "Frontend Design & Smart AI Workspace Foundations",
        lessons: [
          "Core web interfaces and boilerplates",
          "Responsive styling and formatting systems",
          "Layout alignments, navigation grids, and page flows",
          "Script syntax variables, local version control, and cloud site launch"
        ]
      },
      {
        week: "Month 2",
        title: "Full-Stack Development via Intelligent IDEs",
        lessons: [
          "Interactive state controllers and components data passing",
          "Database connection setups and schema mappings",
          "Building request validation handlers and data routes",
          "Local storage operations and route validation guards"
        ]
      },
      {
        week: "Month 3",
        title: "System Automation & Custom AI Wrappers",
        lessons: [
          "File reading/writing operations and logic controls",
          "Automating spreadsheets data cleanup scripts",
          "Connecting API wrappers and temperature parameters",
          "Stateful conversation memory loops and user control dashboards"
        ]
      },
      {
        week: "Month 4",
        title: "Secure Corporate Services & Endpoint Protection",
        lessons: [
          "Core object-oriented classes and namespaces structures",
          "Web API project setups and routing attributes controllers",
          "Dependency injection services and database provider migrations",
          "Security configurations and JWT authentication login endpoints"
        ]
      },
      {
        week: "Month 5",
        title: "Advanced Multi-Database Systems & Final Hackathon",
        lessons: [
          "MySQL relational models vs MongoDB document flexibility",
          "Connecting live cloud databases and sync event listeners",
          "Cross-stack API calls and token extraction rules",
          "48-Hour Live Graduation Capstone Hackathon & Presentation Day"
        ]
      }
    ],
    industryTrends: [
      "AI-driven coding tools have transitioned from optional helpers to mandatory workflows.",
      "Relational and document database integrations are core signals for full-stack hires.",
      "Token authentication and endpoint routing protection are essential developer requirements."
    ],
    impactHeadline: "Accelerate Your Engineering Career with a Guaranteed Internship",
    impactMetrics: [
      { value: "5 Months", label: "Cohort Duration" },
      { value: "3 Classes/Wk", label: "Interactive Sessions" },
      { value: "Internship", label: "Hakamtechsol Project" }
    ],
    defaultProfile: "Student (CS / IT / Engineering)"
  },
  {
    id: "digital-marketing",
    number: "02",
    track: "Marketing Track",
    title: "Digital Marketing",
    programName: "Digital Marketing High Level Performance Ads",
    description: "Performance Marketing & Growth Strategy",
    category: "Marketing",
    duration: "4 Months",
    sessions: "3 Classes/Week",
    level: "Intermediate",
    price: 45000,
    image: "/p2p/digitalmarketing.jpeg",
    instructor: "Maha Siddiqui",
    instructorRole: "Performance Growth Strategist",
    overview:
      "A growth-focused program covering paid media, analytics, content systems, funnels, and repeatable campaign optimization.",
    outcomes: [
      "Launch performance campaigns across major channels",
      "Read analytics and improve conversion funnels",
      "Create content calendars and growth experiments",
      "Build a portfolio-ready marketing strategy",
    ],
    tools: ["Meta Ads", "Google Ads", "GA4", "Canva", "Notion", "Looker"],
    toolLogos: [
      { name: "Meta Ads", image: metaAdsLogo },
      { name: "Google Ads", image: googleAdsLogo },
      { name: "Social Marketing", image: socialMarketingLogo },
      { name: "TikTok Ads", image: tiktokLogo },
      { name: "Make", image: makeLogo },
    ],
    curriculum: [
      { week: "Week 01", title: "Growth Foundations", lessons: ["Audience research", "Offer design", "Funnel mapping"] },
      { week: "Week 02", title: "Creative Testing", lessons: ["Hook design", "Ad angles", "Landing page alignment"] },
      { week: "Week 03", title: "Performance Ads", lessons: ["Meta campaigns", "Google Search", "Retargeting"] },
      { week: "Week 04", title: "Analytics", lessons: ["GA4", "Dashboards", "Conversion optimization"] },
    ],
    industryTrends: [
      "Performance teams are blending creative testing with analytics rigor.",
      "First-party data and conversion tracking quality now define campaign scale.",
      "Growth roles increasingly require full-funnel strategic thinking.",
    ],
    impactHeadline: "Turn Data, Creative, and Paid Media Into Measurable Growth",
    impactMetrics: [
      { value: "4 Months", label: "Program Length" },
      { value: "3 Live Classes", label: "Every Week" },
      { value: "96+ Hours", label: "Campaign Practice" },
    ],
    defaultProfile: "Working Professional (Developer / Marketer / Corporate Employee)"
  },
  {
    id: "shopify-growth",
    number: "03",
    track: "E-Commerce Track",
    title: "Shopify Store Development",
    programName: "Shopify Store Development & Management",
    description: "E-Commerce Operations, Theme Customization & Guaranteed Internship",
    category: "E-Commerce",
    duration: "2 Months",
    sessions: "2 Classes/Week",
    level: "Beginner",
    price: 30000,
    image: "/p2p/shopify.jpeg",
    instructor: "Hakamtechsol E-Commerce Lead",
    instructorRole: "E-Commerce Product Lead",
    overview:
      "A practical, hands-on program that takes you from e-commerce fundamentals to custom template coding and dashboard operations. Learn how to construct high-converting stores, manage complex catalogs, integrate advanced utilities, and implement optimizations to scale. Features a guaranteed internship at Hakamtechsol to manage actual store systems.",
    outcomes: [
      "Configure and customize complete e-commerce storefronts from scratch.",
      "Manage catalogs, define product variations, and organize collections.",
      "Integrate essential utilities for customer reviews, upsells, and automation.",
      "Configure dynamic shipping zone weights, tax brackets, and payment gates.",
      "Apply search engine optimization tags, metadata descriptions, and image scaling.",
      "Receive a guaranteed professional e-commerce internship at Hakamtechsol."
    ],
    tools: [
      "Storefront Architecture",
      "Theme Customization",
      "App Utilities Integration",
      "Payment & Shipping Gates",
      "SEO Metadata Rules",
      "Custom Section Templating"
    ],
    toolLogos: [
      { name: "Shopify", image: shopifyLogo },
      { name: "Make", image: makeLogo }
    ],
    curriculum: [
      {
        week: "Week 1-2",
        title: "E-commerce Overview & Basic Configurations",
        lessons: [
          "Online ecosystem and plans structures",
          "Account setup settings and domain connections",
          "Catalog additions, variants details, and collection criteria",
          "Navigation menus, header layouts, and policy page setups"
        ]
      },
      {
        week: "Week 3-4",
        title: "Custom Themes & Interactive Plugins",
        lessons: [
          "Installing themes and adjusting layout sections",
          "Mobile responsiveness adjustments and page speed rules",
          "Adding review, email, and upsell marketing utility apps",
          "Setting shipping zones, rates, tax guidelines, and orders processing"
        ]
      },
      {
        week: "Week 5-6",
        title: "Payments, Tax Zones & Search Optimization",
        lessons: [
          "Optimizing product listing metadata descriptions and image file tags",
          "Social sales channel connections and Google product catalog setups",
          "Email marketing automated loops setup",
          "Custom theme architecture files and layout customization concepts"
        ]
      },
      {
        week: "Week 7-8",
        title: "Theme Coding, Performance Audit & Launch",
        lessons: [
          "Variables loops and conditions templating syntax rules",
          "Editing sections, building custom snippets, and conversion check grids",
          "Analytics data reading and dashboard sales tracking integrations",
          "Final full store build review, launch strategy, and freelancing opportunities"
        ]
      }
    ],
    industryTrends: [
      "Independent e-commerce storefronts dominate high-margin online brands.",
      "Store performance speed and checkout optimizations directly determine sales yield.",
      "Understanding theme custom adjustments is highly demanded by digital marketing agencies."
    ],
    impactHeadline: "Master E-Commerce & Secure Your Hakamtechsol Internship",
    impactMetrics: [
      { value: "2 Months", label: "Cohort Duration" },
      { value: "16 Classes", label: "Total Interactive Labs" },
      { value: "Internship", label: "Hakamtechsol Project" }
    ],
    defaultProfile: "Freelancer / Remote Operator"
  },
  {
    id: "ai-freelancing",
    number: "04",
    track: "Freelancing Track",
    title: "AI Freelancing",
    programName: "AI Foundation and Freelancing",
    description: "Work Smarter. Earn Global.",
    category: "Freelancing",
    duration: "3 Months",
    sessions: "3 Classes/Week",
    level: "Beginner",
    price: 35000,
    image: "/p2p/AIfrelancing.jpeg",
    instructor: "Zara Khan",
    instructorRole: "Remote Work Systems Mentor",
    overview:
      "A client-acquisition and delivery track for using AI tools to package services, pitch confidently, and manage global freelance work.",
    outcomes: [
      "Build service offers for global marketplaces",
      "Use AI to speed up research and delivery",
      "Write proposals that connect to client outcomes",
      "Manage projects, revisions, and payments professionally",
    ],
    tools: ["ChatGPT", "Upwork", "Fiverr", "Notion", "Canva", "Google Workspace"],
    toolLogos: [
      { name: "AI Workflow", image: aiWorkflowLogo },
      { name: "Prompt Engineering", image: promptLogo },
      { name: "Python", image: pythonLogo },
      { name: "Marketplace", image: marketplaceLogo },
      { name: "Make", image: makeLogo },
    ],
    curriculum: [
      { week: "Week 01", title: "AI Foundations", lessons: ["Prompt workflows", "Research systems", "Quality control"] },
      { week: "Week 02", title: "Offer Design", lessons: ["Niche selection", "Portfolio setup", "Pricing"] },
      { week: "Week 03", title: "Client Acquisition", lessons: ["Profiles", "Proposals", "Discovery calls"] },
      { week: "Week 04", title: "Delivery Systems", lessons: ["SOPs", "Client handoff", "Retention"] },
    ],
    industryTrends: [
      "Freelancers who combine AI speed with human judgment are winning higher-value work.",
      "Clients increasingly expect structured communication and reliable delivery systems.",
      "Portfolio proof matters more than generic certificates in global marketplaces.",
    ],
    impactHeadline: "Use AI to Package, Pitch, and Deliver Global Freelance Services",
    impactMetrics: [
      { value: "3 Months", label: "Program Length" },
      { value: "3 Live Classes", label: "Every Week" },
      { value: "72+ Hours", label: "Freelance Lab" },
    ],
    defaultProfile: "Freelancer / Remote Operator"
  },
  {
    id: "creative-media",
    number: "05",
    track: "Media Track",
    title: "Creative Media",
    programName: "Creative Media Program",
    description: "Design. Edit. Create Impact.",
    category: "Media",
    duration: "2 Months",
    sessions: "3 Classes/Week",
    level: "Beginner",
    price: 30000,
    image: "/p2p/creativemedia.jpeg",
    instructor: "Rimsha Noor",
    instructorRole: "Brand Design and Video Mentor",
    overview:
      "A portfolio-first creative track covering visual design, short-form video, editing workflows, and brand-ready content systems.",
    outcomes: [
      "Create clean social and brand visuals",
      "Edit short-form videos with professional pacing",
      "Build repeatable content templates",
      "Present a polished creative portfolio",
    ],
    tools: ["Figma", "Photoshop", "Illustrator", "Premiere Pro", "CapCut", "Canva"],
    toolLogos: [
      { name: "Graphic Design", image: graphicDesignLogo },
      { name: "AI Workflow", image: aiWorkflowLogo },
      { name: "Social Marketing", image: socialMarketingLogo },
      { name: "Prompt Engineering", image: promptLogo },
    ],
    curriculum: [
      { week: "Week 01", title: "Visual Foundations", lessons: ["Layout", "Typography", "Composition"] },
      { week: "Week 02", title: "Brand Systems", lessons: ["Identity kits", "Social templates", "Campaign sets"] },
      { week: "Week 03", title: "Video Editing", lessons: ["Cuts", "Captions", "Sound and pacing"] },
      { week: "Week 04", title: "Portfolio Sprint", lessons: ["Showreel", "Case study", "Review"] },
    ],
    industryTrends: [
      "Short-form video and brand systems are core creative hiring signals.",
      "Creators need both design taste and repeatable production workflows.",
      "Portfolio clarity matters more than tool fluency alone.",
    ],
    impactHeadline: "Turn Your Creativity Into a Career - Master Creative Media Fast",
    impactMetrics: [
      { value: "8 Weekends", label: "Focused Practice" },
      { value: "2 Hours/Daily", label: "Studio Rhythm" },
      { value: "48 Learning Hours", label: "Portfolio Output" },
    ],
    defaultProfile: "Student (Non-Tech / Business / Arts)"
  },
  {
    id: "amazon-private-label",
    number: "06",
    track: "E-Commerce Track",
    title: "Amazon Systems",
    programName: "Amazon Private Label & Agency Systems",
    description: "Research, Launch, Operate, Scale",
    category: "E-Commerce",
    duration: "3 Months",
    sessions: "3 Classes/Week",
    level: "Intermediate",
    price: 40000,
    image: "/p2p/shopify.jpeg",
    instructor: "Daniyal Sheikh",
    instructorRole: "Marketplace Systems Consultant",
    overview:
      "A structured marketplace operations program covering product research, listing strategy, launch operations, and agency service systems.",
    outcomes: [
      "Evaluate product opportunities with practical criteria",
      "Build listing, launch, and review systems",
      "Understand marketplace operations and reporting",
      "Package Amazon services for agency clients",
    ],
    tools: ["Helium 10", "Amazon Seller Central", "Keepa", "Sheets", "Canva", "Notion"],
    toolLogos: [
      { name: "Amazon", image: amazonLogo },
      { name: "Marketplace", image: marketplaceLogo },
      { name: "E-Commerce", image: ecommerceLogo },
      { name: "Google Ads", image: googleAdsLogo },
      { name: "Make", image: makeLogo },
    ],
    curriculum: [
      { week: "Week 01", title: "Marketplace Foundations", lessons: ["Business models", "Account basics", "Risk controls"] },
      { week: "Week 02", title: "Product Research", lessons: ["Demand checks", "Competition review", "Margin math"] },
      { week: "Week 03", title: "Launch Systems", lessons: ["Listings", "Creatives", "PPC basics"] },
      { week: "Week 04", title: "Agency Operations", lessons: ["Client reporting", "SOPs", "Service packaging"] },
    ],
    industryTrends: [
      "Marketplace brands need operators who understand systems, data, and compliance.",
      "Agency services are shifting toward measurable operating outcomes.",
      "Private label success depends on research quality and disciplined launch management.",
    ],
    impactHeadline: "Build Marketplace and Agency Systems for Modern E-Commerce",
    impactMetrics: [
      { value: "3 Months", label: "Program Length" },
      { value: "3 Live Classes", label: "Every Week" },
      { value: "72+ Hours", label: "Marketplace Lab" },
    ],
    defaultProfile: "Business Owner / Agency Founder"
  }
];

export const categories = ["All", "Development", "Marketing", "E-Commerce", "Freelancing", "Media"];

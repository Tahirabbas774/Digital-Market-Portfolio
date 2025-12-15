export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  duration: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  results: Array<{ label: string; value: string }>;
  metrics: Array<{ label: string; value: string }>;
  services: string[];
  outcomes: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "ecommerce-growth",
    title: "E-Commerce Growth Campaign",
    client: "Fashion Retail Brand",
    category: "SEO & Content Marketing",
    year: "2024",
    duration: "6 months",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzY0ODcyMTc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Increased organic traffic by 300% and revenue by 250% in 6 months for a fashion e-commerce brand through comprehensive SEO and content marketing strategies.",
    challenge: "A mid-sized fashion e-commerce brand was struggling with low organic visibility and high customer acquisition costs. Their website had technical SEO issues, thin content, and poor conversion rates.",
    solution: "Implemented a comprehensive digital marketing strategy including technical SEO overhaul, content marketing, PPC campaigns, and social media advertising to drive qualified traffic and increase conversions.",
    results: [
      { label: "Traffic Increase", value: "+300%" },
      { label: "Revenue Growth", value: "+250%" },
      { label: "Conversion Rate", value: "8.5%" },
      { label: "ROI", value: "425%" }
    ],
    metrics: [
      { label: "Traffic Increase", value: "+300%" },
      { label: "Revenue Growth", value: "+250%" },
      { label: "Conversion Rate", value: "8.5%" },
      { label: "ROI", value: "425%" }
    ],
    services: ["SEO Optimization", "Content Marketing", "PPC Campaigns", "Social Media Marketing", "Conversion Rate Optimization"],
    outcomes: [
      "Achieved #1 rankings for 50+ high-value keywords",
      "Reduced cost per acquisition by 60%",
      "Increased average order value by 35%",
      "Built email list to 50,000+ subscribers",
      "Improved site speed by 70%"
    ],
    tags: ["SEO", "PPC", "Social Media", "E-commerce"]
  },
  {
    id: "saas-launch",
    title: "SaaS Product Launch",
    client: "B2B Tech Startup",
    category: "Social Media & Paid Ads",
    year: "2024",
    duration: "8 months",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwZGFzaGJvYXJkfGVufDB8fHx8MTc2NDg3MjE3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Successfully launched a B2B SaaS product with targeted campaigns across LinkedIn and Google Ads, generating 10,000+ qualified leads.",
    challenge: "A new B2B SaaS startup needed to establish market presence, generate qualified leads, and achieve 1,000 customers within the first 6 months of launch with limited brand recognition.",
    solution: "Created a multi-channel launch strategy combining content marketing, LinkedIn advertising, Google Ads, email nurturing campaigns, and strategic partnerships to build awareness and drive signups.",
    results: [
      { label: "Qualified Leads", value: "10,000+" },
      { label: "Trial Signups", value: "2,800" },
      { label: "Conversion Rate", value: "12%" },
      { label: "Customer Acquisition", value: "1,200" }
    ],
    metrics: [
      { label: "Qualified Leads", value: "10,000+" },
      { label: "Trial Signups", value: "2,800" },
      { label: "Conversion Rate", value: "12%" },
      { label: "Customer Acquisition", value: "1,200" }
    ],
    services: ["Product Marketing Strategy", "LinkedIn Advertising", "Google Ads", "Content Marketing", "Email Automation", "Marketing Analytics"],
    outcomes: [
      "Generated 10,000+ qualified B2B leads",
      "Achieved 12% trial-to-paid conversion rate",
      "Exceeded customer acquisition goal by 20%",
      "Built thought leadership with 50+ published articles",
      "Created scalable lead generation system"
    ],
    tags: ["Product Launch", "LinkedIn Ads", "Content", "Email"]
  },
  {
    id: "restaurant-rebrand",
    title: "Restaurant Brand Revamp",
    client: "Multi-Location Restaurant Chain",
    category: "Brand Strategy & Content",
    year: "2023",
    duration: "12 months",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZHxlbnwwfHx8fDE3NjQ4NzIxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Transformed a local restaurant chain's digital presence with engaging content and influencer partnerships, increasing engagement by 450%.",
    challenge: "A restaurant chain with 15 locations had outdated branding, minimal social media presence, and declining foot traffic due to increased competition from newer restaurants in the area.",
    solution: "Executed complete brand refresh including new visual identity, social media strategy with user-generated content campaigns, influencer partnerships, and local SEO optimization for all locations.",
    results: [
      { label: "Social Growth", value: "+450%" },
      { label: "Engagement Rate", value: "18%" },
      { label: "Foot Traffic", value: "+65%" },
      { label: "Online Orders", value: "+280%" }
    ],
    metrics: [
      { label: "Social Growth", value: "+450%" },
      { label: "Engagement Rate", value: "18%" },
      { label: "Foot Traffic", value: "+65%" },
      { label: "Online Orders", value: "+280%" }
    ],
    services: ["Brand Strategy", "Social Media Management", "Influencer Marketing", "Local SEO", "Content Creation", "Photography & Videography"],
    outcomes: [
      "Grew Instagram following from 3K to 16.5K",
      "Generated 2M+ social media impressions monthly",
      "Partnered with 30+ local food influencers",
      "Increased weekend reservations by 85%",
      "All locations ranking in top 3 for local searches"
    ],
    tags: ["Branding", "Social Media", "Influencer", "Local SEO"]
  },
  {
    id: "healthcare-strategy",
    title: "Medical / Healthcare Digital Strategy",
    client: "Medical Practice Network",
    category: "SEO & Analytics",
    year: "2024",
    duration: "9 months",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaHxlbnwwfHx8fDE3NjQ4NzIxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Developed comprehensive digital strategy for healthcare provider, improving patient acquisition by 200% while maintaining HIPAA compliance.",
    challenge: "A healthcare provider network needed to increase patient acquisition while maintaining HIPAA compliance and building trust with potential patients in a competitive metropolitan market.",
    solution: "Developed HIPAA-compliant digital marketing strategy focusing on local SEO, educational content marketing, reputation management, and targeted Google Ads campaigns to attract and convert patients.",
    results: [
      { label: "New Patients", value: "+200%" },
      { label: "Online Bookings", value: "+180%" },
      { label: "Website Traffic", value: "+310%" },
      { label: "Review Rating", value: "4.9★" }
    ],
    metrics: [
      { label: "New Patients", value: "+200%" },
      { label: "Online Bookings", value: "+180%" },
      { label: "Website Traffic", value: "+310%" },
      { label: "Review Rating", value: "4.9★" }
    ],
    services: ["Healthcare SEO", "Content Marketing", "Reputation Management", "PPC Advertising", "Analytics & Reporting", "HIPAA-Compliant Marketing"],
    outcomes: [
      "Increased new patient appointments by 200%",
      "Achieved #1 rankings for 40+ medical keywords",
      "Improved online review rating from 3.8 to 4.9 stars",
      "Reduced cost per patient acquisition by 45%",
      "Built library of 100+ educational health articles"
    ],
    tags: ["Healthcare", "SEO", "PPC", "Content Marketing"]
  },
  {
    id: "b2b-lead-generation",
    title: "Real eState B2B Lead Generation",
    client: "Enterprise Software Company",
    category: "B2B Marketing",
    year: "2023",
    duration: "10 months",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MHx8fHwxNzY0ODcyMTc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "B2B marketing strategy focusing on LinkedIn advertising and marketing automation, generating $4.5M in pipeline value.",
    challenge: "An enterprise software company needed to fill their sales pipeline with high-quality B2B leads while reducing cost per lead and improving sales team efficiency.",
    solution: "Implemented comprehensive B2B marketing strategy with LinkedIn advertising, marketing automation, email nurturing sequences, and account-based marketing tactics to generate qualified enterprise leads.",
    results: [
      { label: "Qualified Leads", value: "3,200" },
      { label: "Pipeline Value", value: "$4.5M" },
      { label: "CPL Reduction", value: "-55%" },
      { label: "Close Rate", value: "22%" }
    ],
    metrics: [
      { label: "Qualified Leads", value: "3,200" },
      { label: "Pipeline Value", value: "$4.5M" },
      { label: "CPL Reduction", value: "-55%" },
      { label: "Close Rate", value: "22%" }
    ],
    services: ["LinkedIn Advertising", "Marketing Automation", "Email Marketing", "Account-Based Marketing", "Lead Scoring", "Sales Enablement"],
    outcomes: [
      "Generated 3,200 sales-qualified leads",
      "Created $4.5M in qualified pipeline opportunities",
      "Reduced cost per lead by 55%",
      "Improved lead-to-customer close rate to 22%",
      "Implemented automated lead nurturing system"
    ],
    tags: ["B2B", "LinkedIn", "Automation", "Email"]
  },
  {
    id: "local-service-growth",
    title: "Local SEO Business Growth",
    client: "Home Services Provider",
    category: "Local SEO & PPC",
    year: "2023",
    duration: "7 months",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwc2VydmljZXN8ZW58MHx8fHwxNzY0ODcyMTc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Local SEO and Google Ads strategy for home services company, increasing service calls by 380% and revenue by 290%.",
    challenge: "A home services provider in a competitive market needed to increase visibility in local search results and generate more qualified service calls to support business expansion.",
    solution: "Developed integrated local SEO and Google Ads strategy with Google Business Profile optimization, local citation building, review generation, and geo-targeted PPC campaigns.",
    results: [
      { label: "Local Rankings", value: "Top 3" },
      { label: "Service Calls", value: "+380%" },
      { label: "Monthly Requests", value: "850" },
      { label: "Revenue Growth", value: "+290%" }
    ],
    metrics: [
      { label: "Local Rankings", value: "Top 3" },
      { label: "Service Calls", value: "+380%" },
      { label: "Monthly Requests", value: "850" },
      { label: "Revenue Growth", value: "+290%" }
    ],
    services: ["Local SEO", "Google Ads", "Google Business Profile", "Review Management", "Citation Building", "Call Tracking"],
    outcomes: [
      "Achieved top 3 rankings for all target local keywords",
      "Increased service calls by 380%",
      "Generating 850+ qualified service requests monthly",
      "Revenue increased by 290% year-over-year",
      "Built 5-star reputation with 200+ reviews"
    ],
    tags: ["Local SEO", "Google Ads", "Home Services"]
  },
  {
    id: "fitness-app-launch",
    title: "GYM & Fitness Launch Campaign",
    client: "Mobile Fitness Startup",
    category: "App Marketing",
    year: "2024",
    duration: "5 months",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwfGVufDB8fHx8MTc2NDg3MjE3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "User acquisition campaign using social media advertising and influencer partnerships, achieving 125K downloads with 68% retention.",
    challenge: "A new fitness app needed to break into a saturated market, acquire users cost-effectively, and maintain high retention rates to build a sustainable user base.",
    solution: "Executed multi-channel user acquisition strategy with Instagram and TikTok advertising, fitness influencer partnerships, app store optimization, and referral program to drive downloads and engagement.",
    results: [
      { label: "App Downloads", value: "125K" },
      { label: "Active Users", value: "45K" },
      { label: "User Retention", value: "68%" },
      { label: "App Rating", value: "4.8★" }
    ],
    metrics: [
      { label: "App Downloads", value: "125K" },
      { label: "Active Users", value: "45K" },
      { label: "User Retention", value: "68%" },
      { label: "App Rating", value: "4.8★" }
    ],
    services: ["Social Media Advertising", "Influencer Marketing", "App Store Optimization", "Referral Programs", "In-App Marketing", "Performance Analytics"],
    outcomes: [
      "Generated 125,000 organic and paid app downloads",
      "Achieved 45,000 daily active users",
      "Maintained 68% 30-day user retention rate",
      "Earned 4.8-star rating with 10,000+ reviews",
      "Created viral referral program driving 30% of new users"
    ],
    tags: ["App Marketing", "Social Ads", "Influencer", "ASO"]
  },
  {
    id: "education-platform",
    title: "Educational Platform Growth",
    client: "Online Learning Platform",
    category: "Content & SEO",
    year: "2023",
    duration: "11 months",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZ3xlbnwwfHx8fDE3NjQ4NzIxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Content marketing and SEO strategy to increase organic traffic and student enrollments, achieving 520% traffic growth.",
    challenge: "An online learning platform needed to increase organic visibility, drive student enrollments, and establish authority in a competitive education market dominated by major brands.",
    solution: "Implemented content-first SEO strategy with comprehensive course content, educational blog articles, video tutorials, and strategic link building to drive organic traffic and conversions.",
    results: [
      { label: "Traffic Growth", value: "+520%" },
      { label: "New Signups", value: "12K+" },
      { label: "Content Pieces", value: "200+" },
      { label: "Domain Authority", value: "+35" }
    ],
    metrics: [
      { label: "Traffic Growth", value: "+520%" },
      { label: "New Signups", value: "12K+" },
      { label: "Content Pieces", value: "200+" },
      { label: "Domain Authority", value: "+35" }
    ],
    services: ["Content Marketing", "SEO Strategy", "Video Marketing", "Link Building", "Technical SEO", "Content Distribution"],
    outcomes: [
      "Increased organic traffic by 520% year-over-year",
      "Generated 12,000+ new student enrollments",
      "Published 200+ educational content pieces",
      "Improved domain authority from 28 to 63",
      "Created YouTube channel with 50K subscribers"
    ],
    tags: ["Education", "Content", "SEO", "Video"]
  },
  {
    id: "nonprofit-fundraising",
    title: "Non-Profit Fundraising Campaign",
    client: "Environmental Non-Profit",
    category: "Non-Profit Marketing",
    year: "2023",
    duration: "8 months",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudCUyMG5hdHVyZXxlbnwwfHx8fDE3NjQ4NzIxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Digital fundraising campaign including email marketing and Google Ad Grants, raising $850K with 680% ROI.",
    challenge: "An environmental non-profit needed to significantly increase fundraising revenue while working with a limited marketing budget and competing for donor attention.",
    solution: "Created integrated digital fundraising strategy leveraging Google Ad Grants, email marketing automation, social media storytelling, and peer-to-peer fundraising campaigns.",
    results: [
      { label: "Total Raised", value: "$850K" },
      { label: "New Donors", value: "3,500" },
      { label: "Email Open Rate", value: "42%" },
      { label: "Campaign ROI", value: "680%" }
    ],
    metrics: [
      { label: "Total Raised", value: "$850K" },
      { label: "New Donors", value: "3,500" },
      { label: "Email Open Rate", value: "42%" },
      { label: "Campaign ROI", value: "680%" }
    ],
    services: ["Email Marketing", "Social Media Marketing", "Google Ad Grants", "Donation Page Optimization", "Donor CRM", "Storytelling"],
    outcomes: [
      "Raised $850,000 in donations (250% of annual goal)",
      "Acquired 3,500 new monthly donors",
      "Achieved 42% average email open rate",
      "Generated 680% ROI on marketing spend",
      "Built sustainable recurring donation program"
    ],
    tags: ["Non-Profit", "Email", "Social", "Google Grants"]
  }
];

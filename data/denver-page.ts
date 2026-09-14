import { brand } from "@/data/content";

export const denverPage = {
  meta: {
    title: "Denver, NC Landscaping & Hardscaping Contractors | Empresa Galdamez",
    description:
      "Patios, paver driveways, retaining walls, drainage, landscape lighting, fencing, and outdoor living for Denver, NC and Lake Norman-area properties. Request a free estimate.",
  },
  hero: {
    label: "DENVER, NC",
    title: "Landscaping & Hardscaping Contractors in",
    titleAccent: "Denver, NC",
    description:
      "Empresa Galdamez works with homeowners across Denver, NC, from off-water neighborhoods to properties closer to Lake Norman, to plan patios, paver driveways, retaining walls, drainage, landscape lighting, fencing, and outdoor living spaces that fit the size and layout of a Denver lot.",
    imageSrc: "/04_sloped_garden_terraces.jpg",
    primaryCta: "Request a Denver Estimate",
    secondaryCta: "Discuss My Outdoor Project",
    trustBadges: ["Larger Lots", "Lake Norman Area", "Connected Outdoor Projects"],
    exploreLinks: [
      { name: "Our Services", href: "#services" },
      { name: "Landscaping", href: "#landscaping" },
      { name: "Materials", href: "#materials" },
      { name: "How We Work", href: "#how-it-works" },
      { name: "FAQ", href: "#faq" },
    ],
  },
  bookForm: {
    label: "BOOK YOUR DENVER PROJECT",
    title: "Tell Us About Your",
    titleAccent: "Denver Property",
    description:
      "Every property is different, and a good outdoor project starts with understanding yours. Tell us about your yard, your goals, and the services you're considering, whether that's a new patio, a retaining wall, drainage work, or a full landscaping refresh, and we'll follow up to talk through next steps.",
    submitLabel: "Request My Denver Estimate",
    defaultService: "landscaping",
  },
  services: {
    id: "services",
    label: "OUR SERVICES",
    title: "Outdoor Services for",
    titleAccent: "Denver Properties",
    intro:
      "From larger residential lots to lake-area properties, we plan outdoor improvements around how your Denver property is actually laid out and used.",
    items: [
      {
        title: "Patios & Walkways",
        description: "Paver, stone, brick, and concrete patios, plus garden paths and entry walkways.",
        href: "/services/patios-walkways",
        imageSrc: "/01_patios_walkways_charlotte_nc.jpg",
      },
      {
        title: "Paver Services",
        description: "Paver installation for patios, walkways, pool areas, driveways, and more.",
        href: "/services/pavers",
        imageSrc: "/02_paver_services_charlotte_nc.jpg",
      },
      {
        title: "Driveway Services",
        description: "Paver and concrete driveways built for access, appearance, and daily use.",
        href: "/services/driveways",
        imageSrc: "/03_driveway_services_charlotte_nc.jpg",
      },
      {
        title: "Walls & Structural",
        description: "Retaining walls, seating walls, and stone or paver steps for changes in elevation.",
        href: "/services/walls",
        imageSrc: "/04_walls_structural.jpg",
      },
      {
        title: "Outdoor Living Features",
        description: "Outdoor kitchens, grills, bars, fire pits, fireplaces, pergolas, gazebos, arbors, and decks.",
        href: "/services/outdoor-living",
        imageSrc: "/05_outdoor_living_features.jpg",
      },
      {
        title: "Lighting & Utilities",
        description: "Landscape lighting, LED lighting, irrigation, drainage, and grading.",
        href: "/services/lighting",
        imageSrc: "/06_lighting_utilities.jpg",
      },
      {
        title: "Landscaping",
        description: "Sod, trees, shrubs, flowers, mulch, rock, edging, turf, and lawn care.",
        href: "/services/landscaping",
        imageSrc: "/07_landscaping.jpg",
      },
      {
        title: "Fences & Water Features",
        description: "Fence installation, ponds, and custom water features.",
        href: "/services/fences-water",
        imageSrc: "/08_fences_water_features.jpg",
      },
      {
        title: "Commercial Services",
        description: "Landscaping and hardscaping for commercial properties and business grounds.",
        href: "/services/commercial",
        imageSrc: "/09_commercial_services.jpg",
      },
    ],
  },
  landscaping: {
    id: "landscaping",
    label: "LANDSCAPING",
    title: "Landscaping in",
    titleAccent: "Denver, NC",
    intro:
      "Denver's larger residential lots give landscaping real room to work with. Planting, lawn areas, hardscape, and drainage all affect each other, so we look at the full property before recommending a plan, not just the flower bed or lawn area in question.",
    items: [
      "Sod installation",
      "Tree and shrub planting",
      "Flower beds",
      "Mulch, rock, and edging",
      "Artificial turf",
      "Lawn care and maintenance",
      "Tree work",
    ],
    imageSrc: "/07_landscaping.jpg",
  },
  patios: {
    id: "patios",
    label: "PATIOS & WALKWAYS",
    title: "Patios, Pavers & Walkways in",
    titleAccent: "Denver",
    paragraphs: [
      "Patios are usually the anchor of an outdoor living space. The right material depends on style, maintenance expectations, and how the space will be used, whether that's a low-key backyard patio or a pool deck that gets daily traffic. We'll help you weigh those tradeoffs before you commit to a material.",
    ],
    items: [
      "Paver, natural stone, flagstone, bluestone, and slate",
      "Brick and stamped or colored concrete",
      "Travertine and porcelain pavers",
      "Pool deck pavers",
      "Garden paths and entry walkways",
    ],
    imageSrc: "/01_patios_walkways_charlotte_nc.jpg",
  },
  structural: {
    id: "structural",
    label: "DRIVEWAYS & WALLS",
    title: "Driveways, Retaining Walls &",
    titleAccent: "Structural Features",
    paragraphs: [
      "These elements are closely linked, especially on sloped properties, which are common around Denver and Lake Norman. A driveway or wall built without accounting for grading and water flow can create problems later, so we plan these together instead of one at a time.",
    ],
    items: [
      "Paver and concrete driveways, including replacement",
      "Retaining walls and seating walls",
      "Stone and paver steps",
      "Grading and drainage",
      "Sloped-site and access solutions",
    ],
    imageSrc: "/04_walls_structural.jpg",
  },
  outdoorLiving: {
    id: "outdoor-living",
    label: "OUTDOOR LIVING",
    title: "Outdoor Living in",
    titleAccent: "Denver, NC",
    paragraphs: [
      "We build spaces designed for everyday use, not just special occasions. The goal is a layout that connects naturally to your patio and landscaping, with shade, circulation, and seating placed where they'll actually get used.",
    ],
    items: [
      "Outdoor kitchens and built-in grills",
      "Outdoor bars",
      "Fire pits and fireplaces",
      "Pergolas, gazebos, and arbors",
      "Decks",
    ],
    imageSrc: "/05_outdoor_living_features.jpg",
  },
  utilities: {
    id: "utilities",
    label: "DRAINAGE & UTILITIES",
    title: "Drainage, Grading, Lighting &",
    titleAccent: "Utilities",
    paragraphs: [
      "Water movement affects everything else on a property, so we give it real attention. Lighting and irrigation work best when planned early, before hardscape goes in, and drainage should be addressed before it becomes a problem for patios, walls, or planted areas. We don't promise specific outcomes, since every site's soil and slope are different, but we design around your property's actual conditions.",
    ],
    items: [
      "Drainage and grading",
      "Landscape and LED lighting",
      "Irrigation",
      "Site prep ahead of patios and walkways",
    ],
    imageSrc: "/06_lighting_utilities.jpg",
  },
  fences: {
    id: "fences",
    label: "FENCES & WATER",
    title: "Fences & Water",
    titleAccent: "Features",
    paragraphs: [
      "Fencing adds privacy and defines property boundaries. If your project involves shared property lines or setbacks, check with your HOA or Lincoln County before finalizing plans, since requirements vary by neighborhood.",
    ],
    items: ["Privacy and decorative fencing", "Custom water features and ponds"],
    imageSrc: "/08_fences_water_features.jpg",
  },
  commercial: {
    id: "commercial",
    label: "COMMERCIAL",
    title: "Commercial Landscaping & Hardscaping in",
    titleAccent: "Denver",
    paragraphs: [
      "First impressions matter for business properties. We work with property owners and managers to improve appearance and function with minimal disruption to daily operations.",
    ],
    items: [
      "Business entrances and walkways",
      "Driveways and access areas",
      "Outdoor gathering spaces",
      "Commercial planting and lighting",
    ],
    imageSrc: "/09_commercial_services.jpg",
  },
  materials: {
    id: "materials",
    label: "MATERIALS",
    title: "Materials & Options",
    titleAccent: "at a Glance",
    intro: "A quick reference for common choices across projects. Not sure which option fits your property? Tell us about your project and we'll walk you through it.",
    rows: [
      { category: "Patios & Walkways", options: "Pavers, natural stone, brick, stamped concrete, travertine, porcelain" },
      { category: "Driveways", options: "Pavers, poured or stamped concrete" },
      { category: "Walls & Steps", options: "Retaining walls, seating walls, stone steps, paver steps" },
      { category: "Lighting", options: "Path lighting, LED accent lighting, uplighting" },
      { category: "Fencing", options: "Privacy, decorative, semi-private" },
      { category: "Ground Cover", options: "Sod, mulch, rock, artificial turf" },
    ],
  },
  upgradeSigns: {
    id: "upgrade-signs",
    label: "WHEN TO UPGRADE",
    title: "Signs It Might Be Time for an",
    titleAccent: "Outdoor Upgrade",
    intro: "If any of this sounds familiar, it may be worth a conversation before small issues turn into bigger ones.",
    items: [
      "Water pools near your foundation, patio, or driveway after rain",
      "Your yard has an unused slope or awkward grade change",
      "Your patio or walkway is cracked, uneven, or too small for how you use it",
      "You want more privacy from neighbors or the street",
      "Your landscaping hasn't been updated since the home was built",
      "You'd like an outdoor space built for entertaining, not just mowing",
    ],
  },
  planning: {
    id: "planning",
    label: "WHY PLANNING MATTERS",
    title: "Why Planning Matters for",
    titleAccent: "Denver Properties",
    intro:
      "Outdoor projects go smoother when they're planned around the property instead of treated as separate installations. Before recommending a plan, we consider:",
    items: [
      "Existing layout, trees, and sun exposure",
      "Drainage and grading",
      "Access and circulation",
      "Patio and walkway placement",
      "Materials and maintenance needs",
      "Room for future improvements",
    ],
  },
  connected: {
    label: "CONNECTED PROJECTS",
    title: "Connected Outdoor",
    titleAccent: "Improvements",
    paragraphs: [
      "Combining services often leads to a more cohesive result. Planning these together, with one contractor coordinating the different pieces, generally produces a better outdoor space than treating each as a separate project.",
    ],
    items: [
      "Patio + landscaping + lighting",
      "Paver walkway + planting + edging",
      "Retaining wall + grading + drainage",
      "Outdoor kitchen + patio + lighting",
      "Driveway + walkway + landscaping",
      "Fence + planting + outdoor living",
      "Pergola + patio + landscaping",
    ],
    imageSrc: "/05_outdoor_living_features.jpg",
  },
  steps: [
    {
      title: "Tell Us About Your Project",
      description: "Your property, goals, and priorities.",
    },
    {
      title: "Review the Property",
      description: "Layout, access, grading, and drainage.",
    },
    {
      title: "Plan the Outdoor Space",
      description: "Materials, use, and site conditions.",
    },
    {
      title: "Complete the Installation",
      description: "The agreed work, done right.",
    },
    {
      title: "Enjoy the Finished Space",
      description: "Built around how you'll use it.",
    },
  ],
  whyUs: {
    id: "why-us",
    label: "WHY GALDAMEZ",
    title: "Why Choose Empresa Galdamez in",
    titleAccent: "Denver?",
    items: [
      {
        title: "Connected landscaping and hardscaping",
        description: "Landscaping and hardscaping handled as connected services, not isolated installs.",
      },
      {
        title: "Wide outdoor options",
        description: "A wide range of outdoor options under one point of contact.",
      },
      {
        title: "Property-based planning",
        description: "Practical planning based on your property's layout, lot size, and site conditions.",
      },
      {
        title: "Function and appearance together",
        description: "Focus on function and appearance together so the finished space works day to day.",
      },
      {
        title: "One conversation for the full project",
        description: "One place to discuss patios, driveways, walls, drainage, and lighting.",
      },
    ],
  },
  projectsHelp: {
    label: "PROJECT TYPES",
    title: "Projects We Can Help With in",
    titleAccent: "Denver",
    description:
      "Paver patios, natural stone patios, walkways, driveways, retaining walls, seating walls, stone and paver steps, outdoor kitchens, fire pits, pergolas, landscaping, sod, planting, mulch, landscape lighting, irrigation, drainage, grading, fence installation, water features, ponds, and commercial outdoor improvements.",
  },
  region: {
    label: "SERVICE AREA",
    title: "Denver, NC",
    titleAccent: "Service Area",
    paragraphs: [
      "Denver, NC is part of Empresa Galdamez's broader service area across the Lake Norman region. Located in eastern Lincoln County along the Highway 16 corridor, Denver includes a mix of established neighborhoods and newer development, with many properties offering larger lots and room for meaningful outdoor improvements.",
      "We also work with property owners in nearby Lake Norman communities, including Cornelius, Huntersville, Mooresville, and Troutman. If you're unsure whether your property falls within our current service area, reach out and we'll confirm.",
    ],
  },
  faqs: [
    {
      question: "What landscaping services are available in Denver, NC?",
      answer:
        "We provide sod installation, tree and shrub planting, flower beds, mulch, rock and edging, artificial turf, lawn care, maintenance, and tree work for residential and commercial properties in Denver.",
    },
    {
      question: "Does Empresa Galdamez install patios and pavers in Denver?",
      answer:
        "Yes. We install paver, natural stone, brick, and concrete patios, along with walkways and garden paths, choosing materials based on your home's style and how you plan to use the space.",
    },
    {
      question: "Can landscaping and hardscaping be planned together?",
      answer:
        "Yes, and we recommend it. Combining patios, walkways, planting, lighting, and drainage into one plan generally leads to a more cohesive outdoor space and fewer conflicts between elements.",
    },
    {
      question: "Do you provide retaining wall, grading, and drainage services?",
      answer:
        "Yes. We install retaining walls, seating walls, and stone steps, along with grading and drainage work to address sloped areas and support water movement across the property.",
    },
    {
      question: "What outdoor living features can be added to a Denver property?",
      answer:
        "We build outdoor kitchens, built-in grills, bars, fire pits, fireplaces, pergolas, gazebos, arbors, and decks, designed to connect with existing patios and landscaping.",
    },
    {
      question: "How can I request an estimate for an outdoor project in Denver, NC?",
      answer: `Fill out our estimate form with your property details and the services you're interested in, or call ${brand.phone}. Our team will follow up to discuss your project and next steps.`,
    },
  ],
  cta: {
    label: "READY TO START",
    title: "Ready to Improve Your Denver Outdoor Space?",
    description:
      "Whether you're planning a new patio, a paver driveway, a retaining wall, or a full landscaping and outdoor living upgrade, Empresa Galdamez can help you plan an outdoor space that fits your Denver property. Reach out to talk through your goals, review your site, and get a clear next step toward the outdoor space you want.",
    primaryCta: "Request a Denver Estimate",
    secondaryCta: "Discuss Your Outdoor Project",
  },
};

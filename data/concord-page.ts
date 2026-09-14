import { brand } from "@/data/content";

export const concordPage = {
  meta: {
    title: "Landscaping & Hardscaping Services in Concord, NC | Empresa Galdamez",
    description:
      "Landscaping, hardscaping, patios, pavers, driveways, retaining walls, outdoor living, lighting, drainage, and fencing for Concord, NC properties. Request a free estimate.",
  },
  hero: {
    label: "CONCORD, NC",
    title: "Landscaping & Hardscaping Services in",
    titleAccent: "Concord, NC",
    description:
      "From historic Union Street to Concord's newest neighborhoods, we build outdoor spaces made to keep up with a fast-growing city.",
    imageSrc: "/03_front_entry_rebuild.jpg",
    primaryCta: "Request a Concord Estimate",
    secondaryCta: "Discuss My Outdoor Project",
    trustBadges: ["Historic & New Homes", "Fast-Growing City", "Entertaining-Ready Spaces"],
    exploreLinks: [
      { name: "Our Services", href: "#services" },
      { name: "What Makes Concord Different", href: "#considerations" },
      { name: "How We Work", href: "#how-it-works" },
      { name: "FAQ", href: "#faq" },
    ],
  },
  bookForm: {
    label: "BOOK YOUR CONCORD PROJECT",
    title: "Tell Us About Your",
    titleAccent: "Concord Property",
    description:
      "Landscaping, a patio, pavers, a driveway, retaining walls, outdoor living, lighting, drainage, or fencing: share a few details and we'll follow up with next steps.",
    submitLabel: "Request My Concord Estimate",
    defaultService: "landscaping",
  },
  overview: {
    label: "CONCORD OUTDOOR SERVICES",
    title: "Outdoor Services for",
    titleAccent: "Concord Properties",
    paragraphs: [
      "Concord is one of the fastest-growing cities in the Charlotte region, and its properties reflect that: established homes near historic Union Street sit alongside new construction spreading across the city's western and southern edges.",
      "Empresa Galdamez plans outdoor work for both — finishing out a new-build yard or updating an established property.",
    ],
    imageSrc: "/01_patios_walkways_charlotte_nc.jpg",
  },
  services: {
    id: "services",
    label: "OUR SERVICES",
    title: "What We Can Build in",
    titleAccent: "Concord",
    intro:
      "From historic neighborhoods to Concord's newest subdivisions, these services cover the outdoor work homes and businesses commonly need.",
    items: [
      {
        title: "Patios & Walkways",
        description: "Paver, stone, brick, and concrete patios, plus garden paths and entry walkways.",
        href: "/services/patios-walkways",
        imageSrc: "/01_patios_walkways_charlotte_nc.jpg",
      },
      {
        title: "Paver Services",
        description: "Expert paver installation for patios, walkways, pool decks, and driveways.",
        href: "/services/pavers",
        imageSrc: "/02_paver_services_charlotte_nc.jpg",
      },
      {
        title: "Driveway Services",
        description: "Durable paver and concrete driveways built for lasting curb appeal.",
        href: "/services/driveways",
        imageSrc: "/03_driveway_services_charlotte_nc.jpg",
      },
      {
        title: "Walls & Structural",
        description: "Retaining walls, seating walls, and custom stone or paver steps.",
        href: "/services/walls",
        imageSrc: "/04_walls_structural.jpg",
      },
      {
        title: "Outdoor Living Features",
        description: "Outdoor kitchens, fire pits, fireplaces, pergolas, gazebos, arbors, and decks.",
        href: "/services/outdoor-living",
        imageSrc: "/05_outdoor_living_features.jpg",
      },
      {
        title: "Lighting & Utilities",
        description: "Landscape lighting, irrigation, drainage, and grading solutions.",
        href: "/services/lighting",
        imageSrc: "/06_lighting_utilities.jpg",
      },
      {
        title: "Landscaping",
        description: "Sod, planting, mulch, rock, edging, artificial turf, and lawn care.",
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
        description: "Hardscaping and landscaping solutions built for business properties.",
        href: "/services/commercial",
        imageSrc: "/09_commercial_services.jpg",
      },
    ],
  },
  considerations: {
    id: "considerations",
    label: "WHAT MAKES CONCORD DIFFERENT",
    title: "What Makes",
    titleAccent: "Concord Different",
    intro:
      "Concord's mix of historic character, rapid growth, and entertaining culture shapes how outdoor projects should be planned.",
    items: [
      {
        title: "A city built for gathering",
        description:
          "With Charlotte Motor Speedway and Concord Mills nearby, Concord has a strong entertaining culture, and outdoor spaces built for hosting, like a fire pit or patio, fit right in.",
      },
      {
        title: "Historic core, rapid growth",
        description:
          "Neighborhoods near downtown and Union Street carry an established, historic character, while new subdivisions continue to spread across the city's growing edges.",
      },
      {
        title: "New residents, new yards",
        description:
          "Major employers moving into the area mean a steady stream of new homes with bare yards ready for their first landscaping and hardscaping.",
      },
      {
        title: "Family-friendly pace",
        description:
          "Parks, greenways, and a growing school system make Concord a draw for families who want usable, well-planned outdoor space at home.",
      },
    ],
  },
  upgradeSigns: {
    id: "upgrade-signs",
    label: "WHEN TO UPDATE",
    title: "Signs Your Outdoor Space Could Use an",
    titleAccent: "Update",
    intro: "A few common signs it may be time to look at your Concord outdoor space.",
    items: [
      "A new-build backyard with no landscaping or patio yet",
      "A lawn that hasn't fully established or looks patchy",
      "An older patio, walkway, or driveway showing wear",
      "No shaded or defined space for hosting friends or family",
      "Drainage that pools near the house after rain",
      "A backyard that feels unfinished compared to the rest of the home",
    ],
  },
  connected: {
    label: "CONNECTED PROJECTS",
    title: "One Contractor,",
    titleAccent: "Connected Improvements",
    paragraphs: [
      "Patio + landscaping + lighting. Walkway + planting + edging. Retaining wall + grading + drainage. Driveway + walkway + landscaping. Fence + landscaping + outdoor living.",
      "Planning these together, instead of one at a time, tends to produce a more finished result and avoid rework later.",
    ],
    imageSrc: "/05_outdoor_living_features.jpg",
  },
  steps: [
    {
      title: "Tell Us About Your Property",
      description: "Goals, space, and priorities.",
    },
    {
      title: "Review the Site",
      description: "Layout, access, drainage, and existing features.",
    },
    {
      title: "Plan the Project",
      description: "A practical approach for your property and budget.",
    },
    {
      title: "Complete the Work",
      description: "Installation carried out according to project scope.",
    },
    {
      title: "Finish the Space",
      description: "Final walkthrough, cleanup, and handoff.",
    },
  ],
  pricing: {
    label: "PROJECT COST",
    title: "What Affects",
    titleAccent: "Project Cost",
    intro:
      "Because Concord properties range from brand-new builds to established homes, a project-specific estimate gives the most accurate picture.",
    items: [
      "Property size and project scope",
      "Material selected",
      "Site preparation and access",
      "Existing landscaping or hardscape",
      "Drainage and grading needs",
      "Number of features included",
    ],
  },
  whyUs: {
    id: "why-us",
    label: "WHY GALDAMEZ",
    title: "Why Choose Empresa Galdamez in",
    titleAccent: "Concord",
    items: [
      {
        title: "Broad capabilities",
        description:
          "Landscaping, hardscaping, outdoor living, lighting, drainage, and fencing, planned as one project.",
      },
      {
        title: "Property-specific planning",
        description:
          "Built around your lot, whether newly built or well established.",
      },
      {
        title: "Practical guidance",
        description: "Recommendations based on what your property actually needs.",
      },
      {
        title: "Clear communication",
        description: "You'll know what to expect from start to finish.",
      },
    ],
  },
  commercial: {
    id: "commercial",
    label: "COMMERCIAL",
    title: "Commercial Properties in",
    titleAccent: "Concord",
    intro:
      "Concord's growing retail and business districts, from areas near Concord Mills to newer commercial corridors, benefit from the same coordinated approach.",
    items: [
      "Business entrances and walkways",
      "Outdoor seating for restaurants and retail",
      "Landscaping that supports curb appeal",
      "Parking area edges and drainage",
    ],
    imageSrc: "/09_commercial_services.jpg",
  },
  projectsHelp: {
    label: "PROJECT TYPES",
    title: "Projects We Can Help With in",
    titleAccent: "Concord",
    description:
      "Paver patios, walkways, driveways, retaining walls, seating walls, outdoor kitchens, fire features, pergolas, landscaping, sod, planting, mulch, landscape lighting, drainage, grading, fencing, water features, ponds, and commercial outdoor improvements.",
  },
  region: {
    label: "SERVICE REGION",
    title: "Serving the Charlotte Region,",
    titleAccent: "Including Concord",
    paragraphs: [
      "Empresa Galdamez serves properties throughout the Charlotte area, including Concord. Outside our immediate area? Share your project location, and we'll let you know if it's within reach.",
    ],
  },
  faqs: [
    {
      question: "What landscaping services are available in Concord, NC?",
      answer:
        "Sod, tree and shrub planting, flower planting, mulch, rock and edging, artificial turf, and lawn care and maintenance, suited to both new-build yards and established properties.",
    },
    {
      question: "Do you install patios and pavers in Concord?",
      answer:
        "Yes. Paver, stone, brick, and concrete patios and walkways, styled to fit Concord's mix of historic and newer homes.",
    },
    {
      question: "Can landscaping and hardscaping be planned together?",
      answer:
        "Yes. A patio paired with planting and lighting, or a driveway paired with a walkway, tends to look and work better than separate additions over time.",
    },
    {
      question: "What outdoor living features fit a Concord backyard?",
      answer:
        "Outdoor kitchens, fire pits, fireplaces, pergolas, gazebos, arbors, and decks, ideal for a city built around hosting and entertaining.",
    },
    {
      question: "Do you offer retaining wall services?",
      answer:
        "Yes. Retaining walls, seating walls, and steps for properties with elevation changes or drainage needs.",
    },
    {
      question: "Can you help a new-construction home in Concord get its first landscaping done?",
      answer:
        "Yes. Many new Concord neighborhoods start with a bare yard, and we help plan the first round of sod, planting, and hardscaping from the ground up.",
    },
    {
      question: "Can you help with outdoor improvements for a business in Concord?",
      answer:
        "Yes. Commercial hardscaping and landscaping are available for retail, office, and other business properties throughout Concord.",
    },
    {
      question: "How do I request an estimate in Concord?",
      answer: `Fill out the form on this page, or call ${brand.phone}. We'll follow up to discuss your project.`,
    },
  ],
  cta: {
    label: "READY TO START",
    title: "Ready to Improve Your Concord Outdoor Space?",
    description:
      "New build or established home, tell us about your Concord property and we'll help you plan the right next step.",
    primaryCta: "Request a Concord Estimate",
    secondaryCta: "Discuss Your Outdoor Project",
  },
};

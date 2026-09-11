import { brand } from "@/data/content";

export const commercialPage = {
  slug: "commercial",
  meta: {
    title: "Commercial Patio, Hardscaping & Landscaping Services Charlotte | Empresa Galdamez",
    description:
      "Empresa Galdamez provides commercial hardscaping, landscaping, and outdoor space planning for Charlotte businesses, property managers, and commercial property owners.",
  },
  hero: {
    label: "Commercial Services Charlotte",
    title: "Commercial Patio, Hardscaping & Landscaping",
    titleAccent: "Services Charlotte",
    description:
      "Commercial hardscaping and landscaping in Charlotte, planned around how your property is actually used. Empresa Galdamez helps businesses, property managers, and commercial property owners improve outdoor spaces through hardscaping, landscaping, and outdoor feature planning built around each property's layout and purpose.",
    primaryCta: "Request a Commercial Estimate",
    secondaryCta: "Discuss Your Project",
    imageSrc: "/09_commercial_services.jpg",
    trustBadges: [
      "Commercial Hardscaping",
      "Commercial Landscaping",
      "Outdoor Spaces",
    ],
    exploreLinks: [
      { name: "Hardscaping", href: "#hardscaping" },
      { name: "Landscaping", href: "#landscaping" },
      { name: "Outdoor Spaces", href: "#outdoor-spaces" },
      { name: "Process", href: "#how-it-works" },
      { name: "FAQ", href: "#faq" },
    ],
  },
  bookForm: {
    label: "BOOK YOUR PROJECT",
    title: "Tell Us About Your Commercial Project",
    titleAccent: "Commercial Project",
    description:
      "Share your property details, project goals, and the services you are considering, along with your preferred timeline, so we can evaluate the project and discuss appropriate next steps.",
    submitLabel: "Request My Commercial Estimate",
    defaultService: "commercial",
  },
  overview: {
    label: "OUR SERVICE",
    title: "Commercial Hardscaping &",
    titleAccent: "Landscaping Services",
    paragraphs: [
      "Commercial outdoor improvements generally fall into three categories: hardscaping, landscaping, and outdoor spaces designed for people to actually use. A project might involve one of these, or a combination, depending on the property.",
      "Common elements include entrances, walkways, driveways, outdoor seating, patios, landscape beds, retaining walls, drainage, outdoor lighting, and planting. The right combination depends on your property's layout, how it is used, existing conditions, and what you are trying to accomplish.",
    ],
    imageSrc: "/09_commercial_services.jpg",
  },
  hardscaping: {
    id: "hardscaping",
    label: "COMMERCIAL HARDSCAPING",
    title: "Commercial Hardscaping for Functional,",
    titleAccent: "Professional Properties",
    paragraphs: [
      "Commercial hardscaping creates the durable, organized surfaces that support how people move through and interact with a property. A well-planned entrance, walkway, or driveway affects how customers, employees, and visitors first experience a business, and how easily they can get where they need to go.",
      "Hardscaping can help define pedestrian paths, mark clear transitions between parking and entrances, and create outdoor gathering areas that hold up to regular commercial use. Properly planned drainage and grading also matter more in a commercial setting, where consistent access and appearance are part of the property's day-to-day function.",
    ],
    imageSrc: "/03_driveway_services_charlotte_nc.jpg",
    servicesIntro: "Related Commercial Hardscaping Services",
    services: [
      {
        name: "Paver Installation",
        description:
          "Durable, design-flexible surfacing for entrances, walkways, and gathering areas that holds up to regular foot traffic.",
        imageSrc: "/02_paver_services_charlotte_nc.jpg",
      },
      {
        name: "Commercial Walkways",
        description:
          "Defined, accessible paths that guide movement between parking, entrances, and outdoor areas.",
        imageSrc: "/03_front_entry_rebuild.jpg",
      },
      {
        name: "Commercial Driveways",
        description:
          "Surfaces built to handle regular vehicle traffic and support a professional property approach.",
        imageSrc: "/03_driveway_services_charlotte_nc.jpg",
      },
      {
        name: "Retaining Walls",
        description:
          "Structural solutions for sloped sites, helping manage elevation changes across a commercial property.",
        imageSrc: "/04_walls_structural.jpg",
      },
      {
        name: "Steps",
        description:
          "Practical transitions between different elevations on a property, planned for consistent, safe use.",
        imageSrc: "/04_sloped_garden_terraces.jpg",
      },
      {
        name: "Seating Walls",
        description:
          "Low walls that double as outdoor seating for gathering or waiting areas.",
        imageSrc: "/05_outdoor_living_features.jpg",
      },
      {
        name: "Patios",
        description:
          "Defined outdoor areas suited to seating, gathering, or additional usable space.",
        imageSrc: "/01_patios_walkways_charlotte_nc.jpg",
      },
      {
        name: "Drainage & Grading",
        description:
          "Site work that manages water flow and prepares the property for hardscape and landscape installation.",
        imageSrc: "/06_lighting_utilities.jpg",
      },
    ],
  },
  landscaping: {
    id: "landscaping",
    label: "COMMERCIAL LANDSCAPING",
    title: "Commercial Landscaping That Improves",
    titleAccent: "Property Appearance",
    paragraphs: [
      "Landscaping affects how a commercial property is perceived before anyone walks through the door. A well-maintained lawn, defined planting beds, and consistent greenery around a building contribute directly to how professional and cared-for a property feels.",
      "Landscaping also connects naturally with hardscaping. Planting beds along a walkway, greenery framing an entrance, or trees positioned around a parking area all help tie different parts of a commercial property together instead of leaving them feeling disconnected.",
    ],
    imageSrc: "/07_landscaping.jpg",
    servicesIntro: "Related Commercial Landscaping Services",
    services: [
      {
        name: "Sod Installation",
        description:
          "Establishes a consistent, finished lawn area around a building or property entrance.",
        imageSrc: "/07_landscaping.jpg",
      },
      {
        name: "Tree & Shrub Planting",
        description:
          "Adds structure, shade, and seasonal interest around buildings and parking areas.",
        imageSrc: "/04_sloped_garden_terraces.jpg",
      },
      {
        name: "Flower Planting",
        description:
          "Brings seasonal color to entrances, beds, and other visible areas of a property.",
        imageSrc: "/01_patios_walkways_charlotte_nc.jpg",
      },
      {
        name: "Mulch",
        description:
          "Defines planting beds and gives them a clean, maintained appearance.",
        imageSrc: "/07_landscaping.jpg",
      },
      {
        name: "Rock & Edging",
        description:
          "Separates lawn from planting areas and reduces overall maintenance needs.",
        imageSrc: "/03_front_entry_rebuild.jpg",
      },
      {
        name: "Artificial Turf",
        description:
          "A consistent green appearance for select areas with reduced routine mowing.",
        imageSrc: "/01_modern_courtyard_transformation.jpg",
      },
      {
        name: "Lawn Care & Maintenance",
        description:
          "Ongoing care that keeps outdoor areas presentable throughout the year.",
        imageSrc: "/07_landscaping.jpg",
      },
      {
        name: "Tree Work",
        description:
          "Addresses trimming, removal, or cleanup needs for property trees.",
        imageSrc: "/04_sloped_garden_terraces.jpg",
      },
    ],
  },
  outdoorSpaces: {
    id: "outdoor-spaces",
    label: "OUTDOOR SPACES",
    title: "Commercial Outdoor Spaces for Customers,",
    titleAccent: "Employees and Visitors",
    paragraphs: [
      "Beyond hardscaping and landscaping individually, many commercial properties benefit from outdoor spaces designed for people to actually use, not just pass through. This might mean outdoor seating near a restaurant or office, a patio for tenants, or a landscaped gathering area near a retail entrance.",
      "Depending on the property, this can include outdoor seating areas, patios, walkways, pavers, landscape lighting, water features, pergolas, gazebos, or simple green space that gives people a place to sit or gather. Not every feature fits every property. The right approach depends on how the space will be used and who is using it, whether that is customers, employees, tenants, or visitors.",
    ],
    imageSrc: "/05_outdoor_living_features.jpg",
  },
  cohesive: {
    label: "COHESIVE DESIGN",
    title: "Designing a Cohesive",
    titleAccent: "Commercial Property",
    intro:
      "Hardscaping, landscaping, and outdoor features generally work best when planned together rather than added separately over time. Planning these pieces together tends to produce a property that reads as one coordinated environment.",
    imageSrc: "/09_commercial_services.jpg",
    items: [
      "Pavers paired with planting beds along the same walkway",
      "Walkways lit with landscape lighting for evening visibility",
      "Retaining walls softened by surrounding landscaping",
      "Patios paired with outdoor seating for a usable gathering space",
      "Driveways framed with defined landscape edges",
      "Commercial entrances coordinated with consistent planting",
      "Outdoor spaces supported by shade structures where appropriate",
      "Water features integrated with surrounding landscaping",
    ],
  },
  cost: {
    label: "INVESTMENT",
    title: "How Much Does Commercial Landscaping and Hardscaping",
    titleAccent: "Cost?",
    intro:
      "Commercial project costs vary significantly depending on the scope of work, and there is no standard rate that applies across different properties. Because commercial projects differ so widely in scope, each one should be evaluated individually rather than estimated from a general price range.",
    imageSrc: "/09_commercial_services.jpg",
    factors: [
      "Property size and overall project scope",
      "Materials selected",
      "Amount of hardscape versus landscaping involved",
      "Site preparation needs",
      "Existing site conditions",
      "Accessibility for equipment and materials",
      "Drainage or grading requirements",
      "Number of outdoor features included",
      "Planting requirements",
      "Removal work, if applicable",
      "Overall project complexity",
    ],
  },
  considerations: {
    label: "BEFORE YOU START",
    title: "What Should Businesses Consider Before Starting an",
    titleAccent: "Outdoor Project?",
    intro:
      "A few practical questions can help shape a commercial outdoor project. Thinking through these questions before starting helps set a project scope that actually fits the property.",
    items: [
      {
        title: "How is the property currently used?",
        description:
          "By customers, employees, and visitors — and does the outdoor layout support that?",
      },
      {
        title: "Natural movement patterns",
        description:
          "Where do people naturally move through the property, and does the current layout support that?",
      },
      {
        title: "Existing walkways and seating",
        description:
          "Are existing walkways, entrances, and outdoor seating meeting the property's needs?",
      },
      {
        title: "Maintenance expectations",
        description:
          "What are the ongoing maintenance expectations for the property?",
      },
      {
        title: "Drainage or grading issues",
        description:
          "Are drainage or grading issues affecting how the property functions?",
      },
      {
        title: "Property presentation",
        description:
          "Is the current landscaping and hardscaping consistent with how the property presents itself?",
      },
      {
        title: "Future plans",
        description:
          "Are there future expansion or improvement plans that should factor into the current project?",
      },
    ],
  },
  charlotte: {
    label: "CHARLOTTE COMMERCIAL",
    title: "Commercial Landscaping and Hardscaping in",
    titleAccent: "Charlotte",
    paragraphs: [
      "Commercial properties across Charlotte vary widely in layout, use, and existing conditions, from retail entrances to office parks to multifamily common areas. Because of that, outdoor improvements should be planned around the individual property rather than a standard approach.",
      "Commercial outdoor improvements can support a more professional property presentation, clearly defined pedestrian areas, attractive entrances, usable outdoor gathering spaces, coordinated landscaping, and reliable outdoor access for everyone who uses the property.",
    ],
    imageSrc: "/09_commercial_services.jpg",
  },
  whyChoose: {
    label: "WHY CHOOSE US",
    title: "Why Choose",
    titleAccent: "Empresa Galdamez?",
    items: [
      {
        title: "Property-specific planning",
        description:
          "Commercial projects are planned around your property's actual layout and use, not a standard package.",
      },
      {
        title: "Hardscaping and landscaping coordination",
        description:
          "Services are considered together so the finished property feels cohesive.",
      },
      {
        title: "Complete outdoor project thinking",
        description:
          "Hardscaping, landscaping, and outdoor features can all be planned as one connected project.",
      },
      {
        title: "Practical recommendations",
        description:
          "Guidance is based on what your property actually needs.",
      },
      {
        title: "Clear project communication",
        description:
          "You will know what to expect from the first conversation through completion.",
      },
    ],
  },
  projectTypes: {
    label: "PROJECT TYPES",
    title: "Commercial Project",
    titleAccent: "Types",
    intro:
      "These represent the types of commercial projects Empresa Galdamez can help address, based on your property's specific needs.",
    imageSrc: "/09_commercial_services.jpg",
    items: [
      "Business properties",
      "Office properties",
      "Retail environments",
      "Hospitality properties",
      "Multifamily outdoor areas",
      "Commercial entrances",
      "Outdoor seating areas",
      "Walkways and driveways",
      "Landscape improvements",
      "Paver areas",
      "Retaining walls",
      "Outdoor gathering spaces",
    ],
  },
  process: {
    label: "OUR PROCESS",
    title: "Commercial Outdoor",
    titleAccent: "Project Process",
    description:
      "A clear path from understanding your property to finished outdoor improvements that support how it is actually used.",
    items: [
      {
        title: "Discuss the Property",
        description:
          "We talk through your property, goals, existing outdoor conditions, and intended use.",
      },
      {
        title: "Identify the Services",
        description:
          "We determine whether the project needs hardscaping, landscaping, outdoor features, or some combination.",
      },
      {
        title: "Plan the Improvements",
        description:
          "We develop a practical approach based on your property's layout and requirements.",
      },
      {
        title: "Prepare & Install",
        description:
          "Site preparation and installation of the selected improvements according to the agreed project scope.",
      },
      {
        title: "Finalize the Space",
        description:
          "We complete the work and make sure the improved areas connect naturally with the rest of the property.",
      },
    ],
  },
  faqs: [
    {
      question: "What commercial hardscaping services are available in Charlotte?",
      answer:
        "Commercial hardscaping services can include paver installation, walkways, driveways, retaining walls, steps, seating walls, patios, and drainage or grading work, planned around the specific property and its intended use.",
    },
    {
      question: "What landscaping services are available for commercial properties?",
      answer:
        "Commercial landscaping services can include sod installation, tree and shrub planting, flower planting, mulch, rock and edging, artificial turf, and ongoing lawn care and maintenance, depending on what the property needs.",
    },
    {
      question: "Can hardscaping and landscaping be completed as one project?",
      answer:
        "Yes. Many commercial projects combine hardscaping and landscaping so the finished property reads as one coordinated environment rather than separate, disconnected improvements.",
    },
    {
      question: "What can be included in a commercial outdoor space?",
      answer:
        "Depending on the property, outdoor spaces can include seating areas, patios, walkways, pavers, landscape lighting, and green space, designed around how customers, employees, or tenants actually use the area.",
    },
    {
      question: "How much does commercial landscaping cost in Charlotte?",
      answer:
        "Cost depends on property size, project scope, materials, and site conditions. Because commercial projects vary so widely, the most accurate figure comes from a project-specific estimate.",
    },
    {
      question: "How much does commercial hardscaping cost?",
      answer:
        "Cost depends on the type and amount of hardscaping involved, site preparation needs, and project complexity. A project-specific estimate provides a far more accurate picture than a general price range.",
    },
    {
      question: "Can commercial walkways, patios, and landscaping be planned together?",
      answer:
        "Yes. Planning these elements together generally produces a more cohesive result than adding each one separately over time.",
    },
    {
      question: "How do I request a commercial landscaping or hardscaping estimate?",
      answer: `Fill out the project form on this page with your property and project details, or call ${brand.phone}. A member of the team will follow up to discuss next steps.`,
    },
  ],
  cta: {
    label: "PLAN A BETTER COMMERCIAL OUTDOOR SPACE",
    title: "Plan a Better Commercial",
    titleAccent: "Outdoor Space",
    description:
      "Whether your property needs commercial hardscaping, landscaping, outdoor space improvements, or a combination of all three, tell us about your property and goals, and we will help you plan an approach that fits how the space is actually used.",
    primaryCta: "Request a Commercial Estimate",
    secondaryCta: "Discuss Your Project",
  },
};

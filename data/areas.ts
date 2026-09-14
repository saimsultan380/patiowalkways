import { brand } from "@/data/content";

export type AreaNavItem = {
  name: string;
  shortName: string;
  slug: string;
  href: string;
  hasPage: boolean;
  blurb: string;
};

export const areaNavItems: AreaNavItem[] = [
  {
    name: "Charlotte, NC",
    shortName: "Charlotte",
    slug: "charlotte",
    href: "/areas",
    hasPage: false,
    blurb: "Our home base for hardscaping, landscaping, and outdoor living across the metro.",
  },
  {
    name: "Davidson, NC",
    shortName: "Davidson",
    slug: "davidson",
    href: "/areas/davidson",
    hasPage: true,
    blurb: "Thoughtfully planned outdoor spaces for Davidson homes and established properties.",
  },
  {
    name: "Denver, NC",
    shortName: "Denver",
    slug: "denver",
    href: "/areas/denver",
    hasPage: true,
    blurb: "Outdoor spaces built for Denver's larger lots and Lake Norman-area properties.",
  },
  {
    name: "Huntersville, NC",
    shortName: "Huntersville",
    slug: "huntersville",
    href: "/areas/huntersville",
    hasPage: true,
    blurb: "Outdoor spaces built for the way Huntersville actually lives — newer builds and established neighborhoods.",
  },
  {
    name: "Monroe, NC",
    shortName: "Monroe",
    slug: "monroe",
    href: "/areas/monroe",
    hasPage: true,
    blurb: "More yard, more possibilities — historic in-town lots and wide-open new builds across Union County.",
  },
  {
    name: "Concord, NC",
    shortName: "Concord",
    slug: "concord",
    href: "/areas/concord",
    hasPage: true,
    blurb: "From historic Union Street to Concord's newest neighborhoods — outdoor spaces for a fast-growing city.",
  },
];

export const davidsonPage = {
  meta: {
    title: "Landscaping & Hardscaping Services Davidson, NC | Empresa Galdamez",
    description:
      "Landscaping, hardscaping, patios, pavers, retaining walls, outdoor living, lighting, drainage, and fencing for Davidson, NC properties. Request a free estimate.",
  },
  hero: {
    label: "DAVIDSON, NC",
    title: "Best Landscaping & Hardscaping Services in",
    titleAccent: "Davidson, NC",
    description:
      "Empresa Galdamez provides landscaping, hardscaping, outdoor living, patios, pavers, retaining walls, lighting, drainage, and fencing for properties throughout Davidson, planned around each property's layout and character.",
    imageSrc: "/07_landscaping.jpg",
    primaryCta: "Request a Davidson Estimate",
    secondaryCta: "Discuss My Outdoor Project",
    trustBadges: ["Property-Specific Planning", "Connected Outdoor Projects", "Charlotte Region"],
    exploreLinks: [
      { name: "Our Services", href: "#services" },
      { name: "Before You Start", href: "#considerations" },
      { name: "How We Work", href: "#how-it-works" },
      { name: "FAQ", href: "#faq" },
    ],
  },
  bookForm: {
    label: "BOOK YOUR DAVIDSON PROJECT",
    title: "Tell Us About Your",
    titleAccent: "Davidson Property",
    description:
      "Whether your project involves landscaping, a patio, pavers, walkways, a driveway, retaining walls, outdoor living features, lighting, drainage, or fencing, share a few details and we will follow up to discuss next steps.",
    submitLabel: "Request My Davidson Estimate",
    defaultService: "landscaping",
  },
  overview: {
    label: "DAVIDSON OUTDOOR SERVICES",
    title: "Outdoor Services for",
    titleAccent: "Davidson Properties",
    paragraphs: [
      "Empresa Galdamez helps Davidson property owners plan outdoor improvements as connected projects rather than isolated features. That can mean landscaping and a new patio planned together, a walkway that ties into existing pavers, or lighting and drainage considered alongside a retaining wall.",
      "Services available for Davidson properties include patios and walkways, paver installation, driveways, retaining walls and structural features, outdoor living spaces, lighting and utilities, landscaping, fences and water features, and commercial hardscaping and landscaping for business properties.",
    ],
    imageSrc: "/01_patios_walkways_charlotte_nc.jpg",
  },
  services: {
    id: "services",
    label: "OUR SERVICES",
    title: "What We Can Build in",
    titleAccent: "Davidson",
    intro:
      "The sections below walk through what each service can look like on a Davidson property.",
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
    label: "BEFORE YOU START",
    title: "What Davidson Property Owners Should Consider",
    titleAccent: "Before Starting",
    intro:
      "A few things are worth thinking through before work begins. Working with the property as it exists, rather than forcing a generic design onto it, tends to produce a better long-term result.",
    items: [
      {
        title: "Existing trees",
        description:
          "Davidson's mature tree canopy affects shade, root space, and what can be planted nearby.",
      },
      {
        title: "Property layout",
        description:
          "Older, established lots often have different grading and access than newer developments.",
      },
      {
        title: "Existing hardscape",
        description:
          "New work should tie into whatever patios, walkways, or driveways are already in place.",
      },
      {
        title: "Drainage and grading",
        description:
          "Water flow across the property affects nearly every other outdoor improvement.",
      },
      {
        title: "Architectural character",
        description:
          "Material and scale choices tend to hold up better when they fit the property's existing style.",
      },
      {
        title: "Desired maintenance",
        description:
          "Some homeowners want a low-upkeep yard, others are comfortable with more involved care.",
      },
      {
        title: "Future plans",
        description:
          "If more outdoor work is likely down the road, it helps to plan the current project with that in mind.",
      },
    ],
  },
  connected: {
    label: "CONNECTED PROJECTS",
    title: "One Contractor for Connected",
    titleAccent: "Outdoor Improvements",
    paragraphs: [
      "Many of the strongest outdoor projects combine more than one service. A patio paired with landscaping and lighting. A walkway finished with planting and edging. A retaining wall planned alongside grading and drainage. An outdoor kitchen built into a patio with lighting nearby. A driveway connected to a walkway and surrounding landscaping. A fence integrated with existing landscaping and outdoor living features.",
      "Planning these together, with one contractor coordinating the different pieces, generally produces a more cohesive result than treating each as a separate project.",
    ],
    imageSrc: "/05_outdoor_living_features.jpg",
  },
  steps: [
    {
      id: "01",
      title: "Tell Us About Your Property",
      description: "Share your goals, outdoor space, and project priorities.",
    },
    {
      id: "02",
      title: "Review the Site",
      description:
        "We consider layout, existing features, access, landscaping, and drainage.",
    },
    {
      id: "03",
      title: "Plan the Project",
      description: "We develop a practical approach based on the desired result.",
    },
    {
      id: "04",
      title: "Complete the Outdoor Improvements",
      description: "We install the agreed services according to the project scope.",
    },
    {
      id: "05",
      title: "Finish the Space",
      description:
        "We complete the project so the new work fits naturally with the surrounding property.",
    },
  ],
  pricing: {
    label: "PROJECT COST",
    title: "How Much Do Outdoor Services Cost in",
    titleAccent: "Davidson?",
    paragraphs: [
      "Cost varies by property size, service selected, material, project scope, site preparation, access, and existing conditions, along with landscaping, drainage, or grading needs and the overall design complexity of the project.",
      "Because Davidson properties differ so much in layout and condition, the most accurate figure comes from a project-specific estimate rather than a general price range.",
    ],
  },
  whyUs: {
    id: "why-us",
    label: "WHY GALDAMEZ",
    title: "Why Choose Empresa Galdamez in",
    titleAccent: "Davidson?",
    items: [
      {
        title: "Broad outdoor capabilities",
        description:
          "Landscaping, hardscaping, outdoor living, lighting, drainage, and fencing can all be planned as one connected project.",
      },
      {
        title: "Property-specific planning",
        description:
          "Recommendations are based on your actual property, not a standard package.",
      },
      {
        title: "Practical recommendations",
        description:
          "Guidance reflects what your property needs, including its existing trees, layout, and character.",
      },
      {
        title: "Clear communication",
        description:
          "You will know what to expect from the first conversation through completion.",
      },
      {
        title: "Residential and commercial capability",
        description:
          "Projects can be planned for homes and business properties alike.",
      },
    ],
  },
  projectsHelp: {
    label: "PROJECT TYPES",
    title: "Projects We Can Help With in",
    titleAccent: "Davidson",
    description:
      "Paver patios, natural stone patios, walkways, driveways, retaining walls, seating walls, outdoor kitchens, fire features, pergolas, landscaping, sod, planting, mulch, landscape lighting, drainage, grading, fence installation, water features, ponds, and commercial outdoor improvements.",
  },
  region: {
    label: "SERVICE REGION",
    title: "Serving the Charlotte Region,",
    titleAccent: "Including Davidson",
    paragraphs: [
      `Empresa Galdamez is based in the Charlotte area and provides outdoor services to properties throughout the region, including Davidson. If your project falls outside the immediate service area, share your project location and we will let you know if it is within reach.`,
    ],
  },
  faqs: [
    {
      question: "What landscaping services are available in Davidson, NC?",
      answer:
        "Landscaping services include sod installation, tree and shrub planting, flower planting, mulch, rock and edging, artificial turf, and ongoing lawn care and maintenance, planned around each property's existing layout and trees.",
    },
    {
      question: "Does Empresa Galdamez install patios and pavers in Davidson?",
      answer:
        "Yes. Paver, natural stone, brick, and concrete patios and walkways are available for Davidson properties, with material and design choices based on the property's architecture and surrounding landscape.",
    },
    {
      question: "Can landscaping and hardscaping be planned together in Davidson?",
      answer:
        "Yes. Many Davidson projects combine landscaping and hardscaping, such as a new patio paired with planting beds, so the finished space feels cohesive rather than pieced together.",
    },
    {
      question: "What outdoor living features can be added to a Davidson property?",
      answer:
        "Options include outdoor kitchens, built-in grills, outdoor bars, fire pits, outdoor fireplaces, pergolas, gazebos, arbors, and decks, planned around the property's existing patio or backyard layout.",
    },
    {
      question: "Does Empresa Galdamez provide retaining wall services in Davidson?",
      answer:
        "Yes. Retaining walls, seating walls, and steps are available for properties with elevation changes, common on many established Davidson lots.",
    },
    {
      question: "Can you help with drainage, grading, and landscape lighting?",
      answer:
        "Yes. These are often planned alongside other projects, since proper drainage and grading affect how well patios, retaining walls, and landscaping perform over time.",
    },
    {
      question:
        "Are there special design considerations for properties in Davidson's historic areas?",
      answer:
        "Some areas of Davidson have design standards that apply to certain fences, walls, and visible site elements. These requirements can vary by property, so current Town of Davidson standards should be confirmed for any specific project rather than assumed.",
    },
    {
      question: "How do I request an estimate for an outdoor project in Davidson?",
      answer: `Fill out the project form on this page with your property and project details, or call ${brand.phone}. A member of the team will follow up to discuss next steps.`,
    },
  ],
  cta: {
    label: "READY TO START",
    title: "Ready to Improve Your Davidson Outdoor Space?",
    titleAccent: "Davidson Outdoor Space?",
    description:
      "Whether you are planning landscaping, a patio, pavers, walkways, retaining walls, outdoor living features, lighting, drainage, fencing, or water features, tell us about your Davidson property and we will help you plan the right next step.",
    primaryCta: "Request a Davidson Estimate",
    secondaryCta: "Discuss Your Outdoor Project",
  },
};

export const areasHub = {
  meta: {
    title: "Service Areas | Charlotte Region Outdoor Living | Empresa Galdamez",
    description:
      "Empresa Galdamez serves Charlotte, Davidson, Denver, Huntersville, Monroe, Concord, and surrounding communities within a 60-mile radius.",
  },
  hero: {
    label: "SERVICE AREAS",
    title: "Charlotte & Surrounding",
    titleAccent: "Communities",
    description: `Serving a ${brand.radius} with landscaping, hardscaping, and outdoor living planned around each property. Explore Davidson, Denver, Huntersville, Monroe, and Concord for full local pages, or request an estimate for Charlotte and nearby communities.`,
    imageSrc: "/03_front_entry_rebuild.jpg",
  },
};

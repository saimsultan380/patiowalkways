import { brand } from "@/data/content";

export const landscapingPage = {
  slug: "landscaping",
  meta: {
    title: "Landscaping Charlotte, NC | Landscaping Company & Contractor | Empresa Galdamez",
    description:
      "Empresa Galdamez provides landscaping in Charlotte — sod, planting, mulch, edging, artificial turf, lawn care, and tree work that ties outdoor spaces together with hardscaping.",
  },
  hero: {
    label: "Landscaping Charlotte",
    title: "Landscaping Company & Contractor in",
    titleAccent: "Charlotte, NC",
    description:
      "Your yard should work as hard as the rest of your property. Empresa Galdamez brings the lawn, plantings, and finishing touches that tie a Charlotte outdoor space together.",
    primaryCta: "Request an Estimate",
    secondaryCta: "Plan Your Landscape",
    imageSrc: "/07_landscaping.jpg",
    trustBadges: [
      "Sod, Planting & Beds",
      "Mulch, Rock & Edging",
      "Lawn Care & Tree Work",
    ],
    exploreLinks: [
      { name: "Services", href: "#services" },
      { name: "Hardscape Fit", href: "#hardscape" },
      { name: "Process", href: "#how-it-works" },
      { name: "Low Maintenance", href: "#low-maintenance" },
      { name: "FAQ", href: "#faq" },
    ],
  },
  bookForm: {
    label: "BOOK YOUR PROJECT",
    title: "Tell Us About Your Landscaping Project",
    titleAccent: "Landscaping Project",
    description:
      "Share your landscaping goals, property needs, and any services you are interested in, along with a few project details, and we will follow up to discuss the right next steps.",
    submitLabel: "Request My Landscaping Estimate",
    defaultService: "landscaping",
  },
  overview: {
    label: "OUR SERVICE",
    title: "Landscaping Services for",
    titleAccent: "Charlotte Properties",
    paragraphs: [
      "Landscaping covers everything from establishing a new lawn to planting greenery, defining beds, and keeping outdoor areas looking finished. For some properties, that means a fresh start: new sod, trees, and planting beds. For others, it means cleaning up existing areas with mulch, edging, or ongoing maintenance.",
      "Landscaping also works alongside the rest of your property, complementing existing patios, walkways, driveways, retaining walls, outdoor living spaces, drainage work, and lighting rather than standing apart from it.",
    ],
    imageSrc: "/07_landscaping.jpg",
  },
  services: {
    id: "services",
    label: "OUR LANDSCAPING SERVICES",
    title: "Landscaping Services We",
    titleAccent: "Provide",
    intro:
      "From new lawns and plantings to finishing touches and ongoing care, each service is planned around your property's layout and goals.",
    items: [
      {
        name: "Sod Installation",
        description:
          "Sod installation gives you an established lawn right away, with the soil prepared and grass placed to fit your yard's shape and take root quickly.",
        imageSrc: "/07_landscaping.jpg",
      },
      {
        name: "Tree & Shrub Planting",
        description:
          "Strategically placed trees and shrubs add structure, privacy, seasonal color, and visual balance, filling bare areas and connecting your yard to the rest of the property.",
        imageSrc: "/04_sloped_garden_terraces.jpg",
      },
      {
        name: "Flower Planting",
        description:
          "Flower planting brings seasonal color to entryways, walkways, and beds, giving your property a fresh, welcoming look that changes throughout the year without a full overhaul.",
        imageSrc: "/01_patios_walkways_charlotte_nc.jpg",
      },
      {
        name: "Mulch",
        description:
          "Mulch defines the edges of planting beds and gives them a clean, finished look, while helping the surrounding soil and plants stay more consistent through the season.",
        imageSrc: "/07_landscaping.jpg",
      },
      {
        name: "Rock & Edging",
        description:
          "Decorative rock and clean edging separate lawn from planting beds, reduce visual clutter, and give your landscape a more organized, defined structure throughout the yard.",
        imageSrc: "/03_front_entry_rebuild.jpg",
      },
      {
        name: "Artificial Turf",
        description:
          "Artificial turf offers a consistently green lawn with less routine mowing, a practical option for select areas where a lower-maintenance surface makes sense for your property.",
        imageSrc: "/01_modern_courtyard_transformation.jpg",
      },
      {
        name: "Lawn Care & Maintenance",
        description:
          "Ongoing lawn and landscape maintenance keeps your outdoor space neat and healthy, protecting the investment you have made in your property's appearance season after season.",
        imageSrc: "/07_landscaping.jpg",
      },
      {
        name: "Tree Work",
        description:
          "Tree work addresses property-related needs like trimming, removal, or cleanup, handled safely and appropriately based on what your specific trees actually require.",
        imageSrc: "/04_sloped_garden_terraces.jpg",
      },
    ],
  },
  hardscape: {
    id: "hardscape",
    label: "HARDSCAPE CONNECTION",
    title: "Landscaping That Works With Your",
    titleAccent: "Hardscape",
    paragraphs: [
      "Landscaping works best when it complements your hardscaping instead of competing with it. Planting beds along a patio edge, greenery softening a retaining wall, or edging that follows a paver walkway all help different parts of a property feel connected rather than separate.",
      "This applies across most hardscape features. A driveway benefits from clean edging and planting that frames the approach to your home. Outdoor living areas feel more finished when landscaping fills in the space around a patio or fire feature. Drainage and grading work often relies on the right plants and ground cover to hold soil in place once the work is done. Landscape lighting can highlight the greenery and beds that landscaping puts in place.",
      "When these pieces are planned together, the property reads as one cohesive design instead of a collection of separate projects.",
    ],
    imageSrc: "/01_patios_walkways_charlotte_nc.jpg",
  },
  buildFit: {
    label: "PROPERTY FIT",
    title: "Build a Landscape That Fits",
    titleAccent: "Your Property",
    intro: "A few things are worth thinking through before landscaping begins:",
    items: [
      {
        title: "Available space",
        description: "How much room you have shapes what is realistic.",
      },
      {
        title: "Existing lawn and planting areas",
        description:
          "What is already there affects what needs to be added, replaced, or reworked.",
      },
      {
        title: "Sun and shade",
        description:
          "Different areas of a yard support different plants and lawn conditions.",
      },
      {
        title: "Existing trees",
        description:
          "Mature trees affect shade, root space, and planting decisions nearby.",
      },
      {
        title: "Drainage and grading",
        description:
          "Water flow across the property affects where plants and lawn will actually thrive.",
      },
      {
        title: "Existing hardscape",
        description:
          "Patios, walkways, and driveways should factor into how landscaping is laid out.",
      },
      {
        title: "Desired maintenance level",
        description:
          "Some homeowners want a low-upkeep yard, while others are comfortable with more involved care.",
      },
      {
        title: "How the property is used",
        description:
          "A yard built for entertaining has different needs than one meant mainly for curb appeal.",
      },
    ],
  },
  installation: {
    label: "INSTALLATION",
    title: "What Is Involved in a",
    titleAccent: "Landscaping Project?",
    intro:
      "From the first conversation to a finished yard, landscaping projects move through clear stages so lawn, plantings, and finishing touches connect well with the rest of the property.",
    imageSrc: "/07_landscaping.jpg",
    steps: [
      "Discuss Your Property — We talk through your current outdoor space, goals, and any problem areas you want addressed.",
      "Plan the Landscape — We determine which elements, planting areas, and lawn solutions fit your property and goals.",
      "Prepare the Site — Preparation may involve clearing, soil work, or removing unwanted vegetation, depending on the project.",
      "Install the Landscaping — We install the selected lawn, plants, mulch, rock, edging, turf, or other elements.",
      "Complete the Space — We finish with cleanup and make sure the new landscaping connects well with the surrounding property.",
    ],
  },
  cost: {
    label: "INVESTMENT",
    title: "How Much Do Landscaping Services Cost in",
    titleAccent: "Charlotte?",
    intro:
      "Landscaping cost depends on the specific project, and there is no single number that applies across every property. An estimate allows your specific property and project scope to be considered before any pricing is discussed.",
    imageSrc: "/04_sloped_garden_terraces.jpg",
    factors: [
      "Property size and scope of work",
      "Existing site conditions and how much preparation is needed",
      "Number and type of plants",
      "Sod area, if a new lawn is part of the project",
      "Mulch or rock quantities",
      "Amount of edging involved",
      "Artificial turf area, if applicable",
      "Tree work needs",
      "Ongoing lawn maintenance requirements",
      "Site accessibility",
      "Existing hardscaping or drainage considerations",
    ],
  },
  signs: {
    label: "WARNING SIGNS",
    title: "Signs Your Property May Need",
    titleAccent: "Landscaping",
    intro:
      "Landscaping does not always mean a full property transformation. Common signs that some level of work would help include:",
    imageSrc: "/03_front_entry_rebuild.jpg",
    items: [
      "A patchy or worn lawn",
      "Bare or empty planting areas",
      "Overgrown trees, shrubs, or beds",
      "Unclear or undefined landscape borders",
      "A general lack of greenery around the property",
      "Unfinished areas around a patio or walkway",
      "Curb appeal that feels dated or plain",
      "Lawn maintenance that has become harder to keep up with",
    ],
    note: "Sometimes a smaller update, like fresh mulch and edging, makes a noticeable difference without a larger project.",
  },
  charlotte: {
    label: "CHARLOTTE PLANNING",
    title: "Landscaping for Charlotte",
    titleAccent: "Outdoor Spaces",
    paragraphs: [
      "Charlotte properties deal with real seasonal change, from summer heat to cooler winters, which affects how a lawn and planting beds perform throughout the year. Sun exposure, existing trees, and drainage all vary property to property, so what works well in one yard may need adjustment in another.",
      "A few things worth considering for a Charlotte property: how much shade nearby trees create, how water moves across the yard after rain, and how much upkeep you actually want to take on. Planning around these factors from the start tends to produce a landscape that holds up better over time.",
    ],
    imageSrc: "/04_sloped_garden_terraces.jpg",
  },
  lowMaintenance: {
    id: "low-maintenance",
    label: "LOW MAINTENANCE",
    title: "Low-Maintenance Landscaping",
    titleAccent: "Options",
    intro:
      "For homeowners looking to reduce routine upkeep, a few combinations tend to help. No landscaping option is entirely maintenance-free, but the right combination can meaningfully reduce the time and effort required to keep a yard looking good.",
    imageSrc: "/01_modern_courtyard_transformation.jpg",
    items: [
      "Artificial turf in select areas",
      "Decorative rock instead of high-maintenance planting beds",
      "Defined edging to keep lawn and beds separated",
      "Mulched beds to reduce weed growth",
      "Planting choices suited to the amount of care you want to provide",
    ],
  },
  whyChoose: {
    label: "WHY CHOOSE US",
    title: "Why Choose Empresa Galdamez for",
    titleAccent: "Landscaping?",
    items: [
      {
        title: "Complete outdoor planning",
        description:
          "Landscaping is considered alongside patios, walkways, and other hardscaping rather than as an isolated project.",
      },
      {
        title: "Property-specific solutions",
        description:
          "Recommendations are based on your actual yard, not a standard package.",
      },
      {
        title: "Attention to appearance and function",
        description:
          "Landscaping is planned to look good and hold up to how you actually use the space.",
      },
      {
        title: "Clear communication",
        description:
          "You will know what to expect from the first conversation through project completion.",
      },
      {
        title: "Practical recommendations",
        description:
          "Guidance is based on what your property needs, not on upselling every available service.",
      },
    ],
  },
  projectTypes: {
    label: "PROJECT TYPES",
    title: "Landscaping Projects We Can",
    titleAccent: "Help With",
    imageSrc: "/07_landscaping.jpg",
    items: [
      "New lawn installation",
      "Lawn improvement",
      "Planting bed installation",
      "Tree and shrub planting",
      "Flower beds",
      "Mulch installation",
      "Decorative rock and edging",
      "Artificial turf areas",
      "Landscape maintenance",
      "Tree-related outdoor work",
      "Landscaping around patios, walkways, driveways, and retaining walls",
      "Landscape improvements around outdoor living spaces",
    ],
  },
  fitCheck: {
    label: "WHAT DO YOU NEED?",
    title: "What Does Your Landscape",
    titleAccent: "Need?",
    intro: "Tell us about your property and we can help you determine the right landscaping approach.",
    items: [
      {
        title: "Need a new lawn?",
        description: "Consider sod installation or artificial turf.",
      },
      {
        title: "Need more greenery?",
        description: "Consider tree and shrub planting or flower planting.",
      },
      {
        title: "Need cleaner planting beds?",
        description: "Consider mulch, rock, and edging.",
      },
      {
        title: "Need ongoing upkeep?",
        description: "Consider lawn care and maintenance.",
      },
      {
        title: "Need help with trees?",
        description: "Consider tree work.",
      },
    ],
  },
  process: {
    label: "OUR PROCESS",
    title: "Our Landscaping",
    titleAccent: "Process",
    description:
      "A clear path from your goals to a finished landscape that connects with the rest of your outdoor space.",
    items: [
      {
        title: "Discuss Your Property",
        description:
          "We talk through your current outdoor space, goals, and any problem areas you want addressed.",
      },
      {
        title: "Plan the Landscape",
        description:
          "We determine which elements, planting areas, and lawn solutions fit your property and goals.",
      },
      {
        title: "Prepare the Site",
        description:
          "Preparation may involve clearing, soil work, or removing unwanted vegetation, depending on the project.",
      },
      {
        title: "Install the Landscaping",
        description:
          "We install the selected lawn, plants, mulch, rock, edging, turf, or other elements.",
      },
      {
        title: "Complete the Space",
        description:
          "We finish with cleanup and make sure the new landscaping connects well with the surrounding property.",
      },
    ],
  },
  faqs: [
    {
      question: "How much do landscaping services cost in Charlotte?",
      answer:
        "Cost depends on property size, scope of work, plant selection, and site conditions. Because these factors vary so much by project, the most accurate figure comes from a project-specific estimate rather than a general price range.",
    },
    {
      question: "What landscaping services does Empresa Galdamez provide?",
      answer:
        "Services include sod installation, tree and shrub planting, flower planting, mulch, rock and edging, artificial turf, lawn care and maintenance, and tree work, planned around your property's needs.",
    },
    {
      question: "Is sod or artificial turf better for my property?",
      answer:
        "It depends on your priorities. Sod establishes a natural lawn quickly, while artificial turf offers a consistent green appearance with less routine mowing. The right choice depends on maintenance preferences and how the area is used.",
    },
    {
      question: "Can landscaping be added around an existing patio or walkway?",
      answer:
        "Yes. Planting beds, edging, and greenery are commonly added around existing hardscaping to help it feel more finished and connected to the rest of the property.",
    },
    {
      question: "How often does a landscaped property need maintenance?",
      answer:
        "It depends on what was installed. Lawns and planting beds generally need more frequent attention than rock or artificial turf areas, and maintenance needs can also shift with the seasons.",
    },
    {
      question: "Can you add trees, shrubs, flowers, mulch, and edging together?",
      answer:
        "Yes. These elements are often planned together so beds, plantings, and finishing touches work as one cohesive design rather than separate additions.",
    },
    {
      question: "Can landscaping help improve curb appeal?",
      answer:
        "Yes. Updated lawn areas, planting beds, and clean edging along the front of a property are some of the most direct ways landscaping affects how a home looks from the street.",
    },
    {
      question: "Can landscaping be combined with drainage or hardscaping work?",
      answer:
        "Yes. Landscaping is often planned alongside drainage, grading, or hardscaping projects, since plant choices and ground cover can support how well those systems perform.",
    },
  ],
  cta: {
    label: "READY TO IMPROVE YOUR OUTDOOR SPACE?",
    title: "Ready to Improve Your",
    titleAccent: "Outdoor Space?",
    description:
      "Whether your project involves a new lawn, planting beds, mulch and edging, artificial turf, ongoing maintenance, tree work, or a combination of landscaping and hardscaping, tell us what you have in mind and we will help you plan the right approach for your property.",
    primaryCta: "Request Your Estimate",
    secondaryCta: "Discuss Your Landscaping Project",
  },
};

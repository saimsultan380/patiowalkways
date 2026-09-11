import { brand } from "@/data/content";

export const lightingPage = {
  slug: "lighting",
  meta: {
    title: "Outdoor Lighting, Drainage & Grading Services Charlotte, NC | Empresa Galdamez",
    description:
      "Empresa Galdamez plans and installs landscape lighting, LED lighting, irrigation, drainage, and grading solutions for Charlotte properties.",
  },
  hero: {
    label: "Lighting & Utilities Charlotte",
    title: "Outdoor Lighting, Drainage & Grading Services",
    titleAccent: "Charlotte, NC",
    description:
      "Empresa Galdamez plans and installs landscape lighting, irrigation, drainage, and grading solutions for Charlotte properties, addressing the practical systems that keep a yard functional, visible, and dry where it needs to be.",
    primaryCta: "Request an Estimate",
    secondaryCta: "Discuss Your Project",
    imageSrc: "/06_lighting_utilities.jpg",
    trustBadges: [
      "Landscape Lighting",
      "Drainage & Grading",
      "Irrigation Systems",
    ],
    exploreLinks: [
      { name: "Services", href: "#services" },
      { name: "Lighting", href: "#lighting" },
      { name: "Drainage", href: "#drainage" },
      { name: "Grading", href: "#grading" },
      { name: "FAQ", href: "#faq" },
    ],
  },
  bookForm: {
    label: "BOOK YOUR PROJECT",
    title: "Tell Us About Your Outdoor Project",
    titleAccent: "Outdoor Project",
    description:
      "Share your lighting, drainage, irrigation, or grading needs along with a few property details, and our team will follow up to discuss the right next steps for your project.",
    submitLabel: "Request My Project Estimate",
    defaultService: "lighting",
  },
  overview: {
    label: "OUR SERVICE",
    title: "Lighting & Utility Services for",
    titleAccent: "Charlotte Properties",
    intro:
      "A patio that goes dark at night. A lawn watered unevenly. A yard that never drains right. Empresa Galdamez plans lighting, irrigation, drainage, and grading around what your property needs.",
    imageSrc: "/06_lighting_utilities.jpg",
  },
  services: {
    id: "services",
    label: "SERVICES",
    title: "Lighting & Utility Services We",
    titleAccent: "Provide",
    intro: "Practical outdoor systems planned around how your property is used and how water, light, and irrigation should work together.",
    items: [
      {
        name: "Landscape Lighting",
        description:
          "Landscape lighting highlights pathways, gardens, and patios after dark, making outdoor spaces easier to enjoy and navigate safely.",
        imageSrc: "/06_lighting_utilities.jpg",
      },
      {
        name: "LED Lighting",
        description:
          "LED lighting brings consistent, low-maintenance illumination to your landscape, supporting visibility around walkways, patios, and outdoor living areas.",
        imageSrc: "/05_outdoor_living_features.jpg",
      },
      {
        name: "Irrigation Systems",
        description:
          "Irrigation systems deliver planned, consistent watering to lawns and planting beds, reducing the guesswork of manual watering schedules.",
        imageSrc: "/07_landscaping.jpg",
      },
      {
        name: "Drainage Solutions",
        description:
          "Drainage solutions address standing water, runoff, and saturated areas, helping protect your landscape, hardscaping, and home from water damage.",
        imageSrc: "/04_sloped_garden_terraces.jpg",
      },
      {
        name: "Grading",
        description:
          "Grading shapes your property's slope to manage surface water, preparing the site for patios, walkways, or new landscaping.",
        imageSrc: "/04_walls_structural.jpg",
      },
    ],
  },
  landscapeLighting: {
    id: "lighting",
    label: "LANDSCAPE LIGHTING",
    title: "Landscape Lighting for Charlotte",
    titleAccent: "Outdoor Spaces",
    intro:
      "Landscape lighting extends how much of your property you can use after dark, whether that means a lit walkway, a highlighted patio edge, or a garden feature that stands out at night. Placement follows how a space is used:",
    imageSrc: "/06_lighting_utilities.jpg",
    bullets: [
      "Walkways and entries get low, consistent lighting to guide movement.",
      "Patios and outdoor living areas get softer accent lighting for evening use.",
      "Garden beds and landscape features get focused lighting to highlight specific plants or structures.",
    ],
    note: "Lighting can also support general visibility around a property, though how much it contributes to security depends on the overall design, not any single fixture.",
  },
  ledLighting: {
    label: "LED LIGHTING",
    title: "LED Lighting for Landscapes and",
    titleAccent: "Outdoor Areas",
    paragraphs: [
      "LED fixtures are a common choice for landscape lighting because of their low-maintenance, consistent output over time. They work well for pathway lighting, accent lighting on landscape features, and general illumination around patios and outdoor living areas.",
      "LED fixtures fit into a lighting layout the same way traditional fixtures do, placed around whatever features and areas matter most on your property.",
    ],
    imageSrc: "/05_outdoor_living_features.jpg",
  },
  irrigation: {
    label: "IRRIGATION",
    title: "Irrigation Systems for Lawns and",
    titleAccent: "Landscapes",
    paragraphs: [
      "An irrigation system provides planned, even watering instead of relying on manual watering, which is easy to miss or apply unevenly. Planning one starts with the property's layout: which areas need coverage, how sun and soil vary across the yard, and where planting beds sit relative to the lawn.",
      "Lawns and planting beds often need different watering approaches, so coverage should be planned around each area rather than treated as one zone. Seasonal adjustments and periodic checks also help a system keep performing well over time.",
    ],
    imageSrc: "/07_landscaping.jpg",
  },
  drainage: {
    id: "drainage",
    label: "DRAINAGE",
    title: "Drainage Solutions for",
    titleAccent: "Charlotte Properties",
    intro:
      "Drainage problems tend to show up in recognizable ways. The right fix depends on the property's grade, soil, existing drainage, and how water naturally moves across the yard, so there is no single solution for every situation.",
    imageSrc: "/04_sloped_garden_terraces.jpg",
    signs: [
      "Standing water that does not drain within a reasonable time",
      "Muddy or saturated areas that stay wet longer than the rest of the yard",
      "Water collecting near the foundation or other structures",
      "Visible erosion or soil washing away in certain areas",
      "Runoff flowing toward patios, walkways, or planting beds where it is not wanted",
    ],
    note: "A site assessment may point to surface drainage adjustments, grading changes, drainage channels, catch basins, downspout drainage, or another method entirely.",
  },
  grading: {
    id: "grading",
    label: "GRADING",
    title: "Grading Services for Better Outdoor",
    titleAccent: "Water Management",
    paragraphs: [
      "Grading shapes the land so a property has the slope and surface conditions it needs. It affects where surface water goes, how usable a yard feels, and whether a new patio, walkway, or driveway sits on a stable, properly sloped base.",
      "It is also a common part of site preparation. A patio on poorly graded ground can end up with water pooling nearby, and a driveway without proper grading can send runoff toward a garage or foundation instead of away from it. Getting the grade right upfront prevents problems that are harder to fix later.",
    ],
    imageSrc: "/04_walls_structural.jpg",
  },
  gradingDrainage: {
    label: "GRADING & DRAINAGE",
    title: "Why Proper Grading Matters for",
    titleAccent: "Drainage",
    paragraphs: [
      "Grading and drainage are closely linked: grading shapes slope, slope determines water flow, and water flow determines whether a property drains well or develops standing water and erosion.",
      "Fixing a drainage issue without addressing the underlying grade often treats a symptom rather than the cause. A drainage channel in a poorly graded spot may help without fully solving the problem, which is why grading and drainage are best considered together.",
    ],
    imageSrc: "/04_sloped_garden_terraces.jpg",
  },
  integrateLighting: {
    label: "HARDSCAPE LIGHTING",
    title: "Integrate Lighting With Your",
    titleAccent: "Hardscape Design",
    paragraphs: [
      "Lighting works best when planned alongside the hardscaping it illuminates, not added afterward. Lighting placed during a patio, walkway, or retaining wall project can highlight steps, define edges, and support safe movement at night, the same way it extends evening use around a fire pit or outdoor kitchen.",
    ],
    imageSrc: "/01_patios_walkways_charlotte_nc.jpg",
  },
  planDrainage: {
    label: "HARDSCAPE DRAINAGE",
    title: "Plan Drainage Around Patios, Walkways and",
    titleAccent: "Other Hardscaping",
    paragraphs: [
      "Water management is worth planning into any patio, walkway, driveway, or retaining wall project. A hardscape surface installed without accounting for grading and drainage can redirect water toward the house, a planting bed, or a neighboring area instead of away from it. Handling grading and drainage as part of the same project, not as an afterthought, holds up better over time.",
    ],
    imageSrc: "/03_driveway_services_charlotte_nc.jpg",
  },
  installation: {
    label: "INSTALLATION",
    title: "What Is Involved in Lighting, Drainage or",
    titleAccent: "Grading Work?",
    intro:
      "The general process for these services includes clear stages from discussion through final review. The exact steps vary depending on which service is involved.",
    imageSrc: "/06_lighting_utilities.jpg",
    steps: [
      "Project Discussion — Understanding what you want to achieve, whether that is better lighting, consistent watering, or resolving a drainage issue.",
      "Site Assessment — Reviewing the property, including grade, soil, existing systems, and problem areas.",
      "Identify the Property Need — Confirming what the specific issue or goal actually requires.",
      "Planning and Layout — Mapping out fixture placement, irrigation coverage, or drainage and grading changes.",
      "Material or System Selection — Choosing appropriate fixtures, irrigation components, or drainage materials.",
      "Site Preparation — Preparing the area for installation or grading work.",
      "Installation or Grading — Carrying out the planned work.",
      "Testing and Final Adjustments — Checking that lighting, irrigation, or drainage performs as intended.",
      "Final Project Review — Walking through the completed work together.",
    ],
  },
  cost: {
    label: "INVESTMENT",
    title: "How Much Do Outdoor Lighting, Drainage and Grading",
    titleAccent: "Services Cost?",
    intro:
      "There is no single price across these services, since a small lighting project and a full-property drainage correction involve very different scopes of work. Because these factors are specific to each property, the most accurate figure comes from a project-specific estimate.",
    imageSrc: "/05_outdoor_living_features.jpg",
    factors: [
      "For lighting: number of fixtures, lighting layout, property size, type of lighting, installation complexity, and existing infrastructure.",
      "For irrigation: property size, number of planting areas, system complexity, existing irrigation, and site conditions.",
      "For drainage: problem severity, site layout, drainage method, excavation needs, existing landscape or hardscape, access, and grading requirements.",
      "For grading: area size, existing elevation, soil conditions, site access, and how much grading is required.",
    ],
  },
  drainageSigns: {
    label: "WARNING SIGNS",
    title: "Signs Your Property May Need Better",
    titleAccent: "Drainage or Grading",
    intro:
      "Consider a professional assessment if you notice any of the following. These signs do not always point to the same cause, so a site assessment is generally the most reliable way to identify what is actually happening.",
    imageSrc: "/04_sloped_garden_terraces.jpg",
    items: [
      "Persistent standing water after rain",
      "Areas that stay muddy long after the rest of the yard has dried",
      "Visible erosion or soil movement",
      "Water collecting near your foundation or other structures",
      "Uneven ground that makes part of the yard difficult to use",
      "Runoff moving toward a patio, walkway, or planting bed",
      "Drainage problems that appeared after a landscaping or hardscaping project",
      "Planting areas that stay saturated",
    ],
  },
  planning: {
    label: "CHARLOTTE PLANNING",
    title: "Planning Outdoor Lighting, Drainage and Grading in",
    titleAccent: "Charlotte, NC",
    intro:
      "Charlotte properties differ widely in slope, soil, and existing landscaping, all of which affect how lighting, irrigation, drainage, and grading should be planned.",
    imageSrc: "/04_sloped_garden_terraces.jpg",
    considerations: [
      {
        title: "Existing grade and drainage patterns",
        description:
          "Understanding how water currently moves across your property helps identify where changes are actually needed.",
      },
      {
        title: "Soil conditions",
        description:
          "Charlotte's clay-heavy soil in many areas affects how well water drains naturally, which can influence both grading and drainage decisions.",
      },
      {
        title: "Existing landscaping and hardscape",
        description:
          "New lighting, irrigation, or drainage work should coordinate with what is already in place.",
      },
      {
        title: "Planned projects",
        description:
          "If you are planning a patio, walkway, or driveway, addressing grading and drainage as part of that project is usually more efficient than handling it separately afterward.",
      },
    ],
  },
  whyChoose: {
    label: "WHY CHOOSE US",
    title: "Why Choose Empresa Galdamez for Outdoor",
    titleAccent: "Property Improvements?",
    items: [
      {
        title: "Local Charlotte service",
        description:
          "Familiar with the soil, slope, and drainage patterns common to properties in the area.",
      },
      {
        title: "Personalized project planning",
        description:
          "Lighting, irrigation, drainage, and grading are planned around your specific property, not a standard template.",
      },
      {
        title: "Practical site guidance",
        description:
          "Help understanding what your property actually needs, rather than a one-size-fits-all recommendation.",
      },
      {
        title: "Lighting and hardscaping integration",
        description:
          "Outdoor lighting can be planned alongside patios, walkways, and other hardscape work.",
      },
      {
        title: "Drainage and grading considered together",
        description:
          "These services are treated as related, not separate, problems.",
      },
      {
        title: "Clear communication",
        description:
          "You will know what to expect from the first conversation through the final review.",
      },
    ],
  },
  projectTypes: {
    label: "PROJECT TYPES",
    title: "Outdoor Projects We Can",
    titleAccent: "Help With",
    imageSrc: "/06_lighting_utilities.jpg",
    items: [
      "Landscape lighting",
      "LED outdoor lighting",
      "Irrigation systems",
      "Yard drainage improvements",
      "Grading for landscape projects",
      "Patio drainage planning",
      "Walkway drainage",
      "Driveway grading",
      "Outdoor living area lighting",
      "Landscape and hardscape integration",
    ],
  },
  fitCheck: {
    label: "WHAT DO YOU NEED?",
    title: "What Does Your Outdoor Space",
    titleAccent: "Need?",
    items: [
      {
        title: "Better evening visibility",
        description:
          "Consider landscape lighting for pathways, patios, or garden areas.",
      },
      {
        title: "Consistent watering",
        description:
          "Consider irrigation planning for your lawn and planting beds.",
      },
      {
        title: "Water collecting where it should not",
        description:
          "Consider a drainage assessment to understand what is causing it.",
      },
      {
        title: "Uneven areas or problematic slopes",
        description:
          "Consider grading to address the underlying elevation.",
      },
      {
        title: "Planning a patio, walkway, driveway, or outdoor living project",
        description:
          "Consider addressing grading and drainage as part of that broader plan rather than afterward.",
      },
    ],
  },
  process: {
    label: "OUR PROCESS",
    title: "Our Lighting & Utility",
    titleAccent: "Process",
    description:
      "A clear path from identifying the need to a finished lighting, irrigation, drainage, or grading solution.",
    items: [
      {
        title: "Project Discussion",
        description:
          "Understanding what you want to achieve — better lighting, watering, or resolving a drainage issue.",
      },
      {
        title: "Site Assessment",
        description:
          "Reviewing grade, soil, existing systems, and problem areas on the property.",
      },
      {
        title: "Planning & Selection",
        description:
          "Mapping layout and choosing fixtures, irrigation components, or drainage materials.",
      },
      {
        title: "Installation or Grading",
        description:
          "Carrying out the planned work with attention to lasting performance.",
      },
      {
        title: "Testing & Final Review",
        description:
          "Checking results and walking through the completed work together.",
      },
    ],
  },
  faqs: [
    {
      question: "How much does landscape lighting cost in Charlotte?",
      answer:
        "Cost depends on the number of fixtures, the layout, property size, and installation complexity. A small pathway lighting project costs far less than a full property lighting design, so the most accurate figure comes from a project-specific estimate.",
    },
    {
      question: "What is the difference between landscape lighting and LED lighting?",
      answer:
        "Landscape lighting refers to the overall design and placement of outdoor fixtures, while LED lighting refers to the type of bulb or fixture technology used. Landscape lighting can be built using LED fixtures for consistent, low-maintenance illumination.",
    },
    {
      question: "How much does a residential irrigation system cost?",
      answer:
        "Cost depends on property size, the number of planting areas needing coverage, and system complexity. Because these factors vary significantly by property, an accurate cost comes from a project-specific estimate rather than a general figure.",
    },
    {
      question: "How do I know if my yard needs drainage?",
      answer:
        "Common signs include standing water after rain, persistently muddy areas, erosion, or water collecting near your home. If these issues appear repeatedly, a site assessment can help determine the actual cause and the right solution.",
    },
    {
      question: "What causes standing water in a yard?",
      answer:
        "Standing water is usually related to grading, soil conditions, or existing drainage patterns that prevent water from moving away from the area. The specific cause varies by property, which is why a site assessment is the most reliable way to identify it.",
    },
    {
      question: "What does grading do for a property?",
      answer:
        "Grading shapes the slope of the land to manage how surface water flows and to prepare a stable site for construction. Proper grading helps prevent standing water and supports projects like patios, walkways, and driveways.",
    },
    {
      question: "Can drainage and grading be handled as part of a patio or hardscape project?",
      answer:
        "Yes. Grading and drainage are often addressed as part of a patio, walkway, or driveway project, since managing water flow properly during construction helps prevent problems after the project is finished.",
    },
    {
      question: "How do I request an estimate?",
      answer: `Fill out the project form on this page with details about your lighting, irrigation, drainage, or grading needs, or call ${brand.phone}. A member of the team will follow up to discuss next steps.`,
    },
  ],
  cta: {
    label: "READY TO IMPROVE YOUR OUTDOOR SPACE?",
    title: "Ready to Improve Your",
    titleAccent: "Outdoor Space?",
    description:
      "Whether you are considering landscape lighting, LED lighting, irrigation, drainage improvements, grading, or a related hardscaping need, tell us what your property needs and we will help you plan the right next step.",
    primaryCta: "Request an Estimate",
    secondaryCta: "Discuss Your Project",
  },
};

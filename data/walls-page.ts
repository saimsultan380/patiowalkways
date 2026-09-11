import { brand } from "@/data/content";

export const wallsPage = {
  slug: "walls",
  meta: {
    title: "Walls and Structural Features & Retaining Walls Charlotte, NC | Empresa Galdamez",
    description:
      "Empresa Galdamez designs and builds retaining walls, seating walls, and stone or paver steps for Charlotte properties — managing slope, controlling soil movement, and creating usable outdoor space.",
  },
  hero: {
    label: "Walls & Structural Charlotte",
    title: "Walls and Structural Features &",
    titleAccent: "Retaining Walls Charlotte, NC",
    description:
      "Empresa Galdamez designs and builds retaining walls that manage slope, control soil movement and create usable space on Charlotte properties, along with seating walls and stone or paver steps to complete the outdoor structure.",
    primaryCta: "Request a Retaining Wall Estimate",
    secondaryCta: "Discuss Your Project",
    imageSrc: "/04_walls_structural.jpg",
    trustBadges: [
      "Retaining Walls",
      "Seating Walls & Steps",
      "Charlotte Area Service",
    ],
    exploreLinks: [
      { name: "Wall Types", href: "#wall-types" },
      { name: "Drainage", href: "#drainage" },
      { name: "Installation", href: "#installation" },
      { name: "Process", href: "#how-it-works" },
      { name: "FAQ", href: "#faq" },
    ],
  },
  bookForm: {
    label: "BOOK YOUR PROJECT",
    title: "Tell Us About Your Retaining Wall Project",
    titleAccent: "Retaining Wall Project",
    description:
      "Share your property's slope, the problem you're trying to solve, and what you'd like the finished space to look like. That gives our team what we need to understand the project and follow up with a clear next step.",
    submitLabel: "Request My Retaining Wall Estimate",
    defaultService: "walls",
  },
  overview: {
    label: "OUR SERVICE",
    title: "Walls & Structural Services for",
    titleAccent: "Charlotte Properties",
    intro:
      "Retaining walls are the core of our structural work. A wall holds soil in place on one side while creating a usable, level surface on the other. Walls can run along a property line, step down a slope in tiers, or wrap around a patio or planting bed. The layout, height and material are planned around your specific site, since a wall for a two-foot grade change is a very different project than one for a steep backyard slope.",
    imageSrc: "/04_walls_structural.jpg",
    companionIntro: "Two other structural features are often planned alongside a retaining wall:",
    companions: [
      {
        title: "Seating Walls",
        description:
          "A shorter wall around a patio, fire pit or gathering space that manages a small grade change while doubling as built-in seating.",
        imageSrc: "/05_outdoor_living_features.jpg",
      },
      {
        title: "Stone Steps and Paver Steps",
        description:
          "When a wall creates a change in elevation, steps provide safe movement between levels. Paver steps can be matched to a nearby patio, walkway or driveway, while stone steps suit a more natural landscape look.",
        imageSrc: "/04_sloped_garden_terraces.jpg",
      },
    ],
  },
  needWall: {
    label: "DO YOU NEED A WALL?",
    title: "When Does Your Property Need a",
    titleAccent: "Retaining Wall?",
    intro:
      "A retaining wall manages a change in elevation and holds soil in place where a sloped or uneven landscape would otherwise be difficult to maintain. Common situations include:",
    imageSrc: "/04_sloped_garden_terraces.jpg",
    items: [
      "A backyard or side yard with a noticeable slope",
      "Visible soil movement or erosion, especially after heavy rain",
      "Wanting a flatter, usable area for a patio, garden or play space",
      "A yard with multiple elevation changes that would benefit from tiered levels connected by steps",
      "Soil shifting near a foundation, walkway or driveway",
    ],
    note: "Not every slope needs a wall. Some grade changes can be managed with grading and planting alone. The right solution depends on the degree of slope, soil conditions and what you want from the space, which is why a site visit tells you more than a general rule of thumb.",
  },
  wallTypes: {
    id: "wall-types",
    label: "WALL TYPES",
    title: "What Type of Retaining Wall Is Right for",
    titleAccent: "Your Property?",
    intro:
      "There isn't one material that's correct for every property. The right choice depends on wall height, soil conditions, budget and how the wall should look next to your home. We'll walk through these factors before recommending a direction.",
    items: [
      {
        name: "Paver and Segmental Block Walls",
        description:
          "Built from interlocking units, these offer flexibility in height, curves and layout. Individual sections can often be adjusted or repaired without rebuilding the whole wall, and finishes can be matched to a nearby patio or walkway.",
        imageSrc: "/02_paver_services_charlotte_nc.jpg",
      },
      {
        name: "Natural Stone Walls",
        description:
          "A more organic, traditional appearance that suits landscapes where a natural look is the goal. Stone generally requires more careful fitting during installation, which can affect timeline and cost.",
        imageSrc: "/04_walls_structural.jpg",
      },
      {
        name: "Decorative and Landscape Walls",
        description:
          "Shorter walls used for garden beds or minor grade changes, where appearance and layout flexibility matter more than holding back significant soil pressure.",
        imageSrc: "/07_landscaping.jpg",
      },
    ],
  },
  drainage: {
    id: "drainage",
    label: "DRAINAGE",
    title: "Why Drainage Matters Behind a",
    titleAccent: "Retaining Wall",
    paragraphs: [
      "Drainage is one of the most important parts of a retaining wall project, and one of the easiest to overlook because problems don't always show up right away.",
      "Soil holds water, and water adds weight and pressure. When water builds up behind a wall with nowhere to go, that pressure works against the structure over time, which is why drainage is planned before the wall goes in, not after. This generally involves giving water behind the wall a path to move through, using backfill that drains rather than traps water, and grading the surrounding area so surface water doesn't pool against the wall.",
      "We don't provide exact pipe sizes or engineering specifications here, since those depend on the wall's height, length and site conditions and are worked out during a site assessment. What matters for homeowners to understand is that a wall built without proper drainage is more likely to develop problems later, even if it looks fine on installation day.",
    ],
    imageSrc: "/06_lighting_utilities.jpg",
  },
  installation: {
    id: "installation",
    label: "INSTALLATION",
    title: "What Is Involved in Retaining Wall",
    titleAccent: "Installation?",
    intro:
      "The visible wall is only part of the project. What happens beneath and behind it — the excavation, base and drainage — has more influence on how the wall performs over time than the finish coat homeowners tend to focus on.",
    imageSrc: "/04_walls_structural.jpg",
    steps: [
      "Project discussion — You describe the problem and what you'd like the finished area to look like.",
      "Site assessment — We look at slope, soil, drainage patterns and access to the work area.",
      "Layout and design — Wall height, shape and length are mapped out based on the site.",
      "Material selection — You choose a wall style based on appearance, budget and site requirements.",
      "Site preparation and excavation — The area is cleared and excavated to the depth the design requires.",
      "Base preparation — A compacted base supports the wall and resists shifting.",
      "Grading and drainage planning — Drainage behind and around the wall is addressed as part of the build.",
      "Wall installation — The wall is built in courses, with attention to alignment and level.",
      "Finishing — Backfill, grading and any steps or planting areas are completed around the finished wall.",
      "Final walkthrough — We review the finished project with you.",
    ],
  },
  cost: {
    label: "INVESTMENT",
    title: "How Much Does a Retaining Wall Cost in",
    titleAccent: "Charlotte?",
    intro:
      "There's no fixed price that applies across every project, since cost depends on the specifics of your site. Two projects of similar length can cost very differently depending on height, soil conditions and site access. The most accurate way to understand your project's cost is to have us walk the site with you.",
    imageSrc: "/04_sloped_garden_terraces.jpg",
    factors: [
      "Wall length and height",
      "Material selected",
      "Site access for equipment and material delivery",
      "Excavation requirements and soil conditions",
      "Whether an existing wall needs to be removed first",
      "Grading and drainage needs",
      "Design complexity, including curves, corners or steps",
    ],
  },
  replaceWhen: {
    label: "REPLACEMENT",
    title: "When Should You Replace a",
    titleAccent: "Retaining Wall?",
    intro:
      "Some signs suggest an existing wall may need to be rebuilt rather than repaired. These signs point to a problem but don't identify the cause on their own. A professional assessment is the only reliable way to know whether a wall needs full replacement, partial rebuilding or a smaller fix.",
    imageSrc: "/04_walls_structural.jpg",
    items: [
      "Noticeable leaning or tilting",
      "Bulging in one or more sections",
      "Recurring drainage or water pooling nearby",
      "Soil movement or settling behind or in front of the wall",
      "Sections that have cracked, shifted or failed",
    ],
  },
  planning: {
    label: "CHARLOTTE PLANNING",
    title: "Planning a Retaining Wall in",
    titleAccent: "Charlotte, NC",
    paragraphs: [
      "Charlotte's mix of clay-heavy soil, hilly terrain in many neighborhoods and seasonal heavy rainfall makes drainage and soil behavior especially important for retaining wall projects here. A wall built without accounting for how water moves across a specific lot is more likely to run into problems down the line.",
      "Older neighborhoods often have mature trees with root systems that affect excavation, while newer developments may have tighter equipment access on more compact lots.",
    ],
    imageSrc: "/04_sloped_garden_terraces.jpg",
  },
  whyChoose: {
    label: "WHY CHOOSE US",
    title: "Why Choose Empresa Galdamez for",
    titleAccent: "Retaining Walls?",
    items: [
      {
        title: "Local Charlotte service",
        description:
          "Familiar with the soil and slope conditions common across the area.",
      },
      {
        title: "Personalized project planning",
        description:
          "Built around your specific slope and goals rather than a standard wall design.",
      },
      {
        title: "Material guidance",
        description:
          "Helping you weigh paver, block and stone options against your budget and site.",
      },
      {
        title: "Attention to site preparation and drainage",
        description:
          "These determine how the wall performs long after installation.",
      },
      {
        title: "Structural work paired with the rest of your outdoor space",
        description:
          "A retaining wall can be planned alongside steps, a patio or a walkway as one project.",
      },
    ],
  },
  process: {
    label: "OUR PROCESS",
    title: "Our Retaining Wall",
    titleAccent: "Process",
    description:
      "From the first conversation to the final walkthrough, we keep retaining wall projects clear, organized, and built to last.",
    items: [
      {
        title: "Discuss Your Project",
        description:
          "Share the slope, soil concerns, and the outdoor space you're trying to create.",
      },
      {
        title: "Site Assessment",
        description:
          "We review slope, soil, drainage patterns, and access to the work area.",
      },
      {
        title: "Clear Estimate",
        description:
          "Receive a straightforward estimate based on wall size, material, and site preparation needs.",
      },
      {
        title: "Professional Installation",
        description:
          "Excavation, base work, drainage, and wall construction handled with lasting performance in mind.",
      },
      {
        title: "Final Walkthrough",
        description:
          "We review the finished wall and surrounding work with you before wrapping up.",
      },
    ],
  },
  faqs: [
    {
      question: "How much does a retaining wall cost in Charlotte?",
      answer:
        "Cost depends on wall length, height, material, site access and how much site preparation is needed. There's no set price that applies to every wall. A site visit gives the most accurate number, since soil conditions and drainage requirements can shift the estimate between two similar-looking projects.",
    },
    {
      question: "What type of retaining wall is best for a sloped yard?",
      answer:
        "It depends on the slope's severity, soil conditions and how you'll use the space. Paver and segmental block walls suit most residential slopes, while natural stone fits a more traditional look. We can recommend a direction once we've seen the site.",
    },
    {
      question: "Do retaining walls need drainage?",
      answer:
        "Yes. Water builds up behind a wall if it has nowhere to go, which adds pressure over time. Drainage planning, including suitable backfill and grading, is part of a properly built retaining wall rather than an optional add-on.",
    },
    {
      question: "How long does retaining wall installation take?",
      answer:
        "Timelines vary based on wall length, height, material and site conditions such as soil type and access. Larger or taller walls, or ones requiring removal of an existing structure first, generally take longer than a short decorative wall.",
    },
    {
      question: "When should an existing retaining wall be replaced?",
      answer:
        "Consider a professional assessment if a wall is leaning, bulging, cracking in multiple sections, or if drainage problems keep recurring nearby. These signs point to an underlying issue worth diagnosing before choosing between a repair and a full rebuild.",
    },
    {
      question: "Can retaining walls include steps?",
      answer:
        "Yes. When a wall creates a change in elevation, stone or paver steps are often planned alongside it so people can move safely between levels.",
    },
    {
      question: "Can a retaining wall be combined with a patio or seating area?",
      answer:
        "Yes. A wall can support a patio surface above or below it, or be built as a seating wall around a gathering space. Planning these together usually creates a more cohesive result than treating them as separate projects.",
    },
    {
      question: "How do I get an estimate for a retaining wall?",
      answer: `Fill out the project form on this page with your property details, approximate wall size and what you're trying to accomplish, or call ${brand.phone}.`,
    },
  ],
  cta: {
    label: "READY TO PLAN YOUR RETAINING WALL?",
    title: "Ready to Plan Your",
    titleAccent: "Retaining Wall?",
    description:
      "Tell us about your slope, your soil, or the outdoor space you're trying to create, and let's talk through the right retaining wall solution for your property.",
    primaryCta: "Request a Retaining Wall Estimate",
    secondaryCta: "Discuss Your Project",
  },
};

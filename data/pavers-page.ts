import { brand } from "@/data/content";

export const paversPage = {
  slug: "pavers",
  meta: {
    title: "Best Paver Contractors & Services in Charlotte, NC | Empresa Galdamez",
    description:
      "Empresa Galdamez installs pavers for patios, walkways, driveways, and pool areas across Charlotte — custom planning, professional base work, and surfaces built to hold up over time.",
  },
  hero: {
    label: "Paver Services Charlotte",
    title: "Best Paver Contractors & Services in",
    titleAccent: "Charlotte, NC",
    description:
      "Empresa Galdamez installs pavers for patios, walkways, and driveways across Charlotte, working with each property's layout, drainage, and intended use to plan a surface built to hold up over time.",
    primaryCta: "Request a Paver Estimate",
    secondaryCta: "Plan Your Project",
    imageSrc: "/02_paver_services_charlotte_nc.jpg",
    trustBadges: [
      "Custom Paver Solutions",
      "Patios, Walkways & More",
      "Charlotte Service",
    ],
    exploreLinks: [
      { name: "Applications", href: "#applications" },
      { name: "Paver Types", href: "#paver-types" },
      { name: "Installation", href: "#installation" },
      { name: "Comparison", href: "#comparison" },
      { name: "FAQ", href: "#faq" },
    ],
  },
  bookForm: {
    label: "BOOK YOUR PROJECT",
    title: "Tell Us About Your Paver Project",
    titleAccent: "Paver Project",
    description:
      "Share what you want to build, replace, or improve, and we will follow up with next steps. It only takes a few details to get started.",
    submitLabel: "Request My Estimate",
    defaultService: "pavers",
  },
  overview: {
    label: "OUR SERVICE",
    title: "Paver Services for",
    titleAccent: "Charlotte Homes",
    intro:
      "Pavers are one of the most flexible materials for outdoor surfaces, and Empresa Galdamez uses them across several project types for Charlotte homeowners.",
    imageSrc: "/02_paver_services_charlotte_nc.jpg",
    services: [
      {
        title: "Paver Patio Installation",
        description:
          "Pavers can build a dedicated space for dining, seating, or entertaining, laid out in a pattern that fits how the area will actually be used. For a closer look at patio and walkway layouts, see our dedicated patio and walkway page.",
        imageSrc: "/01_patios_walkways_charlotte_nc.jpg",
        href: "/services/patios-walkways",
      },
      {
        title: "Paver Walkway Installation",
        description:
          "From a front entrance to a garden path or side-yard connection, paver walkways provide a stable, defined route between outdoor areas.",
        imageSrc: "/03_front_entry_rebuild.jpg",
      },
      {
        title: "Driveway Paver Installation",
        description:
          "Paver driveways are built to handle regular vehicle traffic, with base preparation suited to that added load. Our driveway page covers paver and concrete options side by side.",
        imageSrc: "/03_driveway_services_charlotte_nc.jpg",
        href: "/services/driveways",
      },
      {
        title: "Poolside Pavers",
        description:
          "Paver surfaces around a pool area are laid out for both everyday use and the practical needs of a wet, high-traffic space.",
        imageSrc: "/02_backyard_pool_retreat.jpg",
      },
      {
        title: "Custom Paver Projects",
        description:
          "Borders, transitions between materials, and other custom layout details can be worked into a paver plan when a project calls for it. Larger projects sometimes pair a paver surface with retaining walls, seating walls, and steps, or with outdoor kitchens, fire pits, and pergolas.",
        imageSrc: "/05_outdoor_living_features.jpg",
      },
    ],
  },
  applications: {
    id: "applications",
    label: "APPLICATIONS",
    title: "What Can You Build With",
    titleAccent: "Pavers?",
    intro:
      "Pavers are used well beyond a single patio. Each application has its own practical requirements — a driveway needs a base built for vehicle weight, while a garden path only needs to support foot traffic, and a poolside surface needs to account for water and slip resistance.",
    imageSrc: "/01_modern_courtyard_transformation.jpg",
    items: [
      "Patios",
      "Walkways",
      "Driveways",
      "Garden paths",
      "Pool areas",
      "Outdoor dining spaces",
      "Entryways",
      "Borders and transitions between surfaces",
    ],
  },
  paverTypes: {
    id: "paver-types",
    label: "PAVER TYPES",
    title: "Which Type of Paver Is Right for",
    titleAccent: "Your Project?",
    intro:
      "There is no single \"best\" paver. The right choice depends on how the space will be used, the look you want, and how much upkeep you are willing to do. The right material comes down to project use, appearance, expected traffic, maintenance expectations, and how it fits your existing landscape.",
    items: [
      {
        name: "Concrete Pavers",
        description:
          "Offer a wide range of shapes, colors, and textures, and are one of the more design-flexible options for patios, walkways, and driveways.",
        imageSrc: "/02_paver_services_charlotte_nc.jpg",
      },
      {
        name: "Brick Pavers",
        description:
          "A traditional, textured appearance suited to classic home styles, with a long track record in outdoor use.",
        imageSrc: "/01_patios_walkways_charlotte_nc.jpg",
      },
      {
        name: "Natural Stone Pavers",
        description:
          "Provide a more varied, organic look, often chosen for their unique character rather than a uniform pattern.",
        imageSrc: "/04_sloped_garden_terraces.jpg",
      },
    ],
  },
  installation: {
    id: "installation",
    label: "INSTALLATION",
    title: "What Does Professional Paver Installation",
    titleAccent: "Involve?",
    intro:
      "The finished surface is only as good as the work underneath it. Skipping or rushing base preparation and drainage planning is one of the most common reasons paver surfaces shift, settle unevenly, or develop low spots later on.",
    imageSrc: "/04_walls_structural.jpg",
    steps: [
      "Site assessment — Reviewing the space, layout, and any drainage or access considerations.",
      "Layout planning — Mapping the pattern, borders, and dimensions before any digging starts.",
      "Excavation — Removing soil to the correct depth for the paver system and expected use.",
      "Grading — Shaping the site so water moves away from the surface rather than pooling on it.",
      "Base preparation — Building a stable gravel or aggregate base suited to the application, deeper for driveways than for garden paths.",
      "Compaction — Compacting the base so it holds its shape under weight over time.",
      "Paver placement — Laying pavers according to the chosen pattern.",
      "Edge restraint — Installing restraints along the perimeter to keep pavers from shifting outward.",
      "Joint finishing — Filling joints with sand and compacting the finished surface.",
      "Final inspection — Checking the completed surface for level, stability, and finish quality.",
    ],
  },
  cost: {
    label: "INVESTMENT",
    title: "How Much Does Paver Installation Cost in",
    titleAccent: "Charlotte?",
    intro:
      "There is no single price that applies to every project. Because these factors vary so much from one property to the next, the most accurate figure comes from a project-specific estimate rather than a general price range.",
    imageSrc: "/05_outdoor_living_features.jpg",
    factors: [
      "Total project size",
      "Material selected (concrete, brick, or natural stone)",
      "Site accessibility for equipment and materials",
      "Excavation requirements",
      "Removal of an existing surface, if applicable",
      "Grading and drainage needs",
      "Base preparation depth (driveways generally require a deeper base than walkways or garden paths)",
      "Layout complexity, including curves, borders, or custom patterns",
      "Additional features such as steps, seating walls, or fire pit areas",
    ],
  },
  process: {
    label: "OUR PROCESS",
    title: "Our Paver Installation",
    titleAccent: "Process",
    description:
      "This is how a typical project unfolds — a clear path from discussion to a finished paver surface.",
    items: [
      {
        title: "Project Discussion",
        description:
          "We start by understanding what you want to build and how you plan to use the space.",
      },
      {
        title: "Site Assessment",
        description:
          "We review the property, layout, and any drainage or grading considerations.",
      },
      {
        title: "Design & Material Selection",
        description:
          "We discuss suitable materials, patterns, and layout options for your project.",
      },
      {
        title: "Preparation & Installation",
        description:
          "We prepare the site (excavation, base, compaction) and install the paver system.",
      },
      {
        title: "Final Walkthrough",
        description:
          "We review the completed work together before considering the project finished.",
      },
    ],
  },
  planning: {
    label: "CHARLOTTE PLANNING",
    title: "Planning a Paver Project for a",
    titleAccent: "Charlotte Property",
    intro:
      "Charlotte properties vary in slope, sun exposure, and soil, and many deal with clay-based soil common to the Piedmont region along with a fair amount of seasonal rainfall. None of that rules out a paver project, but it is worth planning around before installation starts.",
    imageSrc: "/04_sloped_garden_terraces.jpg",
    considerations: [
      {
        title: "Drainage",
        description:
          "Water needs somewhere to go. A paver surface installed without accounting for slope can end up with pooling water nearby or, over time, uneven settling.",
      },
      {
        title: "Soil conditions",
        description:
          "Clay-heavy soil can expand and contract with seasonal moisture, which is part of why base depth and compaction matter more here than in areas with sandier soil.",
      },
      {
        title: "Sun and shade",
        description:
          "A shaded, damp area may benefit from a different material or maintenance approach than an open, sunny patio.",
      },
      {
        title: "How the space connects to the rest of the property",
        description:
          "A patio, walkway, and driveway are often planned together so the finished surfaces work as one connected outdoor space rather than separate, disconnected projects.",
      },
    ],
  },
  comparison: {
    id: "comparison",
    label: "MATERIAL COMPARISON",
    title: "Pavers vs. Concrete:",
    titleAccent: "Which Should You Choose?",
    headers: ["Factor", "Pavers", "Concrete"],
    rows: [
      ["Design flexibility", "High, with multiple colors, shapes, and patterns", "Lower, typically poured as one uniform surface"],
      ["Repair approach", "Individual pavers can be lifted and reset if one shifts or is damaged", "Cracks generally require patching or replacing a section"],
      ["Appearance", "Textured, patterned look with visible joints", "Smooth, uniform look"],
      ["Installation considerations", "Requires a properly compacted base and edge restraint", "Requires proper curing and control joints to manage cracking"],
      ["Maintenance", "Occasional joint sand refresh and spot cleaning", "Occasional sealing and crack monitoring"],
    ],
    note: "Neither material is universally better. Pavers tend to offer more design flexibility and easier spot repairs, while concrete offers a simpler, more uniform surface with fewer visible seams.",
  },
  whyChoose: {
    label: "WHY CHOOSE US",
    title: "Why Choose",
    titleAccent: "Empresa Galdamez",
    items: [
      {
        title: "Local service",
        description:
          "Based in the Charlotte area and familiar with the layout, drainage, and soil considerations local properties tend to present.",
      },
      {
        title: "Custom project planning",
        description:
          "Paver layouts are planned around your property and how you intend to use the space, not a fixed template.",
      },
      {
        title: "Clear communication",
        description:
          "You will know what to expect at each stage, from the first conversation through the final walkthrough.",
      },
      {
        title: "Material guidance",
        description:
          "Help weighing concrete, brick, and natural stone against your budget, style, and maintenance preferences.",
      },
      {
        title: "Multiple outdoor applications",
        description:
          "Patios, walkways, driveways, and pool-area surfaces can all be planned as one connected project if that fits your goals.",
      },
      {
        title: "Attention to site preparation",
        description:
          "Site assessment, grading, and base work are treated as the foundation of the finished result, not an afterthought.",
      },
    ],
  },
  fitCheck: {
    label: "IS THIS RIGHT FOR YOU?",
    title: "Is Paver Installation Right for",
    titleAccent: "Your Property?",
    intro: "Pavers are worth considering if:",
    items: [
      "You want a defined outdoor living area, such as a patio for entertaining.",
      "Your existing patio, walkway, or driveway surface is cracked, uneven, or dated.",
      "You want a new walkway connecting your driveway, front door, or backyard.",
      "You want to improve the appearance of your front entry or driveway.",
      "You want to connect separate outdoor areas of your property into one cohesive layout.",
      "You have a specific design or pattern in mind that a poured surface cannot easily achieve.",
    ],
    note: "If your property has significant slope, drainage issues, or an unusual layout, a site assessment is generally the most useful next step before finalizing a plan.",
  },
  faqs: [
    {
      question: "Who are the best paver contractors in Charlotte, NC?",
      answer:
        "Several contractors serve the Charlotte area, and the right fit depends on your project type, budget, and communication preferences. Empresa Galdamez provides custom paver planning and installation for Charlotte properties; the best way to judge fit is a project-specific conversation rather than a general ranking.",
    },
    {
      question: "What paver services are available in Charlotte?",
      answer:
        "Available paver services include patio installation, walkway installation, driveway installation, poolside surfaces, and custom paver layouts. Each application has different base and material requirements depending on expected use and traffic.",
    },
    {
      question: "How much does paver installation cost in Charlotte?",
      answer:
        "Cost depends on project size, material choice, site accessibility, excavation and base preparation needs, drainage requirements, and design complexity. Because these factors vary by property, the most accurate figure comes from a project-specific estimate rather than a flat rate.",
    },
    {
      question: "How long does paver installation take?",
      answer:
        "Duration depends on project size, material, site preparation needs, and design complexity. A small walkway generally takes less time than a large patio or driveway that requires extensive excavation or drainage work.",
    },
    {
      question: "What type of paver is best for a patio?",
      answer:
        "The right paver depends on the look you want, your budget, and how much maintenance you are willing to do. Concrete pavers offer design flexibility, brick offers a traditional look, and natural stone offers a more varied, organic appearance.",
    },
    {
      question: "Can pavers be used for driveways?",
      answer:
        "Yes. Paver driveways are built with a deeper, more heavily compacted base than a patio or walkway to support regular vehicle traffic.",
    },
    {
      question: "Do pavers require maintenance?",
      answer:
        "Pavers generally need occasional joint sand refreshing and spot cleaning. Individual pavers can also be lifted and reset if one shifts or settles, which is one advantage over a single poured surface.",
    },
    {
      question: "How do I request an estimate from Empresa Galdamez?",
      answer: `Fill out the project form on this page with a few details about your property and project, or call ${brand.phone}. A member of the team will follow up to discuss next steps.`,
    },
  ],
  cta: {
    label: "READY TO PLAN YOUR PAVER PROJECT?",
    title: "Ready to Plan Your",
    titleAccent: "Paver Project?",
    description:
      "Tell us what you want to build, replace, or improve, and let us talk through the right materials and layout for your property.",
    primaryCta: "Request a Paver Estimate",
    secondaryCta: "Call Us",
  },
};

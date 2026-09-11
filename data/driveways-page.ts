import { brand } from "@/data/content";

export const drivewaysPage = {
  slug: "driveways",
  meta: {
    title: "Driveway Contractors, Builders & Installation Charlotte, NC | Empresa Galdamez",
    description:
      "Empresa Galdamez plans and builds paver and concrete driveways for Charlotte homeowners — new installation, replacement, and driveway projects coordinated with walkways and landscaping.",
  },
  hero: {
    label: "Driveway Services Charlotte",
    title: "Driveway Contractors, Builders &",
    titleAccent: "Installation in Charlotte",
    description:
      "Empresa Galdamez plans and builds driveways around how your property is used, from the layout of your entrance to the way your driveway connects with your walkway, garage and landscaping. Every project starts with your specific site, not a standard template.",
    primaryCta: "Request a Driveway Estimate",
    secondaryCta: "Discuss Your Project",
    imageSrc: "/03_driveway_services_charlotte_nc.jpg",
    trustBadges: [
      "Custom Driveway Planning",
      "Paver & Concrete Driveways",
      "Charlotte Area Service",
    ],
    exploreLinks: [
      { name: "Driveway Types", href: "#driveway-types" },
      { name: "Installation", href: "#installation" },
      { name: "Pavers vs Concrete", href: "#comparison" },
      { name: "Process", href: "#how-it-works" },
      { name: "FAQ", href: "#faq" },
    ],
  },
  bookForm: {
    label: "BOOK YOUR PROJECT",
    title: "Tell Us About Your Driveway Project",
    titleAccent: "Driveway Project",
    description:
      "Share a few details about what you want to build, replace or improve, and our team will follow up with a clear next step. There's no pressure and no obligation, just a straightforward conversation about your driveway.",
    submitLabel: "Request My Driveway Estimate",
    defaultService: "driveways",
  },
  overview: {
    label: "OUR SERVICE",
    title: "Driveway Services for",
    titleAccent: "Charlotte Properties",
    intro:
      "Empresa Galdamez builds paver and concrete driveways for Charlotte homeowners, planned around how the property is accessed and used every day.",
    imageSrc: "/03_driveway_services_charlotte_nc.jpg",
    services: [
      {
        title: "New Driveway Installation",
        description:
          "A new driveway is planned around vehicle access, the shape of the lot, the material you choose and how the space will be used day to day. Layout comes before material selection, since the way cars, guests and foot traffic move across the property should drive the design, not the other way around.",
        imageSrc: "/03_front_entry_rebuild.jpg",
      },
      {
        title: "Driveway Replacement",
        description:
          "When an existing driveway has reached the end of its useful life, a full replacement is often more practical than patching it repeatedly. Replacement starts with removing the old surface, then rebuilding the base and drainage before the new driveway goes in.",
        imageSrc: "/03_driveway_services_charlotte_nc.jpg",
      },
      {
        title: "Paver Driveway Installation",
        description:
          "Paver driveways are built from individual interlocking units set on a compacted base, which gives more flexibility in pattern, border design and how the driveway ties into a walkway or patio nearby.",
        imageSrc: "/02_paver_services_charlotte_nc.jpg",
      },
      {
        title: "Concrete Driveways",
        description:
          "Concrete driveways offer a clean, consistent surface and are a common choice for straightforward layouts. Finish, coloring and edge details can still be adjusted to fit the rest of the property.",
        imageSrc: "/01_modern_courtyard_transformation.jpg",
      },
    ],
    note: "Other outdoor hardscaping needs, such as connecting a driveway to a new walkway or patio, can be planned as part of the same project.",
  },
  drivewayTypes: {
    id: "driveway-types",
    label: "MATERIAL CHOICE",
    title: "What Type of Driveway Is Right for",
    titleAccent: "Your Property?",
    intro:
      "The right driveway material depends on your budget, how the space will be used, and how it should look next to the rest of your home. There's no material that works best for every property — we'll walk through these factors with you before recommending a direction.",
    items: [
      {
        name: "Paver Driveways",
        description:
          "Pavers give you the most flexibility in pattern and layout. Individual units can be arranged in different bonds, mixed with border courses, and replaced one at a time if a section is ever damaged, without redoing the whole surface.",
        imageSrc: "/02_paver_services_charlotte_nc.jpg",
      },
      {
        name: "Concrete Driveways",
        description:
          "A poured concrete driveway creates a uniform surface with fewer joints than pavers. It suits straightforward, high-traffic layouts and can still be finished with texture, color or a broom finish to fit your home's style.",
        imageSrc: "/03_driveway_services_charlotte_nc.jpg",
      },
    ],
  },
  considerations: {
    label: "BEFORE YOU START",
    title: "What Should You Consider Before",
    titleAccent: "Installing a Driveway?",
    intro:
      "A few practical questions are worth thinking through before you contact a contractor. Thinking through these points ahead of time makes for a more productive first conversation.",
    imageSrc: "/03_front_entry_rebuild.jpg",
    items: [
      {
        title: "Size and shape",
        description:
          "How wide does the driveway need to be for the vehicles that will use it, and does it need to accommodate turning or parking space?",
      },
      {
        title: "Property access",
        description:
          "Where does the driveway meet the street, and how does that affect the layout?",
      },
      {
        title: "Vehicle use",
        description:
          "Daily commuter traffic puts different demands on a surface than an RV or a work truck.",
      },
      {
        title: "Slope and grading",
        description:
          "The natural slope of your lot affects how water moves and how the base needs to be built up or leveled.",
      },
      {
        title: "Drainage",
        description:
          "Water needs somewhere to go. A driveway that ignores natural drainage patterns can create standing water or runoff problems elsewhere on the property.",
      },
      {
        title: "Material",
        description:
          "Paver and concrete driveways each come with different appearance, maintenance and installation considerations.",
      },
      {
        title: "Edge details",
        description:
          "Borders and edge restraints affect both appearance and how well the surface holds up over time.",
      },
      {
        title: "Connections",
        description:
          "How the driveway meets your walkway, garage and landscaping affects the overall look of your entrance.",
      },
    ],
  },
  installation: {
    id: "installation",
    label: "INSTALLATION",
    title: "What Does Driveway Installation",
    titleAccent: "Involve?",
    intro:
      "A professional driveway project generally moves through the following stages. The exact sequence can shift depending on the site and material, but the goal at every stage is the same: build a driveway that holds up under regular use.",
    imageSrc: "/04_walls_structural.jpg",
    steps: [
      "Project discussion — You describe what you want, and we talk through your goals, budget range and timeline.",
      "Site assessment — We look at the property, existing surface, access points and drainage.",
      "Layout and planning — The driveway shape, dimensions and connections to other areas are mapped out.",
      "Material selection — You choose between paver and concrete based on appearance, budget and use.",
      "Site preparation — Any existing surface is removed and the area is excavated to the needed depth.",
      "Base preparation — A compacted base layer is installed to support the driveway and prevent shifting.",
      "Grading and drainage — The base is sloped so water moves away from the home and doesn't pool on the surface.",
      "Installation — Pavers are set and compacted, or concrete is formed and poured, depending on the material selected.",
      "Finishing — Edges, joints and surface details are completed.",
      "Final walkthrough — We review the finished driveway with you before considering the project complete.",
    ],
  },
  preparation: {
    label: "FOUNDATION FIRST",
    title: "Why Proper Driveway Preparation",
    titleAccent: "Matters",
    intro:
      "Whatever material you choose, a driveway is only as good as what's underneath it. Preparation work that happens before installation is what determines how the surface performs for years afterward.",
    imageSrc: "/06_lighting_utilities.jpg",
    items: [
      {
        title: "Excavation and base",
        description:
          "Removing the existing surface and building a properly compacted base gives the driveway a stable foundation. A base that's too shallow or poorly compacted is one of the most common causes of shifting, sinking and cracking later on.",
      },
      {
        title: "Compaction",
        description:
          "Loose or unevenly compacted material settles unevenly under the weight of vehicles, which shows up as dips, uneven joints or cracks.",
      },
      {
        title: "Grading and drainage",
        description:
          "If the base isn't graded correctly, water collects on the surface or against the foundation of the house instead of draining away. This is one of the most overlooked parts of driveway planning, and it's much harder to fix after installation than before.",
      },
      {
        title: "Edge support",
        description:
          "Edge restraints keep paver driveways from spreading or shifting at the borders over time.",
      },
    ],
    note: "Skipping or rushing preparation doesn't save time in the long run. It's usually the reason a driveway needs early repairs or a full redo well before it should.",
  },
  cost: {
    label: "INVESTMENT",
    title: "How Much Does Driveway Installation Cost in",
    titleAccent: "Charlotte?",
    intro:
      "There's no single number that applies to every driveway, since cost depends on the specifics of your property and project. Because every property is different, the most accurate way to understand cost is to walk through your specific project with us.",
    imageSrc: "/05_outdoor_living_features.jpg",
    factors: [
      "Driveway dimensions and overall square footage",
      "Material selected, paver or concrete",
      "Whether an existing surface needs to be removed",
      "Excavation depth and soil conditions",
      "Site accessibility for equipment and material delivery",
      "Grading and drainage requirements",
      "Base preparation needs",
      "Design complexity, including curves, patterns or multiple materials",
      "Borders, edging and transitions",
      "Connections to an existing walkway, garage or patio",
    ],
  },
  replaceWhen: {
    label: "REPLACEMENT",
    title: "When Should You Replace an",
    titleAccent: "Existing Driveway?",
    intro:
      "Some driveway problems can be addressed without a full rebuild, while others point toward replacement being the more practical option. None of these signs guarantee that replacement is the right call on their own — a site visit is the only reliable way to tell.",
    imageSrc: "/03_driveway_services_charlotte_nc.jpg",
    items: [
      "Significant surface deterioration across a large area",
      "Cracking that keeps returning after previous repairs",
      "Standing water or drainage problems that don't go away",
      "Noticeable settling or unevenness in sections of the driveway",
      "Damaged or crumbling edges",
      "A layout that no longer fits how the property is used, such as added vehicles or a new garage location",
    ],
  },
  design: {
    label: "DESIGN",
    title: "Designing a Driveway That Fits",
    titleAccent: "Your Property",
    intro:
      "A driveway is one of the first things people see when they approach your home, so it's worth designing with the rest of the property in mind rather than as an isolated slab or paver field. A driveway that's planned alongside your walkway and landscaping tends to read as one cohesive entrance rather than a collection of separate surfaces.",
    imageSrc: "/01_modern_courtyard_transformation.jpg",
    items: [
      {
        title: "Shape and layout",
        description:
          "Including how it curves or widens near the entrance.",
      },
      {
        title: "Borders",
        description:
          "Which can frame the driveway or tie it into a walkway.",
      },
      {
        title: "Transitions",
        description:
          "Where the driveway meets the garage, walkway or street.",
      },
      {
        title: "Color and texture",
        description:
          "Which can be coordinated with your home's exterior or existing patio and walkway materials.",
      },
      {
        title: "Material coordination",
        description:
          "Especially if you're planning a driveway and walkway or patio at the same time.",
      },
    ],
  },
  planning: {
    label: "CHARLOTTE PLANNING",
    title: "Planning a Driveway in",
    titleAccent: "Charlotte, NC",
    paragraphs: [
      "Charlotte's clay-heavy soil and seasonal rainfall make drainage and base preparation especially important considerations for any driveway project in the area. Poor drainage planning on a sloped lot can lead to water running toward the home's foundation instead of away from it, which is why grading is addressed early in the planning process rather than left as an afterthought.",
      "Older Charlotte neighborhoods and newer developments often have different site conditions, from mature tree roots and established landscaping to newer, more compact lots with tighter access. Both situations affect how a driveway is laid out and installed.",
    ],
    imageSrc: "/04_sloped_garden_terraces.jpg",
  },
  comparison: {
    id: "comparison",
    label: "MATERIAL COMPARISON",
    title: "Pavers vs. Concrete for",
    titleAccent: "Driveways",
    headers: ["Factor", "Pavers", "Concrete"],
    rows: [
      ["Appearance", "Individual units create pattern and texture options", "Smooth, uniform surface with a consistent look"],
      ["Design flexibility", "Multiple patterns, borders and color combinations", "Finish, color and control-joint layout can be adjusted"],
      ["Maintenance", "Occasional joint sand top-up and periodic resealing", "Periodic sealing and crack monitoring over time"],
      ["Repair approach", "Individual pavers can often be lifted and reset", "Cracked sections typically need patching or replacement"],
      ["Installation considerations", "Requires a well-compacted base and edge restraints", "Requires proper forming, reinforcement and curing time"],
      ["Best suited for", "Homeowners who want design flexibility or the option to repair sections individually", "Homeowners who want a clean, consistent surface with simpler upkeep"],
    ],
    note: "This comparison is meant to help you narrow down what matters most for your project. We can go through the specifics with you once we know more about your property and goals.",
  },
  whyChoose: {
    label: "WHY CHOOSE US",
    title: "Why Choose Empresa Galdamez for",
    titleAccent: "Your Driveway?",
    items: [
      {
        title: "Local Charlotte service",
        description:
          "We work with the site conditions, soil and drainage patterns common to the Charlotte area.",
        imageSrc: "/service-area.png",
      },
      {
        title: "Personalized project planning",
        description:
          "Every driveway is planned around your property's access, layout and intended use rather than a standard template.",
        imageSrc: "/03_front_entry_rebuild.jpg",
      },
      {
        title: "Material guidance",
        description:
          "We walk through paver and concrete options with you based on your project, not a one-size-fits-all recommendation.",
        imageSrc: "/02_paver_services_charlotte_nc.jpg",
      },
      {
        title: "Full outdoor hardscaping capability",
        description:
          "Beyond driveways, we handle walkways, patios, walls, drainage and landscaping, so a driveway can be planned as part of a complete entrance rather than in isolation.",
        imageSrc: "/01_patios_walkways_charlotte_nc.jpg",
      },
      {
        title: "Clear communication",
        description:
          "You'll know what to expect at each stage of the project, from the first conversation through the final walkthrough.",
        imageSrc: "/05_outdoor_living_features.jpg",
      },
    ],
  },
  projectTypes: {
    label: "PROJECT TYPES",
    title: "Driveway Projects We Can",
    titleAccent: "Help With",
    imageSrc: "/03_driveway_services_charlotte_nc.jpg",
    items: [
      "New residential driveways",
      "Paver driveways",
      "Concrete driveways",
      "Driveway replacement",
      "Driveway and walkway combinations",
      "Driveway-to-garage connections",
      "Front-entry improvements that include the driveway, walkway and landscaping together",
    ],
  },
  fitCheck: {
    label: "IS THIS RIGHT FOR YOU?",
    title: "Is a New or Replacement Driveway",
    titleAccent: "Right for You?",
    intro: "Professional driveway installation is worth considering if you're:",
    items: [
      "Building a new home and need a driveway planned from scratch",
      "Replacing an existing driveway that's cracked, settled or draining poorly",
      "Redesigning the front of your property, including the entrance and walkway",
      "Changing your driveway's layout to fit a new garage location or additional vehicles",
      "Coordinating a driveway with new walkways, a patio or landscaping",
      "Improving an outdoor entrance as part of a larger property update",
    ],
    outro:
      "If any of these describe your situation, it's worth having a conversation about what your property needs.",
  },
  process: {
    label: "OUR PROCESS",
    title: "Our Driveway",
    titleAccent: "Process",
    description:
      "From the first conversation to the final walkthrough, we keep driveway projects clear, organized, and built to last.",
    items: [
      {
        title: "Discuss Your Project",
        description:
          "Share what you want to build, replace, or improve — goals, budget range, and timeline.",
      },
      {
        title: "Site Assessment",
        description:
          "We review the property, existing surface, access points, and drainage conditions.",
      },
      {
        title: "Clear Estimate",
        description:
          "Receive a straightforward estimate based on layout, material, and preparation needs.",
      },
      {
        title: "Professional Installation",
        description:
          "Site prep, base work, grading, and installation handled with attention to lasting performance.",
      },
      {
        title: "Final Walkthrough",
        description:
          "We review the finished driveway with you before considering the project complete.",
      },
    ],
  },
  faqs: [
    {
      question: "How much does driveway installation cost in Charlotte?",
      answer:
        "Cost depends on your driveway's size, the material you choose, site accessibility and how much preparation the site needs. There's no fixed price that applies across every property. The clearest way to get an accurate number is to walk through your specific project with us, since factors like existing surface removal, grading and design complexity all affect the final estimate.",
    },
    {
      question: "How long does driveway installation take?",
      answer:
        "Timelines vary based on driveway size, material and site conditions. Concrete requires curing time before it can handle vehicle traffic, while paver driveways can often be used sooner after installation. Site preparation, weather and any existing surface removal also affect the overall schedule for a project.",
    },
    {
      question: "What is the best material for a driveway?",
      answer:
        "There's no material that's best for every property. Pavers offer more design flexibility and easier spot repairs, while concrete offers a clean, uniform surface with simpler long-term upkeep. The right choice depends on your budget, how you plan to use the driveway and how it should look next to your home.",
    },
    {
      question: "Are pavers suitable for driveways?",
      answer:
        "Yes. Paver driveways are a standard offering and work well for homeowners who want design flexibility in pattern, border and color, along with the ability to reset individual pavers if a section is ever damaged.",
    },
    {
      question: "Can you replace an existing driveway?",
      answer:
        "Yes, driveway replacement is one of our core services. This typically involves removing the existing surface, rebuilding the base and drainage, and installing a new paver or concrete surface in its place.",
    },
    {
      question: "Do I need to prepare my property before driveway installation?",
      answer:
        "You don't need to do preparation work yourself. During the site assessment, we look at the existing surface, access points and drainage, then handle excavation and base preparation as part of the project.",
    },
    {
      question: "Should my driveway include a walkway?",
      answer:
        "Combining a driveway and walkway project can make sense when they share a border, transition or entry point, since planning them together often creates a more cohesive look at the front of the property. It isn't necessary for every project, and we can address either one separately if that fits your needs better.",
    },
    {
      question: "How do I request a driveway estimate from Empresa Galdamez?",
      answer: `You can fill out the project form on this page with your contact details, project type and location, or call ${brand.phone}.`,
    },
  ],
  cta: {
    label: "READY TO PLAN YOUR DRIVEWAY?",
    title: "Ready to Plan Your",
    titleAccent: "Driveway?",
    description:
      "Tell us what you want to build, replace or improve, and let's talk through the right options for your property.",
    primaryCta: "Request a Driveway Estimate",
    secondaryCta: "Discuss Your Project",
  },
};

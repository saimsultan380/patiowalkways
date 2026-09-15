export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
};

export type PortfolioProject = {
  id: number;
  slug: string;
  title: string;
  category: string;
  location: string;
  shortDescription: string;
  description: string;
  coverImage: string;
  images: ProjectImage[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    slug: "modern-courtyard-transformation",
    title: "Modern Courtyard Transformation",
    category: "Patios",
    location: "Charlotte, NC",
    shortDescription:
      "Custom paver patio transformation with charcoal-and-taupe pavers, a contrasting border, new planting beds, landscape lighting, and a finished fire-pit seating area.",
    description:
      "A complete backyard transformation featuring a custom charcoal-and-taupe paver patio, detailed dark border work, new planting beds, warm landscape lighting, and a comfortable outdoor fire-pit seating area. The project documents the full installation journey from the original backyard and layout stage through excavation, base preparation, paver installation, finishing details, landscaping, and the final outdoor living reveal.",
    coverImage: "/patio_project_01_08_final.jpg",
    images: [
      { src: "/patio_project_01_01_before.jpg", alt: "Existing backyard before construction", caption: "Existing backyard before construction" },
      { src: "/patio_project_01_02_layout.jpg", alt: "Patio layout and measurements", caption: "Patio layout and measurements" },
      { src: "/patio_project_01_03_excavation.jpg", alt: "Excavation stage", caption: "Excavation stage" },
      { src: "/patio_project_01_04_base.jpg", alt: "Compacted aggregate base preparation", caption: "Compacted aggregate base preparation" },
      { src: "/patio_project_01_05_pavers.jpg", alt: "Paver installation in progress", caption: "Paver installation in progress" },
      { src: "/patio_project_01_06_detail.jpg", alt: "Joint-sand and edge-detail finishing", caption: "Joint-sand and edge-detail finishing" },
      { src: "/patio_project_01_07_finishing.jpg", alt: "Landscaping and lighting finishing", caption: "Landscaping and lighting finishing" },
      { src: "/patio_project_01_08_final.jpg", alt: "Completed patio and outdoor living reveal", caption: "Completed patio and outdoor living reveal" },
    ],
  },
  {
    id: 2,
    slug: "backyard-poolside-retreat",
    title: "Backyard Poolside Retreat",
    category: "Outdoor Living",
    location: "Charlotte, NC",
    shortDescription:
      "Natural flagstone pool-deck transformation with custom coping, a raised stone seating wall, improved drainage, landscape lighting, and finished outdoor seating.",
    description:
      "A complete poolside transformation replacing a dated, cracked concrete surround with an expansive natural flagstone deck, darker pool coping, a curved raised stone seating wall, improved drainage, new planting beds, and warm landscape lighting. The project follows the full process from the original pool area and layout through demolition, excavation, base preparation, stone installation, finishing, and the final outdoor-living reveal.",
    coverImage: "/backyard_poolside_retreat_08_final.jpg",
    images: [
      { src: "/backyard_poolside_retreat_01_before.jpg", alt: "Existing pool area before construction", caption: "Existing pool area before construction" },
      { src: "/backyard_poolside_retreat_02_design.jpg", alt: "Pool-deck layout and measurements", caption: "Pool-deck layout and measurements" },
      { src: "/backyard_poolside_retreat_03_removal.jpg", alt: "Demolition and excavation stage", caption: "Demolition and excavation stage" },
      { src: "/backyard_poolside_retreat_04_base.jpg", alt: "Aggregate base and drainage preparation", caption: "Aggregate base and drainage preparation" },
      { src: "/backyard_poolside_retreat_05_stone.jpg", alt: "Natural flagstone installation in progress", caption: "Natural flagstone installation in progress" },
      { src: "/backyard_poolside_retreat_06_detail.jpg", alt: "Coping, joints, and stone-detail finishing", caption: "Coping, joints, and stone-detail finishing" },
      { src: "/backyard_poolside_retreat_07_finishing.jpg", alt: "Seating wall, planting, and lighting finishing", caption: "Seating wall, planting, and lighting finishing" },
      { src: "/backyard_poolside_retreat_08_final.jpg", alt: "Completed poolside retreat reveal", caption: "Completed poolside retreat reveal" },
    ],
  },
  {
    id: 3,
    slug: "front-entry-walkway-rebuild",
    title: "Front Entry Walkway Rebuild",
    category: "Walkways",
    location: "Charlotte, NC",
    shortDescription:
      "Curved paver walkway and front-step transformation with a charcoal border, stone-capped steps, refreshed planting beds, and warm landscape lighting.",
    description:
      "A complete front-entry transformation replacing a cracked, narrow concrete walkway with a gently curving warm-gray and charcoal paver walkway, rebuilt stone-capped entry steps, improved drainage, fresh planting beds, layered shrubs, and warm low-voltage path lighting. The project documents the full process from the original entry and layout stage through excavation, base preparation, paver installation, finishing details, landscaping, and the final curb-appeal reveal.",
    coverImage: "/front_entry_walkway_rebuild_08_final.jpg",
    images: [
      { src: "/front_entry_walkway_rebuild_01_before.jpg", alt: "Existing front walkway before construction", caption: "Existing front walkway before construction" },
      { src: "/front_entry_walkway_rebuild_02_layout.jpg", alt: "Walkway layout and measurements", caption: "Walkway layout and measurements" },
      { src: "/front_entry_walkway_rebuild_03_excavation.jpg", alt: "Excavation and removal stage", caption: "Excavation and removal stage" },
      { src: "/front_entry_walkway_rebuild_04_base.jpg", alt: "Aggregate base and drainage preparation", caption: "Aggregate base and drainage preparation" },
      { src: "/front_entry_walkway_rebuild_05_installation.jpg", alt: "Paver and step installation in progress", caption: "Paver and step installation in progress" },
      { src: "/front_entry_walkway_rebuild_06_detail.jpg", alt: "Border, step, and joint-sand finishing", caption: "Border, step, and joint-sand finishing" },
      { src: "/front_entry_walkway_rebuild_07_finishing.jpg", alt: "Landscaping and path-light finishing", caption: "Landscaping and path-light finishing" },
      { src: "/front_entry_walkway_rebuild_08_final.jpg", alt: "Completed front entry reveal", caption: "Completed front entry reveal" },
    ],
  },
  {
    id: 4,
    slug: "sloped-garden-terraces",
    title: "Sloped Garden Terraces",
    category: "Landscaping",
    location: "Charlotte, NC",
    shortDescription:
      "Eroded sloped backyard transformed into three planted garden terraces with segmental retaining walls, natural-stone steps, drainage improvements, shade gardens, and warm landscape lighting.",
    description:
      "A complete sloped-yard transformation that converted an eroded, difficult-to-use backyard into three level garden terraces. The project includes grading, drainage infrastructure, natural-gray segmental retaining walls, a central natural-stone stair path, rich planting beds, shade-tolerant landscaping, and warm low-voltage lighting. The image sequence documents the project from the original slope and design layout through excavation, drainage, wall construction, soil preparation, planting, lighting, and final reveal.",
    coverImage: "/patio_project_04_10_final.jpg",
    images: [
      { src: "/patio_project_04_01_before.jpg", alt: "Eroded sloped backyard before construction", caption: "Eroded sloped backyard before construction" },
      { src: "/patio_project_04_02_design.jpg", alt: "Terrace layout and measurements", caption: "Terrace layout and measurements" },
      { src: "/patio_project_04_03_excavation.jpg", alt: "Excavation and grading stage", caption: "Excavation and grading stage" },
      { src: "/patio_project_04_04_drainage.jpg", alt: "Drainage preparation and catch basin installation", caption: "Drainage preparation and catch basin installation" },
      { src: "/patio_project_04_05_walls.jpg", alt: "Retaining-wall installation", caption: "Retaining-wall installation" },
      { src: "/patio_project_04_06_steps.jpg", alt: "Central stair-path installation", caption: "Central stair-path installation" },
      { src: "/patio_project_04_07_soil.jpg", alt: "Soil and planting-bed preparation", caption: "Soil and planting-bed preparation" },
      { src: "/patio_project_04_08_planting.jpg", alt: "Garden planting stage", caption: "Garden planting stage" },
      { src: "/patio_project_04_09_lighting.jpg", alt: "Near-final landscape-lighting stage", caption: "Near-final landscape-lighting stage" },
      { src: "/patio_project_04_10_final.jpg", alt: "Completed terraced garden reveal", caption: "Completed terraced garden reveal" },
    ],
  },
  {
    id: 5,
    slug: "rooftop-terrace-garden",
    title: "Rooftop Terrace Garden",
    category: "Outdoor Living",
    location: "Charlotte, NC",
    shortDescription:
      "Urban rooftop transformed with composite decking, architectural planters, irrigation, a green privacy screen, outdoor kitchen, dining and lounge areas, and layered evening lighting.",
    description:
      "A weathered urban rooftop was transformed into a sophisticated outdoor living destination with waterproofing improvements, an elevated composite deck, integrated drainage access, large architectural planters, drip irrigation, a green privacy screen, an outdoor kitchen, dining furniture, lounge seating, and layered evening lighting. The image sequence documents the project from the original concrete roof surface through planning, waterproofing, framing, decking, irrigation, planting, furnishing, and final reveal.",
    coverImage: "/patio_project_05_10_final.jpg",
    images: [
      { src: "/patio_project_05_01_before.jpg", alt: "Existing rooftop terrace before construction", caption: "Existing rooftop terrace before construction" },
      { src: "/patio_project_05_02_design.jpg", alt: "Rooftop layout and material planning", caption: "Rooftop layout and material planning" },
      { src: "/patio_project_05_03_waterproofing.jpg", alt: "Waterproofing preparation", caption: "Waterproofing preparation" },
      { src: "/patio_project_05_04_framing.jpg", alt: "Adjustable pedestal and aluminum subframe installation", caption: "Adjustable pedestal and aluminum subframe installation" },
      { src: "/patio_project_05_05_decking.jpg", alt: "Composite-deck installation in progress", caption: "Composite-deck installation in progress" },
      { src: "/patio_project_05_06_detail.jpg", alt: "Deck trim, access panels, and planter detailing", caption: "Deck trim, access panels, and planter detailing" },
      { src: "/patio_project_05_07_irrigation.jpg", alt: "Planter and irrigation setup", caption: "Planter and irrigation setup" },
      { src: "/patio_project_05_08_planting.jpg", alt: "Rooftop garden planting stage", caption: "Rooftop garden planting stage" },
      { src: "/patio_project_05_09_furnishing.jpg", alt: "Outdoor kitchen, furniture, and lighting stage", caption: "Outdoor kitchen, furniture, and lighting stage" },
      { src: "/patio_project_05_10_final.jpg", alt: "Completed rooftop terrace garden reveal", caption: "Completed rooftop terrace garden reveal" },
    ],
  },
  {
    id: 6,
    slug: "screened-porch-landscape",
    title: "Screened Porch Landscape",
    category: "Landscaping",
    location: "Charlotte, NC",
    shortDescription:
      "Screened-porch landscape transformation with a curved paver walkway, improved downspout drainage, river-stone rain garden, layered planting beds, restored lawn, and warm path lighting.",
    description:
      "A complete screened-porch landscape transformation that replaced a muddy, underused yard with a curved paver approach, improved downspout drainage, a polished river-stone rain garden, rebuilt porch access, layered foundation planting, restored lawn edges, and warm landscape lighting. The image sequence documents the work from the original porch exterior through layout, grading, drainage, walkway installation, planting, finishing, evening lighting, and final reveal.",
    coverImage: "/patio_project_06_10_final.jpg",
    images: [
      { src: "/patio_project_06_01_before.jpg", alt: "Existing screened porch and yard before construction", caption: "Existing screened porch and yard before construction" },
      { src: "/patio_project_06_02_design.jpg", alt: "Landscape layout and measurements", caption: "Landscape layout and measurements" },
      { src: "/patio_project_06_03_grading.jpg", alt: "Grading and drainage installation", caption: "Grading and drainage installation" },
      { src: "/patio_project_06_04_base.jpg", alt: "Walkway base and planting-bed preparation", caption: "Walkway base and planting-bed preparation" },
      { src: "/patio_project_06_05_walkway.jpg", alt: "Paver walkway installation in progress", caption: "Paver walkway installation in progress" },
      { src: "/patio_project_06_06_detail.jpg", alt: "Paver, edge, and porch-drainage detailing", caption: "Paver, edge, and porch-drainage detailing" },
      { src: "/patio_project_06_07_planting.jpg", alt: "Foundation and rain-garden planting stage", caption: "Foundation and rain-garden planting stage" },
      { src: "/patio_project_06_08_finishing.jpg", alt: "Mulch, lawn-edge, and landscape finishing", caption: "Mulch, lawn-edge, and landscape finishing" },
      { src: "/patio_project_06_09_evening.jpg", alt: "Near-final evening lighting stage", caption: "Near-final evening lighting stage" },
      { src: "/patio_project_06_10_final.jpg", alt: "Completed screened-porch landscape reveal", caption: "Completed screened-porch landscape reveal" },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}

export const projectsPageMeta = {
  title: "Project Portfolio | Outdoor Living Charlotte | Empresa Galdamez",
  description:
    "Browse completed patio, walkway, landscaping, and outdoor living projects across Charlotte — full photo galleries from start to finish.",
};

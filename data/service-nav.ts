/** Mega-menu + service page navigation (12+ entries). */

export type ServiceNavItem = {
  name: string;
  href: string;
  description?: string;
};

export type ServiceNavGroup = {
  title: string;
  items: ServiceNavItem[];
};

export const serviceNavGroups: ServiceNavGroup[] = [
  {
    title: "Patios & Hardscape",
    items: [
      {
        name: "Patios & Walkways",
        href: "/services/patios-walkways",
        description: "Custom patios and connecting walkways",
      },
      {
        name: "Paver Services",
        href: "/services/pavers",
        description: "Patios, walkways, pools & driveways",
      },
      {
        name: "Driveways",
        href: "/services/driveways",
        description: "Paver and concrete driveways",
      },
      {
        name: "Walls & Structural",
        href: "/services/walls",
        description: "Retaining walls, seating walls & steps",
      },
    ],
  },
  {
    title: "Outdoor Living",
    items: [
      {
        name: "Outdoor Living Features",
        href: "/services/outdoor-living",
        description: "Kitchens, fire pits, pergolas & decks",
      },
      {
        name: "Outdoor Kitchens",
        href: "/services/outdoor-living#outdoor-kitchens",
        description: "Built-in grills, bars & cooking spaces",
      },
      {
        name: "Fire Pits & Fireplaces",
        href: "/services/outdoor-living#fire-features",
        description: "Gathering spaces for year-round use",
      },
      {
        name: "Pergolas & Gazebos",
        href: "/services/outdoor-living#features",
        description: "Shade and structure for outdoor rooms",
      },
    ],
  },
  {
    title: "Lighting & Landscape",
    items: [
      {
        name: "Lighting & Utilities",
        href: "/services/lighting",
        description: "Landscape lighting, irrigation & drainage",
      },
      {
        name: "Landscaping",
        href: "/services/landscaping",
        description: "Sod, planting, mulch, turf & lawn care",
      },
      {
        name: "Irrigation Systems",
        href: "/services/lighting",
        description: "Water systems for healthy landscapes",
      },
      {
        name: "Drainage & Grading",
        href: "/services/lighting#drainage",
        description: "Move water away from hardscape areas",
      },
    ],
  },
  {
    title: "Specialty & Commercial",
    items: [
      {
        name: "Fences & Water Features",
        href: "/services/fences-water",
        description: "Privacy fencing, ponds & water features",
      },
      {
        name: "Commercial Hardscaping",
        href: "/services/commercial",
        description: "Outdoor spaces for businesses",
      },
      {
        name: "Commercial Landscaping",
        href: "/services/commercial#landscaping",
        description: "Curb appeal for commercial properties",
      },
      {
        name: "View All Services",
        href: "/services",
        description: "Full hardscaping & landscaping menu",
      },
    ],
  },
];

export const allServiceNavItems: ServiceNavItem[] = serviceNavGroups.flatMap(
  (group) => group.items
);

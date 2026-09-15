/** Mega-menu + service page navigation — main service pages only. */

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
    title: "Outdoor & Landscape",
    items: [
      {
        name: "Outdoor Living Features",
        href: "/services/outdoor-living",
        description: "Kitchens, fire pits, pergolas & decks",
      },
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
        name: "Commercial Services",
        href: "/services/commercial",
        description: "Hardscaping & landscaping for businesses",
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

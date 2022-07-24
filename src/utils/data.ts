export const menu = [
  {
    id: 1,
    name: "dashboard",
    href: "/",
    icon: "display",
  },
  {
    id: 2,
    name: "my-turns",
    href: "/my-turns",
    icon: "doctor",
    submenu: [
      { id: 1, name: "next-turns", href: "/next-turns" },
      { id: 2, name: "history", href: "/history" },
    ],
  },
  {
    id: 3,
    name: "my-children",
    href: "/my-children",
    icon: "children",
    submenu: [
      { id: 1, name: "children-show", href: "/children-show" },
      {
        id: 2,
        name: "new-child-registration",
        href: "/new-child-registration",
      },
    ],
  },
  {
    id: 4,
    name: "reminder-turn",
    href: "/reminder-turn",
    icon: "bellOn",
  },
  {
    id: 5,
    name: "my-cities",
    href: "/my-cities",
    icon: "city",
  },
  {
    id: 6,
    name: "results-experiment",
    href: "/results-experiment",
    icon: "flask",
  },
  {
    id: 7,
    name: "health-calculator",
    href: "/health-calculator",
    icon: "heartPulse",
    submenu: [
      {
        id: 1,
        name: "child-growth-control-robots",
        href: "/health-calculator",
      },
    ],
  },
];

export const menu = [
  {
    id: 1,
    name: "doshboard",
    href: "/",
    icon: "display",
  },
  {
    id: 2,
    name: "my turns",
    href: "/",
    icon: "doctor",
    submenu: [
      { id: 1, name: "Next turns", href: "/next-turns" },
      { id: 2, name: "History", href: "/history" },
    ],
  },
  {
    id: 3,
    name: "my childes",
    href: "/",
    icon: "children",
    submenu: [
      { id: 1, name: "Children's show", href: "/children-show" },
      {
        id: 2,
        name: "New child registration",
        href: "/new-child-registration",
      },
    ],
  },
  {
    id: 4,
    name: "Reminder of the turn",
    href: "/reminder-turn",
    icon: "bellOn",
  },
  {
    id: 5,
    name: "my cities",
    href: "/my-cities",
    icon: "city",
  },
  {
    id: 6,
    name: "results of the experiment",
    href: "/results-experiment",
    icon: "flask",
  },
  {
    id: 7,
    name: "health calculator",
    href: "/health-calculator",
    icon: "heartPulse",
    submenu: [{ id: 1, name: "Child growth control robots", href: "/" }],
  },
];

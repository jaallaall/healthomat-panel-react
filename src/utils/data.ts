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
      { id: 1, name: "Next turns", href: "/" },
      { id: 2, name: "History", href: "/" },
    ],
  },
  {
    id: 3,
    name: "my childes",
    href: "/",
    icon: "children",
    submenu: [
      { id: 1, name: "Children's show", href: "/" },
      { id: 2, name: "New child registration", href: "/" },
    ],
  },
  {
    id: 4,
    name: "Reminder of the turn",
    href: "/",
    icon: "bellOn",
  },
  {
    id: 5,
    name: "my cities",
    href: "/",
    icon: "city",
  },
  {
    id: 6,
    name: "results of the experiment",
    href: "/",
    icon: "flask",
  },
  {
    id: 7,
    name: "health calculator",
    href: "/",
    icon: "heartPulse",
    submenu: [{ id: 1, name: "Child growth control robots", href: "/" }],
  },
];

export const data = [
  {
    id: 1,
    name: "دکتر احسان",
    specialty: "گوش و حلق",
    code: "634234",
    address: ["1 آدرس", "2 آدرس"],
    view: 10,
    visit: 4,
    rate: 4,
  },
  {
    id: 2,
    name: "دکتر احسان",
    specialty: "گوش و حلق",
    code: "12435",
    address: ["1 آدرس", "2 آدرس"],
    view: 4,
    visit: 4,
    rate: 3.4,
  },
  {
    id: 3,
    name: "دکتر احسان",
    specialty: "گوش و حلق",
    code: "12435",
    address: ["1 آدرس", "2 آدرس"],
    view: 7,
    visit: 4,
    rate: 4.4,
  },
] as const;

export const list = [
  {
    id: 1,
    title: "شیوه ویزیت",
    sub: [
      { id: 1, title: "حضوری", value: "value1" },
      { id: 2, title: "تماس ویدویی", value: "value2" },
      { id: 3, title: "تماس تلفنی", value: "value3" },
    ],
  },
  {
    id: 2,
    title: "جنسیت",
    sub: [
      { id: 1, title: "زن", value: "male" },
      { id: 2, title: "مرد", value: "female" },
    ],
  },
  {
    id: 3,
    title: "دارای امکان پرسش و پاسخ؟",
    value: "value1",
  },
  {
    id: 4,
    title: "شیفت کاری",
    sub: [
      { id: 1, title: "6 صبح تا 12 ظهر", value: "value6" },
      { id: 2, title: "12 ظهر تا 6 بعد از ظهر", value: "value7" },
      { id: 3, title: "6 بعد از ظهر تا آخر شب", value: "value8" },
    ],
  },
];

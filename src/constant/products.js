import Product1 from "../assets/Evernew Gallon/Emulsion a.jpg";
import Product2 from "../assets/Kent Gallon/Acrylic Putty.jpg";
import Product3 from "../assets/Evernew Gallon/Gloss Enamel.jpg";
import Product4 from "../assets/Kent Gallon/Gloss Enamel.jpg";
import Product5 from "../assets/Evernew Gallon/Hydro Matt.jpg";
import Product6 from "../assets/Kent Gallon/Hydro Matt.jpg";
import Product7 from "../assets/Kent Gallon/Hydro Wall Primer Sealer.jpg";
import Product8 from "../assets/Kent Gallon/Luxury Emulsion.jpg";
import Product9 from "../assets/Kent Gallon/Matt Enamel.jpg";
import Product10 from "../assets/Kent Gallon/Red Oxide.jpg";
import Product11 from "../assets/Kent Gallon/Wall Primer.jpg";
import Product12 from "../assets/Kent Gallon/Weather Care.jpg";
import Product13 from "../assets/Evernew Gallon/Weather Care.jpg";
import Product14 from "../assets/Evernew Gallon/Matt Enamel Pearl Finish.png";
import { EvernewHydroMattFinish, EvernewSuperGlossEnamel, EvernewWeatherCare, SemiPlasticEmulsion } from "./shades/Evernew Shades";
import { KentHighGloss, KentHydroMattFinish, KentLuxuryEmulsion, KentMattFinish, KentWeatherCare } from "./shades/Kent Shades";


export const products = [
  {
    id: 1,
    name: "Evernew Gallon Emulsion",
    category: "EVERNEW",
    description:
      "Evernew Emulsion provides a smooth and durable finish, ideal for interior walls. It offers excellent coverage and a soft matte appearance, making your space look clean and elegant.",
    image: Product1,
    shades: SemiPlasticEmulsion
  },
  {
    id: 2,
    name: "Kent Gallon Acrylic Putty",
    category: "KENT",
    description:
      "Kent Acrylic Putty offers a smooth base for walls by filling cracks and imperfections. Its strong adhesion ensures a perfect surface for topcoat application.",
    image: Product2,
    shades: KentHydroMattFinish
  },
  {
    id: 3,
    name: "Gloss Enamel (Evernew)",
    category: "EVERNEW",
    description:
      "Evernew Gloss Enamel gives a luxurious, high-sheen finish that is both durable and washable. Best suited for metal and wooden surfaces.",
    image: Product3,
    shades: EvernewSuperGlossEnamel
  },
  {
    id: 4,
    name: "Gloss Enamel (Kent)",
    category: "KENT",
    description:
      "Kent Gloss Enamel offers a brilliant glossy look and long-lasting protection for furniture, doors, windows, and trims.",
    image: Product4,
    shades: KentHighGloss
  },
  {
    id: 5,
    name: "Hydro Matt (Evernew)",
    category: "EVERNEW",
    description:
      "Hydro Matt by Evernew delivers a rich matte finish with water resistance. Ideal for interior and exterior applications.",
    image: Product5,
    shades: EvernewHydroMattFinish
  },
  {
    id: 6,
    name: "Hydro Matt (Kent)",
    category: "KENT",
    description:
      "Kent Hydro Matt provides a smooth, breathable, and water-repellent layer that maintains a natural look for walls.",
    image: Product6,
    shades: KentHydroMattFinish
  },
  {
    id: 7,
    name: "Hydro Wall Primer Sealer",
    category: "KENT",
    description:
      "This water-based primer and sealer enhances paint adhesion and ensures long-term protection against moisture and stains.",
    image: Product7,
    shades: KentHydroMattFinish
  },
  {
    id: 8,
    name: "Luxury Emulsion",
    category: "KENT",
    description:
      "Luxury Emulsion adds richness and elegance to your interiors. It offers excellent color retention, smooth coverage, and a lavish matte appearance.",
    image: Product8,
    shades: KentLuxuryEmulsion
  },
  {
    id: 9,
    name: "Matt Enamel",
    category: "KENT",
    description:
      "Matt Enamel provides a subtle, low-sheen finish for surfaces that need a classy look with durability and easy maintenance.",
    image: Product9,
    shades: KentMattFinish
  },
  {
    id: 10,
    name: "Red Oxide",
    category: "KENT",
    description:
      "Red Oxide is a protective metal primer that prevents rust and corrosion. Ideal for metal gates, grills, and industrial structures.",
    image: Product10,
    shades: KentHighGloss
  },
  {
    id: 11,
    name: "Wall Primer",
    category: "KENT",
    description:
      "This primer prepares walls for a smooth and uniform topcoat. It penetrates deeply and improves paint adhesion for lasting results.",
    image: Product11,
    shades: KentMattFinish
  },
  {
    id: 12,
    name: "Weather Care",
    category: "KENT",
    description:
      "Weather Care is a high-performance exterior paint that resists harsh weather, UV rays, and dirt. Keeps your walls protected and vibrant year-round.",
    image: Product12,
    shades: KentWeatherCare
  },
  {
    id: 13,
    name: "Weather Care",
    category: "EVERNEW",
    description:
      "Weather Care is a high-performance exterior paint that resists harsh weather, UV rays, and dirt. Keeps your walls protected and vibrant year-round.",
    image: Product13,
    shades: EvernewWeatherCare
  },
  {
    id: 14,
    name: "Matt Enamel Pearl Finish",
    category: "EVERNEW",
    description:
      "Designed for exterior surfaces, Matt Enamel Pearl Finish delivers a rich matte look with a delicate pearl effect, offering weather resistance and long-lasting durability.",
    image: Product14,
    shades: EvernewHydroMattFinish
  },
];


export const productsGallon = [
  { id: 1, name: 'Emulsion', image: Product1 },
  { id: 2, name: 'Acrylic Putty', image: Product2 },
  { id: 3, name: 'Gloss Enamel (Evernew)', image: Product3 },
  { id: 4, name: 'Gloss Enamel (Kent)', image: Product4 },
  { id: 5, name: 'Hydro Matt (Evernew)', image: Product5 },
  { id: 6, name: 'Hydro Matt (Kent)', image: Product6 },
  { id: 7, name: 'Hydro Wall Primer Sealer', image: Product7 },
  { id: 8, name: 'Luxury Emulsion', image: Product8 },
  { id: 9, name: 'Matt Enamel', image: Product9 },
  { id: 10, name: 'Red Oxide', image: Product10 },
  { id: 11, name: 'Wall Primer', image: Product11 },
  { id: 12, name: 'Weather Care', image: Product12 },
  { id: 13, name: 'Weather Care', image: Product13 },
  { id: 14, name: 'Matt Enamel Pearl Finish', image: Product14 },
];

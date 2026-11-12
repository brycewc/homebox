export type DaisyTheme =
  | "homebox"
  | "light"
  | "dark"
  | "cupcake"
  | "bumblebee"
  | "emerald"
  | "corporate"
  | "synthwave"
  | "retro"
  | "cyberpunk"
  | "valentine"
  | "halloween"
  | "garden"
  | "forest"
  | "aqua"
  | "lofi"
  | "pastel"
  | "fantasy"
  | "wireframe"
  | "black"
  | "luxury"
  | "dracula"
  | "cmyk"
  | "autumn"
  | "business"
  | "acid"
  | "lemonade"
  | "night"
  | "coffee"
  | "winter"
  | "abyss"
  | "caramellatte"
  | "dim"
  | "nord"
  | "silk"
  | "sunset";

export type ThemeOption = {
  label: string;
  value: DaisyTheme;
};

export const themes: ThemeOption[] = [
  {
    label: "Homebox",
    value: "homebox",
  },
  {
    label: "Garden",
    value: "garden",
  },
  {
    label: "Light",
    value: "light",
  },
  {
    label: "Cupcake",
    value: "cupcake",
  },
  {
    label: "Bumblebee",
    value: "bumblebee",
  },
  {
    label: "Emerald",
    value: "emerald",
  },
  {
    label: "Corporate",
    value: "corporate",
  },
  {
    label: "Synthwave",
    value: "synthwave",
  },
  {
    label: "Retro",
    value: "retro",
  },
  {
    label: "Cyberpunk",
    value: "cyberpunk",
  },
  {
    label: "Valentine",
    value: "valentine",
  },
  {
    label: "Halloween",
    value: "halloween",
  },
  {
    label: "Forest",
    value: "forest",
  },
  {
    label: "Aqua",
    value: "aqua",
  },
  {
    label: "Lofi",
    value: "lofi",
  },
  {
    label: "Pastel",
    value: "pastel",
  },
  {
    label: "Fantasy",
    value: "fantasy",
  },
  {
    label: "Wireframe",
    value: "wireframe",
  },
  {
    label: "Black",
    value: "black",
  },
  {
    label: "Luxury",
    value: "luxury",
  },
  {
    label: "Dracula",
    value: "dracula",
  },
  {
    label: "Cmyk",
    value: "cmyk",
  },
  {
    label: "Autumn",
    value: "autumn",
  },
  {
    label: "Business",
    value: "business",
  },
  {
    label: "Acid",
    value: "acid",
  },
  {
    label: "Lemonade",
    value: "lemonade",
  },
  {
    label: "Night",
    value: "night",
  },
  {
    label: "Coffee",
    value: "coffee",
  },
  {
    label: "Winter",
    value: "winter",
  },
  {
    label: "Abyss",
    value: "abyss",
  },
  {
    label: "Caramellatte",
    value: "caramellatte",
  },
  {
    label: "Dark",
    value: "dark",
  },
  {
    label: "Dim",
    value: "dim",
  },
  {
    label: "Nord",
    value: "nord",
  },
  {
    label: "Silk",
    value: "silk",
  },
  {
    label: "Sunset",
    value: "sunset",
  },
];

export const darkThemes: DaisyTheme[] = [
  "abyss",
  "aqua",
  "black",
  "business",
  "coffee",
  "dark",
  "dim",
  "dracula",
  "forest",
  "halloween",
  "luxury",
  "night",
  "sunset",
  "synthwave",
];

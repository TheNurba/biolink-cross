import type { TemplateMeta } from "@/lib/types";
import MidnightDark from "./MidnightDark";
import SunsetGradient from "./SunsetGradient";
import GridPlaid from "./GridPlaid";
import VintageCream from "./VintageCream";
import ForestGreen from "./ForestGreen";
import CleanLight from "./CleanLight";
import WarmTexture from "./WarmTexture";
import PlumGradient from "./PlumGradient";

export const TEMPLATES: TemplateMeta[] = [
  { id: "midnight", name: "Midnight", swatch: "#0a0a0a", Component: MidnightDark },
  { id: "sunset", name: "Sunset", swatch: "#f5a35b", Component: SunsetGradient },
  { id: "plaid", name: "Plaid", swatch: "#3b1f24", Component: GridPlaid },
  { id: "vintage", name: "Vintage", swatch: "#f7efe2", Component: VintageCream },
  { id: "forest", name: "Forest", swatch: "#13291f", Component: ForestGreen },
  { id: "clean", name: "Clean", swatch: "#eceef1", Component: CleanLight },
  { id: "warm", name: "Warm", swatch: "#4a3c30", Component: WarmTexture },
  { id: "plum", name: "Plum", swatch: "#5b1742", Component: PlumGradient },
];

export const DEFAULT_TEMPLATE = TEMPLATES[0].id;

export function getTemplate(id: string): TemplateMeta {
  return TEMPLATES.find((t) => t.id === id) ?? TEMPLATES[0];
}

import { Skill } from "@/mechanism/battle/Skill";

export type CardCateEntry = {
  name: string;
  skills: Skill[];
};

export const CardCate: CardCateEntry[] = [
  { name: "MENG", skills: [] },
  { name: "MO", skills: [] },
  { name: "AI", skills: [] },
  { name: "LIN", skills: [] },
  { name: "WEI", skills: [] }
];

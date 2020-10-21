import { Skill } from "@/mechanism/battle/Skill";
import { normalATK } from "@/utils/helper";

export type CardCateEntry = {
  name: string;
  skills: Skill[];
};

export const CardCate: CardCateEntry[] = [
  { name: "MENG", skills: [normalATK] }
];

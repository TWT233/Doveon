import { Skill } from "@/mechanism/battle/Skill";

export type CardCateEntry = {
  name: string;
  skills: Skill[];
};

export const CardCate: CardCateEntry[] = [{ name: "MENG", skills: [] }];

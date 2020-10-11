import { Status } from "@/mechanism/build/Status";
import {Skill} from "@/mechanism/battle/Skill";

export type NPCCateEntry = {
  name: string;
  status: (lvl: number, p: number) => Status;
  skills: Skill[];
};

export const NPCCate: NPCCateEntry[] = [
  {
    name: "WOODEN",
    status: (lvl: number, p: number) => {
      return {
        HP: p * lvl * 200,
        HP_REG_A: 5,
        HP_REG_B: 0,
        ATK_PHY_A: 0,
        ATK_PHY_B: p * lvl * 20,
        ATK_MAG_A: 0,
        ATK_MAG_B: p * lvl * 2,
        ATK_ABS: 0,
        ATK_SPD_A: 0,
        ATK_SPD_B: p * lvl * 3,
        THR_PHY_A: 10,
        THR_PHY_B: 0,
        THR_MAG_A: 0,
        THR_MAG_B: 0,
        SKI_CHA: p * lvl,
        CRI_CHA: p * lvl,
        THR_CRI: 0,
        HP_STL: 0,
        DEF_PHY_A: 0,
        DEF_PHY_B: p * lvl * 3,
        DEF_MAG_A: 0,
        DEF_MAG_B: p * lvl,
        BAR_PHY: 0,
        BAR_MAG: 0,
        SHD: p * lvl * 30,
        SHD_REG_A: 0,
        SHD_REG_B: 0,
        REF: 0
      };
    },
    skills: []
  }
];

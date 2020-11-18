import { Status } from "@/mechanism/build/Status";
import { Skill } from "@/mechanism/battle/Skill";

export type NPCCateEntry = {
  name: string;
  status: (lvl: number, p: number) => Status;
  skills: Skill[];
};

export const NPCCate: NPCCateEntry[] = [
  {
    name: "WOODEN",
    status: (lvl: number, p: number) => {
      const ret = new Status();
      ret.HP = p * lvl * 200;
      ret.HP_REG_K = 5;
      ret.ATK_PHY_B = p * lvl * 20;
      ret.ATK_MAG_B = p * lvl * 2;
      ret.ATK_SPD_B = p * lvl * 3;
      ret.THR_PHY_K = 10;
      ret.SKI_CHA_A = p * lvl;
      ret.CRI_CHA_A = p * lvl;
      ret.DEF_PHY_B = p * lvl * 3;
      ret.DEF_MAG_B = p * lvl;
      ret.SHD = p * lvl * 30;
      return ret;
    },
    skills: []
  }
];

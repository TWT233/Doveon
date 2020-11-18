import { Status } from "@/mechanism/build/Status";
import { Skill } from "@/mechanism/battle/Skill";

export type NPCCateEntry = {
  name: string;
  status: (lvl: number, p: number) => Status;
  skills: Skill[];
};

export const NPCCate: NPCCateEntry[] = [
  {
    name: "MU",
    status: (lvl: number, p: number) => {
      const ret = new Status();
      ret.ATK_PHY_B = p * lvl * 20;
      ret.ATK_MAG_B = p * lvl * 2;
      ret.ATK_SPD_B = p * lvl * 3;
      ret.THR_PHY_K = 10;
      ret.DEF_PHY_B = p * lvl * 3;
      ret.DEF_MAG_B = p * lvl;
      ret.HP = p * lvl * 200;
      ret.HP_REG_K = 5;
      ret.SHD = p * lvl * 30;
      ret.SKI_CHA_A = p * lvl;
      ret.CRI_CHA_A = p * lvl;
      return ret;
    },
    skills: []
  },
  {
    name: "ZHU",
    status: (lvl: number, p: number) => {
      const ret = new Status();
      ret.ATK_PHY_B = p * lvl * 2;
      ret.ATK_MAG_B = p * lvl * 10;
      ret.ATK_SPD_B = p * lvl * 10;
      ret.THR_MAG_K = 10;
      ret.DEF_PHY_B = p * lvl;
      ret.DEF_MAG_B = p * lvl;
      ret.HP = p * lvl * 40;
      ret.STL = 18;
      ret.SKI_CHA_A = p * lvl * 3;
      ret.CRI_CHA_A = p * lvl;
      return ret;
    },
    skills: []
  },
  {
    name: "DENG",
    status: (lvl: number, p: number) => {
      const ret = new Status();
      ret.ATK_PHY_B = 1;
      ret.ATK_MAG_B = 1;
      ret.ATK_SPD_B = p * lvl * 3;
      ret.THR_MAG_K = 10;
      ret.THR_MAG_C = p * lvl;
      ret.DEF_PHY_B = 1;
      ret.DEF_MAG_B = 1;
      ret.HP = 1;
      ret.SHD = p * lvl * 360;
      ret.SKI_CHA_A = p * lvl * 8;
      return ret;
    },
    skills: []
  },
  {
    name: "SHOU",
    status: (lvl: number, p: number) => {
      const ret = new Status();
      ret.ATK_PHY_B = p * lvl * 50;
      ret.ATK_MAG_B = 1;
      ret.ATK_SPD_B = p * lvl;
      ret.THR_PHY_K = 20;
      ret.DEF_PHY_B = p * lvl * 6;
      ret.DEF_MAG_B = p * lvl * 2;
      ret.HP = p * lvl * 300;
      ret.HP_REG_K = 5;
      ret.REF = 40;
      ret.SKI_CHA_A = p * lvl;
      ret.CRI_CHA_A = p * lvl * 3;
      return ret;
    },
    skills: []
  }
];

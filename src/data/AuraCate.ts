import { Skill } from "@/mechanism/battle/Skill";
import { BattleFrame } from "@/mechanism/battle/BattleFrame";

export type AuraCateEntry = {
  name: string;
  skills: Skill[];
};

export const AuraCate: AuraCateEntry[] = [
  {
    name: "SHI",
    skills: [
      {
        name: "SHI",
        type: "stat",
        run: (b: BattleFrame, s: "a" | "b") => {
          b[s].BAR_PHY += 15;
          b[s].BAR_MAG += 15;
          b[s].ATK_ABS += 10;
          return b;
        }
      }
    ]
  },
  {
    name: "XIN",
    skills: [
      {
        name: "XIN",
        type: "stat",
        run: (b: BattleFrame, s: "a" | "b") => {
          b[s].SHD += 100;
          b[s].SHD_REG_C += 10;
          b[s].ATK_MAG_B += 30;
          return b;
        }
      }
    ]
  },
  {
    name: "FENG",
    skills: [
      {
        name: "FENG",
        type: "stat",
        run: (b: BattleFrame, s: "a" | "b") => {
          b[s].ATK_PHY_B += 15;
          b[s].ATK_MAG_B += 15;
          b[s].ATK_SPD_B += 30;
          return b;
        }
      }
    ]
  },
  {
    name: "BI",
    skills: [
      {
        name: "BI",
        type: "stat",
        run: (b: BattleFrame, s: "a" | "b") => {
          b[s].THR_PHY_K *= 1.15;
          b[s].THR_PHY_C *= 1.15;
          return b;
        }
      }
    ]
  },
  {
    name: "MO",
    skills: [
      {
        name: "MO",
        type: "stat",
        run: (b: BattleFrame, s: "a" | "b") => {
          b[s].THR_MAG_K *= 1.15;
          b[s].THR_MAG_C *= 1.15;
          return b;
        }
      }
    ]
  },
  {
    name: "DUN",
    skills: [
      {
        name: "DUN",
        type: "stat",
        run: (b: BattleFrame, s: "a" | "b") => {
          b.e[s].buffs.AURA_DUN = true;
          return b;
        }
      }
    ]
  },
  {
    name: "XUE",
    skills: [
      {
        name: "XUE",
        type: "stat",
        run: (b: BattleFrame, s: "a" | "b") => {
          b[s].STL += 10;
          return b;
        }
      }
    ]
  },
  {
    name: "SHANG",
    skills: [
      {
        name: "SHANG",
        type: "stat",
        run: (b: BattleFrame, s: "a" | "b") => {
          b[s].HP_REG_P -= 0.6;
          return b;
        }
      }
    ]
  },
  {
    name: "SHEN",
    skills: [
      {
        name: "SHEN",
        type: "stat",
        run: (b: BattleFrame, s: "a" | "b") => {
          b[s].SHD_REG_P -= 0.6;
          return b;
        }
      }
    ]
  },
  {
    name: "CI",
    skills: [
      {
        name: "CI",
        type: "stat",
        run: (b: BattleFrame, s: "a" | "b") => {
          b[s].DEF_PHY_A *= 1.1;
          b[s].DEF_MAG_A *= 1.1;
          b[s].HP_REG_P += 0.1;
          b[s].REF += 5;
          return b;
        }
      }
    ]
  },
  { name: "REN", skills: [] },
  { name: "FEI", skills: [] },
  { name: "BO", skills: [] },
  { name: "JU", skills: [] },
  { name: "HONG", skills: [] },
  { name: "JUE", skills: [] }
];

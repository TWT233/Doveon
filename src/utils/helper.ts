import { Skill } from "@/mechanism/battle/Skill";
import { BattleFrame } from "@/mechanism/battle/BattleFrame";
import { DynStatus } from "@/mechanism/battle/DynStatus";

export function isDarkColor(hex: string): boolean {
  if (hex.substr(0, 1) != "#") return false;
  const r = parseInt(hex.substr(1, 2), 16);
  const g = parseInt(hex.substr(3, 2), 16);
  const b = parseInt(hex.substr(5, 2), 16);

  return (Math.max(r, g, b) + Math.min(r, g, b)) / 2 < 127;
}

function dealDMG(b: BattleFrame, A: DynStatus, B: DynStatus, isMAG: boolean) {
  let def;
  let rawDMG: number;
  if (isMAG) {
    def = B.DEF_MAG * (1 - A.THR_MAG_P) - A.THR_MAG_C;
    rawDMG = b.e.atkK.MAG * A.ATK_MAG + b.e.atkC.MAG;
    rawDMG = rawDMG * b.e.atkK.MAG + b.e.atkC.MAG;
  } else {
    def = B.DEF_PHY * (1 - A.THR_PHY_P) - A.THR_PHY_C;
    rawDMG = b.e.atkK.PHY * A.ATK_PHY + b.e.atkC.PHY;
    rawDMG = rawDMG * b.e.atkK.PHY + b.e.atkC.PHY;
  }
  let defRate = def / (Math.abs(def) + 99);
  if (defRate > 0.95) defRate = 0.95;

  const defDMG = () => rawDMG * defRate - (isMAG ? B.BAR_MAG : B.BAR_PHY);

  let defDMGSHD = defDMG() / 3 + rawDMG * (2 / 3);
  if (!isMAG) defDMGSHD *= 1.5;

  rawDMG *= 1 - Math.min(defDMGSHD, B.SHD) / defDMGSHD;
  B.SHD -= Math.min(defDMGSHD, B.SHD);

  B.HP -= Math.min(defDMG(), B.HP);
}

export const normalATK: Skill = {
  name: "normalATK",
  type: "positive",
  isBefore: false,
  run: (b: BattleFrame, s: "a" | "b") => {
    const A = s == "a" ? b.a : b.b;
    const B = s == "b" ? b.a : b.b;

    dealDMG(b, A, B, true);
    dealDMG(b, A, B, false);

    B.HP -= Math.min(A.ATK_ABS * b.e.atkK.ABS + b.e.atkC.ABS, B.HP);

    return b;
  }
};

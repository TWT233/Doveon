import { BattleFrame } from "@/mechanism/battle/BattleFrame";

export function isDarkColor(hex: string): boolean {
  if (hex.substr(0, 1) != "#") return false;
  const r = parseInt(hex.substr(1, 2), 16);
  const g = parseInt(hex.substr(3, 2), 16);
  const b = parseInt(hex.substr(5, 2), 16);

  return (Math.max(r, g, b) + Math.min(r, g, b)) / 2 < 127;
}

export function dealDMG(
  b: BattleFrame,
  s: "a" | "b",
  type: "PHY" | "MAG" | "ABS",
  rawDMG: number
) {
  const m = s == "a" ? "b" : "a";

  let def;
  switch (type) {
    case "PHY": {
      def = b[m].DEF_PHY * (1 - b[s].THR_PHY_K / 100) - b[s].THR_PHY_C;
      break;
    }
    case "MAG": {
      def = b[m].DEF_MAG * (1 - b[s].THR_MAG_K / 100) - b[s].THR_MAG_C;
      break;
    }
    case "ABS": {
      def = 0;
      break;
    }
  }
  let defRate = def / (Math.abs(def) + 99);
  if (defRate > 0.95) defRate = 0.95;

  const defDMG = () => {
    switch (type) {
      case "PHY": {
        return Math.max(rawDMG * (1 - defRate) - b[m].BAR_PHY, 0);
      }
      case "MAG": {
        return Math.max(rawDMG * (1 - defRate) - b[m].BAR_MAG, 0);
      }
      case "ABS": {
        return Math.max(rawDMG * (1 - defRate), 0);
      }
    }
  };

  let defDMGSHD = defDMG() / 3 + rawDMG * (2 / 3);
  if (type == "PHY") defDMGSHD *= b.e[m].buffs.AURA_DUN ? 1.5 : 1.25;

  if (defDMGSHD > 0) {
    const SD = Math.min(defDMGSHD, b[m].SHD - b.e[m].SD);
    b.e[m].SD += SD;
    b.e[s].SR += SD * (b[s].STL / 150);
    rawDMG *= 1 - SD / defDMGSHD;
  }

  const HD = Math.min(defDMG(), b[m].HP - b.e[m].HD);
  b.e[m].HD += HD;
  b.e[s].HR += HD * (b[s].STL / 100);
}

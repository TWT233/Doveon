import {BattleFrame} from "@/mechanism/battle/BattleFrame";

export type Skill = {
  name: string;
  type: "beforeCrit" | "onCrit" | "active" | "onMC" | "beforeATK" | "afterATK";
  run: (b: BattleFrame, s: "a" | "b") => BattleFrame;
};

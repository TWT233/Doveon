import {BattleFrame} from "@/mechanism/battle/BattleFrame";

export type Skill = {
  name: string;
  type: string;
  prior: number;
  run: (b: BattleFrame, s: "a" | "b") => BattleFrame;
};

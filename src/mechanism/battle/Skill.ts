import { BattleFrame } from "@/mechanism/battle/BattleFrame";

export type Skill = {
  name: string;
  type: string;
  isBefore: boolean;
  run: (b: BattleFrame, s: "a" | "b") => BattleFrame;
};

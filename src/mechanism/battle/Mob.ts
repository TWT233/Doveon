import { DynStatus } from "@/mechanism/battle/DynStatus";
import { BattleFrame } from "@/mechanism/battle/BattleFrame";

export type Skill = {
  name: string;
  type: string;
  run: (b: BattleFrame, s: "a" | "b") => BattleFrame;
};

export class Mob {
  name: string;
  type: "PC" | "NPC" | "";
  skills: Skill[] = [];
  status: DynStatus;

  constructor(name: string, type: "PC" | "NPC" | "", status: DynStatus) {
    this.name = name;
    this.type = type;
    this.status = status;
  }
}

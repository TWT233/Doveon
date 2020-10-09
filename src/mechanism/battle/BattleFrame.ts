import { DynStatus } from "./DynStatus";
import { BattleStatus } from "@/mechanism/battle/BattleStatus";

export class BattleFrame {
  a: DynStatus;
  b: DynStatus;
  e: BattleStatus;

  constructor(b: BattleFrame | null = null) {
    this.a = new DynStatus(b?.a);
    this.b = new DynStatus(b?.b);
    this.e = new BattleStatus(b?.e);
  }
}

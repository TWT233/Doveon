import { DynStatus } from "./DynStatus";
import { BattleStatus } from "@/mechanism/battle/BattleStatus";

export class BattleFrame {
  a: DynStatus = new DynStatus();
  b: DynStatus = new DynStatus();
  e: BattleStatus = new BattleStatus();
}

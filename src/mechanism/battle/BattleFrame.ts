import { BattleStatus } from "@/mechanism/battle/BattleStatus";
import { Status } from "@/mechanism/build/Status";

export class BattleFrame {
  a: Status;
  b: Status;
  e: BattleStatus;

  constructor(b: BattleFrame | null = null) {
    this.a = new Status(b?.a);
    this.b = new Status(b?.b);
    this.e = new BattleStatus(b?.e);
  }

  static init(a: Status, b: Status, e: BattleStatus): BattleFrame {
    const ret: BattleFrame = {
      a: new Status(a),
      b: new Status(b),
      e: e
    };
    ret.e.spd.a = ret.a.ATK_SPD;
    ret.e.spd.b = ret.b.ATK_SPD;
    return ret;
  }
}

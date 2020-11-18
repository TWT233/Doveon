import _ from "lodash";

class RoundCharaStatus {
  PA = 0;
  MA = 0;
  AA = 0;
  HD = 0;
  HR = 0;
  SD = 0;
  SR = 0;
  buffs = {
    ZHU: 0,
    AURA_DUN: false
  };
}

export class BattleStatus {
  spd = 0;
  a = new RoundCharaStatus();
  b = new RoundCharaStatus();
  s: "a" | "b" = "a";
  RFL = 0;
  userSet = false;
  isCri = false;
  isSki = false;
  isMC = false; // MYST_BRACELET

  constructor(b: BattleStatus | null = null) {
    if (b == null) return;
    this.spd = b.spd;
    this.a.buffs = _.cloneDeep(b.a.buffs);
    this.b.buffs = _.cloneDeep(b.b.buffs);
  }
}

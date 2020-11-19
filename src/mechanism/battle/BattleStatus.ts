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
    AURA_DUN: false,
    AURA_SHANG: false,
    AURA_REN: false
  };
}

export class BattleStatus {
  spd = {
    a: 0,
    b: 0
  };
  roundFlag = false;
  AURA_REN = 0; // A 出手则 +1 B出手则 -1，该值 == 3/-3时触发效果
  s: "a" | "b" = "a";
  a = new RoundCharaStatus();
  b = new RoundCharaStatus();
  RFL = 0;
  userSet = false;
  isCri = false;
  isSki = false;
  isMC = false; // MYST_BRACELET

  constructor(b: BattleStatus | null = null) {
    if (b == null) return;
    Object.assign(this.spd, b.spd);
    Object.assign(this.a.buffs, b.a.buffs);
    Object.assign(this.b.buffs, b.b.buffs);
  }
}

export class BattleStatus {
  spd: number;
  ATK = {
    P: 0,
    M: 0,
    A: 0
  };
  REG = {
    HP: 0,
    SHD: 0
  };
  DMG = {
    HP: 0,
    SHD: 0
  };
  isCri = false;
  isSki = false;
  isMC = false; // MYST_BRACELET

  constructor(b: BattleStatus | null = null) {
    this.spd = b?.spd || 0;
  }
}

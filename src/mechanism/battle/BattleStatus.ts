export class BattleStatus {
  spd: number;
  a = {
    PA: 0,
    MA: 0,
    AA: 0,
    HD: 0,
    HR: 0,
    SD: 0,
    SR: 0
  };
  b = {
    PA: 0,
    MA: 0,
    AA: 0,
    HD: 0,
    HR: 0,
    SD: 0,
    SR: 0
  };
  s: "a" | "b" = "a";
  RFL = 0;
  userSet = false;
  isCri = false;
  isSki = false;
  isMC = false; // MYST_BRACELET

  constructor(b: BattleStatus | null = null) {
    this.spd = b?.spd || 0;
  }
}

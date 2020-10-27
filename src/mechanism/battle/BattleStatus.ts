export class BattleStatus {
  spd: number;
  // calculate formula:
  //    dmg = atkK.* x (ATK_* + atkB.*) + atkC.*
  atkK = {
    PHY: 1.0,
    MAG: 1.0,
    ABS: 1.0
  };
  atkB = {
    PHY: 0,
    MAG: 0,
    ABS: 0
  };
  atkC = {
    PHY: 0,
    MAG: 0,
    ABS: 0
  };
  isCri = false;

  constructor(b: BattleStatus | null = null) {
    this.spd = b?.spd || 0;
  }
}

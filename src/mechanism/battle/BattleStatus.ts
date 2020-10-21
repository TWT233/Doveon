export class BattleStatus {
  spd: number;
  atkK = {
    PHY: 1.0,
    MAG: 1.0,
    ABS: 1.0
  };
  atkC = {
    PHY: 0,
    MAG: 0,
    ABS: 0
  };

  constructor(b: BattleStatus | null = null) {
    this.spd = b?.spd || 0;
  }
}

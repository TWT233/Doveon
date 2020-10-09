export class BattleStatus {
  spd: number;

  constructor(b: BattleStatus | null = null) {
    this.spd = b?.spd || 0;
  }
}

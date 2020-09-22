import { BattleStatus } from "@/mechanism/battle/BattleStatus";
import { BattleInfo } from "@/mechanism/battle/BattleInfo";

export function normalAttack(
  self: BattleStatus,
  target: BattleStatus,
  battle: BattleInfo
) {
  let log = "";

  let DEF_PHY = Math.floor(
    target.DEF_PHY * (1 - self.THR_PHY_P / 100) - self.THR_PHY_C
  );
  let DEF_MAG = Math.floor(
    target.DEF_MAG * (1 - self.THR_MAG_P / 100) - self.THR_MAG_C
  );

  let DMG_RATE_PHY = Math.floor(1 - DEF_PHY / (Math.abs(DEF_PHY) + 99));
  let DMG_RATE_MAG = 1 - DEF_MAG / (Math.abs(DEF_MAG) + 99);

  let DMG_PHY = self.ATK_PHY;
  let DMG_MAG = self.ATK_MAG;
  let DMG_ABS = self.ATK_ABS;

  log += "PHY:" + DMG_PHY + " MAG:" + DMG_MAG + " ABS:" + DMG_ABS;

  if (target.SHD > 0) {
    let MAX_DMG_MAG_SHD = (DMG_MAG * DMG_RATE_MAG + 2 * DMG_MAG) / 3;
    if (MAX_DMG_MAG_SHD > target.SHD) {
      DMG_MAG = (1 - target.SHD / MAX_DMG_MAG_SHD) * DMG_MAG;
      log += " target.SHD-=" + target.SHD;
      target.SHD = 0;
    } else {
      DMG_MAG = 0;
      log += " target.SHD-=" + MAX_DMG_MAG_SHD;
      target.SHD -= MAX_DMG_MAG_SHD;
    }

    let MAX_DMG_PHY_SHD = (DMG_PHY * DMG_RATE_PHY + 2 * DMG_PHY) / 2;
    if (MAX_DMG_PHY_SHD > target.SHD) {
      DMG_PHY = (1 - target.SHD / MAX_DMG_PHY_SHD) * DMG_PHY;
      log += " target.SHD-=" + target.SHD;
      target.SHD = 0;
    } else {
      DMG_PHY = 0;
      log += " target.SHD-=" + MAX_DMG_PHY_SHD;
      target.SHD -= MAX_DMG_PHY_SHD;
    }

    let MAX_DMG_ABS_SHD = DMG_ABS;
    if (MAX_DMG_ABS_SHD > target.SHD) {
      DMG_ABS = (1 - target.SHD / MAX_DMG_ABS_SHD) * DMG_ABS;
      log += " target.SHD-=" + target.SHD;
      target.SHD = 0;
    } else {
      DMG_ABS = 0;
      log += " target.SHD-=" + MAX_DMG_ABS_SHD;
      target.SHD -= MAX_DMG_ABS_SHD;
    }
  }

  let MAX_DMG_MAG_HP = DMG_MAG * DMG_RATE_MAG;
  if (MAX_DMG_MAG_HP > target.HP) {
    DMG_MAG = (1 - target.HP / MAX_DMG_MAG_HP) * DMG_MAG;
    log += " target.HP-=" + target.HP;
    target.HP = 0;
  } else {
    DMG_MAG = 0;
    log += " target.HP-=" + MAX_DMG_MAG_HP;
    target.HP -= MAX_DMG_MAG_HP;
  }

  let MAX_DMG_PHY_HP = DMG_PHY * DMG_RATE_PHY;
  if (MAX_DMG_PHY_HP > target.HP) {
    DMG_PHY = (1 - target.HP / MAX_DMG_PHY_HP) * DMG_PHY;
    log += " target.HP-=" + target.HP;
    target.HP = 0;
  } else {
    DMG_PHY = 0;
    log += " target.HP-=" + MAX_DMG_PHY_HP;
    target.HP -= MAX_DMG_PHY_HP;
  }

  let MAX_DMG_ABS_HP = DMG_ABS;
  if (MAX_DMG_ABS_HP > target.HP) {
    DMG_ABS = (1 - target.HP / MAX_DMG_ABS_HP) * DMG_ABS;
    log += " target.HP-=" + target.HP;
    target.HP = 0;
  } else {
    DMG_ABS = 0;
    log += " target.HP-=" + MAX_DMG_ABS_HP;
    target.HP -= MAX_DMG_ABS_HP;
  }

  return log;
}

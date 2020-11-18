export class Aura {
  [key: string]: boolean | Function;
  private SHI = false; // 启程之誓
  private XIN = false; // 启程之心
  private FENG = false; // 启程之风
  private BI = false; // 破壁之心
  private MO = false; // 破魔之心
  private DUN = false; // 复合护盾
  private XUE = false; // 鲜血渴望
  private SHANG = false; // 伤口恶化
  private SHEN = false; // 精神创伤
  private CI = false; // 铁甲尖刺
  private REN = false; // 忍无可忍
  private FEI = false; // 沸血之志
  private BO = false; // 波澜不惊
  private JU = false; // 飓风之力
  private HONG = false; // 红蓝双刺
  private JUE = false; // 绝对护盾

  constructor(val = false) {
    for (const key in this) {
      if (
        Object.prototype.hasOwnProperty.call(this, key) &&
        typeof this[key] == "boolean"
      ) {
        this[key.toString()] = val;
      }
    }
  }

  set(key: string): boolean {
    if (key in this && typeof this[key] == "boolean") {
      this[key] = true;
      return true;
    } else return false;
  }

  get(key: string): boolean {
    if (key in this && typeof this[key] == "boolean") {
      return this[key] as boolean;
    } else throw Error("keyNotFound: " + key);
  }

  load(value: Aura): Aura {
    if (value == null) return this;
    for (const key in value) {
      if (
        Object.prototype.hasOwnProperty.call(value, key) &&
        Object.prototype.hasOwnProperty.call(this, key)
      )
        this[key] = value[key];
    }
    return this;
  }

  toString(): string {
    const ret = Array<string>(0);
    let count = 0;
    for (const key in this) {
      if (Object.prototype.hasOwnProperty.call(this, key) && this[key]) {
        ret.push(key);
        count++;
      }
    }
    return count + " " + ret.join(" ");
  }
}

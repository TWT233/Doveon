export class Aura {
  [key: string]: boolean | Function;
  private SHI: boolean; // 启程之誓
  private XIN: boolean; // 启程之心
  private FENG: boolean; // 启程之风
  private BI: boolean; // 破壁之心
  private MO: boolean; // 破魔之心
  private SHANG: boolean; // 伤口恶化
  private SHEN: boolean; // 精神创伤
  private CI: boolean; // 铁甲尖刺
  private REN: boolean; // 忍无可忍
  private FEI: boolean; // 沸血之志
  private BO: boolean; // 波澜不惊
  private JU: boolean; // 飓风之力

  constructor(val = false) {
    this.SHI = val;
    this.XIN = val;
    this.FENG = val;
    this.BI = val;
    this.MO = val;
    this.SHANG = val;
    this.SHEN = val;
    this.CI = val;
    this.REN = val;
    this.FEI = val;
    this.BO = val;
    this.JU = val;
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

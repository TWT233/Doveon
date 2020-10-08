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
    if (key in this && typeof this[key] !== "function") {
      this[key] = true;
      return true;
    } else return false;
  }

  get(key: string): boolean {
    if (key in this && typeof this[key] !== "function") {
      return this[key] as boolean;
    } else throw Error("key not Found: " + key);
  }

  load(a: Aura) {
    if (a == null) return;
    for (const key in a) {
      if (a.hasOwnProperty(key) && typeof a[key] == "boolean")
        this[key] = a[key];
    }
  }

  toString(): string {
    const ret = Array<string>(0);
    let count = 0;
    for (const key in this) {
      if (this.hasOwnProperty(key) && this[key] == true) {
        ret.push(key);
        count++;
      }
    }
    return count + " " + ret.join(" ");
  }
}

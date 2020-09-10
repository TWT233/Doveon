import { Gear } from "@/mechanism/build/Gear";
import { Status } from "@/mechanism/build/Status";
import { Attribute } from "@/mechanism/build/Attribute";

export class Build {
  private _gears: Gear[];

  get status(): Status {
    let attr = new Attribute(0);

    for (const gearsKey in this._gears) {
      attr = attr.applyGears(this._gears[gearsKey]);
    }

    return attr.status;
  }

  constructor(gears: Gear[] = new Array<Gear>(4)) {
    this._gears = gears;
    for (const i in [0, 1, 2, 3]) {
      this._gears[i] = new Gear();
    }
  }

  get gears(): Gear[] {
    return this._gears;
  }

  set gears(value: Gear[]) {
    this._gears = value;
  }
}

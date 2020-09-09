import { Gear } from "@/mechanism/build/Gear";
import { Status } from "@/mechanism/build/Status";
import { Attribute } from "@/mechanism/build/Attribute";

export class Build {
  private _gears: Gear[];
  private _status: Status;

  get status(): Status {
    let attr = new Attribute(0);

    for (const gearsKey in this._gears) {
      attr = attr.applyGears(this._gears[gearsKey]);
    }

    this._status = this._status.applyAttr(attr);
    return this._status;
  }

  constructor(
    gears: Gear[] = new Array<Gear>(4),
    status: Status = new Status(0)
  ) {
    this._gears = gears;
    for (const i in [0, 1, 2, 3]) {
      this._gears[i] = new Gear();
    }
    this._status = status;
  }

  get gears(): Gear[] {
    return this._gears;
  }

  set gears(value: Gear[]) {
    this._gears = value;
  }
}

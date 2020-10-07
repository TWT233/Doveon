import { Gear } from "@/mechanism/build/Gear";

export class ArsenalEntry {
  [key: string]: string | Gear | Function;

  label: string;
  markColor: string;
  gear: Gear;

  constructor(label = "", markColor = "", gear: Gear = new Gear()) {
    this.label = label;
    this.markColor = markColor;
    this.gear = gear;
  }

  load(data: ArsenalEntry): ArsenalEntry {
    this.label = data.label;
    this.markColor = data.markColor;
    this.gear.load(data.gear);
    return this;
  }
}

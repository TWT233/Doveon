import { Status } from "@/mechanism/build/Status";
import { NPCCate } from "@/data/NPCCate";

export class NPC {
  type = "";
  lvl = 1;
  p = 1.0;

  constructor(type: string, lvl: number, p: number) {
    this.type = type;
    this.lvl = lvl;
    this.p = p;
  }

  get status(): Status {
    return (
      NPCCate.find(e => e.name == this.type)?.status(this.lvl, this.p) ||
      new Status()
    );
  }
}

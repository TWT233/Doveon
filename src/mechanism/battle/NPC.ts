import { Status } from "@/mechanism/build/Status";
import { NPCCate } from "@/data/NPCCate";
import { Aura } from "@/mechanism/build/Aura";

export class NPC {
  type = "";
  lvl = 1;
  p = 1.0;
  aura = new Aura();

  constructor(type: string, lvl: number, p: number, aura: Aura) {
    this.type = type;
    this.lvl = lvl;
    this.p = p;
    this.aura.load(aura);
  }

  get status(): Status {
    return (
      NPCCate.find(e => e.name == this.type)?.status(this.lvl, this.p) ||
      new Status()
    );
  }
}

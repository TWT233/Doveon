import { Status } from "@/mechanism/build/Status";
import { NPCCate } from "@/data/NPCCate";
import { Aura } from "@/mechanism/build/Aura";

export class NPC {
  name = "";
  lvl = 1;
  p = 1.0;
  aura = new Aura();

  constructor(type: string, lvl: number, p: number, aura: Aura) {
    this.name = type;
    this.lvl = lvl;
    this.p = p;
    this.aura.load(aura);
  }

  get status(): Status {
    return (
      NPCCate.find(e => e.name == this.name)?.status(this.lvl, this.p) ||
      new Status()
    );
  }
}

import { Status } from "@/mechanism/build/Status";
import { Build } from "@/mechanism/build/Build";
import { Skill } from "@/mechanism/battle/Skill";
import { CardCate } from "@/data/CardCate";
import { NPCCate } from "@/data/NPCCate";
import { NPC } from "@/mechanism/battle/NPC";
import { AuraCate } from "@/data/AuraCate";

export class Mob {
  private _name = "";
  private _type: "PC" | "NPC" | "" = "";
  private _skills: Skill[] = new Array<Skill>(0);
  private readonly _status: Status;

  load(value: Mob): Mob {
    this._name = value._name;
    this._type = value._type;
    this.status = value._status;
    this._skills.splice(0, this._skills.length);
    value._skills.forEach(e => this._skills.push(e));
    return this;
  }

  static genMob(name: string, type: "PC" | "NPC" | "", data: Build | NPC): Mob {
    let ret: Mob;
    if (data instanceof Build) {
      // gen from build
      ret = new Mob(name, type, data.status);
      CardCate.forEach(e => {
        if (e.name == data.card.name)
          e.skills.forEach(se => ret.skills.push(se));
      });
      AuraCate.forEach(e => {
        if (data.aura[e.name]) e.skills.forEach(se => ret.skills.push(se));
      });
    } else {
      // gen from NPC
      ret = new Mob(name, type, data.status);
      NPCCate.forEach(e => {
        if (e.name == data.name) e.skills.forEach(se => ret.skills.push(se));
      });
      AuraCate.forEach(e => {
        if (data.aura[e.name]) e.skills.forEach(se => ret.skills.push(se));
      });
    }
    // TODO:ADD NPC/S+A
    return ret;
  }

  constructor(name: string, type: "PC" | "NPC" | "", status: Status) {
    this._name = name;
    this._type = type;
    this._status = new Status(status);
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get type(): "PC" | "NPC" | "" {
    return this._type;
  }

  set type(value: "PC" | "NPC" | "") {
    this._type = value;
  }

  get skills(): Skill[] {
    return this._skills;
  }

  set skills(value: Skill[]) {
    this._skills = value;
  }

  get status(): Status {
    return this._status;
  }

  set status(value: Status) {
    this._status.load(value);
  }
}

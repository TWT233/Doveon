import { DynStatus } from "@/mechanism/battle/DynStatus";
import { Status } from "@/mechanism/build/Status";
import { Build } from "@/mechanism/build/Build";
import { Aura } from "@/mechanism/build/Aura";
import { Skill } from "@/mechanism/battle/Skill";

export class Mob {
  private _name = "";
  private _type: "PC" | "NPC" | "" = "";
  private _skills: Skill[] = new Array<Skill>(0);
  private readonly _status: DynStatus;

  load(value: Mob): Mob {
    this._name = value._name;
    this._type = value._type;
    this.status = value._status;
    this._skills.splice(0, this._skills.length);
    value._skills.forEach(e => this._skills.push(e));
    return this;
  }

  static genMob(
    name: string,
    type: "PC" | "NPC" | "",
    data: Build | { status: Status; aura: Aura }
  ): Mob | null {
    let ret = null;
    if (data instanceof Build) {
      ret = new Mob(name, type, data.status);
    }
    // TODO:ADD NPC/S+A
    return ret;
  }

  constructor(
    name: string,
    type: "PC" | "NPC" | "",
    status: DynStatus | Status
  ) {
    this._name = name;
    this._type = type;
    this._status = new DynStatus(status);
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

  get status(): DynStatus {
    return this._status;
  }

  set status(value: DynStatus) {
    this._status.load(value);
  }
}

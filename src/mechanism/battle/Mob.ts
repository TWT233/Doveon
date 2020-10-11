import { DynStatus } from "@/mechanism/battle/DynStatus";
import { BattleFrame } from "@/mechanism/battle/BattleFrame";

export type Skill = {
  name: string;
  type: string;
  run: (b: BattleFrame, s: "a" | "b") => BattleFrame;
};

export class Mob {
  private _name: string;
  private _type: "PC" | "NPC" | "";
  private _skills: Skill[] = [];
  private readonly _status: DynStatus;

  load(value: Mob): Mob {
    this._name = value._name;
    this._type = value._type;
    this.status = value._status;
    this._skills.splice(0, this._skills.length);
    value._skills.forEach(e => this._skills.push(e));
    return this;
  }

  constructor(name: string, type: "PC" | "NPC" | "", status: DynStatus) {
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

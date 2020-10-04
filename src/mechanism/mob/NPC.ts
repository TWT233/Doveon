import { Mob } from "@/mechanism/mob/Mob";
import { Aura } from "@/mechanism/build/Aura";

export interface NPC extends Mob {
  lvl: number;
  p: number;
  aura: Aura;
}

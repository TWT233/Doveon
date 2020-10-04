import { Mob } from "@/mechanism/mob/Mob";
import { Build } from "@/mechanism/build/Build";

export interface PC extends Mob {
  build: Build;
}

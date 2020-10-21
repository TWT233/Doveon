<template>
  <v-textarea></v-textarea>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Mob } from "@/mechanism/battle/Mob";
import { Status } from "@/mechanism/build/Status";

@Component({})
export default class EditorMobStatus extends Vue {
  getMob(): Mob {
    return new Mob("", "PC", new Status());
  }
}
</script>

<style scoped></style>

<template>
  <v-card>
    <v-card-title>
      LogView
    </v-card-title>
    <v-card-text>
      <template v-if="battleLog != null">
        <template v-for="(item, i) in battleLog">
          {{ item.toString() }}<br :key="i" />
        </template>
      </template>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action } from "@/mechanism/battle/Action";

@Component({})
export default class LogView extends Vue {
  @Prop() battleLog!: Array<Action>;
}
</script>

<style scoped></style>

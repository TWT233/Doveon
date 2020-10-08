<template>
  <v-card>
    <v-card-title>
      BuildView
    </v-card-title>
    <v-card-text>
      Suit: {{ value.suit.weapon.name }} | {{ value.suit.hand.name }} |
      {{ value.suit.body.name }} | {{ value.suit.head.name }}
      <br />
      Card: {{ value.card.name }}@{{ value.card.slotCount }}

      (Lv.{{ value.card.lvl }}/{{ value.card.maxLvl }})
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Build } from "@/mechanism/build/Build";

@Component({})
export default class ViewBuild extends Vue {
  @Prop() value!: Build;
}
</script>

<style scoped></style>

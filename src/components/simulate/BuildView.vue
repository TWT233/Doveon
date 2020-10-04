<template>
  <v-card>
    <v-card-title>
      BuildView
    </v-card-title>
    <v-card-text>
      {{ build.gears[0].name }}
      {{ build.gears[1].name }}
      {{ build.gears[2].name }}
      {{ build.gears[3].name }}
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Build } from "@/mechanism/build/Build";

@Component({})
export default class BuildView extends Vue {
  get build(): Build {
    return this.$store.state.build;
  }
}
</script>

<style scoped></style>

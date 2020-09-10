<template>
  <v-card>
    <v-card-title>Panel</v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="1">
            <v-btn color="primary" @click="onSave()">Save</v-btn>
          </v-col>
          <v-col cols="1">
            <v-btn @click="onLoad()">Load</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Panel extends Vue {
  onSave() {
    this.$emit("panel-save");
  }

  onLoad() {
    this.$emit("panel-load");
  }
}
</script>

<style scoped></style>

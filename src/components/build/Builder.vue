<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <StatusView :status="build.status"></StatusView>
      </v-col>
      <v-col>
        <v-container>
          <v-row>
            <v-col cols="12">
              <GearSelect :gears="gears"></GearSelect>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <PtsEditor :pts="pts"></PtsEditor>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GearSelect from "@/components/build/GearSelect.vue";
import StatusView from "@/components/build/StatusView.vue";
import { Gear } from "@/mechanism/build/Gear";
import { Build } from "@/mechanism/build/Build";
import PtsEditor from "@/components/build/PtsEditor.vue";
import { Pts } from "@/mechanism/build/Pts";

@Component({ components: { PtsEditor, GearSelect, StatusView } })
export default class Builder extends Vue {
  build: Build = new Build();

  get gears(): Gear[] {
    return this.build.gears;
  }

  get pts(): Pts {
    return this.build.pts;
  }
}
</script>

<style scoped></style>

<template>
  <v-container>
    <v-row>
      <v-col lg="3" cols="12">
        <StatusView :status="build.status"></StatusView>
      </v-col>
      <v-col lg="6" cols="12">
        <GearSelect :gears="gears"></GearSelect>
      </v-col>
      <v-col lg="3" cols="12">
        <v-row>
          <v-col cols="12"> <PtsEditor :pts="pts"></PtsEditor></v-col>
          <v-col cols="12">
            <Panel @panel-save="onSave()" @panel-load="onLoad()"></Panel>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbarShow" :timeout="1000" :bottom="true">
      {{ snackbarText }}
    </v-snackbar>
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
import Panel from "@/components/build/Panel.vue";

@Component({ components: { Panel, PtsEditor, GearSelect, StatusView } })
export default class Builder extends Vue {
  build: Build = new Build();

  snackbarText = "";
  snackbarShow = false;

  get gears(): Gear[] {
    return this.build.gears;
  }

  get pts(): Pts {
    return this.build.pts;
  }

  onSave() {
    if (!window.localStorage) {
      this.snackbarText = "LocalStorage not supported";
      this.snackbarShow = true;
      throw Error("LocalStorage not supported");
    }
    this.snackbarText = "Saving...";
    this.snackbarShow = true;
    window.localStorage["build"] = JSON.stringify(this.build);
  }

  onLoad() {
    if (!window.localStorage) {
      this.snackbarText = "LocalStorage not supported";
      this.snackbarShow = true;
      throw Error("LocalStorage not supported");
    }

    if (window.localStorage.getItem("build") === null) {
      this.snackbarText = "No Data";
      this.snackbarShow = true;
    } else {
      this.snackbarText = "Loading...";
      this.snackbarShow = true;
      this.loadData(this.build, JSON.parse(window.localStorage["build"]));
    }
  }

  // hard copy newData into oldData, idk how to make this better now
  private loadData(oldData: any, newData: any) {
    for (const key in newData) {
      if (Array.isArray(newData[key])) {
        for (let i = 0; i < newData[key].length; ++i) {
          if (typeof newData[key][i] === "object") {
            this.loadData(oldData[key][i], newData[key][i]);
          } else oldData[key][i] = newData[key][i];
        }
      } else if (typeof newData[key] === "object") {
        this.loadData(oldData[key], newData[key]);
      } else {
        oldData[key] = newData[key];
      }
    }
  }
}
</script>

<style scoped></style>

<template>
  <v-container>
    <v-row>
      <v-col lg="3" cols="12">
        <StatusView></StatusView>
      </v-col>
      <v-col lg="6" cols="12">
        <GearSelect></GearSelect>
      </v-col>
      <v-col lg="3" cols="12">
        <v-row>
          <v-col cols="12"> <PtsEditor></PtsEditor></v-col>
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
import { Build } from "@/mechanism/build/Build";
import PtsEditor from "@/components/build/PtsEditor.vue";
import Panel from "@/components/build/Panel.vue";

@Component({ components: { Panel, PtsEditor, GearSelect, StatusView } })
export default class Builder extends Vue {
  build: Build = this.$store.state.build;

  snackbarText = "";
  snackbarShow = false;

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
      this.build.load(JSON.parse(window.localStorage["build"]));
    }
  }
}
</script>

<style scoped></style>

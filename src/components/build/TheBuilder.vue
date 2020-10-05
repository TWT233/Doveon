<template>
  <v-container>
    <v-row>
      <v-col lg="3" cols="12">
        <StatusView></StatusView>
      </v-col>
      <v-col lg="9" cols="12">
        <v-row>
          <v-col cols="12"> <GearSelect></GearSelect> </v-col>
          <v-col lg="4" cols="12">
            <v-row>
              <v-col cols="12"><PtsEditor></PtsEditor></v-col>
              <v-col cols="12"><CardSelect></CardSelect></v-col>
            </v-row>
          </v-col>
          <v-col lg="4" cols="12"> <AuraSelect></AuraSelect></v-col>
          <v-col lg="4" cols="12">
            <Panel @panel-save="onSave()" @panel-load="onLoad()"></Panel>
          </v-col>
          <v-col lg="4" cols="12"> <Arsenal></Arsenal> </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EditorGear from "@/components/build/EdtiorGear.vue";
import ViewerStatus from "@/components/build/ViewerStatus.vue";
import { Build } from "@/mechanism/build/Build";
import Arsenal from "@/components/build/TheArsenal.vue";
import EditorPts from "@/components/build/EditorPts.vue";
import ThePanelBuild from "@/components/build/ThePanelBuild.vue";
import EditorAura from "@/components/build/EditorAura.vue";
import EditorCard from "@/components/build/EditorCard.vue";

@Component({
  components: {
    CardSelect: EditorCard,
    AuraSelect: EditorAura,
    Panel: ThePanelBuild,
    PtsEditor: EditorPts,
    GearSelect: EditorGear,
    StatusView: ViewerStatus,
    Arsenal
  }
})
export default class Builder extends Vue {
  build: Build = this.$store.state.build;

  onSave() {
    if (!window.localStorage) {
      throw Error("LocalStorage not supported");
    }
    window.localStorage["build"] = JSON.stringify(this.build);
  }

  onLoad() {
    if (!window.localStorage) {
      throw Error("LocalStorage not supported");
    }

    if (window.localStorage.getItem("build") === null) {
      throw Error("no `build` in LocalStorage");
    } else {
      this.build.load(JSON.parse(window.localStorage["build"]));
    }
  }
}
</script>

<style scoped></style>

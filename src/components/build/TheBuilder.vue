<template>
  <v-container>
    <v-row>
      <v-col lg="3" cols="12">
        <ViewerStatus></ViewerStatus>
      </v-col>
      <v-col lg="9" cols="12">
        <v-row>
          <v-col cols="12"> <EditorGear></EditorGear> </v-col>
          <v-col lg="4" cols="12">
            <v-row>
              <v-col cols="12"><EditorPts></EditorPts></v-col>
              <v-col cols="12"><EditorCard></EditorCard></v-col>
            </v-row>
          </v-col>
          <v-col lg="4" cols="12">
            <EditorAura v-model="aura"></EditorAura>
          </v-col>
          <v-col lg="4" cols="12">
            <ThePanelBuild
              @panel-save="onSave()"
              @panel-load="onLoad()"
            ></ThePanelBuild>
          </v-col>
          <v-col lg="4" cols="12"> <Arsenal></Arsenal> </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ViewerStatus from "@/components/build/ViewerStatus.vue";
import { Build } from "@/mechanism/build/Build";
import Arsenal from "@/components/build/TheArsenal.vue";
import ThePanelBuild from "@/components/build/ThePanelBuild.vue";
import EditorAura from "@/components/build/EditorAura.vue";
import EditorCard from "@/components/build/EditorCard.vue";
import EditorGear from "@/components/build/EdtiorGear.vue";
import EditorPts from "@/components/build/EditorPts.vue";
import { Aura } from "@/mechanism/build/Aura";
import { Card } from "@/mechanism/build/Card";

@Component({
  components: {
    EditorPts,
    EditorCard,
    EditorAura,
    ViewerStatus,
    ThePanelBuild,
    EditorGear,
    Arsenal
  }
})
export default class Builder extends Vue {
  build: Build = this.$store.state.build;

  get aura(): Aura {
    return this.$store.state.build.aura;
  }

  set aura(obj: Aura) {
    this.$store.commit("setBuildAura", obj);
  }

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
      this.$store.commit("setBuild", JSON.parse(window.localStorage["build"]));
    }
  }
}
</script>

<style scoped></style>

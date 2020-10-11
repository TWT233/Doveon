<template>
  <v-container>
    <v-row>
      <v-col lg="3" cols="12"><ViewStatus v-model="status"/></v-col>
      <v-col lg="9" cols="12">
        <v-row>
          <v-col lg="3" cols="12"><EditorSuit v-model="suit"/></v-col>
          <v-col lg="5" cols="12"><EditorAura v-model="aura"/></v-col>
          <v-col lg="4" cols="12">
            <v-row dense>
              <v-col cols="12"><EditorPts v-model="pts"/></v-col>
              <v-col cols="12"><EditorCard v-model="card"/></v-col>
            </v-row>
          </v-col>
          <v-col lg="4" cols="12"> <TheArsenal /> </v-col>
          <v-col lg="4" cols="12">
            <ThePanelBuild @save="onSave()" @load="onLoad()" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EditorAura from "@/components/build/EditorAura.vue";
import EditorCard from "@/components/build/EditorCard.vue";
import EditorSuit from "@/components/build/EditorSuit.vue";
import EditorPts from "@/components/build/EditorPts.vue";
import ViewStatus from "@/components/build/ViewStatus.vue";
import TheArsenal from "@/components/build/TheArsenal.vue";
import ThePanelBuild from "@/components/build/ThePanelBuild.vue";
import { Aura } from "@/mechanism/build/Aura";
import { Card } from "@/mechanism/build/Card";
import { Pts } from "@/mechanism/build/Pts";
import { Status } from "@/mechanism/build/Status";
import { Suit } from "@/mechanism/build/Suit";

@Component({
  components: {
    EditorPts,
    EditorCard,
    EditorAura,
    ViewStatus,
    ThePanelBuild,
    EditorSuit,
    TheArsenal
  }
})
export default class Builder extends Vue {
  get suit(): Suit {
    return this.$store.state.build.suit;
  }

  set suit(obj: Suit) {
    this.$store.commit("setBuildSuit", obj);
  }

  get aura(): Aura {
    return this.$store.state.build.aura;
  }

  set aura(obj: Aura) {
    this.$store.commit("setBuildAura", obj);
  }

  get card(): Card {
    return this.$store.state.build.card;
  }

  set card(obj: Card) {
    this.$store.commit("setBuildCard", obj);
  }

  get pts(): Pts {
    return this.$store.state.build.pts;
  }

  set pts(obj: Pts) {
    this.$store.commit("setBuildPts", obj);
  }

  get status(): Status {
    return this.$store.state.build.status;
  }

  onSave() {
    if (!window.localStorage) {
      throw Error("LocalStorage not supported");
    }
    window.localStorage["build"] = JSON.stringify(this.$store.state.build);
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

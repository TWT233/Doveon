<i18n>
zh_CN:
  Arsenal: 装备库
  AddGear: 添加装备
</i18n>

<template>
  <v-card>
    <v-card-title>{{ $t("Arsenal") }}</v-card-title>
    <v-card-text>
      <v-row v-for="(item, i) in arsenal" :key="i">
        <v-col cols="">
          <EditorArsenalEntry
            :value="arsenal[i]"
            @input="val => onEditAE(val, i)"
            colored
            labeled
          />
        </v-col>
        <v-col cols="auto">
          <v-btn icon @click="onEquip(item)">
            <v-icon>mdi-sword</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn icon @click="onDelete(i)"><v-icon>delete</v-icon></v-btn>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" text @click="onAdd()">
        {{ $t("AddGear") }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import EditorArsenalEntry from "@/components/build/EditorArsenalEntry.vue";
import { Gear } from "@/mechanism/build/Gear";
import { ArsenalEntry } from "@/mechanism/build/ArsenalEntry";
import { GearCate } from "@/data/GearCate";
import _ from "lodash";
import { colors } from "vuetify/lib";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { EditorArsenalEntry }
})
export default class TheArsenal extends Vue {
  mounted() {
    if (!window.localStorage.getItem("arsenal")) return;
    this.$store.commit(
      "setArsenal",
      JSON.parse(window.localStorage.getItem("arsenal") || "")
    );
  }

  get arsenal(): ArsenalEntry[] {
    return this.$store.state.arsenal;
  }

  saveArsenal() {
    window.localStorage.setItem(
      "arsenal",
      JSON.stringify(this.$store.state.arsenal)
    );
  }

  onDelete(pos: number) {
    this.$store.commit("arsenalRemove", pos);
    this.saveArsenal();
  }

  onEquip(val: ArsenalEntry) {
    const tmp = _.cloneDeep(this.$store.state.build.suit);
    const type = GearCate.find(e => e.name == val.gear.name)?.type;
    this.$store.commit("setBuildSuit", type && (tmp[type] = val.gear) && tmp);
  }

  onAdd() {
    this.$store.commit(
      "arsenalPush",
      new ArsenalEntry("", colors.grey.darken2, new Gear())
    );
  }

  onEditAE(val: ArsenalEntry, i: number) {
    this.$store.commit("setArsenalEntry", { pos: i, val: val });
    this.saveArsenal();
  }
}
</script>

<style scoped></style>

<i18n>
zh_CN:
  Arsenal: 装备库
  AddGear: 添加装备
</i18n>

<template>
  <v-card>
    <v-card-title>{{ $t("TheArsenal.vue") }}</v-card-title>
    <v-card-text>
      <v-row v-for="(item, i) in arsenal" :key="i">
        <v-col cols="">
          <SingleGearSelect
            :value="arsenal[i]"
            @input="val => onEditFinish(val, item)"
            editable-color="true"
            editable-label="true"
          ></SingleGearSelect>
        </v-col>
        <v-col cols="auto">
          <v-btn icon @click="onEquipGear(item.gear)"
            ><v-icon>mdi-sword</v-icon></v-btn
          >
        </v-col>
        <v-col cols="auto">
          <v-btn icon @click="onRemoveGear(i)"><v-icon>delete</v-icon></v-btn>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="onAddGear()">{{ $t("AddGear") }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ArsenalEntry, Gear } from "@/mechanism/build/Gear";
import SingleGearSelect from "@/components/build/EditorGearSingle.vue";
import { colors } from "vuetify/lib";
import { GearCateList } from "@/data/GearCateList";

@Component({
  components: { SingleGearSelect }
})
export default class Arsenal extends Vue {
  mounted() {
    if (window.localStorage.getItem("arsenal") == null) {
      return;
    }
    this.loadArsenal(JSON.parse(window.localStorage.getItem("arsenal") || ""));
  }
  get arsenal(): ArsenalEntry[] {
    return this.$store.state.arsenal;
  }

  loadArsenal(data: ArsenalEntry[]) {
    this.$store.commit("arsenalLoad", data);
  }

  saveArsenal() {
    window.localStorage.setItem(
      "arsenal",
      JSON.stringify(this.$store.state.arsenal)
    );
  }

  onRemoveGear(pos: number) {
    this.$store.commit("arsenalRemove", pos);
    this.saveArsenal();
  }

  onEquipGear(g: Gear) {
    const buildGears = this.$store.state.build.gears;
    const type = GearCateList.find(e => e.name == g.name)?.type;
    if (type)
      buildGears[["weapon", "hand", "body", "head"].indexOf(type)].load(g);
  }

  onAddGear() {
    this.$store.commit(
      "arsenalPush",
      new ArsenalEntry("", colors.grey.darken2, new Gear())
    );
  }

  onEditFinish(val: ArsenalEntry, ori: ArsenalEntry) {
    ori.load(val);
    this.saveArsenal();
  }
}
</script>

<style scoped></style>

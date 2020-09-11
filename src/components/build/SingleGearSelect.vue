<i18n>
zh_CN:
  weapon: 武器
  hand: 饰品
  body: 护甲
  head: 头饰
  Level: 等级
</i18n>

<template>
  <v-card outlined>
    <v-card-text>
      <v-row>
        <v-col>
          <v-select
            v-model="gear.name"
            :items="availableGearList"
            :label="$t(type)"
          ></v-select>
        </v-col>
        <v-col cols="4">
          <v-text-field
            :label="$t('Level')"
            v-model.number="gear.lvl"
            type="number"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="P1"
            v-model.number="gear.p[0]"
            type="number"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            label="P2"
            v-model.number="gear.p[1]"
            type="number"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            label="P3"
            v-model.number="gear.p[2]"
            type="number"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            label="P4"
            v-model.number="gear.p[3]"
            type="number"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Gear } from "@/mechanism/build/Gear";
import { GearCateList } from "@/data/GearCateList";

@Component({})
export default class SingleGearSelect extends Vue {
  @Prop(String) type!: string;
  @Prop(Gear) gear!: Gear;

  get availableGearList() {
    const ret = new Array<string>(0);
    for (const key in GearCateList) {
      if (GearCateList[key].type == this.type) {
        ret.push(this.$t("GearCate." + GearCateList[key].name).toString());
      }
    }
    return ret;
  }
}
</script>

<style scoped></style>

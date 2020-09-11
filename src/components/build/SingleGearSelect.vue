<i18n>
zh_CN:
  NONE: 空
  SWORD: 探险者之剑
  SHORT_BOW: 探险者短弓
  STAFF: 探险者短杖
  BLADE: 狂信者的荣誉之刃
  ASS_BOW: 反叛者的刺杀弓
  GLOVE: 探险者手套
  BRACELET: 命师的传承手环
  PLATE: 探险者铁甲
  LEATHER: 探险者皮甲
  CLOTH: 探险者布甲
  CLOAK: 旅法师的灵光袍
  THORN: 战线支撑者的荆棘重甲
  SCARF: 探险者头巾
  ASTRO: 占星师的发饰
</i18n>
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
    const ret = new Array<{ text: string; value: string }>(0);
    for (const key in GearCateList) {
      if (GearCateList[key].type == this.type) {
        ret.push({
          text: this.$t(GearCateList[key].name).toString(),
          value: GearCateList[key].name
        });
      }
    }
    return ret;
  }
}
</script>

<style scoped></style>

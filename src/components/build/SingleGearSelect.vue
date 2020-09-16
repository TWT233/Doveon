<i18n>
zh_CN:
  NONE: 空
  SWORD: 探险者之剑
  SHORT_BOW: 探险者短弓
  STAFF: 探险者短杖
  BLADE: 狂信者的荣誉之刃
  ASSBOW: 反叛者的刺杀弓
  DAGGER: 幽梦匕首
  GLOVE: 探险者手套
  BRACELET: 命师的传承手环
  PLATE: 探险者铁甲
  LEATHER: 探险者皮甲
  CLOTH: 探险者布甲
  CLOAK: 旅法师的灵光袍
  THORN: 战线支撑者的荆棘重甲
  SCARF: 探险者头巾
  TIARA: 占星师的发饰
</i18n>
<i18n>
zh_CN:
  weapon: 武器
  hand: 饰品
  body: 护甲
  head: 头饰
  Level: 等级
  Enchanted: 神秘
  GearEdit: 编辑装备
  Done: 完成
</i18n>

<template>
  <v-row>
    <v-col>
      <v-btn
        @click.stop="onShowDialog()"
        dark
        large
        :color="value.markColor || 'secondary'"
      >
        {{ value.label || $t(value.gear.name) }} {{ "Lv." + value.gear.lvl
        }}<br />
        [{{ value.gear.p[0] }} {{ value.gear.p[1] }} {{ value.gear.p[2] }}
        {{ value.gear.p[3] }}]
        <v-icon v-if="value.gear.isEnchanted">military_tech</v-icon>
      </v-btn>
    </v-col>
    <v-dialog v-model="showDialog" max-width="500">
      <v-card>
        <v-card-title>{{ $t("GearEdit") }}</v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="7">
                <v-select
                  v-model="gear.name"
                  :items="availableGearList"
                  :label="TypeList"
                ></v-select>
              </v-col>
              <v-col cols="2">
                <v-text-field
                  :label="$t('Level')"
                  v-model.number="gear.lvl"
                  type="number"
                ></v-text-field>
              </v-col>
              <v-col cols="3">
                <v-checkbox v-model="gear.isEnchanted" :label="$t('Enchanted')">
                </v-checkbox>
              </v-col>
            </v-row>
            <v-row>
              <v-col v-for="i in 4" :key="'p' + i">
                <v-text-field
                  :label="'P' + i"
                  v-model.number="gear.p[i - 1]"
                  type="number"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="primary" @click="onDone()">
            {{ $t("Done") }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ArsenalEntry } from "@/mechanism/build/Gear";
import { GearCateList } from "@/data/GearCateList";

@Component({})
export default class SingleGearSelect extends Vue {
  showDialog = false;
  @Prop({ default: () => [] }) types!: string[];
  @Prop() value!: ArsenalEntry;
  localASE: ArsenalEntry = {
    label: this.value.label,
    gear: this.value.gear,
    markColor: this.value.markColor
  };

  get gear() {
    return this.value.gear;
  }

  get availableGearList() {
    const ret = new Array<{ text: string; value: string }>(0);
    for (const key in GearCateList) {
      if (
        this.types.length == 0 ||
        this.types.find(e => e == GearCateList[key].type)
      ) {
        ret.push({
          text: this.$t(GearCateList[key].name).toString(),
          value: GearCateList[key].name
        });
      }
    }
    return ret;
  }

  get TypeList() {
    const ret = new Array<string>(0);
    this.types.forEach(e => ret.push(this.$t(e).toString()));
    return ret.join(" / ");
  }

  onShowDialog() {
    this.localASE.gear.load(this.value.gear);
    this.showDialog = true;
  }

  onDone() {
    this.showDialog = false;
    this.$emit("input", this.localASE);
  }
}
</script>

<style scoped></style>

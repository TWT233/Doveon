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
  Label: 自定义标签
  Enchanted: 神秘
  GearEdit: 编辑装备
  Done: 完成
</i18n>

<template>
  <div>
    <v-btn
      @click.stop="onShowDialog()"
      dark
      large
      :color="value.markColor || 'secondary'"
    >
      {{ value.label || $t(oGear.name) }} {{ "Lv." + oGear.lvl }}<br />
      [{{ oGear.p[0] }} {{ oGear.p[1] }} {{ oGear.p[2] }} {{ oGear.p[3] }}]
      <v-icon v-if="value.gear.isEnchanted">military_tech</v-icon>
    </v-btn>
    <v-dialog v-model="showDialog" max-width="500">
      <v-card>
        <v-card-title>
          <v-col v-if="editableLabel">
            <v-text-field :label="$t('Label')" v-model="gear.label">
            </v-text-field>
          </v-col>
          <v-col v-else> {{ $t("GearEdit") }}</v-col>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="7">
                <v-select
                  v-model="iGear.name"
                  :items="availableGearList"
                  :label="TypeList"
                ></v-select>
              </v-col>
              <v-col cols="2">
                <v-text-field
                  :label="$t('Level')"
                  v-model.number="iGear.lvl"
                  type="number"
                ></v-text-field>
              </v-col>
              <v-col cols="3">
                <v-checkbox
                  v-model="iGear.isEnchanted"
                  :label="$t('Enchanted')"
                >
                </v-checkbox>
              </v-col>
            </v-row>
            <v-row>
              <v-col v-for="i in 4" :key="'p' + i">
                <v-text-field
                  :label="'P' + i"
                  v-model.number="iGear.p[i - 1]"
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
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { ArsenalEntry } from "@/mechanism/build/Gear";
import { GearCateList } from "@/data/GearCateList";

@Component({})
export default class EditorArsenalEntry extends Vue {
  showDialog = false;
  @Prop({ default: () => [] }) types!: string[];
  @Prop() value!: ArsenalEntry;
  @Prop({ default: false }) editableLabel!: boolean;
  @Prop({ default: false }) editableColor!: boolean;
  gear: ArsenalEntry = new ArsenalEntry();

  mounted() {
    this.gear.load(this.value);
  }

  get oGear() {
    return this.value.gear;
  }

  get iGear() {
    return this.gear.gear;
  }

  @Watch("value", { deep: true })
  onValueChanged(val: ArsenalEntry) {
    this.gear.load(val);
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
    this.gear.gear.load(this.value.gear);
    this.showDialog = true;
  }

  onDone() {
    this.showDialog = false;
    this.$emit("input", this.gear);
  }
}
</script>

<style scoped></style>
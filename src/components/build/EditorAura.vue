<i18n>
zh_CN:
  Aura: 光环天赋
  SHI: 启程之誓
  XIN: 启程之心
  FENG: 启程之风
  BI: 破壁之心
  MO: 破魔之心
  SHANG: 伤口恶化
  SHEN: 精神创伤
  CI: 铁甲尖刺
  FEI: 沸血之志
  BO: 波澜不惊
  JU: 飓风之力
</i18n>

<template>
  <v-card>
    <v-card-title>{{ $t("Aura") }}</v-card-title>
    <v-card-text>
      <v-row dense>
        <v-col v-for="(item, i) in aura" :key="i + item.toString()" cols="auto">
          <v-checkbox v-model="aura[i]" :label="$t(i)"> </v-checkbox>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Aura } from "@/mechanism/build/Aura";

@Component({})
export default class EditorAura extends Vue {
  @Prop() value!: Aura;
  aura: Aura = new Aura();

  @Watch("value", { deep: true })
  onValueChanged() {
    this.aura.load(this.value);
  }

  @Watch("aura", { deep: true })
  onLocalVarChanged() {
    this.$emit("input", this.aura);
  }

  mounted() {
    this.onValueChanged();
  }
}
</script>

<style scoped></style>

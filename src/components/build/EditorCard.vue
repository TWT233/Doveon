<i18n src="@/data/i18n/CardTrans.yaml"></i18n>
<i18n>
zh_CN:
  Card: 角色卡片
  currentLvl: 当前等级
  maxLvl: 最高等级
  slotCount: 技能位
</i18n>

<template>
  <v-card>
    <v-card-title>{{ $t("Card") }}</v-card-title>
    <v-card-text>
      <v-row dense>
        <v-col cols="4">
          <v-select
            v-model="local.name"
            :items="cardList"
            :label="$t('Card')"
          />
        </v-col>
        <v-col>
          <v-text-field
            :label="$t('currentLvl')"
            v-model.number="local.lvl"
            type="number"
          />
        </v-col>
        <v-col>
          <v-text-field
            :label="$t('maxLvl')"
            v-model.number="local.maxLvl"
            type="number"
          />
        </v-col>
        <v-col>
          <v-text-field
            :label="$t('slotCount')"
            v-model.number="local.slotCount"
            type="number"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Card } from "@/mechanism/build/Card";
import { CardCate } from "@/data/CardCate";

@Component({})
export default class EditorCard extends Vue {
  @Prop() value!: Card;
  local: Card = new Card();

  @Watch("value", { deep: true })
  onValueChanged() {
    this.local.load(this.value);
  }

  @Watch("local", { deep: true })
  onLocalChanged() {
    this.$emit("input", this.local);
  }

  mounted() {
    this.onValueChanged();
  }

  get cardList() {
    const ret = new Array<{ text: string; value: string }>(0);
    CardCate.forEach(e =>
      ret.push({ text: this.$t(e.name).toString(), value: e.name })
    );
    return ret;
  }
}
</script>

<style scoped></style>

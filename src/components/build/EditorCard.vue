<i18n>
zh_CN:
  MENG: 梦
  MO: 默
  AI: 艾
  LIN: 琳
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
            v-model="card.name"
            :items="cardList"
            :label="$t('Card')"
          ></v-select>
        </v-col>
        <v-col>
          <v-text-field
            :label="$t('currentLvl')"
            v-model.number="card.lvl"
            type="number"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            :label="$t('maxLvl')"
            v-model.number="card.maxLvl"
            type="number"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            :label="$t('slotCount')"
            v-model.number="card.slotCount"
            type="number"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Card, CardList } from "@/mechanism/build/Card";

@Component({})
export default class EditorCard extends Vue {
  @Prop() value!: Card;
  card: Card = new Card();

  @Watch("value", { deep: true })
  onValueChanged() {
    this.card.load(this.value);
  }

  @Watch("card", { deep: true })
  onLocalVarChanged() {
    this.$emit("input", this.card);
  }

  mounted() {
    this.onValueChanged();
  }

  get cardList() {
    const ret = new Array<{ text: string; value: string }>(0);
    for (const i in CardList) {
      ret.push({ text: this.$t(CardList[i]).toString(), value: CardList[i] });
    }
    return ret;
  }
}
</script>

<style scoped></style>

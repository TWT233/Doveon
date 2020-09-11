<i18n>
zh_CN:
  Points: 属性加点
  STR: 力量
  AGI: 敏捷
  INT: 智力
  VIT: 体魄
  MEN: 精神
  CON: 意志
</i18n>

<template>
  <v-card elevation="2">
    <v-card-title>{{ $t("Points") }}</v-card-title>
    <v-card-text>
      <v-container fluid>
        <v-row>
          <v-col xl="2" lg="4" cols="2" v-for="item in ptsKeys" :key="item">
            <v-text-field
              :label="$t(item)"
              v-model.number="pts[item]"
              type="number"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Pts } from "@/mechanism/build/Pts";

@Component({})
export default class PtsEditor extends Vue {
  @Prop(Pts) pts!: Pts;

  get ptsKeys(): string[] {
    return Object.keys(this.pts);
  }
}
</script>

<style scoped></style>

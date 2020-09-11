<i18n>
zh_CN:
  Simulator: 战斗模拟器
  WIP: 施工中
</i18n>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>{{ $t("Simulator") }}</v-card-title>
          <v-card-text>{{ $t("WIP") }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Simulator extends Vue {}
</script>

<style scoped></style>

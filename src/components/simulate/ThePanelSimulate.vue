<i18n>
zh_CN:
  Panel: 操作面板
  Save: 保存配装
  Load: 加载配装
  Run: 运行模拟
  StepNext: 步进
  Export: 导出配装
  ExportToIN: 导出为.in
  Close: 关闭
</i18n>

<template>
  <v-card>
    <v-card-title>{{ $t("Panel") }}</v-card-title>
    <v-card-text>
      <v-row>
        <v-col>
          <v-btn @click="$emit('load')">{{ $t("Load") }}</v-btn>
        </v-col>
        <v-col>
          <v-btn @click="$emit('run')">{{ $t("Run") }}</v-btn>
        </v-col>
        <v-col>
          <v-btn @click="$emit('next')">{{ $t("StepNext") }}</v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class ThePanelSimulate extends Vue {}
</script>

<style scoped></style>

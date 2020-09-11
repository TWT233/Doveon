<i18n>
zh_CN:
  Panel: 操作面板
  Save: 保存配置
  Load: 加载配置
</i18n>

<template>
  <v-card>
    <v-card-title>{{ $t("Panel") }}</v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="auto">
            <v-btn color="primary" @click="onSave()">{{ $t("Save") }}</v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn @click="onLoad()">{{ $t("Load") }}</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Panel extends Vue {
  onSave() {
    this.$emit("panel-save");
  }

  onLoad() {
    this.$emit("panel-load");
  }
}
</script>

<style scoped></style>

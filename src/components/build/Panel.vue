<i18n>
zh_CN:
  Panel: 操作面板
  Save: 保存配装
  Load: 加载配装
</i18n>

<template>
  <v-card>
    <v-card-title>{{ $t("Panel") }}</v-card-title>
    <v-card-actions>
      <v-btn color="primary" @click="onSave()">{{ $t("Save") }}</v-btn>
      <v-btn @click="onLoad()">{{ $t("Load") }}</v-btn>
    </v-card-actions>
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
  //Test Data Backup:
  //{"_gears":[{"_name":"STAFF","_lvl":69,"_p":[125,108,115,89]},{"_name":"BRACELET","_lvl":92,"_p":[116,94,66,63]},{"_name":"CLOAK","_lvl":100,"_p":[96,67,62,80]},{"_name":"ASTRO","_lvl":97,"_p":[59,71,64,60]}],"_pts":{"STR":1,"AGI":278,"INT":100,"VIT":1,"MEN":144,"CON":1}}
}
</script>

<style scoped></style>

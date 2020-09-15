<i18n>
zh_CN:
  Panel: 操作面板
  Save: 保存配装
  Load: 加载配装
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
          <v-btn color="primary" @click="onSave()">{{ $t("Save") }}</v-btn>
        </v-col>
        <v-col>
          <v-btn @click="onLoad()">{{ $t("Load") }}</v-btn>
        </v-col>
        <v-col>
          <v-btn @click="onExport()">{{ $t("Export") }}</v-btn>
          <v-dialog v-model="showExportDialog" max-width="600">
            <v-card>
              <v-card-title>{{ $t("ExportToIN") }}</v-card-title>
              <v-card-text>
                <pre>{{ inText }}</pre>
              </v-card-text>
              <v-card-actions>
                <v-btn text @click="showExportDialog = false">
                  {{ $t("Close") }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Gear } from "@/mechanism/build/Gear";

@Component({})
export default class Panel extends Vue {
  showExportDialog = false;
  inText = "";

  onSave() {
    this.$emit("panel-save");
  }

  onLoad() {
    this.$emit("panel-load");
  }
  //Test Data Backup:
  //{"_gears":[{"_name":"STAFF","_lvl":69,"_p":[125,108,115,89]},{"_name":"BRACELET","_lvl":92,"_p":[116,94,66,63]},{"_name":"CLOAK","_lvl":100,"_p":[96,67,62,80]},{"_name":"ASTRO","_lvl":97,"_p":[59,71,64,60]}],"_pts":{"STR":1,"AGI":278,"INT":100,"VIT":1,"MEN":144,"CON":1}}

  onExport() {
    const strQ = new Array<string>(0);
    strQ.push(this.$store.state.build.pts.toString());
    this.$store.state.build.gears.forEach((e: Gear) => {
      strQ.push(e.toString());
    });
    strQ.push(this.$store.state.build.aura.toString());
    this.inText = strQ.join("\n");
    this.showExportDialog = true;
  }
}
</script>

<style scoped></style>

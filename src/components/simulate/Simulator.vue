<i18n>
zh_CN:
  Simulator: 战斗模拟器
  WIP: 施工中
</i18n>

<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <TargetEditor></TargetEditor>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TargetEditor from "@/components/simulate/TargetEditor.vue";

@Component({
  components: { TargetEditor }
})
export default class Simulator extends Vue {}
</script>

<style scoped></style>

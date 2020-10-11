<i18n src="@/data/i18n/NPCTrans.yaml" />
<i18n>
zh_CN:
  Model: 种类
  Lvl: 等级
</i18n>

<template>
  <v-container>
    <v-row dense>
      <v-col>
        <v-select v-model="name" :items="NPCList" :label="$t('Model')" />
      </v-col>
      <v-col>
        <v-text-field v-model.number="lvl" :label="$t('Lvl')" type="number" />
      </v-col>
      <!--      <v-col>-->
      <!--        <v-text-field-->
      <!--          v-model.number="local.maxLvl"-->
      <!--          :label="$t('maxLvl')"-->
      <!--          type="number"-->
      <!--        />-->
      <!--      </v-col>-->
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { NPCCate } from "@/data/NPCCate";

@Component({})
export default class EditorMobNPC extends Vue {
  name = "";
  lvl = 1;
  p = 1.0;

  get NPCList() {
    const ret = new Array<{ value: string; text: string }>(0);
    NPCCate.forEach(e =>
      ret.push({ value: e.name, text: this.$t(e.name).toString() })
    );
    return ret;
  }
}
</script>

<style scoped></style>

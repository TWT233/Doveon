<i18n src="@/data/i18n/NPCTrans.yaml" />
<i18n>
zh_CN:
  Model: 种类
  Lvl: 等级
  p: 强化倍率
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
      <v-col>
        <v-text-field v-model.number="p" :label="$t('p')" type="number" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <EditorAuraLite v-model="aura" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { NPCCate } from "@/data/NPCCate";
import { Mob } from "@/mechanism/battle/Mob";
import { NPC } from "@/mechanism/battle/NPC";
import { Aura } from "@/mechanism/build/Aura";
import EditorAuraLite from "@/components/simulate/EditorAuraLite.vue";

@Component({
  components: { EditorAuraLite }
})
export default class EditorMobNPC extends Vue {
  name = "";
  lvl = 1;
  p = 1.0;
  aura = new Aura();

  get NPCList() {
    const ret = new Array<{ value: string; text: string }>(0);
    NPCCate.forEach(e =>
      ret.push({ value: e.name, text: this.$t(e.name).toString() })
    );
    return ret;
  }

  getMob(): Mob {
    return new Mob(
      this.name,
      "NPC",
      new NPC(this.name, this.lvl, this.p, this.aura).status
    );
  }
}
</script>

<style scoped></style>

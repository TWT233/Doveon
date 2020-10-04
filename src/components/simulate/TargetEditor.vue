<i18n>
zh_CN:
  Type: 种类
  Lvl: 等级
  p: 强化倍率
  TargetEditor: 目标编辑
</i18n>

<template>
  <v-card>
    <v-card-title>
      {{ $t("TargetEditor") }}
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col>
          <v-select
            :label="$t('Type')"
            v-model="type"
            :items="['Wooden']"
          ></v-select>
        </v-col>
        <v-col>
          <v-text-field
            :label="$t('Lvl')"
            v-model.number="lvl"
            type="number"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-select
            :label="$t('p')"
            v-model.number="p"
            :items="[1, 1.3, 1.5, 2]"
          ></v-select>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Wooden } from "@/mechanism/mob/Wooden";

@Component({})
export default class TargetEditor extends Vue {
  type = "";
  lvl = 0;
  p = 1.0;

  @Watch("p")
  @Watch("type")
  @Watch("lvl")
  onChanged() {
    if (this.type == "Wooden")
      this.$emit("input", new Wooden(this.lvl, this.p));
  }
}
</script>

<style scoped></style>

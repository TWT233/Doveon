<i18n src="@/data/i18n/AuraTrans.yaml" />
<i18n>
zh_CN:
  Aura: 光环天赋
</i18n>

<template>
  <v-card>
    <v-card-title>{{ $t("Aura") }}</v-card-title>
    <v-card-text>
      <v-row dense>
        <v-col
          v-for="(item, i) in local"
          :key="i + item.toString()"
          cols="auto"
        >
          <v-checkbox v-model="local[i]" :label="$t(i)"> </v-checkbox>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Aura } from "@/mechanism/build/Aura";

@Component({})
export default class EditorAura extends Vue {
  @Prop() value!: Aura;
  local: Aura = new Aura();

  @Watch("value", { deep: true })
  onValueChanged() {
    this.local.load(this.value);
  }

  @Watch("local", { deep: true })
  onLocalChanged() {
    this.$emit("input", this.local);
  }

  mounted() {
    this.onValueChanged();
  }
}
</script>

<style scoped></style>

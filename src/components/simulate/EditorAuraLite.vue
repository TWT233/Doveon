<i18n src="@/data/i18n/AuraTrans.yaml" />

<template>
  <v-col class="d-inline-flex">
    <template v-for="(val, name, i) in local">
      <v-card
        tile
        outlined
        :dark="val"
        :color="val ? 'primary' : ''"
        class="px-1 mx-auto"
        :key="name"
        @click.stop="!disable && (local[name] = !local[name])"
      >
        {{ $t("short." + name) }}
      </v-card>
      <v-divider v-if="[2, 5, 9].includes(i)" :key="i" class="mx-1" vertical />
    </template>
  </v-col>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Aura } from "@/mechanism/build/Aura";

@Component({})
export default class EditorAuraLite extends Vue {
  @Prop() value!: Aura;
  @Prop({ type: Boolean, default: false }) disable!: boolean;
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

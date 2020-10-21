<i18n src="@/data/i18n/GearCateTrans.yaml" />
<i18n src="@/data/i18n/AuraTrans.yaml" />
<i18n src="@/data/i18n/CardTrans.yaml" />
<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn large outlined block color="primary">
          {{ $t(value.card.name) }}
          Lv.{{ value.card.lvl }}@{{ value.card.slotCount }}<br />
          {{ value.pts.STR }}/{{ value.pts.AGI }}/{{ value.pts.INT }}/{{
            value.pts.VIT
          }}/{{ value.pts.MEN }}/{{ value.pts.CON }}
        </v-btn>
      </v-col>
    </v-row>
    <v-divider />
    <v-row>
      <v-col v-for="(val, key) in value.suit" :key="key">
        <v-btn v-if="isGear(val)" outlined large block>
          {{ val.label || $t(val.name) }} {{ "Lv." + val.lvl }}<br />
          [{{ val.p[0] }} {{ val.p[1] }} {{ val.p[2] }} {{ val.p[3] }}]
          <v-icon v-if="val.isEnchanted">military_tech</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-divider />
    <v-row>
      <v-col>
        <EditorAuraLite v-model="value.aura" disable />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Build } from "@/mechanism/build/Build";
import { Gear } from "@/mechanism/build/Gear";
import EditorArsenalEntry from "@/components/build/EditorArsenalEntry.vue";
import { Mob } from "@/mechanism/battle/Mob";
import EditorAuraLite from "@/components/simulate/EditorAuraLite.vue";
@Component({
  components: { EditorAuraLite, EditorArsenalEntry }
})
export default class EditorMobBuild extends Vue {
  @Prop() value!: Build;

  isGear(item: unknown) {
    return item instanceof Gear;
  }

  getMob(): Mob {
    return new Mob(
      this.$store.state.build.card.name,
      "PC",
      this.$store.state.build.status
    );
  }
}
</script>

<style scoped></style>

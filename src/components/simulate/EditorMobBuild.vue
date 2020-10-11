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
      <div v-for="(item, i) in value.suit" :key="i">
        <v-col v-if="isGear(item)">
          <v-btn outlined large block>
            {{ item.label || $t(item.name) }} {{ "Lv." + item.lvl }}<br />
            [{{ item.p[0] }} {{ item.p[1] }} {{ item.p[2] }} {{ item.p[3] }}]
            <v-icon v-if="item.isEnchanted">military_tech</v-icon>
          </v-btn>
        </v-col>
      </div>
    </v-row>
    <v-divider />
    <v-row>
      <div v-for="(item, i) in value.aura" :key="i">
        <v-col v-if="typeof item == 'boolean' && item">
          <v-btn text outlined>{{ $t(i) }}</v-btn>
        </v-col>
      </div>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Build } from "@/mechanism/build/Build";
import { Gear } from "@/mechanism/build/Gear";
import EditorArsenalEntry from "@/components/build/EditorArsenalEntry.vue";
@Component({
  components: { EditorArsenalEntry }
})
export default class EditorMobBuild extends Vue {
  @Prop() value!: Build;

  isGear(item: unknown) {
    return item instanceof Gear;
  }
}
</script>

<style scoped></style>

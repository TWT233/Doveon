<i18n src="@/data/i18n/CardTrans.yaml" />
<i18n src="@/data/i18n/NPCTrans.yaml" />

<template>
  <div>
    <v-btn @click.stop="showDialog = true">
      {{ local.type || "None" }} : {{ $t(local.name) || "Empty" }}
    </v-btn>
    <v-dialog v-model="showDialog" max-width="500">
      <v-card>
        <v-card-title>EditorMob</v-card-title>
        <v-card-text>
          <v-tabs v-model="tabPage">
            <v-tab v-for="item in ['Build', 'Status', 'NPC']" :key="item">
              {{ item }}
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tabPage">
            <v-tab-item>
              <EditorMobBuild :value="$store.state.build" ref="fromBuild" />
            </v-tab-item>
            <v-tab-item>
              <!--              <EditorMobStatus ref="fromStatus"/>-->
            </v-tab-item>
            <v-tab-item><EditorMobNPC ref="fromNPC"/></v-tab-item>
          </v-tabs-items>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="primary" @click.stop="onDone()">Done</v-btn>
          <v-btn text color="secondary">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Mob } from "@/mechanism/battle/Mob";
import { Status } from "@/mechanism/build/Status";
import EditorMobBuild from "@/components/simulate/EditorMobBuild.vue";
import EditorMobNPC from "@/components/simulate/EditorMobNPC.vue";
import EditorMobStatus from "@/components/simulate/EditorMobStatus.vue";

@Component({
  components: { EditorMobStatus, EditorMobNPC, EditorMobBuild }
})
export default class EditorMob extends Vue {
  @Prop() value!: Mob;
  local: Mob = new Mob("", "", new Status());
  showDialog = false;
  tabPage = 0;

  @Watch("value", { deep: true })
  onValueChanged() {
    this.local.load(this.value);
  }

  onDone() {
    this.showDialog = false;
    switch (this.tabPage) {
      case 0: {
        this.local.load((this.$refs.fromBuild as EditorMobBuild).getMob());
        break;
      }
      case 1: {
        this.local.load((this.$refs.fromStatus as EditorMobStatus).getMob());
        break;
      }
      case 2: {
        this.local.load((this.$refs.fromNPC as EditorMobNPC).getMob());
        break;
      }
    }
    this.$emit("input", this.local);
  }

  mounted() {
    this.onValueChanged();
  }
}
</script>

<style scoped></style>

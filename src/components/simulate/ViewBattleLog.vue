<template>
  <div class="d-flex flex-column">
    <ViewBattleFrame
      v-for="(item, i) in value"
      :value="item.after"
      :key="i"
      class="my-1"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ViewBattleFrame from "@/components/simulate/ViewBattleFrame.vue";
import { Action } from "@/mechanism/battle/Action";

@Component({
  components: { ViewBattleFrame }
})
export default class ViewBattleLog extends Vue {
  @Prop() value!: Array<Action>;
}
</script>

<style scoped></style>

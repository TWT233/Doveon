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
import { Action } from "@/mechanism/battle/Action";
import ViewBattleFrame from "@/components/simulate/ViewBattleFrame.vue";

@Component({
  components: { ViewBattleFrame }
})
export default class ViewBattleLog extends Vue {
  @Prop() value!: Array<Action>;
}
</script>

<style scoped></style>

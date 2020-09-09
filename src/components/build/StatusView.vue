<template>
  <v-simple-table>
    <template v-slot:default>
      <tbody>
        <tr v-for="item in statusKeys" :key="item">
          <td>{{ item }}</td>
          <td>{{ Math.floor(status[item]) }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Status } from "@/mechanism/build/Status";

@Component({})
export default class StatusView extends Vue {
  @Prop(Status) status!: Status;

  get statusKeys(): string[] {
    return Object.keys(this.status);
  }
}
</script>

<style scoped></style>

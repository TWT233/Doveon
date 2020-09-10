<template>
  <v-card>
    <v-card-title>Status</v-card-title>
    <v-card-text>
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
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Status } from "@/mechanism/build/Status";

@Component({})
export default class StatusView extends Vue {
  @Prop() status!: Status;

  get statusKeys(): string[] {
    return Object.keys(this.status);
  }
}
</script>

<style scoped></style>

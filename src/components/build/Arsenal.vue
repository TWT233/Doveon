<template>
  <v-card>
    <v-card-title>Arsenal</v-card-title>
    <v-card-text>
      <v-row v-for="(item, i) in arsenal" :key="i">
        <v-col cols="">
          <SingleGearSelect
            :value="arsenal[i]"
            @input="onEditFinish()"
            editable-color="true"
            editable-label="true"
          ></SingleGearSelect>
        </v-col>
        <v-col cols="auto">
          <v-btn icon><v-icon>delete</v-icon></v-btn>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="onAddGear()">Add Gear</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ArsenalEntry, Gear } from "@/mechanism/build/Gear";
import SingleGearSelect from "@/components/build/SingleGearSelect.vue";
import { colors } from "vuetify/lib";

@Component({
  components: { SingleGearSelect }
})
export default class Arsenal extends Vue {
  get arsenal(): ArsenalEntry[] {
    return this.$store.state.arsenal;
  }

  onLoadArsenal(data: ArsenalEntry[]) {
    this.$store.commit("arsenalLoad", data);
  }

  onSaveArsenal() {
    window.localStorage.setItem(
      "arsenal",
      JSON.stringify(this.$store.state.arsenal)
    );
  }

  onRemoveGear(pos: number) {
    this.$store.commit("arsenalRemove", pos);
  }

  onAddGear() {
    this.$store.commit("arsenalPush", {
      label: "",
      gear: new Gear(),
      markColor: colors.grey.darken2
    });
  }

  mounted() {
    if (window.localStorage.getItem("arsenal") == null) {
      return;
    }
    this.onLoadArsenal(
      JSON.parse(window.localStorage.getItem("arsenal") || "")
    );
  }

  onEditFinish() {
    this.onSaveArsenal();
  }
}
</script>

<style scoped></style>

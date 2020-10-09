<i18n>
zh_CN:
  Gear: "武器装备"
</i18n>

<template>
  <v-card>
    <v-card-title>{{ $t("Gear") }}</v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col>
            <EditorArsenalEntry :types="['weapon']" v-model="local.weapon" />
          </v-col>
          <v-col>
            <EditorArsenalEntry :types="['hand']" v-model="local.hand" />
          </v-col>
          <v-col>
            <EditorArsenalEntry :types="['body']" v-model="local.body" />
          </v-col>
          <v-col>
            <EditorArsenalEntry :types="['head']" v-model="local.head" />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import EditorArsenalEntry from "@/components/build/EditorArsenalEntry.vue";
import { Suit } from "@/mechanism/build/Suit";

@Component({ components: { EditorArsenalEntry } })
export default class EditorSuit extends Vue {
  @Prop() value!: Suit;
  local: Suit = new Suit();

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

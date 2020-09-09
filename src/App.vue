<template>
  <v-app id="app">
    <v-main>
      <Build></Build>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Builder from "@/components/build/Builder.vue";

@Component({ components: { Build: Builder } })
export default class App extends Vue {}
</script>

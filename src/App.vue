<i18n>
zh_CN:
  Builder: 配装器
  Simulator: 战斗模拟器
</i18n>

<template>
  <v-app>
    <v-app-bar color="primary" dark app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Doveon</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text @click="onBuilder()">{{ $t("Builder") }}</v-btn>
      <v-btn text @click="onSimulator()">{{ $t("Simulator") }}</v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Builder from "@/components/build/Builder.vue";

@Component({ components: { Build: Builder } })
export default class App extends Vue {
  onBuilder() {
    this.$router.push("builder").catch(e => e);
  }

  onSimulator() {
    this.$router.push("simulator").catch(e => e);
  }
}
</script>

module.exports = {
  chainWebpack: config => {
    config.module
      .rule("i18n")
      .resourceQuery(/blockType=i18n/)
      .type("javascript/auto")
      .use("i18n")
      .loader("@kazupon/vue-i18n-loader")
      .end()
      .use("yaml")
      .loader("yaml-loader")
      .end();
  },

  transpileDependencies: ["vuetify"],

  publicPath: process.env.NODE_ENV === "production" ? "/DoveonLine/" : "/",

  pluginOptions: {
    i18n: {
      locale: "zh_CN",
      fallbackLocale: "en",
      localeDir: "data/i18n",
      enableInSFC: true
    }
  }
};

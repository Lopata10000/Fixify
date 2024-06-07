<template>
  <div id="app">
    <NavBar />
    <div class="w-users-userformpagewrap utility-page-wrap center-align">
      <div class="w-users-userformheader"><img
          src="https://cdn.prod.website-files.com/6610606930da13b8a528a088/6610606a30da13b8a528a16f_Lock%20and%20Key%20Icon.svg"
          alt="" class="icon large"/>
        <h2 class="heading h2">Відмовлено у доступі</h2></div>
      <p class="paragraph medium">Щоб виконати цю дію потрібно мати обліковий запис</p>
      <div class="spacer _16"></div>
      <a href="/html/sign-up.html" class="button white w-button">Зареєструватися</a>
      <div class="spacer _16"></div>
      <a href="/html/log-in.html" class="paragraph small">Уже маєте аккаунт? Увійти</a></div>
    <AppFooter/>
  </div>
</template>

<script>
import NavBar from '/src/components/NavigationBar.vue';

import AppFooter from '/src/components/AppFooter.vue';

export default {
  components: {
    NavBar,

    AppFooter,
  },
};
</script>

<style>
@import url('https://assets-global.website-files.com/6610606930da13b8a528a088/css/priborzhavsky-lyceum-news.webflow.8f0c4ae76.css');
</style>
>
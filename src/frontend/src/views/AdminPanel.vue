<template>
  <div id="app">
    <NavBar />
    <div class="page">
      <AdminActions />
    </div >
    <AppFooter/>
    </div>
</template>

<script>
import NavBar from '/src/components/NavigationBar.vue';
import AdminActions from '/src/components/AdminActions.vue';
import AppFooter from '/src/components/AppFooter.vue';

export default {
  components: {
    NavBar,
    AdminActions,
    AppFooter,
  },
};
</script>

<style>
@import url('https://assets-global.website-files.com/6610606930da13b8a528a088/css/priborzhavsky-lyceum-news.webflow.8f0c4ae76.css');


</style>

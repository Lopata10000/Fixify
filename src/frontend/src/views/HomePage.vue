<template>
  <div id="app">
    <NavBar />
    <div class="page-wrapper">
      <ServiceSearch />
      <ReviewsSection />
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import NavBar from '/src/components/NavigationBar.vue';
import ServiceSearch from '/src/components/ServiceSearch.vue';
import ReviewsSection from '/src/components/ReviewsSection.vue';
import AppFooter from '/src/components/AppFooter.vue';

export default {
  components: {
    NavBar,
    ServiceSearch,
    ReviewsSection,
    AppFooter,
  },
};
</script>

<style>
@import url('https://assets-global.website-files.com/6610606930da13b8a528a088/css/priborzhavsky-lyceum-news.webflow.8f0c4ae76.css');
</style>
>
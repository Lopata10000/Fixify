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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Libre+Baskerville:wght@400;700&family=Noto+Serif:wght@400;700&family=Volkhov:wght@400;700&display=swap');
@import url('https://assets-global.website-files.com/6610606930da13b8a528a088/css/priborzhavsky-lyceum-news.webflow.8f0c4ae76.css');

/* ваші стилі тут */
</style>
>
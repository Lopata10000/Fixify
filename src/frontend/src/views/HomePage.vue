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

  <style scoped >


  </style>

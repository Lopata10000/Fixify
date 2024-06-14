<template>
  <div id="app">
    <NavBar/>

      <ReviewForm></ReviewForm>


    <AppFooter/>
  </div>
</template>

<script>
import NavBar from '/src/components/NavigationBar.vue';
import AppFooter from '/src/components/AppFooter.vue';
import ReviewForm from "@/components/ReviewForm.vue";

export default {
  components: {
    ReviewForm,
    NavBar,
    AppFooter,
  },
};
</script>

<style>

/* ваші стилі тут */
</style>
>
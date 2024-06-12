<template>
  <div id="app">
    <NavBar />
      <UserProjects/>

    <AppFooter/>
  </div>
</template>

<script>
import NavBar from '/src/components/NavigationBar.vue';
import AppFooter from '/src/components/AppFooter.vue';
import UserProjects from '/src/components/UserProjects.vue';

export default {
  components: {
    NavBar,
    UserProjects,
    AppFooter,
  },
};
</script>

<style scoped >


/* ваші стилі тут */
</style>
>
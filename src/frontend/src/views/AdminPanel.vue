<template>
  <div id="app">
    <NavBar />

      <AdminActions />

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

<style scoped>
 </style>
>
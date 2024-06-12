<template>
  <div id="app">
    <NavBar/>
    <div class="page-wrapper">
      <TaskForm></TaskForm>

    </div>
    <AppFooter/>
  </div>
</template>

<script>
import NavBar from '/src/components/NavigationBar.vue';
import AppFooter from '/src/components/AppFooter.vue';
import TaskForm from "@/components/TaskForm.vue";

export default {
  components: {
    TaskForm,
    NavBar,
    AppFooter,
  },
};
</script>

<style>

/* ваші стилі тут */
</style>
>
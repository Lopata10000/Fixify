<template>
  <div id="app">
  <router-view/>
  </div>
</template>


<script>
export default {
  mounted() {
    // Оновлюємо заголовок сторінки після завантаження компонента
    document.title = "Fixify";

    // Оновлюємо іконку сайту (favicon)
    // Оновлюємо іконку сайту (favicon)
    // Оновлюємо іконку сайту (favicon)
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = './assets/logo.png';
    document.head.appendChild(favicon);
  }
  }
</script>

<style scoped>
@import url('https://cdn.prod.website-files.com/6665a0231b6b1c1d4778b143/css/fixify-a8b2fd.webflow.b72112e17.css');

</style>

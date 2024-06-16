<template>
  <div class="nav-bar w-nav">
    <div class="nav-container w-container">
      <div class="logo-div">
        <a href="/home" class="nav-logo w-inline-block w--current">
          <img src="/image/logo-long.png" width="250" height="auto" alt="" class="logo"/>
        </a>
      </div>
      <nav role="navigation" class="nav-content w-nav-menu">
        <div class="search-banner">
          <div class="search-section">
          </div>
        </div>
        <div v-if="authority === 'USER' || authority === 'MANAGER' || authority ==='ADMIN'" class="nav-link">
          <a @click="logout" >Вийти</a>
        </div>
        <div v-if="authority === 'ADMIN'" class="nav-cta-button-container">
          <a href="/admin-panel" class="nav-link cta-button w-nav-link">Адмін панель</a>
        </div>
        <div v-if="authority === 'USER' || authority === 'MANAGER'" class="nav-cta-button-container">
          <a href="/dashboard" class="nav-link cta-button w-nav-link">Мої послуги</a>
        </div>
        <div v-if=" authority === 'NONE'" class="nav-link">
          <a href="/log-in" class="nav-link cta-button w-nav-link">Увійти</a>
        </div>
        <div v-if=" authority === 'NONE'" class="nav-cta-button-container">
          <a href="/sign-up" class="nav-link cta-button w-nav-link">Реєстрація</a>
        </div>

      </nav>
      <div class="menu-button w-nav-button">
        <img src="/image/logo-long.png" width="24" alt="" class="menu-icon"/>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from "../axios";

export default {
  name: 'NavBar',
  setup: function () {
    const authority = ref(null);

    const getAuthority = () => {
      axios.get('/v1/get-authority')
          .then(response => {
            authority.value = response.data;
          })
          .catch(error => {
            if (error.response && error.response.status === 403) {
              authority.value = "NONE";
            } else {
              authority.value = "NONE";
            }
          });
    };

    const logout = () => {
      axios.get('/v1/logout')
          .then(() => {
            authority.value = 'NONE'; // Оновлюємо authority після виходу
            window.location.href = "/home";
          })
          .catch(error => {
            console.error(error);
          });
    };

    onMounted(() => {
      getAuthority();
    });

    return {
      authority,
      logout,
    };
  },
};
</script>

<style scoped>
.nav-link{
  display: flex;
  justify-content: flex-start; /* Вирівнює елементи вліво */
  align-items: center;
  height: 36px;
}
.nav-link:not(:last-child) {
  margin-right: 10px;
}
@media (max-width: 768px) {
  .nav-link {
    display: none;
  }
}
</style>

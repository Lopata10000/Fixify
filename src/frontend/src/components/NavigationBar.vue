<template>
  <div class="nav-bar w-nav">
    <div class="nav-container w-container">
      <div class="logo-div">
        <a href="/" class="nav-logo w-inline-block w--current">
          <img src="/image/logo-long.png" width="284" height="auto" alt="" class="logo"/>
        </a>
      </div>
      <nav role="navigation" class="nav-content w-nav-menu">
        <div class="search-banner">
          <div class="search-section">
            <form action="/search" class="search w-form">
              <input class="search-bar w-input" maxlength="256" name="query" placeholder="Пошук подій" type="search" id="search" required/>
              <input type="submit" class="hidden w-button" value="Search"/>
            </form>
          </div>
        </div>
        <div class="nav-menu">
          <a href="/html/resources.html" class="nav-link w-nav-link">Всі події</a>
        </div>
        <div class="nav-link">
          <a href="/html/log-in.html" class="nav-link cta-button w-nav-link">Увійти</a>
        </div>
        <div class="nav-cta-button-container">
          <a href="/html/sign-up.html" class="nav-link cta-button w-nav-link">Реєстрація</a>
        </div>
      </nav>
      <div class="menu-button w-nav-button">
        <img src="/image/logo-long.png" width="24" alt="" class="menu-icon"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
.nav-link{
  display: flex;
  justify-content: flex-start; /* Вирівнює елементи вліво */
  align-items: center;
  height: 36px;
}
</style>

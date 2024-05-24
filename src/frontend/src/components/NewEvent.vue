<template>
  <router-link to="/new-event">
  <div>
    <div class="nav-bar w-nav" data-animation="default" data-collapse="small" data-duration="400" data-easing="ease" data-easing2="ease" role="banner">
      <div class="nav-container w-container">
        <div class="logo-div">
          <a class="nav-logo w-inline-block" href="/src/frontend/public">
            <img
                alt=""
                class="logo"
                sizes="72px"
                src="https://assets-global.website-files.com/6610606930da13b8a528a088/6613fcf418ebfec676a14243_lopata5000_logo_for_Ukrainian_Lyceum_5ea0e4bf-ead1-4fb0-840f-99e9c661a819.png"
                srcset="https://assets-global.website-files.com/6610606930da13b8a528a088/6613fcf418ebfec676a14243_lopata5000_logo_for_Ukrainian_Lyceum_5ea0e4bf-ead1-4fb0-840f-99e9c661a819-p-500.png 500w, https://assets-global.website-files.com/6610606930da13b8a528a088/6613fcf418ebfec676a14243_lopata5000_logo_for_Ukrainian_Lyceum_5ea0e4bf-ead1-4fb0-840f-99e9c661a819-p-800.png 800w, https://assets-global.website-files.com/6610606930da13b8a528a088/6613fcf418ebfec676a14243_lopata5000_logo_for_Ukrainian_Lyceum_5ea0e4bf-ead1-4fb0-840f-99e9c661a819.png 1024w"
                width="72"
            />
          </a>
          <a id="shcoolId" class="link" href="##http://borzhavaschoolcom.s59.yourdomain.com.ua/">Приборжавський ліцей</a>
        </div>
        <nav class="nav-content w-nav-menu" role="navigation">
          <div class="search-banner">
            <div class="search-section">
              <form action="/search" class="search w-form">
                <input id="search" class="search-bar w-input" maxlength="256" name="query" placeholder="Пошук подій" required type="search" />
                <input class="hidden w-button" type="submit" value="Search" />
              </form>
            </div>
          </div>
          <div class="nav-menu">
            <a class="nav-link w-nav-link" href="/resources">Всі події</a>
            <button class="nav-link" @click="logout" type="button">Вийти</button>
          </div>
          <div class="nav-cta-button-container">
            <a class="nav-link cta-button w-nav-link" href="/sign-up">Реєстрація</a>
          </div>
        </nav>
        <div class="menu-button w-nav-button">
          <img alt="" class="menu-icon" loading="lazy" src="https://assets-global.website-files.com/6610606930da13b8a528a088/6610606a30da13b8a528a17c_Menu%20Icon.svg" width="24" />
        </div>
      </div>
    </div>
    <div class="section black-gradient">
      <div class="container w-container"></div>
    </div>
    <div class="section light-grey">
      <div class="container w-container">
        <div class="terms-card">
          <h5 class="heading-2">Створення нового заходу</h5>
          <div class="w-layout-blockcontainer container-4 w-container">
            <img alt="" class="image" loading="lazy" src="https://assets-global.website-files.com/6610606930da13b8a528a088/66140af03f8c32883aef947f_lopata5000_logo_for_Ukrainian_Lyceum_5ea0e4bf-ead1-4fb0-840f-99e9c661a819__1_-removebg-preview.png" width="51" />
          </div>
          <div class="w-layout-blockcontainer container-3 w-container">
            <img id="w-node-_65bf0f1e-5469-458e-011a-2918fe1af152-a528a145" alt="" loading="lazy" src="https://assets-global.website-files.com/6610606930da13b8a528a088/6610606a30da13b8a528a169_Design%20Resources%20Home.svg" width="155" />
          </div>
          <div class="w-form">
            <form id="user-form" class="form-2" @submit.prevent="createEvent">
              <label for="eventName">Назва події</label>
              <input id="eventName" class="text-field w-input" name="eventName" v-model="event.eventName" />

              <label for="eventDate">Дата події</label>
              <input id="eventDate" class="w-input" name="eventDate" required type="date" v-model="event.eventDate" />

              <label for="eventTime">Час</label>
              <input id="eventTime" class="w-input" name="eventTime" required type="time" v-model="event.eventTime" />

              <label for="organizerContactInfo">Контакти організаторів</label>
              <input id="organizerContactInfo" class="text-field w-input" name="organizerContactInfo" required v-model="event.organizerContactInfo" />

              <label for="placeAddress">Адреса</label>
              <input id="placeAddress" class="text-field w-input" name="placeAddress" required v-model="event.placeAddress" />

              <label for="numberOfParticipants">Кількість учасників</label>
              <input id="numberOfParticipants" class="text-field w-input" name="numberOfParticipants" required v-model="event.numberOfParticipants" />

              <label for="accessType">Тип доступу</label>
              <input id="accessType" class="text-field w-input" name="accessType" required v-model="event.accessType" />

              <label for="eventDescription">Опис</label>
              <input id="eventDescription" class="text-field w-input" name="eventDescription" required v-model="event.eventDescription" />

              <input class="submit-button w-button" data-wait="Зачекайте..." type="submit" value="Створити" />
            </form>
            <div class="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-container w-container">
        <div class="w-layout-grid footer-grid">
          <div id="w-node-b8d7be4a-ce45-83ab-5947-02d204c8bff0-cf3fcb86" class="footer-logo-block">
            <a class="footer-logo w-nav-brand" data-ix="logo" href="/src/frontend/public">
              <img
                  alt=""
                  sizes="(max-width: 479px) 83vw, 204px"
                  src="https://assets-global.website-files.com/6610606930da13b8a528a088/661408e681e1941ab6e1d6df_%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA_%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2024-04-08_%D0%BE_17.08.24-removebg-preview.png"
                  srcset="https://assets-global.website-files.com/6610606930da13b8a528a088/661408e681e1941ab6e1d6df_%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA_%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2024-04-08_%D0%BE_17.08.24-removebg-preview-p-500.png 500w, https://assets-global.website-files.com/6610606930da13b8a528a088/661408e681e1941ab6e1d6df_%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA_%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2024-04-08_%D0%BE_17.08.24-removebg-preview-p-800.png 800w, https://assets-global.website-files.com/6610606930da13b8a528a088/661408e681e1941ab6e1d6df_%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA_%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2024-04-08_%D0%BE_17.08.24-removebg-preview-p-1080.png 1080w, https://assets-global.website-files.com/6610606930da13b8a528a088/661408e681e1941ab6e1d6df_%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA_%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2024-04-08_%D0%BE_17.08.24-removebg-preview.png 1082w"
                  width="204"
              />
            </a>
            <p class="paragraph small">Зробив Фанта Петро</p>
            <div class="spacer _16"></div>
            <div class="paragraph small">© 2024 Приборжавський ліцей. <br />Всі права захищені.</div>
          </div>
          <div class="footer-links-container">
            <h5 class="footer-header">Website</h5>
            <a class="footer-link" href="/src/frontend/public">Home</a>
            <a class="footer-link" href="/resources">Resources</a>
            <a class="footer-link" href="/contact">Contact</a>
            <a class="footer-link" href="/privacy-policy">Privacy Policy</a>
          </div>
          <div class="footer-links-container">
            <h5 class="footer-header">Membership</h5>
            <a class="footer-link" href="/log-in">Sign In</a>
            <a class="footer-link" href="/sign-up">Sign Up</a>
            <a class="footer-link" href="/user-account">User Account</a>
            <a class="footer-link" href="/reset-password">Reset Password </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      event: {
        eventName: '',
        eventDate: '',
        eventTime: '',
        organizerContactInfo: '',
        placeAddress: '',
        numberOfParticipants: '',
        accessType: '',
        eventDescription: ''
      }
    };
  },
  methods: {
    createEvent() {
      // Logic to handle form submission
      console.log('Event created:', this.event);
      // Add your form submission logic here
    },
    logout() {
      // Logic to handle user logout
      console.log('User logged out');
      // Add your logout logic here
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
@import url('https://assets-global.website-files.com/6610606930da13b8a528a088/css/priborzhavsky-lyceum-news.webflow.3bb36fa17.css');
@import url('https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css');

.nav-bar {
  /* Add custom styles for nav-bar */
}

/* Add styles for other elements as needed */
</style>

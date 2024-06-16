<template>
  <div class="w-users-userformpagewrap full-page-wrapper">
    <div class="w-users-userloginformwrapper admin-form-card">
      <img src="/image/logo-long.png" loading="lazy" alt="" width="300" />
      <form @submit.prevent="submitForm">
        <div class="w-users-userformheader form-card-header">
          <h2 class="heading h3">Вхід</h2>
          <p class="paragraph small">Заповніть свої дані нижче</p>
        </div>
        <input
            v-model="email"
            maxlength="256"
            placeholder="Ваша електронна адреса"
            name="email"
            id="email"
            class="text-field w-input"
            type="email"
            required
            autocomplete="email"
        />
        <input
            v-model="password"
            maxlength="256"
            placeholder="Ваш пароль"
            name="password"
            id="password"
            class="text-field w-input"
            type="password"
            required
        />
        <input
            type="submit"
            value="Увійти"
            class="w-users-userformbutton button w-button"
        />
        <div class="w-users-userformfooter form-card-footer">
          <span>Немає акаунту?</span>
          <router-link to="/sign-up">Зареєструватися</router-link>
        </div>
      </form>
      <div id="error-message" style="display: none"></div>
    </div>
    <a href="/html/reset-password.html" class="below-card-link">Забув пароль?</a>

  </div>
</template>

<script>
import Swal from 'sweetalert2';
import router from "@/router/router";

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {

    async submitForm() {
      // Показати вікно завантаження
      Swal.fire({
        title: 'Будь ласка зачекайте...',
        width: 500,
        allowOutsideClick: false,
        customClass: {
          popup: 'custom-popup-class', // додайте ваш CSS-клас тут
        },
        didOpen: () => {
          Swal.showLoading();
        },
        didRender: () => {
          Swal.hideLoading();
        }
      });
      const formData = new FormData();
      formData.append("email", this.email)
      formData.append("password", this.password)
      const response = await fetch('/api/user/authentication', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const data = await response.json();

      if (response.ok) {
        const token = data.refresh_token;
        localStorage.setItem('refreshToken', token);

        await Swal.update({
          title: 'Успішна авторизація.',
          icon: 'success',
          confirmButtonText: 'OK',
          didClose: () => {
            // Після закриття викликається перенаправлення
            router.push('/dashboard'); // вказуйте ваш новий шлях
          }
        })

      } else {
        await Swal.update({
          title: 'Невірний логін або пароль',
          icon: 'error',
          confirmButtonText: 'OK',
        });

      }
    },
  }
}
</script>

<style >

.custom-popup-class {
  height: 300px; /* ваша висота */
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto; /* це для центрування по горизонталі */
  top: 0; /* це для центрування по вертикалі */
  bottom: 0; /* це для центрування по вертикалі */
}


</style>
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

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async submitForm() {
      try {
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
          await Swal.fire({
            title: 'Успішна авторизація.',
            icon: 'success',
            confirmButtonText: 'OK',
          });
          window.location.href = "/new-task";
        } else {
          await Swal.fire({
            title: 'Невірний логін або пароль',
            icon: 'error',
            confirmButtonText: 'OK',
          });
          this.showError(data);
        }
      } catch (error) {
        console.error('Помилка:', error);
      }
    },
    showError(responseText) {
      const errorMessage = typeof responseText === 'object' ? responseText.message : responseText;
      this.$refs.errorMessage.innerText = errorMessage;
      this.$refs.errorMessage.style.display = 'block';
      setTimeout(() => {
        this.$refs.errorMessage.style.display = 'none';
      }, 5000);
    },
  },
    showError(responseText) {
      if (typeof responseText === 'string' && responseText.startsWith('{')) {
        const error = JSON.parse(responseText);
        const errorMessage = error.message;
        document.getElementById('error-message').innerText = errorMessage;
      } else {
        document.getElementById('error-message').innerText = responseText;
      }
      document.getElementById('error-message').style.display = 'block';
      setTimeout(() => {
        document.getElementById('error-message').style.display = 'none';
      }, 5000);
    },

};
</script>

<style >
a {
  color: black;
  text-decoration: none;
}
</style>
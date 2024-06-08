<template>
  <div class="w-users-userformpagewrap full-page-wrapper">
    <div class="w-users-usersignupformwrapper admin-form-card">
      <div v-if="!isFormVisible"  id="buttons-wrapper">
        <img src="/image/logo-long.png" loading="lazy" alt="" width="300"/>
        <p align="center"  class="paragraph large">Хто ти? </p>
        <div class="center">
        <button class="button w-button" @click="showRegistrationFields('ADMIN')">Замовник</button>
        <button class="button w-button" @click="showRegistrationFields('MANAGER')">Фахівець</button>
      </div>
      </div>
      <form ref="form" id="user-form" v-if="isFormVisible" @submit.prevent="submitForm">
        <img src="/image/logo-long.png" loading="lazy" alt="" width="300"/>
        <div class="w-users-userformheader form-card-header">
          <h2 class="heading h3">Реєстрація</h2>
        </div>
        <input id="fullName" class="text-field w-input" v-model="fullName" maxlength="256" name="fullName" pattern="[A-Za-zА-Яа-яЁёЇїІіЄєҐґ\s']{3,}" placeholder="Ваше повне ім'я" required title="Будь ласка, введіть тільки літери і більше за 2 символи." type="text">
        <select id="address" v-model="address" name="address" required data-name="Category 2" class="form-dropdown w-select">
          <option value="" selected disabled>Оберіть ваше місто</option>
          <option v-for="town in towns" :key="town.id" :value="town.town_name">{{ town.town_name }}</option>
        </select>

        <input id="phoneNumber" class="text-field w-input" v-model="phoneNumber" style="width: 300px;" maxlength="10" name="phoneNumber" data-orig-size="10" required placeholder="Ваш номер телефону" type="tel"/>
        <input id="email" autoComplete="email" class="text-field w-input" style="margin-top: 19px" v-model="email" maxlength="256" name="email" placeholder="Ваша електронна адреса" required type="email"/>
        <input id="wf-sign-up-password" class="text-field-copy w-input" v-model="password" maxlength="256" minlength="8" name="password" placeholder="Ваш пароль" required type="password"/>
        <label class="w-checkbox checkbox-field">
          <input id="wf-sign-up-accept-privacy" class="w-checkbox-input check-box" v-model="acceptPrivacy" data-name="Checkbox" data-wf-user-field="wf-user-field-accept-privacy" name="Checkbox" required type="checkbox"/>
          <span class="checkbox-label w-form-label">Я згоден з політикою конфіденційності</span>
        </label>
        <input class="w-users-userformbutton button w-button" type="submit" value="Реєстрація"/>
        <div class="w-users-userformfooter form-card-footer"><span>Уже маєте аккаунт</span><router-link to="/log-in">Увійти</router-link></div>
      </form>

      <div class="w-users-usersignupverificationmessage verification-box w-form-verification" data-wf-user-form-verification="true" tabindex="-1">
        <div class="w-users-userformheader"><img alt="" class="icon" src="https://assets-global.website-files.com/6610606930da13b8a528a088/6610606a30da13b8a528a16d_Email%20Sent%20Icon.svg"/>
          <h2>Verification Required</h2></div>
        <p>Account verification required. Please check your email to find your unique verification link.</p></div>
    </div>
    <div id="error-message" v-if="errorMessage">{{ errorMessage }}</div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

export default {
  data() {
    return {
      fullName: '',
      address: '',
      phoneNumber: '',
      email: '',
      password: '',
      role: '',
      towns: [],
      errorMessage: '',
      isFormVisible: false,
      formHeader: 'Реєстрація'
    };
  },
  mounted() {
    this.fetchTowns();
  },
  methods: {
    async fetchTowns() {
      try {
        const response = await fetch('/api/towns/all');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const townsData = await response.json();
        this.towns = townsData;
      } catch (error) {
        console.error('Error fetching towns:', error);
      }
    },
    initPhoneNumberInput() {
      const input = document.querySelector("#phoneNumber");
      intlTelInput(input, {
        separateDialCode: true,
        autoPlaceholder: "polite",
        formatOnDisplay: true,
        nationalMode: false,
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      });

      input.addEventListener('input', () => {
        input.value = input.value.replace(/[^0-9]/g, '');
        const origSize = parseInt(input.getAttribute('data-orig-size'), 10);
        if (input.value.length > origSize) {
          input.value = input.value.slice(0, origSize);
        }
      });
    },
    showRegistrationFields(selectedRole) {

      this.role = selectedRole;
      this.isFormVisible = true;
      this.$nextTick(() => {
        this.initPhoneNumberInput();
      });

      if (selectedRole === 'ADMIN') {
        this.formHeader = "Реєстрація як замовник";
      } else if (selectedRole === 'MANAGER') {
        this.formHeader = "Реєстрація як фахівець";
      }
    },
    async submitForm() {
      const formData = new FormData();
      formData.append('fullName', this.fullName);
      formData.append('address', this.address);
      formData.append('phoneNumber', this.phoneNumber);
      formData.append('email', this.email);
      formData.append('password', this.password);
      formData.append('role', this.role);

      try {
        const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify(Object.fromEntries(formData)),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        const token = responseData.refresh_token;
        localStorage.setItem('refreshToken', token);
        Swal.fire({
          title: 'Успішна реєстрація.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "../private/new-event.html";
          }
        });
      } catch (error) {
        this.showError(error.message);
      }
    }
    }
  };
</script>

<style>
@import url('https://assets-global.website-files.com/6610606930da13b8a528a088/css/priborzhavsky-lyceum-news.webflow.8f0c4ae76.css');
#error-message {
  text-align: center;
  color: white;
  background-color: red;
  padding: 10px;
  border-radius: 5px;
  width: 300px;
}


@keyframes slideIn {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

#buttons-wrapper button {
  animation: slideIn 0.5s ease-out forwards;
  opacity: 0;
}
.w-button{
  margin: 5px;
}

/* Стилі для зникнення */
.fade-out {
  opacity: 0;
  transition: opacity 0.5s ease-out;
}
.table-container {
  max-width: 400px;
  overflow-x: auto;
  margin: 0 auto;
}
.nav-container {
  display: flex;
  justify-content: flex-start; /* Вирівнює елементи вліво */
  align-items: center; /* Вирівнює елементи по вертикалі центру */
  padding: 10px;
  background-color: #ffff;
}



</style>
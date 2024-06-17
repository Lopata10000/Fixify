<script>
import axios from 'axios';
import Swal from "sweetalert2";

export default {
  computed: {
    todayDate() {
      const today = new Date();
      return today.toISOString().slice(0, 16); // формат YYYY-MM-DDTHH:mm
    }
  },
  data() {
    return {
      towns: [],
      categories: [],
      formData: {
        title: '',
        description: '',
        town_id: '',
        user_id: '',
        category_id: '',
        address: '',
        date: '',
        budget: '',
        acceptPrivacy: false
      }
    };
  },
  mounted() {
    this.fetchTowns();
    this.fetchCategories();
    this.getUserId();
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
    async fetchCategories() {
      try {
        const response = await fetch('/api/categories/all');
        const categoriesData = await response.json();
        this.categories = categoriesData;
      } catch (error) {
        await this.showError();
      }
    },
    async showError() {
      Swal.fire({
        title: 'Помилка',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    },
    async submitForm() {
      this.formData = {
        title: this.formData.title,
        description: this.formData.description,
        townId: this.formData.town_id,
        address: this.formData.address,
        date: new Date(),
        budget: this.formData.budget,
        categoryId: this.formData.category_id,
        userId: this.formData.user_id,
      };
      await axios.post('/api/projects', this.formData)
          .then(response => {
            if (response.status === 200) {
               Swal.fire({
                title: 'Успішно створено запит.',
                icon: 'success',
                confirmButtonText: 'OK',
              });
            } else {
               Swal.fire({
                title: 'Помилка',
                icon: 'error',
                confirmButtonText: 'OK',
              });
            }
          })
    }
  }
}
</script>

<template>
  <div class="page-wrapper">
    <div class="section black-gradient">
      <div class="container">
        <div id="w-node-b49c48ad-b3b4-f319-67e3-9d04be5835dc-7fca7502" class="text-box _550px center-align">
          <div class="form-card ">
            <div class="flex justify-center mb-4">
              <img src="/image/logo-long.png" loading="lazy" alt="" width="300"/>

            </div>
            <h3 class="heading-2 flex justify-center">Деталі послуги</h3>
            <div class="w-form">
              <form id="new-task-form" @submit.prevent="submitForm">
                <label for="First-Name">Що потрібно зробити (коротко)?
                </label>
                <input class="text-field w-input" maxlength="256" name="title"
                       v-model="formData.title" placeholder="Заміна вікон" minlength="5" type="t"
                       id="title" required=""/>
                <div class="field-block">
                  <label for="Message">Детально опишіть послуги</label>
                  <textarea minlength="15"
                            placeholder="Замінити два вікна 2х1м. Поставити підвіконник, зашпаклювати,винести старі вікна."
                            maxlength="5000" v-model="formData.description" name="description" id="description"
                            required="" class="text-area w-input">
                  </textarea>
                  <h3 class="heading-2 flex justify-center">Адреса виконання послуги</h3>
                  <label for="First-Name-2">Місто</label>
                  <select id="town" v-model="formData.town_id" name="town" data-name="town"
                          class="form-dropdown w-select" required="">
                    <option value="" selected disabled>Оберіть ваше місто</option>
                    <option v-for="town in towns" :key="town.id" :value="town.id">{{ town.town_name }}</option>
                  </select>
                  <label for="First-Name-2">Категорія</label>
                  <select id="category" v-model="formData.category_id" name="category" data-name="category"
                          class="form-dropdown w-select" required="">
                    <option value="" selected disabled>Оберіть категорію</option>
                    <option v-for="category in categories" :key="category.id" :value="category.id">
                      {{ category.categoryName }}
                    </option>
                  </select>
                  <label for="First-Name-2">Адреса</label></div>
                <input class="text-field w-input" minlength="5" name="address" v-model="formData.address"
                       placeholder="Українська 12" type="text" id="address" required=""/>
                <h3 class="heading-2 flex justify-center">Дата виконання послуги</h3>
                <div>
                  <input class="text-field w-input" minlength="5" name="address" v-model="formData.date"
                         placeholder="Українська 12" type="datetime-local" id="address" required="" :min="todayDate"/>
                </div>

                <h3 class="heading-2 flex justify-center">Оплата роботи</h3><label for="First-Name-2">Орієнтовна
                вартість</label><input
                  class="text-field w-input" maxlength="256" name="budget" v-model="formData.budget"
                  placeholder="1500грн" type="number" id="budget" required=""/>
                <label class="w-checkbox checkbox-field">
                  <input id="wf-sign-up-accept-privacy" class="w-checkbox-input check-box"
                         v-model="formData.acceptPrivacy"
                         data-name="Checkbox" data-wf-user-field="wf-user-field-accept-privacy" name="Checkbox"
                         type="checkbox"/>
                  <span class="checkbox-label w-form-label">Ціна обговорюється</span>
                </label>
                <div class="flex justify-center">
                  <input
                      type="submit" data-wait="Please wait..." class="button no-margin w-button" value="Створити"/>

                </div>
              </form>
              <div class="form-success w-form-done">
                <div>Your request has been submitted and we will get to you shortly.</div>
              </div>
              <div class="form-error w-form-fail">
                <div>Oops! Something went wrong. Please fill in the required fields and try again.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>


</style>
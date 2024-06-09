<template>
  <div class="section black-gradient">

    <div class="container-6 w-container">
      <div class="text-box _550px center-align">
        <h2 class="heading h2">Онлайн-сервіс замовлення послуг</h2>
        <p class="paragraph-3 large">Уведіть назву послуги</p>
        <div class="spacer-2 _16"></div>
        <div class="email-form center-align w-form">
          <form @submit.prevent="searchService" id="wf-form-Subscribe-Form" name="wf-form-Subscribe-Form" class="email-form">
            <div class="email-subscribe">
              <input class="text-field"  v-model="query" placeholder="Приклад: ремонт холодильника"  required/>
              <input type="submit" class="button w-button dark" value="Пошук"/>
            </div>
          </form>
          <div v-if="successMessage" class="form-success-2 dark w-form-done">
            <div>{{ successMessage }}</div>
          </div>
          <div v-if="errorMessage" class="w-form-fail">
            <div>{{ errorMessage }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceSearch',
  data() {
    return {
      query: '',
      successMessage: '',
      errorMessage: '',
    };
  },
  methods: {
    searchService() {
      // Виконайте пошук тут
      // Встановіть відповідні повідомлення
    },
  },
};
</script>

<style scoped>
.section.black-gradient
{
  margin-top: 0px;
}
.text-field{
  margin-top: 0px;
  width: 270px;
}

</style>

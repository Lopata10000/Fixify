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

              <input             type="text"
                                  class="text-field w-input"   placeholder="Приклад: ремонт холодильника"  required/>
              <input type="submit" class="button w-button dark" value="Пошук"/>
            </div>
          </form>
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
      window.location.href ="/new-task"
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
.text-field.w-input {
  color: black;
}

</style>

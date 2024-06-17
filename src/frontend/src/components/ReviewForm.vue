<script>
import axios from 'axios';
import Swal from "sweetalert2";
import StarRating from 'vue-star-rating'

export default {
  components: {
    StarRating
  },
  data() {
    return {
      formData: {
        userId: 10,
        specialistId: 10,
        projectId: 10,
        rating: 5
      }
    };
  },

  mounted() {
  },
  methods: {
    handleRatingChange(newRating) {
      // Виконуємо потрібні дії з новим значенням рейтингу (newRating)
      console.log('Новий рейтинг:', newRating);
      // Тут ви можете викликати будь-яку функцію або зробити щось інше з новим значенням рейтингу
    },
    async submitForm() {
      this.formData = {
        comment: this.formData.comment,
        rating: this.formData.rating,
        datePosted: this.todayDate(),
        userId: 10,
        specialistId: 10,
        projectId: 10,
      };
      console.log(this.formData); // перевірте, чи є рейтинг в об'єкті formData

      await axios.post('/api/reviews', this.formData)
          .then(response => {
            if (response.status === 200) {
              Swal.fire({
                title: 'Успішно створено відгук.',
                icon: 'success',
                confirmButtonText: 'OK',
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.href = "/dashboard";
                }
              });
            } else {
              Swal.fire({
                title: 'Помилка',
                icon: 'error',
                confirmButtonText: 'OK',
              });
            }
          })
    },
    todayDate() {
      const today = new Date();
      return today.toISOString().slice(0, 16);
    }
  }
}
</script>

<template>

    <div class="section black-gradient">
      <div class="container">
        <div id="w-node-b49c48ad-b3b4-f319-67e3-9d04be5835dc-7fca7502" class="text-box _550px center-align">
          <div class="form-card ">
            <div class="flex justify-center mb-4">
              <img src="/image/logo-long.png" loading="lazy" alt="" width="300"/>

            </div>
            <h3 class="heading-2 flex justify-center">Вігук про виконання послуги</h3>
            <div class="w-form">
              <form id="new-task-form" @submit.prevent="submitForm">
                  <textarea minlength="15"
                            placeholder="Все пройшло дуже добре. Рекомендую цього спеціаліста"
                            maxlength="5000" v-model="formData.comment" name="comment" id="comment"
                            required="" class="text-area w-input">
                  </textarea>
                <div class="paragraph small">
                  <div class="paragraph small">
                    <StarRating
                        v-model="formData.rating"
                        :rating="5"
                        :increment="0.5"
                        :star-size="20"
                        :active-color="'#FFD700'"
                        :inactive-color="'#C0C0C0'"
                        @input="handleRatingChange"

                    />
                  </div>
                </div>
                <div class="flex justify-center">
                  <input
                      type="submit" data-wait="Please wait..." class="button no-margin w-button" value="Створити"/>

                </div>
              </form>

          </div>
        </div>
        </div>
      </div>
    </div>

</template>

<style scoped>


</style>
<template>
  <div class="section">
    <div class="container">
      <div class="section-top">
        <h2 class="heading h3 ">Топ відгуки</h2>
        <a href="/resources" class="button light mobile-hidden w-button">Побачити всі категорії</a>
      </div>
      <div class="w-dyn-lists w-1">
        <div role="list" class="large-3-grid w-dyn-items ">

          <div v-for="review in displayedReviews" :key="review.id" class="ebook-box w-dyn-item card" :class="{ 'animate__animated animate__slideInUp': review.newlyAdded }">
            <a :href="'/reviews/' + review.id" class="ebook-thumbnail w-inline-block no-underline">
              <img alt="Event Cover" height="150" src="/image/img.png" width="150">
            </a>
            <a :href="'/event/' + review.id" class="card-text-link w-inline-block no-underline">
              <h2 class="heading h4">{{ getShortenedText(review.comment) }}</h2>
              <div class="paragraph small">
                <star-rating
                    :rating="review.rating"
                    :increment="0.5"
                    :read-only="true"
                    :star-size="20"
                    :active-color="'#FFD700'"
                    :inactive-color="'#C0C0C0'"
                    :show-rating="false"
                />
              </div>
              <p class="paragraph small">Дата: {{ review.datePosted}}</p>
            </a>

          </div>
        </div>
      </div>
      <div class="content-center"> <!-- Використовуємо класи mx-auto та text-center -->
        <img src="../assets/more.png" class="h-20"  v-if="!allReviewsLoaded" @click="animateLoadMore" ref="loadMoreImg" >      </div>
      </div>

  </div>
</template>

<script>
import axios from 'axios';
import StarRating from 'vue-star-rating'

export default({
  components: {
    StarRating
  },
  data() {
    return {
      reviews: [],
      displayedReviews: [],
      batchSize: 6,
      loadedReviewsCount: 0,
      allReviewsLoaded: false
    }
  },
  methods: {

    async fetchEvents() {
      const response = await axios.get('/api/reviews/all');
      this.reviews = response.data.map(review => {
        const formattedDate = new Date(review.datePosted).toISOString().slice(0, 19).replace('T', ' ');
          return { ...review, datePosted: formattedDate };
      });
      this.loadMore(); // Завантажити першу партію відгуків
    },
    getShortenedText(text) {
      const maxLength = 56; // Максимальна довжина тексту
      if (text.length > maxLength) {
        return text.slice(0, maxLength) + ' (...)'; // Додаємо посилання "(...)"
      } else {
        return text;
      }
    },
    animateLoadMore() {
      this.$refs.loadMoreImg.classList.add('animate__animated', 'animate__rotateIn');
      setTimeout(() => {
        this.$refs.loadMoreImg.classList.remove('animate__animated', 'animate__rotateIn');
        this.loadMore(); // Викликаємо функцію loadMore після закінчення анімації
      }, 700); // тривалість анімації 1 секунда
    },
    loadMore() {
      const startIndex = this.loadedReviewsCount;
      const endIndex = startIndex + this.batchSize;
      if (endIndex >= this.reviews.length) {
        this.allReviewsLoaded = true;
      }
      const reviewsToAdd = this.reviews.slice(startIndex, endIndex);
      let timeout = 0;
      reviewsToAdd.forEach(review => {
        setTimeout(() => {
          review.newlyAdded = true;
          this.displayedReviews.push(review);

        }, timeout);
        timeout += 200; // додаємо 200ms затримки між додаванням кожного відгуку
      });
      this.loadedReviewsCount += this.batchSize;
    },
    register() {
      window.location.href = "/html/access-denied.html";
    }
  },
  mounted() {
    this.fetchEvents();

  }
});
</script>

<style scoped>
  /* Стилі для активних зірочок */
  .card {
    padding: 20px;
    width: 300px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
.ebook-box.w-dyn-item{
  width: 350px;
}
  .content-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }


</style>

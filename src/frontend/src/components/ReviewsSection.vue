<template>
  <div class="section">
    <div class="container">
      <div class="section-top">
        <h2 class="heading h3 ">Топ відгуки</h2>
        <a href="/resources" class="button light mobile-hidden w-button">Побачити всі категорії</a>
      </div>
      <div class="w-dyn-lists w-1">
        <div role="list" class="large-3-grid w-dyn-items ">
          <div v-for="review in displayedReviews" :key="review.id" class="ebook-box w-dyn-item" >
            <a :href="'/reviews/' + review.id" class="ebook-thumbnail w-inline-block no-underline">
              <img alt="Event Cover" height="150" src="/image/img.png" width="150">
            </a>
            <a :href="'/event/' + review.id" class="card-text-link w-inline-block no-underline">
              <h2 class="heading h4">{{ getShortenedText(review.comment) }}</h2>
              <div class="paragraph small">Рейтинг: {{ review.rating }}</div>
              <p class="paragraph small">Дата: {{ review.datePosted}}</p>
            </a>
            <footer class="card-footer">
              <a @click="register(review)" class="small-button w-button" :data-event-id="review.id">Підтримати</a>
            </footer>
          </div>
        </div>
      </div>
      <div class="mx-auto mt-10"> <!-- Використовуємо класи mx-auto та text-center -->
        <img src="../assets/more.png" class="h-20"  v-if="!allReviewsLoaded" @click="loadMore" >
      </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default({
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
    loadMore() {
      const startIndex = this.loadedReviewsCount;
      const endIndex = startIndex + this.batchSize;
      if (endIndex >= this.reviews.length) {
        this.allReviewsLoaded = true;
      }
      this.reviews.slice(startIndex, endIndex).forEach(review => {
        const formattedDate = new Date(review.datePosted).toISOString().slice(0, 19).replace('T', ' ');
        this.displayedReviews.push({ ...review, datePosted: formattedDate });
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

.ebook-box.w-dyn-item{
  width: 350px;
}

</style>

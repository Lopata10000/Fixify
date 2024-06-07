<template>
  <div class="section">
    <div class="container">
      <div class="section-top">
        <h2 class="heading h3">Топ відгуки</h2>
        <a href="/resources" class="button light mobile-hidden w-button">Побачити всі категорії</a>
      </div>
      <div class="w-dyn-lists">
        <div role="list" class="large-3-grid w-dyn-items">
          <div  v-for="review in reviews" :key="review.id" class="ebook-box w-dyn-item" role="listitem">
            <a :href="'/reviews/' + review.id" class="ebook-thumbnail w-inline-block">
              <img alt="Event Cover" height="150" src="/image/img.png" width="150">
            </a>
            <a :href="'/event/' + review.id" class="card-text-link w-inline-block">
              <h2 class="heading h3">{{ review.comment }}</h2>
              <div class="paragraph small">Rating: {{ review.rating }}</div>
              <p class="paragraph small">Date Posted: {{ review.datePosted }}</p>
            </a>
            <footer class="card-footer">
              <a @click="register(review)" class="small-button w-button" :data-event-id="review.id">Підтримати</a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default({
  data() {
    return {
      reviews: []
    }
  },
  methods: {
    async fetchEvents() {
      const response = await axios.get('/api/reviews/all');
      this.reviews = response.data;

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
.revie{
  max-height: 300px;
}
</style>

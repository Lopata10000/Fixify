const app = new Vue({
    el: '#app',
    data() {
        return {
            reviews: []
        }
    },
    methods: {
        async fetchEvents() {
            const headers = {};
            const response = await axios.get('/api/reviews/all');
            this.reviews = response.data;

        },
        register(review) {
            window.location.href = "/html/access-denied.html";

        }
    },
    mounted() {
        this.fetchEvents();
    }
});
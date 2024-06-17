<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const activeTab = ref('accepted')
const services = ref([])
let userId ="";
onMounted(async () => {
  await fetchServices(activeTab.value)
  await getUserId()
})
async function getUserId() {
  axios.get('/v1/get-authority/id')
      .then(response => {
        userId = response.data;
      })
      .catch(error => {
        if (error.response && error.response.status === 403) {
          this.showError();
        } else {
          this.showError();
        }
      });
}
async function fetchServices(tab) {
  try {
    const response = await axios.get(`/api/projects/user/${userId}/${tab}`)
    services.value = response.data
  } catch (error) {
    console.error(error)
  }
}

function newTask()
{
  window.location.href = "/new-task";

}
function newReview()
{
  window.location.href = "/create-review";

}
function onTabClick(event) {
  activeTab.value = event.target.value
  fetchServices(activeTab.value)
}
</script>

<template>
  <section>

    <div class="section light-grey">
      <div class="container">
        <div class="terms-card">
          <div class="content-center">
            <ul class="nav nav-tabs position-relative" id="tables" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                    class="nav-link"
                    id="archive"
                    data-tab="archive"
                    value="archive"
                    data-bs-toggle="tab"
                    type="button"
                    aria-selected="false"
                    @click="newTask">
                  +
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                    class="nav-link active"
                    id="accepted"
                    data-tab="accepted"
                    value="accepted"
                    data-bs-toggle="tab"
                    data-bs-target="#all-posts"
                    type="button"
                    @click="onTabClick($event)">
                  В роботі
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                    class="nav-link"
                    id="await"
                    data-tab="await"
                    value="await"
                    data-bs-toggle="tab"
                    data-bs-target="#all-posts"
                    type="button"
                    @click="onTabClick($event)">
                  Очікують спеціаліста
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                    class="nav-link"
                    id="archive"
                    data-tab="archive"
                    value="archive"
                    data-bs-toggle="tab"
                    type="button"
                    aria-selected="false"
                    @click="onTabClick($event)">
                  Архів послуг
                </button>
              </li>
            </ul>

          </div>
            <div class="content-center">
              <section>
                <div class="content-center">
                  <div v-if="services.length > 0">
                    <div v-for="service in services" :key="service.id" class="card">
                      <h5 class="card-title">{{ service.title }}</h5>
                      <p class="card-text">Опис: {{ service.description }}</p>
                      <p class="card-text">Бюджет: {{ service.budget }}</p>
                      <p class="card-text">Статус: {{ service.status }}</p>
                      <div class="content-center">
                      <button @click=newReview v-if="activeTab === 'accepted'" class="button w-button" style="width: 200px">Відгук</button>
                      </div>
                    </div>
                  </div>
                  <p v-else>Немає послуг</p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
  </section>
</template>

<style scoped>
.card {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
}

.card-text {
  font-size: 14px;
  margin-bottom: 10px;
}
.content-center {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
}

.terms-card {
  margin-top: -90px;
  min-width: 1200px;
  margin-left: 0px;
}
</style>
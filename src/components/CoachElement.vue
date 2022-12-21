<template>
  <div class="container">
    <h2>{{ name }}</h2>
    <p>${{ price }}/hour</p>
    <ul class="categories">
      <li
        class="frontend_categorie"
        v-if="categories.find((elem) => elem == 'frontend')"
      >
        FRONTEND
      </li>
      <li
        class="backend_categorie"
        v-if="categories.find((elem) => elem == 'backend')"
      >
        BACKEND
      </li>
      <li
        class="career_categorie"
        v-if="categories.find((elem) => elem == 'career')"
      >
        CAREER
      </li>
    </ul>
    <div class="buttons_container">
      <router-link :to="path">Contact</router-link>
      <base-button-second class="ViewDeatailsButton"
        >View Details</base-button-second
      >
    </div>
  </div>
</template>

<script>
import BaseButtonSecond from "./BaseTemplates/BaseButtonSecond.vue";
export default {
  props: ["name", "price", "categories","id"],
  components: {
    BaseButtonSecond,
  },
  computed:{
    path(){
      return `/contact/${this.id}`;
    }
  }
};
</script>

<style scoped>
.container {
  height: 200px;
  width: 90%;
  margin: 30px auto;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
}
.categories {
  display: flex;
  padding: 0;
}
li {
  padding: 10px;
  border-radius: 20px;
  color: white;
  margin-left: 5px;
}
a{
  text-decoration: none;
  border-radius: 30px;
    padding: 10px 20px;
    margin-left:10px;
    border:1px solid #45006d;
    color: #45006d;
}
ul {
  list-style-type: none;
}
.frontend_categorie {
  background-color: #45006d;
}
.backend_categorie {
  background-color: blueviolet;
}
.career_categorie {
  background-color: blue;
}

.buttons_container {
  width: 50%;
  margin-top: 30px;
  margin-left: auto;
}
.ViewDeatailsButton {
  background-color: #45006d;
  color: white;
}
</style>
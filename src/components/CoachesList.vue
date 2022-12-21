<template>
<div class="list_container">
<base-button-second class="but" @click="refesh">Refresh</base-button-second>
<coach-element v-for="coach in filteredCoaches" :key="coach.id" :name="coach.name" :price="coach.price" :categories="coach.categories" :id="coach.id"></coach-element>
</div>
</template>

<script>
import CoachElement from './CoachElement';
import BaseButtonSecond from './BaseTemplates/BaseButtonSecond.vue';
export default {
    components:{
        CoachElement,
        BaseButtonSecond
    },
    computed:{
        filteredCoaches(){
            let coaches=this.$store.getters['getCoaches'];
            const filters=this.$store.getters['getFilters'];
            for(let filter of filters){
                coaches=coaches.filter(coach=>coach.categories.find(categorie=>categorie==filter));
            }
            return coaches;
        }
    }
}
</script>

<style scoped>
ul{
   list-style-type: none;
}

.list_container{
    width: 600px;
    border-radius: 10px;
    box-shadow: 2px 2px 10px 1px gray;
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 10px;
}
.but{
    margin-bottom: -30px;
}
</style>
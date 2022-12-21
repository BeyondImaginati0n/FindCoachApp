<template>
    <div class="container">
        <h2>Find Your Coach</h2>
        <section>
<input type="checkbox" name="coachtype" value="frontend" id="1" v-model="activeFilters">
        <label for="1">Frontend</label>
        <input type="checkbox" name="coachtype" value="backend" id="2" v-model="activeFilters">
        <label for="2">Backend</label>
        <input type="checkbox" name="coachtype" value="career" id="3" v-model="activeFilters">
        <label for="3">Career</label>
        </section>
    </div>
</template>

<script>
export default {
    data(){
return {
    activeFilters:[]
}
    },
 
 watch:{
    activeFilters(filters){
        this.$store.dispatch('setFiltersAct',{
            filters:filters
        })
    }
 },
 mounted(){
    this.activeFilters=this.$store.getters['getFilters'];
 } 
}
</script>

<style scoped>
input{
    margin-left: 10px;
}
.container{
    padding: 15px;
    margin: 20px auto;
width: 500px;
  box-shadow: 2px 2px 5px 2px #888888;
}
h2{
    margin: 0;
}
label{
    margin-left: 7px;
}
</style>


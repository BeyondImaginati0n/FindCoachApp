<template>
    <div class="container">
        <h2>Requests received</h2>
        <div v-for="request in requests" :key="request.id" class="requests_container">
            <h3>{{request.email}}</h3>
            <p>{{request.message}}</p>
        </div>
    </div>

</template>

<script>
export default {
    data(){
        return {
requests:[]
        }
    },
    methods:{
async gett(){
  const respons=await fetch('https://main-vue-project-ac1c3-default-rtdb.firebaseio.com/messages.json');
    const data=await respons.json();
    for(let elem in data){
        data[elem].id=Math.random()*Math.random();
        this.requests.push(data[elem]);
    }
}
    },
    mounted(){
        this.gett();
    }
}
</script>

<style scoped>
.container{
    width: 600px;
    border-radius: 10px;
    box-shadow: 2px 2px 10px 1px gray;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
}
h3{
    color:#45006d;;
}
p{
    font-weight: bold;
}
.requests_container{

    width: 600px;
    border-radius: 10px;
    box-shadow: 2px 2px 10px 1px gray;
    margin: 20px auto;
    padding-top: 20px;
    padding-bottom: 10px;
}

</style>
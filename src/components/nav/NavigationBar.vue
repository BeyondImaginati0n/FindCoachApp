<template>
<div class="container">
<h2>Find a Coach</h2>
<div class="buttons_container">
    <router-link to="/allcoaches">
    All Coaches
    </router-link>
<router-link to="/requests">Requests</router-link>
</div>
</div>
</template>
<script>
export default {
    methods:{
        show(){
            
        }
    }
}
</script>

<style scoped>
.container{
    height: 5em;
    background-color: #45006d;
    display: flex;
    justify-content: space-between;
    padding: 0px 50px;
}
.router-link-active{
    border: 1px solid rgba(255, 255, 0, 0.397);
}
h2{
    color: white;
    font-size: 25px;
}
a{
    color: rgba(248, 248, 53, 0.74);
    text-decoration: none;
    padding: 7px;
}
.buttons_container{
    margin-top: 25px;
}
button{
    margin-left: 12px;
}
</style>
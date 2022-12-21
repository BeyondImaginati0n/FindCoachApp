<template>
<div class="coach_container">
    <h2>{{coach.name}}</h2>
    <p >{{coach.price}}$/hour</p>
</div>
<div class="contact_form_container">
<h2>Interested? Reach out now!</h2>
<base-button-second :inner="true">Contact</base-button-second>
<form action="#">
<label for="emailInput">Your E-Mail</label>
<br>
    <input type="email" name="emailInput" v-model="email">
    <br>
    <label for="messageInput">Message</label>
    <br>
<textarea name="messageInput" id="" cols="30" rows="10" v-model="message"></textarea>
<base-button-second class="formbutton" :inner="true" @click.prevent="sendMessage">Send Message</base-button-second>
</form>
</div>
</template>

<script>
import BaseButtonSecond from '../BaseTemplates/BaseButtonSecond.vue';
export default {
    data(){
return{
    email:'',
    message:''
}
    },
    components:{
BaseButtonSecond
    },
    computed:{
        coach(){
            const id=this.$route.params.id;
            return this.$store.getters.getCoaches.find(coach=>coach.id==id);
           
        }
    },
    methods:{
        sendMessage(){
            fetch('https://main-vue-project-ac1c3-default-rtdb.firebaseio.com/messages.json',{
                method:'POST',
                headers:{
                    'Content-type':'applicatin/json'
                },
                body:JSON.stringify({email:this.email,message:this.message}),
            })
            this.email='';
            this.message='';
        }
    }
}
</script>

<style scoped>
.coach_container{
    width: 50%;
    margin: 30px auto;
    box-shadow: 0px 0px 5px 1px gray;
    padding: 10px;
    border-radius: 15px;
}
h2{
    font-size: 25px;
}
p{
    font-weight: bold;
    font-size: 15px;
}
.contact_form_container{
    width: 50%; 
     box-shadow: 0px 0px 5px 1px gray;
     border-radius: 15px;
     padding: 10px;
       margin: 30px auto;
}
label{
    font-weight: bold;
}
input{
    width: 100%;
    margin-bottom: 15px;
}
textarea{
    width: 100%;
}
form{
    border-radius: 15px;
    border: 1px solid gray;
    margin: 10px;
padding: 10px;
padding-bottom: 20px;
width: 90%;
}
.formbutton{
    margin-left:40%;
    margin-top: 25px;
}
</style>
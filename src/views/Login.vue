<template>
  <div class="container">
     <h1>Login</h1>
     <form>
        <div><label for="email">Email Address: </label><input required autocomplete="off" type="email" name="email" v-model="emailAddress"></div>
        <div><label for="password">Password: </label><input required autocomplete="off" type="password" name="password" v-model="password"></div>
     </form>
     <router-link to="/register">
     <p>Don't Have An Account? <span id="heart">Click Here</span></p>
     </router-link>
    <div class="containers" v-if="click && !user">
        <div class="wrapper">
          <div class="ball"></div>
          <div class="ball1"></div>
          <div class="ball2"></div>
        </div>
    </div>
     <button type="button" @click="login" v-else-if="!user" class="button">Submit</button>
    <div v-if="user" class="mt-4">
        <h3>Welcome {{user.username}}</h3>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            emailAddress: '',
            password: '',
            click: false
        }
    },
    methods:{
        login(){
            this.click=true
            const payload = {
                emailAddress: this.emailAddress,
                password: this.password
            }
            this.$store.dispatch('login',payload)
            this.click=false
        }
    },
    computed:{
        user(){
            return this.$store.state.user
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
@font-face {
    font-family: 'Destruction';
    src: url('../assets/fonts/gravediggerpersonaluse-k7ayw-webfont.woff2') format('woff2'),
         url('../assets/fonts/gravediggerpersonaluse-k7ayw-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}


.container{
    background: url(https://i.postimg.cc/2ynsYVps/minimal-abstract-light-silver-gold-background-105940-795.jpg) no-repeat center center/cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 100vw;
    min-height: 100vh;
    padding: 10px;
}

h1{
    font-family: 'Audiowide', cursive;
    margin-bottom: 50px;
}

h3{
    font-family: 'Destruction';
    color: black;
    font-size: 27px;
}

p{
  font-family: 'Destruction';
  color: #000000;
  font-weight: 800;
  width: 100%;
  text-align: center;
  font-size: 18px;
}

p{
    animation: heartbeat 1.5s ease-in-out 2 both;
}

form{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center !important;
    padding: 15px;
    gap: 30px;
}

@media (max-width:560px){
    form>div{
        display: grid;
    }
    h3{
        text-align: center;
    }
}


label{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    text-align: start;
    width: 200px;
}

input{
    background: #FFFFFF;
    border: 1px solid #000000;
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
    width: 300px;
    transition: all .5s;
}

@media (max-width:325px){
    input{
        width: 100%;
    }
}

input[type=password]{
    padding: 5px;
}
input[type=password]:focus{
    text-align: center;
}

input[type=email]{
    padding: 5px;
}
input[type=email]:focus{
    text-align: center;
}

/* BUTTON */
.button{
    border-right: 0;
    background: transparent;
    border-left: 0;
    border-top: 2px solid #FFD700;
    border-bottom: 2px solid #FFD700;
    letter-spacing: 3px;
    transition: all 1s;
    text-decoration: none;
    font-size: larger;
    color: Black;
}

.button:hover{
    letter-spacing: 8px;
    transition: all 1s;
}


/* LOADING BAR */
.containers {
  width: 100vw;
  display: flex;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
}

.wrapper {
  margin-left: 38px;
  width: 200px;
  height: 200px;
  position: relative;
}

.ball1 {
    background-color: rgba(0,0,0,0);
    border: 5px solid #ffd900ac;
    opacity: .9;
    border-top: 5px solid rgba(0,0,0,0);
    border-left: 5px solid rgba(0,0,0,0);
    border-radius: 100%;
/*     box-shadow: 0 0 15px #2187e7; */
    width: 30%;
    height: 30%;
    margin: 0 auto;
    position: absolute;
    top: 25%;
    left: 25%;
    animation: spin-counterclockwise 3.2s infinite linear;
}

.ball2 {
  margin: 0 auto;
  position: relative;
  top: -290px;
  background-color: transparent;
  background-image: url("https://image.flaticon.com/icons/svg/744/744104.svg");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 100%;
  box-shadow: 0 0 10px #FFD700;
  width: 10%;
  height: 10%;
  position: absolute;
  top: 35%;
  left: 35%;
  animation: spin-clockwise 3.8s infinite linear;
}

@keyframes spin-clockwise {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    };
}

@keyframes spin-counterclockwise {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(-360deg);
    };
}

@keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}

</style>
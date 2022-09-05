<template>
  <div class="container">
     <h1>Register</h1>
     <form>
        <div><label for="username">Username: </label><input type="text" name="username" v-model="username"></div>
        <div><label for="email">Email Address: </label><input type="email" name="email" v-model="emailAddress"></div>
        <div><label for="password">Password: </label><input type="password" name="password" v-model="password"></div>
        <div><label for="conpassword">Confirm Password: </label><input type="password" name="conpassword" v-model="conpassword"></div>
        <div><label for="phone">Phone Number: </label><input type="text" name="phone" maxlength="10" v-model="phone_number"></div>
        <div><label for="profilePic">Profile Picture: </label><input type="text" name="profile" v-model="profilePic"></div>
     </form>
    <div class="containers" v-if="click && !token">
        <div class="wrapper">
          <div class="ball"></div>
          <div class="ball1"></div>
          <div class="ball2"></div>
        </div>
    </div>
     <button type="button" @click="register" v-else-if="!token" class="button">Submit</button>
    <div v-if="token" class="mt-4">
        <h3>Please Proceed to the Log In</h3>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            username: '',
            emailAddress: '',
            phone_number: '',
            password:'',
            conpassword:'',
            profilePic:'https://i.postimg.cc/pL44BPD4/profile-image.jpg',
            click: false
        }
    },
    methods:{
        register(){
            this.click = true
            if (this.password === this.conpassword) {
                const payload = {
                    username: this.username,
                    emailAddress: this.emailAddress,
                    phone_number: this.phone_number,
                    password: this.password,
                    profilePic: this.profilePic,
                }

                this.$store.dispatch('register', payload)
                this.username = '';
                this.emailAddress = '';
                this.phone_number = '';
                this.password = '';
                this.conpassword = '';
                this.profilePic = '';

            } else {
                swal({
                icon: "warning",    
                text: "Password does not match",
                button: "Try Again"
                })
                this.click = false
                this.username = '';
                this.emailAddress = '';
                this.phone_number = '';
                this.password = '';
                this.conpassword = '';
                this.profilePic = '';
            }

        }
    },
    computed:{
        token(){
            return this.$store.state.token
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
.container{
    background: url(https://i.postimg.cc/2ynsYVps/minimal-abstract-light-silver-gold-background-105940-795.jpg) no-repeat center center/cover;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-width: 100vw;
    min-height: 100vh;
}

h1{
    font-family: 'Audiowide', cursive;
    margin-bottom: 50px;
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

form{
    width: 50%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    gap: 30px;
}

label{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    text-align: start;
    letter-spacing: .8px;
    width: 200px;
}

input{
    background: #FFFFFF;
    border: 1px solid #000000;
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
    width: 300px;
}

input[type=text]{
    padding: 5px;
}
input[type=text]:focus{
    text-align: center;
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

input[type=number]{
    padding: 5px;
}
input[type=number]:focus{
    text-align: center;
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
  width: 200px;
  height: 200px;
  position: relative;
}

.ball1 {
    background-color: rgba(0,0,0,0);
    border: 7px solid #ffd900ac;
    opacity: .9;
    border-top: 5px solid rgba(0,0,0,0);
    border-left: 5px solid rgba(0,0,0,0);
    border-radius: 100%;
/*     box-shadow: 0 0 15px #2187e7; */
    width: 60%;
    height: 60%;
    margin: 0 auto;
    position: absolute;
    top: 20%;
    left: 20%;
    animation: spin-counterclockwise 3.2s infinite linear;
}

.ball2 {
  margin: 0 auto;
  position: relative;
  top: -290px;
  background-color: #5e5e5e2e;
  background-image: url("https://image.flaticon.com/icons/svg/744/744104.svg");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 100%;
  box-shadow: 0 0 10px #FFD700;
  width: 30%;
  height: 30%;
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
</style>
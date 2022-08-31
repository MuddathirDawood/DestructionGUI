<template>
  <div class="offcanvas offcanvas-end" data-bs-backdrop="static" tabindex="-1" id="account" v-if="user">
  <div class="offcanvas-header">
    <button type="button" data-bs-dismiss="offcanvas" id="menubtn"><ion-icon name="exit-outline"></ion-icon></button>
    <h4 class="offcanvas-title" id="favsLabel">{{user.username}}'s Account Details</h4>
  </div>
  <div class="offcanvas-body">
      <img :src="user.profilePic" alt="Profile Picture" class="mb-4">
      <h4>Username:</h4><p>{{user.username}}</p>
      <h4>Email Address:</h4><p>{{user.emailAddress}}</p>
      <h4>Phone Number:</h4><p id="numbers">{{user.phone_number}}</p>
      <h4>Date Joined:</h4><p id="numbers">{{user.dateJoined.slice(0,10)}}</p>
      <p id="change" data-bs-toggle="modal" data-bs-target="#ChangePassword">Change Password?</p>
      <router-link to="/"><button id="logout" @click="logout" data-bs-dismiss="offcanvas">Logout</button></router-link>
  </div>
</div>

<ChangePassword :user="user"/>
</template>

<script>
import ChangePassword from './ChangePassword.vue'
export default {
  components: { ChangePassword },
    props: ['user'],
  methods:{
    logout(){
      return (this.$store.state.user = null)
    }
  }
}
</script>

<style scoped>
@font-face {
    font-family: 'Destruction';
    src: url('../assets/fonts/gravediggerpersonaluse-k7ayw-webfont.woff2') format('woff2'),
         url('../assets/fonts/gravediggerpersonaluse-k7ayw-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}


#menubtn{
  display: none !important;
  height: 49px;
  width: 49px;
  border-radius: 0;
  background: #FFD700;
  color: black;
}

.offcanvas{
  padding: 20px;
  background: #171718;
  color: #E5E4E2;
}

.offcanvas-header{
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #FFD700;
}

.offcanvas h4{
  font-family: 'Audiowide', cursive;
  margin-left: 15px;
}

.offcanvas-body{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.offcanvas-body img{
  width: 220px;
  height: 220px;
  border-radius: 500px;
}

.offcanvas-body h4{
  font-family: 'Audiowide', cursive;
  margin: 0;
  width: 100%;
  text-align: start;
}

.offcanvas-body p{
  font-family: 'Destruction';
  width: 100%;
  text-align: center;
  font-size: 18px;
}

#numbers{
  font-family: 'Times New Roman', Times, serif;
}

#menubtn{
    display: block !important;
  }

#change{
  color: #FFD700;
}  

/* BUTTON */
#logout {
 display: inline-block;
 position: relative;
 color: #fff;
 font-weight: 500;
 font-size: 14px;
 text-decoration: none;
 text-transform: uppercase;
 padding: 15px 30px;
 text-align: center;
 border: none;
 clip-path: polygon(7% 0, 93% 0, 100% 50%, 93% 100%, 7% 100%, 0 50%);
 background-color: #E5E4E2;
 background-image: radial-gradient(200% 70% at center 20%, rgba(48,44,45,1) -30%, rgba(50,46,47,1) 49%, #FFD700 50%, rgba(22,18,19,1) 150%);
 background-repeat: no-repeat;
 transition: background-position-y ease-in-out 250ms;
}

#logout a{
  text-decoration: none;
  color: white;
}

#logout a:hover{
  color: black;
}

#logout:hover {
 background-position-y: -50px;
 color: black;
}

#logout:active {
 transform: scale(0.99);
}
</style>
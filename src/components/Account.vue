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
      <div id="profButtons">
        <button type="button" id="send" data-bs-toggle="modal" data-bs-target="#ChangeProfile">Change Profile <span></span></button>
        <button type="button" id="send" data-bs-toggle="modal" data-bs-target="#DeleteProfile" class="mt-2">Delete Profile <span></span></button>
        <router-link to="/"><button type="button" id="send" class="mt-3" @click="logout" data-bs-dismiss="offcanvas">Logout <span></span></button></router-link>
      </div>
  </div>
</div>

<DeleteProfile :user="user"/>
<ChangeProfile :user="user"/>
<ChangePassword :user="user"/>
</template>

<script>
import ChangePassword from './ChangePassword.vue'
import ChangeProfile from './ChangeProfile.vue'
import DeleteProfile from './DeleteProfile.vue'
export default {
  components: { ChangePassword, ChangeProfile, DeleteProfile },
    props: ['user'],
  methods:{
    logout(){
      window.location.reload()
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

a{
  text-decoration: none;
}

#send {
 border: none;
 display: block;
 position: relative;
 padding: 10px 15px 10px 15px;
 font-size: 15px;
 background: transparent;
 overflow: hidden;
 color: #E5E4E2;
 font-family: 'Audiowide', cursive;
 text-transform: uppercase;
 z-index: 1;
 font-family: inherit;
 font-weight: 500;
}

#send span {
 position: absolute;
 left: 0;
 top: 0;
 width: 100%;
 height: 100%;
 background: transparent;
 z-index: -1;
 border: 3px solid #FFD700;
}

#send span::before {
 content: "";
 display: block;
 position: absolute;
 width: 8%;
 height: 500%;
 background: #171718;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%) rotate(-60deg);
 transition: all 0.3s;
}

#send:hover span::before {
 transform: translate(-50%, -50%) rotate(-90deg);
 width: 100%;
 background: #FFD700;
}

#profButtons{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
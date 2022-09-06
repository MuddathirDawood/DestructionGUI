<template>
  <nav>
    <div class="row">
      <div class="col-4">
        <img src="https://i.postimg.cc/GpssqyNd/Logo1.png" alt="">
      </div>
      <div class="col-xl-8">
    <ul id="main">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li>Weapons +
        <ul class="drop">
          <div>
                <router-link @click="getWeapons(era.era_id)" :to="{name: 'Weapons', params: {id: era.era_id}}" v-for="era in eras" :key="era">
                  <li>{{era.era_name}}</li>
                </router-link>
          </div>
        </ul>
      </li>
      <li>Eras +
          <ul class="drop">
            <div>
                <router-link @click="getEras(era.era_id)" :to="{name: 'Eras', params: {id: era.era_id}}" v-for="era in eras" :key="era">
                  <li>{{era.era_name}}</li>
                </router-link>
            </div>
          </ul>
      </li>
      <div v-if="user">
        <li data-bs-toggle="offcanvas" data-bs-target="#account">Account</li>
        <li data-bs-toggle="offcanvas" data-bs-target="#favs">Favourites</li>
        <li v-if="user.userRole == 'admin'"><router-link to="/admin">Admin</router-link></li>
      </div>
      <div v-else>
        <li><router-link to="/login">Log In</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
      </div>
    </ul>

      </div>
    </div>
    <div class="mobile">
      <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#Menu" id="menubtn">
        <ion-icon name="grid-outline"></ion-icon>
      </button>
      <img src="https://i.postimg.cc/GpssqyNd/Logo1.png" alt="">
      <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#favs" id="menubtn">
        <ion-icon name="bookmarks-outline"></ion-icon>
      </button>
    </div>

<!-- OFFCANVAS MENU -->
<MenuBar :eras="eras" :user="user"/>
<Favourites :eras="eras" :user="user" :favs="favourites"/>
<Account :user="user"/>

  </nav>
</template>

<script>
import Account from './Account.vue'
import Favourites from './Favourites.vue'
import MenuBar from './MenuBar.vue'

export default {
  components: { MenuBar, Favourites, Account },
    mounted(){
      this.$store.dispatch('getEras')
    },
    computed:{
      eras(){
        return this.$store.state.eras
      },
      user(){
        return this.$store.state.user
      },
      favourites(){
        return this.$store.state.favourites
      }
    },
    methods:{
      getEras(id){
        this.$store.dispatch('getEra', id)
        this.$store.dispatch('getEraWeapons', id)
      },
      getWeapons(id){
        this.$store.dispatch('getWeaponsEra', id)
      },
    },
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


*{
  margin: 0;
  padding: 0;
}

img{
    height: 65px;
    width: 300px;
}
nav{
    height: 0;
    background: rgba(0, 0, 0, 0.55);
}
#main {
  list-style: none;
  background: transparent;
  font-weight: 400;
  font-size: 0;
  text-transform: uppercase;
  /* display: inline-block; */
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
#main li {
  font-size: 0.8rem;
  display: inline-block;
  position: relative;
  padding: 15px 20px;
  cursor: pointer;
  z-index: 5;
  font-family: "Destruction";
  min-width: 120px;
}

li>a{
  text-decoration: none;
  margin: 0;
  color: #FFD700;
  font-size: 17px;
}

li{
  margin: 0;
  color: #FFD700;
  font-size: 19px;
}

.drop {
  overflow: hidden;
  list-style: none;
  position: absolute;
  padding: 0;
  width: auto;
  left: 0;
  top: 48px;
  transform: translate(0, -335px);
  transition: all 1s;
}
.drop div {
  -webkit-transform: translate(0, -100%);
  -moz-transform: translate(0, -100%);
  -ms-transform: translate(0, -100%);
  transform: translate(0, -100%);
  -webkit-transition: all 0.5s 0.1s;
  -moz-transition: all 0.5s 0.1s;
  -ms-transition: all 0.5s 0.1s;
  transition: all 0.5s 0.1s;
  background: #E5E4E2 !important;
  position: relative;
  width: 225px;
}
.drop li {
  display: block;
  padding: 0;
  width: 100%;
  background: linear-gradient(to left,#FFD700 0%,#E5E4E2 5%) !important;
  border-bottom: 1px solid black;
  color: black;
  letter-spacing: 0.1em;
  transition: all 1.2s;
  font-size: 18px;
}

.drop a>li{
  color: black;
  font-size: 15px;
}

.drop li:hover{
  background: linear-gradient(to left,#FFD700 0%,#E5E4E2 15%) !important;
}

#main li:nth-child(3):hover .drop div {
  -webkit-transform: translate(0, 0);
  -moz-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  transform: translate(0, 0);
}

#main li:nth-child(3):hover .drop {
  transform: translate(0,0);
}

#main li:nth-child(4):hover ul div {
  -webkit-transform: translate(0, 0);
  -moz-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  transform: translate(0, 0);
}

#main li:nth-child(4):hover .drop {
  transform: translate(0,0);
}

@media (max-width: 1100px){
  .col-5{
    display: none;
  }
  .col-xl-7{
    text-align: center;
  }
}

/* ----------------------------------- MOBILE ------------------------------------------- */
#menubtn{
  margin: 0 !important;
}

.mobile{
  display: flex !important;
  flex-direction: row;
  justify-content: space-between;
  height: 49px;  
  display: none;
}

.mobile img{
  height: 49px;
  display: none;
}


@media (max-width: 730px){
  .row{
    display: none;
  }
  .mobile{
    display: block;
  }
  .mobile img{
    display: block;
  }
}
</style>
<template>
  <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="Menu">
  <div class="offcanvas-header">
    <h4 class="offcanvas-title" id="MenuLabel">Destruction</h4>
    <button type="button" data-bs-dismiss="offcanvas" id="menubtn"><ion-icon name="grid-outline"></ion-icon></button>
  </div>
  <div class="offcanvas-body">
    <div>
      <router-link to="/">Home</router-link>
    </div>
    <div>
      <router-link to="/about">About</router-link>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#weapons">
        Weapons +
      </button>
      </h2>
      <div id="weapons" class="accordion-collapse collapse" data-bs-parent="#weapons">
        <div class="accordion-body">
            <li v-for="era in eras" :key="era" class="py-2 list">
              <router-link @click="getWeapons(era.era_id)" :to="{name: 'Weapons', params: {id: era.era_id}}">{{era.era_name}}</router-link>
            </li>
        </div>
      </div>
    </div>                        
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#eras">
        Eras +
      </button>
      </h2>
      <div id="eras" class="accordion-collapse collapse" data-bs-parent="#eras">
        <div class="accordion-body">
            <li v-for="era in eras" :key="era" class="py-2 list">
              <router-link @click="getWeapons(era.era_id)" :to="{name: 'Eras', params: {id: era.era_id}}">{{era.era_name}}</router-link>
            </li>
        </div>
      </div>
    </div>      
    <div v-if="user" data-bs-toggle="offcanvas" data-bs-target="#account">
      Account
    </div>
    <div v-else id="acc">
    <div>
      <router-link to="/login">Login</router-link>
    </div>
    <div>
      <router-link to="/register">Register</router-link>
    </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    props: ['eras', 'user'],
}
</script>

<style>
@font-face {
    font-family: 'customFont';
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
}

.offcanvas-body div{
  padding: 10px;
  font-family: FontAwesome;
  font-size: 21px;
}

.offcanvas-body>div>a{
  text-decoration: none;
  color: #E5E4E2;
}

.accordion-item button{
  font-family: FontAwesome;
  font-size: 21px;
}

#acc div a{
  text-decoration: none;
  color: #E5E4E2;
}

.list>a{
  text-decoration: none;
  font-family: 'customFont';
  margin: 0;
  color: #FFD700;
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: .5px;
  transition: all .4s;
}

.list>a:hover{
    letter-spacing: 1.5px;
}

.accordion-item li{
    list-style: none;
    border-bottom: 1px solid white;
}

@media (max-width: 730px){
  #menubtn{
    display: block !important;
  }
}
</style>
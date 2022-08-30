<template>
  <div class="offcanvas offcanvas-end" data-bs-backdrop="static" tabindex="-1" id="account" v-if="user">
  <div class="offcanvas-header">
    <button type="button" data-bs-dismiss="offcanvas" id="menubtn"><ion-icon name="exit-outline"></ion-icon></button>
    <h4 class="offcanvas-title" id="favsLabel">{{user.username}}'s Account Details</h4>
  </div>
  <div class="offcanvas-body">

  </div>
</div>
</template>

<script>
export default {
    props: ['user'],
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

.offcanvas-body div{
  padding: 10px;
  font-family: FontAwesome;
  font-size: 21px;
}

.accordion-item button{
  font-family: FontAwesome;
  font-size: 21px;
}

.list>a{
  text-decoration: none;
  font-family: 'Destruction';
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

#menubtn{
    display: block !important;
  }
</style>
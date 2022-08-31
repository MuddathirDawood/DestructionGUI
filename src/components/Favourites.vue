<template>
  <div class="offcanvas offcanvas-end" data-bs-backdrop="static" tabindex="-1" id="favs">
  <div class="offcanvas-header">
    <button type="button" data-bs-dismiss="offcanvas" id="menubtn"><ion-icon name="grid-outline"></ion-icon></button>
    <h4 class="offcanvas-title" id="favsLabel">Destruction Favourites</h4>
  </div>
  <div class="offcanvas-body" v-if="favs">
    <div v-for="fav in favs" :key="fav">
      <h4>{{fav.name}}</h4>
    </div>
  </div>
</div>
</template>

<script>
export default {
    props: ['eras', 'user', 'favs'],
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
  margin-left: 15px;
  font-family: 'Audiowide', cursive;
  color: white;
}

#menubtn{
  display: block !important;
}

</style>
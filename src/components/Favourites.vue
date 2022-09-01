<template>
  <div class="offcanvas offcanvas-end" data-bs-backdrop="static" tabindex="-1" id="favs">
  <div class="offcanvas-header">
    <button type="button" data-bs-dismiss="offcanvas" id="menubtn"><ion-icon name="grid-outline"></ion-icon></button>
    <h4 class="offcanvas-title" id="favsLabel">Destruction Favourites</h4>
  </div>
  <div class="offcanvas-body" v-if="favs">
        <div class="card" v-for="fav in favs" :key="fav">
        <button id="delete" @click="deleteF(fav.favouritesID)"><ion-icon name="close-circle-outline"></ion-icon></button>
        <div class="card-details">
            <img :src="fav.image" alt="" class="img-fluid">
        </div>
        <button class="card-button">{{fav.name}}</button>
        </div>
  </div>
  <div class="offcanvas-footer">
  <button class="noselect" id="clear" @click="clear"><span class="text">Clear</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span>
  </button>
  </div>
</div>
</template>

<script>
export default {
    props: ['eras', 'user', 'favs'],
    methods:{
      clear(){
        this.$store.dispatch('clearFavourites', this.user.userID)
      },
      deleteF(id){
        this.$store.dispatch('deleteFavourite', id)
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

.offcanvas-footer{
  padding-top: 15px;
  margin-top: 15px;
  border-top: 1px solid #FFD700;
  display: flex;
  justify-content: center;
}

.offcanvas-body{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 75px;
}

.offcanvas h4{
  margin-left: 15px;
  font-family: 'Audiowide', cursive;
  color: white;
}

#menubtn{
  display: block !important;
}

/* CARDS */
.card {
  position: relative;
 width: 250px;
 height: auto;
 border-radius: 20px;
 background: #f5f5f5;
 position: relative;
 border: 2px solid #c3c6ce;
 transition: 0.5s ease-out;
 overflow: visible;
}

.card-details {
 color: black;
 width: 100%;
 gap: .5em;
 display: grid;
 place-content: center;
}

.card-button {
 transform: translate(-50%, 125%);
 width: 90%;
 border-radius: 1rem;
 border: none;
 background-color: #FFD700;
 color: black;
 font-size: 1rem;
 padding: .5rem 1rem;
 font-family: 'Destruction';
 position: absolute;
 left: 50%;
 bottom: 0;
 opacity: 0;
 transition: 0.3s ease-out;
}

.text-body {
 color: rgb(134, 134, 134);
}

.card:hover {
 border-color: #FFD700;
 box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}

.card:hover .card-button {
 transform: translate(-50%, 50%);
 opacity: 1;
}

#clear {
 width: 150px;
 height: 50px;
 cursor: pointer;
 display: flex;
 align-items: center;
 background: red;
 border: none;
 border-radius: 5px;
 box-shadow: 1px 1px 3px rgba(0,0,0,0.15);
 background: #e62222;
}

#clear, #clear span {
 transition: 200ms;
}

#clear .text {
 transform: translateX(35px);
 color: white;
 font-weight: bold;
}

#clear .icon {
 position: absolute;
 border-left: 1px solid #c41b1b;
 transform: translateX(110px);
 height: 40px;
 width: 40px;
 display: flex;
 align-items: center;
 justify-content: center;
}

#clear svg {
 width: 15px;
 fill: #eee;
}

#clear:hover {
 background: #ff3636;
}

#clear:hover .text {
 color: transparent;
}

#clear:hover .icon {
 width: 150px;
 border-left: none;
 transform: translateX(0);
}

#clear:focus {
 outline: none;
}

#clear:active .icon svg {
 transform: scale(0.8);
}

#delete{
  border-radius: 25px;
  position: absolute;
  left: 80%;
  background: #c41b1b;
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  transition: all .8s;
  width: 30px;
  height: 30px;
}

#delete:hover{
  background: #e62222;
  gap: 8px;
  transition: all 1s;
  transform: scale(1.2);
}

#delete ion-icon{
  font-size: 25px;
}
</style>
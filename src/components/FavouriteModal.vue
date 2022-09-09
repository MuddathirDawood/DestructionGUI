<template>
  <div class="modal fade" :id="`FavouriteModal` + user.userID" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="FavouriteModalLabel">{{user.username}} Favourite's Modal</h5>
        <button type="button" data-bs-dismiss="modal" id="exit" @click="exit"><ion-icon name="exit-outline"></ion-icon></button>
      </div>
      <div class="modal-body" v-if="favourites">
        <div class="card my-3" v-for="fav in favourites" :key="fav">
        <div class="card-details">
            <img :src="fav.image" alt="" class="img-fluid">
        </div>
        <button class="card-button">{{fav.name}}</button>
        </div>
      </div>
      <div class="modal-body" v-else>
            <h1>No Items in Cart</h1>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="exit">OK</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import swal from 'sweetalert'
export default {
    props: ['user'],
    computed:{
        favourites(){
            return this.$store.state.favourites
        }
    },
    methods:{
        exit(){
            this.$store.state.favourites = null;
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');

.modal{
  background: rgba(0, 0, 0, 0.6);
}

#exit{
    border: 0;
    background: transparent;
    width: 75px;
    clip-path: polygon(7% 0, 93% 0, 100% 50%, 93% 100%, 7% 100%, 0 50%);
    background-color: #000000;
    background-image: radial-gradient(200% 70% at center 20%, rgba(48,44,45,1) -30%, rgba(50,46,47,1) 49%, rgba(22,18,19,1) 50%, rgba(22,18,19,1) 150%);
    background-repeat: no-repeat;
    text-align: center;
    transition: background-position-y ease-in-out 250ms;
}

#exit:hover {
 background-position-y: -50px;
}

#exit:active {
 transform: scale(0.99);
}
#exit ion-icon{
    font-size: 25px;
    color: white;
}

.modal-body{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
}

.modal-content{
  background: #E5E4E2;
  border-radius: 0;
}

.modal-header{
    border-bottom: 1px solid black;
}

.modal-footer{
    border-top: 1px solid black;
}

.btn{
    border: 0 !important;
}

h5{
  font-family: 'Audiowide', cursive;
}

img{
    border-radius: 20px;
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
 font-family: 'Audiowide', cursive;
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
</style>
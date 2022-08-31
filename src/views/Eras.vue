<template>
  <div class="container" v-if="era">
    <h1>Era: {{era[0].era_name}}</h1>
    <h3 class="text-white">UP UNTIL  {{era[0].era_period}}</h3>
    <p>{{era[0].history}} <br><br> {{era[0].history2}} <br><br> {{era[0].history3}}</p>
    <h1 class="mb-4">Weapons from this era:</h1>
    <div v-if="eraweapons" class="weapons">
        <div class="card" v-for="weapon in eraweapons" :key="weapon">
        <div class="card-details">
            <img :src="weapon.image" alt="" class="img-fluid">
        </div>
        <button class="card-button">{{weapon.name}}</button>
        </div>
    </div>
  </div>
  <div class="containers" v-else>
    <div class="wrapper">
      <div class="ball"></div>
      <div class="ball1"></div>
      <div class="ball2"></div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['id'],
    mounted(){
        this.$store.dispatch('getEra', this.id)
        this.$store.dispatch('getEraWeapons', this.id)
    },
    computed:{
        era(){
            return this.$store.state.era
        },
        eraweapons(){
            return this.$store.state.era_weapons
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
    /* background: url(https://i.postimg.cc/2ynsYVps/minimal-abstract-light-silver-gold-background-105940-795.jpg) no-repeat center center/cover; */
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: center;
    min-width: 100vw;
    min-height: 180vh;
}

p{
    padding: 35px;
    font-family: FontAwesome;
    background: rgba(0, 0, 0, 0.3);
    color: #E5E4E2;
}

h1{
    font-family: 'Audiowide', cursive;
    margin-top: 50px;
    color: #E5E4E2;
}

img{
    width: 275px; 
    height: 280px;
    border-radius: 20px;

}

.weapons{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 50px;
    margin-bottom: 15px;
}

/* From uiverse.io by @alexruix */
.card {
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
 /* height: 100%; */
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

/* LOADING BAR */
.containers {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  width: 200px;
  height: 200px;
  position: relative;
}

.ball {
    background-color: rgba(0,0,0,0);
    border: 10px solid #FFD70080;
    opacity: .9;
    border-top: 5px solid rgba(0,0,0,0);
    border-left: 5px solid rgba(0,0,0,0);
    border-radius: 100%;
/*     box-shadow: 0 0 25px #2187e7; */
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: absolute;
    animation: spin-clockwise 3s infinite linear;
}

.ball1 {
    background-color: rgba(0,0,0,0);
    border: 7px solid #FFD700;
    opacity: .9;
    border-top: 5px solid rgba(0,0,0,0);
    border-left: 5px solid rgba(0,0,0,0);
    border-radius: 100%;
/*     box-shadow: 0 0 15px #2187e7; */
    width: 80%;
    height: 80%;
    margin: 0 auto;
    position: absolute;
    top: 10%;
    left: 10%;
    animation: spin-counterclockwise 3.2s infinite linear;
}

.ball2 {
  margin: 0 auto;
  position: relative;
  top: -290px;
  background-color: #e5e4e22e;
  background-image: url("https://image.flaticon.com/icons/svg/744/744104.svg");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 100%;
  box-shadow: 0 0 10px #FFD700;
  width: 60%;
  height: 60%;
  position: absolute;
  top: 20%;
  left: 20%;
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
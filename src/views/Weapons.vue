<template>
  <div class="container" v-if="weaponsEra">
	<WeaponsCard  v-for="weapons in weaponsEra" :key="weapons" :weapons="weapons"/>
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
import WeaponsCard from '@/components/WeaponsCard.vue'
export default {
  components: { WeaponsCard },
    props: ['id'],
    mounted(){
        this.$store.dispatch('getWeaponsEra', this.id)
    },
    computed:{
        weaponsEra(){
            return this.$store.state.weaponsEra
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

.container{
    /* background: url(https://i.postimg.cc/2ynsYVps/minimal-abstract-light-silver-gold-background-105940-795.jpg) no-repeat center center/cover; */
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    align-items: center;
    gap: 50px;
    min-width: 100vw;
    min-height: 100vh;
	padding: 20px;
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
    border: 10px solid #ffd90083;
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
  background-color: transparent;
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
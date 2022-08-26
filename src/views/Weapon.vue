<template>
  <div class="container" v-if="weapon">
    <h1>{{weapon[0].name}}</h1>
  </div>
</template>

<script>
export default {
    props: ['id'],
    mounted(){
        this.$store.dispatch('getWeapon', this.id)
    },
    computed:{
        weapon(){
            return this.$store.state.weapon
        }
    }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');

.container{
    background: url(https://i.postimg.cc/2ynsYVps/minimal-abstract-light-silver-gold-background-105940-795.jpg) no-repeat center center/cover;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    align-items: center;
    gap: 50px;
    min-width: 100vw;
    min-height: 100vh;
}
</style>
<template>
  <div class="container" v-if="era">
    <h1>Era: {{era[0].era_name}}</h1>
    <h3>UP UNTIL  {{era[0].era_period}}</h3>
    <p>{{era[0].history}}</p>
    <h1>Weapons from this era:</h1>
    <div v-if="eraweapons">
        <div class="card" v-for="weapon in eraweapons" :key="weapon">
            <h3>{{weapon.name}}</h3>
        </div>
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

.container{
    background: url(https://i.postimg.cc/2ynsYVps/minimal-abstract-light-silver-gold-background-105940-795.jpg) no-repeat center center/cover;
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: center;
    min-width: 100vw;
    min-height: 175vh;
}

p{
    padding: 35px;
    font-family: FontAwesome;
    background: rgba(0, 0, 0, 0.1);
}

h1{
    font-family: 'Audiowide', cursive;
    margin-top: 50px;
}
</style>
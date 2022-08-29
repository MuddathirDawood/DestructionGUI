<template>
  <div class="container" v-if="weapon">
    <h1>Weapon</h1>
    <div class="container-card">
        <img :src="weapon[0].image" alt="Weapon Image">
        <h3>{{weapon[0].name}}</h3>
        <h5>{{weapon[0].era_name}}</h5>
        <div id="divider"></div>
        <p>{{weapon[0].description}}</p>
        <div id="buttons">
            <a onclick="history.back(-1)" class="buttons">Back</a>
            <a class="buttons">Contact For More Information</a>
        </div>
            <a id="fav"><ion-icon name="bookmark-outline"></ion-icon></a>
    </div>
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');

.container{
    /* background: url(https://i.postimg.cc/2ynsYVps/minimal-abstract-light-silver-gold-background-105940-795.jpg) no-repeat center center/cover; */
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    align-items: center;
    gap: 50px;
    min-width: 100vw;
    min-height: 100vh;
    color: white;
    padding: 15px;
}

.container-card{
    display: flex;
    flex-flow: column wrap ;
    align-items: center;
    background: rgba(255, 255, 255, 0.423);
    padding: 35px;
    width: 50%;
    height: 40%;
}

h1{
    font-family: 'Audiowide', cursive;
    color: white;
}

img{
    width: 375px;
    height: 375px;
}

#divider{
    width: 50%;
    height: 3px;
    background: #FFD700;
    border-radius: 50px;
}

h3{
  margin: 10px;
}

h5{
	 font-size: .8rem;
	 font-weight: 400;
	 text-transform: uppercase;
	 color: #E5E4E2;
     margin-top: 10px;
}

p{
    font-family: FontAwesome;
    text-align: center;
    margin: 25px;
}

#buttons{
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.buttons{
    border-top: 2px solid #FFD700;
    border-bottom: 2px solid #FFD700;
    letter-spacing: 2px;
    transition: all 1s;
    text-decoration: none;
    color: #E5E4E2;
}

.buttons:hover{
    letter-spacing: 3px;
    transition: all 1s;
}

#fav{
    margin-top: 30px;
    background: #E5E4E2;
    padding: 5px;
    border-radius: 100%;
    box-shadow: 0 3px 1px #E5E4E2;
    border: 1px solid #949393;
    transition: all .7s;
}

ion-icon{
    font-size: 40px;
    color: #FFD700;
}

#fav:hover{
    background: #949393;
    box-shadow: 0 1px 1px #E5E4E2;
    transition: all .7s;
}

</style>
<template>
  <div class="container" v-if="weapon">
    <h1>Weapon</h1>
    <div class="container-card">
        <div id="img">
            <img :src="weapon[0].image" alt="Weapon Image">
        </div>
        <h3>{{weapon[0].name}}</h3>
        <h5>{{weapon[0].era_name}}</h5>
        <div id="divider"></div>
        <p>{{weapon[0].description}}</p>
        <div id="buttons">
            <a onclick="history.back(-1)" class="buttons">Back <span></span></a>
            <a class="buttons" data-bs-toggle="modal" data-bs-target="#contact">Contact For More Information <span></span></a>
        </div>
        <button id="fav" @click="addFav">
            <svg width="515.99" height="480.73" version="1.1" viewBox="0 0 515.99347 480.73038" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:xlink="http://www.w3.org/1999/xlink">
            <metadata>
            <rdf:RDF>
            <cc:Work rdf:about="">
            <dc:format>image/svg+xml</dc:format>
            <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
            </cc:Work>
            </rdf:RDF>
            </metadata>
            <defs>
            <path class="heart" id="b" d="m372.59 17.99c-48.54 0-92.99 26.12-118 67.99-24.79-42.41-67.41-68-115.18-68-72.86 0-131.09 59.68-138.55 141.94-0.59 3.63-3.02 22.76 4.35 53.94 10.61 44.98 35.13 85.89 70.89 118.29 11.89 10.79 71.34 64.75 178.37 161.87 108.86-97.12 169.34-151.07 181.43-161.86 35.76-32.41 60.28-73.31 70.89-118.3 7.37-31.17 4.94-50.3 4.36-53.93-7.47-82.26-65.69-141.94-138.56-141.94z"/>
            <path class="shine" id="a" d="m59.07 176.3c0 5.44 4.4 9.84 9.85 9.84 5.44 0 9.84-4.4 9.84-9.84 0-43.44 35.34-78.78 78.78-78.78 5.44 0 9.84-4.4 9.84-9.84 0-5.45-4.41-9.85-9.84-9.85-54.3 0-98.47 44.17-98.47 98.47z"/>
            </defs>
            <g transform="translate(1.9963 -15.98)">
            <use width="100%" height="100%" xlink:href="#b"/>
            <use width="100%" height="100%" xlink:href="#a"/>
            </g>
            </svg>
        </button>
    </div>
    <button @click="test">Tester</button>
    <div class="similar" v-if="weapons">
        <h1>Other Weapons</h1>
        <div v-for="simweapon in (weapons.filter((weaponsRelate) => {return weaponsRelate.name != weapon[0].name}))
            .slice(5,3)" :key="simweapon">
            <h1>{{simweapon.name}}</h1>
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

  <ContactModal :weapon="weapon"/>
</template>

<script>
import swal from 'sweetalert'
import ContactModal from '@/components/ContactModal.vue'
export default {
  components: { ContactModal },
    props: ['id'],
    mounted(){
        this.$store.dispatch('getWeapon', this.id)
        this.$store.dispatch('getWeapons')
    },
    computed:{
        weapons(){
            return this.$store.state.weapons
        },
        weapon(){
            return this.$store.state.weapon
        },
        user(){
            return this.$store.state.user
        }
    },
    methods:{
        addFav(){
            if (this.user == null) {
                swal({
                    icon: 'error',
                    title: 'Please Login',
                    buttons: 'OK'
                })
            } else {
                const payload = {
                    name: this.weapon[0].name,
                    description: this.weapon[0].description,
                    image: this.weapon[0].image,
                    eraID: this.weapon[0].eraID
                }
                this.$store.dispatch('addFavourite', payload)
                document.querySelector('#fav').classList.toggle("liked");
                console.log('object');              
            }
        },
        test(){
            console.log(
                (this.weapons.filter((weaponsRelate) => {
            return weaponsRelate.name != this.weapon[0].name
            })).slice(5,3)
            );
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
    position: relative;
    display: flex;
    flex-flow: column wrap ;
    align-items: center;
    background: #ffffff6c;
    padding: 35px;
    width: 50%;
    height: 40%;
}

h1{
    font-family: 'Audiowide', cursive;
    color: white;
}

#img{
    width: 80%;
    height: 375px;
}

#img>img{
    width: 100%;
    height: 100%;
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
    display: flex;
    flex-flow: row wrap;
    gap: 50px;
}

.buttons {
 border: none;
 display: block;
 position: relative;
 padding: 10px 15px 10px 18px;
 font-size: 15px;
 background: transparent;
 overflow: hidden;
 color: black;
 text-transform: uppercase;
 z-index: 1;
 font-family: inherit;
 font-weight: 500;
 transition: all .5s;
}

.buttons span {
 position: absolute;
 left: 0;
 top: 0;
 width: 100%;
 height: 100%;
 background: transparent;
 z-index: -1;
 border: 3px solid #FFD700;
}

.buttons:hover{
    box-shadow: 0 0 8px #FFD700;
    transition: all .5s;
}

#fav {
	 display: flex;
	 justify-content: center;
	 align-items: center;
     position: absolute;
	 width: 50px;
	 height: 50px;
	 border-radius: 50%;
	 background: none;
	 border-style: initial;
     left: 86%;
	 border: 1px solid rgba(0, 0, 0, 0.45);
	 color: red;
	 cursor: pointer;
	 transition: all 0.5s ease;
}
 #fav:focus {
	 outline: none;
}
 #fav:hover {
	 box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.15);
}
 #fav.liked {
	 border-color: #ff1919;
	 animation: shadow-grow 2s;
}
 #fav.liked svg {
	 animation: heart-grow 0.7s;
}
 #fav.liked .heart {
	 fill: #ff1919;
}
 #fav svg {
	 width: 20px;
	 height: auto;
}
 #fav svg .heart {
	 fill: rgba(0, 0, 0, 0.45);
}
 #fav svg .shine {
	 fill: #fff;
}
 @keyframes shadow-grow {
	 0% {
		 box-shadow: 0 0;
	}
	 50% {
		 box-shadow: 0 0 5px 20px rgba(255, 255, 255, 0);
	}
	 100% {
		 box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
	}
}
 @keyframes heart-grow {
	 0% {
		 transform: scale(3);
		 opacity: 0;
	}
	 50% {
		 opacity: 1;
	}
	 100% {
		 transform: scale(1);
	}
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

@media (max-width:1000px){
    .container-card{
        width: 70%;
    }
}

@media (max-width:730px){
    .container-card{
        width: 85%;
    }
}

@media (max-width:588px){
    .container-card{
        width: 95%;
        padding: 20px;
    }
    h3{
       text-align: center; 
    }
    p{
       margin: 10px; 
    }
    #buttons{
        flex-direction: column;
        gap: 10px;
    }
    .buttons{
        text-align: center;
    }
}

@media (max-width:400px){
    .container-card{
        width: 85%;
    }
    #img{
        width: 100%;
        height: 300px;
    }
    #fav{
        left: 40%;
        top: -2%;
    }
}



</style>
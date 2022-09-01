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
            <a class="buttons" data-bs-toggle="modal" data-bs-target="#contact">Contact For More Information</a>
        </div>
        <button aria-label="Favourite" id="fav" @click="addFav">
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
    },
    computed:{
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

button {
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
 button:focus {
	 outline: none;
}
 button:hover {
	 box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.15);
}
 button.liked {
	 border-color: #ff1919;
	 animation: shadow-grow 2s;
}
 button.liked svg {
	 animation: heart-grow 0.7s;
}
 button.liked .heart {
	 fill: #ff1919;
}
 button svg {
	 width: 20px;
	 height: auto;
}
 button svg .heart {
	 fill: rgba(0, 0, 0, 0.45);
}
 button svg .shine {
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

</style>
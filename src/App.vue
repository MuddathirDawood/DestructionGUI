<template>
  <main>
  <header>
    <navbar/>
  </header>
    <router-view/>
  </main>
  <footer>
    <FooterCom/>
  </footer>
</template>

<script>
import FooterCom from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar, FooterCom },
  
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

header{
  height: 65px;
  min-width: 100vw;
}

.offcanvas-body{
  overflow-x: hidden;
}

.modal-backdrop{
  position: relative !important;
}

@media (max-width:1100px){
  header{
    height: 49px;
  }
}

main{
  min-height: 100vh;
  min-width: 100vw;
  background: url('https://i.postimg.cc/nhjnxNcF/10730876.jpg')no-repeat center center/cover;
}

footer{
  height: 175px;
  min-width: 100vw;
}

body{
  overflow-x: hidden;
}

/*\\\\ SCROLLBARR ////*/
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-track {
  background: #E5E4E2;
}
::-webkit-scrollbar-thumb {
  background: #FFD700;
}
</style>

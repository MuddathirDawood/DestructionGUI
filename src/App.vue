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
  background-color: rgba(0, 0, 0, 0.56);
  /* display: flex; */
  /* justify-content: space-between; */
  height: 65px;
  min-width: 100vw;
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

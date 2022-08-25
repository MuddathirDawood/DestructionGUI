<template>
  <main>
  <header>
    <navbar/>
  </header>
    <router-view/>
  </main>
  <footer>
    <footer/>
  </footer>
</template>

<script>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar, Footer },
  
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

header{
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-between;
  height: 75px;
  min-width: 100vw;
}

main{
  min-height: 85vh;
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
</style>

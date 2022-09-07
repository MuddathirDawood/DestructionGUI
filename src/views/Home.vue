<template>
  <div class="container">
        <h1>Destruction <span>Weapons of Annihilation</span></h1>
  </div>
</template>

<script>
export default {

}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');

*{
  margin: 0;
  padding: 0;
}

.container{
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1{
  font-family: 'Audiowide', cursive;
  color: #E5E4E2;
  text-transform: uppercase;
  position: relative;
  font-size: 75px;
  transition: all 1s;
}

h1>span{
  text-transform: none;
  position: absolute;
  color: #FFD700;
  font-size: 35px;
  width: 500px;
  top: 85%;
  left: 35%;
  transition: all 1s;
}

@media (max-width: 800px){
  h1{
    font-size: 44px;
  }
  h1>span{
    font-size: 25px;
  }
}

@media (max-width: 600px){
  h1{
    font-size: 32px;
  }
  h1>span{
    width: 200px;
    left: 0;
    font-size: 14px;
  }
}

</style>
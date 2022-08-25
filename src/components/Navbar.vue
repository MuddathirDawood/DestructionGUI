<template>
  <nav>
    <ul id="main">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li>Weapons +
        <ul class="drop">
          <div>
            <li>Prehistory and the Ancient World</li>
            <li>Early Middle Ages</li>
            <li>Late Middle Ages</li>
            <li>Early Modern Period</li>
            <li>Modern Period</li>
          </div>
        </ul>
      </li>
      <li>Eras +
          <ul class="drop">
            <div>
                <li><router-link :to="{name:'Eras', params: {id: 1}}">Prehistory and the Ancient World</router-link></li>
                <li><router-link :to="{name:'Eras', params: {id: 2}}">Early Middle Ages</router-link></li>
                <li><router-link :to="{name:'Eras', params: {id: 3}}">Late Middle Ages</router-link></li>
                <li><router-link :to="{name:'Eras', params: {id: 4}}">Early Modern Period</router-link></li>
                <li><router-link :to="{name:'Eras', params: {id: 5}}">Modern Period</router-link></li>
            </div>
          </ul>
      </li>
      <li><router-link to="/login">Log In</router-link></li>
      <li><router-link to="/register">Register</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}

img{
    height: 75px;
    width: 200px;
}
nav{
    display: flex;
    justify-content: end;
    align-items: flex-end;
}
#main {
  list-style: none;
  background: transparent;
  font-weight: 400;
  font-size: 0;
  text-transform: uppercase;
  display: inline-block;
  padding: 0;
  margin: auto;
}
#main li {
  font-size: 0.8rem;
  display: inline-block;
  position: relative;
  padding: 15px 20px;
  cursor: pointer;
  z-index: 5;
  min-width: 120px;
}

li>a{
  text-decoration: none;
  margin: 0;
  color: #FFD700;
}
li{
  margin: 0;
  color: #FFD700;
}

.drop {
  overflow: hidden;
  list-style: none;
  position: absolute;
  padding: 0;
  width: auto;
  left: 0;
  top: 48px;
  transform: translate(0, -335px);
  transition: all 1s;
}
.drop div {
  -webkit-transform: translate(0, -100%);
  -moz-transform: translate(0, -100%);
  -ms-transform: translate(0, -100%);
  transform: translate(0, -100%);
  -webkit-transition: all 0.5s 0.1s;
  -moz-transition: all 0.5s 0.1s;
  -ms-transition: all 0.5s 0.1s;
  transition: all 0.5s 0.1s;
  background: #E5E4E2 !important;
  position: relative;
  width: 200px;
}
.drop li {
  display: block;
  padding: 0;
  width: 100%;
  background: linear-gradient(to left,#FFD700 0%,#E5E4E2 5%) !important;
  border-bottom: 1px solid black;
  color: black;
  letter-spacing: 0.1em;
  transition: all 1.2s;
}

.drop li>a{
  color: black;
}

.drop li:hover{
  background: linear-gradient(to left,#FFD700 0%,#E5E4E2 15%) !important;
}

#main li:nth-child(3):hover .drop div {
  -webkit-transform: translate(0, 0);
  -moz-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  transform: translate(0, 0);
}

#main li:nth-child(3):hover .drop {
  transform: translate(0,0);
}

#main li:nth-child(4):hover ul div {
  -webkit-transform: translate(0, 0);
  -moz-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  transform: translate(0, 0);
}

#main li:nth-child(4):hover .drop {
  transform: translate(0,0);
}
</style>
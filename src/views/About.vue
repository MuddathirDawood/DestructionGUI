<template>
  <div class="container">
    <h1>About</h1>
    <p>This is a website that was created as our capstone project for the Life Choices Coding Academy. The assignment was to create anything we wanted using everything we had learned about HTML5, CSS3, and Javascript, which is further divided into Vue.js, Bootstrap, Node.js, and MySQL throughout the six months I spent there. <br> 
    I chose this topic because I didn't want to do something common, and because I'm interested in the history of weapons, I decided to create an information website with various weapons used throughout history as well as some background knowledge about those weapons and the historical periods they were used in. The result is the website you're currently visiting.</p>
  </div>
  <div id="divider"></div>
  <div class="aboutme">
    <h1>About Me</h1>
    	<div class="card profile-card-3">
    	    <div class="background-block">
    	        <img src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb" alt="profile-sample1" class="background"/>
    	    </div>
    	    <div class="profile-thumb-block">
    	        <img src="https://i.postimg.cc/TYMWc9S1/Muddathir.jpg" alt="profile-image" class="profile"/>
    	    </div>
    	    <div class="card-content">
            <h2>Muddathir Dawood<small>Aspiring Full Stack Developer</small></h2>
            <div class="icon-block">
                <a href="https://github.com/MuddathirDawood?tab=repositories" target="blank"><ion-icon name="logo-github"></ion-icon></a>
                <a href="https://muddathir-vue-portfolio.web.app/" target="blank"><ion-icon name="link-outline"></ion-icon></a>
                <a href="https://www.linkedin.com/in/muddathir-dawood-382557237/" target="blank"><ion-icon name="logo-linkedin"></ion-icon></a>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

h1{
   font-family: 'Audiowide', cursive; 
   color: #E5E4E2; 
}

p{
    border-radius: 4px;
    background: #ffffffb3;
    padding: 12px;
    font-family: FontAwesome;
}

#divider{
    margin: auto;
    background: #FFD700;
    height: 5px;
    width: 50%;
}

.aboutme{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;    
}

/* PROFILE CARD */
.profile-card-3 {
  font-family: 'Open Sans', Arial, sans-serif;
  position: relative;
  float: left;
  overflow: hidden;
  width: 375px;
  text-align: center;
  height:368px;
  border:none;
}

@media (max-width: 410px){
    .profile-card-3{
        width: 100%;
    }
}
.profile-card-3 .background-block {
    float: left;
    width: 100%;
    height: 200px;
    overflow: hidden;
}
.profile-card-3 .background-block .background {
  width:100%;
  vertical-align: top;
  opacity: 0.9;
  -webkit-filter: blur(0.5px);
  filter: blur(0.5px);
   -webkit-transform: scale(1.8);
  transform: scale(2.8);
}
.profile-card-3 .card-content {
  width: 100%;
  padding: 15px 25px;
  color:#232323;
  float:left;
  background:#efefef;
  height:50%;
  border-radius:0 0 5px 5px;
  position: relative;
  z-index: 5;
}
.profile-card-3 .card-content::before {
    content: '';
    background: #efefef;
    width: 120%;
    height: 100%;
    left: 11px;
    bottom: 51px;
    position: absolute;
    z-index: -1;
    transform: rotate(-13deg);
}
.profile-card-3 .profile {
  border-radius: 50%;
  position: absolute;
  bottom: 50%;
  left: 50%;
  max-width: 100px;
  opacity: 1;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  border: 2px solid rgba(255, 255, 255, 1);
  -webkit-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%) scale(1.2);
  z-index:6;
}
.profile-card-3 h2 {
  margin: 0 0 5px;
  font-weight: 600;
  font-size:25px;
}
.profile-card-3 h2 small {
  display: block;
  font-size: 15px;
  margin-top:10px;
}
.profile-card-3 ion-icon {
  display: inline-block;
    font-size: 16px;
    color: #232323;
    text-align: center;
    border: 1px solid #232323;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    margin:0 5px;
    transition: all .5;
}
.profile-card-3 .icon-block{
    float:left;
    width:100%;
    margin-top:15px;
}
.profile-card-3 .icon-block a{
    text-decoration:none;
}
.profile-card-3 ion-icon:hover {
  background-color:#232323;
  color:#fff;
  text-decoration:none;
  transition: all .5s;
}


</style>
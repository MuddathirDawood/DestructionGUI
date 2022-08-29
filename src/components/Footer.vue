<template>
    <div class="footer-section">
      <div class="container">
        <div class="footer-cta py-5">
            <div class="row">
                <div class="col-xl-4 col-md-4 my-auto">
                    <div class="single-cta">
                        <ion-icon name="map-outline"></ion-icon>
                        <div class="cta-text">
                            <h4>Find Me</h4>
                            <span>Bolton Rd, Mitchell's Plain, Cape Town</span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-4 my-auto">
                    <div class="single-cta">
                        <ion-icon name="phone-portrait-outline"></ion-icon>
                        <div class="cta-text">
                            <h4>Call Me</h4>
                            <span>+27 81 049 6540</span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-4 my-auto">
                    <div class="single-cta">
                        <ion-icon name="send-outline"></ion-icon>
                        <div class="cta-text">
                            <h4>Mail Me</h4>
                            <span>dmuddathir@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       <div id="img">
            <img src="https://i.postimg.cc/GpssqyNd/Logo1.png" alt="">
       </div>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
ul {
  margin: 0px;
  padding: 0px;
}
.footer-section {
background: #151414;
z-index: 2;
}
.footer-cta {
border-bottom: 1px solid #373636;
}
.single-cta ion-icon {
color: #FFD700;
font-size: 30px;
float: left;
margin-top: 8px;
}
.cta-text {
padding-left: 15px;
display: inline-block;
}
.cta-text h4 {
color: #fff;
font-size: 20px;
font-weight: 600;
margin-bottom: 2px;
}
.cta-text span {
color: #757575;
font-size: 15px;
}

#img{
  width: 300px;
  height: 65px;
}

img{
    width: 100%;
    height: 100%;
}

.container{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}
</style>
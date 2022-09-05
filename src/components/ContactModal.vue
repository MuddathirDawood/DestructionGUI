<template>
  <div class="modal fade" id="contact" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" v-if="weapon">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="ContactLabel">Contact Admin</h5>
        <button type="button" data-bs-dismiss="modal" id="exit"><ion-icon name="exit-outline"></ion-icon></button>
      </div>
      <div class="modal-body">
        <form action="https://formspree.io/f/xbjblndy" method="post" target="blank">
            <div class="input-group my-2">
              <input required type="text" name="name" autocomplete="off" class="input" v-model="name">
              <label class="user-label">Name: </label>
            </div>        
            <div class="input-group my-2">
              <input required type="text" name="email" autocomplete="off" class="input" v-model="email">
              <label class="user-label">Email: </label>
            </div>
            <div class="input-group my-2">
              <input required type="text" name="subject" autocomplete="off" class="input" v-model="weapon[0].name">
              <label class="user-label">Subject: </label>
            </div>
            <textarea name="message" id="message" cols="50" rows="5" class="mt-3" ></textarea>
            <button type="submit" id="send" class="mt-3">Send Email <span></span></button>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import swal from 'sweetalert'
export default {
    props: ['weapon']
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');

.modal{
  background: rgba(0, 0, 0, 0.6);
}

#exit{
    border: 0;
    background: transparent;
    width: 75px;
    clip-path: polygon(7% 0, 93% 0, 100% 50%, 93% 100%, 7% 100%, 0 50%);
    background-color: #000000;
    background-image: radial-gradient(200% 70% at center 20%, rgba(48,44,45,1) -30%, rgba(50,46,47,1) 49%, rgba(22,18,19,1) 50%, rgba(22,18,19,1) 150%);
    background-repeat: no-repeat;
    text-align: center;
    transition: background-position-y ease-in-out 250ms;
}

#exit:hover {
 background-position-y: -50px;
}

#exit:active {
 transform: scale(0.99);
}
#exit ion-icon{
    font-size: 25px;
    color: white;
}

.modal-content{
  background: #E5E4E2;
}

.modal-header{
    border-bottom: 1px solid black;
}

h5{
    font-family: 'Audiowide', cursive;
}

.modal-footer{
    border-top: 1px solid black;
}

.modal-header h5{
    font-family: 'Audiowide', cursive;
}

form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;    
}

#send {
 border: none;
 display: block;
 position: relative;
 padding: 10px 15px 10px 15px;
 font-size: 15px;
 background: transparent;
 overflow: hidden;
 color: black;
 z-index: 1;
 font-family: inherit;
 font-weight: 500;
}

#send span {
 position: absolute;
 left: 0;
 top: 0;
 width: 100%;
 height: 100%;
 background: transparent;
 z-index: -1;
 border: 3px solid #FFD700;
}

#send span::before {
 content: "";
 display: block;
 position: absolute;
 width: 8%;
 height: 500%;
 background: #E5E4E2;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%) rotate(-60deg);
 transition: all 0.3s;
}

#send:hover span::before {
 transform: translate(-50%, -50%) rotate(-90deg);
 width: 100%;
 background: #FFD700;
}

#send:hover {
 color: black;
}

#send:active span::before {
 background: #FFD700;
}

/* INPUTS */
.input-group {
 position: relative;
 width: 75%;
}

.input {
 border: solid 1.5px #9e9e9e;
 border-radius: 10px !important;
 background: none;
 padding: .6rem;
 width: 100%;
 font-size: 1rem;
 color: Black;
 transition: border 150ms cubic-bezier(0.4,0,0.2,1);
}

.user-label {
 position: absolute;
 left: 15px;
 color: black;
 pointer-events: none;
 transform: translateY(1rem);
 transition: 150ms cubic-bezier(0.4,0,0.2,1);
}

.input:focus, input:valid {
 outline: none;
 border: 1.5px solid #FFD700;
}

.input:focus ~ label, input:valid ~ label {
 transform: translateY(-50%) scale(0.8);
 background-color: #E5E4E2;
 padding: 0 .2em;
 color: black;
}

textarea{
    padding: 10px;
}
</style>
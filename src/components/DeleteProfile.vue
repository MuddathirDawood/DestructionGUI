<template>
  <div class="modal fade" id="DeleteProfile" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="DeleteProfileLabel">Delete Profile</h5>
        <button type="button" data-bs-dismiss="modal" id="exit"><ion-icon name="exit-outline"></ion-icon></button>
      </div>
      <div class="modal-body">
          <h3>Are you sure you want to <span>DELETE</span> your account?</h3> 
          <div class="input-group my-2">
            <input required type="password" name="password" autocomplete="off" class="input" v-model="password">
            <label class="user-label">Please type in your Password to confirm</label>
        </div>                
      </div>
      <div class="modal-footer">
          <button class="noselect" id="clear" @click="deleteU" data-bs-dismiss="modal"><span class="text">Yes</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span>
  </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import swal from 'sweetalert'
export default {
    props: ['user'],
    data(){
      return{
        password: ''
      }
    },
    computed:{
      login(){
        return this.$store.state.login
      }
    },
    methods:{
        deleteU(){
          if (this.password != this.login.password) {
            swal({
              icon: 'error',
              title: 'Incorrect Password',
              text: 'Your password is incorrect',
              buttons: 'Try Again'
            })
          } else {
            this.$store.dispatch('deleteUser', this.user.userID)
          }
        }
    }
}
</script>

<style scoped>
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

span{
  color: #e62222;
}

.modal-body{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.modal-content{
  background: #E5E4E2;
  border-radius: 0;
}

.modal-header{
    border-bottom: 1px solid black;
}

.modal-footer{
    border-top: 1px solid black;
}

.btn{
    border: 0 !important;
}

h5{
  font-family: 'Audiowide', cursive;
}

#clear {
 width: 150px;
 height: 50px;
 cursor: pointer;
 display: flex;
 align-items: center;
 background: red;
 border: none;
 border-radius: 5px;
 box-shadow: 1px 1px 3px rgba(0,0,0,0.15);
 background: #e62222;
}

#clear, #clear span {
 transition: 200ms;
}

#clear .text {
 transform: translateX(35px);
 color: white;
 font-weight: bold;
}

#clear .icon {
 position: absolute;
 border-left: 1px solid #c41b1b;
 transform: translateX(110px);
 height: 40px;
 width: 40px;
 display: flex;
 align-items: center;
 justify-content: center;
}

#clear svg {
 width: 15px;
 fill: #eee;
}

#clear:hover {
 background: #ff3636;
}

#clear:hover .text {
 color: transparent;
}

#clear:hover .icon {
 width: 150px;
 border-left: none;
 transform: translateX(0);
}

#clear:focus {
 outline: none;
}

#clear:active .icon svg {
 transform: scale(0.8);
}

/* INPUTS */
.input-group {
 position: relative;
 width: 100%;
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

</style>
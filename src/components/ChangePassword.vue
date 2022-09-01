<template>
  <div class="modal fade" id="ChangePassword" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="ChangePasswordLabel">Change Password</h5>
        <button type="button" data-bs-dismiss="modal" id="exit"><ion-icon name="exit-outline"></ion-icon></button>
      </div>
      <div class="modal-body">
        <div class="input-group my-2">
          <input required type="password" name="newpassword" autocomplete="off" class="input" v-model="newpassword">
          <label class="user-label">New Password</label>
        </div>
        <div class="input-group my-2">
          <input required type="password" name="connewpassword" autocomplete="off" class="input" v-model="connewpassword">
          <label class="user-label">Confirm New Password</label>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" @click="change">Save Changes</button>
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
            newpassword: '',
            connewpassword: ''
        }
    },
    methods:{
        change(){
            if (this.newpassword !== this.connewpassword) {
                swal({
                    icon: 'error',
                    title: 'Your passwords do not match'
                })
            } else {
                const payload = {
                    password: this.newpassword
                }
                this.$store.dispatch('changePassword', payload)
            }
        }
    }
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

/* INPUTS */
.input-group {
 position: relative;
 width: 50%;
}

.input {
 border: solid 1.5px #9e9e9e;
 border-radius: 10px;
 background: none;
 padding: 1rem;
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
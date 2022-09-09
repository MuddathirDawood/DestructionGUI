<template>
<div class="container">
  <h1>Admin</h1>
<table class="table" v-if="weapons" id="weapons">
  <h1>Weapons</h1>
  <tr>
    <th class="table_heading">ID</th>
    <th class="table_heading">Name</th>
    <th class="table_heading">Description</th>
    <th class="table_heading">Image</th>
    <th class="table_heading">EraID</th>
    <th class="table_heading"><button class="functionAdd p-1" data-bs-toggle="modal" data-bs-target="#addweapon"><ion-icon name="add-circle-outline"></ion-icon></button></th>
  </tr>
  <tr class="table_row" v-for="weapon in weapons" :key="weapon" :weapon="weapon">
    <td class="table_content" data-heading="ID">{{weapon.weapon_id}}</td>
    <td class="table_content" data-heading="Name">{{weapon.name}}</td>
    <td class="table_content" data-heading="Desc.">{{weapon.description}}</td>
    <td class="table_content" data-heading="Image"><img :src="weapon.image" alt=""></td>
    <td class="table_content" data-heading="EraID">{{weapon.eraID}}</td>
    <td class="table_content" data-heading="ADD" data-bs-toggle="modal" data-bs-target="#addweapon">
        <button class="functionDelete m-1 p-1"  data-bs-toggle="modal" :data-bs-target="`#deleteweapon`+ weapon.weapon_id"><ion-icon name="trash-outline"></ion-icon></button>
        <button class="functionEdit m-1 p-1" data-bs-toggle="modal" :data-bs-target="`#editWeapon`+ weapon.weapon_id"><ion-icon name="create-outline"></ion-icon></button>
    </td>
    <DeleteWeaponModal :weapon="weapon"/>
    <AddWeaponModal/>
    <EditWeaponModal :weapon="weapon"/>
  </tr>
</table>
<table class="table" v-if="users" id="users">
  <h1>Users</h1>
  <tr>
    <th class="table_heading">ID</th>
    <th class="table_heading">Username</th>
    <th class="table_heading">Email Address</th>
    <th class="table_heading">Phone Number</th>
    <th class="table_heading">User Role</th>
    <th class="table_heading">Profile Pic</th>
    <th class="table_heading">Date Joined</th>
    <th class="table_heading">Favourites</th>
  </tr>
  <tr class="table_row" v-for="user in users" :key="user" :user="user">
    <td class="table_content" data-heading="ID">{{user.userID}}</td>
    <td class="table_content" data-heading="Username">{{user.username}}</td>
    <td class="table_content" data-heading="Email">{{user.emailAddress}}</td>
    <td class="table_content" data-heading="Number">{{user.phone_number}}</td>
    <td class="table_content" data-heading="UserRole">{{user.userRole}}</td>
    <td class="table_content" data-heading="PFP"><img :src="user.profilePic" alt="Profile Picture"></td>
    <td class="table_content" data-heading="Date">{{user.dateJoined.slice(0,10)}}</td>
    <td class="table_content" data-heading="Favourites"><button data-bs-toggle="modal" :data-bs-target="`#FavouriteModal`+ user.userID" @click="favourite(user.userID)">Favourites</button></td>

    <FavouriteModal :user="user"/>
  </tr>
</table>
<table class="table" v-if="eras" id="eras">
  <h1>Eras</h1>
  <tr>
    <th class="table_heading">ID</th>
    <th class="table_heading">Era Name</th>
    <th class="table_heading">Period</th>
    <th class="table_heading">History</th>
    <th class="table_heading">Edit Era</th>
  </tr>
  <tr class="table_row" v-for="era in eras" :key="era" :era="era">
    <td class="table_content" data-heading="ID">{{era.era_id}}</td>
    <td class="table_content" data-heading="Era Name">{{era.era_name}}</td>
    <td class="table_content" data-heading="Period">{{era.era_period}}</td>
    <td class="table_content" data-heading="History">{{era.history}} <br><br> {{era.history2}} <br><br> {{era.history3}}</td>
    <td class="table_content" data-heading="Edit"><button data-bs-toggle="modal" :data-bs-target="`#EditEraModal`+ era.era_id">Edit Era</button></td>
    <EraEditModal :era="era"/>
  </tr>
</table>
</div>

<!-- MODALS -->
</template>

<script>
import AddWeaponModal from '@/components/AddWeaponModal.vue'
import EditWeaponModal from '@/components/EditWeaponModal.vue'
import DeleteWeaponModal from '@/components/DeleteWeaponModal.vue'
import FavouriteModal from '@/components/FavouriteModal.vue'
import EraEditModal from '@/components/EditEraModal.vue'
export default {
  components: { AddWeaponModal, EditWeaponModal, DeleteWeaponModal, FavouriteModal, EraEditModal},
  mounted(){
    this.$store.dispatch('getWeapons')
    this.$store.dispatch('getUsers')
    this.$store.dispatch('getEras')
  },
  computed:{
    weapons(){
      return this.$store.state.weapons
    },
    users(){
      return this.$store.state.users
    },
    eras(){
      return this.$store.state.eras
    }
  },
  methods:{
    favourite(id){
      return this.$store.dispatch('getFavourites', id)
    }
  }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
@font-face {
    font-family: 'Destruction';
    src: url('../assets/fonts/gravediggerpersonaluse-k7ayw-webfont.woff2') format('woff2'),
         url('../assets/fonts/gravediggerpersonaluse-k7ayw-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container{
    background: #E5E4E2;    
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: center;
    min-width: 100vw;
    min-height: 180vh;
}

.functionAdd{
    background: rgb(59, 59, 206);
    width: 40px;
    border-radius: 50px;
    transform: scale(1.07);
    transition: all 1s;
}

.functionAdd:hover{
    background: rgb(36, 36, 181);
    transition: all 1s;
    transform: scale(1.1)
}

.functionDelete{
    background: red;
    width: 35px;
    border-radius: 50px;
    transform: scale(1.07);
    transition: all 1s;
}

.functionDelete:hover{
    background: rgb(209, 1, 1);
    transition: all 1s;
    transform: scale(1.1)
}

.functionEdit{
    background: #FFD700;
    width: 35px;
    border-radius: 50px;
    transform: scale(1.07);
    transition: all 1s;
}

.functionEdit:hover{
    background: #ba9e00;
    transition: all 1s;
    transform: scale(1.1)
}

td, th { 
    padding: 8px; 
    padding: .5rem;
}

th {
  text-align: left;
  font-weight: 300;
  font-size: 20px;
  font-size: 1.25rem;
}

img{
    width: 100px;
    height: 100px;
}

td { font-family: 'Avenir Next', 'Segoe UI', 'Lucida Grande', sans-serif; }

.table {
  width: 100%;
  padding: 16px;
  padding: 1rem;
  margin-bottom: 50px;
}

.table_content{
    color: black;
    border-bottom: 1px solid black;
}

.table_heading { 
    border-top: 2px solid #FFD700;
    border-bottom: 2px solid #FFD700;
    color: black;
    font-family: 'Audiowide', cursive;
}

#users img{
  border-radius: 20px;
}

 @media (max-width: 32rem) {
     .table_heading {
    display: none;
    }
     .table_content {
     display: block;
     padding: .5rem 0;
     border: 0;
    }
     .table_row {
     margin: .25rem 1rem;
     padding: .5rem 0;
     display: block;
     border-bottom: 2px solid #FFC842;
    }
     .table_content:before {
     content: attr(data-heading);
     display: inline-block;
     width: 5rem;
     margin-right: 1.5rem;
     color: #999;
     font-size: .75rem;
     font-weight: 700;
     font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
     text-transform: uppercase;
     letter-spacing: 2px;
    }

}

h1, h4 {
  margin: 50px auto 50px auto;
  text-align: center;
}

@keyframes float{
	0%{
		transform: translateY(0px);
	}
	50%{
		transform: translateY(-6px);
	}
	100%{
		transform: translateY(0px);
	}
}
</style>
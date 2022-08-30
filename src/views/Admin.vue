<template>
<div class="container">
  <h1>Admin</h1>
<table class="table" v-if="weapons">
  <tr>
    <th class="table_heading">ID</th>
    <th class="table_heading">Name</th>
    <th class="table_heading">Description</th>
    <th class="table_heading">Image</th>
    <th class="table_heading">EraID</th>
    <th class="table_heading"><button class="functionAdd p-1" data-bs-toggle="modal" data-bs-target="#AddWeapon"><ion-icon name="add-circle-outline"></ion-icon></button></th>
  </tr>
  <tr class="table_row" v-for="weapon in weapons" :key="weapon">
    <td class="table_content" data-heading="ID">{{weapon.weapon_id}}</td>
    <td class="table_content" data-heading="Name">{{weapon.name}}</td>
    <td class="table_content" data-heading="Desc.">{{weapon.description}}</td>
    <td class="table_content" data-heading="Image"><img :src="weapon.image" alt=""></td>
    <td class="table_content" data-heading="EraID">{{weapon.eraID}}</td>
    <td class="table_content" data-heading="ADD" data-bs-toggle="modal" data-bs-target="#AddWeapon">
        <button class="functionDelete m-1 p-1"  data-bs-toggle="modal" data-bs-target="#EditWeapon"><ion-icon name="trash-outline"></ion-icon></button>
        <button class="functionEdit m-1 p-1" data-bs-toggle="modal" data-bs-target="#EditWeapon"><ion-icon name="create-outline"></ion-icon></button>
    </td>
  </tr>
</table>
</div>

<!-- MODALS -->
<AddWeaponModal/>
<EditWeaponModal/>
</template>

<script>
import AddWeaponModal from '@/components/AddWeaponModal.vue'
import EditWeaponModal from '@/components/EditWeaponModal.vue'
export default {
  components: { AddWeaponModal, EditWeaponModal },
  mounted(){
    this.$store.dispatch('getWeapons')
  },
  computed:{
    weapons(){
        return this.$store.state.weapons
    }
  }

}
</script>

<style scoped>
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
    border-bottom: 2px solid #FFC842;
    color: black;
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
     margin-right: .5rem;
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
</style>
<template>
  <div class="modal fade" :id="`editWeapon`+ weapon.weapon_id" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="EditWeaponLabel">Edit Weapon</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label for="ID">ID:</label><input placeholder="ID" class="input py-2" name="ID" type="number" readonly :value="weapon.weapon_id">
        <label for="name">Name: </label><input placeholder="Name" class="input py-2" name="name" type="text" v-model="weapon.name">
        <label for="description">Description: </label><textarea placeholder="Description" class="input py-2" name="description" cols="25" rows="10" id="desc" v-model="weapon.description"></textarea>
        <label for="image">Image: </label><input placeholder="Image" class="input py-2" name="image" type="text" v-model="weapon.image">
        <label for="eraid">Era ID: </label><input placeholder="EraID" class="input py-2" name="eraid" type="number" readonly :value="weapon.eraID">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="edit(weapon.weapon_id)" data-bs-dismiss="modal">Save Changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['weapon'],
  methods:{
    edit(){
      const payload = {
        id: this.weapon.weapon_id,
        name: this.weapon.name,
        description: this.weapon.description,
        image: this.weapon.image
      }
      this.$store.dispatch('editWeapon', payload)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');

.modal-dialog{
  min-width: 50%;
}

.input {
  max-width: 100%;
  height: 30px;
  border: 2px solid transparent;
  outline: none;
  border-bottom: 2px solid #3f3f3f;
  caret-color: #3f3f3f;
  background-color: #ffffff;
  padding: 5px;
  transition: .5s linear;
  font-family: monospace;
  letter-spacing: 1px;
}

label{
  margin-top: 25px;
  font-size: 20px;
}

.input:focus {
  border: 2px solid #FFD700;
  caret-color: #FFD700;
  color: black;
  box-shadow: 4px 4px 10px #525252;
}

.input:focus::placeholder {
  color: #FFD700;
}

#desc{
  height: auto;
}

h5{
  font-family: 'Audiowide', cursive;
}
</style>
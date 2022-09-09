<template>
  <div class="modal fade" :id="`EditEraModal`+ era.era_id" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="EditEraLabel">Edit Era</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label for="ID">ID:</label><input placeholder="ID" class="input py-2" name="ID" type="number" readonly :value="era.era_id">
        <label for="name">Era Name: </label><input placeholder="Name" class="input py-2" name="name" type="text" v-model="era.era_name">
        <label for="image">Era Period: </label><input placeholder="Period" class="input py-2" name="image" type="text" v-model="era.era_period">
        <label for="description">History: </label><textarea placeholder="Description" class="input py-2" name="description" cols="25" rows="10" id="desc" v-model="era.history"></textarea>
        <label for="description">History2: </label><textarea placeholder="Description" class="input py-2" name="description" cols="25" rows="10" id="desc" v-model="era.history2"></textarea>
        <label for="description">History3: </label><textarea placeholder="Description" class="input py-2" name="description" cols="25" rows="10" id="desc" v-model="era.history3"></textarea>                
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="edit" data-bs-dismiss="modal">Save Changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['era'],
  methods:{
    edit(){
      const payload = {
        id: this.era.era_id,
        era_name: this.era.era_name,
        era_period: this.era.era_period,
        history: this.era.history,
        history2: this.era.history2,
        history3: this.era.history3,
      }
      this.$store.dispatch('editEra', payload)
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
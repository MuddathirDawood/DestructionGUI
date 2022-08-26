import { createStore } from 'vuex'

export default createStore({
  state: {
    era_weapons: null,
    weapon: null,
    era: null,
    eras: null,
  },
  getters: {
  },
  mutations: {
    setEra(context, era){
      context.era = era;
    },
    setEraWeapon(context, era_weapons){
      context.era_weapons = era_weapons;
    },
    setEras(context, eras){
      context.eras = eras;
    },    
  },
  actions: {
    async getEra(context, id){
      let fetched = await fetch('https://destructionapi.herokuapp.com/eras/' + id);
      let res = await fetched.json();
      context.commit('setEra',res.era)
    },
    async getEras(context){
      let fetched = await fetch('https://destructionapi.herokuapp.com/eras');
      let res = await fetched.json();
      context.commit('setEras',res.eras)
    },    
    async getEraWeapons(context, id){
      let fetched = await fetch('https://destructionapi.herokuapp.com/eras/weapons/' + id);
      let res = await fetched.json();
      context.commit('setEraWeapon',res.era_weapons)
    },       
  },
  modules: {
  }
})

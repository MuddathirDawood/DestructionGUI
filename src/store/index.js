import swal from 'sweetalert';
import { createStore } from 'vuex'

export default createStore({
  state: {
    era_weapons: null,
    weapon: null,
    era: null,
    eras: null,
    weaponsEra: null,
    user: null,
    token: null,
    weapons: null
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
    setWeaponsEra(context, weaponsEra){
      context.weaponsEra = weaponsEra;
    },
    setWeapon(context, weapon){
      context.weapon = weapon;
    },
    setUser(context, user){
      context.user = user;
    },
    setToken(context, token){
      context.token = token;
    },
    setWeapons(context, weapons){
      context.weapons = weapons;
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
    async getWeaponsEra(context, id){
      let fetched = await fetch('https://destructionapi.herokuapp.com/weapons/era/' + id);
      let res = await fetched.json();
      context.commit('setWeaponsEra',res.weapons_era)
    },    
    async getWeapon(context, id){
      let fetched = await fetch('https://destructionapi.herokuapp.com/weapons/' + id);
      let res = await fetched.json();
      context.commit('setWeapon',res.weapon)
    },    
    async getWeapons(context){
      let fetched = await fetch('https://destructionapi.herokuapp.com/weapons');
      let res = await fetched.json();
      context.commit('setWeapons',res.weapons)
    },
    register(context, payload){
      fetch('https://destructionapi.herokuapp.com/users', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.msg == "The provided email already exists") {
          swal({
          icon: "error",
          title:  "The provided email exists.",
          text: "Please enter another one",
          button: "Try Again"
          });
        } else {
          swal({
            icon: "success",
            title: "Registration Successful",
            button: "OK"
          })
          context.commit('setToken',data.token);
          setTimeout(()=>{
            router.push('/login'), 5000
          })
        }

      });

    },
    login(context, payload){
      fetch('https://destructionapi.herokuapp.com/users', {
      method: 'PATCH',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.msg == 'Email Not Found') {
          swal({
            icon: "error",
            title:  "Email Not Found",
            text: "Please register or make sure you typed in the right email",
            button: "Try Again"
            });
        } else {
          if (data.msg == 'Password is Incorrect') {
            swal({
              icon: "error",
              title:  "Password is Incorrect",
              button: "Try Again"
              });
          } else {
            swal({
            icon: "success",
            title:  `Welcome, ${data.user[0].username}`,
            closeOnClickOutside: false,
            closeOnEsc: true,
            })
            context.commit('setUser',data.user[0])
            context.commit('setToken',data.token)
            // context.dispatch('getUserFavs')
            setTimeout(()=>{
              router.push('/'), 5000
            })
          }
        }

      });

    },                     
  },
  modules: {
  }
})

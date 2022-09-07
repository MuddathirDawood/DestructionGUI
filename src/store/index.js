import router from '@/router';
import swal from 'sweetalert';
import { createStore } from 'vuex'

export default createStore({
  state: {
    era_weapons: null,
    weapon: null,
    weapons: null,
    weaponsEra: null,
    era: null,
    eras: null,
    user: null,
    users: null,
    login: null,
    token: null,
    favourites: null,
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
    setFavourites(context, favs){
      context.favourites = favs
    },
    setLogin(context, login){
      context.login = login
    },
    setUsers(context, users){
      context.users = users
    }                                   
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
    async getUsers(context){
      let fetched = await fetch('https://destructionapi.herokuapp.com/users');
      let res = await fetched.json();
      context.commit('setUsers',res.users)
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
            context.dispatch('getFavourites', data.user[0].userID)
            context.commit('setLogin', payload)
            // context.dispatch('getUserFavs')
              router.push('/')
          }
        }

      });

    },
    changePassword(context, payload){
      const { password } = payload
      const details = context.state.user
      fetch('https://destructionapi.herokuapp.com/users/' + details.userID, {
        method: 'PUT',
        body: JSON.stringify({
              username: details.username,
              emailAddress: details.emailAddress,
              phone_number: details.phone_number,
              password: password,
              profilePic: details.profilePic
        }),
        headers:{
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then((res)=> res.json())
      .then((data) => {
        swal({
          icon: 'success',
          title: 'Success',
          text: `${data.msg}`,
          button: 'OK'
        })
      })
    },
    async getFavourites(context, id){
      let fetched = await fetch('https://destructionapi.herokuapp.com/users/' + id + '/fav')
      let res = await fetched.json();
      context.commit('setFavourites', res.favourites)
    },
    addFavourite(context, payload){
      fetch('https://destructionapi.herokuapp.com/users/' + context.state.user.userID + '/fav', {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.results === 'There is no user with that id') {
          swal({
            icon: 'error',
            title: 'No User Found',
            buttons: 'OK'
          })
        } else {
          swal({
            icon: 'success',
            title: 'Added',
            text: `The item ${context.state.weapon[0].name} has been favourited successfully`,
            buttons: 'Cool'
          })
          context.dispatch('getFavourites', context.state.user.userID)
        }
      })
    },
    clearFavourites(context ,id){
      fetch('https://destructionapi.herokuapp.com/users/' + id + '/fav', {
        method: 'DELETE'
      })
      .then((res) => res.json())
      .then((data) => {
        swal({
          icon: 'success',
          title: 'Favourites Cleared'
        })
        context.dispatch('getFavourites', id)
      })
    },
    deleteFavourite(context, favouriteid){
      const user = context.state.user.userID
      fetch('https://destructionapi.herokuapp.com/users/' + user + '/fav/'+ favouriteid, {
        method: 'DELETE'
      })
      .then((res) => res.json())
      .then((data)=> {
        swal({
          icon: 'success',
          title: 'Deleted',
          timer: 1000
        })
        context.dispatch('getFavourites', user)
      })
    },
    editWeapon(context, payload){
      const { id , name , description , image } = payload
      fetch('https://destructionapi.herokuapp.com/weapons/' + id, {
        method: 'PUT',
        body: JSON.stringify({
          name: name,
          description: description,
          image: image
        }),
        headers:{
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then((res)=> res.json())
      .then((data)=> {
        swal({
          icon: 'success',
          title: 'Edited',
          buttons: 'OK'
        })
        context.dispatch('getWeapons')
      })
    },
    addWeapon(context, payload){
      fetch('https://destructionapi.herokuapp.com/weapons', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers:{
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then((res)=> res.json())
      .then((data)=>{
        swal({
          icon: 'success',
          title: 'Weapon added',
          timer: 1000
        })
        context.dispatch('getWeapons')
      })
    },
    deleteWeapon(context, id){
      fetch('https://destructionapi.herokuapp.com/weapons/' + id, {
        method: 'DELETE'
      })
      .then((res)=> res.json())
      .then((data)=>{
        swal({
          icon: 'success',
          title: 'Weapon Deleted',
          timer: 1000
        })
        context.dispatch('getWeapons')
      })
    },
    editUser(context, payload){
      const {id , username , emailAddress , phone_number , profilePic , password} = payload
      const details = context.state.user
      fetch('https://destructionapi.herokuapp.com/users/' + id, {
        method: 'PUT',
        body: JSON.stringify({
          username: username,
          emailAddress: emailAddress,
          phone_number: phone_number,
          password: context.state.login.password,
          profilePic: profilePic
        }),
        headers:{
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then((res)=> res.json())
      .then((data)=> {
        swal({
          icon: 'success',
          title: 'Edited',
          text: `${data.msg}`
        })
        window.location.reload();
      })
    },
    deleteUser(context, id){
      fetch('https://destructionapi.herokuapp.com/users/' + id, {
        method: 'DELETE'
      })
      .then((res)=> res.json())
      .then((data)=>{
        swal({
          icon: 'success',
          title: 'User Deleted',
          timer: 1000
        })
        router.push('/')
        context.state.user = null
        window.location.reload()
      })
    },                         
  },
  modules: {
  }
})

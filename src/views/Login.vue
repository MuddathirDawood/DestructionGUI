<template>
  <div class="container">
     <h1>Login</h1>
     <form>
        <div><label for="email">Email Address: </label><input type="email" name="email"></div>
        <div><label for="password">Password: </label><input type="password" name="username"></div>
     </form>
     <button type="submit">Submit</button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
.container{
    background: url(https://i.postimg.cc/2ynsYVps/minimal-abstract-light-silver-gold-background-105940-795.jpg) no-repeat center center/cover;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-width: 100vw;
    min-height: 100vh;
}

h1{
    font-family: 'Audiowide', cursive;
    margin-bottom: 50px;
}

button{
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 20px;
    width: 125px;
    height: 30px;
    margin: 25px;
    transition: all 1s ease-in-out;
    background: linear-gradient(to top,#FFD700 0%,#E5E4E2 12%) !important;
}

button:hover{
    background-color: #E5E4E2;
    background: linear-gradient(to top,#FFD700 0%,#E5E4E2 18%) !important;
    border: 1px solid #FFD700;
    transition: all 1s ease-in-out;
}

form{
    width: 50%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    gap: 30px;
}

label{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    text-align: start;
    width: 200px;
}

input{
    background: #FFFFFF;
    border: 1px solid #000000;
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
    width: 300px;
}

input[type=password]{
    padding: 5px;
}
input[type=password]:focus{
    text-align: center;
}

input[type=email]{
    padding: 5px;
}
input[type=email]:focus{
    text-align: center;
}

</style>
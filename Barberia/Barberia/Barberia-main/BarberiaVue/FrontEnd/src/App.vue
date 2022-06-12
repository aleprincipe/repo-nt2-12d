
<template>

<div class="container mt-2">
<div v-if="!estaLogeado">
  <ul>
        <li><router-link  to="/">Home</router-link></li>
        <li><router-link  to="/Barberos">Barberos</router-link></li> 
        <li><router-link  to="/Servicios">Servicios</router-link></li> 
        <li><router-link  to="/Turnos">Turnos</router-link></li>
        <li><router-link  to="/Login">Login</router-link></li>
    </ul>
  </div>
      <div v-if="estaLogeado">
        <li><router-link to="/Turnos">Turnos</router-link></li>
        <li><router-link to="/Logout">Logout</router-link></li>
    </div>
 <router-view></router-view>
 </div>
</template>

<script>
import{loginStore} from "../src/store/usuario.js";
import{storeToRefs} from "pinia";

export default {
    name:"Login",
    setup(){
        const store = loginStore();
        const {estaLogeado} = storeToRefs(store);
        return{
            store,
            estaLogeado,
           
        };
    },
}
</script>
<style scope>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: rgb(65, 62, 62);
    
    
}
.active {
    background-color: #4CAF50;
}


li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 20px;
    text-decoration: none;
}
li {
    border-right: 1px solid #bbb;
}

li:last-child {
    border-right: none;
}
li a:hover:not(.active) {
    background-color: #111;
}
</style>

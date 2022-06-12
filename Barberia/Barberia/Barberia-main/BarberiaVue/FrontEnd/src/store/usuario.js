import { defineStore } from "pinia";
import axios from 'axios';

export  const loginStore = defineStore('main',{
    state:() =>{
        return{
            usuario:{},
            estaLogeado: false,
        }
    },
    getters:{

    },
    actions:{
        async rLogin(usuario){
            try{
                console.log(usuario);
                const data = await axios.post('http://localhost:3001/api/login',usuario)
                this.estaLogeado = true;
                localStorage.setItem('usuario',JSON.stringify(data));
            }catch(error){
                console.log(error)
            }
            
        },
         usuariologout() {
            console.log('log out en store');
            this.estaLogeado = false;
            location.reload();
            localStorage.removeItem('usuario');
        }

        
    }   
})
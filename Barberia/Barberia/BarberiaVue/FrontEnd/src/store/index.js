import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return{
      lista: []
    }  
  },
  actions: {
    agregarTurno() {
      this.lista.push({
      id : 1,
      turno: 1})
    },
  },
})

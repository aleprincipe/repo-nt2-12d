<template>
  <div>
      <h1>Turnos</h1>
      <button @click="agregarTurno">Agregar Turno</button>
      {{ lista }}
  </div>
</template>

<script>
import { useStore } from "../store/index.js"
import { storeToRefs } from 'pinia'
import apiClient from '../services/turnos.js'

export default {
    setup () {
        const store = useStore();
        const {lista} = storeToRefs(store)
        const {agregarTurno} = store
    
        return {
            lista, agregarTurno,
        }
    }
}

</script>

<style>

</style>
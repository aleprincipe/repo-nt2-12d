<template>
  <div class="Barberos">
    <h1>Barberos</h1>
    <table class="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Especialidad</th>
          <th scope="col">Accion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in lista" :key="index">
          <th scope="row">{{ item.nombre }}</th>
          <td> {{ item.apellido }}</td>
          <td> {{ item.especialidad }}</td>
          <td>
            <button type="button" class="btn btn-warning" @click="eliminar(item._id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
    <form @submit.prevent="AgregarBarbero()">
      <h3>Agregar nuevo Barbero</h3>
      <input type="text" class="form-control my-2" placeholder="Nombre" v-model="barbero.nombre">
      <input type="text" class="form-control my-2" placeholder="Apellido" v-model="barbero.apellido">
      <input type="text" class="form-control my-2" placeholder="Especialidad" v-model="barbero.especialidad">
      <button class="btn btn-primary btn-lg btn-block" type="submit">Agregar</button>
     </form>    
  </div>
</template>

<script>
import apiClient from '../services/servicios.js'

export default {
  data() {
    return {
      lista: {nombre: '', apellido: '', especialidad: ['']},
      barbero: { nombre: '', apellido: '', especialidad: [''] },
      mensaje: {color: '', texto: ''}
    }
  },
  created() {
    this.cargarBarberos();
  },
  methods: {
    async cargarBarberos() {
      try {
        const datos = await apiClient.getBarberos();
        console.log(datos.data);
        this.lista = datos.data;
      } catch (error) {
        console.log(error);
      }
    },
    async AgregarBarbero(){
      console.log(this.barbero);
     // await apiClient.post(/nuevobarbero)
                  const barbero = {...this.barbero};
                await apiClient.setBarbero(barbero);
                this.lista.push(barbero);
},
async eliminar(id) {
      try {
        console.log(id);
   //     const listaCodigos = this.lista.map(e => { return e.id });
    //    const indice = listaCodigos.indexOf(nombre);
        this.lista.splice(id-1, 1);
        await apiClient.deleteBarbero(id)

      } catch (error) {
        console.log(error);
      }

    }
  }
  
}
</script>

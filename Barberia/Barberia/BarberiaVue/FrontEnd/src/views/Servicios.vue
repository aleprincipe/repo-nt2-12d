<template>
  <div>
    <h1>Servicios</h1>
    <table class="table table-striped table-bordered table-hover">
 <thead>
        <tr>
          <th scope="col">Codigo</th>
          <th scope="col">Servicio</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
    <tbody>
      <tr v-for="item in lista" :key="item._id">
          <th scope="row">{{ item._id }}</th>
          <td> {{ item.servicio }}</td>
          <td>
            <button  type="button" class="btn btn-warning" @click="eliminar(item._id)">Eliminar Servicio</button>
          </td>
    </tr>
    </tbody>
    </table>
    <form @submit.prevent="AgregarServicio()">
      <h3>Agregar nuevo Servicio</h3>
      <input type="text" class="form-control my-2" placeholder="Codigo" v-model="servicio._id">
      <input type="text" class="form-control my-2" placeholder="Servicio" v-model="servicio.servicio">
      <button class="btn btn-primary btn-lg btn-block" type="submit">Agregar</button>
     </form>  
  </div>
</template>

<script>

import apiClient from '../services/servicios2.js'

export default {
  data() {
    return {
      lista: {},
      servicio: { _id: 0, servicio: '' }
    }
  },
  created(){
    this.cagarServicios();
  },
  methods: {
    async cagarServicios() {
      try {
        const datos = await apiClient.getServicios();
        this.lista = datos.data;
      } catch (error) {
        console.log(error);
      }
    },
    async agregar() {
      try {
        const producto = { ...this.producto };
        const data = await apiClient.setProducto(producto);
        this.lista.push(producto);
      } catch (error) {
        console.log(error);
      }
    },
    async eliminar(id) {
      try {
        const index = this.lista.findIndex(item => item._id === id);
        console.log(id);
        this.lista.splice(index, 1);
           const data = await apiClient.deleteServicio(id)

      } catch (error) {
        console.log(error);
      }

    }
  }

}
</script>

<style>
</style>
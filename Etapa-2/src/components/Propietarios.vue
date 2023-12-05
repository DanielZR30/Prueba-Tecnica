<template>
  <div class="">
    <table class="table table-bordered table-hover" id="propietarios">
      <thead class="table-primary">
        <tr class="bg-primary">
          <th class="bg-primary" scope="col" id="btn-id">ID</th>
          <th class="bg-primary" scope="col" id="btn-nombre">Nombre Propietario</th>
          <th class="bg-primary" scope="col" id="btn-puntaje">Puntaje</th>
          <th class="bg-primary" scope="col" id="btn-apartamento">Apartamento</th>
        </tr>
      </thead>
      <tbody id="propietarios-data">
        <tr v-for="p in Listapropietarios" :key="p.id" v-on:click="propietario = p">
          <th scope="row">{{ p.id }}</th>
          <td>{{ p.nombre }}</td>
          <td>{{ p.puntaje }}</td>
          <td>{{ p.apartamento }}</td>
        </tr>
      </tbody>
    </table>
    <div class="card px-4 py-2 w-100 col 2 d-inline-flex">
      <label class="my-2" for="id">ID</label>
      <input type="number" id="id" v-model="propietario.id" />
      <label class="my-2" for="nombre">Nombre</label>
      <input type="text" id="nombre" v-model="propietario.nombre" />
      <label class="my-2" for="puntaje">Nombre</label>
      <input type="number" id="puntaje" v-model="propietario.puntaje" />
      <label class="my-2" for="apartamento">Apartamento</label>
      <input type="number" id="apartamento" v-model="propietario.apartamento" />
      <div>
        <button class="my-2 btn btn-primary" v-on:click="crear()">Crear</button>
        <button class="my-2 mx-2 btn btn-success" v-on:click="actualizar()">Editar</button>
        <button class="my-2 btn btn-danger" v-on:click="eliminar()">Eliminar</button>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap'
import { getPropietarios,addNewPropietario,updatePropietario, deletePropietario } from '../utils/PropietariosDao'
export default {
  name: 'Propietarios',
  data() {
    return {
      propietario: {
        id: 0,
        nombre: '',
        puntaje: 0,
        apartamento: 0
      },
      Listapropietarios: [
        {
          id: 1,
          nombre: 'John',
          puntaje: 10,
          apartamento: '101'
        },
        {
          id: 2,
          nombre: 'John',
          puntaje: 10,
          apartamento: '102'
        }
      ]
    }
  },
  components: {},
  methods: {
    async crear() {
      await addNewPropietario(this.propietario)
    },
    async actualizar(){
      await updatePropietario(this.propietario.id,this.propietario)
    },
    async eliminar(){
      await deletePropietario(this.propietario.id)
    },
  },
  mounted: async function () {
    this.Listapropietarios = await getPropietarios()
  }
}
</script>

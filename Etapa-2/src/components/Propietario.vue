<template>
  
</template>

<script>
import { addNewPropietario } from '../utils/PropietariosDao'

export default {
  data() {
    return {
      propietario: {
        id: 0,
        nombre: '',
        puntaje: 0,
        apartamento: 0
      }
    }
  },
  methods: {
    async createPropietario() {

        await addNewPropietario(this.propietario)

    }
  }
}
</script>

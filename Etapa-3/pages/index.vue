<script setup>
const { getPropietarios,createPropietario,updatePropietario,deletePropietario } = usePropietarios();
let columns = [
  {
    key: "id",
    label: "ID",
    sortable: true,
  },
  {
    key: "nombre",
    label: "Nombre",
    sortable: true,
  },
  {
    key: "puntaje",
    label: "Puntaje",
    sortable: true,
  },
  {
    key: "apartamento",
    label: "Apartamento",
    sortable: true,
  },
];
const propietarios = reactive(await getPropietarios())

let propietario = {
  id: 0,
  nombre: "",
  puntaje: 0,
  apartamento: "",
};

let select = (row) => {
  propietario = row;
  state.id = propietario.id;
  state.nombre = propietario.nombre;
  state.apartamento = propietario.apartamento;
  state.puntaje = propietario.puntaje;
  console.log(propietario);
};

const crear = async () => {
  console.log(state)
  try {
    await createPropietario(state)
    propietarios.push(state)
  } catch (error) {
    alert("error al crear")
  }
};

const actualizar = async () => {
  console.log("actualizando")
  try {
    await updatePropietario(state.id,state)
    propietarios[propietarios.findIndex(item => state.id == item.id)] = state
  } catch (error) {
    alert("error al actualizar")
  }
};

const eliminar = async () => {
  console.log("eliminando")
  try {
    await deletePropietario(state.id)
    propietarios.splice(propietarios.indexOf(state))
  } catch (error) {
    alert("error al eliminar")
  }
};
const state = reactive({
  id: "",
  nombre: "",
  apartamento: "",
  puntaje: ""
});
</script>

<template>
  <div>
    <UContainer>
      <UTable
        v-model="selected"
        :columns="columns"
        :rows="propietarios"
        :sort="{ column: 'title' }"
        @select="select"
      />
    </UContainer>
    <UCard>
      <div class="flex flex-col">
        <UFormGroup label="ID" name="id" eager-validation>
          <UInput v-model="state.id" placeholder="Id" type="number"/>
        </UFormGroup>
        <UFormGroup label="Nombre" name="nombre" eager-validation>
          <UInput v-model="state.nombre" placeholder="Nombre" type="text"/>
        </UFormGroup>
        <UFormGroup label="Puntaje" name="puntaje" eager-validation>
          <UInput v-model="state.puntaje" placeholder="Puntaje" type="number"/>
        </UFormGroup>
        <UFormGroup label="Apartamento" name="apartamento" eager-validation>
          <UInput v-model="state.apartamento" placeholder="Apartamento" type="number"/>
        </UFormGroup>
        <div>
          <button class="bg-blue-500 p-2 my-2 rounded" v-on:click="crear">
            Crear
          </button>
          <button class="bg-green-500 p-2 my-2 mx-2 rounded" v-on:click="actualizar">
            Editar
          </button>
          <button class="bg-red-500 p-2 my-2 rounded" v-on:click="eliminar">
            Eliminar
          </button>
        </div>
      </div>
    </UCard>
  </div>
</template>

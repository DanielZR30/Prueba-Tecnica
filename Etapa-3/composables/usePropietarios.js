import { collection, getDocs, setDoc,doc,deleteDoc, addDoc } from "firebase/firestore";

export const usePropietarios = () => {
  const { $db } = useNuxtApp();

  const getPropietarios = async () => {
    try {
      let propietarios = [];
      const querySnap = await getDocs(collection($db, "propietarios"));
      querySnap.forEach((doc) => {
        propietarios.push(doc.data());
        console.log(doc.data());
      });
      return propietarios;

    } catch (error) {
      console.log(error)
    }
  };

  const createPropietario = async (propietario) =>{
    try {
        await setDoc(doc($db, 'propietarios',propietario.id.toString()), propietario,{merge:false})
    } catch (error) {
        console.log(error)
    }
  };

  const updatePropietario = async (id,propietario) =>{
    try {
        await setDoc(doc($db, 'propietarios', id.toString()), propietario, { merge: true })
      } catch (error) {
        console.log(error)
      }
  }

  const deletePropietario = async (id) =>{
    try {
        await deleteDoc(doc($db, 'propietarios', id.toString()))
      } catch (error) {
        console.log(error)
      }
  }

  return{
    getPropietarios,
    createPropietario,
    updatePropietario,
    deletePropietario
  }
};

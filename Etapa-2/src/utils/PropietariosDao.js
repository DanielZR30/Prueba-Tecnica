import db from './FirebaseInit'
import {
  getFirestore,
  onSnapshot,
  collection,
  doc,
  deleteDoc,
  setDoc,
  addDoc,
  getDoc,
  getDocs,
  orderBy,
  query
} from 'firebase/firestore'

export async function addNewPropietario(propietario) {
  await addDoc(collection(db, 'propietarios'), propietario)
}

export async function deletePropietario(id) {
  await deleteDoc(doc(db, 'propietarios', id))
}

export async function updatePropietario(id, propietario) {
  try {
    await setDoc(doc(db, 'propietarios', id), propietario, { merge: true })
  } catch (error) {
    alert('Error al actualizar')
  }
}

export async function getPropietarios() {
  let propietarios = []
  const querySnap = await getDocs(collection(db, 'propietarios'))
  querySnap.forEach((doc) => {
    propietarios.push(doc.data())
    console.log(doc.data())
  })
  return propietarios
}

export async function getPropietario(id) {
  return await getDoc(doc(db, 'propietarios', id))
}

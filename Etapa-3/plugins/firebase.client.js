import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin((nuxtApp)=>{
    // Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const runtimeConfig = useRuntimeConfig()
console.log(runtimeConfig.public.apiKey)

const firebaseConfig = {
  apiKey: runtimeConfig.public.apiKey,
  authDomain: runtimeConfig.public.authDomain,
  projectId: runtimeConfig.public.projectId,
  storageBucket: runtimeConfig.public.storageBucket,
  messagingSenderId: runtimeConfig.public.messagingSenderId,
  appId: runtimeConfig.public.appId,
  measurementId: runtimeConfig.public.measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


return{
    provide:{
        db,
    },
}

})
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC1iSCcIYk--pCS_GRIobVT60XEs2WL1QY",
    authDomain: "svv-hc-reg.firebaseapp.com",
    projectId: "svv-hc-reg",
    storageBucket: "svv-hc-reg.appspot.com",
    messagingSenderId: "689708862532",
    appId: "1:689708862532:web:8e6cc6fbcf61b88f930011",
    measurementId: "G-JRGCR03FTB",
};

const firebaseApp = initializeApp(firebaseConfig);

const useFirebase = () => {
    return firebaseApp;
};

export default useFirebase;

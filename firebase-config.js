// firebase-config.js

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js';
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore-lite.js';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzBYrqfl4ysg4hgF4-18s4RkDZNEqki8c",
    authDomain: "manhicwebsite.firebaseapp.com",
    projectId: "manhicwebsite",
    storageBucket: "manhicwebsite.appspot.com",
    messagingSenderId: "871871386334",
    appId: "1:871871386334:web:beb757f74a9097a280a84f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to get a list of cities from your database
export async function getCities() {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}

// Example usage of getCities function
getCities().then(cities => {
    console.log(cities);
}).catch(error => {
    console.error("Error getting cities:", error);
});

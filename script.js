import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import ScrollReveal from 'scrollreveal';  // Ensure you import ScrollReveal if you're using it

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
async function getCities(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}

// Example usage of getCities function
getCities(db).then(cities => {
    console.log(cities);
}).catch(error => {
    console.error("Error getting cities:", error);
});

var sliderCounter = 0;
var sliderContent = [
    "Pogi",
    "Handsome",
    "Tao",
    "Coder",
];

var sliderValue = document.querySelector("#SliderValue");

function slider() {
    if (sliderCounter >= sliderContent.length) {
        sliderCounter = 0;
    }

    sliderValue.innerHTML = "";
    sliderValue.classList.remove("holder-animation");
    void sliderValue.offsetWidth; // Trigger reflow
    sliderValue.classList.add("holder-animation");

    for (let i = 0; i < sliderContent[sliderCounter].length; i++) {
        let letterDiv = document.createElement("div");
        letterDiv.innerHTML = sliderContent[sliderCounter][i];

        if (letterDiv.innerHTML === "") {
            letterDiv.innerHTML = "&nbsp;";
        }
        letterDiv.classList.add("start");
        letterDiv.classList.add("animation");
        letterDiv.style.animationDelay = i / 10 + "s";
        sliderValue.appendChild(letterDiv);
    }
    sliderCounter++;
}

slider();
setInterval(slider, 2000);  // Adjusted interval time

$('.menu-btn').click(function () {
    $('.menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".featured-text", {});
sr.reveal(".home-img", { delay: 100 });
sr.reveal(".heading", {});

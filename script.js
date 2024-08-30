

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
    void sliderValue.offsetWidth;
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


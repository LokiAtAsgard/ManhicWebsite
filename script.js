document.addEventListener('DOMContentLoaded', () => {
    var sliderCounter = 0;
    var sliderContent = [
        "Elexis Eon Clark",
        "an IT student",
        "Coding Newbie",
        "Full-Stack Novice",
    ];

    var sliderValue = document.querySelector("#SliderValue");

    function slider() {
        if (sliderCounter >= sliderContent.length) {
            sliderCounter = 0;
        }

        sliderValue.innerHTML = "";
        sliderValue.classList.remove("holder-animation");
        void sliderValue.offsetWidth; // Triggers reflow for reapplying animation
        sliderValue.classList.add("holder-animation");

        for (let i = 0; i < sliderContent[sliderCounter].length; i++) {
            let letterDiv = document.createElement("div");
            letterDiv.innerHTML = sliderContent[sliderCounter][i];

            // Correctly handle spaces
            if (letterDiv.innerHTML === " ") {
                letterDiv.innerHTML = "&nbsp;";
            }

            letterDiv.classList.add("start", "animation");
            letterDiv.style.animationDelay = (i / 10) + "s";
            sliderValue.appendChild(letterDiv);
        }
        sliderCounter++;
    }

    slider();
    setInterval(slider, 2000);  // Adjust interval time

    // Ensure jQuery is available
    if (typeof $ !== 'undefined') {
        $('.menu-btn').click(function () {
            $('.menu').toggleClass("active");
            $('.menu-btn i').toggleClass("active");
        });
    } else {
        console.error('jQuery is not defined. Ensure it is included in your project.');
    }

    // Ensure ScrollReveal is available and correctly initialized
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: "top",
            distance: "80px",
            duration: 2000,
            reset: true,
        });

        sr.reveal(".featured-text", {});
        sr.reveal(".home-img", { delay: 100 });
        sr.reveal(".heading", {});
    } else {
        console.error('ScrollReveal is not defined. Ensure it is included in your project.');
    }
});


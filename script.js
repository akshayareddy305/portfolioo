let images = [
    "infra.jpg",
    "pipes.jpg"
];

let currentIndex = 0;

function changeSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    document.getElementById("slideImage").src = images[currentIndex];
}
document.querySelector(".download-btn").addEventListener("click", function () {
    alert("Technical Datasheet Download Started!");
});
document.querySelector(".quote-btn").addEventListener("click", function(){
    alert("Redirecting to Quote Request Form...");
});
// FAQ ACCORDION
document.querySelectorAll(".faq-question").forEach(question => {
    question.addEventListener("click", () => {
        const item = question.parentElement;
        item.classList.toggle("active");
    });
});

// Catalogue Button
document.getElementById("catalogueBtn").addEventListener("click", function() {
    const email = document.getElementById("emailInput").value;

    if(email === ""){
        alert("Please enter your email address.");
    } else {
        alert("Catalogue request submitted successfully!");
        document.getElementById("emailInput").value = "";
    }
});
const slider = document.getElementById("appSlider");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

nextBtn.addEventListener("click", () => {
    slider.scrollBy({ left: 300, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -300, behavior: "smooth" });
});
const tabs = document.querySelectorAll(".tab");

const processData = {
    raw: {
        title: "High-Grade Raw Material Selection",
        desc: "We use premium PE100 grade raw materials ensuring strength and durability.",
        points: ["PE100 grade material", "Optimal molecular weight distribution"],
        img: "material.jpg"
    },
    extrusion: {
        title: "Precision Extrusion Process",
        desc: "Advanced extrusion lines ensure uniform thickness and structural integrity.",
        points: ["High precision extruders", "Consistent wall thickness"],
        img: "extrusionn.jpg"
    },
    marking: {
        title: "Marking & Identification",
        desc: "Clear markings for traceability and compliance standards.",
        points: ["Batch coding", "Compliance labeling"],
        img: "labelling.jpg"
    },
};

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const data = processData[tab.dataset.tab];

        document.getElementById("processTitle").textContent = data.title;
        document.getElementById("processDesc").textContent = data.desc;
        document.getElementById("processImg").src = data.img;

        const pointsList = document.getElementById("processPoints");
        pointsList.innerHTML = "";
        data.points.forEach(point => {
            const li = document.createElement("li");
            li.textContent = point;
            pointsList.appendChild(li);
        });
    });
});
// Download buttons
document.querySelectorAll(".download-link").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Download started!");
    });
});

// CTA form
document.querySelector(".cta-btn").addEventListener("click", () => {
    alert("Quote request submitted successfully!");
});
/* STICKY HEADER ON SCROLL */

let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 150) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-100px";
    }

    lastScrollTop = scrollTop;
});
/* STICKY HEADER */

constnavbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 200) {
        navbar.classList.add("show");
    } else {
        navbar.classList.remove("show");
    }

});
/* STICKY HEADER */

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 150) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-90px";
    }

});
function setSlide(index){
    currentIndex = index;
    document.getElementById("slideImage").src = images[currentIndex];
}

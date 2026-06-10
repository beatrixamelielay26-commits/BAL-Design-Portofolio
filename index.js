<<<<<<< HEAD
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}


const buttons = document.querySelectorAll(".filter-btn");
const boxes = document.querySelectorAll(".skills-box");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        boxes.forEach(box => {
            const category = box.dataset.category;

            if (filter === "all" || category === filter) {
                box.classList.remove("hide");
            } else {
                box.classList.add("hide");
            }
        });

    });
});


function scrollFilter(direction) {
    const container = document.getElementById("filterContainer");

    container.scrollBy({
        left: direction * 150,
        behavior: "smooth"
    });
}


const videos = ["images/angry.mp4", "images/sleepy.mp4", "images/smile.mp4"];
let index = 0;
const player = document.getElementById("gifPreview").querySelector("source");

setInterval(() => {
    index = (index + 1) % videos.length;
    player.src = videos[index];
    document.getElementById("gifPreview").load();
}, 2000);
=======
const videos = ["images/angry.mp4", "images/sleepy.mp4", "images/smile.mp4"];
let index = 0;
const player = document.getElementById("gifPreview").querySelector("source");

setInterval(() => {
    index = (index + 1) % videos.length;
    player.src = videos[index];
    document.getElementById("gifPreview").load();
}, 2000);
>>>>>>> ce30136960ca9e9c81f2cfdefdc0c439c8d8a700

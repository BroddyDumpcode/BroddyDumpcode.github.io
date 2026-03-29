// GLOW FOLLOW MOUSE
const glow = document.createElement("div");
glow.classList.add("glow");
document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX - 300 + "px";
    glow.style.top = e.clientY - 300 + "px";
});


// CURSOR GLOW
const cursor = document.createElement("div");
cursor.classList.add("cursor-glow");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});


// SMOOTH HOVER SCALE (TOOLS)
document.querySelectorAll(".tool").forEach(tool => {
    tool.addEventListener("mouseenter", () => {
        tool.style.transform = "scale(1.05)";
    });

    tool.addEventListener("mouseleave", () => {
        tool.style.transform = "scale(1)";
    });
});


// SIMPLE FADE-IN ON LOAD
window.addEventListener("load", () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "1s";
        document.body.style.opacity = 1;
    }, 100);
});
// SCANLINE
const scan = document.createElement("div");
scan.classList.add("scanline");
document.body.appendChild(scan);


// TYPING EFFECT
const text = [
    "Initializing system...",
    "Connecting to server...",
    "Access granted ✔",
    "Welcome to Brody Tools 😈"
];

let line = 0;
let char = 0;
const speed = 40;

function type() {
    if (line < text.length) {
        if (char < text[line].length) {
            document.getElementById("typing").innerHTML += text[line].charAt(char);
            char++;
            setTimeout(type, speed);
        } else {
            document.getElementById("typing").innerHTML += "<br>";
            line++;
            char = 0;
            setTimeout(type, 500);
        }
    }
}

type();

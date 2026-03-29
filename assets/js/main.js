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

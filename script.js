// JavaScript for interactivity

document.addEventListener("DOMContentLoaded", () => {
    const projectLinks = document.querySelectorAll(".project a");

    projectLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#0056b3";
        });

        link.addEventListener("mouseout", () => {
            link.style.color = "#007BFF";
        });
    });

    console.log("Portfolio website loaded successfully!");
});
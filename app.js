const modeBtn = document.querySelector(".mode-btn");

const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-bs-theme");
    document.documentElement.setAttribute("data-bs-theme", currentTheme === "dark" ? "light" : "dark");
}

modeBtn.addEventListener("click", toggleTheme);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        modeBtn.style.display = "none"; // Hide button when scrolled past 1000px
    } else {
        modeBtn.style.display = "block"; // Show button when scrolled above 1000px
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Hamburger Menu
    const hamburger = document.getElementById("hamburger");
    const sidebarMenu = document.getElementById("sidebarMenu");
    const overlay = document.getElementById("overlay");

    hamburger.addEventListener("click", function () {
        sidebarMenu.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", function () {
        sidebarMenu.classList.remove("active");
        overlay.classList.remove("active");
    });

    // Dark Mode
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀️";
    }

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeToggle.textContent = "☀️";
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeToggle.textContent = "🌙";
        }
    });

    // Search Functionality
    const searchBar = document.querySelector(".search-bar");
    const searchButton = document.getElementById("searchButton");

    searchButton.addEventListener("click", function () {
        const query = searchBar.value.toLowerCase();
        const items = document.querySelectorAll("h3, p");
        let found = false;

        items.forEach(item => {
            if (item.textContent.toLowerCase().includes(query)) {
                item.scrollIntoView({ behavior: "smooth", block: "center" });
                found = true;
            }
        });

        if (!found) {
            alert("No results found for: " + query);
        }
    });

    searchBar.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            searchButton.click();
        }
    });
});

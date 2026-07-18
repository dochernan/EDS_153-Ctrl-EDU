"use strict";

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
        const menuIsOpen = navLinks.classList.toggle("show");

        menuButton.setAttribute(
            "aria-expanded",
            String(menuIsOpen)
        );
    });
}
const menuEl = document.getElementById("menu");

function openMenu(event) {
  event.preventDefault();
  menuEl.classList.add("menu--open");
}

function closeMenu(event) {
  menuEl.classList.remove("menu--open")
}

// menu--open

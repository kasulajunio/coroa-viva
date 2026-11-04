"use strict";
const menu = document.getElementById("menu");
const navigation = document.getElementById("navigation");
function closeMenu() { navigation.classList.remove("open"); menu.setAttribute("aria-expanded", "false"); }
menu.addEventListener("click", () => { const open = navigation.classList.toggle("open"); menu.setAttribute("aria-expanded", String(open)); });
navigation.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", event => { if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") { closeMenu(); menu.focus(); } });
const theme = document.getElementById("theme");
theme.addEventListener("click", () => { const light = document.body.classList.toggle("light"); theme.setAttribute("aria-pressed", String(light)); theme.setAttribute("aria-label", light ? "Ativar modo escuro" : "Ativar modo claro"); document.querySelector("meta[name=theme-color]").content = light ? "#f5f3ec" : "#111312"; });
document.querySelectorAll("[data-dialog]").forEach(button => button.addEventListener("click", () => { const dialog = document.getElementById(button.dataset.dialog); if (dialog && typeof dialog.showModal === "function") dialog.showModal(); }));
document.querySelectorAll(".close-dialog").forEach(button => button.addEventListener("click", () => button.closest("dialog").close()));
document.querySelectorAll("dialog").forEach(dialog => dialog.addEventListener("click", event => { if (event.target !== dialog) return; const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); }));

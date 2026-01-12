/* Faire en sorte que la lueur de lumière de la section hero suive les mouvements de la souris*/

const background = document.querySelector(".hero")

background.addEventListener("mousemove", function(lueur){
const rect = background.getBoundingClientRect();
const x = lueur.clientX - rect.left;
const y = lueur.clientY - rect.top;
background.style.setProperty("--x", x + "px");
background.style.setProperty("--y", y + "px")
})

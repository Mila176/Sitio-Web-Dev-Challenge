document.getElementById("cambiar-tema").addEventListener("click", () => {
  document.body.classList.toggle("oscuro");
});

document.getElementById("formulario").addEventListener("submit", (e) => {
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const carrera = document.getElementById("carrera").value;

  const correoValido = correo.includes("@") && correo.includes(".com");

  if (!nombre || !correo || !carrera || !correoValido) {
    e.preventDefault();
    alert("El formulario tiene que estar completo y con un correo válido (debe contener @ y .com).");
  }
});

fetch("https://randomuser.me/api/?results=6")
  .then(res => res.json())
  .then(data => {
    const contenedor = document.getElementById("participantes");
    data.results.forEach(user => {
      const div = document.createElement("div");
      div.innerHTML = `
        <img src="${user.picture.medium}" alt="${user.name.first}" />
        <p>${user.name.first} ${user.name.last}</p>
      `;
      contenedor.appendChild(div);
    });
  });
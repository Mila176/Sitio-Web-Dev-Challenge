document.getElementById("cambiar-tema").addEventListener("click", () => {
  document.body.classList.toggle("oscuro");
});

fetch("https://randomuser.me/api/?results=5")
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
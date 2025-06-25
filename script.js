const carros = [
  {
    nome: "BMW 320i 2020",
    preco: "R$ 120.000",
    imagem: "https://images.unsplash.com/photo-1605559424843-64d0f457c1c2"
  },
  {
    nome: "Jeep Compass 2022",
    preco: "R$ 150.000",
    imagem: "https://images.unsplash.com/photo-1616788463731-c9245fc9e1d0"
  },
  {
    nome: "Chevrolet Onix 2021",
    preco: "R$ 75.000",
    imagem: "https://images.unsplash.com/photo-1597002850383-c938469b54ff"
  }
];

const catalogo = document.getElementById("catalogo");

carros.forEach(carro => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${carro.imagem}" alt="${carro.nome}">
    <div class="info">
      <h3>${carro.nome}</h3>
      <p>${carro.preco}</p>
    </div>
  `;

  catalogo.appendChild(card);
});
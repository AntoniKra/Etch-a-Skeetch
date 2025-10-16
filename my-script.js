console.log("Hello, World!");

let size;
const alert = document.getElementById("alert");

function start(size) {
  const contener = document.getElementById("grid-container");
  contener.innerHTML = "";
  size = document.getElementById("size-container").value;

  if (size <= 100 && size >= 2) {
    console.log("prawidłowa liczba");

    contener.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
      const square = document.createElement("div");
      square.classList.add("grid-square");
      contener.appendChild(square);

      square.addEventListener("mouseover", (event) => {
        square.style.backgroundColor = "grey";
      });
    }
    alert.textContent = "";
  } else {
    console.log("Wpisz liczbę z przedziału od 2 do 100");
    alert.textContent = "Pick a number from 2 to 100";
  }
}

draw.addEventListener("mouseover", (event) => {
  draw.style.backgroundColor = "yellow";
  draw.style.borderColor = "black";
  draw.style.color = "black";
  draw.textContent = "Click Me!";
});

draw.addEventListener("mouseout", (event) => {
  draw.style.backgroundColor = "Green";
  draw.style.borderColor = "black";
  draw.style.color = "white";
  draw.style.fontSize = "22px";
  draw.textContent = "Draw again?";
});

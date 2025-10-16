console.log("Hello, World!");

const alertContainer = document.getElementById("alert");
const draw = document.getElementById("draw");
const contener = document.getElementById("grid-container");
const sizeInput = document.getElementById("size-container");
const resetButton = document.getElementById("resetButton");

function start() {
  contener.innerHTML = "";
  const size = sizeInput.value;

  if (size <= 100 && size >= 2) {
    console.log("prawidłowa liczba");

    contener.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
      const square = document.createElement("div");
      square.classList.add("grid-square");
      contener.appendChild(square);

      square.addEventListener("mouseover", (event) => {
        square.classList.add("coloured-square");
      });
    }
    alertContainer.textContent = "";
  } else {
    console.log("Wpisz liczbę z przedziału od 2 do 100");
    alertContainer.textContent = "Pick a number from 2 to 100";
  }
}

resetButton.addEventListener("click", () => {
  const squares = Array.from(
    contener.getElementsByClassName("coloured-square")
  );
  console.log(squares);
  if (squares.length > 1) {
    squares.forEach((square) => {
      square.classList.remove("coloured-square");
    });
  }
});

/*
const size = 5
<div class='grid-square'></div>


<div id="grid-container">

<div class='grid-square'></div>
<div class='grid-square'></div>
<div class='grid-square'></div>
<div class='grid-square'></div>
<div class='grid-square'></div>
<div class='grid-square'></div>
<div class='grid-square'></div>
<div class='grid-square'></div>
<div class='grid-square'></div>
<div class='grid-square'></div>




</div>

i = 0     i < 25  i++
i = 1


*/

draw.addEventListener("click", start);

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

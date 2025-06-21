const pizzaImg = document.querySelector(".pizza-img");
const resetButton = document.querySelector(".reset-button");
const score = document.querySelector(".score");
const statusPizza = document.querySelector(".statusPizza");

let count = 0;

pizzaImg.addEventListener("click", (event) => {
    ++count;
    score.textContent = count;
    updateStatus();
});

resetButton.addEventListener("click", (event) => {
    count = 0;
    score.textContent = count;
    statusPizza.textContent = "Hungry";
    statusPizza.style.color = "black"
});

function updateStatus() {

    if(count === 0) {

        statusPizza.textContent = "Hungry";

    } else if (count === 20) {

        statusPizza.textContent = "A bit full";
        statusPizza.style.color = "green"

    } else if(count === 50) {
        
        statusPizza.textContent = "YOU ARE EATING TOO MUCH!!";
        statusPizza.style.color = "orange"

    } else if(count === 100) {

        statusPizza.textContent = "GO TO THE HOSPITAL!!";
        statusPizza.style.color = "red"

    }
}
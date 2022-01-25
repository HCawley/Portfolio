const cards = document.querySelector(".card1");

const flipCard = () => {
    cards.classList.toggle("flipcard");
    console.log("button clicked")
}

cards.addEventListener("click", flipCard)

// cards.onclick = flipCard
// cards.forEach((card) => card.addEventListener("click", flipCard))
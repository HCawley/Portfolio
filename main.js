const cards = document.querySelectorAll(".project");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("flipcard")
        })
    })
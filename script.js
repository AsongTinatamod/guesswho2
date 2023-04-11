function toggleEliminated(card) {
  card.classList.toggle('eliminated');
}

card1.addEventListener('click', toggleEliminated);
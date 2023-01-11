const filterCards = (query) => {
  const cards = document.querySelectorAll('.character-card');
  cards.forEach((card) => card.classList.remove('hide'));
  if (query.length === 0) return;
  cards.forEach((card) => {
    const name = card.querySelector('.card-name').innerText.toLowerCase();
    if (!name.includes(query.toLowerCase())) card.classList.add('hide');
  });
};

export default filterCards;

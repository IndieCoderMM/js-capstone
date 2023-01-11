const getItemCount = () => {
  const characterCards = document.querySelectorAll('.character-card');
  let visibleCards = 0;
  characterCards.forEach((card) => {
    if (card.checkVisibility()) visibleCards += 1;
  });
  return visibleCards || 0;
};

export default getItemCount;

const getItemCount = () => {
  const characterCards = document.querySelectorAll('.character-card');
  return characterCards.length || 0;
};

export default getItemCount;

const getItemCount = () => {
  const characterCards = document.querySelectorAll('.character-card');
  return characterCards.length;
};

export default getItemCount;

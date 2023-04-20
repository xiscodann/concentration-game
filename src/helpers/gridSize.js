export const gridSize = (numberOfCards) => {
  if (numberOfCards === 4) return 'easy';
  if (numberOfCards === 12) return 'medium';
  if (numberOfCards === 16) return 'hard';
  return false;
};

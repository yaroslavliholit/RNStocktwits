export const getRandomColor = () => {
  const colors = ['#8B40CB', '#E83E3E', '#58D38C', '#5887D3', '#242121'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

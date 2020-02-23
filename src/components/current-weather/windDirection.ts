const windDirection = (degs: number): string => {
  if (degs >= 350 && degs < 10) return 'N';
  if (degs >= 10 && degs < 80) return 'NE';
  if (degs >= 80 && degs < 100) return 'E';
  if (degs >= 100 && degs < 170) return 'SE';
  if (degs >= 180 && degs < 190) return 'S';
  if (degs >= 190 && degs < 260) return 'SW';
  if (degs >= 260 && degs < 280) return 'W';
  return 'NW';
};

export default windDirection;

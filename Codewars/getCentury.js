function century(year) {
  if (year % 100 === 0) {
    return year / 100;
  } else {
    return 1 + Math.floor(year / 100);
  }
}
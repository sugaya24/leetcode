function flipAndInvertImage(image: number[][]): number[][] {
  const n = image.length;
  for (let i = 0; i < n; i++) {
    // flip the image horizontally first
    for (let j = 0; j < n / 2; j++) {
      const tmp = image[i][j];
      image[i][j] = image[i][n - 1 - j];
      image[i][n - 1 - j] = tmp;
    }
    // and then invert it
    for (let j = 0; j < n; j++) {
      console.log(image[i][j]);
      if (image[i][j] === 0) image[i][j] = 1;
      else image[i][j] = 0;
    }
  }
  return image;
}

console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
);

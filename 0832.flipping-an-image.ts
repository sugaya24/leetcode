function flipAndInvertImage(image: number[][]): number[][] {
  for (let i = 0; i < image.length; i++) {
    image[i].reverse();
    image[i] = image[i].map((x) => x ^ 1);
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

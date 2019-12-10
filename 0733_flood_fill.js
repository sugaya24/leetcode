/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, newColor) => {
  const color = image[sr][sc];
  if (color != newColor) dfs(image, sr, sc, color, newColor);
  return image;
};

const dfs = (image, r, c, color, newColor) => {
  if (image[r][c] === color) {
    image[r][c] = newColor;
    if (r >= 1) dfs(image, r - 1, c, color, newColor);
    if (c >= 1) dfs(image, r, c - 1, color, newColor);
    if (r + 1 < image.length) dfs(image, r + 1, c, color, newColor);
    if (c + 1 < image[0].length) dfs(image, r, c + 1, color, newColor);
  }
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1]
    ],
    1,
    1,
    2
  )
); // [[2,2,2],[2,2,0],[2,0,1]]

/**
 * @param {string} command
 * @return {string}
 */
function interpret(command) {
  let res = command;
  res = res.replace(/\(\)/g, 'o');
  res = res.replace(/\(al\)/g, 'al');
  return res;
}

console.log(interpret('G()()()(al)'));

function strongPasswordCheckerII(password: string): boolean {
  if (password.length < 8) return false;
  if (![...password].some(isIncludeUpperCase)) {
    return false;
  }
  if (![...password].some(isIncludeLowerCase)) {
    return false;
  }
  if (![...password].some((c) => '!@#$%^&*()-+'.split('').includes(c))) {
    return false;
  }
  if ([...password].some((c, i) => c === password[i + 1])) {
    return false;
  }
  if (![...password].some((c) => '0123456789'.split('').includes(c))) {
    return false;
  }

  return true;
}

function isIncludeUpperCase(str: string) {
  const codeUpperA = 'A'.charCodeAt(0);
  const codeUpperZ = 'Z'.charCodeAt(0);
  const code = str.charCodeAt(0);
  return codeUpperA <= code && code <= codeUpperZ;
}

function isIncludeLowerCase(str: string) {
  const codeLowerA = 'a'.charCodeAt(0);
  const codeLowerZ = 'z'.charCodeAt(0);
  const code = str.charCodeAt(0);
  return codeLowerA <= code && code <= codeLowerZ;
}

export default strongPasswordCheckerII;

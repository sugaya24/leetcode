export function findLatestTime(s: string): string {
  const [hh, mm] = s.split(":");
  const [h1, h2] = hh.split("");
  const [m1, m2] = mm.split("");
  let ans = "";
  if (h1 === "?" && h2 === "?") {
    ans += "11";
  } else if (h1 === "?" && h2 !== "?") {
    if (+h2 > 1) {
      ans += "0" + h2;
    } else {
      ans += "1" + h2;
    }
  } else if (h1 !== "?" && h2 === "?") {
    ans += h1 + (h1 === "0" ? "9" : "1");
  } else {
    ans += h1 + h2;
  }
  ans += ":";
  if (m1 === "?" && m2 === "?") {
    ans += "59";
  } else if (m1 === "?" && m2 !== "?") {
    ans += "5" + m2;
  } else if (m1 !== "?" && m2 === "?") {
    ans += m1 + "9";
  } else {
    ans += m1 + m2;
  }
  return ans;
}

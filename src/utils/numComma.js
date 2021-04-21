export function numComma(num) {
  if (!num) {
    return "";
  }

  const numStr = String(num);
  return "￥" + numStr.substring(0, numStr.length - 3) + "," + numStr.slice(-3);
}

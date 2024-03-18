export function deleteAfter(str: string, strToDelete: string): string {
  const indexHashtag = str.indexOf(strToDelete);
  if (indexHashtag !== -1) {
    return str.substring(0, indexHashtag);
  }
  return str;
}

export function generateSixDigitsNumber(): number {
  return Math.floor(100000 + Math.random() * 900000);
}

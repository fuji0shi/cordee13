export function deleteAfter(str: string, strToDelete: string): string {
  const indexHashtag = str.indexOf(strToDelete);
  if (indexHashtag !== -1) {
    return str.substring(0, indexHashtag);
  }
  return str;
}

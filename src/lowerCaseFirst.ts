export const lowerCaseFirst = (text: string): string => {
  if (text.length === 0) {
    return text;
  }

  return text.charAt(0).toLowerCase() + text.substring(1);
};

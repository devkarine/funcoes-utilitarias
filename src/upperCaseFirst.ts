export const upperCaseFirst = (text: string): string => {
  if (text.length === 0) {
    return text;
  }

  return text.charAt(0).toUpperCase() + text.substring(1);
};

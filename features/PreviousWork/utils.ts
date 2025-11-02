export const generateTextClassByIndex = (
  text: string,
  underlineRanges: Array<{ start: number; end: number }>,
): string[] => {
  const classes = new Array(text.length).fill("");
  underlineRanges.forEach(({ start, end }) => {
    for (let i = start; i <= end && i < text.length; i++) {
      classes[i] = "underline";
    }
  });
  return classes;
};

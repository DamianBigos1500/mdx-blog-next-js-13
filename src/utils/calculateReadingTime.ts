export const calculateReadingTime = (
  content: string,
  wordsPerMinute = 183
): number => {
  return Math.ceil(countWordAmount(content) / wordsPerMinute);
};

const countWordAmount = (content: string): number => {
  const text = content.split(/\s+/);
  let wordCount = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== ' ' && isContentWord(text[i])) {
      wordCount++;
    }
  }

  return wordCount;
};

const isContentWord = (str: string): boolean => {
  let alphaNumericFound = false;

  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);

    if (
      (code > 47 && code < 58) ||
      (code > 64 && code < 91) ||
      (code > 96 && code < 123)
    ) {
      alphaNumericFound = true;
      return alphaNumericFound;
    }
  }

  return alphaNumericFound;
};

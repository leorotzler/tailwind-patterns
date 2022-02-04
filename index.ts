interface PatternFunction {
  patterns: {
    [key: string]: string;
  };
  colorCombinations: {
    [key: string]: string;
  };
  patternNameSpace?: string;
}

const patterns = function ({
  patterns,
  colorCombinations,
  patternNameSpace = "pattern",
}) {
  return function ({ addUtilities }) {
    let utlilties = {};

    Object.keys(patterns).forEach((key) => {
      const patternName = key;
      const value = patterns[key];
      Object.keys(colorCombinations).forEach((combinationKey) => {
        const colors = colorCombinations[combinationKey].split("|");
        const bgFillColor = encodeURIComponent(colors[0]);
        const patternFillColor = encodeURIComponent(
          colors[1] ? colors[1] : colors[0]
        );

        const uri = value
          .replace("BACKGROUND_FILL", bgFillColor)
          .replace("PATTERN_FILL", patternFillColor);
        utlilties = {
          ...utlilties,
          [`.${patternNameSpace}-${patternName}-${combinationKey}`]: {
            backgroundImage: uri,
            backgroundColor: colors[0],
          },
        };
      });

      addUtilities(utlilties);
    });
  };
};

module.exports = patterns;

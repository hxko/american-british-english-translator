const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');

class Translator {
  constructor() {
    this.americanOnly = americanOnly;
    this.americanToBritishSpelling = americanToBritishSpelling;
    this.americanToBritishTitles = americanToBritishTitles;
    this.britishOnly = britishOnly;

    // Create reverse dictionaries
    this.britishToAmericanSpelling = this.reverseDict(americanToBritishSpelling);
    this.britishToAmericanTitles = this.reverseDict(americanToBritishTitles);
  }

  // Helper method to reverse dictionaries
  reverseDict(dict) {
    const reversed = {};
    for (let key in dict) {
      reversed[dict[key]] = key;
    }
    return reversed;
  }

  // Translate American English to British English
  americanToBritish(text) {
    let translatedText = text;

    // Translate specific American words to British
    translatedText = this.replaceWords(translatedText, this.americanOnly);

    // Translate American spellings to British spellings
    translatedText = this.replaceWords(translatedText, this.americanToBritishSpelling);

    // Translate American titles to British titles
    translatedText = this.replaceTitles(translatedText, this.americanToBritishTitles);

    // Translate time format (e.g., 10:30 to 10.30)
    translatedText = this.translateTimeFormat(translatedText, 'american-to-british');

    return translatedText;
  }

  // Translate British English to American English
  britishToAmerican(text) {
    let translatedText = text;

    // Translate specific British words to American
    translatedText = this.replaceWords(translatedText, this.britishOnly);

    // Translate British spellings to American spellings
    translatedText = this.replaceWords(translatedText, this.britishToAmericanSpelling);

    // Translate British titles to American titles
    translatedText = this.replaceTitles(translatedText, this.britishToAmericanTitles);

    // Translate time format (e.g., 10.30 to 10:30)
    translatedText = this.translateTimeFormat(translatedText, 'british-to-american');

    return translatedText;
  }
  replaceTitles(text, dict) {
    let replacedText = text;

    // Iterate through each title dictionary entry
    Object.entries(dict).forEach(([originalWord, replacementWord]) => {
      // Construct the regular expression pattern with word boundary and lookahead for punctuation
      const regexPattern = `\\b(${originalWord.replace(/\./g, '\\.')})(?=[.,?!\\s])`;
      const regex = new RegExp(regexPattern, 'gi');

      // Replace occurrences of originalWord with replacementWord
      replacedText = replacedText.replace(regex, (match) => {
        // Determine if the match is uppercase
        const isUppercase = match.charAt(0) === match.charAt(0).toUpperCase();

        // Wrap translated word in <span class="highlight"></span>
        let highlightedWord = `<span class="highlight">${replacementWord}</span>`;

        // Preserve the case of the original matched text
        if (isUppercase) {
          highlightedWord = `<span class="highlight">${replacementWord.charAt(0).toUpperCase()}${replacementWord.slice(1)}</span>`;
        }

        return highlightedWord;
      });
    });

    return replacedText;
  }

  // Helper method to replace words based on a dictionary with highlighting
  replaceWords(text, dict) {
    let replacedText = text;

    // Iterate through each dictionary entry
    Object.entries(dict).forEach(([originalWord, replacementWord]) => {
      // Adjusted regex pattern to include non-word characters and boundaries
      const regex = new RegExp(`\\b${originalWord}\\b`, 'gi');
      replacedText = replacedText.replace(regex, (match) => {
        // Check if the match is uppercase
        const isUppercase = match.charAt(0) === match.charAt(0).toUpperCase();

        // Wrap translated word in <span class="highlight"></span>
        const highlightedWord = `<span class="highlight">${replacementWord}</span>`;

        // Preserve the case of the original matched text
        if (isUppercase) {
          return highlightedWord.charAt(0).toUpperCase() + highlightedWord.slice(1);
        } else {
          return highlightedWord;
        }
      });
    });

    return replacedText;
  }



  // Translate time format between American and British
  translateTimeFormat(text, locale) {
    const timeRegexes = {
      'american-to-british': /(\d{1,2}):(\d{2})/g,
      'british-to-american': /(\d{1,2})\.(\d{2})/g
    };

    const timeFormats = {
      'american-to-british': '<span class="highlight">$1.$2</span>',
      'british-to-american': '<span class="highlight">$1:$2</span>'
    };

    const regex = timeRegexes[locale];
    if (!regex) return text;

    return text.replace(regex, (match, group1, group2) => {
      return timeFormats[locale].replace('$1', group1).replace('$2', group2);
    });
  }
}

module.exports = Translator;

'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const { locale, text } = req.body;
      // Error handling
      if (!locale || text === undefined) {
        res.json({ error: "Required field(s) missing" });
        return;
      }
      if (text == "") {
        res.json({ error: "No text to translate" });
        return;
      }

      // Translation
      let translation = "";
      if (locale == "american-to-british") {
        translation = translator.americanToBritish(text);
      } else if (locale == "british-to-american") {
        translation = translator.britishToAmerican(text);
      } else {
        res.json({ error: "Invalid value for locale field" });
        return;
      }
      if (translation == text || !translation) {
        res.json({ text, translation: "Everything looks good to me!" });
      } else {
        res.json({ text, translation: translation });
      }

    });
};

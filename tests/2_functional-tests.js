const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {

  const tests = [
    {
      description: 'Translation with text and locale fields',
      payload: { text: 'Mangoes are my favorite fruit.', locale: 'american-to-british' },
      expectedStatus: 200,
      expectedResponse: { translation: 'Mangoes are my <span class="highlight">favourite</span> fruit.' }
    },
    {
      description: 'Translation with text and invalid locale',
      payload: { text: 'invalid-locale', locale: 'invalid-locale' },
      expectedStatus: 200,
      expectedResponse: { error: 'Invalid value for locale field' }
    },
    {
      description: 'Translation with missing text',
      payload: { locale: 'american-to-british' },
      expectedStatus: 200,
      expectedResponse: { error: 'Required field(s) missing' }
    },
    {
      description: 'Translation with missing locale',
      payload: { text: 'missing locale' },
      expectedStatus: 200,
      expectedResponse: { error: 'Required field(s) missing' }
    },
    {
      description: 'Translation with empty text',
      payload: { text: '', locale: 'american-to-british' },
      expectedStatus: 200,
      expectedResponse: { error: 'No text to translate' }
    },
    {
      description: 'Translation with text that needs no translation',
      payload: { text: 'I will never give you up', locale: 'british-to-american' },
      expectedStatus: 200,
      expectedResponse: { translation: 'Everything looks good to me!' }
    }

  ];

  tests.forEach(({ description, payload, expectedStatus, expectedResponse }) => {
    test(description + ' : POST request to /api/translate', done => {
      chai
        .request(server)
        .post('/api/translate')
        .send(payload)
        .end((err, res) => {
          assert.equal(res.status, expectedStatus);
          for (let key in expectedResponse) {
            assert.equal(res.body[key], expectedResponse[key]);
          }
          done();
        });
    });
  });

});

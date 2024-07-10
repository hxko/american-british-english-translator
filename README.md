# american-british translator
This Project is part of the FreeCodeCamp - Quality Assurance.  

---
### Project Tasks

- **Logic Implementation**: All logic can go into `/components/translator.js`.
- **Route Completion**: Complete the `/api/translate` route in `/routes/api.js`.
- **Test Creation**: Create all unit and functional tests in `tests/1_unit-tests.js` and `tests/2_functional-tests.js`.
- **JavaScript Files Reference**: See the JavaScript files in `/components` for the different spelling and terms your application should translate.

### Running Tests

- To run the tests automatically, set `NODE_ENV` to `test` (without quotes) in the `.env` file.
- To run the tests in the console, use the command `npm run test`.

### Unit Tests (`tests/1_unit-tests.js`)

- Translate "_Mangoes are my favorite fruit._" to British English
- Translate "_I ate yogurt for breakfast._" to British English
- Translate "_We had a party at my friend's condo._" to British English
- Translate "_Can you toss this in the trashcan for me?_" to British English
- Translate "_The parking lot was full._" to British English
- Translate "_Like a high tech Rube Goldberg machine._" to British English
- Translate "_To play hooky means to skip class or work._" to British English
- Translate "_No Mr. Bond, I expect you to die._" to British English
- Translate "_Dr. Grosh will see you now._" to British English
- Translate "_Lunch is at 12:15 today._" to British English
- Translate "_We watched the footie match for a while._" to American English
- Translate "_Paracetamol takes up to an hour to work._" to American English
- Translate "_First, caramelise the onions._" to American English
- Translate "_I spent the bank holiday at the funfair._" to American English
- Translate "_I had a bicky then went to the chippy._" to American English
- Translate "_I've just got bits and bobs in my bum bag._" to American English
- Translate "_The car boot sale at Boxted Airfield was called off._" to American English
- Translate "_Have you met Mrs Kalyani?_" to American English
- Translate "_Prof Joyner of King's College, London._" to American English
- Translate "_Tea time is usually around 4 or 4.30._" to American English
- Highlight translation in "_Mangoes are my favorite fruit._"
- Highlight translation in "_I ate yogurt for breakfast._"
- Highlight translation in "_We watched the footie match for a while._"
- Highlight translation in "_Paracetamol takes up to an hour to work._"


### Functional Tests (`tests/2_functional-tests.js`)

- Translation with text and locale fields: POST request to `/api/translate`
- Translation with text and invalid locale field: POST request to `/api/translate`
- Translation with missing text field: POST request to `/api/translate`
- Translation with missing locale field: POST request to `/api/translate`
- Translation with empty text: POST request to `/api/translate`
- Translation with text that needs no translation: POST request to `/api/translate`

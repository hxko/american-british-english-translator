const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

const testCases = {
  americanToBritish: [
    {
      input: 'Mangoes are my favorite fruit.',
      expected: 'Mangoes are my <span class="highlight">favourite</span> fruit.'
    },
    {
      input: 'I ate yogurt for breakfast.',
      expected: 'I ate <span class="highlight">yoghurt</span> for breakfast.'
    },
    {
      input: 'We had a party at my friend\'s condo.',
      expected: 'We had a party at my friend\'s <span class="highlight">flat</span>.'
    },
    {
      input: 'Can you toss this in the trashcan for me?',
      expected: 'Can you toss this in the <span class="highlight">bin</span> for me?'
    },
    {
      input: 'The parking lot was full.',
      expected: 'The <span class="highlight">car park</span> was full.'
    },
    {
      input: 'Like a high tech Rube Goldberg machine.',
      expected: 'Like a high tech <span class="highlight">Heath Robinson device</span>.'
    },
    {
      input: 'To play hooky means to skip class or work.',
      expected: 'To <span class="highlight">bunk off</span> means to skip class or work.'
    },
    {
      input: 'No Mr. Bond, I expect you to die.',
      expected: 'No <span class="highlight">Mr</span> Bond, I expect you to die.'
    },
    {
      input: 'Dr. Grosh will see you now.',
      expected: '<span class="highlight">Dr</span> Grosh will see you now.'
    },
    {
      input: 'Lunch is at 12:15 today.',
      expected: 'Lunch is at <span class="highlight">12.15</span> today.'
    }
  ],
  britishToAmerican: [
    {
      input: 'We watched the footie match for a while.',
      expected: 'We watched the <span class="highlight">soccer</span> match for a while.'
    },
    {
      input: 'Paracetamol takes up to an hour to work.',
      expected: '<span class="highlight">Tylenol</span> takes up to an hour to work.'
    },
    {
      input: 'First, caramelise the onions.',
      expected: 'First, <span class="highlight">caramelize</span> the onions.'
    },
    {
      input: 'I spent the bank holiday at the funfair.',
      expected: 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.'
    },
    {
      input: 'I had a bicky then went to the chippy.',
      expected: 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-<span class="highlight">fish-and-chip shop</span></span>.'
    },
    {
      input: 'I\'ve just got bits and bobs in my bum bag.',
      expected: 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.'
    },
    {
      input: 'The car boot sale at Boxted Airfield was called off.',
      expected: 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.'
    },
    {
      input: 'Have you met Mrs Kalyani?',
      expected: 'Have you met <span class="highlight">Mrs.</span> Kalyani?'
    },
    {
      input: 'Prof Joyner of King\'s College, London.',
      expected: '<span class="highlight">Prof.</span> Joyner of King\'s College, London.'
    },
    {
      input: 'Tea time is usually around 4 or 4.30.',
      expected: 'Tea time is usually around 4 or <span class="highlight">4:30</span>.'
    }
  ],
  highLightWord_americanToBritish: [
    {
      input: 'Mangoes are my favorite fruit.',
      expected: 'Mangoes are my <span class="highlight">favourite</span> fruit.'
    },
    {
      input: 'I ate yogurt for breakfast.',
      expected: 'I ate <span class="highlight">yoghurt</span> for breakfast.'
    },
  ],
  highLightWord_britishToAmerican: [
    {
      input: 'We watched the footie match for a while.',
      expected: 'We watched the <span class="highlight">soccer</span> match for a while.'
    },
    {
      input: 'Paracetamol takes up to an hour to work.',
      expected: '<span class="highlight">Tylenol</span> takes up to an hour to work.'
    },
  ]
};

suite('Unit Tests', () => {
  // Loop through americanToBritish test cases
  testCases.americanToBritish.forEach((testCase, index) => {
    test(`Translate "${testCase.input}" to British English`, () => {
      assert.strictEqual(translator.americanToBritish(testCase.input), testCase.expected);
    });
  });

  // Loop through britishToAmerican test cases
  testCases.britishToAmerican.forEach((testCase, index) => {
    test(`Translate "${testCase.input}" to American English`, () => {
      assert.strictEqual(translator.britishToAmerican(testCase.input), testCase.expected);
    });
  });

  // Loop through highLightWord test cases
  testCases.highLightWord_americanToBritish.forEach((testCase, index) => {
    test(`Translate "${testCase.input}" to British English`, () => {
      assert.strictEqual(translator.americanToBritish(testCase.input), testCase.expected);
    });
  });

  // Loop through highLightWord test cases
  testCases.highLightWord_britishToAmerican.forEach((testCase, index) => {
    test(`Translate "${testCase.input}" to American English`, () => {
      assert.strictEqual(translator.britishToAmerican(testCase.input), testCase.expected);
    });
  });

});

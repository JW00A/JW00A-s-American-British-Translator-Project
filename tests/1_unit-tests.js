const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

let translator = new Translator();

suite('Unit Tests', () => {
    test('Translate Mangoes are my favorite fruit. to British English', function() {
        assert.equal(translator.translate('Mangoes are my favorite fruit.', 
                                          'american-to-british').translation,
                                             'Mangoes are my <span class="highlight">favourite</span> fruit.');
    });
    test('Translate I ate yogurt for breakfast. to British English', function() {
        assert.equal(translator.translate('I ate yogurt for breakfast.', 
                                          'american-to-british').translation,
                                             'I ate <span class="highlight">yoghurt</span> for breakfast.');
    });
    test("Translate We had a party at my friend's condo. to British English", function() {
        assert.equal(translator.translate("We had a party at my friend's condo.", 
                                          'american-to-british').translation,
                                             `We had a party at my friend's <span class="highlight">flat</span>.`);
    });
    test("Translate Can you toss this in the trashcan for me? to British English", function() {
        assert.equal(translator.translate("Can you toss this in the trashcan for me?", 
                                          'american-to-british').translation,
                                             `Can you toss this in the <span class="highlight">bin</span> for me?`);
    });
    test("Translate The parking lot was full. to British English", function() {
        assert.equal(translator.translate("The parking lot was full.", 
                                          'american-to-british').translation,
                                             `The <span class="highlight">car park</span> was full.`);
    });
    test("Translate Like a high tech Rube Goldberg machine. to British English", function() {
        assert.equal(translator.translate("Like a high tech Rube Goldberg machine.", 
                                          'american-to-british').translation,
                                             `Like a high tech <span class="highlight">Heath Robinson device</span>.`);
    });
    test("Translate To play hooky means to skip class or work. to British English", function() {
        assert.equal(translator.translate("To play hooky means to skip class or work.", 
                                          'american-to-british').translation,
                                             `To <span class="highlight">bunk off</span> means to skip class or work.`);
    });
    test("Translate No Mr. Bond, I expect you to die. to British English", function() {
        assert.equal(translator.translate("No Mr. Bond, I expect you to die.", 
                                          'american-to-british').translation,
                                             `No <span class="highlight">Mr</span> Bond, I expect you to die.`);
    });
    test("Translate Dr. Grosh will see you now. to British English", function() {
        assert.equal(translator.translate("Dr. Grosh will see you now.", 
                                          'american-to-british').translation,
                                             `<span class="highlight">Dr</span> Grosh will see you now.`);
    });
    test("Translate Lunch is at 12:15 today. to British English", function() {
        assert.equal(translator.translate("Lunch is at 12:15 today.", 
                                          'american-to-british').translation,
                                             `Lunch is at <span class="highlight">12.15</span> today.`);
    });

    test("Translate We watched the footie match for a while. to American English", function() {
        assert.equal(translator.translate("We watched the footie match for a while.", 
                                          'british-to-american').translation,
                                             `We watched the <span class="highlight">soccer</span> match for a while.`);
    });
    test("Translate Paracetamol takes up to an hour to work. to American English", function() {
        assert.equal(translator.translate("Paracetamol takes up to an hour to work.", 
                                          'british-to-american').translation,
                                             `<span class="highlight">Tylenol</span> takes up to an hour to work.`);
    });
    test("Translate First, caramelise the onions. to American English", function() {
        assert.equal(translator.translate("First, caramelise the onions.", 
                                          'british-to-american').translation,
                                             `First, <span class="highlight">caramelize</span> the onions.`);
    });
    test("Translate I spent the bank holiday at the funfair. to American English", function() {
        assert.equal(translator.translate("I spent the bank holiday at the funfair.", 
                                          'british-to-american').translation,
                                             `I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.`);
    });
    test("Translate I had a bicky then went to the chippy. to American English", function() {
        assert.equal(translator.translate("I had a bicky then went to the chippy.", 
                                          'british-to-american').translation,
                                             `I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-<span class="highlight">fish-and-chip shop</span></span>.`);
    });
    test("Translate I've just got bits and bobs in my bum bag. to American English", function() {
        assert.equal(translator.translate("I've just got bits and bobs in my bum bag.", 
                                          'british-to-american').translation,
                                             `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`);
    });
    test("Translate The car boot sale at Boxted Airfield was called off. to American English", function() {
        assert.equal(translator.translate("The car boot sale at Boxted Airfield was called off.", 
                                          'british-to-american').translation,
                                             `The <span class="highlight">swap meet</span> at Boxted Airfield was called off.`);
    });
    test("Translate Have you met Mrs Kalyani? to American English", function() {
        assert.equal(translator.translate("Have you met Mrs Kalyani?", 
                                          'british-to-american').translation,
                                             `Have you met <span class="highlight">mrs.</span> Kalyani?`);
    });
    test("Translate Prof Joyner of King's College, London. to American English", function() {
        assert.equal(translator.translate("Prof Joyner of King's College, London.", 
                                          'british-to-american').translation,
                                             `<span class="highlight">prof.</span> Joyner of King's College, London.`);
    });
    test("Translate Tea time is usually around 4 or 4.30. to American English", function() {
        assert.equal(translator.translate("Tea time is usually around 4 or 4.30.", 
                                          'british-to-american').translation,
                                             `Tea time is usually around 4 or <span class="highlight">4:30</span>.`);
    });

    test("Highlight translation in Mangoes are my favorite fruit.", function() {
        assert.include(translator.translate("Mangoes are my favorite fruit.", "american-to-british").translation, 
                                            '<span class="highlight">favourite</span>');
    });
    test("Highlight translation in I ate yogurt for breakfast.", function() {
        assert.include(translator.translate("I ate yogurt for breakfast.", "american-to-british").translation, 
                                            '<span class="highlight">yoghurt</span>');
    });
    test("Highlight translation in We watched the footie match for a while.", function() {
        assert.include(translator.translate("We watched the footie match for a while.", "british-to-american").translation, 
                                            '<span class="highlight">soccer</span>');
    });
    test("Highlight translation in Paracetamol takes up to an hour to work.", function() {
        assert.include(translator.translate("Paracetamol takes up to an hour to work.", "british-to-american").translation, 
                                            '<span class="highlight">Tylenol</span>');
    });
});

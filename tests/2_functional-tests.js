const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

suite('Functional Tests', () => {
    test('Translation with text and locale fields', function(done) {
        chai.request(server).post('/api/translate')
            .send({
                text: 'Hello, how are you?',
                locale: 'american-to-british'
            }).end((err, res) => {
                assert.equal(res.status, 200);
                assert.property(res.body, 'translation');
                done();
            });
    });
    test('Translation with text and invalid locale field', function(done) {
        chai.request(server).post('/api/translate')
            .send({
                text: 'Hello, how are you?',
                locale: 'american-to'
            }).end((err, res) => {
                assert.deepEqual(res.body, { error: 'Invalid value for locale field' });
                done();
            });
    });
    test('Translation with missing text field', function(done) {
        chai.request(server).post('/api/translate')
            .send({
                locale: 'american-to-british'
            }).end((err, res) => {
                assert.deepEqual(res.body, { error: 'Required field(s) missing' });
                done();
            });
    });
    test('Translation with missing locale field', function(done) {
        chai.request(server).post('/api/translate')
            .send({
                text: 'Hello, how are you?'
            }).end((err, res) => {
                assert.deepEqual(res.body, { error: 'Required field(s) missing' });
                done();
            });
    });
    test('Translation with empty text', function(done) {
        chai.request(server).post('/api/translate')
            .send({
                text: '',
                locale: 'american-to-british'
            }).end((err, res) => {
                assert.deepEqual(res.body, { error: 'No text to translate' });
                done();
            });
    });
    test('Translation with text that needs no translation', function(done) {
        chai.request(server).post('/api/translate')
            .send({
                text: 'Hello',
                locale: 'american-to-british'
            }).end((err, res) => {
                assert.equal(res.status, 200);
                assert.deepEqual(res.body, { text: 'Hello', 
                                             translation: 'Everything looks good to me!' 
                                            });
                done();
            });
    });
});

const validator = require('./index.js');
const assert = require('assert');

describe('Email validation', function () {
    it('Should return false if email is not valid', function () {
        assert.equal(validator.isEmail("exgr@fk."), false);
        assert.equal(validator.isEmail("@fk.com"), false);
        assert.equal(validator.isEmail("asdf2fk.com"), false);
    });
    it('Should return true if email is valid', function () {
        assert.equal(validator.isEmail("exgr@fk.com"), true);
        assert.equal(validator.isEmail("gawr@gmail.com"), true);
    });
});

describe('Whitespace validation', function () {
    it('Should return false if string does not contain whitespaces', function () {
        assert.equal(validator.hasWhitespaces("asdf"), false)
    });
    it('Should return true if string contain any kind of whitespaces', function () {
        assert.equal(validator.hasWhitespaces(" asdf"), true)
        assert.equal(validator.hasWhitespaces(" asdf "), true)
        assert.equal(validator.hasWhitespaces("asdf "), true)
    });
});

describe('Password scoring', function () {
    it('Should return false if string contains any kind of spaces', function () {
        assert.equal(validator.passwordScoring(" asdf"), 0)
        assert.equal(validator.passwordScoring("a sdf"), 0)
        assert.notEqual(validator.passwordScoring("A2sdfasdf234#!"), 0)
    });
    it('Should return 1 if password uses only one type of symbols', function () {
        assert.equal(validator.passwordScoring("asdf"), 1)
        assert.equal(validator.passwordScoring("!!!!!"), 1)
        assert.notEqual(validator.passwordScoring("KAREN"), 3)
    });
    it('Should return 2 if password uses two types of symbols', function () {
        assert.equal(validator.passwordScoring("asdf!"), 2)
        assert.equal(validator.passwordScoring("asd!!!!f!"), 2)
        assert.notEqual(validator.passwordScoring("A2sdfasdf234#!"), 2)
    });
    it('Should return 3 if password uses three types of symbols', function () {
        assert.equal(validator.passwordScoring("Asdf!"), 3)
        assert.equal(validator.passwordScoring("AsdFDWf!@#"), 3)
        assert.notEqual(validator.passwordScoring("A2sdfasdf234#!"), 3)
    });
    it('Should return 4 if password uses four types of symbols', function () {
        assert.equal(validator.passwordScoring("A2sdf!"), 4)
        assert.equal(validator.passwordScoring("A2sdfasdf234#!"), 4)
        assert.notEqual(validator.passwordScoring("A2sdfasdf234#!"), 3)
    });
});

describe('Is not blank?', function () {
    it('Should return false if string does not contains something except space-like characters', function () {
        assert.equal(validator.isNotBlank(" "), false)
        assert.equal(validator.isNotBlank("	"), false)
        assert.equal(validator.isNotBlank(`
												`), false)
        assert.equal(validator.isNotBlank(""), false)
        assert.notEqual(validator.isNotBlank(" cure"), false)
    });
    it('Should return true if string contains something except space-like characters', function () {
        assert.equal(validator.isNotBlank(" asdf"), true)
        assert.equal(validator.isNotBlank("		function"), true)
        assert.equal(validator.isNotBlank("god	bless JavaScript"), true)
    });
});
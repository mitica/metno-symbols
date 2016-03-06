/*eslint dot-notation:1*/

'use strict';

var assert = require('assert');
var Symbols = require('../index.js');

describe('Symbols', function() {
	it('should get supported languages', function() {
		var languages = Symbols.languages();
		assert.ok(languages);
		assert.equal(true, languages.length > 1);
	});

	it('should get symbols', function() {
		var symbols = Symbols.symbols();
		assert.ok(symbols);
		assert.equal('Sun', symbols['1']);
	});

	it('should get symbols:en', function() {
		var symbols = Symbols.symbols('en');
		assert.ok(symbols);
		assert.equal('string', typeof symbols['Sun']);
	});

	it('should get symbols:ro', function() {
		var symbols = Symbols.symbols('ro');
		assert.ok(symbols);
		assert.equal('string', typeof symbols['Sun']);
	});

	it('should get symbolCode:1', function() {
		var code = Symbols.symbolCode(1);
		assert.equal('Sun', code);
	});

	it('should get symbolName:1', function() {
		var name = Symbols.symbolName(1);
		assert.equal('Clear sky', name);
	});

	it('should get symbolName:Sun', function() {
		var name = Symbols.symbolName('Sun');
		assert.equal('Clear sky', name);
	});

	it('should get symbolName:1:ro', function() {
		var name = Symbols.symbolName(1, 'ro');
		assert.equal('Senin', name);
	});

	it('should get symbolName:Sun:ro', function() {
		var name = Symbols.symbolName('Sun', 'ro');
		assert.equal('Senin', name);
	});
});

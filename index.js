"use strict";

var DEFAULT_LANG = "en";
var LANGUAGES = [
	"en",
	"ro",
	"bg",
	"ru",
	"hu",
	"cs",
	"it",
	"pl",
	"sq",
	"tr",
	"lv",
	"vi",
	"sr",
	"hr",
];
var languages = LANGUAGES.slice();

function getLanguages() {
	return languages;
}

function getData(name) {
	return require("./data/" + name + ".json");
}

function getSymbols(lang) {
	var name = "symbols";
	var lowerLang;
	if (typeof lang === "string") {
		lowerLang = lang.toLowerCase();
		if (~LANGUAGES.indexOf(lowerLang)) {
			name = lowerLang;
		} else {
			throw new Error("Unsupported language: " + lang);
		}
	}

	return getData(name);
}

function getSymbolCode(id) {
	var symbols = getSymbols();
	return symbols[id];
}

function getSymbolName(code, lang) {
	lang = lang || DEFAULT_LANG;

	if (typeof code === "number") {
		code = getSymbolCode(code);
	}

	var symbols = getSymbols(lang);

	return symbols[code];
}

// exports -----------------

exports.languages = getLanguages;
exports.symbols = getSymbols;
exports.symbolCode = getSymbolCode;
exports.symbolName = getSymbolName;

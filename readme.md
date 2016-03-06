# metno-symbols

A set of files with met.no weather symbol names.

## Files

- **symbols**.json - general symbols
- **en**.json - symbols names for English
- **ro**.json - symbols names for Romanian
- ... **CODE**.json - CODE = language code


## Nodejs usage
```
var Symbols = require('metno-symbols');
var englishSymbols = Symbols.symbols('en');
var englishSunName = Symbols.symbolName(1);
// or:
// var englishSunName = Symbols.symbolName('Sun');
var romanianSunName = Symbols.symbolName(1, 'ro');
// or:
// var romanianSunName = Symbols.symbolName('Sun', 'ro');
```

# kraken_data

## Description
Library to perform data validation, normalization and extraction.

Uses only native JS functions for speed and low dependencies.

Three functions:
- validate
- normalize
- extract


## Testing

node --experimental-vm-modules node_modules/.bin/jest

## How to use

## Install
```
import {krakenData} from 'https://cdn.jsdelivr.net/gh/tactik8/krakenJsLibraryData@main/kraken_data/kraken_data.js';

let result = krakenData.validate.email('test@test.com')


```


### Validate data
```

let value = 'https://www.test.com'; 
let k = KrData(value);

let is_valid = k.validate.url(value);
console.log(isValid);

```

## Data types
- url
- email
- date
- telephone
    - North America (NA)
- address
    - addressRegion
        - US
        - CA
    - postalCode
        - US
        - CA
    - addressCountry
        - 
- GUID
- UUID
- 

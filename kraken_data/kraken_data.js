
import { krExtract } from './src/kraken_data_extract.js';

import { krNormalize } from './src/kraken_data_normalize.js';

import { krValidate } from './src/kraken_data_validate.js';



export const krakenData = {
    extract: krExtract,
    normalize: krNormalize,
    validate: krValidate
}


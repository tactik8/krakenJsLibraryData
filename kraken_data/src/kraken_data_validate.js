
import { regexLibrary } from './kraken_regex_library.js';


export var krValidate = {

    url: _isUrl,
    email: _isEmail,
    telephoneNa: _isTelephoneNa,
    postalcodeUs: _isPostalcodeUs,
    postalcodeCa: _isPostalcodeCa,
    provinceCa: _isProvinceCa,
    provinceUs: _isProvinceUs,
    validate: _validate,
    get: _validate
    
}


function _validate(record_type, propertyID, value){

    // Retrieve applicable tests
    let tests = regexLibrary.all(record_type, propertyID);

    // Run test
    let results = [];
    for (let test of tests){

        var result = {
            'test': test.name,
            'result': _isValid(test.name, value)
        };
       
    results.push(result);
        
    }

    let globalResult = results.every(v => v.result === true);
    
    return globalResult;
    
}


function _isUrl(value){
    return _isValid('url', value);
}
function _isEmail(value){
    return _isValid('email', value);
}
function _isTelephoneNa(value){
    return _isValid('telephoneNa', value);
}
function _isPostalcodeCa(value){
    return _isValid('postalcodeCa', value);
}

function _isPostalcodeUs(value){
    return _isValid('postalcodeUs', value);
}

function _isProvinceCa(value){
    return _isValid('provinceCa', value);
}

function _isProvinceUs(value){
    return _isValid('provinceUs', value);
}

function _isValid(libraryItemName, value){

    var libraryItem = regexLibrary.get(libraryItemName);
    var regex = libraryItem['regexValidate'];
    return regex.test(value); 
}



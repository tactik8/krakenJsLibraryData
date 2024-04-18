

import { regexLibrary } from '../kraken_regex_library.js';



test("Get item", function () {


    // email
    var value = 'email';
    var result = regexLibrary.get(value).name;
    var expected_result = 'email';
    expect(result).toStrictEqual(expected_result);

    
});

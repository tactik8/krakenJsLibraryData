
import { krValidate } from '../kraken_data_validate.js';



test("Email validation", function () {
    

    // email
    var value = 'test@test.com';
    var result = krValidate.email(value);
    var expected_result = true;
    expect(result).toStrictEqual(expected_result);

    var value = 'test.45@test.com';
    var result = krValidate.email(value);
    var expected_result = true;
    expect(result).toStrictEqual(expected_result);

    var value = null;
    var result = krValidate.email(value);
    var expected_result = false;
    expect(result).toStrictEqual(expected_result);

    var value = 'test.com';
    var result = krValidate.email(value);
    var expected_result = false;
    expect(result).toStrictEqual(expected_result);

    var value = 'test@test.';
    var result = krValidate.email(value);
    var expected_result = false;
    expect(result).toStrictEqual(expected_result);

    
});



test("Url validation", function () {


    // email
    var value = 'https://www.test.com/';
    var result = krValidate.url(value);
    var expected_result = true;
    expect(result).toStrictEqual(expected_result);

    var value = 'https://www.test.com';
    var result = krValidate.url(value);
    var expected_result = true;
    expect(result).toStrictEqual(expected_result);

    var value = 'http://www.test.com/';
    var result = krValidate.url(value);
    var expected_result = true;
    expect(result).toStrictEqual(expected_result);

    var value = 'http://www.test.com';
    var result = krValidate.url(value);
    var expected_result = true;
    expect(result).toStrictEqual(expected_result);


    
    var value = null;
    var result = krValidate.url(value);
    var expected_result = false;
    expect(result).toStrictEqual(expected_result);

    var value = 'test.com';
    var result = krValidate.url(value);
    var expected_result = false;
    expect(result).toStrictEqual(expected_result);

    var value = 'test@test.';
    var result = krValidate.url(value);
    var expected_result = false;
    expect(result).toStrictEqual(expected_result);


});



test("Telephone validation", function () {


    // email
    var value = '(514) 333-2222';
    var result = krValidate.telephoneNa(value);
    var expected_result = true;
    expect(result).toStrictEqual(expected_result);

    var value = '514 333-2222';
    var result = krValidate.telephoneNa(value);
    var expected_result = true;
    expect(result).toStrictEqual(expected_result);

    var value = '514 3332222';
    var result = krValidate.telephoneNa(value);
    var expected_result = true;
    expect(result).toStrictEqual(expected_result);

    var value = '(514) 333-2222';
    var result = krValidate.telephoneNa(value);
    var expected_result = true;
    expect(result).toStrictEqual(expected_result);



    var value = null;
    var result = krValidate.telephoneNa(value);
    var expected_result = false;
    expect(result).toStrictEqual(expected_result);

    



});



test("Automatic validation", function () {

    // email
    var record_type = 'thing';
    var propertyID = 'email'
    var value = 'test@test.com';
    var result = krValidate.validate(record_type, propertyID, value);
    var expected_result = true;
    expect(result).toStrictEqual(expected_result);


});
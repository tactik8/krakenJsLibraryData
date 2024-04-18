



export var regexLibrary = {

    get: _getLibraryItemByName,
    all: _getApplicableLibraryItems,
    
}



function _getLibraryItemByName(name){

    // Returns all applicable items
    let library = _regexLibrary();

    // Retrieve tests that are applicable

    for(let k in library){
        var record = library[k];

        if (name == record.name) {
            return record;
        }
    }

    return applicableTests;
}



function _getApplicableLibraryItems(thing, propertyID){

    // Returns all applicable items
    let library = _regexLibrary();

    // Retrieve tests that are applicable
    let applicableTests = [];
    for(let k in library){
        var record = library[k];

        if (!propertyID || propertyID == record.property) {
            applicableTests.push(record);
        }
    }

    return applicableTests;
}

function _regexLibrary() {
    let record = [
        {
            name: "creditcardVisa",
            thing: null,
            property: null,
            regexValidate: new RegExp(/^(4[0-9]{12}(?:[0-9]{3})?)*$/, "g"),
            regexExtract: new RegExp(/^(4[0-9]{12}(?:[0-9]{3})?)*$/, "g"),
            source: "https://gist.github.com/nerdsrescueme/1237767",
            description: "visa card number",
        },
        {
            name: "ssnUs",
            thing: "person",
            property: "vatID",
            regexValidate: new RegExp(/^(4[0-9]{12}(?:[0-9]{3})?)*$/, "g"),
            regexExtract: new RegExp(/^(4[0-9]{12}(?:[0-9]{3})?)*$/, "g"),
            source: "https://gist.github.com/nerdsrescueme/1237767",
            description: "US Social security number",
            constraints: [{ addressCountry: "US" }],
        },
        {
            name: "url",
            thing: "thing",
            property: "url",
            regexValidate: new RegExp(
                /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
                "g",
            ),
            regexExtract: new RegExp(
                /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
                "g",
            ),
            source: "https://uibakery.io/regex-library/url",
            result: '{"@type": "WebPage", "url": "https://{item}/"}',
        },
        {
            name: "email",
            thing: "thing",
            property: "email",
            regexValidate: new RegExp(
                /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/,
                "g",
            ),
            regexExtract:
                "/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/",
            source: "https://gist.github.com/nerdsrescueme/1237767",
            result: '{"@type": "ContactPoint", "email": "{item}"}',
        },
        {
            name: "telephoneE164",
            thing: "thing",
            property: "telephone",
            regexValidate: new RegExp(/^\+[1-9]\d{1,14}$/, "g"),
            regexExtract: new RegExp(/^\+[1-9]\d{1,14}$/, "g"),
            source: null,
            description: "E.164 telephone",
        },
        {
            name: "telephoneNa",
            thing: "thing",
            property: "telephone",
            regexValidate: new RegExp(
                /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/,
                "g",
            ),
            regexExtract: new RegExp(
                /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/,
                "g",
            ),
            source: null,
            description: "North-America telephone number",
            constraints: [{ addressCountry: ["US", "CA"] }],
        },
        {
            name: "postalcodeUs",
            thing: "postalAddress",
            property: "postalCode",
            regexValidate: new RegExp(/^[0-9]{5}(?:-[0-9]{4})?$/, "g"),
            regexExtract: new RegExp(/^[0-9]{5}(?:-[0-9]{4})?$/, "g"),
            source: null,
            description: "US Zipcode",
            constraints: [{ addressCountry: ["US"] }],
        },
        {
            name: "postalcodeCa",
            thing: "postalAddress",
            property: "postalCode",
            regexValidate: new RegExp(
                /(^\d{5}(-\d{4})?$)|(^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$)/,
                "g",
            ),
            regexExtract: new RegExp(
                /(^\d{5}(-\d{4})?$)|(^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$)/,
                "g",
            ),
            source: null,
            description: "CA Zipcode",
            constraints: [{ addressCountry: ["CA"] }],
        },
        {
            name: "provinceCa",
            thing: "postalAddress",
            property: "addressRegion",
            regexExpression: "/^(?:AB|BC|MB|N[BLTSU]|ON|PE|QC|SK|YT)*$/",
            regexValidate: new RegExp(
                /^(?:AB|BC|MB|N[BLTSU]|ON|PE|QC|SK|YT)*$/,
                "g",
            ),
            regexExtract: new RegExp(
                /^(?:AB|BC|MB|N[BLTSU]|ON|PE|QC|SK|YT)*$/,
                "g",
            ),
            source: null,
            description: "Canada 2 digits province code",
            constraints: [{ addressCountry: ["CA"] }],
        },
        {
            name: "stateUs",
            thing: "postalAddress",
            property: "addressRegion",
            regexValidate: new RegExp(
                /^(?:A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])*$/,
                "g",
            ),
            regexExtract: new RegExp(
                /^(?:A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])*$/,
                "g",
            ),
            source: null,
            description: "US 2 digits state code",
            constraints: [{ addressCountry: ["US"] }],
        },
        {
            name: "dateIso",
            thing: "thing",
            property: null,
            regexValidate: new RegExp(
                /^(?:\d{4})-(?:\d{2})-(?:\d{2})T(?:\d{2}):(?:\d{2}):(?:\d{2}(?:\.\d*)?)(?:(?:-(?:\d{2}):(?:\d{2})|Z)?)$/,
                "g",
            ),
            regexExtract: new RegExp(
                /^(?:\d{4})-(?:\d{2})-(?:\d{2})T(?:\d{2}):(?:\d{2}):(?:\d{2}(?:\.\d*)?)(?:(?:-(?:\d{2}):(?:\d{2})|Z)?)$/,
                "g",
            ),
            source: null,
            description: "ISO format date (2019-09-07T15:50+00Z)",
            constraints: [{ addressCountry: ["CA"] }],
        },
        {
            name: "guid",
            thing: "thing",
            property: null,
            regexValidate: new RegExp(
                /^(?:\{{0,1}(?:[0-9a-fA-F]){8}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){12}\}{0,1})$/,
                "g",
            ),
            regexExtract: new RegExp(
                /^(?:\{{0,1}(?:[0-9a-fA-F]){8}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){12}\}{0,1})$/,
                "g",
            ),
            source: null,
            description: "GUID",
        },
        {
            name: "uuid",
            thing: "thing",
            property: null,
            regexValidate: new RegExp(
                /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/,
                "gi",
            ),
            regexExtract: new RegExp(
                /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/,
                "gi",
            ),
            source: null,
            description: "UUID",
        },
        {
            name: "passwordStrong",
            thing: "thing",
            property: null,
            regexValidate: new RegExp(
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                "g",
            ),
            regexExtract: new RegExp(
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                "g",
            ),
            source: null,
            description: "Strong password",
        },
        {
            name: "macAddress",
            thing: "thing",
            property: null,
            regexValidate: new RegExp(
                /^(?:[0-9A-Fa-f]{2}[:-]){5}(?:[0-9A-Fa-f]{2})$/,
                "g",
            ),
            regexExtract: new RegExp(
                /^(?:[0-9A-Fa-f]{2}[:-]){5}(?:[0-9A-Fa-f]{2})$/,
                "g",
            ),
            source: null,
            description: "Mac Address",
        },
        {
            name: "ipv4Address",
            thing: "thing",
            property: null,
            regexValidate: new RegExp(
                /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
                "g",
            ),
            regexExtract: new RegExp(
                /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
                "g",
            ),
            source: null,
            description: "IPV4 Address",
        },
        {
            name: "ipv6Address",
            thing: "thing",
            property: null,
            regexValidate: new RegExp(
                /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
                "g",
            ),
            regexExtract: new RegExp(
                /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
                "g",
            ),
            source: null,
            description: "IPV6 Address",
        },
        {
            name: "hashtag",
            thing: "thing",
            property: null,
            source: "https://community.zapier.com/featured-articles-65/using-regex-to-extract-different-types-of-content-22127",
            regexValidate: new RegExp(/#(\w+)/, "g"),
            regexExtract: new RegExp(/#(\w+)/, "g"),
            description: "hashtag (#myHashtag)",
        },
        {
            name: "mentions",
            thing: "thing",
            property: null,
            source: "https://community.zapier.com/featured-articles-65/using-regex-to-extract-different-types-of-content-22127",
            regexValidate: new RegExp(/@(\w+)/, "g"),
            regexExtract: new RegExp(/@(\w+)/, "g"),
            description: "mentions (@bob)",
        },
        {
            name: "domain",
            thing: "thing",
            property: "email",
            source: "https://community.zapier.com/featured-articles-65/using-regex-to-extract-different-types-of-content-22127",
            regexValidate: new RegExp(
                /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/,
                "gi",
            ),
            regexExtract: new RegExp(
                /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/,
                "gi",
            ),
            description: "domain from email",
            result: '{"@type": "WebSite", "url": "https://{item}/"}',
        },
    ];
    return record;
}

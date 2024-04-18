export var krNormalize = {
    url: _normalizeUrl,
    email: _normalizeEmail,
    number: _normalizeNumber
};

function _normalizeUrl(urlString) {
    try {
        let url = new URL(urlString);

        // Ensure the protocol is https
        url.protocol = "https:";

        // Lowercase the hostname
        url.hostname = url.hostname.toLowerCase();

        // Remove default ports
        if (url.port === "80" || url.port === "443") {
            url.port = "";
        }

        // Optionally: sort query parameters
        if (url.search.length > 1) {
            let params = new URLSearchParams(url.search);
            // Create a sorted search params string
            let sortedParams = new URLSearchParams(
                [...params.entries()].sort(),
            ).toString();
            url.search = sortedParams;
        }

        return url.toString();
        
    } catch (e) {
        return null;
    }
}

function _normalizeNumber(value){
    // Takes an input and returns as number if present or null.
    
    if(value === null || value === undefined){
        return null;
    }
    
    if (typeof value === 'number' && isFinite(value)){
        
        return value;
    }

    try{
        let newValue = Number(value);

        if(!Number.isNaN(newValue)){
            return newValue;
        };
        
    }
    catch(error) {
        //console.log(error);
        return null;
    }
    return null;
}


function _normalizeEmail(email) {
  // Trim spaces and convert the email address to lowercase
  return email.trim().toLowerCase();
}
((global) => {
    let ajaxUtils = {};

    let getRequestObject = () => {
        if(global.XMLHttpRequest) {
            return (new XMLHttpRequest());
        }else if (global.ActiveXObject) {
            return (new ActiveXObject("Microsoft.XMLHTTP"))
        }else {
            global.alert("Ajax is not supported!")
            return null;
        }
    }

    ajaxUtils.sendGetRequest = (requestUrl, responseHandler, isJsonResponse) => {
        let request = getRequestObject();
        request.onreadystatechange = () => handleResponse(request, responseHandler, isJsonResponse);
        request.open("GET", requestUrl, true);
        request.send(null); // for POST only
    };

    let handleResponse = (request, responseHandler, isJsonResponse) => {
        if((request.readyState === 4) && (request.status === 200)) {
            if(isJsonResponse === undefined) {
                isJsonResponse = true;
            }
            if(isJsonResponse) {
                responseHandler(JSON.parse(request.responseText));
            }else {
                responseHandler(request);
            }
        }
    }

    global.$ajaxUtils = ajaxUtils;

})(window);

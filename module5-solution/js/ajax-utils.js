((global) => {
    let ajaxUtils = {};

    let getRequestObject = () => {
        if(window.XMLHttpRequest) {
            return (new XMLHttpRequest());
        }else if (window.ActiveXObject) {
            return (new ActiveXObject("Microsoft.XMLHTTP"))
        }else {
            global.alert("Ajax is not supported!")
            return null;
        }
    }

    ajaxUtils.sendGetRequest =
        (requestUrl, responseHandler) => {
            let request = getRequestObject();
            request.onreadystatechange = () => handleResponse(request, responseHandler);
            request.open("GET", requestUrl, true);
            request.send(null); // Only used on POST requests
        };

    handleResponse = (request, responseHandler) => {
        if(request.readyState == 4 && request.status == 200) {
            responseHandler(request);
        }
    }

})(window);

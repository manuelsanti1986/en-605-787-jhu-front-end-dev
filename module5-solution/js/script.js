document.addEventListener("DOMContentLoaded",
    event => {
        document.querySelector("#btnSayHello")
            .addEventListener("click", () => {
                // $ajaxUtils.sendGetRequest("/jhu-front-end-dev/module5-solution/data/name.txt", (request) => {
                $ajaxUtils.sendGetRequest("/jhu-front-end-dev/module5-solution/data/name.txt", (request) => {
                    let name = request.responseText;
                    document.querySelector("#content")
                        .innerHTML = "<h2>Hello " + name + "!";
                });
            });
    });

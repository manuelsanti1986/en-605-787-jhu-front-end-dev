document.addEventListener("DOMContentLoaded",
    event => {
        document.querySelector("button")
            .addEventListener("click", () => {
                let self = this;
                let name = "";

                $ajaxUtils.sendGetRequest("/jhu-front-end-dev/module5-solution/data/name.txt", (request) => {
                    console.log(request.responseText)
                    self.name = request.responseText;
                });

                document.querySelector("#content")
                    .innerHTML = "<h2>Hello " + self.name + "</h2>"
            });
    });

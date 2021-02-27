document.addEventListener("DOMContentLoaded",
    event => {
        document.querySelector("#btnSayHello")
            .addEventListener("click", () => {
                $ajaxUtils.sendGetRequest("/jhu-front-end-dev/module5-solution/data/name.json",
                    (res) => {
                    let message = res.firstName + " " + res.lastName;
                    message += (res.isRagu) ? " is Ragu" : " is not Ragu";
                    message += " and has " + res.numberOfSeeds + " seeds"

                    document.querySelector("#content")
                        .innerHTML = "<h2>" + message + "</h2>";
                });
            });
    });

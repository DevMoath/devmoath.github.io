window.moment = require("moment");
window.$      = require("jquery");
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap.bundle.min");
require("@fortawesome/fontawesome-free/js/fontawesome.min");
require("@fortawesome/fontawesome-free/js/brands.min");
require("@fortawesome/fontawesome-free/js/solid.min");
require("./custom.css");

let isProjectsFetched = false;

const fetchProjects = () => {
    if (!isProjectsFetched) {
        let base = "https://api.github.com/";
        fetch(`${base}users/devmoath/repos?sort=updated`)
            .then(response => response.json())
            .then(json => {
                json = json.filter(item => !item.fork).slice(0, 9);

                let projects = document.querySelector("#projects");

                for (let i = 0; i < json.length; i++) {

                    let {name, html_url, description, created_at, updated_at, language} = json[i];

                    let html = `<div class="d-flex mx-auto py-0">
                                <div class="col-auto mx-0 px-0 flex-column d-flex">
                                    <h4 class="m-0">
                                        <span class="badge badge-pill py-2 bg-light border">${i + 1}</span>
                                    </h4>
                                    <div class="row h-100">
                                        <div class="col border-right">&nbsp;</div>
                                        <div class="col">&nbsp;</div>
                                    </div>
                                </div>
                                <div class="col-auto mx-0 px-0 flex-fill">
                                    <div class="col-md-8 card-size py-3 px-3 bg-white shadow-sm rounded mb-3 ml-1">
                                        <div class="mb-2 d-flex">
                                            <div class="ellipsis">
                                                <img src="image/repository.svg" alt="repository" width="30" height="30">
                                                <span class="d-none d-md-inline">
                                                    <a href="https://github.com/DevMoath">
                                                        DevMoath
                                                    </a> /
                                                </span>
                                                <a href="${html_url}">
                                                    ${name}
                                                </a>
                                            </div>
                                            <span class="ml-auto text-muted created_at">${moment(created_at).format("MMM D, YYYY")}</span>
                                        </div>
                                        <p class="mb-3 ml-1">${description}</p>
                                        <div class="ml-1 d-flex">
                                            <span class="text-truncate">
                                                <i class="fas fa-circle ${language} fa-fw mr-1"></i>${language}
                                            </span>
                                            <span class="text-truncate text-muted ml-auto">Updated ${moment(updated_at).fromNow()}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                    if (i == (json.length - 1)) {
                        projects.innerHTML += html.replace("border-right", "");
                    } else {
                        projects.innerHTML += html;
                    }
                }
                document.querySelector("#spinner").remove();
            })
            .catch(error => console.error(error));
        isProjectsFetched = true;
    }
};

window.onload = e => {

    $(function () {
        $("[data-toggle='popover']").popover({
            html: true,
            trigger: "manual",
            container: "body",
            template: "<div class='popover shadow' role='tooltip'><div class='arrow'></div><h3 class='popover-header'></h3><div class='popover-body'></div></div>"
        }).popover("show");
    });

    document.addEventListener("gesturestart", e => e.preventDefault());

    if (document.querySelector("#year")) {
        document.querySelector("#year").innerText = moment().format("YYYY");
    }

    if (document.querySelector("#full_time")) {
        document.querySelector("#full_time").innerText = moment("20191006", "YYYYMMDD").fromNow(true);
    }

    window.onscroll = e => {
        let windowHeight = document.body.scrollHeight - document.body.offsetHeight,
            windowScroll = window.scrollY;
        if ((windowHeight - 150) <= windowScroll) {
            fetchProjects();
        }
    };

    if (document.querySelector(".right-side")) {
        document.querySelector(".right-side").onscroll = e => {
            let height = e.target.scrollHeight - e.target.offsetHeight;
            let scroll = e.path[0].scrollTop;
            if ((height - 150) <= scroll) {
                fetchProjects();
            }
        };
    }
};

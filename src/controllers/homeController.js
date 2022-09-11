exports.index = function (request, response) {
    response.render("layouts/index.hbs");
};
exports.about = function (request, response) {
    response.send("О сайте");
};
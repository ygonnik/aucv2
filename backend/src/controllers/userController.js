exports.addUser = function (request, response){
    response.render("/frontend/public/pages/signin.html");
};
exports.getUsers = function(request, response){
    response.send("Список пользователей");
};
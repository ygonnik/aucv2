const users = [];

module.exports= class User{

    constructor(admin, first_name, last_name, email, password){
        this.admin = admin;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.hash = password;
    }
    save(){
        users.push(this);
    }
    static getAll(){
        return users;
    }
}
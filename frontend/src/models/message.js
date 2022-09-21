const messages = [];

module.exports= class Message{

    constructor(user1, user2, send_at, content){
        this.user1 = user1;
        this.user2 = user2;
        this.send_at = send_at;
        this.content = content;
    }
    save(){
        messages.push(this);
    }
    static getAll(){
        return messages;
    }
}
class User{
    private id:number;
    private name: string;
    private email: string;
    private isLogged: boolean;

    constructor(id:number,name:string,email:string,isLogged:boolean) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.isLogged = isLogged;

    }
    public printInfo(){
        console.log(this.email + "-"+ this.name);
    }
}
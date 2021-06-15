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
        console.log(this.email + "-"+ this.name+"-"+this.isLogged);
    }
    public setIsLogged(isLogged:boolean):void{
        this.isLogged=isLogged;
    }
    public setName(name:string):void{
        this.name = name;
    }
    public setEmail(email:string){
        this.email=email;
    }


    public getIsLogged():boolean{
       return this.isLogged;

    }
    public getName():string{
        return this.name;
    }
    public getEmail():string{
        return this.email;
    }

}
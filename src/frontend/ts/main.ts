class Main{

    public main(){
        console.log("se ejcuta el metodo main!");
        let listaUsr:Array<User> = new Array<User>();

        let usr1 = new  User(1,"cesar","cesar@gmail.com",true);
        let usr2 = new  User(2,"raul","raul@gmail.com",true);
        let usr3 = new  User(3,"alan","alan@gmail.com",false);
        listaUsr.push(usr1);
        listaUsr.push(usr2);
        listaUsr.push(usr3);

        for ( let obj in listaUsr) {
            listaUsr[obj].printInfo();
        }
    }

}
window.onload=function () {
    let miObjMain: Main= new Main();
    miObjMain.main();
};

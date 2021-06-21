class Main implements EventListenerObject{ // importante agregar implement
    public myFramework:MyFramework;
    public main(){
        console.log("se ejcuta el metodo main!");

        this.myFramework = new MyFramework();

    }
    public mostrarLista(){
        let listaUsr:Array<User> = new Array<User>();

        let usr1 = new  User(1,"cesar","cesar@gmail.com",true);
        let usr2 = new  User(2,"raul","raul@gmail.com",true);
        let usr3 = new  User(3,"alan","alan@gmail.com",false);

        usr1.setIsLogged(false);
        usr2.setEmail("George@gmail.com");

        listaUsr.push(usr1);
        listaUsr.push(usr2);
        listaUsr.push(usr3);

        for ( let obj in listaUsr) {
            listaUsr[obj].printInfo();
            }



    }
    public handleEvent(ev: Event) {
        alert("Se hizo click!");
        console.log(ev.target);

        let objetoClick: HTMLElement = <HTMLElement>ev.target;

        if (objetoClick.textContent == "Listar") {
            //this.mostrarLista();
            let xhr: XMLHttpRequest = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        console.log("Llego la respuesta!!!!");
                        console.log(xhr.responseText);
                        let parrafo = this.myFramework.getElementById("lista");
                        parrafo.innerHTML = xhr.responseText;
                    } else {
                        alert("error!!");
                    }
                }
            }
            xhr.open("GET","http://localhost:8000/devices",true)
            xhr.send();
            console.log("Ya hice el request!!");
        } else {
            alert("No hay nada que mostrar");
                }


        }

    }

window.addEventListener("load", ()=> {
    let miObjMain: Main = new Main();
    miObjMain.main();
    let boton:HTMLElement = miObjMain.myFramework.getElementById("boton");
    boton.textContent = "Listar";
    boton.addEventListener("click", miObjMain);

    let btnCerrar: HTMLElement = miObjMain.myFramework.getElementById("btnCerrar");
    btnCerrar.addEventListener("dblclick", miObjMain);

});


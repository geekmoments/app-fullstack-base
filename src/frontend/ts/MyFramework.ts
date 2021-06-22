class MyFramework {

    public getElementById(id:string):HTMLElement{

        return document.getElementById(id);
    }

    public requestPOST(url:string,response:HandlerPost,datos:any){

        let xml:XMLHttpRequest = new XMLHttpRequest();
        xml.onreadystatechange= () =>{
            if (xml.readyState==4){
                response.responsePost(xml.status,xml.responseText);
            }
        }
        xml.open("POST",url,true);
        xml.setRequestHeader("content-type","application/json");
        xml.send(JSON.stringify(datos));

    }

}
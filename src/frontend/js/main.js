function SayHello() {
    let current_value = document.getElementById("textarea_1");
    let new_value = "Hello world!" + "\n" + current_value.value;
    document.getElementById("textarea_1").innerHTML = new_value;
}

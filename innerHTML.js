var btn = document.getElementById("go-buttion)");

function buttonclicked(){
    console.log("Button clicked");
    btn.removeEventListener("click",buttonclicked);
    document.getElementById("text").innerHTML = "Dont do it";
}
btn.addEventListener("click",buttonclicked());
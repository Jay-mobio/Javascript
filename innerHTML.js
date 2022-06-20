var btn = document.getAnimations("go-button");

function buttonclicked(){
    console.log("Button clicked");

    document.getElementById("text").innerHTML = "Dont do it";
    console.log(document.getElementById("text").innerHTML);
}
btn.addEventListner("click",buttonclicked);
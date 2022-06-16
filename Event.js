var btn = document.getElementById("go-button");
console.log(btn)
btn.addEventListener("click", buttonclicked());

function buttonclicked() {
    console.log("Button clicked");
}
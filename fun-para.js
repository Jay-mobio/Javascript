function saysomething(phrase){
    console.log("you said :"+phrase)
}
function getphraselength(phrase,another)
{
    var l = phrase.length;
    if (typeof another !=="undifine"){
        l += another.length;
    }
    return l;
}
var p1 = "This is a phrase."
var p2 = "This is an another phrase"
var thislength = getphraselength(p1,p2)
console.log(thislength)
function getphrase(params){
    var l = 0;
    if(typeof params.phrase !=="undifined"){
        l = params.phrase.length;
    }
    if(typeof params.another !=="undifined"){
        l = params.another.length;
    }
    return l;
}
var p1 = "This is a slightly longer sentence."
var p2 = "This is a shorter sentence."
var computed = getphrase({another:p2});
console.log(computed)

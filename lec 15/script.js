/*
https://developer.mozilla.org/en-US/docs/Web/Events
https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
*/

/*var b1 = document.getElementsByTagName("button")[0];

b1.addEventListener("mouseenter",function () {
    console.log("mouse entered !")
})*/
/*document.getElementById("enter");*/
var button = document.getElementById("enter");
var input = document.getElementById("user-input");
var ul = document.getElementsByTagName("ul")[0];


button.addEventListener("click",function()
{
if(input.value.length>0) {
    var li = document.createElement("li");
    li.append(document.createTextNode(input.value));
    ul.append(li);
    input.value="";
}
});

input.addEventListener("keypress",function(local)
{
    console.log(local);
    if(input.value.length>0 && local.keyCode === 13) {

    var li = document.createElement("li");
    li.append(document.createTextNode(input.value));
    ul.append(li);
    input.value="";
}

})
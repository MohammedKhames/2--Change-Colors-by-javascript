
var devElem  = document.querySelector(".the-div");

var buttElem  = document.querySelector(".btn");



var colors=["red","green","blue"];

var i =0;

buttElem.onclick=function(){
    devElem.style.background=colors[i];
    i++;
    
    if(i==colors.length){
       i=0; 
    }
}







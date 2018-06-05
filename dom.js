console.dir(document);//directory structure of document
console.log(document);
console.log(document.lastModified);
console.log(document.title);
//document.write('HelloWorld');
//var output=document.getElementById('output');
//output.innerHTML='Welcome to home page';
//output.innerText='Hello <br> World';
var output = document.getElementById('output');
var val = document.getElementById('val');      
val.value = output.innerHTML;
//console.dir(output);
document.write('Hello Again');
console.error('error');//prints the error
console.warn('warn');//prints the warning message
console.log('%cHello World','color:green')//prints the hello world in green color
console.log('%cHello World','color:yellow;background:black')//prints the Hello World with yellow colr with black background
var myString='a'+' '+'b';
var myNumber=100;
var myBoolean=true;
var newString="Hello \"World's\"";
var newStr='Hello "World\'s" 4\\6';
//var question1="what is your ";
//var question2=prompt("Enter the type which you want to answer Name/age/sex?");
//var question=question1+question2+"?";
//var myName=prompt(question);
//alert("welcome to my website "+myName);

//adding two numbers using prompt
/*var a=prompt('first number');
var b=prompt('second number');
var total=Number(a)>Number(b)?'Nummber a is bigger':'Number b is bigger';
alert(total);*/


/*Arrays
var task= ['take out garbage','read a book','write javascript','got to work','sleep'];
var progress=['done','in progress','to do'];
var question1=prompt('which task 1-'+task.length+'?');
var question2=prompt('status 1= done 2= in progress 3= to do?');
var output= alert('today you will '+task[question1-1]+' status of task '+progress[question2-1]);
task[100]='new value';
Array.isArray(task)//checks whether the variable is an Array 
var arrays=['a','n','g','j','d','z','k'];
var start=arrays.length;
console.log(arrays.sort().reverse());
arrays[20]='horse';
arrays.fill('mouse',start,arrays.length-1);
//console.log(arrays.reverse());


var newHolder=['cat','dog','rabbit','bird'];
newHolder[10]='horse';
newHolder.reverse();
newHolder.fill('fish',1,8);
newHolder.pop();
newHolder.push('sheep');*/



//Array Sort
_______________

var items=[
    {name:'Edward',value:21},
    {name:'Sharpe',value:37},
    {name:'And',value:45},
    {name:'The',value:-12},
    {name:'Magnetic',value:13},
    {name:'Zeros',value:37}
];
items.sort(function(a,b){
	return a.value - b.value;
});

items.sort(function(a,b){
	var nameA=a.name.toUpperCase();
	var nameB=b.name.toUpperCase();
		if(nameA<nameB)	{
	}
});


//Creating, displaying, and sorting an array
var stringArray=['Blue','Humpback','Beluga'];
var numericStringArray=['80','9','700'];
var numberArray=[40,1,5,200];
var mixedNumericArray=['80','9','700',40,1,5,200];
function compareNumbers(a,b){
	return a-b;
} 
console.log('stringArray',stringArray.join());
console.log('sorted',stringArray.sort());

console.log('numberArray',numberArray.join());
console.log('sorted without a compare function',numberArray.sort());
console.log('sorted with compare numbers',numberArray.sort(compareNumbers));

console.log('numericStringArray',numericStringArray.join());
console.log('sorted without a compare function',numericStringArray.sort());
console.log('Sorted with compareNumbers',numericStringArray.sort(compareNumbers));

console.log('mixedNumericArray:',mixedNumericArray.join());
console.log('sorted without a compare function',mixedNumericArray.sort());
console.log('sorted with compareNumbers'),mixedNumericArray.sort(compareNumbers);


//Multi Dimensional Array
_____________________________
var arr=[['cat','dog','fish'],[4,2,5,6,6,4],'hello',50];
var ourfriends=[['Mike','John','Larry'],[1980,1990,2016]];
var q=prompt('which friend?');
console.log('you met '+ourfriends[0][q]+' in '+ourfriends[1][q]);
for(var x in arr){
	console.log(x);
	console.log(arr[x]);
}













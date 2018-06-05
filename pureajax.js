var party = [];
var el;
var output = document.getElementById('output');
window.onload=init;
var addGuest = document.querySelector('input[type="button"]');
    addGuest.addEventListener('click', function (e) {
        var g = document.getElementById('guestName');
        var n = document.getElementById('guestNum');
        message('?', g.value + ' +' + n.value, party.length, '');
        party.push({
            name: g.value
            , guest: Number(n.value)
            , status: false
        })
        g.value = "";
        n.value = 0;
    })
output.addEventListener('click', function (e) {
    el = e.target;
    var ds = el.dataset;
    el.classList.toggle('active');
    el.children[0].innerHTML = el.children[0].innerHTML == '?' ? '&#10004' : '?';
    party[ds.id].status = party[ds.id].status ? false : true;
    console.log(party);
    })
function init(){
	//loadJSON();
	loadJSON(function(response){
		console.log('inside the init function',JSON.parse(response));
		party=JSON.parse(response);
		buildList();
	},'https://api.myjson.com/bins/r2gha')
}
function buildList() {
    for (var x = 0; x < party.length; x++) {
        var person = party[x].name + ' +' + party[x].guest;
        if (party[x].status) {
            message('&#10004', person, x, 'active');
        }
        else {
            message('?', person, x, '');
        }
    }
}
function message(m, person, id, c) {
    output.innerHTML += '<div class="toggle ' + c + '" data-id="' + id + '" data-person="' + person + '" ><span>' + m + '</span> ' + person + ' </div>';
}
	function loadJSON(callback,url){
	console.log('callback',callback);
	var xHR=new XMLHttpRequest();
		xHR.onreadystatechange=function(){
			console.log('this.readyState',this.readyState);
			if(this.readyState==4 && this.status==200){
				callback(this.responseText);
			}else{
				return false;
			}
		}
	xHR.open('GET',url,true)//asynchronous is true synchronous is false
	xHR.send();
	console.log('XMLHttpRequest',xHR);
}
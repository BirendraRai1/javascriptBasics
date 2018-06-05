 var party = [];
 var el;
 var output=document.getElementById('output');
 window.onload=buildList;
 var addGuest=document.querySelector('input[ type="button"]');
 addGuest.addEventListener('click',function(e){
	var g=document.getElementById('guestName');
 	var n=document.getElementById('guestNum');
 	message('?',g.value + ' +' +n.value,party.length,'');
 	party.push({
 		name:g.value,
 		guest:Number(n.value),
 		status:false
 	})
 	localStorage.setItem('party',JSON.stringify(party));
 	console.log('localStorage',localStorage);
 	console.log('party',party);
 	g.value = "";
 	n.value = 0;
 })
 output.addEventListener('click',function(e){
	 el=e.target;
	 var ds=el.dataset;
	 console.log('ds in addEventListener',ds);
	 el.classList.toggle('active');
	 el.children[0].innerHTML=el.children[0].innerHTML=='?'?'&#10004':'?';
	 party[ds.id].status=party[ds.id].status?false:true;	
	 localStorage.setItem('party',JSON.stringify(party));
	 console.log('inside addEventListener',localStorage); 
 })
 function buildList() {
 	if(localStorage.getItem('party')){
 		party=JSON.parse(localStorage.getItem('party'))
 		console.log('!@#',localStorage);
 		console.log('came inside if of buildList');
 	}
 	else{
 		party=JSON.parse(data);
 		console.log('came inside else of buildList');
 	}
	for(var x=0;x<party.length;x++){
		 var person=party[x].name+'+'+party[x].guest;
		 if(party[x].status){
			 message('&#10004',person,x,'active');
		 }
		 else{
			 message('?',person,x,'');
		 }
	 }
 }

 function message(m,person,id,c){
 	output.innerHTML += '<div class="toggle ' + c + '" data-id="' + id + '" data-person="' + person + '" ><span>' + m + '</span> ' + person + ' </div>';	
 }
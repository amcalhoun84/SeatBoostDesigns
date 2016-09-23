// Copyright (c) 2016 SeatBoost LLC, All Rights Reserved.
// Designed by Andrew M. Calhoun for testing the client app within the
// bidwinengine. 
// Use of this source code is forbidden for uses other than the
// intention of the plug-in. 

var v = ["Abigail", "Adrian", "Alexandra", "Anthony", "Alison", "Andrew", "Amanda", "Brian", "Amy", "Anne", "Dan",  "Bella", "Dylan", "Claire", "Diana", "Emily", "Frank", "Fiona", "Gabriel", "Hannah", "Heather", "John", "Jane", "Jason", "Jake", "Jennifer", "Julia", "Kenny", "Karen", "Issac", "Lauren", "Luke", "Leah", "Lillian", "Larry", "Michael", "Oscar", "Lisa", "Madeleine", "Maria", "Mary", "Nick", "Robert", "Victor", "Steven", "Megan", "Melanie", "Richard", "Peter", "Michelle", "Tommy", "Trevor", "Neil", "Grace", "Penelope", "Tim", "Nathan", "Pippa", "Roger", "Rebecca", "Sam", "Sarah", "Sonny", "Zeke", "Stephanie", "Nathan", "Sienna", "Brittney", "Vanessa", "Wendy", "Yvonne", "Zoe", "Christian", "May", "Reginald", "Merry", "Pippen", "Samwise", "Frodo", "Pierre", "Tiffany", "Edward", "Ron", "Zachary", "Chelsea", "Krystal", "Sydney", "Vicki", "Jimmy", "James", "Jorge", "Juan", "Pablo", "George", "Ronald", "Sharon", "Tyler", "Taylor", "Zog", "Kal-el"]; // first names
var w = ["Allan","Anderson","Arnold", "Baker","Blake","Buckland","Burgess","Butler","Cameron","Campbell","Chapman","Clark","Davidson","Dowd","Duncan","Dyer","Edmunds","Ferguson","Fisher","Fraser","Gibson","Gill","Glover","Grant","Gray","Greene","Hamilton","Hardacre","Harris","Hart","Hemmings","Henderson","Hill","Hodges","Howard","Hudson","Hughes","Hunter","Jackson","James","Jones","Kelly","Kerr","King","Knox","Lambert","Langdon","Lawrence","Lee","Lewis","MacDonald","Mackay","MacLeod","Manning","Martin","McDonald","McGrath","Miller","Mitchell","Morgan","Morrison","Murray","Took", "Gamge", "Baggins","Parr","Peters","Piper","Poole","Powell","Pullman","Quinn","Randall","Rees","Reid","Roberts","Robertson","Ross","Russell","Rutherford","Sanderson","Scott","Sharp","Short","Simpson","Skinner","Slater","Smith","Springer","Sutherland","Taylor","Terry","Thomson","Turner","Underwood","Vance","Wallace","Walsh","Watson","Young"]; // last name

var i = Math.floor(Math.random() * 100);
var j = Math.floor(Math.random() * 100);

var x = v[i];
var y = w[j]; 

document.getElementById("fld-username").value = x;
document.getElementById("fld-firstName").value = x;
document.getElementById("fld-lastName").value = y;

setTimeout(function() { 
	document.getElementById("panel-authenticate").querySelector('.btn.btn-primary').click();
}, 2000);

setTimeout(function() { 
	document.getElementById("panel-payment").querySelector('.btn.btn-primary').click(); }, 10000);

document.getElementById('fld-airlineCode').value = "UA";
document.getElementById('fld-flightNumber').value = "BW220003";

setTimeout(function() { 
	document.getElementById("panel-find").querySelector('.btn.btn-primary').click(); }, 18000);

setTimeout(function() { 
	document.getElementById("panel-find").querySelector('.list-group-item').click(); }, 24000); 

document.getElementById("fld-displayName").value = x;

setTimeout(function() { 
	document.getElementById("panel-join").querySelector('.btn.btn-primary').click(); }, 30000);

setTimeout(function() { 
	document.getElementById("panel-bid").querySelector("#autobid").click(); }, 36000);





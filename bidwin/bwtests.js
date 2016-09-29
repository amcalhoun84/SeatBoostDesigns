// Copyright (c) 2016 SeatBoost LLC, All Rights Reserved.
// Designed by Andrew M. Calhoun for testing the client app within the
// bidwinengine. 
// Use of this source code is forbidden for uses other than the
// intention of the plug-in. 

String.prototype.startsWith = function(text) {
	return this.substr(0, text.length) == text;
};

String.prototype.contains = function(text) { 
	return this.indexOf(text) !== -1 	
};


function removeElementsByClass(className) { 
	var elements = document.getElementsByClassName(className);
	while(elements.length > 0) {
		elements[0].parentNode.removeChild(elements[0]);
	}
}

function removeDOMElement(id) { 
	if(document.getElementById(id)) { 
		document.getElementById(id).remove();
	}
}

var logging = false;
var checkType;
var blacklist =
        "googleleads.g.doubleclick.net\n" +
        "doubleclick.net\n" +
        "googleadservices.com\n" +
        "www.googleadservices.com\n" +
        "googlesyndication.com\n" +
        "adservices.google.com\n" +
        "an.yandex.ru\n" +
        "appliedsemantics.com";
var BWURL = "https://stage.bidwinengine.com/*";


chrome.browserAction.onClicked.addListener(function(tab) {

	alert("Please be sure to logged in to Bidwin Before Using!")

	var x = prompt("PLEASE INPUT NUMBER OF COMPETITORS");
	var tabId;

	for(var i = 0; i < x; i++)
	{
		var pause = Math.floor(Math.random() * (5000 * i)) + 1;
		setTimeout(function() {
		chrome.tabs.create({
			url: "https://stage.bidwinengine.com/admin/client"
			}, function(tab) { 
				//var y = prompt("Passanger Name"); 
				//alert(tab.id);
				
				chrome.tabs.executeScript(tab.id, { file: 'content.js' });
			});
		}, pause);		
	}
});
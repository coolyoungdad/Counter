// NEEDS :
// * stop on new page load
// * stop function in general
// * scroll dms // get most top/active frame/modal 
//  * possible multiple scroll speeds 

function scrollWindow() {
    $(window).scrollTop($(window).scrollTop()+1);
};

var refreshIntervalId = setInterval(scrollWindow, 25);

//if you've already triggered scroll, disable on newly loaded content
var markup = document.documentElement.innerHTML;
if(markup != document.documentElement.innerHTML) {
	console.log('url has changed');
	//reset back to default (off) state
	markup = document.documentElement.innerHTML;
	chrome.tabs.executeScript(tab.id, {
		file: 'turnOff.js'
	});
};	

//check for topmost window, scroll in tweet item page and dms
//create multiple scroll speeds 
//dms: scroll to (x unread messages, scroll from there)
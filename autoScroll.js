// NEEDS :
// * stop on new page load
// * stop function in general
// * scroll dms // get most top/active frame/modal 
//  * possible multiple scroll speeds 

function scrollWindow() {
    $(window).scrollTop($(window).scrollTop()+1);
};

setInterval(scrollWindow, 25);

//check for topmost window, scroll in tweet item page and dms
//create multiple scroll speeds 
//dms: scroll to (x unread messages, scroll from there)
var currScroll = $(window).scrollTop();

clearInterval(refreshIntervalId);

if(currScroll > $(window).scrollTop()) {
	clearInterval(refreshIntervalId);
}
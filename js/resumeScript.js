$(document).ready(function(){
	
	
	$(function(){
		$(".intro-text").typed({
        strings: ["Barath Naravula Loganathan","Software Engineer","Full stack Developer"],
		typeSpeed: 0,
		startDelay: 1000,
		loop: true
		});
	});
	
$('#project').bind('inview', function (event, visible) {
    if (visible == true) {
        console.log("project");
    } else {
        // element has gone out of viewport
    }
});

});
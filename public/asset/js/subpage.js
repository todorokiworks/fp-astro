$(function(){
	$('.g-acodion dl dt').click(function() {
		$(this).next('dd').slideToggle('fast');
		$(this).toggleClass('active');
	});
})
$(function(){
	$('.ba-outline__contents__ttl span').click(function() {
		$('#js-ba-accordion').slideToggle('fast');
		$('#js-ba-accordion').toggleClass('active');
	});
})

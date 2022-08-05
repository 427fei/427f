$(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
		$('.detail-subhead').addClass('flexedclass-2')
	} else {
		$('.detail-subhead').removeClass('flexedclass-2')
	}
})

$('#li1').click(function() {
	$(this).siblings().removeClass('detail-active')
	$(this).addClass('detail-active')
	$('html,body').animate({
		'scrollTop': $('.detail-subbody').offset().top
	}, 1500)
})
$('#li2').click(function() {
	$(this).siblings().removeClass('detail-active')
	$(this).addClass('detail-active')
	$('html,body').animate({
		'scrollTop': $('.detail-schedule').offset().top
	}, 1500)
})
$('#li3').click(function() {
	$(this).siblings().removeClass('detail-active')
	$(this).addClass('detail-active')
	$('html,body').animate({
		'scrollTop': $('.detail-teacher').offset().top
	}, 1500)
})


$(window).scroll(function() {
	// console.log($(window).scrollTop())
	if ($(window).scrollTop() >= 330 && $(window).scrollTop() < 3627) {
		console.log(111)
		$('#li1').addClass('detail-active');
		$('#li1').siblings().removeClass('detail-active');
	} 
	else if ($(window).scrollTop() >= 3812 && $(window).scrollTop() < 4000) {
		console.log(222)
		$('#li2').addClass('detail-active');
		$('#li2').siblings().removeClass('detail-active');
	} 
	else if ($(window).scrollTop() > 4000) {
		console.log(333)
		$('#li3').addClass('detail-active');
		$('#li3').siblings().removeClass('detail-active');
	} 
	
})

$('#pcbtn').click(function() {
	$('#phone').css('display', 'none')
	$('#phonebtn').removeClass('typeactive')
	$('#phonebtn').addClass('active')
	$('#pc').css('display', 'flex')
	$('#pcbtn').removeClass("active-2")
	$('#pcbtn').addClass('typeactive-2')
})

$('#phonebtn').click(function() {
	$('#pc').css('display', 'none')
	$('#pcbtn').addClass("active-2")
	$('#pcbtn').removeClass('typeactive-2')
	$('#phone').css('display', 'flex')
	$('#phonebtn').addClass('typeactive')
	$('#phonebtn').removeClass('active')
})

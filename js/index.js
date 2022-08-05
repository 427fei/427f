//轮播图
var box = document.getElementById('box');
var point = document.getElementById('point').children
var timg = document.getElementById('timg');

var num = 0;
var timer;
go();

function go() {
	timer = setInterval(function() {
		num++;
		if (num == 5) {
			num = 0
		};
		// 移动
		box.style.transform = 'translateX(' + -num * 800 + 'px)';

		for (t = 0; t < point.length; t++) {
			point[t].removeAttribute('class')
		}
		// 圆点变色
		point[num].setAttribute('class', 'thispoi')
	}, 2000)
}

// 鼠标移入移出
timg.onmouseenter = function() {
	clearInterval(timer)
}
timg.onmouseleave = function() {
	go()
}

//点击圆点
for (var i = 0; i < point.length; i++) {
	//动态增加属性
	point[i].setAttribute('index', i)
	point[i].onclick = function() {
		//获取属性
		num = this.getAttribute('index')
		for (t = 0; t < point.length; t++) {
			point[t].removeAttribute('class')
		}
		box.style.transform = 'translateX(' + -num * 800 + 'px)';
		this.setAttribute('class', 'thispoi')
	}
}

var aboutvideo = document.getElementById('aboutvideo');
var num = 0;

function playclick() {
	if (aboutvideo.paused) {
		aboutvideo.play();
	} else {
		aboutvideo.pause();
	}
}

$('.totop').click(function(){
	$('html,body').animate({'scrollTop':"0px"},1500)
})

$('#login').click(function() {
	$('.mask').show()
	$('.loginmain').show()
})

$('#register').click(function() {
	$('.mask').show()
	$('.register').show()
})

$('#reg-1').click(function() {
	$('.register').show()
	$('.loginmain').hide()
})

$('#reg-2').click(function() {
	$('.register').show()
	$('.qrcodelogin').hide()
})

$('#reg-3').click(function() {
	$('.register').show()
	$('.forgetpasswd').hide()
})

$('.mask').click(function() {
	$('.mask').hide()
	$('.loginmain').hide()
	$('.qrcodelogin').hide()
	$('.forgetpasswd').hide()
	$('.codelogin').hide()
	$('.register').hide()
})

$('.loginqrcode').click(function() {
	$('.loginmain').hide()
	$('.qrcodelogin').show()
})

$('.phonelogin').click(function() {
	$('.qrcodelogin').hide()
	$('.loginmain').show()
})

$('#codelogin-2').click(function() {
	$('.qrcodelogin').hide()
	$('.codelogin').show()
})

$('.forgetpass').click(function() {
	$('.loginmain').hide()
	$('.forgetpasswd').show()
})


$('#codelogin').click(function() {
	$('.loginmain').hide()
	$('.codelogin').show()
})


$('#userlogin').click(function(){
	$('.codelogin').hide()
	$('.loginmain').show()
})

$('#userlogin-2').click(function(){
	$('.register').hide()
	$('.loginmain').show()
})



var agreecheck = 0;
$('.agreecheck').click(function() {
	if (agreecheck == 0) {
		agreecheck++;
		$(this).addClass('checked')
	} else {
		agreecheck = 0;
		$(this).removeClass('checked')
	}
})


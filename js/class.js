var classlist = [
	{
	title: '公开课：言语中的代词',
	subtitle: '2017.07.10-2022.09.01 · 今晚8点，和小粉笔一起解锁【精品体验小福袋】！',
	hightlight: '内含优惠',
	src1: '../img/c1.jpg',
	name1: '聂佳',
	src2: '../img/c2.jpg',
	name2: '董盈辰',
	src3: '../img/c3.jpg',
	name3: '袁东',
	price:'￥999998',
	buyperson:'13754231人购买'
	}
]

function classlistgo() {
	var num = -1;
	
	for (var i = 0; i < 18; i++) {
		num++;
		if (num==1) {
			num=0
		}
		var tag =  $('<li></li>');
		tag.html(`
				<div class="classlist-background">
					<div class="classlist-conbody">
							<div class="classlist-title">
						<span>${classlist[num].title}</span>
						<p>${classlist[num].subtitle}</p>
					</div>
					<div class="classlist-hightlight"><span>${classlist[num].hightlight}</span></div>
					<div class="classlist-teacher-price">
						<div class="classlist-teachergroup">
							<div class="classlist-teacherimg">
								<img src="${classlist[num].src1}" alt="">
								<p>${classlist[num].name1}</p>
								</div>
							<div class="classlist-teacherimg">
								<img src="${classlist[num].src2}" alt="">
								<p>${classlist[num].name2}</p>
								</div>
							<div class="classlist-teacherimg">
								<img src="${classlist[num].src3}" alt="">
								<p>${classlist[num].name3}</p>
								</div>
						</div>
						<div class="classlist-price"><span>${classlist[num].price}</span></div>
					</div>
					<div class="classlist-personbuy"><span>${classlist[num].buyperson}</span></div>
					</div>
				</div>
		`)
		$('#classlist').append(tag)
}
}
classlistgo()

$('#classlist li').click(function(){
	 $(location).attr("href","details.html")
})

$('#classtypelist li').click(function(){
	$(this).addClass('classtypeactive')
	$(this).siblings().removeClass('classtypeactive')
})

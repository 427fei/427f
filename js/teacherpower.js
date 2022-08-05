var teacherlist = [{
		src: '../img/t1.jpg',
		tname: '张小龙',
		tbrief: '公考申论、面试主讲',
		tdesc: '粉笔公考申论、面试优质讲师。13年公务员考试培训经验，业务精湛，口碑载道，行业名师。经验丰富、知识...'
	},
	{
		src: '../img/t2.jpg',
		tname: '李梦圆',
		tbrief: '公考申论、面试主讲',
		tdesc: '粉笔公考申论、面试优质讲师。10年公务员考试培训经验，有丰富的基层政府挂职经历，多次参加公务员、人...'
	},
	{
		src: '../img/t3.jpg',
		tname: '赵晓曦',
		tbrief: '公考言语理解与表达主讲',
		tdesc: '粉笔公考言语理解与表达优质讲师。文科类博士。9年公考培训经验，累计授课超过3000小时，服务学员人...'
	},
	{
		src: '../img/t4.jpg',
		tname: '董盈辰',
		tbrief: '公考申论主讲',
		tdesc: '粉笔公考申论优质讲师。8年公务员考试授课经验，思路清晰，逻辑严谨，授课风格幽默，通俗易懂且不失专业...'
	}
]

function teacherlistgo() {
	var num = -1;
	
	for (var i = 0; i < 12; i++) {
		num++;
		if (num==4) {
			num=0
		}
		var tag = $('<li></li>');
		tag.html(`
		<div class="teacherlistimg"><img src="${teacherlist[num].src}" alt=""></div>
			<div class="teacherlistmain">
			<div class="teacherline"></div>
			<div class="teachername">${teacherlist[num].tname}</div>
			</div>
			<div class="teacherbrief">${teacherlist[num].tbrief}</div>
			<div class="teacherlistdesc">${teacherlist[num].tdesc}</div>`)
		$('#teacherlist').append(tag)
	}
}
teacherlistgo()

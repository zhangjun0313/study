//var arrImg = ['images/0.png','images/1.png','images/2.png','images/3.png','images/4.png','images/5.png','images/6.png','images/7.png','images/8.png','images/9.png']
//var list1 = $('.list1')[0]
//var l = $('.list1 .l1')
//var n = 0
//var html = '';
//for( var i = 0; i < 8; i++ ){
//	html += '<li><img src="images/0.png"/></li>';
//}
//
//list1.innerHTML = html;
//
//var img = list1.getElementsByTagName("img");
//
//// 12:11:00
//funcDate();
//function funcDate(){
//	var d = new Date();
//	var time = addZero(d.getHours())+":"+addZero(d.getMinutes())+":"+addZero(d.getSeconds());
//
//	for( var i = 0; i < time.length; i++ ){
//		if(time.charAt(i) === ':'){
//			img[i].src = 'images/ff.png';
//			// 匿名函数自执行
//			(function(n){
//				setTimeout(function (){
//					img[n].src = 'images/gg.png'	
//				},500)
//			})(i)
//		}else{
//			img[i].src = './images/'+time.charAt(i)+'.png'
//		}
//	}
//
//	function fn(i){
//		setTimeout(function (){
//			img[i].src = 'images/gg.png'	
//		},500);
//	}
//	
//}
//
//setInterval(funcDate,1000)

//function aaa(){
//	n++
//	if(n>l.length-1){
//      n = 0;
//  }
//	mTween( l[7] , 'top' , -80 , 500 , 'linear' , function(){
//		l[7].style.top = 0;
//	} )
//}
//setInterval(aaa,1000)
var imgs = $('.cc img')
var c = $('.list1 .c')
var old = get0()
for( var i = 0 ; i < c.length ; i++ ){
	c[i].getElementsByTagName('img')[0].src = 'images/'+old[i]+'.png'
}
setInterval(function(){
	for( var i = 0 ; i < imgs.length ; i++ ){
		imgs[i].src = 'images/gg.png'
	}
	setTimeout(function(){
		for( var i = 0 ; i < imgs.length ; i++ ){
			imgs[i].src = 'images/hh.png'
		}
	},500)
	auto()
},1000)
function auto(){
	var time = get0()
	for( var i = 0 ; i < time.length ; i++ ){
		if( old[i] !== time[i] ){
			func(i,time)
		}
	}
	old = time
	function func( n , time ){
		var img = $('.c img')
		var k = $('.q img')
		var q = $('.list2 .q')
		k[n].src = 'images/'+time[n]+'.png'
		mTween(q[n],'top',-80,500,'linear',function(){
			img[n].src = 'images/'+time[n]+'.png'
			q[n].style.top = '0px'
		})
	}
}
function get0(){
	var d = new Date()
	var h = d.getHours()
	var m = d.getMinutes()
	var s = d.getSeconds()
	var time = addZero(h)+addZero(m)+addZero(s);
	return time
}

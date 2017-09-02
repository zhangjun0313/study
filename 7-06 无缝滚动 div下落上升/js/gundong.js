var next = $(".next")[0]
var list = $('.list')[0]
var lis = $('.list li')
var prev = $('.prev')[0]
var tagClient = $('.tagClient')[0]
var span = $('.nav span')
var n = 0
function func(){
	n++
	var target = -530 * n
	mTween( list , 'left' , target , 500 , 'linear' , function(){
		if( n == lis.length - 1 ){
			list.style.left = '0px'
			n = 0
		}
		for( var i = 0 ; i < span.length ; i++ ){
			span[i].style.background = ''
		}
		span[n].style.background = 'blue'
	} )
}
var t1 = setInterval(func,1000)
next.onclick = function(){
	if( list.timer ){
		return
	}
	func()
}
prev.onclick = function(){
	n--;
	if( n < 0 ){ 
		list.style.left = -530 * (lis.length-1) + 'px';
		n = lis.length - 2;
	}
	var target = -530 * n;
	mTween(list,"left",target,500)
	for( var i = 0 ; i < span.length ; i++ ){
		span[i].style.background = ''
	}
	span[n].style.background = 'blue'
}
for( var i = 0 ; i < span.length ; i++ ){
	span[i].index = i	
	span[i].onmouseover = function(){
		clearInterval(t1);
		for( var j = 0 ; j < span.length ; j++ ){
			span[j].style.background = ''
		}
		this.style.background = 'red'
		var target = -530*this.index
		mTween(list,"left",target,500)
		n = this.index
	}
	span[i].onmouseout = function(){
		t1 = setInterval(func,1000)
		this.style.background = 'blue'
	}
}
tagClient.onmouseover = function(){
	clearInterval(t1)
}
tagClient.onmouseout = function(){
	t1 = setInterval(func,1000)
}
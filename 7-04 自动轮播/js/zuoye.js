var img = document.getElementsByClassName('img');
var qiehuan = document.getElementsByClassName('qiehuan');
var left = document.getElementsByClassName('left');
var right = document.getElementsByClassName('right');
var n = 0
right[0].onclick = function(){
	n++
	if(n > img.length-1){
		n = 0
	}
	for( var i = 0 ; i < img.length ; i++){
		img[i].style.opacity = 0
		qiehuan[i].style.background = '#c9c9c9'
	}
	img[n].style.opacity = 1
	qiehuan[n].style.background = '#6cd2eb'
}
left[0].onclick = function(){
	n--
	if(n < 0){
		n = img.length-1
	}
	for( var i = 0 ; i < img.length ; i++){
		img[i].style.opacity = 0
		qiehuan[i].style.background = '#c9c9c9'
	}
	img[n].style.opacity = 1
	qiehuan[n].style.background = '#6cd2eb'
}
for( var i = 0 ; i < qiehuan.length ; i++){
	qiehuan[i].index = i
	qiehuan[i].onclick = function(){
		for( var j = 0 ; j < qiehuan.length ; j++){
			img[j].style.opacity = 0
			qiehuan[j].style.background = '#c9c9c9'
		}
		this.style.background = '#6cd2eb'
		img[this.index].style.opacity = 1
		n = this.index
	}
}
var t1 = null
func()
function func(){
	t1 = setInterval(function (){
		n++
		for( var i = 0; i < img.length; i++ ){
			img[i].style.opacity = 0;
			qiehuan[i].style.background = '#c9c9c9';
		}
		if( n > img.length-1 ){
			n = 0
		}
		img[n].style.opacity = 1
		qiehuan[n].style.background = '#6cd2eb'
	},1000)	
}
right[0].onmouseover = function(){
	clearInterval(t1)
}
right[0].onmouseout = function(){
	func()
}
left[0].onmouseover = function(){
	clearInterval(t1)
}
left[0].onmouseout = function(){
	func()
}
for( var k = 0 ; k < qiehuan.length ; k++ ){
	qiehuan[k].onmouseover = function(){
		clearInterval(t1)
	}
	qiehuan[k].onmouseout = function(){
		func()
	}
}
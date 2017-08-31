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


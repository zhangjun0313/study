var box = document.getElementById('box')
for( var i = 0 ; i < 418 ; i++ ){
	box.innerHTML += '<div style="left:'+i%19*100+'px;top:'+Math.floor(i/19)*50+'px;"></div>'
}
var dd = box.querySelectorAll('div')
for(var j = 0 ; j < i ; j++){
	dd[j].style.backgroundPosition = '-'+j%19*100+'px -'+Math.floor(j/19)*50+'px'
	dd[j].onmouseover = function(){
		this.style.opacity = '1'
	}
}


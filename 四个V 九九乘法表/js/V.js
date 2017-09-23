var btn = document.getElementById('btn')
var list = document.getElementById('list')
var n = 0
btn.onmouseover = function(){
	btn.style.background = '#5ab1fd'
	btn.style.color = '#fff'
}
btn.onmouseout = function(){
	btn.style.background = '#fff'
	btn.style.color = '#619dd7'
}
btn.onclick = function(){
	btn.value = '变换'
	n++
	if( n == 1){
		list.innerHTML = ''
		list.style.width = '250px'
		list.style.height = '150px'
		list.style.top = '170px'
		list.style.left = '20px'
		for( var j = 0; j < 5; j++ ){
			if( j > 2 ){
				list.innerHTML += '<li class="listLi" style="left:'+j*50+'px;top:'+(j-2)*50+'px;">'+(j+1)+'</li>'
			}else{
				list.innerHTML += '<li class="listLi" style="left:'+j*50+'px;top:'+(100-j*50)+'px;">'+(j+1)+'</li>'
			}
		}
	}else if( n == 2){
		list.innerHTML = ''
		list.style.width = '150px'
		list.style.height = '250px'
		list.style.top = '70px'
		list.style.left = '120px'
		for( var j = 0; j < 5; j++ ){
			if( j > 2 ){
				list.innerHTML += '<li class="listLi" style="left:'+(j-2)*50+'px;top:'+j*50+'px;">'+(j+1)+'</li>'
			}else{
				list.innerHTML += '<li class="listLi" style="left:'+(100-j*50)+'px;top:'+j*50+'px;">'+(j+1)+'</li>'
			}
		}
	}else if( n == 3){
		list.innerHTML = ''
		list.style.width = '250px'
		list.style.height = '150px'
		list.style.top = '70px'
		list.style.left = '20px'
		for( var j = 0; j < 5; j++ ){
			if( j > 2 ){
				list.innerHTML += '<li class="listLi" style="left:'+j*50+'px;top:'+(4-j)*50+'px;">'+(j+1)+'</li>'
			}else{
				list.innerHTML += '<li class="listLi" style="left:'+j*50+'px;top:'+j*50+'px;">'+(j+1)+'</li>'
			}
		}
	}else if( n == 4){
		list.innerHTML = ''
		list.style.width = '150px'
		list.style.height = '250px'
		list.style.top = '70px'
		list.style.left = '20px'
		for( var j = 0; j < 5; j++ ){
			if( j > 2 ){
				list.innerHTML += '<li class="listLi" style="left:'+(4-j)*50+'px;top:'+j*50+'px;">'+(j+1)+'</li>'
			}else{
				list.innerHTML += '<li class="listLi" style="left:'+j*50+'px;top:'+j*50+'px;">'+(j+1)+'</li>'
			}
		}
		n = 0
	}
}



var l = document.querySelectorAll('li')
var gongji = document.getElementsByClassName('gongji')[0]
var suliang = document.getElementsByClassName('suliang')
var jiage = document.getElementsByClassName('jiage')
var gongjiage = document.getElementsByClassName('gongjiage')[0]
var zuigao = document.getElementsByClassName('zuigao')[0]
var danjias = document.getElementsByClassName('danjia')
for( var i = 0 ; i < l.length ; i++ ){
	func(l[i])
}
function func( a ){
	var n = 0
	var jia = a.getElementsByClassName('jia')[0]
	var suliangs = a.getElementsByClassName('suliang')[0]
	var jiages = a.getElementsByClassName('jiage')[0]
	var jian = a.getElementsByClassName('jian')[0]
	var danjia = a.getElementsByClassName('danjia')[0]
	jia.onclick = function(){
		var m = 0
		n++
		suliangs.innerHTML = n
		jiages.innerHTML = n*danjia.innerHTML
		gongji.innerHTML = parseFloat(suliang[0].innerHTML) + parseFloat(suliang[1].innerHTML) + parseFloat(suliang[2].innerHTML) + parseFloat(suliang[3].innerHTML) + parseFloat(suliang[4].innerHTML)
		gongjiage.innerHTML = parseFloat(jiage[0].innerHTML) + parseFloat(jiage[1].innerHTML) + parseFloat(jiage[2].innerHTML) + parseFloat(jiage[3].innerHTML) + parseFloat(jiage[4].innerHTML)
		for( var j = 0 ; j < danjias.length ; j++ ){
			if( suliang[j].innerHTML !=0 ){
				if( m < parseFloat(danjias[j].innerHTML)){
					m = parseFloat(danjias[j].innerHTML) 
				}
			}
		}
		zuigao.innerHTML = m
	}
	jian.onclick = function(){
		var w = 0
		n--
		if( n < 0 ){
			n = 0
			jiages.innerHTML = 0
		}
			suliangs.innerHTML = n
			jiages.innerHTML = n*danjia.innerHTML
			gongji.innerHTML = parseFloat(suliang[0].innerHTML) + parseFloat(suliang[1].innerHTML) + parseFloat(suliang[2].innerHTML) + parseFloat(suliang[3].innerHTML) + parseFloat(suliang[4].innerHTML)
			gongjiage.innerHTML = parseFloat(jiage[0].innerHTML) + parseFloat(jiage[1].innerHTML) + parseFloat(jiage[2].innerHTML) + parseFloat(jiage[3].innerHTML) + parseFloat(jiage[4].innerHTML)
			for( var k = 0 ; k < danjias.length ; k++ ){
				if( suliang[k].innerHTML !=0 ){
					if( w < parseFloat(danjias[k].innerHTML)){
						w = parseFloat(danjias[k].innerHTML) 
					}
				}
			}
		zuigao.innerHTML = w
	}
}

var btn = $('.btn')[0]
var xianshi = $('.xianshi')[0]
var left = $('.left')[0]
var right = $('.right')[0]
var n = 0
var t = null
btn.onclick = function(){
	if( t ){
		return
	}
	if( left.value == '' ){
		alert('内容不能为空')
		return
	}
	left.disabled = true
	
	var m = left.value.length
	n = 0
	t = setInterval(function(){
		n++
		right.innerHTML += left.value.charAt(0)
		left.value = left.value.slice(1)
		if( left.value == '' ){
			clearInterval(t)
			t = null
			left.disabled = false
		}
		xianshi.innerHTML = n + '/' + m
	},10)
}
left.onclick = function(){
	xianshi.innerHTML = 0 + '/' + 0
	right.innerHTML = ''
}

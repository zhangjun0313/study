var right = $('.right')[0]
var tip = $('.tip')[0]
var none = $('.none')
var chazhao = $('.search')[0]
var tihuan = $('.change')[0]
var content1 = $('.content1')[0]
var content2 = $('.content2')[0]
var btn = $('.sure')[0]
var txt1 = $('.changeInput1')[0]
var txt2 = $('.changeInput2')[0]
var txt = $('.searchInput')[0]
var test = $('.txt')[0]
var arr = null
var a = true
var s = null
var d = test.innerHTML
right.onclick = function(){
	none[0].style.display = 'block'
	none[1].style.display = 'block'
	tip.style.display = 'block'
}
none[0].onclick = function(){
	content1.style.display = 'block'
	content2.style.display = 'none'
	a = true
}
chazhao.onclick = function(){
	content1.style.display = 'block'
	content2.style.display = 'none'
	a = true
}
none[1].onclick = function(){
	content1.style.display = 'none'
	content2.style.display = 'block'
	a = false
}
tihuan.onclick = function(){
	content1.style.display = 'none'
	content2.style.display = 'block'
	a = false
}
txt.onclick = function(){
	txt.value = ''
	test.innerHTML = d
}
btn.onclick = function(){
	if( a ){
		arr = d.split(txt.value)
		test.innerHTML = arr.join('<span style="color:red;">'+txt.value+'</span>')
		//console.log(arr)
	}else{
		arr = d.split(txt1.value)
		test.innerHTML = arr.join('<span style="color:red;">'+txt2.value+'</span>')
		s = arr.join(txt2.value)
		d = s
	}
}
txt1.onclick = function(){
	txt1.value = ''
	txt2.value = ''
	test.innerHTML = d
}

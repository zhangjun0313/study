var hong = document.getElementById('hong')
var hong = document.getElementById('hong')
var div1 = document.getElementById('div1')
hong.onclick = function(){
	div1.style.background = 'red';
}
hong.onmouseover = function(){
	hong.style.border = '1px solid #000'
}
hong.onmouseout = function(){
	hong.style.border = '0'
}
var huang = document.getElementById('huang')
huang.onclick = function(){
	div1.style.background = 'yellow';
}
huang.onmouseover = function(){
	huang.style.border = '1px solid #000'
}
huang.onmouseout = function(){
	huang.style.border = '0'
}
var lan = document.getElementById('lan')
lan.onclick = function(){
	div1.style.background = 'blue';
}
lan.onmouseover = function(){
	lan.style.border = '1px solid #000'
}
lan.onmouseout = function(){
	lan.style.border = '0'
}
var kuan1 = document.getElementById('kuan1')
kuan1.onclick = function(){
	div1.style.width = '200px';
}
var kuan2 = document.getElementById('kuan2')
kuan2.onclick = function(){
	div1.style.width = '300px';
}
var kuan3 = document.getElementById('kuan3')
kuan3.onclick = function(){
	div1.style.width = '400px';
}
var gao1 = document.getElementById('gao1')
gao1.onclick = function(){
	div1.style.height = '200px';
}
var gao2 = document.getElementById('gao2')
gao2.onclick = function(){
	div1.style.height = '300px';
}
var gao3 = document.getElementById('gao3')
gao3.onclick = function(){
	div1.style.height = '400px';
}
var huifu = document.getElementById('huifu')
huifu.onclick = function(){
	div1.style.height = '100px';
	div1.style.width = '100px';
	div1.style.background = '#fff';
	box1.style.display = 'none';
	box.style.background = '#efefef';
}
var queding = document.getElementById('queding')
queding.onclick = function(){
	box1.style.display = 'none';
	box.style.background = '#efefef';	
}
var shezhi = document.getElementById('shezhi')
shezhi.onclick = function(){
	box1.style.display = 'block';
	box.style.background = '#808080';
}
var box = document.getElementById('box')


















//var s2 = document.getElementsByClassName('s2')[0]
//var tops = document.getElementsByClassName('top')[0]
//var top1 = document.getElementsByClassName('top1')[0]
//var txt = document.getElementsByClassName('txt')[0]
//var btn = document.getElementsByClassName('btn')
//var s1 = document.getElementsByClassName('s1')[0]
//console.log(top1)
//s2.onclick = function(){
//	tops.style.display = 'none'
//	top1.style.display = 'block'
//	txt.value = s1.innerHTML
//	txt.select()
//}
//btn[0].onclick = function(){
//	tops.style.display = 'block'
//	top1.style.display = 'none'
//	s1.innerHTML = txt.value
//}
//btn[1].onclick = function(){
//	tops.style.display = 'block'
//	top1.style.display = 'none'
//}
var box1 = document.getElementsByClassName('box_1')[0]//获取父元素
var box2 = document.getElementsByClassName('box_2')[0]
func(box1)//函数调用
func(box2)
function func(a){//声明一个函数    
	var s2 = a.getElementsByClassName('s2')[0]
	var tops = a.getElementsByClassName('top')[0]
	var top1 = a.getElementsByClassName('top1')[0]
	var txt = a.getElementsByClassName('txt')[0]
	var btn = a.getElementsByClassName('btn')
	var s1 = a.getElementsByClassName('s1')[0]
	s2.onclick = function(){//点击时  让显示的块消失，隐藏的块出现并把span里的值给了txt。value里
		tops.style.display = 'none'
		top1.style.display = 'block'
		txt.value = s1.innerHTML 
		txt.select()
	}
	btn[0].onclick = function(){//点击保存时  把txt里的value值给span里
		tops.style.display = 'block'
		top1.style.display = 'none'
		s1.innerHTML = txt.value
	}
	btn[1].onclick = function(){
		tops.style.display = 'block'
		top1.style.display = 'none'
	}
}

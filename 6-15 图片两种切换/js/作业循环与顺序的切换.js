var btn1 = document.getElementById('btn1');//循环键
var btn2 = document.getElementById('btn2');//顺序键
var leftsj = document.getElementById('leftsj');//左箭头
var rightsj = document.getElementById('rightsj');//右箭头
var img = document.getElementById('img');//img图片
var p1 = document.getElementById('p1');//描述切换程序





var arr1 = ['images/005.png','images/006.png','images/007.png','images/008.png'];//为了让图片切换
var arr2 = ['文字描述一','文字描述二','文字描述三','文字描述四'];//为了让描述切换
var n = 0;
img.src = arr1[n]
tm.value = arr2[n]
fanye.value = n+1+'/'+arr1.length
	var a = 2







//当点击循环键的时候   背景   字颜色  改变  并取消另一个键的样式 并且为a赋值
btn1.onclick = function(){
	btn1.style.background = '#fff'
	btn1.style.color = '#000'
	btn2.style.background = '#000'
	btn2.style.color = '#fff'
	p1.innerHTML = '图片可以从最后一张跳转到第一张循环切换'
	a = 2
}
//当点击顺序键的时候   背景   字颜色  改变  并取消另一个键的样式 并且为a赋值
btn2.onclick = function(){
	btn2.style.background = '#fff'
	btn2.style.color = '#000'
	btn1.style.background = '#000'
	btn1.style.color = '#fff'
	p1.innerHTML = '图片只能到最后一张或只能到第一张切换'
	a = 0
}
//当点击右键时会出现的两种情况，是真的就无限循环，是假的就有顺序
rightsj.onclick = function(){
	if(a>1){
		n++
		if( n > arr1.length-1 ){
			n = 0
		}
		img.src = arr1[n]
		tm.value = arr2[n]
		fanye.value = n+1+'/'+arr1.length
	}else{
		n++
		if( n > arr1.length-1 ){
			n = arr1.length-1
			alert('没有下一张图片了')
		}else{
			img.src = arr1[n]
		}
			tm.value = arr2[n]
			fanye.value = n+1+'/'+arr1.length
	}
}
//当点击左键时会出现的两种情况，是真的就无限循环，是假的就有顺序
leftsj.onclick = function(){
	if(a>1){
		n--
		if( n < 0 ){
			n = arr1.length-1
		}
		img.src = arr1[n]
		tm.value = arr2[n]
		fanye.value = n+1+'/'+arr1.length
	}else{
		n--
		if( n < 0 ){
			n = 0
			alert('没有上一张图片了')
		}else{
			img.src = arr1[n]
		}
			tm.value = arr2[n]
			fanye.value = n+1+'/'+arr1.length
	}
}






















































//if(a){
//	rightsj.onclick = function(){
//		n++
//		if( n > arr1.length-1 ){
//			n = 0
//		}
//		img.src = arr1[n]
//		if( n > arr2.length-1 ){
//			n = 0
//		}
//		tm.value = arr2[n]
//		if( n > arr3.length-1){
//			n = 0
//		}
//		fanye.value = arr3[n]
//	}
//	leftsj.onclick = function(){
//		n--
//		if( n < 0 ){
//			n = arr1.length-1
//		}
//		img.src = arr1[n]
//		if( n < 0 ){
//			n = arr2.length-1
//		}
//		tm.value = arr2[n]
//		if( n < 0){
//			n = arr3.length-1
//		}
//		fanye.value = arr3[n]
//	}
//}else{
//	rightsj.onclick = function(){
//		n++
//		if( n > arr1.length-1 ){
//			n = arr1.length-1
//			alert('没有下一张图片了')
//		}else{
//			img.src = arr1[n]
//		}
//		if( n > arr2.length-1 ){
//			n = arr1.length-1
//		}else{
//			tm.value = arr2[n]
//		}
//		if( n > arr3.length-1){
//			n = arr1.length-1
//		}else{
//			fanye.value = arr3[n]
//		}
//	}
//	leftsj.onclick = function(){
//		n--
//		if( n < 0 ){
//			n = 0
//			alert('没有上一张图片了')
//		}else{
//			img.src = arr1[n]
//		}
//		if( n < 0 ){
//			n = 0
//		}else{
//			tm.value = arr2[n]
//		}
//		if( n < 0){
//			n = 0
//		}else{
//			fanye.value = arr3[n]
//		}
//	}
//
//}

























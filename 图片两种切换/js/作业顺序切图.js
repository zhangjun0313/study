var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var leftsj = document.getElementById('leftsj');
var rightsj = document.getElementById('rightsj');
var img = document.getElementById('img');






var arr1 = ['images/005.png','images/006.png','images/007.png','images/008.png'];
var arr2 = ['文字描述一','文字描述二','文字描述三','文字描述四'];
var arr3 = ['1/4','2/4','3/4','4/4']
var n = 0;
img.src = arr1[n]
tm.value = arr2[n]
fanye.value = arr3[n]




rightsj.onclick = function(){
	n++
	if( n > arr1.length-1 ){
		n = arr1.length-1
		alert('没有下一张图片了')
	}else{
		img.src = arr1[n]
	}
	if( n > arr2.length-1 ){
		n = arr1.length-1
	}else{
		tm.value = arr2[n]
	}
	if( n > arr3.length-1){
		n = arr1.length-1
	}else{
		fanye.value = arr3[n]
	}
}
leftsj.onclick = function(){
	n--
	if( n < 0 ){
		n = 0
		alert('没有上一张图片了')
	}else{
		img.src = arr1[n]
	}
	
	if( n < 0 ){
		n = 0
	}else{
		tm.value = arr2[n]
	}
	
	if( n < 0){
		n = 0
	}else{
		fanye.value = arr3[n]
	}
	
}
















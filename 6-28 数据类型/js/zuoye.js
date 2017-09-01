 var arr = ['100px', 'abc' - 6, [], -98765, 34, -2, 0, '300', , function() {alert(1);}, null, document, [], true, '200px' - 30, '23.45元', 5, Number('abc'), function() {alert(3);}, 'xyz' - 90];
 var btn = document.getElementsByClassName('btn')[0]
 var s5 = document.getElementsByClassName('s5')
 var arr1 = []
 var arr2 = []
 var arr3 = []
 var n = 0
for( var i = 0 ; i < arr.length ; i++ ){
	console.log(arr[i])
}
btn.onclick = function(){
	arr1 = [] 
	arr2 = [] 
	arr3 = []
	n = null
	s5[3].innerHTML = '把NaN所在的位置找出来：'
	s5[0].innerHTML = '找到arr里所有的数字：'
	s5[1].innerHTML = '找到可以转成数字的：'
	s5[2].innerHTML = '把转成数字以后，最大值判断出来：'
	for( var i = 0 ; i < arr.length ; i++ ){
		if( arr[i] === Number(arr[i]) ){
			arr1.push(arr[i])
			s5[0].innerHTML = '找到arr里所有的数字：'+arr1
		}
		if( !isNaN(parseInt(arr[i]))){
			arr2.push(arr[i])
			s5[1].innerHTML = '找到可以转成数字的：'+arr2
		}
		for( var j = 0 ; j < arr2.length ; j++ ){
			if( n < arr2[j] ){
				n = arr[j]
				s5[2].innerHTML = '把转成数字以后，最大值判断出来：'+n
			}
		}
		if(arr[i] != arr[i] ){
			 arr3.push(i)
			 s5[3].innerHTML = '把NaN所在的位置找出来：'+arr3
		}
	}
}
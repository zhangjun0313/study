var l = document.getElementsByClassName('li3')
var dx = document.getElementsByClassName('duoxuan')
var quan = document.getElementById('quan')
var s1 = document.getElementsByClassName('s1')
var n = 0
var c = 0
for( var i = 0 ; i < l.length ; i++ ){
	l[i].index = i
	l[i].a = false
	l[i].onclick = function(){
		if( l[this.index].a ){
			n--
			this.style.background = ''
			dx[this.index].checked = false
			this.a = false
			console.log(n)
		}else{
			n++
			this.style.background = '#e15671'
			dx[this.index].checked = true
			this.a = true
			console.log(n)
		}
		if( n == 6 ){
			quan.checked = true
			c = 1
		}else{
			quan.checked = false
			c = 0
		}
	}
	l[i].onmouseover = function(){
		if( !l[this.index].a ){
			this.style.background = 'yellow'
		}
	}
	l[i].onmouseout = function(){
		if( !l[this.index].a ){
			this.style.background = ''
		}
	}
}
s1[0].onclick = function(){
	if( c == 1 ){
		for( var i = 0 ; i < l.length ; i++ ){
			l[i].style.background = ''
			l[i].a = false
			dx[i].checked = false
			quan.checked = false
			n = 0
			c = 0
		}
	}else{
		for( var i = 0 ; i < l.length ; i++ ){
			l[i].style.background = '#e15671'
			l[i].a = true
			dx[i].checked = true
			quan.checked = true
			n = 6
			c = 1
		}
	}
}
//
//s1[0].onclick = function(){
//		if( this.checked ){
//			for( var e = 0 ; e < l.length ; e++ ){
//				l[e].style.background = ''
//				dx[e].checked = false
//				quan.checked = false
//				this.checked = false
//				l[e].aaa = true
//				n = 0
//			}
//		}else{
//			for( var u = 0 ; u < l.length ; u++ ){
//				l[u].style.background = '#e15671'
//				dx[u].checked = true
//				quan.checked = true
//				this.checked = true
//				l[u].aaa = false
//			}
//		}
//	}
//for( var i = 0 ; i < l.length ; i++ ){
//	l[i].index = i
//	l[i].aaa = false
//	
//	
//	
//	l[i].aaa = true
//	l[i].onclick = function(){
//		if( l[this.index].aaa){
//			n++
//			dx[this.index].checked = true
//			this.aaa =false
//			this.style.background = '#e15671'
//			//l[this.index].aaa = false
//		}else{
//			n--
//			dx[this.index].checked = false
//			this.aaa = true
//			this.style.background = ''
//			l[this.index].aaa = true
//			console.log()
//		}
//		if( n >= 6 ){
//			quan.checked = true
//			s1[0].checked = true
//			//l[i].aaa =false
//		}else{
//			quan.checked = false
//			s1[0].checked = false
//		}
//	}
//	l[i].onmouseout = function(){
//		if( this.aaa == true ){
//			
//		}else{
//			this.style.background = ''
//		}
//	}
//	l[i].onmouseover = function(){
//		if( this.aaa == true ){
//			
//		}else{
//			this.style.background = '#e15671'
//		}
//	}
//}
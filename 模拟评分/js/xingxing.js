var s3 = document.getElementsByClassName('s3')
var btn = document.getElementById('btn')
var arrTxt = ['极差','一般','不错','推荐','力荐']
var m = -1;
var a = false 
for( var i = 0 ; i < s3.length ; i++){
	s3[i].index = i
	btn.value = arrTxt[this.index];
	s3[i].onmouseover = function(){
		btn.value = arrTxt[this.index]
		btn.style.background = '#e15671'
		for( var j = 0 ; j < s3.length ; j++){
			if( j <= this.index ){
				if( this.index < 2 ){
					s3[j].style.background = 'url(./images/xing3.png) no-repeat'
				}else{
					s3[j].style.background = 'url(./images/xing.png) no-repeat'
				}
			}else{
				s3[j].style.background = 'url(./images/xing2.png) no-repeat'
			}
		}
	}
	s3[i].onmouseout = function(){
		btn.value = arrTxt[m];
		if(a){
			btn.style.background = '#e15671'
		}else{
			btn.style.background = '#fff'
		}
		for( var j = 0 ; j < s3.length ; j++){
			if( j <= m ){
				if( m < 2 ){
					s3[j].style.background = 'url(./images/xing3.png) no-repeat'
				}else{
					s3[j].style.background = 'url(./images/xing.png) no-repeat'
				}
			}else{
				s3[j].style.background = 'url(./images/xing2.png) no-repeat'	
			}
		}
	}
	s3[i].onclick = function(){
		m = this.index
		a = true
	}
}

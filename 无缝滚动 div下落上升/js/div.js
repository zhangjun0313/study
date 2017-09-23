var box = $('.box')[0]
var a = true
time = null
for( var i = 0 ; i < 25 ; i++ ){
	box.innerHTML += '<div></div>'
}
var d = $('.box div')
for( var j = 0 ; j < 25 ; j++ ){
	d[j].style.left = 70*j+'px'
}
document.onclick = function(){
	if( a ){
		if( time ){
			return
		}
		for( var i = 0 ; i < d.length ; i++ ){
			fn(i)
		}
		function fn(i){
			time = setTimeout(function(){
				mTween( d[i] , 'top' , 500 , 1000 )
			},200*i)
		}
		setTimeout(function(){
			a = false
			time = null
		},5800)
		console.log(a)
	}else{
		if( time ){
			return
		}
		for( var i = 0 ; i < d.length ; i++ ){
			fn(i)
		}
		function fn(i){
			time = setTimeout(function(){
				mTween( d[i] , 'top' , 0 , 1000 )
			},200*i)
		}
		setTimeout(function(){
			a = true
			time = null
		},5800)
		console.log(a)
	}
}
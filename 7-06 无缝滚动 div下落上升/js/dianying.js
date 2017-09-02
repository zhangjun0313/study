var list = $('.list')[0]
var lis = $('.list li')
var span = $('.list li span')
var n = 0
function fn(){
	setTimeout(function(){
		mTween( span[0] , 'bottom' , 0 , 500 , 'linear' , function(){
			setTimeout(function(){
				mTween( span[0] , 'bottom' , -60 , 500 , 'linear' )
			},2000)
		} )
	},1000)
}
fn()
function func(){
	n++
	var target = -380 * n
	setTimeout(function(){
		for( var i = 0 ; i < span.length ; i++ ){
		mTween( span[i] , 'bottom' , 0 , 500 , 'linear' , function(){
		setTimeout(function(){
			for( var j = 0 ; j < span.length ; j++ ){
			mTween( span[j] , 'bottom' , -60 , 500 , 'linear' , function(){
				
			} )
		}
		},2000)
	} )
	}
	},1000)
	mTween( list , 'left' , target , 500 , 'linear' , function(){
		if( n == lis.length-1 ){
			list.style.left = '0px'
			n = 0
		}
		for( var i = 0 ; i < span.length ; i++ ){
			span[i].style.left = 380*i+'px'
		}
	} )
}
var t1 = setInterval(func,4000)


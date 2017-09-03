var star = $('.star')[0]
var one = $('.one')
var img = $('.img')[0]
var fenshu = $('.fenshu')
var cont = $('.cont')[0]
var n = 0
var m = 0
var arr = [1,2,3,4,5,6]
var num = 50
star.onclick = function(){
	mTween(star,{
		opacity:0
	},300,'linear',function(){
		star.style.display = 'none'
		auto()
	})
	for( var i = 0 ; i < one.length ; i++ ){
		mTween(one[i],{
			left:75
		},300)
	}
}
img.onmousedown = function(){
	clearInterval(img.timer)
	shake(img,'left',30,function(){
		m++
		fenshu[0].innerHTML = m
		img.style.top = -70+'px'
	})
}
var t1 = null
function auto(){
	t1 = setInterval(function(){
	num = num + 50
	arr.sort(function (a,b){
	return Math.random() - 0.5;
	})
	img.innerHTML = `<img src="images/${arr[0]}.png"/>`
	var a = Math.round(Math.random()*(678-74))
	console.log(a)
	img.style.left = a+'px'
		mTween(img,{
			top:344
	},1500 - num,'linear',function(){
		setTimeout(function(){
			img.style.top = -70+'px'
		},500)
		shake(cont,'top',30,function(){
			n++
			fenshu[1].innerHTML = n
		})
	})
	},2000-num)
}

var listTop = $('.list-top')[0]
var sames = $(".same")[0];
var li = $('.list-top li')
var bottomContent = $('.bottom-content')

var n = -1
var prev = 0


setInterval(function(){
	n++
	if( n > li.length-1 ){
		n = 0
	}
	clearInterval(t)
	li[prev].style.background = ''
	bottomContent[prev].style.display = 'none'
	li[n].style.background = '#fff'
	bottomContent[n].style.display = 'block'
	prev = n
	var t = null
	var newList = $(".newList",sames)[prev];
	var lis = $('li',newList)
	var  m = -1
	var prevs = 0
	t = setInterval(function(){
		m++
		if( m > lis.length-1 ){
			clearInterval(t)
			m = 0
		}
		lis[prevs].style.background = ''
		lis[m].style.background = '#f40'
		console.log(m)
		prevs = m
	},500)
	
},2000)


	

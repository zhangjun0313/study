var d = document.getElementsByClassName('d')
var c = document.getElementsByClassName('i')
var box1 = document.getElementsByClassName('box1')[0]
var box2 = document.getElementsByClassName('box2')[0]
var box3 = document.getElementsByClassName('box3')[0]
var box4 = document.getElementsByClassName('box4')[0]
for( var i = 0 ; i < d.length ; i++ ){
	d[i].index = i
	d[i].onclick = function(){
		for( var j = 0 ; j < d.length ; j++ ){
			d[j].style.background = ''
			c[j].style.display = 'none'
		}
		this.style.background = 'red'
		c[this.index].style.display = 'block'
	}
}
func(box1)
func(box2)
func(box3)
func(box4)
function func( a ){
	var s1 = a.getElementsByClassName('s1')
	var img = a.getElementsByClassName('img')
	for( var i = 0 ; i < s1.length ; i++ ){
		s1[i].index = i
		s1[i].onclick = function(){
			for( var j = 0 ; j < s1.length ; j++ ){
				s1[j].style.background = ''
				img[j].style.display = 'none'
			}
			this.style.background = 'rgba(216,80,110,0.5)'
			img[this.index].style.display = 'block'
		}
	}
}

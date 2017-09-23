var btn1 = $('.btn1')[0]
var btn2 = $('.btn2')[0]
var bottom = $('.bottom')[0]

var arr = [1,2,3,4,5,6,7,8]
btn2.onclick = function(){
	btn1.style.background = ''
	this.style.background = '#000'
	arr.sort(function( item1 , item2 ){
		return Math.random() - 0.5;
	})
	console.log(arr)
	bottom.innerHTML = `<div class="img1"><img src="images/${arr[0]}.png" /></div>
				<div class="img1 img2"><img src="images/${arr[1]}.png" /></div>
				<div class="img1 img3"><img src="images/${arr[2]}.png" /></div>
				<div class="img1 img4"><img src="images/${arr[3]}.png" /></div>
				<div class="img1 img5"><img src="images/${arr[4]}.png" /></div>
				<div class="img1 img6"><img src="images/${arr[5]}.png" /></div>
				<div class="img1 img7"><img src="images/${arr[6]}.png" /></div>
				<div class="img1 img8"><img src="images/${arr[7]}.png" /></div>`
}
btn1.onclick = function(){
	btn2.style.background = ''
	this.style.background = '#000'
	arr.sort(function( item1 , item2 ){
		return item1 - item2
	})
	bottom.innerHTML = `<div class="img1"><img src="images/${arr[0]}.png" /></div>
				<div class="img1 img2"><img src="images/${arr[1]}.png" /></div>
				<div class="img1 img3"><img src="images/${arr[2]}.png" /></div>
				<div class="img1 img4"><img src="images/${arr[3]}.png" /></div>
				<div class="img1 img5"><img src="images/${arr[4]}.png" /></div>
				<div class="img1 img6"><img src="images/${arr[5]}.png" /></div>
				<div class="img1 img7"><img src="images/${arr[6]}.png" /></div>
				<div class="img1 img8"><img src="images/${arr[7]}.png" /></div>`
}
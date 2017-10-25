<template>
	<div class="nav">
		<div class="adv">
			<ul class="carousel clearfix" @touchstart="downFn" @touchmove="moveFn" @touchend="upFn">
				<li><img src="../assets/img/lb-1.png" alt="《王牌特工2：黄金圈》" /></li>
				<li><img src="../assets/img/lb-2.png" alt="《王牌特工2：黄金圈》" /></li>
				<li><img src="../assets/img/lb-3.png" alt="《王牌特工2：黄金圈》" /></li>
				<li><img src="../assets/img/lb-4.png" alt="《王牌特工2：黄金圈》" /></li>
			</ul>
			<div class="prompt">
				<span class="active"></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
		<div class="classification clearfix">
			<p class="fl active">正在热映</p>
			<p class="fr">即将上映</p>
		</div>
	</div>
</template>

<script>
import $ from 'jquery'
export default {
	data(){
		return {
			n : 0,
			timer : null,
			pressCoordinate:null,
			movingDistance:null,
			initOffsetLeft:null,
			isDown:true
		}
	},
	mounted(){
		$('.carousel')[0].innerHTML += $('.carousel')[0].innerHTML
		this.autoPlay()
		this.touchendFn()
	},
	methods:{
		autoPlay(){
			if( this.timer ){
				return
			}
			let carousel = $('.carousel')
			let len = $('.carousel li').length
			let index = Math.abs( Math.round( carousel[0].offsetLeft/$(document).width() ) )
			this.n = index
			this.timer = setInterval( () => {
				if( this.n === 0 ){
					this.n = 4
					carousel.css('left',-this.n*$(document).width())
					//console.log(this.n,carousel.css('left'))
				}else if( this.n === len - 1 ){
					//console.log( carousel.css('left') , this.n )
					this.n = 3
					carousel.css('left',-this.n*$(document).width())
					//console.log(this.n,carousel.css('left'),parseInt(carousel.css('left'))/$(document).width(),'我走进来了',-this.n*$(document).width())
				}
				this.n++
				//console.log(this.n)
				carousel.stop().animate({
					left:-this.n*$(document).width()
				})
				
				$('.prompt span').removeClass('active')
				$('.prompt span').eq(this.n-len/2).addClass('active')
			} , 2000 )
		},
		downFn(ev){
			if( this.isDown ){
				//console.log( '按下' , this.isDown )
				clearInterval( this.timer )
				this.timer = null
				ev = ev.changedTouches[0]
				this.pressCoordinate = ev.pageX
				let carousel = $('.carousel')
				let index = Math.abs( Math.round( carousel[0].offsetLeft/$(document).width() ) )
				let len = $('.carousel li').length
				if( index === 0 ){
					this.n = 4
					carousel.css('left',-this.n*$(document).width())
				}else if( index === len - 1 ){
					this.n = 3
					carousel.css('left',-this.n*$(document).width())
				}
				setTimeout( ()=>{
					this.initOffsetLeft = $('.carousel')[0].offsetLeft
				} )
				carousel.css('transition','none')
			}
		},
		moveFn(ev){
			if( this.isDown ){
				//console.log( '移动' , this.isDown )
				ev = ev.changedTouches[0]
				this.movingDistance = ev.pageX - this.pressCoordinate
				//console.log('获取的ul整体左侧的距离'+this.initOffsetLeft,'按下时的坐标'+this.pressCoordinate,"移动的距离" + this.movingDistance,this.initOffsetLeft + this.pressCoordinate+this.movingDistance )
				let carousel = $('.carousel')
				carousel.css('left',this.initOffsetLeft+this.movingDistance)
			}
		},
		upFn(){
			this.isDown = !this.isDown
			//console.log( '抬起' , this.isDown )
			if(!this.movingDistance){
				//console.log('没有移动')
				this.autoPlay()
				return
			}
			//console.log( '移动了' ,this.movingDistance )
			let carousel = $('.carousel')
			let index = Math.round( carousel[0].offsetLeft/$(document).width() )
			carousel.css('left',index*$(document).width())
			carousel.css('transition','.5s')
			switch(Math.abs(index)){
				case 4:
					index = 0
				break
				case 5:
					index = 1
				break
				case 6:
					index = 2
				break
				case 7:
					index = 3
				break
			}
			$('.prompt span').removeClass('active')
			$('.prompt span').eq(Math.abs(index)).addClass('active')
			
			carousel.on('transitionend',()=>{
				carousel.css('transition','none')
				this.movingDistance = null
				this.autoPlay()
				carousel.off('transitionend')
			})
			
		},
		touchendFn(){
			$('.classification').on('touchend','p',(ev)=>{
				let attr = $(ev.target).eq(0);
				let n = attr.html();
				$(attr.siblings()).removeClass('active');
				if(n === '正在热映'){
					attr.addClass('active')
				}else if(n === '即将上映'){
					attr.addClass('active')
				}
				this.$emit('okFn',n)
			})
		}
	}
}
</script>

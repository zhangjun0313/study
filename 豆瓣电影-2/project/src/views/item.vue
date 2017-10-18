<template>
  <li>
		<img :src="items.images.small" alt="羞羞的的铁拳" class="fl"/>
		<div class="rightLi fl">
			<h2>{{items.title}}</h2>
			<p class="star clearfix" v-show="getScore">
				<span 
					v-for="item,index in getScore" 
					class="fa fa-star fa-2x fl"
				></span>
				<span class="fa fa-star-half-o fa-2x fl" v-if="compareNumber"></span>
				<span v-for="item,index in emptyStars" class="fa fa-star-o fa-2x fl"></span> 
				<em class="fl">{{ items.rating.average % 1 === 0 ? items.rating.average + '.0' : items.rating.average }}</em>
			</p>
			<p v-show="!getScore" class="no_scoring">暂无评分</p>
			<p class="director">导演：{{items.directors.length ? items.directors[0].name:"无"}}</p>
			<p class="actor">主演：{{toStar}}</p>
		</div>
		<div class="ticket fr">
			<p>{{getNumberSeen}}人看过</p>
			<button>购票</button>
		</div>
	</li>
</template>

<script>
export default {
	data(){
		return {
			list:[]
		}
	},
	props:["items"],
	computed:{
		getNumberSeen(){
			//console.log( Math.round(this.items.collect_count/10000*10)/10 )
			if( this.items.collect_count < 10000 ){
				return this.items.collect_count
			}else{
				return Math.round(this.items.collect_count/10000*10)/10 + '万'
			}
		},
		getScore(){
			if( this.items.rating.average ){
				let n = Math.floor( Math.round( this.items.rating.average ) / 2 )
				//console.log(Math.round( this.items.rating.average ) / 2)
				return n
			}else{
				return 0
			}
		},
		compareNumber(){
			let str =  (Math.round( this.items.rating.average ) / 2).toString()
			//console.log(Number(str.slice(2)))
			if( Number(str.slice(2)) === 5 ){
				return true
			}else{
				return false
			}
		},
		emptyStars(){
			//console.log( this.getScore,this.compareNumber )
			if( this.compareNumber ){
				//console.log( 5 - (this.getScore + 1) )
				return 5 - (this.getScore + 1)
			}else{
				//console.log( 5 - this.getScore )
				return 5 - this.getScore
			}
		},
		toStar(){
			//console.log( this.items.casts )
			let str = this.items.casts[0].name
			for( let i = 1 ; i < this.items.casts.length ; i++ ){
				str += ` / ${ this.items.casts[i].name }` 
			}
			//console.log( str )
			return str
		}
	}
}

</script>

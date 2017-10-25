<template>
	<div id="content">
		<Carousel
			@okFn = "parentFn"
			ref="carousel1"
		></Carousel>
		<!--loading-->
		<!--<div class="fa fa-spinner fa-2x loading"></div>-->
		<!-- <div class="nextFilm">
			<div class="topDiv clearfix">
				<span class="more">全部</span>
				<a href="JavaScript:;">10月</a>
				<a href="JavaScript:;">11月</a>
				<a href="JavaScript:;">12月</a>
				<span class="division-line">|</span>
				<a href="JavaScript:;">时间</a>
				<a href="JavaScript:;">热度</a>
			</div>
			<div class="bottomDiv" style="display: block;">10月17号，星期二</div>
		</div> -->
		<ul class="hotSubject">
			<IsTheFilmItem 
				v-for="item,index in this.list.subjects"  
				key="index" 
				:items="item"
				v-if = "isShow"
			></IsTheFilmItem>
			<futureIitem 
				v-if = "isShow2"
				v-for="item1,index1 in this.futureList.subjects"
				key="index1" 
				:items1="item1"
			></futureIitem>
		</ul>
	</div>
</template>

<script>
import Carousel from '@/components/carousel'
import IsTheFilmItem from '@/views/Is-the-film-item'
import futureIitem from '@/views/future-item'
import jsonp from 'jsonp'
import Axios from 'axios'
import $ from 'jquery'
export default {
	data(){
		return {
			list:[],
			futureList:[], //即将上映数据
			isShow:true, //控制正在热映
			isShow2:false //控制即将上映
        }
	},
	components:{
		Carousel,
		IsTheFilmItem,
		futureIitem	
	},
	mounted(){
			Axios.get( 'http://localhost:3100/api/list' )
			.then( ( data ) => {
					//console.log( data.data[0].subjects )
				this.list = data.data[0]
				//this.list.subjects.length = 3
            //console.log(this.list.subjects)
		} )

		Axios.get('http://localhost:3100/api/hot-list')
			.then((data)=>{
				//console.log(data.data[0])
				this.futureList = data.data[0]
				//console.log(this.futureList)
			})

        //console.log(this.list.subjects)
    // jsonp(
    // `https://api.douban.com/v2/movie/in_theaters?&start=0&count=20`,
    // {
    //   param: 'callback'
    // },(err,data) => {
	// 		//console.log(JSON.stringify(data,null))
    //         this.list = JSON.stringify(data,null)
            
	// 	})
	this.touchMoveFn();
	//console.log(this.$refs.carousel1)
	},
	methods:{
		parentFn(n){
			if(n === '正在热映'){
				this.isShow = true;
				this.isShow2 = false;
			}
			if(n === '即将上映'){
				this.isShow = false;
				this.isShow2 = true;
			}
			//console.log(this.isShow,this.isShow2)
		},
		touchMoveFn(){
			let n = this.$refs.carousel1.$el.firstChild.clientHeight//轮播的高度
		}
	}
}
</script>
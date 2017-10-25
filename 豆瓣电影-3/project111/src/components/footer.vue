<template>
  <footer id="footer" class="clearfix">
		<a 
			href="javascript:;" 
			class="first" 
			:class="{active:this.isClass1}"
			@click="isClass_1"
		>
			<span class="fa fa-film fa-2x"></span>
			<span>热映</span>
		</a>
		<a 
			href="javascript:;" 
			class="two" 
			:class="{active:this.isClass2}"
			@click="isClass_2"
		>
			<span class="fa fa-eye fa-2x"></span>
			<span>找片</span>
		</a>
		<a 
			href="javascript:;" 
			class="three" 
			:class="{active:this.isClass3}"
			@click="isClass_3"
		>
			<span class="fa fa-user-o fa-2x"></span>
			<span>我的</span>
		</a>
	</footer>
</template>

<script>
export default {
	data(){
		return {
			isClass1:true,
			isClass2:false,
			isClass3:false
		}
	},
	methods:{
		isClass_1(){
			this.isClass1 = true
			this.isClass2 = false
			this.isClass3 = false
		},
		isClass_2(){
			this.isClass1 = false
			this.isClass2 = true
			this.isClass3 = false
		},
		isClass_3(){
			this.isClass1 = false
			this.isClass2 = false
			this.isClass3 = true
		}
	}
}
</script>

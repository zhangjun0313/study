var div1 = document.getElementsByClassName('div1')  //获取元素
var ul1 = document.getElementsByClassName('ul1') //获取元素
var li = document.getElementsByClassName('li1') //获取元素
var n = 0   //将来记录下标
for(var i = 0 ; i < div1.length ; i++){
	div1[i].bbb = false   //定义为假
	div1[i].index = i;   //记录下标
	div1[i].onclick = function(){   //当点击div时
		if( this.bbb == true ){   //真的走这里
			this.bbb = false  //改变状态
			this.style.background = 'rgba(204,87,108,0.9) url(./images/013.png) no-repeat 15px 18px'//箭头样式改变
			ul1[this.index].style.display = 'none'  //样式消失
		}else{  //假的走这里
			for( var j = 0 ; j < div1.length ; j++ ){
				ul1[j].style.display = 'none';//清空样式
				div1[j].style.background = ''   //清空样式
				div1[j].bbb = false  //初始化他的状态
			}
			this.style.background = 'rgba(204,87,108,0.9) url(./images/012.png) no-repeat 15px 18px'  //箭头样式改变
			ul1[this.index].style.display = 'block'  //显现样式
			this.bbb = true  //改变状态
		}
	}
}
for( var i = 0 ; i < li.length ; i++ ){
	li[i].index = i   //记录下标
	li[i].aaa = false   //定义状态
	li[i].onmouseover = function(){//移入时分辨是否点击过
		if( this.aaa == true ){
			//li[n].style.background = 'rgba(123,44,58,1)'
		}else{
			this.style.background = 'rgba(91,91,91,1)'
		}
	}
	li[i].onmouseout = function(){//移出时分辨是否点击过
		if( this.aaa == true ){
			//li[n].style.background = 'rgba(123,44,58,1)'
		}else{
				this.style.background = ''
		}
	}
	li[i].onclick = function(){  //当点击好友时
		for( var k = 0 ; k < li.length ; k++ ){
			li[k].style.background = ''  //清空样式
			li[k].aaa = false  //初始化状态
		}
		n = this.index  //记录下标
		this.aaa = true  //改变状态
		this.style.background = 'rgba(123,44,58,1)' //改变颜色
	}
}

















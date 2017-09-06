//传入一个id  如果有的话  返回一条数据
function getDateById(id){
	if(data[id]){
		return data[id]
	}
	return null;
}
//传入一个id  如果这个id下有子数据  那么push进数组中
function getChildsById(id){
	var arr = [];
	for(var attr in data){
		if(data[attr].pid == id){
			arr.push(data[attr])
		}
	}
	return arr;
}
var nav = document.getElementsByClassName('nav')[0]
var navFlist = nav.firstElementChild
//-------------------------------------------------------左侧树形结构生成-------------------------------------------------------
var catalogue = $('.catalogue')[0];
var newArr = []
//循环data找到最高的那一层
for( var attr in data ){
	if( data[attr].pid < 0 ){
		newArr.push( getDateById( data[attr].id ) )
	}
}
function shuxIngJieGou( newArr ){
	var html = '<ul>'
		newArr.forEach( function( item ){
			html += `<li><span data-pid="${item.pid}" data-id="${item.id}" class="${ getChildsById( item.id ).length ? 'openfile' : 'alone' }">${item.title}</span>`//判断 如果没有子数据了  那么就没有箭头，并且文件夹的图案为闭合的
				if( getChildsById( item.id ) ){//判断是否有子数据  如果有 就继续渲染
					var newArr = getChildsById( item.id )
					html += shuxIngJieGou( newArr )
				}
			html += `</li>`
		} )
	html += '</ul>'
	return html
}
catalogue.innerHTML = shuxIngJieGou( newArr )
//------------------------------------------------------------右侧文件区域结构生成--------------------------------------------------------------
var jiegou = $('.jiegou')[0]
var blocks = $('.blocks')[0]
function wenJianJieGou( id ){
	var a = getChildsById( id )
	if( a.length ){
		jiegou.style.display = 'block'
		blocks.style.display = 'none'
		var b = a.map( function( item ){
			return `<div data-pid="${item.pid}" data-id="${item.id}" class="folder"/>
						<i data-id="${item.id}" class = "chenkbox"></i>
						<p class="folderImg"><img data-id="${item.id}" src = "images/folder-b.png" ></p>
						<input style="display:none;" type="text" data-id="${item.id}" class="folderName" value="${ item.title }" />
						<span class="folderName span1" style="display:block;" data-id="${item.id}">${ item.title }</span>
					</div>`
		} ).join('')
		return b
	}else{
		blocks.style.display = 'block'
		jiegou.style.display = 'none'
	}
}
jiegou.innerHTML = wenJianJieGou( 0 )
//-----------------------------------------------------------通过id寻找祖先数据---------------------------------------------
function getParentsById( id ){
	var arr = []
	for( var attr in data ){
		if( data[attr].id == id ){
			arr.push( data[attr] )
			arr = arr.concat(getParentsById(data[attr].pid))
			break
		}
	}
	return arr
}
//-------------------------------------------------------------导航条区域结构生成-------------------------------------------------------------
var dec = $('.dec')[0]
function daoHangJieGou( id ){
	var fuJi = getParentsById( id ).reverse()
	var html = ''
	for( var i = 0 ; i < fuJi.length-1 ; i++ ){
		html += `<b data-id="${fuJi[i].id}">${fuJi[i].title}</b><em></em>`
	}
	html += `<span data-id="${fuJi[fuJi.length-1].id}" class="active">${fuJi[fuJi.length-1].title}</span>`
	return html
}
dec.innerHTML = daoHangJieGou( 0 )
//--------------------------------------------------------默认文件夹高亮样式------------------------------------------------------------------
function moRenGaoLiang( id ){//循环span找到和自己id一样的span  加上高亮
	var spans = catalogue.getElementsByTagName('span')
	for( var i = 0 ; i < spans.length ; i++ ){
		spans[i].classList.remove('openfile1')
		if( spans[i].dataset.id == id ){
			spans[i].classList.add("openfile1")
		}
	}
}
moRenGaoLiang( 0 )
//-------------------------------------------------------左侧树形结构点击事件---------------------------------------------------------------
catalogue.onclick = function( ev ){
	var target = ev.target
	if( target.nodeName === 'SPAN' ){//寻找事件源  把自定义属性id传给各个函数重新生成结构
		var thisId = target.dataset.id
		dec.innerHTML = daoHangJieGou( thisId )
		jiegou.innerHTML = wenJianJieGou( thisId )
		moRenGaoLiang( thisId )
		navFlist.classList.remove('quanXuan')
		navFlist.a = false
		var folder = jiegou.getElementsByClassName('folder')
		//console.log(folder)
		blockOrNone( folder )
	}
}
//--------------------------------------------------------------右侧导航条区域点击事件----------------------------------------------------------------------------
dec.onclick = function( ev ){
	var target = ev.target
	if( target.nodeName === 'B' ){//寻找事件源  把自定义属性id传给各个函数重新生成结构
		var thisId = target.dataset.id
		dec.innerHTML = daoHangJieGou( thisId )
		jiegou.innerHTML = wenJianJieGou( thisId )
		moRenGaoLiang( thisId )
		navFlist.classList.remove('quanXuan')
		navFlist.a = false
		var folder = jiegou.getElementsByClassName('folder')
		//console.log(folder)
		blockOrNone( folder )
	}
}
//-------------------------------------------------------------右侧文件区域点击事件-----------------------------------------------------------------
jiegou.onclick = function( ev ){
	var target = ev.target
	if( target.nodeName === 'INPUT' ){
		ev.stopPropagation()
		//target.value = ''
		return
	}
	if( target.nodeName !== 'I' ){
		if( target.nodeName === 'DIV' || 'IMG'  ){//寻找事件源  把自定义属性id传给各个函数重新生成结构
			var thisId = target.dataset.id
			dec.innerHTML = daoHangJieGou( thisId )
			jiegou.innerHTML = wenJianJieGou( thisId )
			moRenGaoLiang( thisId )
			navFlist.classList.remove('quanXuan')
			navFlist.a = false
			var folder = jiegou.getElementsByClassName('folder')
			blockOrNone( folder )
		}
	}else{
		var chenkbox = jiegou.getElementsByClassName('chenkbox')
		if( target.a ){
			target.classList.remove('xuanzhong')
			for( var i = 0 ; i < chenkbox.length ; i++ ){//循环获取到的i 看是否全被选中。如果全被选中的话  全选按钮也被选中 反之全选按钮不被选中
				if( chenkbox[i].className === 'chenkbox' ){
					navFlist.classList.remove('quanXuan')
					navFlist.a = false
					break
				}else{
					navFlist.classList.add('quanXuan')
					navFlist.a = true
				}
			}
			target.a = false
		}else{
			target.classList.add('xuanzhong')
			for( var i = 0 ; i < chenkbox.length ; i++ ){//循环获取到的i 看是否全被选中。如果全被选中的话  全选按钮也被选中 反之全选按钮不被选中
				if( chenkbox[i].className === 'chenkbox' ){
					navFlist.classList.remove('quanXuan')
					navFlist.a = false
					break
				}else{
					navFlist.classList.add('quanXuan')
					navFlist.a = true
				}
			}
			target.a = true
		}
	}
	ev.stopPropagation()
}
//--------------------------------------------------鼠标移入文件出现单选框，移出单选框消失-----------------------------------------------------------------
function blockOrNone( folder ){
	for( var i = 0 ; i < folder.length ; i++ ){
		folder[i].onmouseover = function(){//移入时获取单选框并出现
			var chenkbox = this.getElementsByClassName('chenkbox')[0]
			chenkbox.style.display = 'block'
		}
		folder[i].onmouseout = function(){//移出时获取单选框并出现
			var chenkbox = this.getElementsByClassName('chenkbox')[0]
			if( chenkbox.className === 'chenkbox xuanzhong' ){
				chenkbox.style.display = 'block'
				this.style.background = '#fff'
				this.style.border = '1px solid #55addc'
			}else{
				chenkbox.style.display = 'none'
				this.style.background = ''
				this.style.border = ''
			}
		}
	}
}
var folder = jiegou.getElementsByClassName('folder')
blockOrNone( folder )
//-----------------------------------------------------全选框点击事件-----------------------------------------------------
nav.onclick = function( ev ){
	var target = ev.target
	var chenkbox = jiegou.getElementsByClassName('chenkbox')
	var folder = jiegou.getElementsByClassName('folder')
	if( chenkbox.length ){//点击全选按钮  让所有的单选按钮被选中 并改变文件夹的样式  切换状态
		if( target.nodeName === 'STRONG' ){
			if( target.a ){
				target.classList.remove('quanXuan')
				for( var i = 0 ; i < chenkbox.length ; i++ ){
					chenkbox[i].style.display = 'none'
					chenkbox[i].className = 'chenkbox'
					chenkbox[i].a = false
					folder[i].style.background = ''
					folder[i].style.border = ''
				}
				target.a = false
			}else{//点击全选按钮  让所有的单选按钮被选中 并改变文件夹的样式  切换状态
				target.classList.add('quanXuan')
				for( var i = 0 ; i < chenkbox.length ; i++ ){
					chenkbox[i].style.display = 'block'
					chenkbox[i].className = 'chenkbox xuanzhong'
					chenkbox[i].a = true
					folder[i].style.background = '#fff'
					folder[i].style.border = '1px solid #55addc'
				}
				target.a = true
			}
		}
	}else{//如果没有文件夹    全选按钮不能勾选  并提醒 没有文件夹
		alert('没有文件夹，不能全选！')
	}
}
//-------------------------------------------------------鼠标框选事件-------------------------------------------------------
var wrap = document.getElementsByClassName('wrap')[0]
var kuangxuan = document.getElementsByClassName('kuangxuan')[0]
wrap.onmousedown = function( ev ){//当点下的时候 获取鼠标坐标
	var inputs = jiegou.getElementsByTagName('i')
	ev.preventDefault()
	ev.stopPropagation()
	if( ev.target.nodeName === 'I' ){
		return
	}
	if( inputs.length === 0 ){
		return
	}
	var folder = jiegou.getElementsByClassName('folder')
	var chenkbox = jiegou.getElementsByClassName('chenkbox')
	var disX = ev.clientX
	var disY = ev.clientY
	var a = wrap.getBoundingClientRect()
	document.onmousemove = function( ev ){//给框选加宽高及top，left值
		navFlist.classList.remove('quanXuan')
		if( Math.abs( ev.clientX - disX ) < 30 ){//当宽小于30时  不出现选框
			kuangxuan.style.display = 'none'
			kuangxuan.style.width = 0 + 'px'
		}else{
			kuangxuan.style.display = 'block'
			kuangxuan.style.width = Math.abs( ev.clientX - disX ) + 'px'
		}
		if( Math.abs( ev.clientY - disY ) < 30 ){//当高小于30时  不出现选框
			kuangxuan.style.display = 'none'
			kuangxuan.style.height = 0 + 'px'
		}else{
			kuangxuan.style.display = 'block'
			kuangxuan.style.height = Math.abs( ev.clientY - disY ) + 'px'
		}
		var l = Math.min( ev.clientX-262-a.left , disX-262-a.left )
		//console.log(document.documentElement.scrollTop,document.body.scrollTop)
		var t = Math.min( ev.clientY-178+document.body.scrollTop , disY-178+document.body.scrollTop )
		for( var i = 0 ; i < folder.length ; i++ ){//取消鼠标移入移出文件夹的函数
			folder[i].onmouseover = null
			folder[i].onmouseout = null
		}
		for( var i = 0 ; i < folder.length ; i++ ){//碰撞检测
			if( collision( kuangxuan , folder[i] ) ){//碰到了
				chenkbox[i].style.display = 'block'
				chenkbox[i].className = 'chenkbox xuanzhong'
				chenkbox[i].a = true
				folder[i].style.background = '#fff'
				folder[i].style.border = '1px solid #55addc'
			}else{//没碰到
				chenkbox[i].style.display = 'none'
				chenkbox[i].className = 'chenkbox'
				chenkbox[i].a = false
				folder[i].style.background = ''
				folder[i].style.border = ''
			}
		}
		kuangxuan.style.left = l + 'px'
		kuangxuan.style.top = t + 'px'
	}
	document.onmouseup = function(){//抬起时判断是否全选
		for( var i = 0 ; i < folder.length ; i++ ){
			if( chenkbox[i].className === 'chenkbox' ){
				navFlist.classList.remove('quanXuan')
				navFlist.a = false
				break
			}else{
				navFlist.classList.add('quanXuan')
				navFlist.a = true
			}
		}
		document.onmousemove = null
		blockOrNone( folder )
		kuangxuan.style.display = 'none'
		kuangxuan.style.width = 0
		kuangxuan.style.height = 0
	}
	
}
//-----------------------------------------------------------新建文件夹操作-------------------------------------------------------------------------------
var xinJian = document.getElementsByClassName('xinJian')[0]
var jiegou = document.getElementsByClassName('jiegou')[0]
var dec = document.getElementsByClassName('dec')[0]
var folderArea = document.getElementsByClassName('folderArea')[0]
var blocks = document.getElementsByClassName('blocks')[0]
var xinjianchenggong = document.getElementsByClassName('xinjianchenggong')[0]
var yidongtixing = document.getElementsByClassName('yidongtixing')[0]
xinJian.onclick = function( ev ){
	blocks.style.display = 'none'
	if( jiegou.style.display === 'none' ){//判断是否有下一级子数据
		blocks.style.display = 'none'
		jiegou.style.display = 'block'
		jiegou.innerHTML = ''
	}
	var dec = document.getElementsByClassName('dec')[0]
	var lasts = dec.lastElementChild
	var lastsId = dec.lastElementChild.dataset.id
	var t = Date.now()
	jiegou.innerHTML = `<div class="folder"/>
							<i class = "chenkbox"></i>
							<p class="folderImg"><img src = "images/folder-b.png" ></p>
							<input style="display:block;" class="folderName" type="text" value="" />
							<span style="display:none;" class="folderName span1"></span>
						</div>` + jiegou.innerHTML
	var lastDiv = jiegou.firstElementChild
	var inputTxt = lastDiv.querySelector('input')
	var spanTxt = lastDiv.querySelector('span')
	var newImg = lastDiv.querySelector('img')
	var inputs = jiegou.getElementsByTagName('i')
	inputTxt.focus()
	ev.stopPropagation()
	folderArea.onclick = function(ev){
		var inputTxtVal = inputTxt.value
		if( inputTxtVal === '' ){//判断value是否为空  如果是空的就不新建
			lastDiv.remove()
			if( inputs.length === 0 ){
				blocks.style.display = 'block'
			}
			return
		}
		var arr = []
		arr = getChildsById( lastsId )
		for( var i = 0 ; i < arr.length ; i++ ){
			if( inputTxtVal === arr[i].title ){
				lastDiv.remove()
				if( inputs.length === 0 ){
					blocks.style.display = 'block'
				}
				return
			}
		}
		inputTxt.style.display = 'none'
		spanTxt.style.display = 'block'
		spanTxt.innerHTML = inputTxtVal
		data[t] = {
			"id": t,
	        "pid": lastsId,
	        "title": spanTxt.innerHTML
		}
		//给数据加id
		lastDiv.setAttribute('data-id',t)
		spanTxt.setAttribute('data-id',t)
		inputTxt.setAttribute('data-id',t)
		newImg.setAttribute('data-id',t)
		lastDiv.setAttribute('data-pid',lastsId)
		catalogue.innerHTML = shuxIngJieGou( newArr )
		moRenGaoLiang( data[t].pid )
		ev.stopPropagation()
		mTween( xinjianchenggong , { top : 10 } , 300 )
		setTimeout( function(){
			mTween( xinjianchenggong , { top : -100 } , 300 )
		} ,1500 )
		folderArea.onclick = null
	}
}
//-------------------------------------------------------------删除点击事件-----------------------------------------------
var shanChu = document.getElementsByClassName('shanChu')[0]
var jiegou = document.getElementsByClassName('jiegou')[0]
var inputs = jiegou.getElementsByTagName('i')
var lasts = dec.lastElementChild
var lastsId = dec.lastElementChild.dataset.id
var nav = document.getElementsByClassName('nav')[0]
var blocks = document.getElementsByClassName('blocks')[0]
var sureDelete = document.getElementsByClassName('sureDelete')[0]
var sure = document.getElementsByClassName('sure')[0]
var del = document.getElementsByClassName('del')[0]
var cengji = document.getElementsByClassName('cengji')[0]
var selects = document.getElementsByClassName('select')[0]
var deleteSuccessful = document.getElementsByClassName('deleteSuccessful')[0]
shanChu.addEventListener( 'click' , function(){
	var arr = []
	//循环所有的勾选框  如果有被选中的就push进数组中
	for( var i = 0 ; i < inputs.length ; i++ ){
		if( inputs[i].className === 'chenkbox xuanzhong' ){
			arr.push(inputs[i])
		}
	}
	if( arr.length === 0 ){//如果没有选中的那么弹出提醒框并且下面不执行
		mTween( selects , { top : 10 } , 300 )
		setTimeout( function(){
			mTween( selects , { top : -100 } , 300 )
		} ,1500 )
		return
	}
	mTween( sureDelete , { top : 0 } , 300 )
	sureDelete.style.zIndex = 10
	cengji.style.display = 'block'//遮罩
	sure.addEventListener( 'click' , function( ev ){//点击确定时
		ev.stopPropagation()
		mTween( sureDelete , { top : -180 } , 300 )
		sureDelete.style.zIndex = 0
		cengji.style.display = 'none'
		//循环这个数组  先在结构中删除  之后在循环data  如果结构中的id与数组中的id一样  那么就删除这条数据
		for( var i = 0 ; i < arr.length ; i++ ){
			arr[i].parentNode.remove()
			for( var attr in data ){
				if( data[attr].id == arr[i].parentNode.dataset.id ){
					delete data[attr]
				}
			}
		}
		var arrHuoQuZiJi = []//找到这个id下的所有子孙数据  并删除
		for( var i = 0 ; i < arr.length ; i++ ){
			arrHuoQuZiJi = huoQuZiJi( arr[i].parentNode.dataset.id )
		}
		for( var i = 0 ; i < arrHuoQuZiJi.length ; i++ ){
			for( var attr in data ){
				if( data[attr].id == arrHuoQuZiJi[i] ){
					delete data[attr]
				}
			}
		}
		catalogue.innerHTML = shuxIngJieGou( newArr )
		moRenGaoLiang( lastsId )
		mTween( deleteSuccessful , { top : 10 } , 300 )//提醒删除成功
		setTimeout( function(){
			mTween( deleteSuccessful , { top : -100 } , 300 )
		} ,1500 )
		if( inputs.length === 0 ){//如果有没文件了  提醒没有文件了并且取消掉全选对勾
			nav.firstElementChild.classList.remove('quanXuan')
			jiegou.style.display = 'none'
			blocks.style.display = 'block'
		}
	} )
	del.addEventListener( 'click' , function( ev ){//点击取消时
		ev.stopPropagation()
		mTween( sureDelete , { top : -180 } , 300 )
		sureDelete.style.zIndex = 0
		cengji.style.display = 'none'
		arr = []
	} )
} )
//--------------------------------------------------------------重命名点击事件---------------------------------------------
var chongmingm = document.getElementsByClassName('chongmingm')[0]
var tryAgain = document.getElementsByClassName('tryAgain')[0]
var shiBai = document.getElementsByClassName('shiBai')[0]
var chongGong = document.getElementsByClassName('chongGong')[0]
chongmingm.addEventListener( 'click' , function(){
	var inputs = jiegou.getElementsByTagName('i')
	var arr = []
	for( var i = 0 ; i < inputs.length ; i++ ){//循环所有i   把选中的都push一个数组中
		if( inputs[i].className === 'chenkbox xuanzhong' ){
			arr.push(inputs[i])
		}
	}
	if( arr.length > 1 ){//如果数组长度超过一
		mTween( tryAgain , { top : 10 } , 300 )//提醒请单个操作
		setTimeout( function(){
			mTween( tryAgain , { top : -100 } , 300 )
		} ,1500 )
		return
	}
	if( arr.length === 0 ){//如果数组的长度是零 说明没有选中的i    提醒请选中文件后操作
		mTween( selects , { top : 10 } , 300 )
		setTimeout( function(){
			mTween( selects , { top : -100 } , 300 )
		} ,1500 )
		return
	}
	var gaibian = arr[0].parentNode
	var inp = gaibian.getElementsByTagName('input')[0]
	var span = gaibian.getElementsByTagName('span')[0]
	var chunzhi = span.innerHTML
	span.style.display = 'none'
	inp.style.display = 'block'
	inp.select()
	folderArea.onclick = function(){
		inp.style.display = 'none'
		span.style.display = 'block'
		var inpVal = inp.value
		span.innerHTML = inpVal//把input的value给到span
		if( span.innerHTML === '' ){//如果是空的  之前的名字不变  且提醒重命名失败
			span.innerHTML = chunzhi
			mTween( shiBai , { top : 10 } , 300 )
			setTimeout( function(){
				mTween( shiBai , { top : -100 } , 300 )
			} ,1500 )
			return
		}
		for( var attr in data ){
			if( span.innerHTML === data[attr].title ){//循环所有的数据看是否有重名的  如果有重名的重命名失败
				span.innerHTML = chunzhi
				mTween( shiBai , { top : 10 } , 300 )
				setTimeout( function(){
					mTween( shiBai , { top : -100 } , 300 )
				} ,1500 )
				return
			}
		}
		var id = span.parentNode.dataset.id//找到选中的i的父级的id
		for( var attr in data ){//循环data找到这条数据  改变数据的title
			if( data[attr].id == id ){
				data[attr].title = span.innerHTML
			}
		}
		mTween( chongGong , { top : 10 } , 300 )
		setTimeout( function(){
			mTween( chongGong , { top : -100 } , 300 )
		} ,1500 )
		catalogue.innerHTML = shuxIngJieGou( newArr )//重新渲染左侧结构
		folderArea.onclick = null
	}
} ) 
//-------------------------------------------------------------移动到点击事件---------------------------------------------------------
var arrHuoQuZiJi = []
var yidongdao = document.getElementsByClassName('yidongdao')[0]
var yidongchenggong = document.getElementsByClassName('yidongchenggong')[0]
var youchongming = document.getElementsByClassName('youchongming')[0]
var fullPop = document.getElementsByClassName('full-pop')[0]
var dirTree = document.getElementsByClassName('dirTree')[0]
var dirFile = document.getElementsByClassName('dir-file')[0]
var confirm = document.getElementsByClassName('confirm')[0]
var cancel = document.getElementsByClassName('cancel')[0]
yidongdao.onclick = function(){
	var inputs = jiegou.getElementsByTagName('i')
	var arr = []
	for( var i = 0 ; i < inputs.length ; i++ ){//循环所有i   把选中的都push一个数组中
		if( inputs[i].className === 'chenkbox xuanzhong' ){
			arr.push(inputs[i])
		}
	}
	if( arr.length === 0 ){//如果arr是空的  提醒请选择文件
		mTween( selects , { top : 10 } , 300 )
		setTimeout( function(){
			mTween( selects , { top : -100 } , 300 )
		} ,1500 )
		return
	}
	var arr1 = []
	var inputsPid = arr[0].parentNode.dataset.pid//存选中的div的pid
	for( var i = 0 ; i < arr.length ; i++ ){//存选中的div的id
		arr1.push( arr[i].parentNode.dataset.id )
	}
	cengji.style.display = 'block'//遮罩
	fullPop.style.zIndex = 10
	dirTree.innerHTML = shuxIngJieGou( newArr )//选框的结构
	var spans = dirTree.getElementsByTagName('span')
	mTween( fullPop , { top : 200 } , 300 )
	for( var i = 0 ; i < spans.length ; i++ ){
		spans[i].onclick = function(){//点击
			dirFile.innerHTML = ''
			arrHuoQuZiJi = []
			for( var i = 0 ; i < spans.length ; i++ ){
				spans[i].style.backgroundColor = ''
			}
			this.style.backgroundColor = '#ccc'
			
			var id = this.dataset.id//获取当前点击的span的id
			if( id == inputsPid ){//如果走到这里  说明要移动的文件夹已经在选中的文件夹中  移动失败
				dirFile.innerHTML = '该文件已是当前选择文件的子文件'
				return
			}
			for( var i = 0 ; i < arr1.length ; i++ ){
				if( id == arr1[i] ){//如果走到这里   说明要移动的文件夹其中包括选中文件夹   移动失败  （自己移动到自己里面  失败）
					dirFile.innerHTML = '无法移动到操作文件中'
					return
				}
			}
			for( var i = 0 ; i < arr1.length ; i++ ){//通过封装的函数  把id传进去  可以找到这个id下的所有子孙数据
				//arrHuoQuZiJi = []
				arrHuoQuZiJi = huoQuZiJi( arr1[i] )
			}
			console.log(arrHuoQuZiJi)
			if( arrHuoQuZiJi.indexOf( Number(id) ) != -1 ){//如果走到这里  说明要移动的文件夹是选中文件的子孙文件  移动失败  （）
				dirFile.innerHTML = '不能移动到操作文件的子文件中'
				//arrHuoQuZiJi = []
				return
			}
			confirm.onclick = function(){//点击确定
				if( dirFile.innerHTML === '' ){
					var arr2 = []
					for( var i = 0 ; i < arr1.length ; i++ ){//传一个id  通过这个id找到数据
						arr2.push(getDateById(arr1[i]))
					}
					var arr3 = []
					arr3 = getChildsById(id)
					//console.log(arr3)
					for( var i = 0 ; i < arr3.length ; i++ ){
						for( var j = 0 ; j < arr2.length ; j++ ){
							if( arr2[j].title === arr3[i].title ){//判断是否有重名
								mTween( youchongming , { top : 10 } , 300 )
								setTimeout( function(){
									mTween( youchongming , { top : -100 } , 300 )
								} ,2000 )
								mTween( yidongtixing , { top : -600 } , 300 )
								cengji.style.display = 'none'//遮罩
								return
							}
						}
					}
					for( var attr in data ){//循环数据  把所有选中的id的数据改变他们的父级
						for( var i = 0 ; i < arr2.length ; i++ ){
							if( data[attr].id == arr2[i].id ){
								data[attr].pid = id
							}
						}
					}
					mTween( yidongchenggong , { top : 10 } , 300 )
					setTimeout( function(){
						mTween( yidongchenggong , { top : -100 } , 300 )
					} ,2000 )
					mTween( fullPop , { top : -400 } , 300 )
					cengji.style.display = 'none'//遮罩
					fullPop.style.zIndex = 0
					dec.innerHTML = daoHangJieGou( id )
					jiegou.innerHTML = wenJianJieGou( id )
					catalogue.innerHTML = shuxIngJieGou( newArr )//重新渲染左侧结构
					moRenGaoLiang( id )//默认高亮
					navFlist.classList.remove('quanXuan')//改变全选样式及状态
					navFlist.a = false
				}
			}
		}
		cancel.onclick = function(){//点击取消
			mTween( fullPop , { top : -400 } , 300 )
			cengji.style.display = 'none'//遮罩
			fullPop.style.zIndex = 0
		}
	}
}
//--------------------------------------------给一个ID获取这个ID下所有的子集--------------------------------------------------------------
function huoQuZiJi( id ){
	for( var attr in data ){
		if( id == data[attr].pid ){
			arrHuoQuZiJi.push(data[attr].id)
			for( var i = 0 ; i < arrHuoQuZiJi.length ; i++ ){
				if( data[attr].id == arrHuoQuZiJi[i] ){
					huoQuZiJi(arrHuoQuZiJi[i])
				}
			}
		}
	}
	return arrHuoQuZiJi
}
















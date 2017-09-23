var btn = document.getElementById('btn');
var img1 = document.getElementById('img1');
var txt = document.getElementById('txt');
var list = document.getElementById('list')


var state = true


img1.onclick = function(){
	if(state){
		img1.src = 'images/user2.png';
		state = false;
	}else{
		img1.src = 'images/user1.png';
		state = true;
	}
}



btn.onclick = function(){
	if(txt.value == ''){
		alert('亲，请写点什么吧')
	}else{
		if(state){
			list.innerHTML = list.innerHTML+'<li class="clearfix li1"><span class="tu1 fr"><img src="images/user1.png"/></span><span class="fr s2"></span><span class="fr s1">'+txt.value+'</span></li>'
								
		}else{
			list.innerHTML = list.innerHTML + ' <li class="clearfix li1"><span class="tu2 fl"><img src="images/user2.png"/></span><span class="fl s3"></span><span class="fl s4">'+txt.value+'</span></li>'
			
		}
		txt.value = ''
	}
}

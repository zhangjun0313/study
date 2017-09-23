var btn = document.getElementById('btn')
var txt = document.getElementById('txt')
var bot = document.getElementsByClassName('bot')[0]

btn.onclick = function(){
	if( txt.value == '' ){
		bot.innerHTML = '请输入内容'
	}else if( txt.value.charAt(0) == ' ' ){
		bot.innerHTML = '不能输入空格'
	}else if( txt.value.charAt(txt.value.length-1) == ' '){
		bot.innerHTML = '不能输入空格'
	}else if( txt.value.charAt(0) == 0 ){
		bot.innerHTML = '第一位数字不能为0'
	}else  if( txt.value != Number(txt.value) ){
		bot.innerHTML = '只能输入数字'
	}else if( txt.value != parseInt(txt.value) ){
		bot.innerHTML = '请输入整数'
	}else if( txt.value.length < 5 ){
		bot.innerHTML = '请输入最少5位数字'
	}else if( txt.value.length > 12 ){
		bot.innerHTML = '输入最多为12位数字'
	}else{
		bot.innerHTML = '输入正确'
	}
}

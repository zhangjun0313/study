//高度自适应
$(function(){
    resizeLayout();
    $(window).resize(function(){
        resizeLayout();
    })
})
function resizeLayout(){
    let hei=$(window).height()-parseInt($('.content').css('paddingTop'))
    $(".content").css("height",hei)
}



let justs = $('.nav ul li .just')
let backs = $('.nav ul li .back')

$(justs).each(function(index,item){
    $(this).css('left',index*275)
})
$(backs).each(function(index,item){
    $(this).css('left',index*275)
})


//-----------------------------------------------------------高度自适应---------------------------------------------------------------
$(function(){
    resizeLayout();
    $(window).resize(function(){
        resizeLayout();
    })
})
function resizeLayout(){
    let hei=$(window).height()-parseInt( $('.content').css( 'paddingTop' ) )
    $(".content").css( "height" , hei )
}



let justs = $('.nav ul li .just')
let backs = $('.nav ul li .back')

//----------------------------------------------------------导航left定位-------------------------------------------------------------------
$(justs).each(function( index , item ){
    $(this).css( 'left' , index * 275 )
})
$(backs).each(function( index , item ){
    $(this).css( 'left' , index * 275 )
})

//-----------------------------------------------------取消浏览器默认行为--------------------------------------------------------------------
$(document).mousemove(function( ev ){
    ev.preventDefault()
})

//--------------------------------------------------------------加载完成后的动画------------------------------------------------------------
$(function(){
    let view_reel = $('.view_reel')
    let view_reel_span = $('.view_reel span')
    let logo = $('.logo')
    let plus = $('.plus')
    let shots = $('.shots')
    let list_1 = $('.list_1')
    let list_lis_spans = $('.list_1 li span')
    let details_1 = $('.details_1')
    view_reel.animate({
        marginRight:0
    },1000)
    view_reel_span.animate({
        marginLeft:0
    },1100,function(){
        logo.animate({
            opacity:1
        },500)
        plus.animate({
            opacity:1
        },800)
        shots.animate({
            opacity:1
        },1100,function(){
            list_lis_spans.eq(0).animate({
                marginTop:0
            },500)
            list_lis_spans.eq(1).animate({
                marginTop:0
            },700)
            list_lis_spans.eq(2).animate({
                marginTop:0
            },900,function(){
                details_1.show().animate({
                    opacity:1
                },500)
            })
        })
    })
})


$('.view_reel').mouseover(function(){
    console.log(111)
})
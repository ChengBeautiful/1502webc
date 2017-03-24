$(function(){
	$(".header a:last").click(function(){
		if($('.display').is(':hidden')){
			$('.display').show(1000)
		}else{
			$(".display").hide(1000)
		}
	})
	/*模特*/
	$('.icon_xiao div').click(function(){
		$(this).addClass('icon_border').siblings().removeClass();
		$('.icon_da').hide().eq($(this).index()).fadeIn();
	})
	/*尺码*/
	$('.top').click(function(){
		
	})
	/*底部滚动*/
	$(".list").mousemove(function(){
		$('.click_left').css("display","block");
		$('.click_right').css("display","block");
	
	})	
	$(".list").mouseout(function(){
		$('.click_left').css("display","none")
		$('.click_right').css("display","none")
	})
})


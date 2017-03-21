$(function(){
	$(".banner li").click(function(){
		$('.main-item').hide().eq($(this).index()).show();
	})
	$(".ctn .img-ctn img").mousemove(function(){
		$(this).css("width",+10px).css("height",+10px);
		
	})
	})


$(document).ready(function () {	
	//手机翻译扩展
	$(".translation_phone_extend, .translation_phone_text").mouseover(function(){
		$(".translation_phone_extend").show();
		$(".translation_phone_text").css({'color':'#2c7df1'});
	});
	$(".translation_phone_extend, .translation_phone_text").mouseout(function(){
		$(".translation_phone_extend").hide();
		$(".translation_phone_text").css({'color':'#888888'});
	});
	//人工翻译
	$(".pesonal, .nav_pensonal_extend").mouseover(function(){
		$(".nav_pensonal_extend").show();
		$(".pesonal_a").css({
			'color':'#2c7df1',
		});
		$(".pesonal_a i").css({
			'background':'url(img/index/blue_uplogo.png)',
		})
	})
	$(".pesonal, .nav_pensonal_extend").mouseout(function(){
		$(".nav_pensonal_extend").hide();
		$(".pesonal_a").css({
			'color':'#333333',
		});
		$(".pesonal_a i").css({
			'background':'url(img/index/downlogo.png)',
		})
	})
	//登录
	$(".nav_sign").mouseover(function(){
		$(".nav_sign").css({
			'background':'#2C7DF1',
			'color':'#ffffff',
			})
	})
	$(".nav_sign").mouseout(function(){
		$(".nav_sign").css({
			'background':'#ffffff',
			'color':'#2c7df1',
			})
	})
	$(".nav_sign").click(function(){
		$(location).attr('href', 'index.html');
	})
	//点击翻译
	$(".btns_f1").click(function(){
		alert("哦吼吼吼吼吼吼吼")
	})
	//联系方式
	$(".contact_QQ").mouseover(function(){
		$(".contact_describe_QQ").show();
	})
	$(".contact_QQ").mouseout(function(){
		$(".contact_describe_QQ").hide();
	})
	$(".contact_mail").mouseover(function(){
		$(".contact_describe_mail").show();
	})
	$(".contact_mail").mouseout(function(){
		$(".contact_describe_mail").hide();
	})
	$(".contact_phone").mouseover(function(){
		$(".contact_describe_phone").show();
	})
	$(".contact_phone").mouseout(function(){
		$(".contact_describe_phone").hide();
	})
})
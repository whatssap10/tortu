(function($) {

	TAB.autoloads.push(function() {

		var $cache = {};

		$cache.loginBox = $('.login-form-box');

		$cache.loginBox.find('.login-form,.login-functions').each(function(i,e) {
			$(e).append('<div class="disable-layer"></div>');
		});

		$cache.loginBox.find('.ei_appl_ident_lig > a').each(function(i,e) {
			var $link = $(e);
			$link.addClass('open-function-forgot').parent().addClass('login-forgot-password');
		});

		$cache.loginBox.find('.open-function-create').bind('click', function() {
			$cache.loginBox.find('.login-form').addClass('disabled');
			$cache.loginBox.find('.login-function-new-user').hide();
			$cache.loginBox.find('.login-function-create').show();
			$cache.loginBox.find('.back-right').show();
			return false;
		});

		$cache.loginBox.find('.back-right').bind('click', function() {
			$(this).hide();
			$cache.loginBox.find('.login-form').removeClass('disabled');
			$cache.loginBox.find('.login-function-new-user').show();
			$cache.loginBox.find('.login-function-create').hide();
			return false;
		});


		$cache.loginBox.find('.open-function-forgot').bind('click', function() {
			$cache.loginBox.find('.login-functions').addClass('disabled');
			$cache.loginBox.find('.login-form-wrapper').hide();
			$cache.loginBox.find('.login-function-forgot').show();
			$cache.loginBox.find('.back-left').show();
			return false;
		});

		$cache.loginBox.find('.back-left').bind('click', function() {
			$(this).hide();
			$cache.loginBox.find('.login-functions').removeClass('disabled');
			$cache.loginBox.find('.login-form-wrapper').show();
			$cache.loginBox.find('.login-function-forgot').hide();
			return false;
		});

		$('.login-grid').each(function(i,e) {
			var $grid = $(e),
				$box1 = $grid.find('.box-teaser:eq(0)'),
				$box2 = $grid.find('.box-teaser:eq(1)');
			if($box1.height() > $box2.height()) {
				$box2.height( $box1.height() );
			} else {
				$box1.height( $box2.height() );
			}
		});

		$("input[name=ctype]").on("change", function (event) {
			var selection = event.target.value;
			var activeId = "#tbRegisterGroup" + selection;
			$(".js-tb-registergroup").hide();
			$(activeId).show();
		});	
		$("input[name=ctypeForget]").on("change", function (event) {
			var selection = event.target.value;
			var activeId = "#tbForgetGroup" + selection;
			$(".js-tb-forgetgroup").hide();
			$(activeId).show();
		});	
		

	});

    TAB.lazyAutoloads.push(function() {
        $('.login-form-box').find('input[type="text"]:first').focus();
    });


})(jQuery);
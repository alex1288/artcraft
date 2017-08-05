$(function($) {

    function validateEmail(email) {
		var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return reg.test(email);
	}

    $(".modalbox2").fancybox({
        closeBtn:true
    }
    );



    $(".button_atmosphere").toggle(function () {
        $(".atmosphere .hide").fadeIn(1000);
        $(this).html('Скрыть');
    },
      function () {
        $(".atmosphere .hide").fadeOut(1000);
        $(this).html('Все фотографии');
    });

    jQuery(".history .carousel").jCarouselLite({
            btnNext: ".history .carousel_next",
            btnPrev: ".history .carousel_prev",
            visible:1,
            btnGo: ['.history .1', '.history .2', '.history .3', '.history .4'],
            afterEnd:
			function(a, to, btnGo) {
				if(btnGo.length <= to){
					to = 0;
				}
			$('.goActive').removeClass('goActive');
			$(btnGo[to]).addClass('goActive');
		}
    });

    $.localScroll({
        duration: 1000,
        hash: false
    });

    $(window).scroll(function(){
	   if ($(window).scrollLeft()>0) {
	        $(".wrapper_menu.fixed .menu").css('margin-left',-$(window).scrollLeft()+'px');
	   }
       else {
        $(".wrapper_menu.fixed .menu").css('margin-left','auto');
       }
    });

    $(window).scroll(function(){
		if($(window).scrollTop() > ($(".wrapper_main").outerHeight()))
			$(".wrapper_menu").addClass('fixed');
		else
			$(".wrapper_menu").removeClass('fixed');
	});

    $(".modalbox").fancybox({
        openEffect:'fade',
        openSpeed: 1000,
        closeBtn:false,
        scrolling:'visible',
    }
    );

    $('.popup .button_close').on('click', function(){
        $.fancybox.close();
    });

    $("form").submit(function() { return false; });

    $("input.phone").inputmask("7(999)999-99-99");
	
	var clickId;
	
	$('.button').click(function(){
		
		if ('send3' != this.id) {
			window.clickId = this.id;
		}
	});
	
    $("#send1").on("click", function(){
	        var emailval  = $("#email1").val();
            var mailvalid = validateEmail(emailval);

            if(mailvalid == false) {
                    $("#email1").addClass('error');
    			}
            else if(mailvalid == true){
    				$("#email1").removeClass('error');
            }


			if(mailvalid == true) {

				$.ajax({
					type: 'POST',
					url: 'sendmessage.php',
					data: $("#contact1").serialize(),
					success: function(data) {
						if(data == "true") {
                                $.fancybox([{
		                          href : '#popup_thank',
                                    openEffect:'fade',
                                    openSpeed: 1000,
                                    closeBtn:false,
                                    scrolling:'visible'
                                  }]);
                                  yaCounter28165266.reachGoal('ORDER1');
                                  $("#contact1")[0].reset();
						}
					}
				});
			}
		});

        $("#send2").on("click", function(){
			var nameval  = $("#name2").val();
            var namelen    = nameval.length;
            var tph = document.getElementById("phone2").value;
            tph = !tph.match(/^7\([0-9]{3}\)[0-9]{3}-[0-9]{2}\-[0-9]{2}/);

			if(namelen < 3) {
				$("#name2").addClass("error");
			}
			else if(namelen >= 3){
				$("#name2").removeClass("error");
			}

			if(tph == true) {
				$("#phone2").addClass("error");
			}
			else if(tph == false){
				$("#phone2").removeClass("error");
			}

			if(tph == false && namelen >= 3) {

				$.ajax({
					type: 'POST',
					url: 'sendmessage.php',
					data: $("#contact2").serialize(),
					success: function(data) {
						if(data == "true") {
                                /*$.fancybox([{
		                          href : '#popup_thank',
                                    openEffect:'fade',
                                    openSpeed: 1000,
                                    closeBtn:false,
                                    scrolling:'visible'
                                  }]);*/
                                  yaCounter28165266.reachGoal('ORDER1');
                                  $("#contact2")[0].reset();
								  location = "/thankyou.php" + "?click=" + window.clickId;
						}
					}
				});
			}
		});

        $("#send3").on("click", function(){
			var nameval  = $("#name3").val();
            var namelen    = nameval.length;
            var tph = document.getElementById("phone3").value;
            tph = !tph.match(/^7\([0-9]{3}\)[0-9]{3}-[0-9]{2}\-[0-9]{2}/);

			if(namelen < 3) {
				$("#name3").addClass("error");
			}
			else if(namelen >= 3){
				$("#name3").removeClass("error");
			}

			if(tph == true) {
				$("#phone3").addClass("error");
			}
			else if(tph == false){
				$("#phone3").removeClass("error");
			}

			if(tph == false && namelen >= 3) {

				$.ajax({
					type: 'POST',
					url: 'sendmessage.php',
					data: $("#contact3").serialize(),
					success: function(data) {
						if(data == "true") {
						      $.fancybox.close();
                                /*$.fancybox([{
		                          href : '#popup_thank',
                                    openEffect:'fade',
                                    openSpeed: 1000,
                                    closeBtn:false,
                                    scrolling:'visible'
                                  }]);*/
                                  yaCounter28165266.reachGoal('ORDER1');
                                  $("#contact3")[0].reset();
								  location = "/thankyou.php" + "?click=" + window.clickId;
						}
					}
				});
			}
		});

  //   $('.scroll-animate').each(function () {
		// var block = $(this);
		// $(window).scroll(function() {
		// 	var top = block.offset().top;
		// 	var bottom = block.height()+top;
		// 	top = top - $(window).height();
		// 	var scroll_top = $(this).scrollTop();
		// 	if ((scroll_top > top)
		// 	&& (scroll_top < bottom)
		// 	)
		// 	{
		// 		if (!block.hasClass('animate')) {
		// 			block.addClass('animate');
		// 			block.trigger('animateIn');
		// 		}
		// 	} else {
		// 		block.removeClass('animate');
		// 		block.trigger('animateOut');
		// 	}
		// });
  //       });

        $('.childrens, .info').on('animateIn', function() {
		var inter = 0;
		$(this).find('.anim').each(function() {
			var block = $(this);
			setTimeout(function() {
				block.css('opacity', 1);
                block.css('transform', 'scale(1.0, 1.0)');
			}, inter*200);
			inter++;
		});
	}).on('animateOut', function() {
		$(this).find('.anim').each(function() {
			$(this).css('opacity', 0.01);
            $(this).css('transform', 'scale(0.5, 0.5)');
		});
	});

        $('.connect').on('animateIn', function() {
		var inter = 0;
		$(this).find('.anim').each(function() {
			var block = $(this);
			setTimeout(function() {
				block.css('padding-top', 0);
			}, inter*200);
			inter++;
		});
	   }).on('animateOut', function() {
		$(this).find('.anim').each(function() {
			$(this).css('padding-top', '400px');
		});
	   });

       $('.like').on('animateIn', function() {
		var inter = 0;
		$(this).find('.anim').each(function() {
			var block = $(this);
			setTimeout(function() {
				block.css('opacity', 1);
			}, inter*200);
			inter++;
		});
	}).on('animateOut', function() {
		$(this).find('.anim').each(function() {
			$(this).css('opacity', 0.01);
		});
	});

    $('.direction .item').on('animateIn', function() {
        $(this).css('transform', 'scale(1.0, 1.0)');
	}).on('animateOut', function() {
        $(this).css('transform', 'scale(0.5, 0.5)');
	});

  $('.awards .item').on('animateIn', function() {
      $(this).css('transform', 'scale(1.0, 1.0)');
  }).on('animateOut', function() {
      $(this).css('transform', 'scale(0.5, 0.5)');
  });

 });

 /*变换颜色*/
  $(function () {
                $("#topmenuright2").hover(
                function () {
                    $(this).addClass("color");
                },
                function () {
                    $(this).removeClass("color");
                });
            });
			
			
			
			
			
	/*显示隐藏*/	
	 $(function () {

                $("#contact").bind("click", function () {

                    if ($("#contact-1").is(":hidden")) {

                        $("#contact-1").fadeIn(1000)

                    } else {

                        $("#contact-1").fadeOut(1000);

                    }

                })

            });
			
			
			
			
			
			
			
			
			 /*分页设置*/
			
			$(function() {
			
			$("#demo5").paginate({
				count 		: 2,
				start 		: 1,
				display     : 2,
				border					: true,
				border_color			: '#fff',
				text_color  			: '#fff',
				background_color    	: '#09c',	
				border_hover_color		: '#ccc',
				text_hover_color  		: '#000',
				background_hover_color	: '#fff', 
				images					: false,
				mouse					: 'press',
				onChange     			: function(page){
											$('._current','#paginationdemo').removeClass('_current').hide();
											$('#p'+page).addClass('_current').show();
										  }
			});
		});
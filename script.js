(function(){
			var footerHeight = $('footer').css('height').replace('px', '');
			$(window).scroll(function () {
				var bottomOffset = $(document).height() - $(window).scrollTop() - $(window).height();
				if (bottomOffset < footerHeight) {
					$("nav").css('bottom', footerHeight - bottomOffset);
				} else {
					$("nav").css('bottom', 0);
				}
			});
		})();
		
		$(document).ready(function() {
			$('input').keydown(function(e) {
				if(e.code === 'Enter') {
					$('.block-content').html(function(index, oldValue) {
						return oldValue.replace(new RegExp('<span style="color: yellow; font-weight: bold">', 'g'), '');
					});
					$('.block-content').html(function(index, oldValue) {
						return oldValue.replace(new RegExp('</span>', 'g'), '');
					});

					var val = $(this).val().toLowerCase();
					if (val === '') return;
					var isScroll = false;
					let count = 0;
					//alert($('.block-content').html().replace(val, '<span style="color: red">' + val + '</span>'))
					$('.block-content').html(function(index, oldValue) {
						var indexOf = oldValue.toLowerCase().indexOf(val)
						if(indexOf != -1){
							count++;
						}
						if(!isScroll & indexOf != -1){
							let posY = $('.block-content:eq(' + index + ')').offset().top;
							$('html,body').scrollTop(posY - 300);
							isScroll = true;
						}

						return oldValue.toLowerCase().replace(new RegExp(val, 'g'),
						 '<span style="color: yellow; font-weight: bold">' + val + '</span>');
					});
					if(count == 0){
						alert('Ничего не найдено. Попробуйте осуществить поиск в других разделах.')
					}
				};
			});
		});
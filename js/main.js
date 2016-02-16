$(document).ready(function(){

	$("#owl-demo").owlCarousel({
  		items:1,
  		 navigationText:[" ", " "],
	    navigation: true,
	    responsive:false,
    });
	$(".owl-demo-second").owlCarousel({
		items:4,
		navigationText:false,
		navigation: true,
	});
    $('.main-button__img').on('click',function(){
    	$('.nav__list').toggleClass('open');
    })
	$('.services-thumb__title').on('click',function(e){
		e.preventDefault();

		var $this = $(this),
			item = $this.closest('.services-thumb__item'),
			list = $this.closest('.services-thumb'),
			items = list.find('.services-thumb__item'),
			content = item.find('.subgroup'),
			otherContent = list.find('.subgroup'),
			duration = 300;
		if (!item.hasClass('active')) {
			items.removeClass('active');
			item.addClass('active');
			otherContent.stop(true, true).slideUp(duration);
			content.slideDown(duration);
		}else{
			content.slideUp(duration);
			item.removeClass('active');
		}

	});
});
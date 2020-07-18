$(document).ready(function() {
			
	$('.accordion .title').click(function () {

		var accordion_item = $(this).parent();
		
		accordion_item.toggleClass('active');
		accordion_item.siblings().removeClass('active');
	});
  
});
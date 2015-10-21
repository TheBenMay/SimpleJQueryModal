$(function(){
	// When a button of the class .modal-trigger is clicked it will look for the parent div in which our case is .modal-container. It will then add the class .is-visible to the .modal-content div within .modal-container.
	$(document).on("click",".modal-trigger",function(){
			$(this).parent().find('.modal-content').addClass('is-visible');
	});


	// Once the modal is open you will need a close button/image/link with the class of .modal-close. This will look for the parent div which in our case is .modal-content and it will remove the .is-visible class.
	$(document).on("click",".modal-close",function(){
		$(this).parent().removeClass('is-visible');
	});
});


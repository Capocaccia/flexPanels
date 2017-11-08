const panels = document.querySelectorAll('.panel');

panels.forEach((item) => {

	item.addEventListener('click', function(){
		item.classList.toggle('open');
	});

	item.addEventListener('transitionend', function(e){
		if(e.propertyName === 'flex-grow') item.classList.toggle('open-active');
	});
	
});
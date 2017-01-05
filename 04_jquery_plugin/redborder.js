(function($){
	$.prototype.redBorder = function(){
		console.log(this); // this는 li 배열 
		this.each(function(index){
			$(this).css("border", "3px solid #f00");
			console.log($(this)); // $(this)는 각 li요소 
		})
		return this;
	}
})(jQuery)

$(document).ready(function(){
	$('.list02').find('li').redBorder();
})

(function($){
	jQuery.prototype.removeAni = function(){
		this.each(function(index){
			var $this = $(this);
			$this.delay(index*1000).animate({
				height: 0
			}, 500, function(){
				$this.css("opacity", 0);
			})
		})
		return this;
	}
})(jQuery)

$(document).ready(function(){
	$('.menu').find('li').removeAni();
})

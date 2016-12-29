// 1. 함수 단위 코딩하기 

(function(global, $){
	'use strict';

	// 필요한 변수 초기화
	var $tab = null;
	var $tabMenus = null;
	var $selectMenu = null;
	// 초기화 
	function init(){
		$tab = $('#tabMenu1');
		$tabMenus = $tab.find('li');
	}

	function initEvent(){
		$tabMenus.on("click", function(){
			setSelectMenu($(this));
		});
	}

	function setSelectMenu($thisMenu){
		if($selectMenu){
			$selectMenu.removeClass('select');
		}
		$selectMenu = $thisMenu;
		$selectMenu.addClass('select');
	}

	// 함수 실행
	$(init);		// $(document).ready(init);
	$(initEvent);

})(this, this.jQuery);
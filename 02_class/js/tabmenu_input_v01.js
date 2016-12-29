// ndex값을 입력하면 해당하는 탭메뉴가 선택되는 기능 추가

(function(global, $){
	'use strict';
	
	// 인스턴스 생성 	
	var tabTab1 = new TabMenu();

	// 클래스 생성, 프로퍼티 생성 
	function TabMenu() {
		this.$tab = null
		this.$tabMenus = null;
		this.$selectMenu = null;
		this.$tabIndex = null;
		this.$tabButton = null;
	}
	// 메서드 생성, 요소 초기화  
	TabMenu.prototype.init =function(el){
		this.$tab = $(el);
		this.$tabMenus = this.$tab.find('li');
		// input box에 입력받은 값
		this.$tabIndex = $('#inputBox').val();
		// 버튼 
		this.$tabButton = $('#inputButton');
	}

	TabMenu.prototype.initEvent = function(){
		var objThis = this;
		this.$tabMenus.on("click", function(){
			objThis.setSelectMenu($(this));
		});
		this.$tabButton.on("click", function(){
			objThis.$tabIndex = $('#inputBox').val();
			// 입력받은 값에 따른 탭메뉴 선택
			objThis.setSelectMenu($(objThis.$tabMenus[objThis.$tabIndex]));
		});
	}

	TabMenu.prototype.setSelectMenu = function($thisMenu){
		if(this.$selectMenu){
			this.$selectMenu.removeClass('select');
		}
		this.$selectMenu = $thisMenu;
		this.$selectMenu.addClass('select');
	}

	tabTab1.init('#tabMenu1');
	tabTab1.initEvent();

})(this, this.jQuery);
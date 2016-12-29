// 2. 함수 단위 -> 프로토타입 방식 클래스 

(function(global, $){
	'use strict';
	
	// 인스턴스 생성 	
	var tabTab1 = new TabMenu();
	var tabTab2 = new TabMenu();

	// 클래스 생성, 프로퍼티 생성 
	function TabMenu() {
		this.$tab = null
		this.$tabMenus = null;
		this.$selectMenu = null;
	}
	// 메서드 생성, 요소 초기화  
	TabMenu.prototype.init =function(el){
		this.$tab = $(el);
		this.$tabMenus = this.$tab.find('li');
		// console.log(this);
	}

	TabMenu.prototype.initEvent = function(){
		console.log(this);
		var objThis = this;
		this.$tabMenus.on("click", function(){
			console.log(this);
			console.log(objThis);
			objThis.setSelectMenu($(this));
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

	tabTab2.init('#tabMenu2');
	tabTab2.initEvent();

})(this, this.jQuery);
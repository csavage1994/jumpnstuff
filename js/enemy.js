var Enemy = function(){
	this.attack = function(){
		$('.enemy').animate({
			x: '-10%'
		}, 3000, function(){

		})
	}
};
$(function(){

 var $boton = $(".pasos");

$($boton).click(function(){
	$(this).next().toggle().animate({left:"20em"},1000);
})


});

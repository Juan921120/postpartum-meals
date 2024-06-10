$(".toast").hide();
$(".container .more").click(function(){
	x= $(this).parent().index();
	document.title=x;
	// alert('ok')
	
	$(".toast").eq(x).show();
	 $("body").css("overflow","hidden");
})
$(".close").click(function(){
	x= $(this).index();
	document.title=x;
	$(".toast").hide();
	 $("body").css("overflow","visible");
});

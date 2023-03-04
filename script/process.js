$(".step").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
	$("#line-progress").css("width", "0%");
	$(".Concept_Development").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
	$("#line-progress").css("width", "14%");
	$(".Proof_of_Concept").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
	$("#line-progress").css("width", "29%");
	$(".Seed_Funding").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
	$("#line-progress").css("width", "43%");
	$(".Product_Development").addClass("active").siblings().removeClass("active");
});

$(".step05").click( function() {
	$("#line-progress").css("width", "57%");
	$(".prototype").addClass("active").siblings().removeClass("active");
});
$(".step06").click( function() {
	$("#line-progress").css("width", "71%");
	$(".packaing").addClass("active").siblings().removeClass("active");
});
$(".step07").click( function() {
	$("#line-progress").css("width", "86%");
	$(".launch").addClass("active").siblings().removeClass("active");
});
$(".step08").click( function() {
	$("#line-progress").css("width", "100%");
	$(".revenue").addClass("active").siblings().removeClass("active");
});
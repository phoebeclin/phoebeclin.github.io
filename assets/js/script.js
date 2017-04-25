$(document).ready(function() {
	var searchbarPosition = $(".navbar").offset().top;

	$(window).scroll(function() {
		var scrollHeight = $(window).scrollTop();
			if (scrollHeight > searchbarPosition) {
				$(".navbar").addClass("fixed");
			} else {
				$(".navbar").removeClass("fixed");
			}
	});

	$("a").click(function() {
 		$('html, body').animate( {
    		scrollTop: $( $.attr(this, 'href')).offset().top
 		}, 800); return false
	});

	$("#skill1").click(function() {
		$("#video-container").fadeIn();
		$(".skill-video").hide();
		$("#trick-video").show();
		$("#video-overlay").show();
	});

	$("#skill2").click(function() {
		$("#video-container").fadeIn();
		$(".skill-video").hide();
		$("#silly-video").show();
		$("#video-overlay").show();
	});

	$("#skill3").click(function() {
		$("#video-container").fadeIn();
		$(".skill-video").hide();
		$("#cute-video").show();
		$("#video-overlay").show();
	});

	$("#video-overlay").click(function() {
		$("#video-container").fadeOut();
		$("#video-overlay").fadeOut();
	});

	$("#p1").click(function() {
		$("#popup-container").fadeIn();
		$(".popup").hide();
		$("#pic1").show();
		$("#popup-overlay").show();
	});

	$("#p2").click(function() {
		$("#popup-container").fadeIn();
		$(".popup").hide();
		$("#pic2").show();
		$("#popup-overlay").show();
	});

	$("#p3").click(function() {
		$("#popup-container").fadeIn();
		$(".popup").hide();
		$("#pic3").show();
		$("#popup-overlay").show();
	});

	$("#p4").click(function() {
		$("#popup-container").fadeIn();
		$(".popup").hide();
		$("#pic4").show();
		$("#popup-overlay").show();
	});

	$("#p5").click(function() {
		$("#popup-container").fadeIn();
		$(".popup").hide();
		$("#pic5").show();
		$("#popup-overlay").show();
	});

	$("#p6").click(function() {
		$("#popup-container").fadeIn();
		$(".popup").hide();
		$("#pic6").show();
		$("#popup-overlay").show();
	});

	$("#p7").click(function() {
		$("#popup-container").fadeIn();
		$(".popup").hide();
		$("#pic7").show();
		$("#popup-overlay").show();
	});

	$("#p8").click(function() {
		$("#popup-container").fadeIn();
		$(".popup").hide();
		$("#pic8").show();
		$("#popup-overlay").show();
	});

	$("#p9").click(function() {
		$("#popup-container").fadeIn();
		$(".popup").hide();
		$("#pic9").show();
		$("#popup-overlay").show();
	});

	$("#p10").click(function() {
		$("#popup-container").fadeIn();
		$(".popup").hide();
		$("#pic10").show();
		$("#popup-overlay").show();
	});

	$("#p11").click(function() {
		$("#popup-container").fadeIn();
		$(".popup").hide();
		$("#pic11").show();
		$("#popup-overlay").show();
	});

	$("#p12").click(function() {
		$("#popup-container").fadeIn();
		$(".popup").hide();
		$("#pic12").show();
		$("#popup-overlay").show();
	});

	$("#popup-overlay").click(function() {
		$("#popup-container").fadeOut();
		$("#popup-overlay").fadeOut();
	});
});
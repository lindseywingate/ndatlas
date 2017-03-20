$(document).ready(function() {
	$("#a_1890").on("click", function() {
		$("#map").attr("src", "images/maps/FB_1890.png");
	});
	$("#a_1900").on("click", function() {
		$("#map").attr("src", "images/maps/FB_1900.png");
	});
	$("#a_1910").on("click", function() {
		$("#map").attr("src", "images/maps/FB_1910.png");
	});
	$("#a_1920").on("click", function() {
		$("#map").attr("src", "images/maps/FB_1920.png");
	});
	$("#a_1930").on("click", function() {
		$("#map").attr("src", "images/maps/FB_1930.png");
	});
	$("#a_1940").on("click", function() {
		$("#map").attr("src", "images/maps/FB_1940.png");
	});
	$("#a_1950").on("click", function() {
		$("#map").attr("src", "images/maps/FB_1950.png");
	});
	$("#a_1970").on("click", function() {
		$("#map").attr("src", "images/maps/FB_1970.png");
	});
	$("#a_1980").on("click", function() {
		$("#map").attr("src", "images/maps/FB_1980.png");
	});
	$("#a_1990").on("click", function() {
		$("#map").attr("src", "images/maps/FB_1990.png");
	});
	$("#a_2000").on("click", function() {
		$("#map").attr("src", "images/maps/FB_2000.png");
	});
	$("#a_2013").on("click", function() {
		$("#map").attr("src", "images/maps/FB_2013.png");
	});
	var map_array = ["FB_1890.png", "FB_1900.png", "FB_1910.png", "FB_1920.png", "FB_1930.png", "FB_1940.png", "FB_1950.png", "FB_1970.png", "FB_1970.png", "FB_1980.png", "FB_1990.png", "FB_2000.png", "FB_2010.png", "FB_2013.png"]; 
        $("#play1").on("click", function() {
            $("#play1").prop("disabled", true);
            var c = 0;
            interval = setInterval(function() {
                if (c>12) {
                    clearInterval(interval);    
                    $("#play1").prop("disabled", false);
                }   
                switch_func(c);
                c++;
            }, 2000);
       
        function switch_func(c) {
            $("#map").attr("src", "/images/maps/"+map_array[c]);
        }   
    });
});


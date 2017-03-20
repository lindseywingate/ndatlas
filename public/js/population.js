$(document).ready(function() {
	$("#a_1890").on("click", function() {
		$("#map").attr("src", "images/maps/CP_1890.png");
	});
	$("#a_1900").on("click", function() {
		$("#map").attr("src", "images/maps/CP_1900.png");
	});
	$("#a_1910").on("click", function() {
		$("#map").attr("src", "images/maps/CP_1910.png");
	});
	$("#a_1920").on("click", function() {
		$("#map").attr("src", "images/maps/CP_1920.png");
	});
	$("#a_1930").on("click", function() {
		$("#map").attr("src", "images/maps/CP_1930.png");
	});
	$("#a_1940").on("click", function() {
		$("#map").attr("src", "images/maps/CP_1940.png");
	});
	$("#a_1950").on("click", function() {
		$("#map").attr("src", "images/maps/CP_1950.png");
	});
	$("#a_1960").on("click", function() {
		$("#map").attr("src", "images/maps/CP_1960.png");
	});
	$("#a_1970").on("click", function() {
		$("#map").attr("src", "images/maps/CP_1970.png");
	});
	$("#a_1980").on("click", function() {
		$("#map").attr("src", "images/maps/CP_1980.png");
	});
	$("#a_1990").on("click", function() {
		$("#map").attr("src", "images/maps/CP_1990.png");
	});
	$("#a_2000").on("click", function() {
		$("#map").attr("src", "images/maps/CP_2000.png");
	});
	$("#a_2010").on("click", function() {
		$("#map").attr("src", "images/maps/CP_2010.png");
	});
	$("#a_2013").on("click", function() {
		$("#map").attr("src", "images/maps/CP_2013.png");
	});
        var map_array = ["CP_1890.png", "CP_1900.png", "CP_1910.png", "CP_1920.png", "CP_1930.png", "CP_1940.png", "CP_1950.png", "CP_1960.png", "CP_1970.png", "CP_1970.png", "CP_1980.png", "CP_1990.png", "CP_2000.png", "CP_2010.png", "CP_2013.png"];
        $("#play1").on("click", function() {
            $("#play1").prop("disabled", true);
            var c = 0;
            interval = setInterval(function() {
                if (c>13) {
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

$(document).ready(function() {
	$("#a_1883").on("click", function() {
		$("#map").attr("src", "images/maps/CC_1883.png");
	});
	$("#a_1890").on("click", function() {
		$("#map").attr("src", "images/maps/CC_1890.png");
	});
	$("#a_1895").on("click", function() {
		$("#map").attr("src", "images/maps/CC_1895.png");
	});
	$("#a_1900").on("click", function() {
		$("#map").attr("src", "images/maps/CC_1900.png");
	});
	$("#a_1905").on("click", function() {
		$("#map").attr("src", "images/maps/CC_1905.png");
	});
	$("#a_1910").on("click", function() {
		$("#map").attr("src", "images/maps/CC_1910.png");
	});
	$("#a_1915").on("click", function() {
		$("#map").attr("src", "images/maps/CC_1915.png");
	});
	$("#a_1920").on("click", function() {
		$("#map").attr("src", "images/maps/CC_1920.png");
	});
	$("#a_1930").on("click", function() {
		$("#map").attr("src", "images/maps/CC_1930.png");
	});
	$("#a_1940").on("click", function() {
		$("#map").attr("src", "images/maps/CC_1940.png");
	});
	$("#a_1950").on("click", function() {
		$("#map").attr("src", "images/maps/CC_1950.png");
	});
	$("#a_1960").on("click", function() {
		$("#map").attr("src", "images/maps/CC_1960.png");
	});
	$("#a_1980").on("click", function() {
		$("#map").attr("src", "images/maps/CC_1980.png");
	});
	$("#a_2000").on("click", function() {
		$("#map").attr("src", "images/maps/CC_2000.png");
	});
	$("#a_2015").on("click", function() {
		$("#map").attr("src", "images/maps/CC_2015.png");
	});
        var map_array = ["CC_1883.png", "CC_1890.png", "CC_1895.png", "CC_1900.png", "CC_1905.png", "CC_1910.png", "CC_1915.png", "CC_1920.png", "CC_1930.png", "CC_1940.png", "CC_1950.png", "CC_1960.png", "CC_1980.png", "CC_2000.png", "CC_2015.png"];
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

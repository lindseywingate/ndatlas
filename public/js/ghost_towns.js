$(document).ready(function() {
	$("#a_1874").on("click", function() {
		$("#map").attr("src", "/images/maps/GT_C1874.png");
	});
	$("#a_1880").on("click", function() {
		$("#map").attr("src", "/images/maps/GT_C1880.png");
	});
	$("#a_1885").on("click", function() {
		$("#map").attr("src", "/images/maps/GT_C1885.png");
	});
	$("#a_1890").on("click", function() {
		$("#map").attr("src", "/images/maps/GT_C1890.png");
	});
	$("#a_1895").on("click", function() {
		$("#map").attr("src", "/images/maps/GT_C1895.png");
	});
	$("#a_1900").on("click", function() {
		$("#map").attr("src", "/images/maps/GT_C1900.png");
	});
	$("#a_1905").on("click", function() {
		$("#map").attr("src", "/images/maps/GT_C1905.png");
	});
	$("#a_1910").on("click", function() {
		$("#map").attr("src", "/images/maps/GT_C1910.png");
	});
	$("#a_1915").on("click", function() {
		$("#map").attr("src", "/images/maps/GT_C1915.png");
	});
	$("#a_1920").on("click", function() {
		$("#map").attr("src", "/images/maps/GT_C1920.png");
	});
	$("#a_1930").on("click", function() {
		$("#map").attr("src", "/images/maps/GT_C1930.png");
	});
	$("#a_1940").on("click", function() {
		$("#map").attr("src", "/images/maps/GT_C1940.png");
	});
	$("#a_1950").on("click", function() {
		$("#map").attr("src", "/images/maps/GT_C1950.png");
	});
	$("#a_1960").on("click", function() {
		$("#map").attr("src", "/images/maps/GT_C1960.png");
	});
	$("#a_1970").on("click", function() {
		$("#map").attr("src", "/images/maps/GT_C1970.png");
	});
	$("#a_1980").on("click", function() {
		$("#map").attr("src", "/images/maps/GT_C1980.png");
	});
	$("#a_1988").on("click", function() {
		$("#map").attr("src", "/images/maps/GT_C1988.png");
	});
        var map_array = ["GT_C1874.png", "GT_C1880.png", "GT_C1885.png", "GT_C1890.png", "GT_C1895.png", "GT_C1900.png", "GT_C1905.png", "GT_C1910.png", "GT_C1915.png", "GT_C1920.png", "GT_C1930.png", "GT_C1940.png", "GT_C1950.png", "GT_C1960.png", "GT_C1970.png", "GT_C1980.png", "GT_C1988.png"];
        $("#play1").on("click", function() {
            $("#play1").prop("disabled", true);
            var c = 0;
            interval = setInterval(function() {
                if (c>15) {
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

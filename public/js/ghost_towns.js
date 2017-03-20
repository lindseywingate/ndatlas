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
        var map_array = ["GT_1949-min.png", "GT_1954-min.png", "GT_1959-min.png", "GT_1964-min.png", "GT_1969-min.png", "GT_1974-min.png", "GT_1978-min.png", "GT_1982-min.png", "GT_1987-min.png", "GT_1992-min.png", "GT_1997-min.png", "GT_2002-min.png", "GT_2007-min.png", "GT_2012-min.png"];
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

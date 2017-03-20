$(document).ready(function() {
	$("#a_1980").on("click", function() {
		$("#map").attr("src", "images/maps/RA_1980.png");
	});
	$("#a_1990").on("click", function() {
		$("#map").attr("src", "images/maps/RA_1990.png");
	});
	$("#a_2000").on("click", function() {
		$("#map").attr("src", "images/maps/RA_2000.png");
	});
	$("#a_2010").on("click", function() {
		$("#map").attr("src", "images/maps/RA_2010.png");
	});
        var map_array = ["RA_1980.png", "RA_1990.png", "RA_2000.png", "RA_2010.png"];
        $("#play1").on("click", function() {
            $("#play1").prop("disabled", true);
            var c = 0;
            interval = setInterval(function() {
                if (c>2) {
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

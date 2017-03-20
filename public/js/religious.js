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
        var map_array = ["RA_1949-min.png", "RA_1954-min.png", "RA_1959-min.png", "RA_1964-min.png", "RA_1969-min.png", "RA_1974-min.png", "RA_1978-min.png", "RA_1982-min.png", "RA_1987-min.png", "RA_1992-min.png", "RA_1997-min.png", "RA_2002-min.png", "RA_2007-min.png", "RA_2012-min.png"];
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

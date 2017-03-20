$(document).ready(function() {
        $("#a_1949").on("click", function() {
                $("#map").attr("src", "/images/maps/AP_1949-min.png");
        });
        $("#a_1954").on("click", function() {
                $("#map").attr("src", "/images/maps/AP_1954-min.png");
        });
        $("#a_1959").on("click", function() {
                $("#map").attr("src", "/images/maps/AP_1959-min.png");
        });
        $("#a_1964").on("click", function() {
                $("#map").attr("src", "/images/maps/AP_1964-min.png");
        });
        $("#a_1969").on("click", function() {
                $("#map").attr("src", "/images/maps/AP_1969-min.png");
        });
        $("#a_1974").on("click", function() {
                $("#map").attr("src", "/images/maps/AP_1974-min.png");
        });
        $("#a_1978").on("click", function() {
                $("#map").attr("src", "/images/maps/AP_1978-min.png");
        });
        $("#a_1982").on("click", function() {
                $("#map").attr("src", "/images/maps/AP_1982-min.png");
        });
        $("#a_1987").on("click", function() {
                $("#map").attr("src", "/images/maps/AP_1987-min.png");
        });
        $("#a_1992").on("click", function() {
                $("#map").attr("src", "/images/maps/AP_1992-min.png");
        });
        $("#a_1997").on("click", function() {
                $("#map").attr("src", "/images/maps/AP_1997-min.png");
        });
        $("#a_2002").on("click", function() {
                $("#map").attr("src", "/images/maps/AP_2002-min.png");
        });
        $("#a_2007").on("click", function() {
                $("#map").attr("src", "/images/maps/AP_2007-min.png");
        });
        $("#a_2012").on("click", function() {
                $("#map").attr("src", "/images/maps/AP_2012-min.png");
        });
        var map_array = ["AP_1949-min.png", "AP_1954-min.png", "AP_1959-min.png", "AP_1964-min.png", "AP_1969-min.png", "AP_1974-min.png", "AP_1978-min.png", "AP_1982-min.png", "AP_1987-min.png", "AP_1992-min.png", "AP_1997-min.png", "AP_2002-min.png", "AP_2007-min.png", "AP_2012-min.png"];
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

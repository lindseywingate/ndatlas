$(document).ready(function() {
		$("#a_1934").on("click", function() {
                $("#map").attr("src", "/images/maps/WPA_1934-min.png");
        });
        $("#a_1935").on("click", function() {
                $("#map").attr("src", "/images/maps/WPA_1935-min.png");
        });
        $("#a_1936").on("click", function() {
                $("#map").attr("src", "/images/maps/WPA_1936-min.png");
        });
        $("#a_1937").on("click", function() {
                $("#map").attr("src", "/images/maps/WPA_1937-min.png");
        });
        $("#a_1938").on("click", function() {
                $("#map").attr("src", "/images/maps/WPA_1938-min.png");
        });
        $("#a_1939").on("click", function() {
                $("#map").attr("src", "/images/maps/WPA_1939-min.png");
        });
        $("#a_1940").on("click", function() {
                $("#map").attr("src", "/images/maps/WPA_1940-min.png");
        });
        $("#a_1942").on("click", function() {
                $("#map").attr("src", "/images/maps/WPA_1942-min.png");
        });
        var map_array = ["WPA_1934-min.png", "WPA_1935-min.png", "WPA_1936-min.png", "WPA_1937-min.png", "WPA_1938-min.png", "WPA_1939-min.png", "WPA_1940-min.png", "WPA_1942-min.png"];
        $("#play1").on("click", function() {
            $("#play1").prop("disabled", true);
            var c = 0;
            interval = setInterval(function() {
                if (c>6) {
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

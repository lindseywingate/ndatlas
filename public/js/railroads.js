$(document).ready(function() {
        $("#a_1875").on("click", function() {
                $("#map").attr("src", "/images/maps/RR_1875.png");
        });
        $("#a_1880").on("click", function() {
                $("#map").attr("src", "/images/maps/RR_1880.png");
        });
        $("#a_1885").on("click", function() {
                $("#map").attr("src", "/images/maps/RR_1885.png");
        });
        $("#a_1890").on("click", function() {
                $("#map").attr("src", "/images/maps/RR_1890.png");
        });
        $("#a_1895").on("click", function() {
                $("#map").attr("src", "/images/maps/RR_1895.png");
        });
        $("#a_1900").on("click", function() {
                $("#map").attr("src", "/images/maps/RR_1900.png");
        });
        $("#a_1905").on("click", function() {
                $("#map").attr("src", "/images/maps/RR_1905.png");
        });
        $("#a_1910").on("click", function() {
                $("#map").attr("src", "/images/maps/RR_1910.png");
        });
        $("#a_1915").on("click", function() {
                $("#map").attr("src", "/images/maps/RR_1915.png");
        });
        $("#a_1930").on("click", function() {
                $("#map").attr("src", "/images/maps/RR_1930.png");
        });
        $("#a_1950").on("click", function() {
                $("#map").attr("src", "/images/maps/RR_1950.png");
        });
        $("#a_1970").on("click", function() {
                $("#map").attr("src", "/images/maps/RR_1970.png");
        });
        $("#a_1990").on("click", function() {
                $("#map").attr("src", "/images/maps/RR_1990.png");
        });
        $("#a_2008").on("click", function() {
                $("#map").attr("src", "/images/maps/RR_2008.png");
        });
        $("#a_2013").on("click", function() {
                $("#map").attr("src", "/images/maps/RR_2013.png");
        });
        var map_array = ["RR_1875-min.png", "RR_1880-min.png", "RR_1885-min.png", "RR_1890-min.png", "RR_1895-min.png", "RR_1900-min.png", "RR_1905-min.png", "RR_1910-min.png", "RR_1915-min.png", "RR_1930-min.png", "RR_1950-min.png", "RR_1970-min.png", "RR_1990-min.png", "RR_2008-min.png", "RR_2013-min.png"];
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


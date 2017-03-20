$(document).ready(function() {
        $("#a_1949").on("click", function() {
                $("#map").attr("src", "/images/maps/BBarley_1949.png");
        });
        $("#a_1954").on("click", function() {
                $("#map").attr("src", "/images/maps/BBarley_1954.png");
        });
        $("#a_1959").on("click", function() {
                $("#map").attr("src", "/images/maps/BBarley_1959.png");
        });
        $("#a_1964").on("click", function() {
                $("#map").attr("src", "/images/maps/BBarley_1964.png");
        });
        $("#a_1969").on("click", function() {
                $("#map").attr("src", "/images/maps/BBarley_1969.png");
        });
        $("#a_1974").on("click", function() {
                $("#map").attr("src", "/images/maps/BBarley_1974.png");
        });
        $("#a_1978").on("click", function() {
                $("#map").attr("src", "/images/maps/BBarley_1978.png");
        });
        $("#a_1982").on("click", function() {
                $("#map").attr("src", "/images/maps/BBarley_1982.png");
        });
        $("#a_1987").on("click", function() {
                $("#map").attr("src", "/images/maps/BBarley_1987.png");
        });
        $("#a_1992").on("click", function() {
                $("#map").attr("src", "/images/maps/BBarley_1992.png");
        });
        $("#a_1997").on("click", function() {
                $("#map").attr("src", "/images/maps/BBarley_1997.png");
        });
        $("#a_2002").on("click", function() {
                $("#map").attr("src", "/images/maps/BBarley_2002.png");
        });
        $("#a_2007").on("click", function() {
                $("#map").attr("src", "/images/maps/BBarley_2007.png");
        });
        $("#a_2012").on("click", function() {
                $("#map").attr("src", "/images/maps/BBarley_2012.png");
        });
        var map_array = ["BBarley_1949-min.png", "BBarley_1954-min.png", "BBarley_1959-min.png", "BBarley_1964-min.png", "BBarley_1969-min.png", "BBarley_1974-min.png", "BBarley_1978-min.png", "BBarley_1982-min.png", "BBarley_1987-min.png", "BBarley_1992-min.png", "BBarley_1997-min.png", "BBarley_2002-min.png", "BBarley_2007-min.png", "BBarley_2012-min.png"];
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

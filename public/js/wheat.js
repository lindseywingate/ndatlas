$(document).ready(function() {
		var interval;
		$("#a_1949").on("click", function() {
                $("#map").attr("src", "/images/maps/BWheat_1949-min.png");
        });
        $("#a_1954").on("click", function() {
                $("#map").attr("src", "/images/maps/BWheat_1954-min.png");
        });
        $("#a_1959").on("click", function() {
                $("#map").attr("src", "/images/maps/BWheat_1959-min.png");
        });
        $("#a_1964").on("click", function() {
                $("#map").attr("src", "/images/maps/BWheat_1964-min.png");
        });
        $("#a_1969").on("click", function() {
                $("#map").attr("src", "/images/maps/BWheat_1969-min.png");
        });
        $("#a_1974").on("click", function() {
                $("#map").attr("src", "/images/maps/BWheat_1974-min.png");
        });
        $("#a_1978").on("click", function() {
                $("#map").attr("src", "/images/maps/BWheat_1978-min.png");
        });
        $("#a_1982").on("click", function() {
                $("#map").attr("src", "/images/maps/BWheat_1982-min.png");
        });
        $("#a_1987").on("click", function() {
                $("#map").attr("src", "/images/maps/BWheat_1987-min.png");
        });
        $("#a_1992").on("click", function() {
                $("#map").attr("src", "/images/maps/BWheat_1992-min.png");
        });
        $("#a_1997").on("click", function() {
                $("#map").attr("src", "/images/maps/BWheat_1997-min.png");
        });
        $("#a_2002").on("click", function() {
                $("#map").attr("src", "/images/maps/BWheat_2002-min.png");
        });
        $("#a_2007").on("click", function() {
                $("#map").attr("src", "/images/maps/BWheat_2007-min.png");
        });
        $("#a_2012").on("click", function() {
                $("#map").attr("src", "/images/maps/BWheat_2012-min.png");
		});
	
		var map_array = ["BWheat_1949-min.png", "BWheat_1954-min.png", "BWheat_1959-min.png", "BWheat_1964-min.png", "BWheat_1969-min.png", "BWheat_1974-min.png", "BWheat_1978-min.png", "BWheat_1982-min.png", "BWheat_1987-min.png", "BWheat_1992-min.png", "BWheat_1997-min.png", "BWheat_2002-min.png", "BWheat_2007-min.png", "BWheat_2012-min.png"];
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

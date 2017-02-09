$(document).ready(function() {
		var interval;
		$("#a_1949").on("click", function() {
                $("#map").attr("src", "/images/maps/BWheat_1949.png");
				clearAll(interval);
        });
        $("#a_1954").on("click", function() {
                $("#map").attr("src", "/images/maps/BWheat_1954.png");
        });
        $("#a_1959").on("click", function() {
                $("#map").attr("src", "/images/maps/BWheat_1959.png");
        });
        $("#a_1964").on("click", function() {
                $("#map").attr("src", "/images/maps/BWheat_1964.png");
        });
        $("#a_1969").on("click", function() {
                $("#map").attr("src", "/images/maps/BWheat_1969.png");
			
        });
        $("#a_1974").on("click", function() {
                $("#map").attr("src", "/images/maps/BWheat_1974.png");
        });
        $("#a_1978").on("click", function() {
                $("#map").attr("src", "/images/maps/BWheat_1978.png");
        });
        $("#a_1982").on("click", function() {
                $("#map").attr("src", "/images/maps/BWheat_1982.png");
        });
        $("#a_1987").on("click", function() {
                $("#map").attr("src", "/images/maps/BWheat_1987.png");
        });
        $("#a_1992").on("click", function() {
                $("#map").attr("src", "/images/maps/BWheat_1992.png");
        });
        $("#a_1997").on("click", function() {
                $("#map").attr("src", "/images/maps/BWheat_1997.png");
        });
        $("#a_2002").on("click", function() {
                $("#map").attr("src", "/images/maps/BWheat_2002.png");
        });
        $("#a_2007").on("click", function() {
                $("#map").attr("src", "/images/maps/BWheat_2007.png");
        });
        $("#a_2012").on("click", function() {
                $("#map").attr("src", "/images/maps/BWheat_2012.png");
		});
	
		var map_array = ["BWheat_1949.png", "BWheat_1954.png", "BWheat_1959.png", "BWheat_1964.png", "BWheat_1969.png", "BWheat_1974.png", "BWheat_1978.png", "BWheat_1982.png", "BWheat_1987.png", "BWheat_1992.png", "BWheat_1997.png", "BWheat_2002.png", "BWheat_2007.png", "BWheat_2012.png"];
		$("#play1").on("click", function() {
			$("#play1").prop("disabled", true);
			$("#play2").prop("disabled", true);
			var c = 0;
			interval = setInterval(function() {
				if (c>12) {
					clearInterval(interval);	
					$("#play1").prop("disabled", false);
					$("#play2").prop("disabled", false);
				}
				switch_func(c);
				c++;
			}, 500);
		
			function switch_func(c) {
				$("#map").attr("src", "/images/maps/"+map_array[c]);
			}
		});		
		$("#play2").on("click", function() {
			$("#play1").prop("disabled", true);
			$("#play2").prop("disabled", true);
			var c = 0;
			interval = setInterval(function() {
				if (c>12) {
					clearInterval(interval);	
					$("#play1").prop("disabled", false);
					$("#play2").prop("disabled", false);
				}
				switch_func(c);
				c++;
			}, 3000);
		
			function switch_func(c) {
				$("#map").attr("src", "/images/maps/"+map_array[c]);
			}
		});		
});

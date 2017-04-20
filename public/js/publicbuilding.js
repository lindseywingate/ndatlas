$(document).ready(function() {
	//shape js for switching pictures and text
	$("#emmons").on("click", function(e) {
		e.preventDefault();
		$("#content").html("<h2>Emmons County Courthouse</h2><p>Located in Linton, North Dakota, a small town about sixty miles southeast of Bismarck, the Emmons County Courthouse was built with the assistance of the Public Works Administration in 1934. The courthouse has the distinction of being the first building built in North Dakota under the Federal Emergency Relief Act, which was replaced a year later by the Works Progress Administration. Designed by J. Howard Ness of Fargo, the courthouse is one of nine buildings in North Dakota built using the Art Deco – Art Moderne style. The structure was built using bricks local to Linton, and Mankato stone. According to the Nomination form for the National Register of Historic Places, the building also features thirteen spandrels depicting scenes from Emmons County history.</p>");	
	});
	$("#oakspost").on("click", function(e) {
		e.preventDefault();
		$("#content").html("<h2>Oaks Post Office</h2><p>Although unassuming from the outside, there is some historical significance to the Oakes Post Office. The postmaster in 1934 announced that $49,000 would be set aside for the building and its fixtures, but the lowest contractor bid from McGough Brothers of St. Paul, was $34,800.  When ground broke in 1934, twenty local men desperately in need of work were employed to build the Post Office. The building is built in a style called starved classicism and is known for being very sparsely ornamented, if at all. Although the building’s shape is colonial revival in style, it lacks the revival design elements.</p>");
	});
	$("#jamestownaud").on("click", function(e) {
		e.preventDefault();
		$("#content").html("<h2>Jamestown City Auditorium</h2><p>There is little information available regarding the creation of the Jamestown City Auditorium. Much less is known of it than another auditorium built in the same year mere miles away in McElroy Park, also of Jamestown, North Dakota. The City Auditorium was built by the Works Progress Administration in 1936. Unfortunately, we do not know the architect or the contractor. The building no longer exists, as a 6,500-seat, multi-purpose Civic Center was built in 1973 and the smaller building was no longer needed.</p>");
	});
	$("mcelroyaud").on("click", function(e) {
		e.preventDefault();
		("#content").html("<h2>McElroy Park Auditorium</h2><p>McElroy Park Auditorium in Jamestown, North Dakota, was constructed in 1936, with the assistance of the Works Progress Administration. The auditorium was to be located within the spacious McElroy Park, which is still in use today although the auditorium is long gone. According to an email from Doug Hogan with Jamestown Parks and Recreation, the building was used for some time as an indoor skating rink, but was demolished sometime in the 1960’s. The town referred to the building as a “hippodrome” probably due to its large, curved sides. Since the building is no longer standing, one must rely on written descriptions and one photograph of the exterior. North Dakota: A Guide to the Northern Prairie State was written by another department of the New Deal, The WPA Federal Writer’s Project. The guide describes the building as, “[A] domical building, the design of its façade carried out in the straight lines and angles of modern architecture. Constructed with laminated truss-type arches which support the entire roof load, the auditorium has 25,000 sq. ft. of floor space unobstructed by supporting columns. Its acoustics is excellent owing to the vaulted shape of the roof and the absorbing quality of the timbers in the arches.” According to Hogan, the footprint of the building can still be seen at McElroy Park today. It is currently an outdoor skating rink.</p>");
	});
	$("memhall").on("click", function(e) {
		e.preventDefault();
		("#content").html("<h2>Memorial Hall</h2><p>The small town of Flasher, North Dakota is about half an hour southwest of Bismarck. The main street boasts most of the town’s activity including the Memorial Hall. The Memorial Hall, situated across the street from the Flasher’s post office is one among several Memorial Halls build in the state with WPA assistance. The hall was completed in 1936, and it features a plaque dedicating the building to fallen World War I and World War II soldiers. Unfortunately, like so many of the smaller WPA projects, it is difficult to locate much information about the construction of the building.</p>");
});



	//button js for switching maps	
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
});                	

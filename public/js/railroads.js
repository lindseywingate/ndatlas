function resizeNarrative() {
    $('#map,#narrative,#story,#map,body,html,#loadingDiv').css({
        'height': $(window).height()-54
    });
}
resizeNarrative();

function resetLoadingLocation() {
    $("#loading").css("left", ($("#mapDiv").width() - $("#narrative").width()) / 2);
}
resetLoadingLocation();

var resizeTimeout = -1;

$(window).resize(function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resizeNarrative, 500);
});

var map, layer, symbol, infoTemplate, query, featureLayer;
var visible = [];
var firstSet = true;
var oldLayer = 0;

require([
    "esri/Color",
    "esri/map",
    "esri/geometry/Extent",
    "esri/dijit/Scalebar",
    "esri/layers/FeatureLayer",
    "esri/layers/LayerInfo",
    "esri/layers/LayerDrawingOptions",
    "esri/renderers/DotDensityRenderer", 
    "esri/renderers/ScaleDependentRenderer",
    "esri/InfoTemplate",
    "esri/layers/ArcGISTiledMapServiceLayer",
    "esri/tasks/query",
    "esri/SpatialReference",
    "esri/tasks/QueryTask",
    "esri/graphic",
    "dojo/domReady!"
], function(Color, Map, Extent, Scalebar, FeatureLayer,LayerInfo, LayerDrawingOptions, DotDensityRenderer, ScaleDependentRenderer, InfoTemplate, ArcGISTiledMapServiceLayer, Query, SpatialReference, QueryTask, Graphic) {
    console.log($("#loading").css('left'));
    map = new Map("mapDiv", {
        //center: [-100.425, 47],
        //zoom: 8,
        extent: new Extent({"xmin":-663458,"ymin":924230,"xmax":0,"ymax":1336294,"spatialReference":{"wkid":102003}}),
        maxScale: 1000000,
        minScale: 5000000
        //basemap: "topo"
    });

    // add the basemap
    /*
    var streets = new ArcGISTiledMapServiceLayer("http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer", {
        opacity: 0.0,
        showAttribution: false
    });  
    map.addLayer(streets); 
    */

    layer = new esri.layers.ArcGISDynamicMapServiceLayer(mapUrl);
    //layer.setDisableClientCaching(true);

        var featureLayer = new FeatureLayer("http://undgeography.und.edu/geographyund/rest/services/ND125/WebMapND125/MapServer/" + {id: "nd_railroads_built_aband"}, {
          outFields: ["*"]
    });
        console.log(getCurrentLayer());
    console.log(featureLayer);

    // create our slider to show every 5 years after 1886
    layer.on("load", function(e) {
        values = [];
        for(i=1886; i<=2015; i++) {
        //$.each(startYears, function(index, value) {
            //console.log(index);
            //console.log(layer.layerInfos[value]);
             if (i == 1886) {
             values.push(i);
             }
             if (i % 5 == 0) {
                values.push(i);
             }
        //});
        }
        console.log(values);

        min = values[0];
        max = values[values.length-1];
        difference = (max - min);
        range = {
            'min': min,
            'max': max
        };

        $.each(values, function(index, value) {
            range['' + (100 - ((max - value) / difference * 100.0)) + '%'] = value;
        });
        console.log(range);

        $("#toggleSlider").noUiSlider({
            start: values[0],
            range: range,
            snap: true
        });

        $('#toggleSlider').noUiSlider_pips({
            mode: 'values',
            density: 10,
            values: values,
            stepped: true
        });

        // create a function for when the slider value is set
        $('#toggleSlider').on('set', function() {
            if (!firstSet) {
                map.graphics.clear();
            } else {
                firstSet = false;
            }
            map.infoWindow.hide();
            map.infoWindow.clearFeatures();
            showLoading();
            /*
            // prepare our layers for filtering
            currentLayers = [];
            $.each(backgroundLayers, function(index, value) {
                currentLayers.push(value);
            });
             */
                              //console.log(currentLayers);

            // find the index of this layer
            //currentLayers.push(getCurrentLayer());

            // show the visible layers
                              layer.setVisibleLayers(function(LayerInfo) {
                                                     subLayerIds : "34", "35", "36", "37", "38", "39", "40", "41"
                                                     });
            
            // see if we should scroll to a new layer
            /*
            for (var iYear = 0; iYear < startYears.length; ++iYear) {
                if (startYears[iYear] <= $(this).val()) {
                    if (endYears[iYear] > $(this).val() && iYear != oldLayer) {
                        // jump to new content
                        oldLayer = iYear;
                        console.log("Offset: " + $('#title' + iYear).offset().top + $("#story:not(:animated)").scrollTop() - 54);
                        $('#story').animate({
                            scrollTop: $('#title' + iYear).offset().top + $("#story:not(:animated)").scrollTop() - 54
                        }, 'slow');
                        break;
                    }
                }
            }
            */
            oldYear = $(this).val();
            
            // remove all styling from legendDiv
            $("#legendDiv").attr("style", "");

            // FILTER WITH
            var iYear = Math.floor($(this).val());
            var query = new Query();
                              query.objectIds = [features[0].attributes.OBJECTID];
                              query.outFields = ["*"];
            query.returnGeometry = true;
            query.where = "Built3 = " + iYear;

            console.log(iYear);
            console.log(query);

            featureLayer.queryFeatures(query, function(featureSet) {
                //remove all graphics on the maps graphics layer
                map.graphics.clear();
                console.log(featureSet);

                //QueryTask returns a featureSet.  Loop through features in the featureSet and add them to the map.
                dojo.forEach(featureSet.features, function(feature) {
                    // add the features
                    var graphic = feature;
                    graphic.setSymbol(symbol);

                    //Add graphic to the map graphics layer.
                    map.graphics.add(graphic);
                });

                map.graphics.redraw();
            });

            featureLayer.refresh();
        });

        // set as the current layer
        oldLayer = 0;
        $('#toggleSlider').val(min);
        
        //layer.setScaleRange(0, 0);
        layer.setVisibility(true);
    });

    // hide the loading icon when the dynamic layer finishes updating
    layer.on("update-end", hideLoading);

    // add the layer to the map
    map.addLayer(layer);
    map.addLayers([featureLayer]);

    // show the scalebar
    var scalebar = new Scalebar({
        map: map,
        scalebarUnit: "dual"
    });

    /*
    var legend = new Legend({
        map: map
    }, "legendDiv");
    legend.startup();
    */
});

function getCurrentLayer() {
    // find the index of this layer
    return 33;
}

function ToggleLayer(id) {
    map.graphics.clear();
    map.infoWindow.hide();
    map.infoWindow.clearFeatures();

    showLoading();
}

function hideLoading() {
    $("#loadingDiv").hide();
    $("#togglableLayers").removeAttr('disabled');
}

function showLoading() {
    $("#loadingDiv").show();
    $("#togglableLayers").attr('disabled', 'disabled');
}

$('#slider').click(function() {
    if ($(this).hasClass('expanded')) {
        $('#story').fadeOut(function() {
            $('#narrative').animate({width: 45});
            $('#mapWrapper').animate({right: 45}, function() {
                map.resize(true);
                map.reposition(true);
            });
            $('#slider').removeClass('expanded').find('i').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-left');
            resetLoadingLocation();
        });
    }
    else {
        $('#narrative').animate({width: 460}, function() {
            $('#slider').addClass('expanded').find('i').addClass('glyphicon-chevron-right').removeClass('glyphicon-chevron-left');
            $('#story').fadeIn();
            $('#mapWrapper').animate({right: 460}, function() {
                map.resize(true);
                map.reposition(true);
            });
            resetLoadingLocation();
        });
    }
});

$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

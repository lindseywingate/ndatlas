var express = require('express');
var parser = require('body-parser');
var app = express();

// initiate the server
app.use(parser());
app.set('view engine', 'jade');
app.set('views', __dirname+'/views');
app.locals.pretty = true;

// see if we are using the dev route
var url = require('url');
var dev = process.env.NDATLASDEV || 0;
if (dev) {
    dev = '/dev/';
} else {
    dev = '/';
}

app.use(dev, express.static(__dirname+'/public'));

//////////////////////////////////////
// START OF ROUTES
//////////////////////////////////////

app.get('/', function (req, res) {
    res.render('home', {
        'title': 'North Dakota Atlas',
        'active': 'home',
        'urlbase': dev,
        'url': url
    });
});

app.get('/map-home', function (req, res) {
    res.render('map-home', {
        'title': 'North Dakota Atlas | Map Homepage',
        'active': 'map-home',
        'urlbase': dev,
        'url': url
    });
});

app.get('/welcome', function (req, res) {
    res.render('welcome', {
        'title': 'North Dakota Atlas | Welcome',
        'active': 'welcome',
        'urlbase': dev,
        'url': url
    });
});

app.get('/students', function (req, res) {
    res.render('students', {
        'title': 'North Dakota Atlas | Students',        
        'active': 'students',
        'urlbase': dev,
        'url': url
    });
});

app.get('/development', function (req, res) {
    res.render('development', {
        'title': 'North Dakota Atlas | Development',
        'active': 'development',
        'urlbase': dev,
        'url': url
    });
});

///////////////// Maps /////////////////////////
<<<<<<< HEAD
app.get('/barley', function (req, res) {
	res.render('barley', {
		'title': 'North Dakota Atlas | Barley Production',
		'active': 'Barley',
		'urlbase': dev,
		'url': url
	});	
});

app.get('/corn', function (req, res) {
	res.render('corn', {
		'title': 'North Dakota Atlas | Corn Production',
		'active': 'corn',
		'urlbase': dev,
		'url': url
	});	
});

app.get('/soybeans', function (req, res) {
	res.render('soybeans', {
		'title': 'North Dakota Atlas | Soybeans Production',
		'active': 'soybeans',
		'urlbase': dev,
		'url': url
	});	
});

app.get('/wheat', function (req, res) {
	res.render('wheat', {
		'title': 'North Dakota Atlas | Wheat Production',
		'active': 'wheat',
		'urlbase': dev,
		'url': url
	});	
});

=======
>>>>>>> e18f611045210d87cab67d777fd0bdd83aaca92e
app.get('/agriculture', function (req, res) {
	res.render('agriculture', {
		'title': 'North Dakota Atlas | Agricultural Development',
		'active': 'agriculture',
		'urlbase': dev,
		'url': url
	});	
});

app.get('/churches', function (req, res) {
    res.render('churches', {
        'title': 'North Dakota Atlas | Country Churches',
        'active': 'churches',
        'urlbase': dev,
        'url': url
    });
});

app.get('/population', function (req, res) {
    res.render('population', {
        'title': 'North Dakota Atlas | Population Map',
        'active': 'population',
        'urlbase': dev,
        'url': url
    });
});

app.get('/railroads', function (req, res) {
    res.render('railroads', {
        'title': 'North Dakota Atlas | Railroads Map',
        'active': 'railroads',
        'urlbase': dev,
        'url': url
    });
});

app.get('/religion', function (req, res) {
    res.render('religion', {
        'title': 'North Dakota Atlas | Religious Affiliation Map',
        'active': 'religion',
        'urlbase': dev,
        'url': url
    });
});
app.get('/foreign', function (req, res) {
    res.render('foreign', {
        'title': 'North Dakota Atlas | Foreign Born Map',
        'active': 'foreign',
        'urlbase': dev,
        'url': url
    });
});

app.get('/ghost', function (req, res) {
    res.render('ghost', {
        'title': 'North Dakota Atlas | Ghost Towns Map',
        'active': 'ghost',
        'urlbase': dev,
        'url': url
    });
});

//////////////////////////////////////
// END OF ROUTES
//////////////////////////////////////

// start the server
app.listen(process.env.PORT || 8005, process.env.IP || '');

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var whisky = __webpack_require__(1);
	// var sports = require('../api/sports.json');
	// var movies = require('../api/movies.json');
	// var historic = require('../api/historic.json');
	
	
	
	var app = function() {
	  console.log('called')
	  whiskyList(whisky)
	}
	
	var whiskyList = function(whisky) {
	  var list = document.getElementById('list');
	  // var jsonString = JSON.parse(whisky);
	  console.log('function entered');
	  whisky.forEach(function(item) {
	    var liName = document.createElement('li');
	    var liLocation = document.createElement('li');
	    var liDescription = document.createElement('li');
	    var liImg = document.createElement('img');
	    liName.innerText = item.name;
	    liLocation.innerText = item.location;
	    liDescription.innerText = item.description;
	    liImg.src = item.img;
	    list.appendChild(liName);
	    list.appendChild(liLocation);
	    list.appendChild(liDescription);
	    list.appendChild(liImg);
	  })
	}
	
	window.onload = app;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = [
	{
	  "name":         "Ardbeg",
	  "location":     "Port Ellen",
	  "region":       "Islay",
	  "lat":          55.640752,
	  "lng":          6.108134,
	  "description":  "Ardbeg Distillery is a Scotch whisky distillery in Ardbeg on the south coast of the isle of Islay, Argyll and Bute, Scotland, in the Inner Hebrides group of islands.",
	  "img":          "/images/ardbeg.png"
	}, {
	  "name":         "Balvenie",
	  "location":     "Dufftown",
	  "region":       "Speyside",
	  "lat":          57.458685,
	  "lng":          3.127234,
	  "description":  "The Balvenie distillery is a Speyside single malt Scotch whisky distillery in Dufftown, Scotland, owned by William Grant & Sons.",
	  "img":          "/images/balvenie.png"
	}, {
	  "name":         "Glenfarclas",
	  "location":     "Ballindollach",
	  "region":       "Speyside",
	  "lat":          57.427020,
	  "lng":          3.316349,
	  "description":  "Glenfarclas distillery is a Speyside whisky distillery in Ballindalloch, Scotland. Glenfarclas translates as meaning valley of the green grass. The distillery is owned and run by the Grant family.",
	  "img":          "/images/glenfarclas.gif"
	}, {
	  "name":         "Glenfiddich",
	  "location":     "Dufftown",
	  "region":       "Speyside",
	  "lat":          57.454753,
	  "lng":          3.128639,
	  "description":  "Glenfiddich is a Speyside single malt Scotch whisky owned and produced by William Grant & Sons in Dufftown, Scotland. Glenfiddich means ‘Valley of the Deer' in Scottish Gaelic, hence the presence of a stag symbol on Glenfiddich bottles.",
	  "img":          "/images/glenfiddich.png"
	}, {
	  "name":         "Highland Park",
	  "location":     "Kirkwall",
	  "region":       "Islands",
	  "lat":           58.967960,
	  "lng":           2.955335,
	  "description":   "Highland Park distillery is a Scotch whisky distillery based in Kirkwall, Orkney. It is the most northerly whisky distillery in Scotland, half a mile farther north than that at Scapa distillery.",
	  "img":          "/images/highland_park.jpeg"
	}, {
	  "name":         "Laphroaig",
	  "location":     "Port Ellen",
	  "region":       "Islay",
	  "lat":          55.630075,
	  "lng":          6.152225,
	  "description":  "Laphroaig distillery is an Islay single malt Scotch whisky distillery. It is named for the area of land at the head of Loch Laphroaig on the south coast of the Isle of Islay.",
	  "img":          "/images/laphroaig.jpeg"
	}, {
	  "name":         "The Macallan",
	  "location":     "Craigellachie",
	  "region":       "Speyside",
	  "lat":          57.484623,
	  "lng":          3.206944,
	  "description":  "The Macallan distillery is a single malt Scotch whisky distillery in Craigellachie, Moray. The Macallan Distillers Ltd, is a wholly owned subsidiary of the Edrington Group which purchased the brand from Highland Distillers in 1999.",
	  "img":          "/images/macallan.jpeg"
	}, {
	  "name":         "Pulteney",
	  "location":     "Wick",
	  "region":       "Highlands",
	  "lat":          58.435383,
	  "lng":          3.084711,
	  "description":  "The Pulteney Distillery is a malt whisky production and aging facility in the Pulteneytown area of Wick, Caithness, in the Highland area of Scotland.",
	  "img":          "/images/pulteney.jpeg"
	}, {
	  "name":         "Springbank",
	  "location":     "Mull of Kintyre",
	  "region":       "Campbeltown",
	  "lat":          55.425747,
	  "lng":          5.608731,
	  "description":  "Springbank distillery is one of the last surviving producers of Campbeltown Single Malts. The distillery, located on the southern Kintyre peninsula, produces three distinct types of single malt Scotch whisky.",
	  "img":          "/images/springbank.jpeg"
	}, {
	  "name":         "Talisker",
	  "location":     "Carbost, Isle of Skye",
	  "region":       "Islands",
	  "lat":          57.302313,
	  "lng":          6.356749,
	  "description":  "Talisker distillery is an Island single malt Scotch whisky distillery based in Carbost, Scotland—the only distillery on the Isle of Skye.",
	  "img":          "/images/talisker.png" 
	}
	];


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
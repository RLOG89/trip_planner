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
	var sports = __webpack_require__(2);
	var movies = __webpack_require__(3);
	var historic = __webpack_require__(4);
	
	
	
	var app = function() {
	  console.log("here");
	  var whiskyButton = document.getElementById('distilleries');
	  var whiskyActive = false;
	  whiskyButton.onclick = function() {
	    if (whiskyActive) {
	      whiskyActive = false;
	      populateList(whisky,true);
	    } else {
	      whiskyActive = true;
	      populateList(whisky);
	    }
	  }
	};
	
	  //   populateList(sports);
	  //   populateList(movies);
	  //   populateList(historic);
	  // }
	// var populateList = function(thing) {
	//   var list = document.getElementById('list');
	//   thing.forEach(function(item) {
	//     var liName = document.createElement('li');
	//     var liLocation = document.createElement('li');
	//     var liDescription = document.createElement('li');
	//     var liImg = document.createElement('img');
	//     liName.innerText = item.name;
	//     liLocation.innerText = item.location;
	//     liDescription.innerText = item.description;
	//     liImg.src = item.img;
	//     list.appendChild(liName);
	//     list.appendChild(liLocation);
	//     list.appendChild(liDescription);
	//     list.appendChild(liImg);
	//   })
	// };
	
	var populateList = function(thing,clear) {
	  var list = document.getElementById('list');
	  list.innerHTML = "";
	  if (clear) return;
	  thing.forEach(function(item) {
	    var destination = document.createElement('li');
	    var checkbox = document.createElement('input');
	    checkbox.type = 'checkbox';
	    checkbox.name = item.name;
	    checkbox.value = false;
	    checkbox.id = item.name;
	
	    destination.innerText = item.name +', ' + item.location;
	    list.appendChild(destination);
	    list.appendChild(checkbox);
	  })
	};
	
	
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
	  "img":          "/images/highland_park.jpg"
	}, {
	  "name":         "Laphroaig",
	  "location":     "Port Ellen",
	  "region":       "Islay",
	  "lat":          55.630075,
	  "lng":          6.152225,
	  "description":  "Laphroaig distillery is an Islay single malt Scotch whisky distillery. It is named for the area of land at the head of Loch Laphroaig on the south coast of the Isle of Islay.",
	  "img":          "/images/laphroaig.jpg"
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


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = [
	{
	  "lat": 56.346025, 
	  "lng": 2.802696,
	  "sport": "Golf",
	  "location": "St. Andrews",
	  "name": "The Old Course",
	  "description": "The oldest and most iconic golf course in the world. The Swilcan Bridge and Hell Bunker are recognised across the globe, yet the greatest feature of the Old Course is that despite its grand status it remains a public golf course, open to all.",
	  "img": "/images/the_old_course.jpg"
	},
	{
	  "lat": 55.942908, 
	  "lng": 3.240764,
	  "sport": "Rugby",
	  "location": "Edinburgh",
	  "name": "Murrayfield Stadium",
	  "description": "Murrayfield Stadium (known as BT Murrayfield Stadium for sponsorship reasons, or usually just known as Murrayfield) is a sports stadium located in the west end of Edinburgh, the capital of Scotland. Its all-seater capacity is 67,800 which makes it the largest stadium in Scotland and the fifth largest in the United Kingdom.",
	  "img": "/images/murrayfield.jpg"
	},
	{
	  "lat": 57.139886, 
	  "lng": 3.670441,
	  "sport": "Winter Sports",
	  "name": "Cairngorm Mountain",
	  "location": "Aviemore",
	  "description": "Cairngorm Mountain has a reputation as one of the most beautiful - and sometimes challenging - places to ski in the UK, as well as boasting Scotland's only funicular railway.",
	  "img": "/images/cairngorm.jpg"
	},
	{
	  "lat": 56.130813, 
	  "lng": 3.506044,
	  "sport": "Motor Racing",
	  "name": "Knockhill Racing Circuit",
	  "location": "Dunfermline",
	  "description": "Knockhill Racing Circuit is a motor racing circuit in Fife, Scotland. It opened in September 1974 and is Scotland's national motorsport centre. The circuit is located in the countryside about 6 miles north of Dunfermline.",
	  "img": "/images/knockhill.jpg"
	},
	{
	  "lat": 57.048235, 
	  "lng": 4.799309,
	  "sport": "Adventure Sports",
	  "name": "Active Highs",
	  "location": "Spean Bridge",
	  "description": "Active Highs offer outdoor activities & activity breaks in Scotland. White Water Rafting, Canyoning, Gorge Walking, Canoeing, Kayaking, Climbing, Abseiling.",
	  "img": "/images/active_highs.jpg"
	},
	{
	  "lat": 55.847547, 
	  "lng": 4.207336,
	  "sport": "Athletics/Cycling",
	  "name": "Emirates Arena",
	  "location": "Glasgow",
	  "description": "The Indoor Arena is a custom built arena ideal for hosting any number of sporting events. It has capacity for up to 7,000 spectators and most recently staged the badminton competition of the Glasgow 2014 Commonwealth Games.",
	  "img": "/images/emirates_arena.jpg"
	},
	{
	  "lat": 55.850395, 
	  "lng": 4.205629,
	  "sport": "Football",
	  "name": "Celtic Park",
	  "location": "Glasgow",
	  "description": "Raucous home stadium of Celtic FC",
	  "img": "/images/celtic_park.jpg"
	},
	{
	  "lat": 55.947859, 
	  "lng": 4.928009,
	  "sport": "Highland Games",
	  "name": "Cowal Highland Gathering",
	  "location": "Dunoon",
	  "description": "The Cowal Highland Gathering (also known as the Cowal Games) is an annual Highland games event held in the Scottish town of Dunoon, Argyll, over the final weekend in August.",
	  "img": "/images/cowel_highland_games.jpg"
	},
	
	{
	  "lat": 56.823823, 
	  "lng": 5.101546,
	  "sport": "Shinty",
	  "name": "Fort William Shinty Club",
	  "location": "Fort William",
	  "description": "One of the oldest and most prestigious shinty clubs in Scotland. Fort William Shinty Club are the most decorated shinty club in Fort William.",
	  "img": "/images/fort_william_shinty_club.jpg"
	},
	{
	  "lat": 55.012910, 
	  "lng": 3.159003,
	  "sport": "Shooting",
	  "name": "Westlands Country Park",
	  "location": "Annan",
	  "description": "Based in Dumfries & Galloway, only 10 minutes drive from the motorway. One of the country’s first class locations for clay pigeon shooting and fishing.",
	  "img": "/images/westlands_country_park.jpg"
	}
	
	]


/***/ },
/* 3 */
/***/ function(module, exports) {

	 module.exports = [
	 {
	  "name": "Braveheart",
	  "location": "Fort William",
	  "lat": 56.8198,
	  "long": 5.1052,
	  "description": "When his secret bride is executed for assaulting an English soldier who tried to rape her, William Wallace begins a revolt against King Edward I of England.",
	  "img": "/images/braveheart.jpg"
	},
	{
	  "name": "Local Hero",
	  "location": "Pennan",
	  "lat": 57.6774,
	  "long": 2.2600,
	  "description": "An American oil company sends a man to Scotland to buy up an entire village where they want to build a refinery. But things don't go as expected",
	  "img": "/images/local_hero.jpg"
	},
	{
	  "name": "Gregory's Girl",
	  "location": "Cumbernauld",
	  "lat": 55.9457,
	  "long": 3.9925,
	  "description": "Gregory is a normal teen who is infatuated with a classmate. He must work to win her affection",
	  "img": "/images/gregorys_girl.jpg"
	},
	{
	  "name": "Restless Natives",
	  "location": "Edinburgh",
	  "lat": 55.9533,
	  "long": 3.1883,
	  "description": "Two Scottish friends become local folk heroes and tourist attractions when they start holding up tour buses with novelty items",
	  "img": "/images/restless_natives.jpg"
	},
	{
	  "name": "Rob Roy",
	  "location": "GlenCoe",
	  "lat": 56.6826,
	  "long": 5.1023,
	  "description": "In 1713 Scotland, Rob Roy MacGregor is wronged by a nobleman and his nephew, becomes an outlaw in search of revenge while fleeing the Redcoats, and faces charges of being a Jacobit",
	  "img": "/images/rob_roy.jpg"
	},
	{
	  "name": "Angels Share",
	  "location": "Balblair Distillery",
	  "lat": 57.8399,
	  "long": 4.1812,
	  "description": "Narrowly avoiding jail, new dad Robbie vows to turn over a new leaf. A visit to a whisky distillery inspires him and his mates to seek a way out of their hopeless lives",
	  "img": "/images/angels_share.jpg"
	},
	{
	  "name": "Trainspotting",
	  "location": "Edinburgh",
	  "lat": 55.9533,
	  "long": 3.1883,
	  "description": "Renton, deeply immersed in the Edinburgh drug scene, tries to clean up and get out, despite the allure of the drugs and influence of friends",
	  "img": "/images/trainspotting.jpg"
	},
	{
	  "name": "Whisky Galore",
	  "location": "Eriskay",
	  "lat": 57.0727,
	  "long": 7.2924,
	  "description": "Scottish islanders try to plunder 50,000 cases of whisky from a stranded ship",
	  "img": "/images/whisky_galore.jpg"
	},
	{
	  "name": "The Wicker Man",
	  "location": "Summerisle",
	  "lat": 58.0333,
	  "long": 5.4667,
	  "description": "A police sergeant is sent to a Scottish island village in search of a missing girl whom the townsfolk claim never existed. Stranger still are the rites that take place there",
	  "img": "/images/wicker_man.jpg"
	},
	{
	  "name": "The 39 nine steps",
	  "location": "Fourth Rail Bridge",
	  "lat": 56.0006,
	  "long": 3.3884,
	  "description": "A man in London tries to help a counterespionage agent. But when the agent is killed and the man stands accused, he must go on the run to both save himself and also stop a spy ring which is trying to steal top secret information",
	  "img": "/images/39_steps.jpg"
	}];

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = [
	{
	  "lat": 55.949099, 
	  "lng": 3.199871,
	  "name": "Edinburgh Castle",
	  "location": "Edinburgh",
	  "description": "Edinburgh Castle is a historic fortress which dominates the skyline of the city of Edinburgh, Scotland, from its position on the Castle Rock. Its importance as a part of Scotland's national heritage was recognised increasingly from the early 19th century onwards, and various restoration programmes have been carried out over the past century and a half. As one of the most important strongholds in the Kingdom of Scotland, Edinburgh Castle was involved in many historical conflicts from the Wars of Scottish Independence in the 14th century to the Jacobite Rising of 1745.",
	  "img": "/images/edinburgh_castle.jpg",
	},
	{
	  "lat": 59.0487,
	  "lng": 3.3417,
	  "name": "Skara Brae Prehistoric Village",
	  "location": "Stromness",
	  "description": "The Neolithic settlement of Skara Brae is one of the best preserved groups of prehistoric houses in Western Europe. Uncovered by a storm in 1850, Skara Brae gives a remarkable picture of life 5,000 years ago, before Stonehenge was built. Explore this prehistoric village and see ancient homes fitted with stone beds, dressers and seats. A replica house allows visitors to explore its interior, while the visitor centre provides touch-screen presentations, fact-finding quizzes and an opportunity to see artefacts discovered during the archaeological excavations of the 1970s.",
	  "img": "/images/skara_brae.jpg"
	},
	{
	  "lat": 57.4735,
	  "lng": 4.0732,
	  "name": "Clava Cairns",
	  "location": "Inverness",
	  "description": "Clava Cairns are a well-preserved Bronze Age cemetery complex of passage graves; ring cairns, kerb cairns and standing stones in a beautiful setting. Clava Cairns or the Prehistoric Burial Cairns of Bulnuaran of Clava are a group of three Bronze Age cairns located near Inverness. A hugely significant and exceptionally well preserved prehistoric site, Clava Cairns is a fantastic example of the distant history of Highland Scotland, dating back about 4,000 years.",
	  "img": "/images/clava_cairns.jpg"
	},
	{
	  "lat": 58.1975,
	  "lng": 6.7452,
	  "name": "Calanais Standing Stones",
	  "location": "Stornoway",
	  "description": "Walk among the megaliths at one of Scotland’s most magnificent and best-preserved Neolithic monuments. The Calanais Standing Stones are an extraordinary cross-shaped setting of stones erected 5,000 years ago. They predate England’s famous Stonehenge monument, and were an important place for ritual activity for at least 2,000 years.",
	  "img": "/images/calanais.jpg"
	},
	{
	  "lat": 55.9672, 
	  "lng": 4.0670,
	  "name": "Antoine Wall",
	  "location": "Falkirk",
	  "description": "The fascinating World Heritage Site of the Antonine Wall, once the most northern frontier of the Roman Empire in Britain, today offers great walking routes surrounded by nature. This three to four meters high stone and turf fortification stretches for nearly 60km across the Central Belt of Scotland between the towns of Bo’ness on the Firth of Forth and Old Kilpatrick on the Firth of Clyde, and is a popular site. Despite the passage of time, substantial lengths of the wall survived. The best preserved stretch of ditch, the 8km long Watling Lodge, is set in attractive countryside with oak woodland in Falkirk.",
	  "img": "/images/antoine_wall.jpg"
	},
	{
	  "lat": 56.5622, 
	  "lng": 2.5824,
	  "name": "Arbroath Abbey",
	  "location": "Arbroath",
	  "description": "Explore the substantial ruins of a Tironensian monastery, founded by William the Lion in 1178, who is buried in Arbroath Abbey. Arbroath Abbey is famously associated with the Declaration of Arbroath of 1320, which asserted Scotland's independence from England. Parts of the abbey church and domestic buildings remain, notably the gatehouse range and the abbot's house. Visitors can enjoy the herb garden along the south wall of the abbey church. The visitor centre provides a walk through audio-visual with a sound loop system. There is also a staff operated platform to enable disabled access to the upper viewing area.",
	  "img": "/images/arbroath_abbey.jpg"
	},
	{
	  "lat": 56.1334, 
	  "lng": 5.4869,
	  "name": "Kilmartin Glen",
	  "location": "Kilmartin",
	  "description": "Kilmartin Glen is located between Oban and Lochgilphead, surrounding the village of Kilmartin, on the west of Scotland. The area spans 5,000 years with a multitude of cairns, standing stones, carved rock, stone circles, forts and castles. Kilmartin Glen is considered to have one of the most important concentrations of Neolithic and Bronze Age remains in Scotland. There are more than 350 ancient monuments within a six mile radius of the village, with 150 of them being prehistoric. Monuments include standing stones, a henge monument, numerous cists, and a ‘linear cemetery’ comprising five burial cairns.",
	  "img": "/images/kilmartin_glen.jpg"
	},
	{
	  "lat": 55.8627, 
	  "lng": 4.2311,
	  "name": "The Necropolis",
	  "location": "Glasgow",
	  "description": "The Glasgow Necropolis is a Victorian cemetery in Glasgow, Scotland. It is on a low but very prominent hill to the east of Glasgow Cathedral (St. Mungo's Cathedral). Fifty thousand individuals have been buried here. Typically for the period only a small percentage are named on monuments and not every grave has a stone. Approximately 3500 monuments exist here.",
	  "img": "/images/necropolis_glasgow.jpg"
	},
	{
	  "lat": 58.9966, 
	  "lng": 3.1882,
	  "name": "Maeshowe Chambered Cairn",
	  "location": "Stenness",
	  "description": "Maeshowe is the finest chambered tomb in north west Europe and is more than 5,000 years old. Viking crusaders broke into the cairn in the 12th century and carved graffiti runes on the walls of the main chamber. Maeshowe is part of the Heart of Neolithic Orkney World Heritage Site, along with Skara Brae, the Ring of Brodgar and the Stones of Stenness. Admission to Maeshowe is through a timed ticket that gives a set time for the start of the guided tour. All visitors are required to book in at Tormiston Mill which is the visitor centre for Maeshowe. ",
	  "img": "/images/maeshowe_chambered_cairn.jpg"
	},
	{
	  "lat": 56.1238, 
	  "lng": 3.9474,
	  "name": "Stirling Castle",
	  "location": "Stirling",
	  "description": "Stirling Castle is one of Scotland's most historically important sites and was once a favoured residence of the Stewart kings and queens who held grand celebrations at the castle. Knights, nobles and foreign ambassadors once flocked to Stirling Castle to revel in its grandeur with its superb sculptures and beautiful gardens. It was a favoured residence of the Stewart kings and queens who held grand celebrations from christenings to coronations. Today you can meet the costumed characters in the roles of bodyguards, court officials, maids of honour and servants who will welcome you into 16th century life",
	  "img": "/images/stirling_castle.jpg"
	}
	
	]


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
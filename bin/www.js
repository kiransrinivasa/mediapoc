// This will be our application entry. We'll setup our server here.
const http = require('http');
const app = require('../app'); // The express app we just created
const db = require('../server/models/index.js');
var config = require('../server/config/config.json');

var visitorsData = [];

//var displayController = require('../server/controllers/display.js');

var Media = require('../server/models').Media;
var News = require('../server/models').News;
var Sequelize = require('sequelize');
const Op = Sequelize.Op;


const port = parseInt(process.env.PORT, 10) || config.port;

app.set('port', port);

const server = http.createServer(app);

const io = require('socket.io')(server);

io.on('connection', function(socket) {
  const host = (config.host).concat(":",config.port)
  console.log('socket.handshake.headers.host = ' + socket.handshake.headers.host);
  console.log('host = ' + host);
  console.log('socket.handshake.headers.referer = ' + socket.handshake.headers.referer);
  console.log('config.host + config.dashboardEndpoint = ' + host + config.dashboardEndpoint);
  if (socket.handshake.headers.host === host
  && socket.handshake.headers.referer.indexOf(host + config.dashboardEndpoint) > -1) {

    // if someone visits '/dashboard' send them the computed visitor data
    io.emit('updated-stats',  {
		name: 'Welcome to BVK Media Tab - ABC Saloon Inc.',
		file: '/images/Welcome-Were-Glad-Youre-Here.jpg',
		type: 'image/jpeg'
	});

  }

  // a user has visited our page - add them to the visitorsData object
  socket.on('visitor-data', function(data) {
    visitorsData[socket.id] = data;

    // compute and send visitor data to the dashboard when a new user visits our page
    //computeStats();
  });

  socket.on('disconnect', function() {
    // a user has left our page - remove them from the visitorsData object
    delete visitorsData[socket.id];

    // compute and send visitor data to the dashboard when a user leaves our page
    //computeStats();
  });
});


setInterval(computeStats, 1000);


function computeStats()
{
    // current time 0 - 59
    // 0 - video
    // 1 - image
    // 2 - news
    // 3 - news item
    // 4 - weather

    var date = new Date();
    var current_min = date.getMinutes();
    var current_sec = date.getSeconds();
    if (current_sec === 1)
    {
	    console.log(`The computeStats is called ! at`,current_sec);

	    current_min = current_min + 1;

	    if (current_min % 5 == 0){
		    getVideoMedia().then(function(result){
			   io.emit('updated-stats',  {
				    name: result.name,
				    file: result.file,
				    type: result.type
				  });
			});
	    }

	    if (current_min % 5 == 1){
		    getImageMedia().then(function(result){
			   io.emit('updated-stats',  {
				    name: result.name,
				    file: result.file,
				    type: result.type
				  });
			});
	    }

	    if (current_min % 5 == 2){
        getNews().then((result) => {
          console.log("News from pstgresql------");
          console.log(JSON.stringify(result[0].news_arr,null,2));
          console.log("-----------------------");
          io.emit('updated-stats',  {
             name: 'Top News',
             file: result[0].news_arr,
             type: 'news'
           });
        });



	    }

	    if (current_min % 5 == 3){
		    getNewsItem().then(function(result){
			   io.emit('updated-stats',  {
				    name: result.title,
				    file: result.image,
				    type: 'news-item'
				  });
			});
	    }

	    if (current_min % 5 == 4){
		   var result = getWeather();
		   io.emit('updated-stats',  {
			    name: result.name,
			    file: result.file,
			    type: 'image/weather'
			  });
	    }


    }
}

function getVideoMedia() {
   return Media.find({
   	where: { active : true, type : { [Op.like]: 'video%'} },
   	order: [Sequelize.fn('RANDOM'),],limit:1, raw: true});
}

function getImageMedia() {
   return Media.find({
   	where: { active : true, type : { [Op.like]: 'image%'} },
   	order: [Sequelize.fn('RANDOM'),],limit:1, raw: true});
}

function getNews() {
  /*
   return News.find({
   	where: { active : true, category : 'top' },
   	order: [Sequelize.fn('RANDOM'),],limit:5, raw: true});
  */
  //var query ="SELECT array_to_json(array_agg(\"News\")) FROM \"News\" WHERE \"News\".\"active\" = true AND \"News\".\"category\" = 'top'  ORDER BY RANDOM() LIMIT 5";
  var query ="SELECT json_agg(\"News\") as news_arr FROM \"News\" WHERE \"News\".\"active\" = true AND \"News\".\"category\" = 'top'  ORDER BY RANDOM() LIMIT 5";

  return db.sequelize.query(query, { type: db.sequelize.QueryTypes.SELECT})

}

function getNewsItem() {
   return News.find({
   	where: { active : true, category : 'top' },
   	order: [Sequelize.fn('RANDOM'),],limit:1, raw: true});
}

function getWeather(){
	return {name : 'Weather Today', file : 'https://forecastgmu.files.wordpress.com/2013/12/weather2.jpg'};
}
server.listen(port, () => {
  console.log(`The server is running at localhost:${port}`);
});

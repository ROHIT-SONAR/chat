const express = require('express');
const app = express();
const port = 3000

app.set('view engine', 'ejs');
app.set('views', __dirname + '/view');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/index', function(req, res){

	res.render('index',{user:"John Smith",title:"testing"}); 
});

var server = app.listen(port, () => console.log(`app listening on port ${port}!`))

var connection = new Array();

const io =require('socket.io')(server);
io.on('connection',(socket)=>{

	connection.push(socket);
	console.log(`${connection.length} client connected `);

	socket.on('test',function(data){
		console.log("socket working");
	})

})
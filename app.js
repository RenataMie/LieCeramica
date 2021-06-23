require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const axios = require ("axios");



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
	res.render("home");
});



app.get("/pecas", function(req, res){
	res.render("pecas")

	// axios.get("https://graph.instagram.com/me/media?&fields=id,children{media_url},username,timestamp,caption,media_url,thumbnail_url,media_type,permalink&limit=200&access_token=" + process.env.TOKEN)
	// .then((response) => {
	// 	let postsArray = [];

	// 	response.data.data.map((posts) => {
	// 		postsArray.push(posts);
	// 	});

	// 	res.render("pecas", {posts:postsArray});
	// })

	// .catch((err) => {
	// 	console.log(err);
	// });


});

app.get("/encomendas", function(req, res){
	res.render("encomendas");
});
	


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}


app.listen(port, function(){
	console.log("Sever started");

});





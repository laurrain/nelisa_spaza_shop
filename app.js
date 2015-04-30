<<<<<<< HEAD
var express = require("express")
var exphbs = require("express-handlebars")


var app = express();
=======
'use strict';

var express = require('express')
var exphbs  = require('express-handlebars')
var app = express()

>>>>>>> 1e6cf3bceab139b2c43456a15feb7c3abb7284e5

app.engine("handlebars", exphbs({defaultLayout:"main"}))
app.set("view engine", "handlebars")

app.use("/static", express.static("views"))
app.use("/static", express.static("."))

<<<<<<< HEAD

app.get("/", function(req, res){
	res.render("home")
})
=======
app.get("/", function(req, res){
	res.render("home")
})

>>>>>>> 1e6cf3bceab139b2c43456a15feb7c3abb7284e5
app.get("/category_earnings", function(req, res){
	var data = require("./category_earnings.json")

	res.render("category_earnings", {data:data})
})

app.get("/category_sales_per_day_per_week", function(req, res){
	var data = require("./category_per_day_per_week.json")

	res.render("category_sales_per_day_per_week", {data:data})
})

app.get("/category_profits", function(req, res){
	var data = require("./category_profits.json")

	res.render("category_profits", {data:data})
})

app.get("/daily_profits", function(req, res){
	var data = require("./daily_profits.json")

	res.render("daily_profits", {data:data})
})

app.get("/entire_stock", function(req, res){
	var data = require("./entire_stock.json")

	res.render("entire_stock", {data:data})
})

app.get("/regular_sales", function(req, res){
	var data = require("./most_regular_sales.json")

	res.render("regular_sales", {data:data})
})

<<<<<<< HEAD
app.get("/popular_categories", function(req, res){
	var data = require("./popular_categories.json")

	res.render("popular_categories", {data:data})
})

app.get("/popular_products", function(req, res){
	var data = require("./popular_products.json")

	res.render("popular_products", {data:data})
})

app.get("/products_price_cost", function(req, res){
	var data = require("./price_and_cost.json")

	res.render("products_price_cost", {data:data})
})

app.get("/product_earnings", function(req, res){
	var data = require("./product_earnings.json")

	res.render("product_earnings", {data:data})
})

=======
>>>>>>> 1e6cf3bceab139b2c43456a15feb7c3abb7284e5
app.get("/products_per_day_per_week", function(req, res){
	var data = require("./product_per_day_per_week.json")

	res.render("products_per_day_per_week", {data:data})
})

<<<<<<< HEAD
app.get("/product_profits", function(req, res){
	var data = require("./product_profits.json")

	res.render("product_profits", {data:data})
})

=======
>>>>>>> 1e6cf3bceab139b2c43456a15feb7c3abb7284e5
app.get("/sales_per_day", function(req, res){
	var data = require("./sales_per_day.json")

	res.render("sales_per_day", {data:data})
})

app.get("/stock_rates", function(req, res){
	var data = require("./stock_rates.json")

	res.render("stock_rates", {data:data})
})

<<<<<<< HEAD
app.get("/supplier_popular_product", function(req, res){
	var data = require("./supplier_pop.json")

	res.render("supplier_popular_product", {data:data})
})
=======

>>>>>>> 1e6cf3bceab139b2c43456a15feb7c3abb7284e5

app.get("/supplier_profitable_product", function(req, res){
	var data = require("./supplier_profitable.json")

	res.render("supplier_profitable_product", {data:data})
})

<<<<<<< HEAD
var server = app.listen(3000, function(){

	console.log("server is running on " + server.address().address + ":" +server.address().port)

})
=======
app.get("/*", function(req, res){
	res.render("home")
})

var port = process.env.PORT || 3000;

var server = app.listen(port, function(){

	console.log("server is running on " + server.address().address + ":" +server.address().port)

})
>>>>>>> 1e6cf3bceab139b2c43456a15feb7c3abb7284e5

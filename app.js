import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import mongoose from "mongoose";

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); // css style sheet will go into a public folder

mongoose.connect("mongodb://localhost:27017/wikiDB", {urlencoded: true, useUnifiedTopology: true});

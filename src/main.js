/*
import { Screen2Template } from "calculate";
//import { Screen3Template, MyRadioGroup } from "selectfood";
//import { buttonName } from "buttons";
import { Screen3Template, MyRadioGroup, selected, amount, food, total} from "selectfood";

import { 



var foodlist = ["Plate of Spaghetti", "Banana", "Pop Tart", "Big Mac", "Medium Fries","Taco",
	"Slice of bread", "Chocolate Cake", "Plate of Pad Thai","IHOP Chorizo Fiesta Omelette",
	"Bottle of Coconut Water", "Boba milk tea with grass jelly", "Cup of black coffee", "Grande Caramel Frappuccino"];

MyRadioGroup = RadioGroup.template($ => ({
    style: new Style( { font: " 10px", color: "white" }),
         trace(buttonName);
        //	food = buttonName;
        	if (buttonName == "Spaghetti"){

//var food;
var spaghetti = 600;
var banana = 105;
var tart= 200;
var bigmac = 563;
var fries = 365;
var taco = 189;
var bread = 79;
var chococake = 350;
var padthai = 889;
var omelette = 1990;
var water = 120;
var milktea = 316;
var coffee = 5;
var frappuccino = 420;



if (selected == "Spaghetti"){
	trace("food is now:" + food + "\n");
	trace("food is now:" + food + "\n");


//var amount = 2;

//var calorie = function(food, amount){
//	return food*amount;
//}

//var total = Math.round(calorie(food, amount)) ;

var blueSkin = new Skin({ fill:"blue" });
//    contents: [
//    new Label({ top: 5, height: 30, left: 0, right: 0, style: new Style( { font: "bold 20px", color: "black" } ), 
//    ]

   //     new Label({ top: 5, height: 10, left: 50, right: 200, style: new Style( { font: "15px", color: "black" } ), 
   //     new Label({ top: -10, height: 10, left: 80, right: 0, style: new Style( { font: "15px", color: "black" } ), 
       	trace("--------------total is: " + total + "-------\n"),
        
        
        
        new Label({ top: 7, height: 10, left: 0, right: 0, style: new Style( { font: "12px", color: "black" } ), 
        new Label({ top: 7, height: 10, left: 0, right: 0, style: new Style( { font: "12px", color: "black" } ), 
	      Label($, { 
	      Label($, { 
	      Label($, { 
	      Label($, { 
	       Label($, { 
	            Label($, { 
	      Label($, { 
	      Label($, { 
	      Label($, { 
	       Label($, { 
	      Label($, { 

	       Label($, { 
	      Label($, { 
	      }),    
	      Label($, { 


    style: new Style( { font: "15px", color: "white" }),

var navBar = new Line({ bottom: 188, height: 22, left: 0, right: 0,
    style: new Style( { font: " 12px", color: "white" }),
//        new NavButton({ string: "select amount", nextScreen: Screen3Template}),
//        new NavButton({ string: "back", nextScreen: Screen1Template}),

    ]

//insert icons
let convert = new Picture({bottom: 14, height: 13, left: 0, right: 100, url: "assets/convert.png"});
let calorie = new Picture({bottom: 210, height: 30, left: 0, right: 180, url: "assets/calorie.png"});
let select = new Picture({bottom: 192, height: 13, left: 0, right: 180, url: "assets/food.png"});
let calculate = new Picture({bottom: 14, height: 15, left: 220, right: 0, url: "assets/calculator.png"});

application.add(convert);
application.add(select);

select.opacity = 0.6;
convert.opacity = 0.9;
import { 

import {

//back navbar
import { Screen1Template } from "main";



//instruction
export var Screen3Template = Column.template($ => ({

         left: 10, right: 0, top: 3, height: 25, style: new Style( { font: "bold 20px", color: "white" } ), 
//      new Picture({bottom: 210, height: 30, left: 0, right: 180, url: "assets/calorie.png"}),

//        new NavButton({ string: "select amount", nextScreen: Screen3Template}),
//        new NavButton({ string: "back", nextScreen: Screen1Template}),

//      Label($, {  



export var selected;
export var total;
//selection list
    style: new Style( { font: " 10px", color: "white" }),
        	selected = buttonName;
        	trace("selected is now:" + selected + "\n");
            //calculate calorie
			if (selected == "Spaghetti"){
				trace("food is now:" + food + "\n");
				trace("food is now:" + food + "\n");
				food = 0;
			}
			
			trace("food is now:" + food + "\n");
			total = Math.round((food*amount)*100)/100 ;
			trace("total is now:" + total + "\n");
		




export var amount;
            amount = this.data.value;
            trace("######amount is: " + amount + "\n");


//scoller
            style: new Style( { font: "bold 15px", color: "black" }),


let contentToScrollVertically = new Column({ 
    skin: new Skin({fill: "#e6f2ff"}),
    //style: new Style( { font: "bold 15px", color: "black" }),
	contents: [
          new Label({ 
	         style: new Style( { font: "bold 20px", color: "#e6f2ff" } ), 
	      }), 
    	
    	new MySlider({
    	left: 0, right: 10, top: 80, height: 15, 
    	min: 0, max: 50, value: 1 }),
 //   	new Label({ string: "Select amount using slider" }),
    	new Label({ 
	         style: new Style( { font: "9px", color: "black" } ), 
	      
    	new Label({ 
	         style: new Style( { font: "10px", color: "black" } ), 
	  //       string:"(amount)   1       2        3        4        5        6        7        8        9       10" 
       	
//	     trace("--------------amount is: " + amount + "-------\n"),
         
//         new Label({ 
//	         style: new Style( { font: "bold 20px", color: "black" } ), 	         
//	         string: "Select one from the food list:" 
//	     }), 
	      	      
        style: new Style( { font: "10px", color: "white" }),
        buttonNames: "Spaghetti,Banana,Pop Tart,Big Mac,Medium Fries,Taco,Slice of bread,Chocolate Cake,Pad Thai,IHOP Chorizo Fiesta Omelette,Coconut Water,Boba milk tea,Cup of black coffee,Grande Caramel Frappuccino"}),	
     ]


export var food;
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
//export var amount;



//export var total = function(food, amount){
//	return food*amount;
//}


let scrollerExample = new MainContainer({ contentToScrollVertically });

var currentScreen = new Screen3Template();


let calorie = new Picture({bottom: 210, height: 30, left: 0, right: 180, url: "assets/calorie.png"});

application.add(calorie);


calorie.opacity = 0.5;



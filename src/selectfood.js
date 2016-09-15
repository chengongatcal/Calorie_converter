import {     RadioGroup,     RadioGroupBehavior} from 'buttons';

import {    VerticalScroller,    VerticalScrollbar,    TopScrollerShadow,    BottomScrollerShadow} from 'scroller';

//back navbar
import { Screen1Template } from "main";



//instruction
export var Screen3Template = Column.template($ => ({   left: 0, right: 0, top: 0, bottom:210,   skin: new Skin({fill: "#0059b3"}),   contents: [
      Label($, {     
         left: 10, right: 0, top: 3, height: 25, style: new Style( { font: "bold 20px", color: "white" } ),          string: "Calorie Converter", url: "assets/calorie.png"      }),
//      new Picture({bottom: 210, height: 30, left: 0, right: 180, url: "assets/calorie.png"}),
//        new NavButton({ string: "select food and amount", nextScreen: Screen3Template}),
//        new NavButton({ string: "select amount", nextScreen: Screen3Template}),
//        new NavButton({ string: "back", nextScreen: Screen1Template}),

//      Label($, {  //         left: 0, right: 0, top: 50, height: 25, style: new Style( { font: "bold 20px", color: "#ff0000" } ), //         string: "Calorie Conversion" //      }),      ]}));



export var selected;
export var total;
//selection listexport let MyRadioGroup = RadioGroup.template($ => ({    top: 15, bottom: 50, left: 20, right: 0, 
    style: new Style( { font: " 10px", color: "white" }),    Behavior: class extends RadioGroupBehavior {        onRadioButtonSelected(buttonName) {
        	selected = buttonName;
        	trace("selected is now:" + selected + "\n");            trace("Radio button with name " + buttonName + " was selected.\n");
            //calculate calorie
			if (selected == "Spaghetti"){				food = spaghetti;
				trace("food is now:" + food + "\n");			}else if(selected == "Banana"){				food = banana;			}else if(selected == "Pop Tart"){				food = tart;			}else if(selected == "Big Mac"){				food = bigmac;			}else if(selected == "Medium Fries"){				food = fries;			} else if(selected == "Taco"){				food = taco;			} else if(selected == "Slice of bread"){				food = bread;			} else if(selected == "Chocolate Cake"){				food = chococake;			}else if(selected == "Pad Thai"){				food = padthai;			}else if(selected == "IHOP Chorizo Fiesta Omelette"){				food = omelette;			}else if(selected == "Coconu Water"){				food = water;			}else if(selected == "Boba milk tea"){				food = milktea;			}else if(selected == "Cup of black coffee"){				food = coffee;			}else if(selected == "Grande Caramel Frappuccino"){				food = frappuccino;
				trace("food is now:" + food + "\n");			}else{
				food = 0;
			}
			
			trace("food is now:" + food + "\n");
			total = Math.round((food*amount)*100)/100 ;
			trace("total is now:" + total + "\n");
		        }    }}));

//slider for select amountimport {    HorizontalSlider, HorizontalSliderBehavior} from 'sliders';


export var amount;export let MySlider = HorizontalSlider.template($ => ({    height: 30, left: 40, right: 20,    Behavior: class extends HorizontalSliderBehavior {        onValueChanged(container) {            trace("Value is: " + this.data.value + "\n");
            amount = this.data.value;
            trace("######amount is: " + amount + "\n");        }    }}));let graySkin = new Skin({ fill: "#0066cc" });let mainContainer = new Container({    left: 0, right: 0, top: 170, bottom: 40,  skin: new Skin({ fill: "#383838" }),    contents: [//        new MySlider({ min: 0, max: 50, value: 50 })    ]});application.add(mainContainer);


//scollerlet darkGraySkin = new Skin({ fill:"#red" });let titleStyle = new Style( { font: "20px", color: "white" } );let MainContainer = Container.template($ => ({    left: 0, right: 0, top: 0, bottom: 0,    contents: [        VerticalScroller($, {             active: true, top: 10, bottom: 0,            contents: [                $.contentToScrollVertically,                VerticalScrollbar(),                 TopScrollerShadow(),                 BottomScrollerShadow(),                ]                             }),        new Container({             top: 35, height: 10, left: 0, right: 0,  skin: new Skin({fill: "transparent"}),
            style: new Style( { font: "bold 15px", color: "black" }),            contents: [//                new Label({ string: "Select amount and food" }),            ]        })    ]}));


let contentToScrollVertically = new Column({     top:10, left: 0, right: 0,  
    skin: new Skin({fill: "#e6f2ff"}),
    //style: new Style( { font: "bold 15px", color: "black" }),//    contents: [
	contents: [
          new Label({ 	         left: 0, right: 30, top: 20, height: 35,
	         style: new Style( { font: "bold 20px", color: "#e6f2ff" } ), 	         string: "Select one from the food list:" 
	      }), 
    	
    	new MySlider({
    	left: 0, right: 10, top: 80, height: 15, 
    	min: 0, max: 50, value: 1 }),
 //   	new Label({ string: "Select amount using slider" }),
    	new Label({ 	         left: 0, right: 0, top: 0, height: 3, 
	         style: new Style( { font: "9px", color: "black" } ), 	         string:"         |         |         |          |          |          |          |          |          |          |          |" 	      }),   
	      
    	new Label({ 	         left: 0, right: 3, top: 2, height: 10, 
	         style: new Style( { font: "10px", color: "black" } ), 
	  //       string:"(amount)   1       2        3        4        5        6        7        8        9       10" 	         string:"   (amount)   5      10      15      20      25      30      35      40      45      50" 	      }), 
       	
//	     trace("--------------amount is: " + amount + "-------\n"),
         
//         new Label({ //	         left: 0, right: 30, top: 20, height: 15,
//	         style: new Style( { font: "bold 20px", color: "black" } ), 	         //	         string: "select for " + Math.round((amount)*100)/100 + " unit(s):" 
//	         string: "Select one from the food list:" 
//	     }), 
	      	              new MyRadioGroup({
        style: new Style( { font: "10px", color: "white" }),
        buttonNames: "Spaghetti,Banana,Pop Tart,Big Mac,Medium Fries,Taco,Slice of bread,Chocolate Cake,Pad Thai,IHOP Chorizo Fiesta Omelette,Coconut Water,Boba milk tea,Cup of black coffee,Grande Caramel Frappuccino"}),	
     ]});


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


let scrollerExample = new MainContainer({ contentToScrollVertically });application.add(scrollerExample);

var currentScreen = new Screen3Template();application.add(currentScreen);


let calorie = new Picture({bottom: 210, height: 30, left: 0, right: 180, url: "assets/calorie.png"});

application.add(calorie);


calorie.opacity = 0.5;




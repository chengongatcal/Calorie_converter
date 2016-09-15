/* *     Copyright (C) 2010-2016 Marvell International Ltd. *     Copyright (C) 2002-2010 Kinoma, Inc. * *     Licensed under the Apache License, Version 2.0 (the "License"); *     you may not use this file except in compliance with the License. *     You may obtain a copy of the License at * *      http://www.apache.org/licenses/LICENSE-2.0 * *     Unless required by applicable law or agreed to in writing, software *     distributed under the License is distributed on an "AS IS" BASIS, *     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. *     See the License for the specific language governing permissions and *     limitations under the License. */
import { Screen2Template } from "calculate";
//import { Screen3Template, MyRadioGroup } from "selectfood";
//import { buttonName } from "buttons";
import { Screen3Template, MyRadioGroup, selected, amount, food, total} from "selectfood";

import {     RadioGroup,     RadioGroupBehavior} from 'buttons';



var foodlist = ["Plate of Spaghetti", "Banana", "Pop Tart", "Big Mac", "Medium Fries","Taco",
	"Slice of bread", "Chocolate Cake", "Plate of Pad Thai","IHOP Chorizo Fiesta Omelette",
	"Bottle of Coconut Water", "Boba milk tea with grass jelly", "Cup of black coffee", "Grande Caramel Frappuccino"];

MyRadioGroup = RadioGroup.template($ => ({    top: 35, bottom: 50, left: 20, right: 0, 
    style: new Style( { font: " 10px", color: "white" }),    Behavior: class extends RadioGroupBehavior {        onRadioButtonSelected(buttonName) {
         trace(buttonName);
        //	food = buttonName;
        	if (buttonName == "Spaghetti"){				food = 600;			}else if(buttonName == "Banana"){				food = banana;			}else if(buttonName == "Pop Tart"){				food = tart;			}else if(buttonName == "Big Mac"){				food = bigmac;			}else if(buttonName == "Medium Fries"){				food = fries;			} else if(buttonName == "Taco"){				food = taco;			} else if(buttonName == "Slice of bread"){				food = bread;			} else if(buttonName == "Chocolate Cake"){				food = chococake;			}else if(buttonName == "Pad Thai"){				food = padthai;			}else if(buttonName == "IHOP Chorizo Fiesta Omelette"){				food = omelette;			}else if(buttonName == "Coconu Water"){				food = water;			}else if(buttonName == "Boba milk tea"){				food = milktea;			}else if(buttonName == "Cup of black coffee"){				food = coffee;			}else{				food = frappuccion;			}            trace("Radio button with name " + buttonName + " was selected.\n");        }    }}));

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



if (selected == "Spaghetti"){	food = spaghetti;
	trace("food is now:" + food + "\n");}else if(selected == "Banana"){	food = banana;}else if(selected == "Pop Tart"){	food = tart;}else if(selected == "Big Mac"){	food = bigmac;}else if(selected == "Medium Fries"){	food = fries;} else if(selected == "Taco"){	food = taco;} else if(selected == "Slice of bread"){	food = bread;} else if(selected == "Chocolate Cake"){	food = chococake;}else if(selected == "Pad Thai"){	food = padthai;}else if(selected == "IHOP Chorizo Fiesta Omelette"){	food = omelette;}else if(selected == "Coconu Water"){	food = water;}else if(selected == "Boba milk tea"){	food = milktea;}else if(selected == "Cup of black coffee"){	food = coffee;}else{	food = frappuccino;
	trace("food is now:" + food + "\n");}


//var amount = 2;

//var calorie = function(food, amount){
//	return food*amount;
//}

//var total = Math.round(calorie(food, amount)) ;

var blueSkin = new Skin({ fill:"blue" });//var myContainer = new Container({//    left: 0, top: 0, right: 0, bottom: 110, skin: new Skin({fill: "#e6f2ff"}),
//    contents: [
//    new Label({ top: 5, height: 30, left: 0, right: 0, style: new Style( { font: "bold 20px", color: "black" } ),  //                   string: "Calorie Conversion" }),
//    ]//});//application.add(myContainer);
export var Screen1Template = Column.template($ => ({    top: 52, bottom: 38, left: 0, right: 0,     skin: new Skin({fill: "#e6f2ff"}),    contents: [
   //     new Label({ top: 5, height: 10, left: 50, right: 200, style: new Style( { font: "15px", color: "black" } ),    //                 string: "select food" }), 
   //     new Label({ top: -10, height: 10, left: 80, right: 0, style: new Style( { font: "15px", color: "black" } ),    //                 string: "select amount" }),
       	trace("--------------total is: " + total + "-------\n"),
        
        
        
        new Label({ top: 7, height: 10, left: 0, right: 0, style: new Style( { font: "12px", color: "black" } ),                     string:"Total Consumption: " +  Math.round(total*100)/100 + " Calories" }),
        new Label({ top: 7, height: 10, left: 0, right: 0, style: new Style( { font: "12px", color: "black" } ),                     string:"Consume " + Math.round(amount*100)/100 + " " + selected + " is equivalent to:" }),  
	      Label($, { 	         left: 0, right: 150, top: 10, height: 10, style: new Style( { font: "10px", color: "black" } ), 	         string: Math.round((total/spaghetti)*100)/100 + " Plate of Spaghetti" 	      }),
	      Label($, { 	         left: 0, right: 150, top: 10, height: 5, style: new Style( { font: "10px", color: "black" } ), 	         string: Math.round((total/banana)*100)/100 + " Banana" 	      }),
	      Label($, { 	         left: 0, right: 150, top: 10, height: 5, style: new Style( { font: "10px", color: "black" } ), 	         string: Math.round((total/tart)*100)/100 + " Pop Tart" 	      }),
	      Label($, { 	         left: 0, right: 150, top: 10, height: 5, style: new Style( { font: "10px", color: "black" } ), 	         string: Math.round((total/bigmac)*100)/100 + " Big Mac" 	      }),
	       Label($, { 	         left: 0, right: 150, top: 10, height: 5, style: new Style( { font: "10px", color: "black" } ), 	         string: Math.round((total/fries)*100)/100 + " Medium Fries" 	      }),
	            Label($, { 	         left: 0, right: 150, top: 10, height: 5, style: new Style( { font: "10px", color: "black" } ), 	         string: Math.round((total/taco)*100)/100 + " Taco" 	      }),
	      Label($, { 	         left: 0, right: 150, top: 10, height: 5, style: new Style( { font: "10px", color: "black" } ), 	         string: Math.round((total/bread)*100)/100 + " Slice of bread" 	      }),
	      Label($, { 	         left: 125, right: 0, top: -95, height: 5, style: new Style( { font: "10px", color: "black" } ), 	         string: Math.round((total/chococake)*100)/100 + " Chocolate Cake" 	      }),
	      Label($, { 	         left: 125, right: 0, top: 10, height: 5, style: new Style( { font: "10px", color: "black" } ), 	         string: Math.round((total/padthai)*100)/100 + " Plate of Pad Thai" 	      }),
	       Label($, { 	         left: 125, right: 0, top: 10, height: 5, style: new Style( { font: "10px", color: "black" } ), 	         string: Math.round((total/omelette)*100)/100 + " IHOP Chorizo Fiesta Omelette" 	      }),
	      Label($, { 	         left: 125, right: 0, top: 10, height: 5, style: new Style( { font: "10px", color: "black" } ), 	         string: Math.round((total/water)*100)/100 + " Harmless Coconut Water" 	      }),

	       Label($, { 	         left: 125, right: 0, top: 10, height: 5, style: new Style( { font: "10px", color: "black" } ), 	         string: Math.round((total/coffee)*100)/100 + " Cup of black coffee" 	      }),
	      Label($, { 	         left: 125, right: 0, top: 10, height: 5, style: new Style( { font: "10px", color: "black" } ), 	         string: Math.round((total/frappuccino)*100)/100 + " Grande Caramel Frappuccino"
	      }),    
	      Label($, { 	         left: 125, right: 0, top: 10, height: 5, style: new Style( { font: "10px", color: "black" } ), 	         string: Math.round((total/milktea)*100)/100+ " Boba milk tea with grass jelly" 	      }),                ]}));

var currentScreen = new Screen1Template();application.add(currentScreen);var NavButton = Container.template($ => ({    active: true, top: 1, bottom: 1, right: 1, left: 1,    behavior: Behavior({        onCreate: function(content){            this.upSkin = new Skin({                  fill: "#80bfff",                   borders: {left: 0.5, right: 0.5, top: 0.5, bottom: 0.5},                   stroke: "transparent"                });            this.downSkin = new Skin({              fill: "#cce6ff",               borders: {left: 0.5, right: 0.5, top: 0.5, bottom: 0.5},               stroke: "white"            });            content.skin = this.upSkin;        },        onTouchBegan: function(content){            content.skin = this.downSkin;        },        onTouchEnded: function(content){            content.skin = this.upSkin;            application.remove(currentScreen);  // Remove the old screen from the application            currentScreen = new $.nextScreen;  // Make the new screen            application.add(currentScreen);  // Add the new screen to the application        },    }),   contents: [      Label($, { top: 0, bottom: 0, left: 0, right: 0, style: new Style( { font: "15px", color:"black" } ),                  string: $.string })   ]}));var navBar = new Line({ bottom: 0, height: 38, left: 0, right: 0,
    style: new Style( { font: "15px", color: "white" }),    skin: new Skin({ fill: "white" }),    contents: [        new NavButton({ string: "Convert      ", nextScreen: Screen1Template }),        new NavButton({ string: "Calculate      ", nextScreen: Screen2Template }),//        new NavButton({ string: "select food", nextScreen: Screen3Template }),    ]});application.add(navBar);

var navBar = new Line({ bottom: 188, height: 22, left: 0, right: 0,
    style: new Style( { font: " 12px", color: "white" }),    skin: new Skin({ fill: "#e6f2ff" }),    contents: [        new NavButton({ string: "Select food and amount", nextScreen: Screen3Template}),
//        new NavButton({ string: "select amount", nextScreen: Screen3Template}),
//        new NavButton({ string: "back", nextScreen: Screen1Template}),

    ]});application.add(navBar);

//insert icons
let convert = new Picture({bottom: 14, height: 13, left: 0, right: 100, url: "assets/convert.png"});
let calorie = new Picture({bottom: 210, height: 30, left: 0, right: 180, url: "assets/calorie.png"});
let select = new Picture({bottom: 192, height: 13, left: 0, right: 180, url: "assets/food.png"});
let calculate = new Picture({bottom: 14, height: 15, left: 220, right: 0, url: "assets/calculator.png"});

application.add(convert);application.add(calorie);
application.add(select);application.add(calculate);

select.opacity = 0.6;calorie.opacity = 0.5;
convert.opacity = 0.9;calculate.opacity = 0.9;

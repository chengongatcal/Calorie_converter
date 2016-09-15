import {    HorizontalSlider, HorizontalSliderBehavior} from 'sliders';


var total;
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

let MySlider = HorizontalSlider.template($ => ({    height: 30, left: 20, right:10,    Behavior: class extends HorizontalSliderBehavior {        onValueChanged(container) {            trace("Value is: " + this.data.value + "\n");
            total = this.data.value;
            trace("*********total is: " + total + "\n");        }    }}));//let graySkin = new Skin({ fill: "gray" });//let mainContainer = new Container({//    left: 0, right: 0, top: 160, bottom: 30,  skin: new Skin({ fill: "#e6f2ff" }),//    contents: [//        new MySlider({ min: 0, max: 2000, value: 50 })//    ]//});

//application.add(mainContainer);

export var Screen2Template = Column.template($ => ({   left: 0, right: 0, top: 30, bottom: 38,   skin: new Skin({fill: "#e6f2ff"}),   contents: [
   		      new MySlider({      left: 80, right: 0, top: 0, height: 3,        min: 0, max: 3000, value: 50 }),          new Label({ 	         left: 0, right: 0, top: 0, height: 3, 	         style: new Style( { font: "10px", color: "black" } ), 	         string:"   |           |          |          |          |          |          |          |          |          |          |" 	      }),   	                new Label({ 	         left: 0, right: 5, top: 1, height: 10, 	         style: new Style( { font: "10px", color: "black" } ), 	         string:"  Calorie    300      600     900   1200   1500    1800   2100   2400   2700   3000" 	      }),       Label($, {          left: 0, right: 0, top: 6, height: 10, style: new Style( { font: " 12px", color: "black" } ),          string: Math.round((total)*100)/100 + " Calories is equivalent to consume:"       }),	           	  Label($, { 	         left: 0, right: 150, top: 6, height: 10, style: new Style( { font: "10px", color: "black" } ), 	         string: Math.round((total/spaghetti)*100)/100 + " Plate of Spaghetti" 	      }),	      trace(Math.round((total/spaghetti)*100)/100 + " Plate of Spaghetti\n"),	      Label($, { 	         left: 0, right: 150, top: 10, height: 5, style: new Style( { font: "10px", color: "black" } ), 	         string: Math.round((total/banana)*100)/100 + " Banana" 	      }),	      Label($, { 	         left: 0, right: 150, top: 10, height: 5, style: new Style( { font: "10px", color: "black" } ), 	         string: Math.round((total/tart)*100)/100 + " Pop Tart" 	      }),	      Label($, { 	         left: 0, right: 150, top: 10, height: 5, style: new Style( { font: "10px", color: "black" } ), 	         string: Math.round((total/bigmac)*100)/100 + " Big Mac" 	      }),	       Label($, { 	         left: 0, right: 150, top: 10, height: 5, style: new Style( { font: "10px", color: "black" } ), 	         string: Math.round((total/fries)*100)/100 + " Medium Fries" 	      }),	            Label($, { 	         left: 0, right: 150, top: 10, height: 5, style: new Style( { font: "10px", color: "black" } ), 	         string: Math.round((total/taco)*100)/100 + " Taco" 	      }),	      Label($, { 	         left: 0, right: 150, top: 10, height: 5, style: new Style( { font: "10px", color: "black" } ), 	         string: Math.round((total/bread)*100)/100 + " Slice of bread" 	      }),	      Label($, { 	         left: 125, right: 0, top: -95, height: 5, style: new Style( { font: "10px", color: "black" } ), 	         string: Math.round((total/chococake)*100)/100 + " Chocolate Cake" 	      }),	      Label($, { 	         left: 125, right: 0, top: 10, height: 5, style: new Style( { font: "10px", color: "black" } ), 	         string: Math.round((total/padthai)*100)/100 + " Plate of Pad Thai" 	      }),	       Label($, { 	         left: 125, right: 0, top: 10, height: 5, style: new Style( { font: "10px", color: "black" } ), 	         string: Math.round((total/omelette)*100)/100 + " IHOP Chorizo Fiesta Omelette" 	      }),	      Label($, { 	         left: 125, right: 0, top: 10, height: 5, style: new Style( { font: "10px", color: "black" } ), 	         string: Math.round((total/water)*100)/100 + " Harmless Coconut Water" 	      }),	       Label($, { 	         left: 125, right: 0, top: 10, height: 5, style: new Style( { font: "10px", color: "black" } ), 	         string: Math.round((total/coffee)*100)/100 + " Cup of black coffee" 	      }),	      Label($, { 	         left: 125, right: 0, top: 10, height: 5, style: new Style( { font: "10px", color: "black" } ), 	         string: Math.round((total/frappuccino)*100)/100 + " Grande Caramel Frappuccino" 	      }), 	      Label($, { 	         left: 125, right: 0, top: 10, height: 5, style: new Style( { font: "10px", color: "black" } ), 	         string: Math.round((total/milktea)*100)/100+ " Boba milk tea with grass jelly" 	      }),   ]}));var column = new Column({    top: 0, left: 0, bottom: 0, right: 0,    skin: new Skin({ fill: "red" }),    contents: [		new Content({		    top: 10, left: 10, bottom: 10,		    right: 10,		    skin: new Skin({ fill: "white" })		 }),		 new Content({		    top: 10, left: 10, bottom: 10,		    right: 10,		    skin: new Skin({ fill: "white" })		})	] });


var currentScreen = new Screen2Template();application.add(currentScreen);



//scoller

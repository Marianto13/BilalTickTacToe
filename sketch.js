var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage, obstacle1Image, obstacle2Image;
var blastImage;                   //C42// SA
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];
var player = 1
var b1 = "b1", b2= "b2", b3 = "b3",b4 = "b4",b5 = "b5",b6 = "b6",b7 = "b7",b8 = "b8",b9  = "b9" 
function preload() {

  backgroundImage = loadImage("./assets/bg.png");
  tic1_img = loadImage("./assets/tic1.png");
  tic2_img = loadImage("./assets/tic2.png");

  blastImage = loadImage("./assets/blast.png"); //I hate this aaaaaaaaaaaaaaaa

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  button = createButton("Play!");
  // button.mouseClicked(moveButton);
  button.size(200, 100);
  button.position(10, 10);
  button.style("font-family", "Bodoni");
  button.style("font-size", "48px");

   button1 = createButton("b1");

  button1.size(100, 100);
  button1.position(960, 540);
  button1.style("font-family", "Bodoni");
  button1.style("font-size", "48px");
  button1.id("b1")
  button2 = createButton("b2");
  button2.size(100, 100);
  button2.position(1090, 540);
  button2.style("font-family", "Bodoni");
  button2.style("font-size", "48px");
  button2.id("b2")

  button3 = createButton("b3");
  button3.size(100, 100);
  button3.position(1220, 540);
  button3.style("font-family", "Bodoni");
  button3.style("font-size", "48px");
  button3.id("b3")

  button4 = createButton("b4");
  button4.size(100, 100);
  button4.position(1220, 670);
  button4.style("font-family", "Bodoni");
  button4.style("font-size", "48px");
  button4.id("b4")

  button5 = createButton("b5");
  button5.size(100, 100);
  button5.position(1220, 800);
  button5.style("font-family", "Bodoni");
  button5.style("font-size", "48px");
  button5.id("b5")

  button6 = createButton("b6");
  button6.size(100, 100);
  button6.position(1090, 670);
  button6.style("font-family", "Bodoni");
  button6.style("font-size", "48px");
  button6.id("b6")

  button7 = createButton("b7");
  button7.size(100, 100);
  button7.position(960, 670);
  button7.style("font-family", "Bodoni");
  button7.style("font-size", "48px");
  button7.id("b7")

  button8 = createButton("b8");
  button8.size(100, 100);
  button8.position(1090, 800);
  button8.style("font-family", "Bodoni");
  button8.style("font-size", "48px");
  button8.id("b8")

  button9 = createButton("b9");
  button9.size(100, 100);
  button9.position(960, 800);
  button9.style("font-family", "Bodoni");
  button9.style("font-size", "48px");
  button9.id("b9")

}
function checkifyousuckornot(){
  if (b1==b2&b2==b3){

    console.log("sonic")
    console.log(b1,b2,b3)
    swal({ title: "you win ‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ ‌‌ ‌‌ ‌‌‌‌ ‌‌‌‌‌‌‌‌‌‌‌‌ ‌‌‌.:):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):).", width: 600, padding: "3em", color: "#716add", background: "#fff url(/images/trees.png)", backdrop: ` rgba(0,0,123,0.4) url("/images/nyan-cat.gif") left top no-repeat ` });

  }
  if (b7==b6&b6==b4){

    console.log("sonic2")
    swal({ title: " 🤣😂🤣🤣😘🥰🤨☺️——→→←←←←(●'◡'●)(❁´◡`❁)(❁´◡`❁)☆*: .｡. o(≧▽≦)o .｡.:*☆☆*: .｡. o(≧▽≦)o .｡.:*☆╰(*°▽°*)╯(^///^)(*/ω＼*)(*/ω＼*)(*/ω＼*)(*/ω＼*)(*/ω＼*)(*/ω＼*)(*/ω＼*)(*/ω＼*)(*/ω＼*)😘😘😘😘😘😗😗😅😅😉😊😋😋😎🥲😙😙😗😗😗🥰🥰🥰😘😘😘", width: 600, padding: "3em", color: "#716add", background: "#fff url(/images/trees.png)", backdrop: ` rgba(0,0,123,0.4) url("/images/nyan-cat.gif") left top no-repeat ` });

  }
  if (b9==b8&b8==b5){

    console.log("sonic2")
    swal({ title: " bottom 3 across→-§¥¥¥¥–×℃(❁´◡`❁););)^_^:)^_^^_^^_____^;-)^_~^_____^^_____^^😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰😗😗😗😗😗😗😗😙😙🥲🥲🥲😎😎😎😎😎😎😎😎😎😎🤨🤨🤨☺️☺️☺️😅😅😅😅😅😉😉😊😊😊😊😊😊😊😊😊😊😋😋😋😋😋😋😋😋😋😋😋😋😋℃℃℃℃℃℃℃℃℃℃℃℃℃℃℃→→→→→→→→•←———€€€€€¥¥¥¥––←←•••---------------−−−−−−−−−−−−−²²€—————°²——––←←←§§×^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^_____^^_____^^_____^^_____^^_____^^_____^^_____^", width: 600, padding: "3em", color: "#716add", background: "#fff url(/images/trees.png)", backdrop: ` rgba(0,0,123,0.4) url("/images/nyan-cat.gif") left top no-repeat ` });

  }
  if (b1==b7&b7==b9){

    console.log("sonic2")
    swal({ title: "→-§¥¥¥¥–×℃(❁´◡`❁););)^_^:)^_^^_^^_____^;-)^_~^_____^^_____^^😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰😗😗😗😗😗😗😗😙😙🥲🥲🥲😎😎😎😎😎😎😎😎😎😎🤨🤨🤨☺️☺️☺️😅😅😅😅😅😉😉😊😊😊😊😊😊😊😊😊😊😋😋😋😋😋😋😋😋😋😋😋😋😋℃℃℃℃℃℃℃℃℃℃℃℃℃℃℃→→→→→→→→•←———€€€€€¥¥¥¥––←←•••---------------−−−−−−−−−−−−−²²€—————°²——––←←←§§×^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^_____^^_____^^_____^^_____^^_____^^_____^^_____^", width: 600, padding: "3em", color: "#716add", background: "#fff url(/images/trees.png)", backdrop: ` rgba(0,0,123,0.4) url("/images/nyan-cat.gif") left top no-repeat ` });

  }
  if (b2==b6&b6==b8){

    console.log("sonic2")
    swal({ title: "→-§¥¥¥¥–×℃(❁´◡`❁););)^_^:)^_^^_^^_____^;-)^_~^_____^^_____^^😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰😗😗😗😗😗😗😗😙😙🥲🥲🥲😎😎😎😎😎😎😎😎😎😎🤨🤨🤨☺️☺️☺️😅😅😅😅😅😉😉😊😊😊😊😊😊😊😊😊😊😋😋😋😋😋😋😋😋😋😋😋😋😋℃℃℃℃℃℃℃℃℃℃℃℃℃℃℃→→→→→→→→•←———€€€€€¥¥¥¥––←←•••---------------−−−−−−−−−−−−−²²€—————°²——––←←←§§×^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^_____^^_____^^_____^^_____^^_____^^_____^^_____^", width: 600, padding: "3em", color: "#716add", background: "#fff url(/images/trees.png)", backdrop: ` rgba(0,0,123,0.4) url("/images/nyan-cat.gif") left top no-repeat ` });

  }
  if (b3==b4&b4==b9){

    console.log("sonic2")
    swal({ title: "→-§¥¥¥¥–×℃(❁´◡`❁););)^_^:)^_^^_^^_____^;-)^_~^_____^^_____^^😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰😗😗😗😗😗😗😗😙😙🥲🥲🥲😎😎😎😎😎😎😎😎😎😎🤨🤨🤨☺️☺️☺️😅😅😅😅😅😉😉😊😊😊😊😊😊😊😊😊😊😋😋😋😋😋😋😋😋😋😋😋😋😋℃℃℃℃℃℃℃℃℃℃℃℃℃℃℃→→→→→→→→•←———€€€€€¥¥¥¥––←←•••---------------−−−−−−−−−−−−−²²€—————°²——––←←←§§×^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^_____^^_____^^_____^^_____^^_____^^_____^^_____^", width: 600, padding: "3em", color: "#716add", background: "#fff url(/images/trees.png)", backdrop: ` rgba(0,0,123,0.4) url("/images/nyan-cat.gif") left top no-repeat ` });

  }
  if (b3==b6&b6==b9){

    console.log("sonic2")
    swal({ title: "→-§¥¥¥¥–×℃(❁´◡`❁););)^_^:)^_^^_^^_____^;-)^_~^_____^^_____^^😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰😗😗😗😗😗😗😗😙😙🥲🥲🥲😎😎😎😎😎😎😎😎😎😎🤨🤨🤨☺️☺️☺️😅😅😅😅😅😉😉😊😊😊😊😊😊😊😊😊😊😋😋😋😋😋😋😋😋😋😋😋😋😋℃℃℃℃℃℃℃℃℃℃℃℃℃℃℃→→→→→→→→•←———€€€€€¥¥¥¥––←←•••---------------−−−−−−−−−−−−−²²€—————°²——––←←←§§×^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^_____^^_____^^_____^^_____^^_____^^_____^^_____^", width: 600, padding: "3em", color: "#716add", background: "#fff url(/images/trees.png)", backdrop: ` rgba(0,0,123,0.4) url("/images/nyan-cat.gif") left top no-repeat ` });

  }
  if (b1==b6&b6==b5){

    console.log("sonic2")
    swal({ title: "→-§¥¥¥¥–×℃(❁´◡`❁););)^_^:)^_^^_^^_____^;-)^_~^_____^^_____^^😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰😗😗😗😗😗😗😗😙😙🥲🥲🥲😎😎😎😎😎😎😎😎😎😎🤨🤨🤨☺️☺️☺️😅😅😅😅😅😉😉😊😊😊😊😊😊😊😊😊😊😋😋😋😋😋😋😋😋😋😋😋😋😋℃℃℃℃℃℃℃℃℃℃℃℃℃℃℃→→→→→→→→•←———€€€€€¥¥¥¥––←←•••---------------−−−−−−−−−−−−−²²€—————°²——––←←←§§×^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^^_____^_____^^_____^^_____^^_____^^_____^^_____^^_____^", width: 600, padding: "3em", color: "#716add", background: "#fff url(/images/trees.png)", backdrop: ` rgba(0,0,123,0.4) url("/images/nyan-cat.gif") left top no-repeat ` });

  }
}

function draw() {
  background(backgroundImage);

  //button.mouseClicked(addImage);
  //button1.mouseClicked(addImage);

}
var tictest = ["X", "O"]
i = 0
var v = "X"
function mouseClicked(event) {
   console.log(event.target.id)
  if (event.target.id == "b1") {
    v = (tictest[i] == "X") ? "O" : "X"
    i = (i == 0) ? 1 : 0
    // button1.attribute("disabled", "")
    // button1.html(v)
  b1=v
  tic_img=(v=="X")?"./assets/tic1.png":"./assets/tic2.png"
  button1=loadImage(tic_img)
  checkifyousuckornot()  

}
  if (event.target.id == "b2") {
    v = (tictest[i] == "X") ? "O" : "X"
    i = (i == 0) ? 1 : 0
    button2.attribute("disabled", "")

    button2.html(v)
    b2=v
    checkifyousuckornot()
  }
  if (event.target.id == "b3") {
    v = (tictest[i] == "X") ? "O" : "X"
    i = (i == 0) ? 1 : 0
    button3.attribute("disabled", "")

    button3.html(v)
    b3=v
    checkifyousuckornot()
  }
  if (event.target.id == "b4") {
    v = (tictest[i] == "X") ? "O" : "X"
    i = (i == 0) ? 1 : 0
    button4.attribute("disabled", "")
    button4.html(v)
  button4=v
  checkifyousuckornot()  
}
if (event.target.id == "b5") {
  v = (tictest[i] == "X") ? "O" : "X"
  i = (i == 0) ? 1 : 0
  button5.attribute("disabled", "")
  button5.html(v)
b5=v
checkifyousuckornot()  
}
if (event.target.id == "b6") {
  v = (tictest[i] == "X") ? "O" : "X"
  i = (i == 0) ? 1 : 0
  button6.attribute("disabled", "")
  button6.html(v)
b6=v
checkifyousuckornot()  
}
if (event.target.id == "b7") {
  v = (tictest[i] == "X") ? "O" : "X"
  i = (i == 0) ? 1 : 0
  button7.attribute("disabled", "")
  button7.html(v)
b7=v
checkifyousuckornot()  
}
if (event.target.id == "b8") {
  v = (tictest[i] == "X") ? "O" : "X"
  i = (i == 0) ? 1 : 0
  button8.attribute("disabled", "")
  button8.html(v)
b8=v
checkifyousuckornot()
}
if (event.target.id == "b9") {
  v = (tictest[i] == "X") ? "O" : "X"
  i = (i == 0) ? 1 : 0
  button9.attribute("disabled", "")
  button9.html(v)
b9=v
checkifyousuckornot()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function addImage() {
  // image(tic1_img,160,540,100,100)
  button.style("z-index", "690",)

  console.log("test1")





}


}

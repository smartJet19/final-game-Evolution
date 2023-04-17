var randomNum1;
var lifeNum;
var randomNum2;
var movementNum;
var colorNum;
var creatures = [];
var creature, movementNumX, movementNumY;
var enemy;
var enemies = [];
var edge1, edge2, edge3, edge4;
var gameState = "wait"
var playbutton, startbutton, aboutbutton, dna, dnaimg, DNAGroup, dropdna, dnalength, dropvirus, VirusGroup, virusimg, gotvirus
var count = 0
var count3 = 0
var dnacountlevel2 = 0
var viruscountlevel2 = 0
var viruscountlevel3 = 0
var health = 50;
var maxHealth = 400;
var aboutimg,aboutpop

var health3 = 400;
var maxHealth3 = 400;

var score3 = 0
var virus, virusimg, dropvirus3
var cell, cellimg
var virus3, virus3img, Virus3Group, dropcell, cellGroup
var hand, handimg, face, faceimg, torso, torsoimg, leg, legimg, fullbody, fullbodyimg, level3bg
var fullgamesound,dnasound,lostsound

function preload() {

  splashimg = loadImage("splashbg.gif")
  dnaimg = loadImage("dna.gif")
  // level1bgimg=loadImage("newbg.gif")
  level1bgimg = loadImage("bgnew.PNG")
  gotdnaimg = loadImage("gotdna.gif")
  aboutimg=loadImage("aboutbg.gif")
  collecteddnapopupimg = loadImage("collecteddnapopup.gif")
  virusimg = loadImage("virus.gif")
  gotvirusimg = loadImage("gotvirus.gif")
  cellimg = loadImage("cell.gif")
  virus3img = loadImage("viruslevel3.gif")
  level3bg = loadImage("level3bg.jpeg")
  fullgamesound=loadSound("sound/playsound.mp3")
  virusSound=loadSound("sound/die.wav")
  dnasound=loadSound("sound/got.mp3")



  handimg = loadImage("hand.png")
  legimg = loadImage(" leg.png")
  faceimg = loadImage("face.png")
  torsoimg = loadImage("torso.png")

  gothandimg = loadImage("gothand.gif")
  gotlegimg = loadImage("gotleg.gif")
  gotfaceimg = loadImage("gotface.gif")
  gottorsoimg = loadImage("gottorso.gif")

  // splashspriteimg=loadImage("Capture-removebg-preview (4).png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  dna = createSprite(50, height - 100)
  dna.addImage(dnaimg)
  dna.scale = 0.5
  dna.visible = false
  dna.tint = "cyan"

  playbutton = createImg("play.png")
  playbutton.position(0, 0)
  playbutton.size(150, 150)
  playbutton.hide()

  aboutbutton = createImg("about.png")
  aboutbutton.position(width - 150, 10)
  aboutbutton.size(150, 130)
  aboutbutton.hide()


  aboutpop = createImg("aboutbg.gif")
  aboutpop.position(0,0)
  aboutpop.size(width, height)
  aboutpop.hide()

  gotdna = createSprite(width - 120, 80)
  gotdna.addImage(gotdnaimg)
  gotdna.scale = 0.75
  gotdna.visible = false


  gotvirus = createSprite(120, 80)
  gotvirus.addImage(gotvirusimg)
  gotvirus.scale = 0.75
  gotvirus.visible = false

  DNAGroup = new Group()
  VirusGroup = new Group()
  Virus3Group = new Group()
  cellGroup = new Group()


  // level 3
  face = createSprite(width / 2, 50)
  face.addImage("face", faceimg)
  face.addImage("gotface", gotfaceimg)
  face.scale = 0.5
  face.visible = false


  hand = createSprite(width / 2 - 100, 50)
  hand.addImage("hand", handimg)
  hand.addImage("gothand", gothandimg)
  hand.scale = 0.75
  hand.visible = false


  leg = createSprite(face.x + 100, 50)
  leg.addImage("leg", legimg)
  leg.addImage("gotleg", gotlegimg)
  leg.scale = 0.75
  leg.visible = false


  torso = createSprite(leg.x + 100, 50)
  torso.addImage("torso", torsoimg)
  torso.addImage("gottorso", gottorsoimg)
  torso.scale = 0.65
  torso.visible = false



}
function draw() {

  if (gameState == "wait") {
    if(!fullgamesound.isPlaying()){
      fullgamesound.play()
    }
    background(splashimg);
    playbutton.show()
    aboutbutton.show()
    aboutpop.hide()


  }
  playbutton.mousePressed(() => {
    gameState = "play"
    background(0)
    playbutton.hide()
    aboutbutton.hide()
    // aboutpop.visible=false
    // aboutpop.hide()

  })
  aboutbutton.mousePressed(() => {
  aboutpop.show()
  gameState="about"
  })

  aboutpop.mousePressed(()=>{
    aboutpop.hide()
    background(splashimg);
    gamestate="wait"
  })



  if (gameState == "play") {
    background(level1bgimg)
    spawnDNA()
    playbutton.hide()
    aboutbutton.hide()
    aboutpop.hide()

    dna.visible = true
    dna.x = mouseX
    dna.y = mouseY
    gotdna.visible = true
    // aboutpop.visible=false

    DNAGroup.overlap(dna, collect);




  }


  if (gameState == "level2") {
    background(level1bgimg)
    spawnVirus()
    spawnDNA()
    gotdna.visible = true
    gotvirus.visible = true
    dna.visible = true
    dna.x = mouseX
    dna.y = mouseY
    // aboutpop.visible=false

    stroke(0);
    strokeWeight(4);
    noFill();
    rect(width / 2 - 200, 10, 200, 20);

    noStroke();
    fill(255, 0, 0);
    rect(width / 2 - 200, 10, map(health, 0, maxHealth, 0, 200), 20);



    DNAGroup.overlap(dna, collectlevel2);

    VirusGroup.overlap(dna, viruscollect);
    if (health <= 0) {
      health = 10
    }
  }

  if (gameState == "level3") {
    background(level3bg)
    spawnVirus3()
    spawnCells()
    dna.visible = true
    face.visible = true
    torso.visible = true
    hand.visible = true
    leg.visible = true
    dna.x = mouseX
    dna.y = mouseY
    cellGroup.overlap(dna, collectcell);
    Virus3Group.overlap(dna, virus3collect);
    // aboutpop.visible=false


    stroke(0);
    strokeWeight(4);
    noFill();
    rect(50, 10, 200, 20);

    noStroke();
    fill(0, 255, 0);
    rect(50, 10, map(health3, 0, maxHealth3, 0, 200), 20);


   

  }


  drawSprites();

  if (gameState == "play") {
    textSize(25)
    fill("red")
    stroke("black")
    strokeWeight(2)
    text(count, gotdna.x + 5, gotdna.y)
    if (count >= 10) {
      gameState = "level2pop"
    }
  }


  if (gameState == "level2pop") {
    // background("red")
    popuplevel2()
    DNAGroup.destroyEach()
    dna.visible = false
    gotdna.visible = false
    count = 0
  }

  if (gameState == "level2") {
    gotdna.visible = true
    textSize(25)
    fill("red")
    stroke("black")
    strokeWeight(2)
    text(dnacountlevel2, gotdna.x + 5, gotdna.y)
    text(viruscountlevel2, gotvirus.x + 5, gotvirus.y)
    if (health >= maxHealth) {
      gameState = "level3pop"
      background(level3bg)
      DNAGroup.destroyEach()
      VirusGroup.destroyEach()
    }
  }


  if (gameState == "level3") {

    textSize(25)
    fill("red")
    stroke("black")
    strokeWeight(2)
    text("cell count =" + count3, width - 250, 50)


    if (count3 > 2) {

      if (count3 >= 2) {
        face.changeImage("gotface", gotfaceimg)
        console.log(count3)
      }

      if (count3 >= 4) {
        face.changeImage("gotface", gotfaceimg)
        leg.changeImage("gotleg", gotlegimg)
        console.log(count3)
      }


      if (count3 >= 6) {
        face.changeImage("gotface", gotfaceimg)
        leg.changeImage("gotleg", gotlegimg)
        hand.changeImage("gothand", gothandimg)
        console.log(count3)
      }

      if (count3 >= 8) {
        face.changeImage("gotface", gotfaceimg)
        leg.changeImage("gotleg", gotlegimg)
        hand.changeImage("gothand", gothandimg)
        torso.changeImage("gottorso", gottorsoimg)

        console.log(count3)
      }

    }



  }


  if (gameState == "level3pop") {
    // background("red")
    popuplevel3()
    DNAGroup.destroyEach()
    dna.visible = false
    gotdna.visible = false
    gotvirus.visible = false
    count = 0
  }




}


// spawn dna

function spawnDNA() {
  if (frameCount % 60 == 0) {
    randX = Math.round(random(50, width - 50))
    dropdna = createSprite(randX, 0)
    dropdna.addImage(dnaimg)
    dropdna.scale = 0.3
    dropdna.velocityY = 2
    dropdna.tint = "yellow"

    dropdna.lifetime = height / 2
    DNAGroup.add(dropdna)

  }
  //  console,log(DNAGroup.length())
}

// collect dna
function collect() {
  dropdna.remove()
  count++

dnasound.play()
}

function collectlevel2() {
  dropdna.remove()
  dnacountlevel2++
  health += 5
dnasound.play()

}




// spawn viurs

function spawnVirus() {
  if (frameCount % 40 == 0) {
    randXv = Math.round(random(50, width - 50))
    dropvirus = createSprite(randXv, 0)
    dropvirus.addImage(virusimg)
    dropvirus.scale = 0.3
    dropvirus.velocityY = 4
    dropvirus.tint = "yellow"

    dropvirus.lifetime = height / 4
    VirusGroup.add(dropvirus)

  }
  //  console,log(DNAGroup.length())
}


// collect dna
function viruscollect() {
  dropvirus.remove()
  viruscountlevel2++
  health -= 10
virusSound.play()

}




// level 3
// spawn viurs

function spawnVirus3() {
  if (frameCount % 40 == 0) {
    randXv = Math.round(random(50, width - 50))
    dropvirus3 = createSprite(randXv, 0)
    dropvirus3.addImage(virus3img)
    dropvirus3.scale = 0.3
    dropvirus3.velocityY = 4
    dropvirus3.tint = "lime"


    dropvirus3.lifetime = height / 4;
    Virus3Group.add(dropvirus3)

  }
  //  console,log(DNAGroup.length())
}


// collect dna
function virus3collect() {
  dropvirus3.remove()
  health3 -=5
  count3 -=1
  virusSound.play()

  if(health3<=1 ){
 
    gameover()
  
  }
  
}

// spawn cells

function spawnCells() {
  if (frameCount % 60 == 0) {
    randX = Math.round(random(50, width - 50))
    dropcell = createSprite(randX, 0)
    dropcell.addImage(cellimg)
    dropcell.scale = 0.3
    dropcell.velocityY = 2
    dropcell.tint = "yellow"

    dropcell.lifetime = height / 2;
    cellGroup.add(dropcell)

  }


  //  console,log(DNAGroup.length())
}


// collect ell
function collectcell() {
  dropcell.remove()
  count3++
  health +=2
  
  dnasound.play()
if(count3>8){
  won()
  console.log("won")
}

}

function popuplevel2() {
  if (gameState == "level2pop") {
    swal({
      title: "HEY !! GOOD JOB !!",
      text: "Collect more DNAs but keep safe from the VIRUSES",
      textSize: 50,
      imageUrl: "collecteddnapopup.gif",
      imageSize: "500x300",
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'OK',
    },

      function (isConfirm) {
        gameState = "level2"
      });
  }
}

function popuplevel3() {
  if (gameState == "level3pop") {
    swal({
      title: "HEY !! GOOD JOB !! You have collected enough DNA's.",
      text: "Now, Create Body parts using Them",
      textSize: 50,
      imageUrl: "collecteddnapopup.gif",
      imageSize: "500x300",
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'OK',
    },

      function (isConfirm) {
        gameState = "level3"
      });
  }
}


function won() {
 
    swal({
      title: "Congratulaions YOU WON !! ",
      text: "You Evolved a DNA to a Being !! Thanks for Playing",
      textSize: 50,
      imageUrl: "result.gif",
      imageSize: "500x300",
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'OK',
    },

      function () {

window.location.reload();
});
  
}






function gameover() {   
   swal({
      title: "YOU LOST IT !!",
      text: "TRY AGAIN ",
      textSize: 50,
      imageUrl: "lost.gif",
      imageSize: "500x300",
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'OK',
    },

      function () {

        window.location.reload();
      });
  }

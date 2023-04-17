class Creature{
    constructor(x,y){
       this.x = x 
       this.y = y
      

    }
    startExperiment(){
       this.reproduce()
        
    }
    reproduce(){
        if(frameCount %20 == 0){
            var creaturePositionsX = [200,600,220,650,750,300,350,320,250,100,400,700,620,500,550]
            var creaturePositionsY = [100,50,280,200,180,150,300,120,250,220,350,80]
            var creatureSizeW = [20,40,60,50,70,80,90,30]
            var creatureSizeH = [20,40,60,50,70,80,90,30]
            var velocityX= [10,-10,20,-20,15,-15]
            var velocityY= [10,-10,20,-20,15,-15]
            
            randomNum1 = Math.round(random(0,14))
            randomNum2 = Math.round(random(0,11))
            colorNum = Math.round(random(1,6))
            lifeNum = Math.round(random(100,500))
            movementNumX = Math.round(random(0,5))
            movementNumY = Math.round(random(0,5))
            var temp_pos_x = creaturePositionsX[randomNum1]
            var temp_pos_y = creaturePositionsY[randomNum2]
            var temp_Width = creatureSizeW[randomNum1]
            var temp_Height = creatureSizeH[randomNum2]
            var temp_velocityX = velocityX[movementNumX]
            var temp_velocityY = velocityX[movementNumY]
            creature = createSprite(temp_pos_x,temp_pos_y,temp_Width,temp_Height,temp_velocityX,temp_velocityY,this.x,this.y)
            
            creature.lifetime = lifeNum
           

            switch(colorNum) {
                case 1: creature.shapeColor="pink";
                        break;
                case 2: creature.shapeColor="orange";
                        break;
                case 3: creature.shapeColor="yellow";
                        break;
                case 4: creature.shapeColor="blue";
                        break;
                case 5: creature.shapeColor="white";
                        break;
                case 6: creature.shapeColor="red";
                        break;
                default: break;
            }
            
           

            creatures.push(creature)
           //console.log(creatures)
            //this.move()
            drawSprites()
        }
    }
   /* move(){
        creature.velocityX=movementNum
        creature.velocityY=movementNum
    }*/

    mutate(){
        mutationNum = Math.random(0,6)
        sizeNum = Math.random(20,200)
        if(mutationNum === 4){
            creatures[i].width = 10
        }
        if(mutationNum === 6){
            creatures[i] = new Enemy(400,200)
        }
    }
    
    
}
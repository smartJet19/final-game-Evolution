class Enemy{
    constructor(x,y){
        this.x = x
        this.y = y
        this.spawnEnemy
    }
    spawnEnemy(){
        if(frameCount %80 == 0){
            stroke()
            rect(this.x,this.y,50,50)
            fill("red")
            velocityX=2
            velocityY=1
    
            enemies.push(enemy)
            console.log(enemies)
            drawSprites()
        }
    
    
    }
    }
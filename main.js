function preload(){

}

function setup(){

 canvas=createCanvas(800, 650)
 canvas.center()
 video=createCapture(VIDEO)
 video.hide()
}

function draw(){
    image(video, 180, 150, 400, 250)
    tint("white")
    fill('blue')
    circle(60, 60, 100)
    circle(740, 60, 100)
    circle(60, 590, 100)
    circle(740, 590, 100)
    fill('yellow')
    rect(110 ,40, 580, 40 )
    rect(110 ,570, 580, 40 )
    rect(40 ,110, 40, 430 )
    rect(720 ,110, 40, 430 )
    }
    
    function take_snapshot(){
        save("Test_Image")
    }
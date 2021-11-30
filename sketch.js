/*
The Game Project
Week 3

Game interaction

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isJumping;
var isFalling;


function setup() {
    createCanvas(1024, 576);
    floorPos_y = height * 3 / 4;
    gameChar_x = width / 2;
    gameChar_y = floorPos_y;

    isLeft = false;
    isRight = false;
    isJumping = false;
    isFalling = false;
}

function draw() {

    ///////////DRAWING CODE//////////

    background(100, 155, 255); //fill the sky blue


    noStroke();
    fill(0, 155, 0);
    rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

    //gravity
    if (gameChar_y < floorPos_y) {
        gameChar_y += 1;
        isFalling = true;
    }
    else {
        isFalling = false;
    }

    // if (gameChar_y <= floorPos_y) {
    //     // gameChar_y -=5;
    //     isJumping = true;
    // }
    // else isPlummeting = false;

    //draw the canyon

    //the game character
    if (isLeft && isFalling) {
        // add your jumping-left code

        //face
        fill(232, 218, 98);
        ellipse(gameChar_x + 2, gameChar_y - 56, 20);

        //body
        fill(204, 194, 255);
        rect(gameChar_x - 10, gameChar_y - 50, 20, 25);

        //legs
        fill(0)
        rect(gameChar_x - 4, gameChar_y - 15, -5, -20);
        rect(gameChar_x + 4, gameChar_y - 25, 5, 25);

        //arms 
        fill(125);
        ellipse(gameChar_x - 15, gameChar_y - 45, +15, +5);
        ellipse(gameChar_x + 7, gameChar_y - 40, +10, +5);

        //eyes
        fill(0)
        ellipse(gameChar_x - 5, gameChar_y - 59, 2, 2);

    }
    else if (isRight && isFalling) {
        // add your jumping-right code

        //face
        fill(232, 218, 98);
        ellipse(gameChar_x + 2, gameChar_y - 56, 20);

        //body
        fill(204, 194, 255);
        rect(gameChar_x - 10, gameChar_y - 50, 20, 25);

        //legs
        fill(0)
        rect(gameChar_x - 4, gameChar_y - 5, -5, -20);
        rect(gameChar_x + 4, gameChar_y - 35, 5, 15);

        //arms 
        fill(125);
        ellipse(gameChar_x - 7, gameChar_y - 45, +5, +5);
        ellipse(gameChar_x + 15, gameChar_y - 45, +10, +5);

        //eyes
        fill(0)
        ellipse(gameChar_x + 5, gameChar_y - 59, 2, 2);



    }
    else if (isLeft)
    // add your walking left code
    {
        //face
        fill(232, 218, 98);
        ellipse(gameChar_x - 1, gameChar_y - 59, 20);

        //body
        fill(204, 194, 255);
        rect(gameChar_x - 10, gameChar_y - 50, 20, 25);

        //legs
        fill(0)
        rect(gameChar_x - 4, gameChar_y - 10, -5, -15);
        rect(gameChar_x + 4, gameChar_y - 25, 5, 15);

        //arms 
        fill(125);
        ellipse(gameChar_x - 15, gameChar_y - 45, +10, 5);
        ellipse(gameChar_x + 7, gameChar_y - 45, +5, +5);
        //eyes
        ellipse(gameChar_x - 5, gameChar_y - 59, 2, 2);

    }
    else if (isRight) {
        // add your walking right code
        //face
        fill(232, 218, 98);
        ellipse(gameChar_x - 1, gameChar_y - 59, 20);

        //body
        fill(204, 194, 255);
        rect(gameChar_x - 10, gameChar_y - 50, 20, 25);

        //legs
        fill(0)
        rect(gameChar_x - 4, gameChar_y - 10, -5, -15);
        rect(gameChar_x + 4, gameChar_y - 25, 5, 15);

        //arms 
        fill(125);
        ellipse(gameChar_x - 7, gameChar_y - 45, +5, +10);
        ellipse(gameChar_x + 15, gameChar_y - 45, +10, +5);
        //eyes
        ellipse(gameChar_x + 5, gameChar_y - 59, 2, 2);

    }
    else if (isFalling || isJumping) {
        // add your jumping facing forwards code

        //face
        fill(232, 218, 98);
        ellipse(gameChar_x, gameChar_y - 55, 20);

        //body
        fill(204, 194, 255);
        rect(gameChar_x - 10, gameChar_y - 50, 20, 25);

        //legs
        fill(0)
        rect(gameChar_x - 4, gameChar_y - 15, -5, -15);
        rect(gameChar_x + 4, gameChar_y - 30, 5, 15);

        //arms 
        fill(125);
        ellipse(gameChar_x - 15, gameChar_y - 45, +10, +5);
        ellipse(gameChar_x + 15, gameChar_y - 45, +10, +5);

        //eyes
        fill(0)
        ellipse(gameChar_x - 5, gameChar_y - 59, 2, 2);
        ellipse(gameChar_x + 5, gameChar_y - 59, 2, 2);


    }
    else {

        // add your standing front facing code

        //face
        fill(232, 218, 98);
        ellipse(gameChar_x, gameChar_y - 59, 20);

        //body
        fill(204, 194, 255);
        rect(gameChar_x - 10, gameChar_y - 50, 20, 25);

        //legs
        fill(0)
        rect(gameChar_x - 4, gameChar_y - 10, -5, -15);
        rect(gameChar_x + 4, gameChar_y - 25, 5, 15);

        //arms 
        fill(125);
        ellipse(gameChar_x - 15, gameChar_y - 45, +10, +5);
        ellipse(gameChar_x + 15, gameChar_y - 45, +10, +5);

        //eyes
        fill(0)
        ellipse(gameChar_x - 5, gameChar_y - 59, 2, 2);
        ellipse(gameChar_x + 5, gameChar_y - 59, 2, 2);

    }

    ///////////INTERACTION CODE//////////
    //Put conditional statements to move the game character below here
    if (isLeft == true) {
        gameChar_x -= 5;
    }

    if (isRight == true) {
        gameChar_x += 5;
    }
    if (isJumping == true) {
        gameChar_y -= 15;
    }

    if (isFalling == true) {
        gameChar_y += 5;
    }
}


function keyPressed() {
    // if statements to control the animation of the character when
    // keys are pressed.

    //open up the console to see how these work
    console.log("keyPressed: " + key);
    console.log("keyPressed: " + keyCode);

    if (keyCode == 37) {
        console.log("left arrow");
        isLeft = true;
    }
    else if (keyCode == 39) {
        console.log("right arrow");
        isRight = true;
    }
    else if (keyCode == 38) {
        console.log("up arrow");
        isJumping = true;
    }
    else if (keyCode == 40) {
        console.log("down arrow");
        isFalling = true;
    }
}

function keyReleased() {
    // if statements to control the animation of the character when
    // keys are released.

    console.log("keyReleased: " + key);
    console.log("keyReleased: " + keyCode);
    if (keyCode == 37) {
        console.log("left arrow");
        isLeft = false;
    }
    else if (keyCode == 39) {
        console.log("right arrow");
        isRight = false;
    }
    else if (keyCode == 38) {
        console.log("up arrow");
        isJumping = false;
    }
    else if (keyCode == 40) {
        console.log("down arrow");
        isFalling = false;
    }
}
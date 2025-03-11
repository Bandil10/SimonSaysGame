let gameSeq = [];
let userSeq = [];
let start = false;
document.addEventListener("keypress", function()
{
    if (start==false) 
        {
            console.log("game started");
            start = true;

            levelUp();
        }
}
)

let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");
let level = 0;
let highestScore;
let btns = ["red","yellow","green","purple"];

function levelUp()
{
    userSeq=[];
    level++;
    h3.innerText = `Level ${level}`;

    let rndIdx = Math.floor(Math.random()*4);
    let rndBtn = document.querySelector(`.${btns[rndIdx]}`);
    gameSeq.push(btns[rndIdx]);
    console.log("Game",gameSeq);
    btnFlash(rndBtn);
}

function checkAns(idx)
{
    if (userSeq[idx]===gameSeq[idx]) 
    {
        if (userSeq.length==gameSeq.length) 
        {
            setTimeout(levelUp,1000);                
        }
    } 
    else 
    {
        highestScore = highScore();
        h4.innerHTML=`Highest Score : ${highestScore}`;
        h3.innerHTML=`Game Over! Your score was <b>${level}</b> <br>Please press any key to start the game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function()
        {
            document.querySelector("body").style.backgroundColor="rgb(40, 39, 39)"
        },100)
        reset();   
    }
}

function highScore()
{
    if (highestScore>level) 
    {
        return highestScore;
    } 
    else 
    {
        return level;   
    }
}

function btnFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function()
    {
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function()
    {
        btn.classList.remove("flash");
    },200);
}


let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) 
    {
        btn.addEventListener("click", btnPressed);
    }

function btnPressed()
{
    if (start==true) 
    {   
        let btn = this;
        userFlash(btn);

        userColor = btn.getAttribute("id"); //like this it is declared globally if used let then it follows block scope
        userSeq.push(userColor);
        console.log("User",userSeq);
        
        checkAns(userSeq.length-1);
    }
}


function reset()
{
    start = false;
    gameSeq=[];
    userSeq=[];
    level=0;
}



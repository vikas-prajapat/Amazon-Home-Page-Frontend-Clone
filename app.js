let gameSeq=[];
let userSeq=[];
let started=false;
let highScore=0;
let btns=['yellow','red','green','purple'];

let level=0;
let h2=document.querySelector('h2');
let h3=document.querySelector('h3');
document.addEventListener('keypress',function() {
    if(started==false){
        console.log('game started');
        started=true;
        levelup();
        
    }
    
})
function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove('gameflash');

    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove('userflash');

    },250);
}
function levelup(){
    userSeq=[];
    level++;

    h2.innerText=`level ${level}`;
    let randomIdx=Math.floor(Math.random()*3);
    let randColor=btns[randomIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);

    gameFlash(randBtn);
    if (level>highScore){
        highScore==level;
        h3.innerText=`Highest sore is ${highScore}`;
    }
    



}
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`Game Over !Your score was <b>${level}</b> <br>  Press any key to start.`;
        
        
        reset();
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor='white';
        },150);

        
    }
}


function btnPress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute('id');
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
};
let allBtns=document.querySelectorAll('.btn');
for (btn of allBtns){
    btn.addEventListener('click',btnPress);
}
function reset(){
   
    started=false;
    gameSeq=[];
    userSeq=[];
    if ( level>highScore){
        highScore=level;
        h3.innerText=`Highest score is ${highScore}`
    }
    level=0;

};


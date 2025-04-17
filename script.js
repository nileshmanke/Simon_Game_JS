

let color=["red","blue","green", "yellow"];
let gamePattern=[];
let UserPattern=[];

let isStarted=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",()=>{

    if(isStarted==false){
        isStarted=true;
      levelUP();




    }

  

})

function levelUP(){
UserPattern=[];

    level++;
    h2.innerText=`Level :${level}`;
    let randInd=Math.floor(Math.random() * 4);
    let randColor=color[randInd];

    gamePattern.push(randColor);

    console.log(gamePattern);

    let randBtn=document.querySelector(`.${randColor}`);

    btnFlash(randBtn);





    
}


function btnFlash(btn){
 
btn.classList.add("flash");

setTimeout(()=>{
    btn.classList.remove("flash");
},500)

}

function UserbtnFlash(btn){

    btn.classList.add("userflash");
    
    setTimeout(()=>{
        btn.classList.remove("userflash");
    },500)
    
    }

    function check(ind){
        console.log(level);
       
if(gamePattern[ind] == UserPattern[ind]){
    if(gamePattern.length == UserPattern.length){

        setTimeout(() => {
            levelUP();
        }, 1000);

    }


}else{
    h2.innerHTML=`game Over.!. Your Score is <b>${level}</b>  <br> Press any key to start`;
    playSound2();
    let body= document.querySelector("body");
   body.classList.add("danger");

   setTimeout(()=>{
    body.classList.remove("danger");
   },500)

    reset();

}

    }


function reset(){

    isStarted=false;
    level=0;
    gamePattern=[];
    UserPattern=[];

   

}

function btnPress(){
    // console.log(this);
    playSound();
    let btn=this;
    UserbtnFlash(btn);
let usercolor=btn.getAttribute("id");
console.log(usercolor);
UserPattern.push(usercolor);
 check(UserPattern.length-1);

}

let allBtn=document.querySelectorAll(".box");

for(btn of allBtn){
 btn.addEventListener("click",btnPress)


}

function playSound(){

    let audio = new Audio("sound.wav");
    audio.play();
}

function playSound2(){

    let audio = new Audio("sound2.mp3");
    audio.play();
}
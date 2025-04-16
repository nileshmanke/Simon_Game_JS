

let color=["red","blue ","green", "yellow"];
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
    let randInd=Math.floor(Math.random() * 3);
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
    h2.innerText=`game Over.. Press any key to start`;

    reset();

}

    }


function reset(){

    isStarted=false;
    level=0;
    gamePattern=[];
    UserPattern=[];

   let body= document.querySelector("body");
   body.classList.add("danger");

   setTimeout(()=>{
    body.classList.remove("danger");
   },500)

}

function btnPress(){
    console.log(this);
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


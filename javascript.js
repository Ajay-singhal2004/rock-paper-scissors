let userscore=0
let compscore=0
let userscorePara=document.querySelector("#your")
let compscorepara=document.querySelector("#comp")
let choices=document.querySelectorAll(".choice")
let msg=document.querySelector("#play")


//user chose
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id")   
        playgame(userchoice);
        let compchoice=gencompchoice()  
        console.log("comp chose",compchoice)     
        if(userchoice===compchoice){
            drow();
        }
        else{
            let userwin=true;
            if(userchoice==="paper"){
                userwin=compchoice==="scisser"?false:true
            }
            if(userchoice==="rock"){
                userwin=compchoice==="paper"?false:true
            }else{
                userwin=compchoice==="rock"?false:true
            }showwinner(userwin)
        }
    })
})
//playgame function
const playgame=(userchoice)=>{
    console.log("you chose", userchoice)
}
//comp choice
const gencompchoice=()=>{
    let option=["rock","paper","scisser"]
    let idx=(Math.floor(Math.random()*3))
    return option[idx]  
}
//drow function
const drow=()=>{
    console.log("drow")
    msg.innerText=`drow`
}
//show winner
const showwinner=(userwin)=>{
    if(userwin){
        console.log("you win!")
        userscore++;
        userscorePara.innerText=userscore
        msg.innerText=`you win!`
    }else{
        console.log("you lose!")
        compscore++;
        compscorepara.innerText=compscore
        msg.innerText=`you lose`
    }

}
msg.addEventListener("click",()=>{
    userscorePara.innerText="0"
    compscorepara.innerText="0"
})

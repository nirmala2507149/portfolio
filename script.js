console.log("javascript is connnected");


let year=new Date().getFullYear();
document.querySelector(".site-footer p").innerHTML=
`&copy; ${year} Nirmala.All rights reserved`

function getGreeting() {
    const hour=new Date().getHours();
    if (hour<12) return"Good Morning";
    if (hour<17) return"Good Afternoon";
    return "Good Evening"
} 
let hero=document.querySelector(".hero-section h1")
if(hero){
    hero.textContent=`${getGreeting()}, I'm Nirmala 👋`
}

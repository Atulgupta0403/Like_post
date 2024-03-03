let cont = document.querySelector(".container");
let love = document.querySelector("i");

cont.addEventListener("dblclick",()=>{
    love.style.opacity = "1";
    love.style.transform = "scale(1)";
    setTimeout(()=>{
        love.style.opacity = "0";
        // love.style.transform = "scale(0)";
    },1800)
    setTimeout(()=>{
        // love.style.opacity = "0";
        love.style.transform = " translateY(-220%)";
        
    },1800)
})
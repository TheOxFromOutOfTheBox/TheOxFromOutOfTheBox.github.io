const colors = ["green", "red", "rgba(133,122,200)", "#abcdef"];
const btn=document.getElementById("btn")
const color=document.querySelector(".color")

btn.addEventListener("click",function(){
    max=colors.length
    const randomNum=(Math.floor(Math.random()*max))
    document.body.style.backgroundColor=colors[randomNum]
    color.textContent=colors[randomNum]
})


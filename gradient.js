var color1=document.querySelector(".color1")
var color2=document.querySelector(".color2")
var btnright=document.getElementById("btnright")
var btnleft=document.getElementById("btnleft")
var btntop=document.getElementById("btntop")
var btnbottom=document.getElementById("btnbottom")
var btnradial=document.getElementById("btnradial")
var body=document.querySelector(".change")
const colorone=document.querySelector(".colorone")
const colortwo=document.querySelector(".colortwo")
var linOrRad="linear-gradient"
var btntype="right"

function changeGradientLeft(){
    linOrRad="linear-gradient"
    btntype="left"
    var thebtnvalue=btnleft.value
    body.style.background=`linear-gradient(${thebtnvalue},${color1.value},${color2.value})`
    // "linear-gradient(to right,"+color1+","+color2+");"
    colorone.textContent=color1.value
    colortwo.textContent=color2.value
    css.textContent=body.style.background+";"
}
function changeGradientRight(){
    linOrRad="linear-gradient"
    btntype="right"
    var thebtnvalue=btnright.value
    body.style.background=`linear-gradient(${thebtnvalue},${color1.value},${color2.value})`
    // "linear-gradient(to right,"+color1+","+color2+");"
    colorone.textContent=color1.value
    colortwo.textContent=color2.value
    css.textContent=body.style.background+";"

}
function changeGradientTop(){
    linOrRad="linear-gradient"
    btntype="top"
    var thebtnvalue=btntop.value
    body.style.background=`linear-gradient(${thebtnvalue},${color1.value},${color2.value})`
    // "linear-gradient(to right,"+color1+","+color2+");"
    colorone.textContent=color1.value
    colortwo.textContent=color2.value
    css.textContent=body.style.background+";"

}
function changeGradientBottom(){
    linOrRad="linear-gradient"
    btntype="bottom"
    var thebtnvalue=btnbottom.value
    body.style.background=`linear-gradient(${thebtnvalue},${color1.value},${color2.value})`
    // "linear-gradient(to right,"+color1+","+color2+");"
    colorone.textContent=color1.value
    colortwo.textContent=color2.value
    css.textContent=body.style.background+";"

}
function changeGradientRadial(){
    // var thebtnvalue=getGradientValue()
    linOrRad="radial-gradient"
    body.style.background=`radial-gradient(${color1.value},${color2.value})`
    // "linear-gradient(to right,"+color1+","+color2+");"
    colorone.textContent=color1.value
    colortwo.textContent=color2.value
    css.textContent=body.style.background+";"
}
function changeGradient(){
    switch(btntype){
        case "left":
            thebtnvalue=btnleft.value
            break
        case "right":
            thebtnvalue=btnright.value
            break
        case "top":
            thebtnvalue=btntop.value
            break
        case "bottom":
            thebtnvalue=btnbottom.value
            break
    }
    if(linOrRad==="linear-gradient"){
        body.style.background=`linear-gradient(${thebtnvalue},${color1.value},${color2.value})`
    }
    else{
        body.style.background=`${linOrRad}(${color1.value},${color2.value})`
    }
    // "linear-gradient(to right,"+color1+","+color2+");"
    colorone.textContent=color1.value
    colortwo.textContent=color2.value
    css.textContent=body.style.background+";"
}
btnleft.addEventListener("click",changeGradientLeft)
btnright.addEventListener("click",changeGradientRight)
btnbottom.addEventListener("click",changeGradientBottom)
btntop.addEventListener("click",changeGradientTop)
btnradial.addEventListener("click",changeGradientRadial)
color1.addEventListener("input",changeGradient)
color2.addEventListener("input",changeGradient)
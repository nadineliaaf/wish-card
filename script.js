let opened=false

function toggleLetter(){

const envelope=document.querySelector(".envelope")
const music=document.getElementById("music")

opened=!opened

if(opened){

envelope.classList.add("open")
music.play()

startHearts()
confettiBurst()

}else{

envelope.classList.remove("open")
music.pause()
music.currentTime=0

}

}

function startHearts(){

setInterval(()=>{

let heart=document.createElement("div")

heart.classList.add("heart")
heart.innerHTML="💖"

heart.style.left=Math.random()*100+"vw"
heart.style.fontSize=(Math.random()*20+10)+"px"

document.body.appendChild(heart)

setTimeout(()=>{
heart.remove()
},6000)

},500)

}

function confettiBurst(){

for(let i=0;i<120;i++){

let conf=document.createElement("div")

conf.classList.add("confetti")

conf.style.left=Math.random()*100+"vw"
conf.style.top=Math.random()*-100+"px"

conf.style.backgroundColor=
"hsl("+Math.random()*360+",100%,60%)"

document.body.appendChild(conf)

setTimeout(()=>{
conf.remove()
},3000)

}

}


let resultOne=document.getElementById("one");
let resulttwo=document.getElementById("two");
let firstBtn=document.getElementById("first_btn");
let SecondBtn=document.getElementById("second_btn");

firstBtn.addEventListener("click", func) 
function func() {
    
fetch("https://random.dog/woof.json").then(
    (res)=>res.json()
    ).then(
        (res1)=>{
        if(res1.url.includes(".mp4")){
            func()
            }else{resultOne.innerHTML=`<img class="image" src="${res1.url}">`}}
           )
}


SecondBtn.addEventListener("click",funct)
function funct() {
    
    fetch("https://randomfox.ca/floof/").then(
        res=>res.json()
    ).then(
        (res1)=>{if(res1.image.includes(".mp4")){funct()}else{resulttwo.innerHTML=`<img class="image" src="${res1.image}"/>`}}
    
    )
}
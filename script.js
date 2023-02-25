const refreshbtn = document.getElementById("refresh") ;



refreshbtn.addEventListener('click',generatePallete);

function generatePallete(){
    document.querySelector(".container").innerHTML = ""
    for(let i = 0 ; i< 32 ; i++){
        let randomHex = Math.floor(Math.random()*0xffffff).toString(16) ;
        randomHex = `#${randomHex}` ;
        console.log(randomHex) ;
        const color = document.createElement("li") ;
        color.classList.add("color") ;
        color.innerHTML=`<div class="rect-box" style="background:${randomHex}"> </div>  
        <span class="hex-value">${randomHex}</span>
   `
        color.addEventListener("click", () => a(color, randomHex))
    document.querySelector(".container").appendChild(color) ;
    }
}
function a(color, randomHex){
    let spanEl = color.querySelector(".hex-value");
    navigator.clipboard.writeText(randomHex).then(()=>{
        spanEl.innerText = "Copied";
    })

}
generatePallete();

function qrcode(value){
const url="https://api.qrserver.com/v1/create-qr-code/?data="+value+"&amp;size=100x100"

document.querySelector(".card").classList.remove("nothing")
document.querySelector(".qr").src=url
document.querySelector(".heading").innerText= "Your QR code is Ready!!"
document.querySelector(".h3").classList.remove("none")
document.querySelector(".down").classList.remove("none")
document.querySelector(".qr").classList.remove("none")
console.log(url);

document.querySelector(".down").addEventListener("click", () =>{
  console.log(url)
   document.querySelector(".down").href=url;

})

}




function start(){


document.querySelector(".btn").addEventListener("click",function(){
  search()
})

document.addEventListener("keyup",function(event){
  if(event.key==="Enter")
  search()
})
}


function search(){
  val=''
  var val=document.querySelector(".search-box").value
  qrcode(val)

}

start()

let btn= document.querySelector("#bar");
let sld_nav=document.querySelector(".slide_nav")



btn.addEventListener("click",()=>{
    sld_nav.classList.toggle("slide_nav");
    sld_nav.style=fontSize="3.5rem" ;
});
let livebtn=document.querySelector("#livebtn");
livebtn.addEventListener(("click"),()=>{
    open("https://hariomshukla03.github.io/MovieMagnet/")
})


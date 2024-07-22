//////////////////////////// new method

// variables
const slide = document.querySelectorAll(".slider");
const dot = document.getElementById("dots");
let input = document.querySelectorAll("input");
var counter = 0;
let div = document.getElementById("container");
slide[0].classList.add("scale");
// functions
slide.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
})
function currentSlide(e) {
    counter = e - 1;
    slidemg();
    fun()
}
function go() {
    if (counter >= 3) {
        counter = 3;
    }
    else {
        counter++
    }
    slidemg();
    fun()
}
function prev() {
    if (counter <= 0) {
        counter = 0;
    }
    else {
        counter--
    }
    slidemg();
    fun()
}
const fun = () =>{
    input.forEach((input,index)=>{
        console.log(counter)
        if(counter == index){
            input.checked = true;
        }
    })
}
    
const slidemg = () => {
    slide[0].classList.remove("scale");
    slide.forEach((slide, index) => {
        slide.style.transform = `translateX(-${counter * 100}%`
        if (index === counter) {
            slide.style.transform += ' scale(1.2)'; // Scale up the center image
            slide.style.transition = 'transform 0.5s'; // Smooth transition
            slide.style.opacity = "1";
            slide.style.zIndex = "2"
            slide.style.boxShadow = " 1px 1px 10px rgba(0,0,0,0.5)";
        } else {
            slide.style.transform += ' scale(0.8)'; // Scale down the other images
            slide.style.transition = 'transform 0.5s'; // Smooth transition
            slide.style.zIndex = "-2"
            slide.style.boxShadow = "none";
            slide.style.opacity = "0.7";
        }
    })
}



document.addEventListener("keydown", function (e) {
    if (e.key == "ArrowRight") {
        go();
    }
    else if (e.key === 'ArrowLeft') {
        prev();

    }
})








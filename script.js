let filterBlur = document.getElementById("blur"),
    filterContrast = document.getElementById("contrast"),
    filterHue = document.getElementById("hue-rotate"),
    filterSepia = document.getElementById("sepia");

let noFlip = document.getElementById("no-flip"),
    flipHorizontal = document.getElementById("flip-x"),
    flipVertical = document.getElementById("flip-y");

let uploadButton = document.getElementById("upload-button"),
    image = document.getElementById("chosen-image");

const resetFilter = ()=>{
    filterBlur.value = "0",
    filterContrast.value = "100",
    filterHue.value = "0",
    filterSepia.value = "0",
    noFlip.checked = true;

    addFilter();
    flipİmage()
}

uploadButton.onchange = () =>{
    resetFilter()
    document.querySelector(".image-container").style.display = "block";
    let reader = new FileReader();
    console.log(reader)
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = ()=>{
        image.setAttribute("src",reader.result);
    }
}


let sliders = document.querySelectorAll(".filter input[type='range']")
// console.log(sliders)

const addFilter = ()=>{
    image.style.filter=
    `blur(${filterBlur.value}px)
    contrast(${filterContrast.value}%)
    hue-rotate(${filterHue.value}deg)
    sepia(${filterSepia.value}%)
    `
    console.log(image.style.filter)
}

sliders.forEach(slider =>{
    slider.addEventListener("input", addFilter)})


let radioBtns = document.querySelectorAll(".flip-option input[type='radio']")

const flipİmage = ()=>{
    if(flipHorizontal.checked){
        image.style.transform = "scaleX(-1)";
    }
    else if(flipVertical.checked){
        image.style.transform = "scaleY(-1)"
    }
    else{
        image.style.transform = "scale(1,1)"
    }
}

radioBtns.forEach(radioBtn =>{
    radioBtn.addEventListener("click",flipİmage)
})
// Sliders
let hue_text = document.getElementById("hue")
let sat_text = document.getElementById("saturation")
let light_text = document.getElementById("lightness")
let alpha_text = document.getElementById("alpha")
let top_bar_background = document.getElementById("top-bar-background")

hue_text.innerText = document.getElementsByName("hue")[0].value
sat_text.innerText = document.getElementsByName("saturation")[0].value
light_text.innerText = document.getElementsByName("lightness")[0].value
alpha_text.innerText = document.getElementsByName("alpha")[0].value

hue_text.innerText+sat_text.innerText+light_text.innerText+alpha_text.innerText

document.getElementsByName("hue")[0].oninput = function(){
    hue_text.innerText = this.value
    top_bar_background.style.backgroundColor = "hsla("+hue_text.innerText+","+sat_text.innerText+"%,"+light_text.innerText+"%,"+alpha_text.innerText+")"
}
document.getElementsByName("saturation")[0].oninput = function(){
    sat_text.innerText = this.value
    top_bar_background.style.backgroundColor = "hsla("+hue_text.innerText+","+sat_text.innerText+"%,"+light_text.innerText+"%,"+alpha_text.innerText+")"
}
document.getElementsByName("lightness")[0].oninput = function(){
    light_text.innerText = this.value
    top_bar_background.style.backgroundColor = "hsla("+hue_text.innerText+","+sat_text.innerText+"%,"+light_text.innerText+"%,"+alpha_text.innerText+")"
}
document.getElementsByName("alpha")[0].oninput = function(){
    alpha_text.innerText = this.value
    top_bar_background.style.backgroundColor = "hsla("+hue_text.innerText+","+sat_text.innerText+"%,"+light_text.innerText+"%,"+alpha_text.innerText+")"
}
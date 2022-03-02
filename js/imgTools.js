//書記か？
window.addEventListener('DOMcontentLoaded', codeGenerator, false);

//grayscale
const grayscale = document.getElementById("grayscale");
let grayscaleCode = "";

grayscale.addEventListener('change', function() {
    if(grayscale.checked){
        grayscaleCode = "grayscale ";
    }else{
        grayscaleCode = "";
    }
    codeGenerator();
}, false);

//invert
const invert = document.getElementById("invert");
let invertCode = "";

invert.addEventListener('change', function() {
    if(invert.checked){
        invertCode = "invert ";
    }else{
        invertCode = "";
    }
    codeGenerator();
}, false);

//sepia
const sepia = document.getElementById("sepia");
let sepiaCode = "";

sepia.addEventListener('change', function() {
    if(sepia.checked){
        sepiaCode = "sepia ";
    }else{
        sepiaCode = "";
    }
    codeGenerator();
}, false);

//blur
const blurList = ["None", "sm", "md", "lg", "xl", "2xl", "3xl"];

const blur = document.getElementById("blur");
const blurClass = "blur-";
let blurCode = "";

blur.addEventListener('input', function() {
    blurCode = giveClass(blurList[blur.value], blurClass);
    document.getElementById("blurValue").innerHTML = blurList[blur.value];
    codeGenerator();
}, false);

//brightness
const brightnessList = [0, 50, 75, 90, 95, 100, 105, 110, 125, 150, 200];

const brightness = document.getElementById("brightness");
const brightnessClass = "brightness-";
let brightnessCode = "";

brightness.addEventListener('input', function() {
    brightnessCode = giveClass(brightnessList[brightness.value], brightnessClass);
    document.getElementById("brightnessValue").innerHTML = brightnessList[brightness.value];
    codeGenerator();
}, false);

//contrast
const contrastList = [0, 50, 75, 100, 125, 150, 200];

const contrast = document.getElementById("contrast");
const contrastClass = "contrast-";
let contrastCode = "";

contrast.addEventListener('input', function() {
    contrastCode = giveClass(contrastList[contrast.value], contrastClass);
    document.getElementById("contrastValue").innerHTML = contrastList[contrast.value];
    codeGenerator();
}, false);

//dropShadow
const dropShadowList = ["Auto", "sm", "md", "lg", "xl", "2xl"];

const dropShadow = document.getElementById("dropShadow");
const dropShadowClass = "drop-shadow-";
let dropShadowCode = "";

dropShadow.addEventListener('input', function() {
    dropShadowCode = giveClass(dropShadowList[dropShadow.value], dropShadowClass);
    document.getElementById("dropShadowValue").innerHTML = dropShadowList[dropShadow.value];
    codeGenerator();
}, false);

//hueRotate
const hueRotateList = [0, 15, 30, 60, 90, 180];

const hueRotate = document.getElementById("hueRotate");
const hueRotateClass = "hue-rotate-";
let hueRotateCode = "";

hueRotate.addEventListener('input', function() {
    hueRotateCode = giveClass(hueRotateList[hueRotate.value], hueRotateClass);
    document.getElementById("hueRotateValue").innerHTML = hueRotateList[hueRotate.value];
    codeGenerator();
}, false);

//saturate
const saturateList = [0, 50, 100, 150, 200];

const saturate = document.getElementById("saturate");
const saturateClass = "saturate-";
let saturateCode = "";

saturate.addEventListener('input', function() {
    saturateCode = giveClass(saturateList[saturate.value], saturateClass);
    document.getElementById("saturateValue").innerHTML = saturateList[saturate.value];
    codeGenerator();
}, false);

//クラス付与
function giveClass(parameter, className) {
    if (parameter == "Auto") {
        return "";
    } else if (parameter == "None"){
        return "";
    } else if (parameter == 0){
        return "";
    }else{
        return className + parameter + ' ';
    }
};

//コードsay!say!器
function codeGenerator() {
    const codeGeneration = '<img src="img/ここに画像の名前を入力してね.jpg" class="' + grayscaleCode + invertCode + sepiaCode + blurCode + brightnessCode + contrastCode + dropShadowCode + hueRotateCode + saturateCode +'"></img>'
    document.getElementById("codeBlock").innerHTML = codeGeneration;
    document.getElementById("previewBlock").innerHTML = codeGeneration;
};

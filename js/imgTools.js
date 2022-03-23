//初期化
window.addEventListener('DOMcontentLoaded', codeGenerator, false);

//size
const sizeList = ["1/4", "2/4", "3/4", "None"];
const sizeValueList = ["25%", "50%", "75%", "100%"];

const size = document.getElementById("size");
const wClass = "w-";
let wCode = "";

size.addEventListener('input', function() {
    wCode = giveClass(sizeList[size.value], wClass);
    document.getElementById("sizeValue").innerHTML = sizeValueList[size.value];
    codeGenerator();
}, false);


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
const brightnessList = [50, 75, 90, 95, 0, 105, 110, 125, 150, 200];
const brightnessValueList = [-4, -3, -2, -1, 0, "+1", "+2", "+3", "+4", "+5"];

const brightness = document.getElementById("brightness");
const brightnessClass = "brightness-";
let brightnessCode = "";

brightness.addEventListener('input', function() {
    brightnessCode = giveClass(brightnessList[brightness.value], brightnessClass);
    document.getElementById("brightnessValue").innerHTML = brightnessValueList[brightness.value];
    codeGenerator();
}, false);

//contrast
const contrastList = ["None", 50, 75, 100, 125, 150, 200];

const contrast = document.getElementById("contrast");
const contrastClass = "contrast-";
let contrastCode = "";

contrast.addEventListener('input', function() {
    contrastCode = giveClass(contrastList[contrast.value], contrastClass);
    document.getElementById("contrastValue").innerHTML = contrastList[contrast.value];
    codeGenerator();
}, false);

//dropShadow
const dropShadowList = ["None", "sm", "md", "lg", "xl", "2xl"];

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
const saturateList = ["None", 50, 100, 150, 200];

const saturate = document.getElementById("saturate");
const saturateClass = "saturate-";
let saturateCode = "";

saturate.addEventListener('input', function() {
    saturateCode = giveClass(saturateList[saturate.value], saturateClass);
    document.getElementById("saturateValue").innerHTML = saturateList[saturate.value];
    codeGenerator();
}, false);

//opacity
const opacityList = ["None", 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100];

const opacity = document.getElementById("opacity");
const opacityClass = "opacity-";
let opacityCode = "";

opacity.addEventListener('input', function() {
    opacityCode = giveClass(opacityList[opacity.value], opacityClass);
    document.getElementById("opacityValue").innerHTML = opacityList[opacity.value];
    codeGenerator();
}, false);

//文字の配置(横)
const textAlignX = document.getElementById("textAlignXValue");
let textAlignXCode = "";

textAlignX.addEventListener('input', function() {
    textAlignXCode = giveClass(textAlignX.value, "");
    codeGenerator();
}, false);


//文字の配置(縦)
const textAlignY = document.getElementById("textAlignYValue");
let textAlignYCode = "";

textAlignY.addEventListener('input', function() {
    textAlignYCode = giveClass(textAlignY.value, "");
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

//コード生成器
function codeGenerator() {
    const codeGeneration = '<img src="img/ここに画像の名前を入力してね.jpg" class="' + wCode + grayscaleCode + invertCode + sepiaCode + blurCode + brightnessCode + contrastCode + dropShadowCode + hueRotateCode + saturateCode + opacityCode + textAlignXCode + textAlignYCode + '"></img>'
    document.getElementById("codeBlock").innerHTML = codeGeneration;
    document.getElementById("previewBlock").innerHTML = codeGeneration;
};
